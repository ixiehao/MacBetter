import AppKit
import Foundation

struct TrackedApp {
    let id: String
    let bundleID: String
    let repository: String?

    static let all: [Self] = [
        .init(id: "lumaview", bundleID: "com.lumaview.browser", repository: "ixiehao/LumaView"),
        .init(id: "shotmap", bundleID: "com.ixiehao.shotmap", repository: "ixiehao/ShotMap"),
        .init(id: "mp4flow", bundleID: "com.ixiehao.mp4flow", repository: "ixiehao/MP4Flow"),
        .init(id: "any2webp", bundleID: "com.ixiehao.any2webp", repository: nil),
        .init(id: "ezntfs", bundleID: "local.ezntfs.app", repository: "ixiehao/ezNTFS"),
        .init(id: "iina", bundleID: "com.colliderli.iina", repository: "iina/iina"),
        .init(id: "launchpad-back", bundleID: "com.Eric-Yang.Launchpad-Back", repository: "EricYang801/Launchpad_Back"),
        .init(id: "purge", bundleID: "io.getpurge.app", repository: "jithin-sabu/purge-app"),
        .init(id: "macrar", bundleID: "com.mesut.macrar", repository: "mstcvk/MacRAR"),
        .init(id: "firefox", bundleID: "org.mozilla.firefox", repository: nil),
        .init(id: "macshot", bundleID: "com.sw33tlie.macshot.offline", repository: nil),
        .init(id: "imageoptim", bundleID: "net.pornel.ImageOptim", repository: nil),
    ]
}

struct InstalledApp: Identifiable {
    let tracking: TrackedApp
    let locations: [Location]
    var id: String { tracking.id }

    struct Location: Identifiable {
        let url: URL
        let version: String?
        var id: URL { url }
    }
}

@MainActor
enum AppInventory {
    static func scan() -> [InstalledApp] {
        let workspace = NSWorkspace.shared
        let roots = [URL(fileURLWithPath: "/Applications"), FileManager.default.homeDirectoryForCurrentUser.appendingPathComponent("Applications")]
            .map { $0.resolvingSymlinksInPath() }
        let directApps = roots.flatMap { root -> [URL] in
            let children = (try? FileManager.default.contentsOfDirectory(at: root, includingPropertiesForKeys: nil,
                                                                         options: .skipsHiddenFiles)) ?? []
            return children.filter { $0.pathExtension.lowercased() == "app" }
        }
        let indexed = Dictionary(grouping: directApps.compactMap { url -> (String, URL)? in
            guard let identifier = Bundle(url: url)?.bundleIdentifier else { return nil }
            return (identifier, url)
        }, by: { $0.0 })
        return TrackedApp.all.compactMap { app in
            let registered = workspace.urlsForApplications(withBundleIdentifier: app.bundleID)
            let paths = Set((registered + (indexed[app.bundleID] ?? []).map(\.1)).map { $0.resolvingSymlinksInPath() })
            let locations = paths.sorted { $0.path < $1.path }.compactMap { url -> InstalledApp.Location? in
                let path = url.path
                guard url.isFileURL, url.pathExtension.lowercased() == "app",
                      roots.contains(where: { path.hasPrefix($0.path + "/") }),
                      let bundle = Bundle(url: url), bundle.bundleIdentifier == app.bundleID,
                      let executable = bundle.executableURL, FileManager.default.isExecutableFile(atPath: executable.path) else { return nil }
                let version = bundle.object(forInfoDictionaryKey: "CFBundleShortVersionString") as? String
                return InstalledApp.Location(url: url, version: version)
            }
            return locations.isEmpty ? nil : InstalledApp(tracking: app, locations: locations)
        }
    }
}

struct Version: Comparable {
    private let parts: [Int]

    init?(_ value: String) {
        let trimmed = value.trimmingCharacters(in: .whitespacesAndNewlines)
        let raw = trimmed.lowercased().hasPrefix("v") ? String(trimmed.dropFirst()) : trimmed
        guard raw.range(of: #"^[0-9]+(\.[0-9]+){0,3}$"#, options: .regularExpression) != nil else { return nil }
        let numbers = raw.split(separator: ".").compactMap { Int($0) }
        guard numbers.count == raw.split(separator: ".").count else { return nil }
        parts = numbers + Array(repeating: 0, count: 4 - numbers.count)
    }

    static func < (lhs: Version, rhs: Version) -> Bool {
        lhs.parts.lexicographicallyPrecedes(rhs.parts)
    }
}

struct ReleaseRecord: Codable {
    let tag: String
    let url: URL
    let date: Date
}

enum ReleaseProblem: Error {
    case limited, unavailable, noStable, unknownTag
}

@MainActor
final class ReleaseService {
    private struct Cache: Codable {
        var blockedUntil: Date?
        var records: [String: ReleaseRecord] = [:]
    }

