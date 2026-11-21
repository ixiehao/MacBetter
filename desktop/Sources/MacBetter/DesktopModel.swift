import Foundation
import Observation

@MainActor @Observable
final class DesktopModel {
    enum CatalogState { case bundled, refreshing, synced, offline, unsaved, unavailable }
    enum UpdateState {
        case waiting, checking, manual, multiple, unreadable
        case result(ReleaseRecord, updateAvailable: Bool)
        case failed(ReleaseProblem, lastKnown: ReleaseRecord?)
    }

    enum ClientUpdateNotice {
        case available(ReleaseRecord)
        case current
        case failed(ReleaseProblem)
    }

    static let repository = "ixiehao/MacBetter"
    static var version: String { Bundle.main.object(forInfoDictionaryKey: "CFBundleShortVersionString") as? String ?? "—" }
    private var checkingClient = false
    private var needsClientFeedback = false
    private var announcedClientVersion: String?
    var clientUpdateNotice: ClientUpdateNotice?

    private let service: CatalogService
    private let releaseService: ReleaseService
    private var cache: CatalogCache?
    private var started = false

    var languagePreference: String {
        didSet { UserDefaults.standard.set(languagePreference, forKey: "displayLanguage") }
    }
    var language: Language { languagePreference == "system" ? .system : Language(rawValue: languagePreference) ?? .en }
    var snapshot: CatalogSnapshot?
    var catalogState: CatalogState
    var syncedAt: Date? { cache?.checkedAt }
    var inventory: [InstalledApp] = []
    var updates: [String: UpdateState] = [:]
    var isChecking = false

    init(service: CatalogService = CatalogService()) {
        self.service = service
        releaseService = ReleaseService(cacheFile: service.cacheFile.deletingLastPathComponent().appendingPathComponent("releases-v1.json"))
        languagePreference = UserDefaults.standard.string(forKey: "displayLanguage") ?? "system"
        let saved = service.cached()
        let bundled = try? CatalogService.bundled()
        let initial = saved.map { cache in
            bundled.map { cache.snapshot.withFallbackArchitectures(from: $0) } ?? cache.snapshot
        } ?? bundled
        cache = saved
        snapshot = initial
        catalogState = initial == nil ? .unavailable : .bundled
    }

    func text(_ en: String, _ zh: String, _ ja: String) -> String {
        switch language {
        case .en: en
        case .zh: zh
        case .ja: ja
        }
    }

    func start() async {
        guard !started else { return }
        started = true
        // Keep a new trial launch focused on the catalog. Version requests start when Updates is opened.
        inventory = AppInventory.scan()
        async let catalog: Void = refreshCatalog()
        async let client: Void = checkClientUpdate(manual: false)
        _ = await (catalog, client)
    }

    func checkClientUpdate(manual: Bool) async {
        needsClientFeedback = needsClientFeedback || manual
        guard !checkingClient else { return }
        checkingClient = true
        defer { checkingClient = false; needsClientFeedback = false }

        do {
            let release = try await releaseService.check(Self.repository, force: manual)
            try Task.checkCancellation()
            guard let current = Version(Self.version), let latest = Version(release.tag) else { throw ReleaseProblem.unknownTag }
            if current < latest {
                if needsClientFeedback || announcedClientVersion != release.tag {
                    announcedClientVersion = release.tag
                    clientUpdateNotice = .available(release)
                }
            } else if needsClientFeedback {
                clientUpdateNotice = .current
            }
        } catch {
            if needsClientFeedback, !Task.isCancelled {
                clientUpdateNotice = .failed(error as? ReleaseProblem ?? .unavailable)
            }
        }
    }

    func refreshCatalog() async {
        guard catalogState != .refreshing else { return }
        let previousState = catalogState
        catalogState = .refreshing
        do {
            let baseline = snapshot ?? CatalogSnapshot(schemaVersion: 1, essentials: [], categories: [], apps: [])
            let fresh = try await service.refresh(previous: cache, baseline: baseline)
            try Task.checkCancellation()
            snapshot = fresh.snapshot.withFallbackArchitectures(from: baseline)
            cache = fresh
            do {
                try service.save(fresh)
                catalogState = .synced
            } catch {
                catalogState = .unsaved
            }
        } catch {
            catalogState = Task.isCancelled ? previousState : (snapshot == nil ? .unavailable : .offline)
            if Task.isCancelled { started = false }
        }
    }

    func scanInstalled() {
        guard !isChecking else { return }
        let before = locationsByID(inventory)
        inventory = AppInventory.scan()
        let after = locationsByID(inventory)
        updates = updates.filter { after[$0.key] != nil && before[$0.key] == after[$0.key] }
    }

    func app(_ id: String) -> CatalogApp? { snapshot?.apps.first { $0.id == id } }
    func installed(_ id: String) -> InstalledApp? { inventory.first { $0.id == id } }

    func checkUpdates(force: Bool) async {
        guard !isChecking else { return }
        scanInstalled()
        isChecking = true
        defer { isChecking = false }

        for item in inventory {
            if Task.isCancelled { return }
            guard let catalogApp = app(item.id) else { continue }
            guard item.locations.count == 1 else {
                updates[item.id] = .multiple
                continue
            }
            guard let repository = item.tracking.repository,
                  secureURL(catalogApp.github)?.absoluteString.lowercased() == "https://github.com/\(repository.lowercased())" else {
                updates[item.id] = .manual
                continue
            }
            guard let localString = item.locations[0].version, let local = Version(localString) else {
                updates[item.id] = .unreadable
                continue
            }
            let previous = updates[item.id]
            updates[item.id] = .checking
            do {
                let record = try await releaseService.check(repository, force: force)
                try Task.checkCancellation()
                guard let remote = Version(record.tag) else { throw ReleaseProblem.unknownTag }
                updates[item.id] = .result(record, updateAvailable: remote > local)
            } catch {
                if Task.isCancelled {
                    updates[item.id] = previous
                    return
                }
                updates[item.id] = .failed(error as? ReleaseProblem ?? .unavailable, lastKnown: releaseService.lastKnown(repository))
            }
        }
    }

    private func locationsByID(_ items: [InstalledApp]) -> [String: [String]] {
        Dictionary(uniqueKeysWithValues: items.map { item in
            (item.id, item.locations.map { "\($0.url.path)\n\($0.version ?? "")" })
        })
    }

    var website: URL {
        switch language {
        case .en: CatalogService.site
        case .zh: CatalogService.site.appendingPathComponent("zh.html")
        case .ja: CatalogService.site.appendingPathComponent("ja.html")
        }
    }
}
