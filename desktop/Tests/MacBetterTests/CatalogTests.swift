import Foundation
import XCTest
@testable import MacBetter

final class CatalogTests: XCTestCase {
    private var website: URL {
        URL(fileURLWithPath: #filePath).deletingLastPathComponent()
            .appendingPathComponent("../../../website").standardizedFileURL
    }

    private func read(_ path: String) throws -> Data {
        try Data(contentsOf: website.appendingPathComponent(path))
    }

    private func publishedInputs() throws -> (Data, [Language: Data], CatalogSnapshot) {
        let stock = try JSONDecoder().decode(CatalogSnapshot.self, from: read("data/desktop-v1.json")).validated()
        return try (read("data/apps.json"), [.en: read("index.md"), .zh: read("zh.md"), .ja: read("ja.md")], stock)
    }

    func testPublishedSourcesMatchBundledCatalogInEveryLanguage() throws {
        let (data, markdown, stock) = try publishedInputs()
        let merged = try CatalogService.mergePublishedDirectory(raw: data, markdown: markdown, baseline: stock)
        XCTAssertEqual(Set(merged.apps.map(\.id)), Set(stock.apps.map(\.id)))
        XCTAssertEqual(merged.essentials, stock.essentials)
        let originals = Dictionary(uniqueKeysWithValues: stock.apps.map { ($0.id, $0) })
        for app in merged.apps {
            let expected = try XCTUnwrap(originals[app.id])
            XCTAssertNotNil(expected.architecture, app.id)
            XCTAssertEqual(app.chipSupport, expected.chipSupport, app.id)
            for language in Language.allCases {
                XCTAssertEqual(app.copy(language).summary, expected.copy(language).summary, "\(app.id) \(language)")
            }
        }
    }

    func testOldCatalogKeepsBundledChipFacts() throws {
        let (data, markdown, stock) = try publishedInputs()
        let decoded = try XCTUnwrap(JSONSerialization.jsonObject(with: data) as? [[String: Any]])
        let old = decoded.map { $0.filter { $0.key != "architecture" } }
        let merged = try CatalogService.mergePublishedDirectory(
            raw: JSONSerialization.data(withJSONObject: old), markdown: markdown, baseline: stock
        )
        XCTAssertEqual(merged.apps.first { $0.id == "ezntfs" }?.chipSupport, .appleSilicon)
        XCTAssertTrue(ChipFilter.appleSilicon.accepts(.intelLegacy))
        XCTAssertFalse(ChipFilter.intel.accepts(.intelLegacy))
        XCTAssertFalse(ChipFilter.appleSilicon.accepts(.rosetta))
        XCTAssertTrue(ChipFilter.intel.accepts(.rosetta))
        XCTAssertFalse(ChipFilter.intel.accepts(.unverified))
    }

    func testPartialReleaseCannotReplaceCatalog() throws {
        let (data, rows, stock) = try publishedInputs()
        var stale = rows
        stale[.ja] = Data("# Stale page\n".utf8)
        XCTAssertThrowsError(try CatalogService.mergePublishedDirectory(raw: data, markdown: stale, baseline: stock))
    }

    func testOfflineFailurePreservesDiskSnapshot() async throws {
        let (_, _, stock) = try publishedInputs()
        let location = FileManager.default.temporaryDirectory
            .appendingPathComponent("MacBetterTests-\(UUID())")
        defer { try? FileManager.default.removeItem(at: location) }
        let configuration = URLSessionConfiguration.ephemeral
        configuration.protocolClasses = [OfflineURLProtocol.self]
        let service = CatalogService(session: URLSession(configuration: configuration),
                                     cacheFile: location.appendingPathComponent("catalog.json"))
        let saved = CatalogCache(snapshot: stock, checkedAt: Date(timeIntervalSince1970: 100), etag: "fixture")
        try service.save(saved)
        do {
            _ = try await service.refresh(previous: saved, baseline: stock)
            XCTFail("Offline requests should fail")
        } catch {
            XCTAssertEqual((error as? URLError)?.code, .notConnectedToInternet)
        }
        XCTAssertEqual(service.cached()?.checkedAt, saved.checkedAt)
        XCTAssertEqual(service.cached()?.snapshot.apps.count, stock.apps.count)
    }

    func testVersionAndRepositoryMatching() throws {
        XCTAssertLessThan(try XCTUnwrap(Version("v1.2.9")), try XCTUnwrap(Version("1.2.10")))
        XCTAssertEqual(Version("1.2"), Version("v1.2.0"))
        XCTAssertNil(Version("v2.0-beta.1"))
        XCTAssertNil(Version("1.9223372036854775808"))
        XCTAssertEqual(ReleaseService.releaseTag(in: URL(string: "https://github.com/iina/iina/releases/tag/v1.4")!,
                                                 repository: "iina/IINA"), "v1.4")
        XCTAssertNil(ReleaseService.releaseTag(in: URL(string: "https://github.com/wrong/iina/releases/tag/v1.4")!,
                                               repository: "iina/iina"))
    }
}

private final class OfflineURLProtocol: URLProtocol {
    override class func canInit(with request: URLRequest) -> Bool { true }
    override class func canonicalRequest(for request: URLRequest) -> URLRequest { request }
    override func startLoading() { client?.urlProtocol(self, didFailWithError: URLError(.notConnectedToInternet)) }
    override func stopLoading() {}
}
