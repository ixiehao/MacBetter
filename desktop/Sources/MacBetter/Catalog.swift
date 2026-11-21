import Foundation

enum Language: String, Codable, CaseIterable {
    case en, zh, ja

    var locale: Locale {
        Locale(identifier: self == .zh ? "zh-Hans" : rawValue)
    }

    var name: String {
        switch self {
        case .en: "English"
        case .zh: "简体中文"
        case .ja: "日本語"
        }
    }

    static var system: Self {
        for name in Locale.preferredLanguages {
            if let prefix = name.split(separator: "-").first, let language = Self(rawValue: String(prefix)) {
                return language
            }
        }
        return .en
    }
}

struct CatalogCategory: Codable, Identifiable {
    var id: String
    var names: [String: String]

    func title(_ language: Language) -> String { names[language.rawValue] ?? names["en"] ?? id }
}

struct AppCopy: Codable {
    var summary: String
    var recommendation: String?
    var compatibility: String
    var permissions: String
    var tags: [String]?
}

enum ChipFilter: Hashable {
    case all, appleSilicon, intel

    func accepts(_ support: ChipSupport) -> Bool {
        switch self {
        case .all: true
        case .appleSilicon: [.both, .appleSilicon, .intelLegacy].contains(support)
        case .intel: [.both, .intel, .rosetta].contains(support)
        }
    }
}

enum ChipSupport: String, Codable {
    case both, intel, rosetta, browser, unverified
    case appleSilicon = "apple-silicon"
    case intelLegacy = "intel-legacy"

    @MainActor func title(_ model: DesktopModel) -> String {
        switch self {
        case .both: model.text("Apple Silicon + Intel", "Apple Silicon 与 Intel", "Apple Silicon・Intel")
        case .appleSilicon: model.text("Apple Silicon only", "仅 Apple Silicon", "Apple Silicon のみ")
        case .intelLegacy: model.text("Apple Silicon · Intel in older releases", "Apple Silicon · Intel 用旧版", "Apple Silicon · Intel は旧版")
        case .intel: model.text("Intel build", "Intel 版", "Intel 版")
        case .rosetta: model.text("Intel · Apple Silicon via Rosetta", "Intel · Apple Silicon 需 Rosetta", "Intel · Apple Silicon は Rosetta 経由")
        case .browser: model.text("Depends on the browser", "取决于浏览器", "ブラウザーの対応環境に準拠")
        case .unverified: model.text("Chip support unverified", "芯片支持待核实", "対応チップ未確認")
        }
    }
}

struct CatalogApp: Codable, Identifiable {
    struct Status: Codable { let level: String }
    struct Architecture: Codable {
        let support: ChipSupport
        let source: String
    }
    struct Preview: Codable {
        let image: String
        let source: String
        let images: [String: String]?

        func url(_ language: Language) -> URL? { secureURL(images?[language.rawValue] ?? image) }
    }

    let id: String
    let name: String
    let category: String
    let categories: [String]
    let tags: [String]
    let license: String
    let status: Status
    let homepage: String
    let github: String
    let download: String
    let icon: String
    var iconHash: String?
    let summary: String
    let recommendation: String
    let compatibility: String
    let permissions: String
    let preview: Preview?
    let sortOrder: Int
    var architecture: Architecture?
    var translations: [String: AppCopy]?

    var tested: Bool { status.level == "tested" }
    var chipSupport: ChipSupport { architecture?.support ?? .unverified }

    func copy(_ language: Language) -> AppCopy {
        translations?[language.rawValue] ?? AppCopy(
            summary: summary, recommendation: recommendation, compatibility: compatibility,
            permissions: permissions, tags: tags
        )
    }

    var iconURL: URL? {
        let file = icon.split(separator: "/").last.map(String.init) ?? ""
        guard icon == "assets/icons/" + file,
              file.range(of: #"^[A-Za-z0-9][A-Za-z0-9._-]*\.(svg|png|jpe?g)$"#, options: .regularExpression) != nil else {
            return nil
        }
        let url = CatalogService.site.appendingPathComponent(icon)
        guard let iconHash, iconHash.range(of: "^[a-f0-9]{64}$", options: .regularExpression) != nil else { return url }
        return url.appending(queryItems: [URLQueryItem(name: "v", value: iconHash)])
    }

    func matches(_ query: String, categoryTitle: String, language: Language) -> Bool {
        let text = copy(language)
        return ([name, categoryTitle, text.summary, text.recommendation ?? "", license] + (text.tags ?? []))
            .contains { $0.localizedStandardContains(query) }
    }
}

func secureURL(_ value: String) -> URL? {
    guard let url = URL(string: value),
          url.scheme?.lowercased() == "https", url.host != nil,
          url.user == nil, url.password == nil else { return nil }
    return url
}

struct CatalogSnapshot: Codable {
    let schemaVersion: Int
    let essentials: [String]
    let categories: [CatalogCategory]
    let apps: [CatalogApp]