    let session: URLSession
    let cacheFile: URL
    private var cache = Cache()

    init(session: URLSession = publicSession(), cacheFile: URL) {
        self.session = session
        self.cacheFile = cacheFile
        if let data = try? Data(contentsOf: cacheFile), let decoded = try? JSONDecoder().decode(Cache.self, from: data) {
            cache = decoded
        }
    }

    func lastKnown(_ repository: String) -> ReleaseRecord? {
        guard let record = cache.records[repository],
              Self.releaseTag(in: record.url, repository: repository) == record.tag else { return nil }
        return record
    }

    func check(_ repository: String, force: Bool) async throws -> ReleaseRecord {
        if !force, let previous = lastKnown(repository), Date().timeIntervalSince(previous.date) < 21_600 { return previous }
        let upstream = URL(string: "https://github.com/\(repository)/releases/latest")!
        var head = URLRequest(url: upstream)
        head.httpMethod = "HEAD"
        if let (_, response) = try? await session.data(for: head),
           let http = response as? HTTPURLResponse, http.url == upstream,
           [301, 302, 303, 307, 308].contains(http.statusCode),
           let location = http.value(forHTTPHeaderField: "Location"),
           let url = secureURL(location) {
            if let tag = Self.releaseTag(in: url, repository: repository), Version(tag) != nil {
                return remember(.init(tag: tag, url: url, date: Date()), repository: repository)
            }
            if url.absoluteString.caseInsensitiveCompare("https://github.com/\(repository)/releases") == .orderedSame {
                throw ReleaseProblem.noStable
            }
        }
        try Task.checkCancellation()
        if let until = cache.blockedUntil, until > Date() { throw ReleaseProblem.limited }
        let api = URL(string: "https://api.github.com/repos/\(repository)/releases/latest")!
        var request = URLRequest(url: api)
        request.setValue("application/vnd.github+json", forHTTPHeaderField: "Accept")
        let (data, response) = try await session.data(for: request)
        guard let http = response as? HTTPURLResponse, http.url == api else { throw ReleaseProblem.unavailable }
        if http.statusCode == 429 || http.statusCode == 403 &&
            (http.value(forHTTPHeaderField: "X-RateLimit-Remaining") == "0" || http.value(forHTTPHeaderField: "Retry-After") != nil) {
            let retry = http.value(forHTTPHeaderField: "Retry-After").flatMap(Double.init).map { Date().addingTimeInterval(max(60, $0)) }
            let reset = http.value(forHTTPHeaderField: "X-RateLimit-Reset").flatMap(Double.init).map(Date.init(timeIntervalSince1970:))
            cache.blockedUntil = max(Date().addingTimeInterval(60), retry ?? reset ?? Date().addingTimeInterval(300))
            persist()
            throw ReleaseProblem.limited
        }
        if http.statusCode == 404 { throw ReleaseProblem.noStable }
        guard http.statusCode == 200, data.count < 2_000_000 else { throw ReleaseProblem.unavailable }

        struct Response: Decodable {
            let tag_name: String
            let html_url: String
            let draft: Bool
            let prerelease: Bool
        }

        let release = try JSONDecoder().decode(Response.self, from: data)
        guard !release.draft, !release.prerelease else { throw ReleaseProblem.noStable }
        guard Version(release.tag_name) != nil, let url = secureURL(release.html_url),
              Self.releaseTag(in: url, repository: repository) == release.tag_name else { throw ReleaseProblem.unknownTag }
        return remember(.init(tag: release.tag_name, url: url, date: Date()), repository: repository)
    }

    nonisolated static func releaseTag(in url: URL, repository: String) -> String? {
        guard url.scheme == "https", url.host == "github.com", url.port == nil,
              url.user == nil, url.password == nil, url.query == nil, url.fragment == nil else { return nil }
        let path = url.pathComponents.dropFirst()
        guard path.count == 5, path.prefix(2).joined(separator: "/").caseInsensitiveCompare(repository) == .orderedSame,
              Array(path.dropFirst(2).prefix(2)) == ["releases", "tag"], let tag = path.last else { return nil }
        return tag
    }

    private func remember(_ record: ReleaseRecord, repository: String) -> ReleaseRecord {
        cache.records[repository] = record
        persist()
        return record
    }

    private func persist() {
        do {
            try FileManager.default.createDirectory(at: cacheFile.deletingLastPathComponent(), withIntermediateDirectories: true)
            try JSONEncoder().encode(cache).write(to: cacheFile, options: .atomic)
        } catch {
            NSLog("MacBetter could not persist its release cache.")
        }
    }
}