    func withFallbackArchitectures(from earlier: Self) -> Self {
        let previous = Dictionary(uniqueKeysWithValues: earlier.apps.map { ($0.id, $0) })
        let enriched = apps.map { app in
            guard app.architecture == nil, let old = previous[app.id], old.github == app.github else { return app }
            var enrichedApp = app
            enrichedApp.architecture = old.architecture
            return enrichedApp
        }
        return Self(schemaVersion: schemaVersion, essentials: essentials, categories: categories, apps: enriched)
    }

    func validated() throws -> Self {
        let ids = Set(apps.map(\.id))
        let categoryIDs = Set(categories.map(\.id))
        let languages = Language.allCases.map(\.rawValue)
        guard schemaVersion == 1, !apps.isEmpty, ids.count == apps.count,
              Set(essentials).count == essentials.count, Set(essentials).isSubset(of: ids),
              !categories.isEmpty, categoryIDs.count == categories.count,
              categories.allSatisfy({ Set(languages).isSubset(of: Set($0.names.keys)) }),
              apps.allSatisfy({ app in
                  !app.name.isEmpty && app.iconURL != nil &&
                  (app.architecture == nil || app.architecture.flatMap({ secureURL($0.source) }) != nil) &&
                  categoryIDs.contains(app.category) && Set(app.categories).isSubset(of: categoryIDs) &&
                  languages.allSatisfy { app.translations?[$0]?.summary.isEmpty == false }
              }) else { throw CatalogError.invalid }
        return self
    }
}

enum CatalogError: Error {
    case invalid, unavailable, missing
}

struct CatalogCache: Codable {
    var snapshot: CatalogSnapshot
    var checkedAt: Date
    var etag: String?
}

struct CatalogService {
    static let site = URL(string: "https://ixiehao.github.io/MacBetter/")!
    static let feed = site.appendingPathComponent("data/desktop-v1.json")
    let session: URLSession
    let cacheFile: URL

    init(session: URLSession = publicSession(), cacheFile: URL? = nil) {
        self.session = session
        self.cacheFile = cacheFile ?? URL.applicationSupportDirectory
            .appendingPathComponent("MacBetter", isDirectory: true)
            .appendingPathComponent("catalog-v1.json")
    }

    func cached() -> CatalogCache? {
        guard let data = try? Data(contentsOf: cacheFile),
              let cache = try? JSONDecoder().decode(CatalogCache.self, from: data),
              (try? cache.snapshot.validated()) != nil else { return nil }
        return cache
    }

    static func bundled() throws -> CatalogSnapshot {
        guard let url = Bundle.main.url(forResource: "desktop-v1", withExtension: "json") else { throw CatalogError.missing }
        return try JSONDecoder().decode(CatalogSnapshot.self, from: Data(contentsOf: url)).validated()
    }

    func refresh(previous: CatalogCache?, baseline: CatalogSnapshot) async throws -> CatalogCache {
        let result = try await fetch(Self.feed, etag: previous?.etag)
        if result.response.statusCode == 304, var previous {
            previous.checkedAt = Date()
            return previous
        }
        if result.response.statusCode == 404 {
            let snapshot = try await publishedDirectory(baseline: baseline)
            return CatalogCache(snapshot: snapshot, checkedAt: Date(), etag: nil)
        }
        guard result.response.statusCode == 200 else { throw CatalogError.unavailable }
        let snapshot = try JSONDecoder().decode(CatalogSnapshot.self, from: result.data).validated()
        return CatalogCache(snapshot: snapshot, checkedAt: Date(), etag: result.response.value(forHTTPHeaderField: "ETag"))
    }

    func save(_ cache: CatalogCache) throws {
        try FileManager.default.createDirectory(at: cacheFile.deletingLastPathComponent(), withIntermediateDirectories: true)
        try JSONEncoder().encode(cache).write(to: cacheFile, options: .atomic)
    }

    private func publishedDirectory(baseline: CatalogSnapshot) async throws -> CatalogSnapshot {
        // Transitional path for the already deployed site, while desktop-v1.json is introduced.
        async let raw = contents("data/apps.json")
        async let en = contents("index.md")
        async let zh = contents("zh.md")
        async let ja = contents("ja.md")
        return try await Self.mergePublishedDirectory(raw: raw, markdown: [.en: en, .zh: zh, .ja: ja], baseline: baseline)
    }

    static func mergePublishedDirectory(
        raw: Data, markdown: [Language: Data], baseline: CatalogSnapshot
    ) throws -> CatalogSnapshot {
        var apps = try JSONDecoder().decode([CatalogApp].self, from: raw)
        let appNames = Set(apps.map(\.name))
        guard appNames.count == apps.count else { throw CatalogError.invalid }
        let previous = Dictionary(uniqueKeysWithValues: baseline.apps.map { ($0.id, $0) })
        var categories = baseline.categories
        for language in Language.allCases {
            guard let data = markdown[language] else { throw CatalogError.invalid }
            let rows = try PublishedCopy.read(data, language: language)
            guard Set(rows.keys) == appNames else { throw CatalogError.invalid }
            for index in apps.indices {
                let app = apps[index]
                guard let row = rows[app.name], row.homepage == app.homepage, row.source == app.github,
                      row.download == app.download else { throw CatalogError.invalid }
                if let i = categories.firstIndex(where: { $0.id == app.category }) {
                    categories[i].names[language.rawValue] = row.category
                } else {
                    categories.append(CatalogCategory(id: app.category, names: [language.rawValue: row.category]))
                }
                let oldCopy = previous[app.id]?.copy(language)
                if let old = previous[app.id], old.icon == app.icon { apps[index].iconHash = old.iconHash }
                let matchingCopy = oldCopy?.summary == row.summary ? oldCopy : nil
                let text = AppCopy(
                    summary: row.summary, recommendation: language == .zh ? app.recommendation : matchingCopy?.recommendation,
                    compatibility: row.compatibility, permissions: row.permissions,
                    tags: language == .zh ? app.tags : matchingCopy?.tags
                )
                apps[index].translations = (app.translations ?? [:]).merging([language.rawValue: text]) { _, fresh in fresh }
            }
        }
        return try CatalogSnapshot(
            schemaVersion: 1, essentials: baseline.essentials.filter { id in apps.contains { $0.id == id } },
            categories: categories, apps: apps.sorted { $0.sortOrder < $1.sortOrder }
        ).withFallbackArchitectures(from: baseline).validated()
    }

    private func contents(_ path: String) async throws -> Data {
        let result = try await fetch(Self.site.appendingPathComponent(path))
        guard result.response.statusCode == 200 else { throw CatalogError.unavailable }
        return result.data
    }

    private func fetch(_ url: URL, etag: String? = nil) async throws -> (data: Data, response: HTTPURLResponse) {
        var request = URLRequest(url: url, cachePolicy: .reloadIgnoringLocalCacheData)
        if let etag { request.setValue(etag, forHTTPHeaderField: "If-None-Match") }
        let (data, response) = try await session.data(for: request)
        guard let http = response as? HTTPURLResponse, http.url == url, data.count < 3_000_000 else {
            throw CatalogError.invalid
        }
        return (data, http)
    }
}

private struct PublishedCopy {
    let category: String
    let summary: String
    let compatibility: String
    let permissions: String
    let homepage: String
    let source: String
    let download: String

    static func read(_ data: Data, language: Language) throws -> [String: Self] {
        guard let content = String(data: data, encoding: .utf8) else { throw CatalogError.invalid }
        let labels: (category: String, compatibility: String, permissions: String)
        switch language {
        case .en: labels = ("Category", "System", "Permissions / notes")
        case .zh: labels = ("分类", "系统要求", "权限与说明")
        case .ja: labels = ("カテゴリ", "動作環境", "権限・注意点")
        }
        var rows: [String: Self] = [:]
        for section in content.components(separatedBy: "\n## ").dropFirst() {
            let lines = section.split(separator: "\n").map(String.init)
            guard lines.count >= 7, rows[lines[0]] == nil else { throw CatalogError.invalid }
            func field(_ label: String) throws -> String {
                let prefix = "- \(label): "
                guard let line = lines.first(where: { $0.hasPrefix(prefix) }) else { throw CatalogError.invalid }
                return String(line.dropFirst(prefix.count))
            }
            guard let linksLine = lines.last, linksLine.hasPrefix("- [") else { throw CatalogError.invalid }
            let urls = linksLine.components(separatedBy: " · ").compactMap { link -> String? in
                guard let start = link.range(of: "]("), link.hasSuffix(")") else { return nil }
                return String(link[start.upperBound..<link.index(before: link.endIndex)])
            }
            guard urls.count == 3 else { throw CatalogError.invalid }
            rows[lines[0]] = try Self(category: field(labels.category), summary: lines[1],
                compatibility: field(labels.compatibility), permissions: field(labels.permissions),
                homepage: urls[0], source: urls[1], download: urls[2])
        }
        return rows
    }
}

private final class NoRedirects: NSObject, URLSessionTaskDelegate {
    func urlSession(_ session: URLSession, task: URLSessionTask, willPerformHTTPRedirection response: HTTPURLResponse,
                    newRequest request: URLRequest, completionHandler: @escaping (URLRequest?) -> Void) {
        completionHandler(nil)
    }
}

func publicSession() -> URLSession {
    let configuration = URLSessionConfiguration.ephemeral
    configuration.httpShouldSetCookies = false
    configuration.httpCookieStorage = nil
    configuration.urlCredentialStorage = nil
    configuration.urlCache = nil
    configuration.timeoutIntervalForRequest = 12
    configuration.timeoutIntervalForResource = 20
    return URLSession(configuration: configuration, delegate: NoRedirects(), delegateQueue: nil)
}
