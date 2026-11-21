import AppKit
import SwiftUI

struct DesktopWindow: View {
    private enum ScrollAnchor { case top }

    private enum Page: String, CaseIterable, Identifiable {
        case discover, installed, updates
        var id: Self { self }
        var icon: String {
            switch self {
            case .discover: "apps"
            case .installed: "folder"
            case .updates: "download"
            }
        }
    }

    let model: DesktopModel
    @State private var page: Page = .discover
    @State private var selectedApp: CatalogApp?
    @State private var query = ""
    @State private var category = "all"
    @State private var onlyTested = false
    @State private var chip: ChipFilter = .all
    @State private var searchFocusRequest: UUID?
    @State private var searchFocused = false

    var body: some View {
        let catalog = page == .discover ? model.snapshot : nil
        let eligible = catalog.map { eligibleApps(in: $0) } ?? []

        return HStack(spacing: 0) {
            sidebar
            Divider()
            VStack(alignment: .leading, spacing: 0) {
                if let catalog {
                    CatalogFilterBar(model: model, categories: catalog.categories, total: eligible.count,
                                     counts: categoryCounts(eligible), category: $category, onlyTested: $onlyTested, chip: $chip)
                    Divider()
                }
                ScrollViewReader { scroll in
                    ScrollView {
                        VStack(spacing: 0) {
                            Color.clear.frame(height: 0).id(ScrollAnchor.top).accessibilityHidden(true)
                            Group {
                                switch page {
                                case .discover: discovery(matches: eligible.filter { category == "all" || $0.categories.contains(category) })
                                case .installed: installedList
                                case .updates: updatesList
                                }
                            }
                            .frame(maxWidth: 1120)
                            .padding(26)
                            .frame(maxWidth: .infinity)
                        }
                    }
                    .onChange(of: category) { scroll.scrollTo(ScrollAnchor.top, anchor: .top) }
                    .onChange(of: onlyTested) { scroll.scrollTo(ScrollAnchor.top, anchor: .top) }
                    .onChange(of: query) { scroll.scrollTo(ScrollAnchor.top, anchor: .top) }
                    .onChange(of: chip) { scroll.scrollTo(ScrollAnchor.top, anchor: .top) }
                }
                .id(page)
            }
        }
        .background(Color(nsColor: .windowBackgroundColor))
        .navigationTitle(title(page))
        .toolbar { windowToolbar }
        .tint(Color(red: 0.09, green: 0.41, blue: 0.88))
        .sheet(item: $selectedApp) { app in
            AppDetail(app: app, model: model)
                .environment(\.locale, model.language.locale)
        }
        .alert(model.text("MacBetter Updates", "MacBetter 更新", "MacBetter のアップデート"),
               isPresented: Binding(get: { model.clientUpdateNotice != nil }, set: { if !$0 { model.clientUpdateNotice = nil } }),
               presenting: model.clientUpdateNotice) { notice in
            if case let .available(release) = notice {
                Button(model.text("View Release", "查看新版本", "リリースを表示")) { NSWorkspace.shared.open(release.url) }
                Button(model.text("Later", "稍后", "後で"), role: .cancel) {}
            } else {
                Button(model.text("OK", "确定", "OK"), role: .cancel) {}
            }
        } message: { notice in
            Text(clientMessage(notice))
        }
        .onReceive(NotificationCenter.default.publisher(for: .showDesktopUpdates)) { _ in
            switchPage(.updates, checkImmediately: false)
            Task { await model.checkUpdates(force: true) }
        }
        .onReceive(NotificationCenter.default.publisher(for: .focusCatalogSearch)) { _ in
            if page != .discover { switchPage(.discover) }
            searchFocusRequest = UUID()
        }
    }

    private var sidebar: some View {
        VStack(alignment: .leading, spacing: 7) {
            HStack(spacing: 8) {
                if let icon = DesktopImages.brand {
                    Image(nsImage: icon).resizable().scaledToFit().frame(width: 36, height: 36).accessibilityHidden(true)
                }
                Text("MacBetter").font(.title3.bold())
            }
            .padding(.horizontal, 8)
            .padding(.bottom, 18)

            ForEach(Page.allCases) { item in
                Button { switchPage(item) } label: {
                    HStack(spacing: 10) {
                        Glyph(name: item.icon)
                        Text(title(item)).fontWeight(.medium)
                        Spacer(minLength: 0)
                        if item == .updates, availableUpdates > 0 {
                            Text(availableUpdates, format: .number).font(.caption.monospacedDigit().bold())
                        }
                    }
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .padding(.horizontal, 10)
                    .padding(.vertical, 9)
                    .foregroundStyle(item == page ? Color.accentColor : Color.primary)
                    .background(item == page ? Color.accentColor.opacity(0.13) : Color.clear, in: RoundedRectangle(cornerRadius: 8))
                    .contentShape(Rectangle())
                }
                .buttonStyle(.plain)
                .accessibilityAddTraits(item == page ? .isSelected : [])
            }
            Spacer()
            Link(destination: model.website) {
                HStack(spacing: 8) {
                    Glyph(name: "world-www")
                    Text(model.text("Official website", "官方网站", "公式サイト"))
                }
            }
            .font(.callout)
            .padding(8)
        }
        .padding(15)
        .frame(width: 185)
        .background(Color(nsColor: .controlBackgroundColor).opacity(0.7))
    }

    @ToolbarContentBuilder private var windowToolbar: some ToolbarContent {
        switch page {
        case .discover:
            ToolbarItem(placement: .primaryAction) {
                HStack(spacing: 12) {
                    catalogSyncStatus
                    catalogSearch
                    toolbarAction(model.text("Sync catalog", "同步软件目录", "カタログを同期"), busy: model.catalogState == .refreshing) {
                        Task { await model.refreshCatalog() }
                    }
                }
            }
        case .installed:
            ToolbarItem(placement: .primaryAction) {
                toolbarAction(model.text("Scan again", "重新识别", "再スキャン"), busy: model.isChecking) {
                    model.scanInstalled()
                }
            }
        case .updates:
            ToolbarItem(placement: .primaryAction) {
                Button { Task { await model.checkUpdates(force: true) } } label: {
                    HStack(spacing: 6) {
                        if model.isChecking { ProgressView().controlSize(.mini) }
                        else { Glyph(name: "refresh") }
                        Text(model.text("Check now", "立即检查", "今すぐ確認"))
                    }
                }
                .disabled(model.isChecking)
            }
        }
    }

    private var catalogSearch: some View {
        HStack(spacing: 7) {
            Glyph(name: "search").foregroundStyle(.secondary)
            ToolbarSearchField(text: $query, isFocused: $searchFocused,
                               placeholder: model.text("Search apps", "搜索软件", "アプリを検索"),
                               focusRequest: searchFocusRequest)
                .frame(height: 22)
            Button { query = ""; searchFocusRequest = UUID() } label: { Glyph(name: "x") }
                .buttonStyle(.plain)
                .opacity(query.isEmpty ? 0 : 1)
                .disabled(query.isEmpty)
                .accessibilityHidden(query.isEmpty)
                .accessibilityLabel(model.text("Clear search", "清除搜索", "検索をクリア"))
        }
        .padding(.horizontal, 9)
        .frame(width: 195, height: 28)
        .background(.primary.opacity(0.065), in: Capsule())
        .overlay(Capsule().strokeBorder(searchFocused ? Color.accentColor : Color.secondary.opacity(0.17)))
    }

    private var catalogSyncStatus: some View {
        HStack(spacing: 4) {
            Glyph(name: model.catalogState == .synced ? "check" : "info-circle")
            Text(compactCatalogStatus).font(.caption)
        }
        .foregroundStyle(model.catalogState == .synced ? Color(nsColor: .systemGreen) : .secondary)
        .accessibilityLabel(catalogStatus)
        .help(model.syncedAt.map { "\(catalogStatus) · \(timestamp($0))" } ?? catalogStatus)
    }

    private func toolbarAction(_ title: String, busy: Bool, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            Group {
                if busy { ProgressView().controlSize(.mini) }
                else { Glyph(name: "refresh") }
            }
            .frame(width: 24, height: 24)
            .contentShape(Rectangle())
        }
        .accessibilityLabel(title)
        .help(title)
        .disabled(busy)
    }

    private var compactCatalogStatus: String {
        switch model.catalogState {
        case .bundled:
            model.text("Local catalog", "本机目录", "ローカル")
        case .refreshing:
            model.text("Syncing", "同步中", "同期中")
        case .synced:
            model.text("Synced", "已同步", "同期済み")
        case .offline:
            model.text("Offline catalog", "离线目录", "オフライン")
        case .unsaved:
            model.text("Not saved", "未保存", "未保存")
        case .unavailable:
            model.text("Unavailable", "目录不可用", "利用不可")
        }
    }

    @ViewBuilder private func discovery(matches: [CatalogApp]) -> some View {
        if let snapshot = model.snapshot {
            let trimmed = query.trimmingCharacters(in: .whitespacesAndNewlines)
            VStack(alignment: .leading, spacing: 18) {
                if trimmed.isEmpty && category == "all" && !onlyTested && chip == .all {
                    essentials(snapshot.essentials.compactMap { model.app($0) })
                }
                if matches.isEmpty {
                    empty(model.text("No matching apps", "没有匹配的软件", "一致するアプリがありません"))
                } else {
                    LazyVStack(spacing: 0) {
                        ForEach(matches) { app in
                            Button { selectedApp = app } label: {
                                row(app: app, subtitle: app.copy(model.language).summary) {
                                    if app.tested { testedBadge }
                                }
                            }
                            .buttonStyle(.plain)
                            Divider()
                        }
                    }
                }
            }
        } else {
            empty(catalogStatus)
        }
    }

    private func essentials(_ apps: [CatalogApp]) -> some View {
        VStack(alignment: .leading, spacing: 10) {
            Text(model.text("New Mac essentials", "新 Mac 必备工具", "新しいMacに、まずこのアプリ"))
                .font(.title3.bold()).accessibilityAddTraits(.isHeader)
            LazyVGrid(columns: Array(repeating: GridItem(.flexible(minimum: 0), spacing: 10), count: 4), spacing: 10) {
                ForEach(apps) { app in
                    Button { selectedApp = app } label: {
                        VStack(spacing: 6) {
                            CatalogIcon(app: app, size: 44)
                            Text(app.name)
                                .font(.callout.weight(.semibold))
                                .lineLimit(1)
                                .minimumScaleFactor(0.85)
                            Text(app.chipSupport.title(model))
                                .font(.caption2)
                                .foregroundStyle(.secondary)
                                .multilineTextAlignment(.center)
                                .lineLimit(2)
                        }
                        .padding(.horizontal, 8)
                        .frame(maxWidth: .infinity, minHeight: 108)
                        .background(.background, in: RoundedRectangle(cornerRadius: 10))
                        .overlay(RoundedRectangle(cornerRadius: 10).strokeBorder(.secondary.opacity(0.16)))
                        .contentShape(Rectangle())
                    }
                    .buttonStyle(.plain)
                    .help(app.copy(model.language).summary)
                }
            }
        }
    }

    private func eligibleApps(in catalog: CatalogSnapshot) -> [CatalogApp] {
        let trimmed = query.trimmingCharacters(in: .whitespacesAndNewlines)
        let language = model.language
        let labels = Dictionary(uniqueKeysWithValues: catalog.categories.map { ($0.id, $0.title(language)) })
        return catalog.apps.filter { app in
            (!onlyTested || app.tested) && chip.accepts(app.chipSupport) &&
            (trimmed.isEmpty || app.matches(trimmed, categoryTitle: labels[app.category] ?? app.category, language: language))
        }
    }

    private func categoryCounts(_ apps: [CatalogApp]) -> [String: Int] {
        apps.reduce(into: [:]) { counts, app in
            for id in Set(app.categories) { counts[id, default: 0] += 1 }
        }
    }

    private var installedList: some View {
        VStack(alignment: .leading, spacing: 14) {
            Text(model.text(
                "Recognizes supported apps on this Mac by their bundle ID.",
                "通过应用标识识别这台 Mac 上已安装的试点软件。",
                "このMacにある対応アプリをバンドルIDで検出します。"
            )).foregroundStyle(.secondary)
            if installedEntries.isEmpty {
                empty(model.text("No supported apps detected", "未识别到试点软件", "対応アプリが見つかりません"))
            }
            LazyVStack(spacing: 0) {
                ForEach(installedEntries) { item in
                    if let app = model.app(item.id) {
                        ForEach(item.locations) { location in
                            row(app: app, subtitle: installedVersion(location) + " · " + location.url.deletingLastPathComponent().path) {
                                Button(model.text("Show in Finder", "在访达中显示", "Finderに表示")) {
                                    NSWorkspace.shared.activateFileViewerSelecting([location.url])
                                }
                            }
                            Divider()
                        }
                    }
                }
            }
        }
    }

    private var updatesList: some View {
        VStack(alignment: .leading, spacing: 14) {
            Text(model.text(
                "Check official releases for recognized apps. Install updates using the project’s instructions.",
                "检查已识别软件的官方版本，按项目说明安装更新。",
                "検出したアプリの公式リリースを確認し、各プロジェクトの案内に従って更新します。"
            )).foregroundStyle(.secondary)
            if installedEntries.isEmpty {
                empty(model.text("No supported apps to check", "没有可检查的试点软件", "確認できる対応アプリがありません"))
            }
            LazyVStack(spacing: 0) {
                ForEach(installedEntries.filter { hasUpdate($0.id) } + installedEntries.filter { !hasUpdate($0.id) }) { item in
                    if let app = model.app(item.id) {
                        let state = model.updates[item.id] ?? .waiting
                        let status = statusText(state)
                        let local = item.locations.count == 1 ? installedVersion(item.locations[0]) + " · " : ""
                        row(app: app, subtitle: local + status.label, accent: status.highlight) {
                            let url = status.url ?? secureURL(app.download)
                            if let url {
                                Link(actionTitle(app), destination: url)
                                    .fontWeight(status.highlight ? .semibold : .regular)
                            }
                        }
                        Divider()
                    }
                }
            }
        }
    }

    private struct UpdateLabel {
        let label: String
        var url: URL?
        var highlight = false
    }

    private func statusText(_ state: DesktopModel.UpdateState) -> UpdateLabel {
        switch state {
        case .waiting: return .init(label: model.text("Not checked", "尚未检查", "未確認"))
        case .checking: return .init(label: model.text("Checking…", "正在检查…", "確認中…"))
        case .manual: return .init(label: model.text("Check via the official channel", "请通过官方渠道检查", "公式の案内で確認"))
        case .multiple: return .init(label: model.text("Multiple copies detected", "检测到多个副本", "複数のコピーを検出"))
        case .unreadable: return .init(label: model.text("Installed version could not be compared", "无法比较已装版本", "インストール済みのバージョンを比較できません"))
        case let .result(record, available):
            let status = available ? model.text("New release", "有新版", "新しいリリース") :
                model.text("No newer stable release", "没有更新的正式版", "新しい安定版はありません")
            return .init(label: "\(status) \(record.tag) · \(timestamp(record.date))", url: record.url, highlight: available)
        case let .failed(error, previous):
            let message: String
            switch error {
            case .limited: message = model.text("GitHub rate limit. Try later.", "GitHub 请求限流，请稍后再试。", "GitHubの制限に達しました。時間をおいて再試行してください。")
            case .noStable: message = model.text("No stable release found", "未找到正式版", "安定版が見つかりません")
            case .unknownTag: message = model.text("Release version could not be compared", "无法比较发布版本", "リリースのバージョンを比較できません")
            case .unavailable: message = model.text("Could not check for updates", "暂时无法检查更新", "更新を確認できませんでした")
            }
            if let previous {
                let recent = model.text("Last seen", "上次查到", "前回の結果")
                return .init(label: "\(message) · \(recent) \(previous.tag) · \(timestamp(previous.date))", url: previous.url)
            }
            return .init(label: message)
        }
    }

    private func clientMessage(_ notice: DesktopModel.ClientUpdateNotice) -> String {
        switch notice {
        case let .available(release):
            model.text("MacBetter \(release.tag) is available. Installed version \(DesktopModel.version).",
                       "MacBetter \(release.tag) 已发布。本机版本为 \(DesktopModel.version)。",
                       "MacBetter \(release.tag) を利用できます。現在のバージョンは \(DesktopModel.version) です。")
        case .current:
            model.text("MacBetter is up to date.", "MacBetter 已是最新版。", "MacBetter は最新です。")
        case .failed(.noStable):
            model.text("The official repository has no stable desktop release yet.", "官方仓库暂未发布桌面版正式版本。", "公式リポジトリにデスクトップ版の安定版はまだありません。")
        case .failed(.limited):
            model.text("GitHub temporarily limited requests. Try again later.", "GitHub 暂时限制了请求，请稍后再试。", "GitHub のリクエスト制限に達しました。時間をおいて再試行してください。")
        case .failed(.unknownTag):
            model.text("The official version could not be compared.", "无法比较官方发布版本。", "公式リリースのバージョンを比較できませんでした。")
        case .failed(.unavailable):
            model.text("Could not check for updates. Try again later.", "暂时无法检查更新，请稍后再试。", "アップデートを確認できませんでした。時間をおいて再試行してください。")
        }
    }

    private func actionTitle(_ app: CatalogApp) -> String {
        if app.id == "ezntfs" { return model.text("Official installer", "官方安装包", "公式インストーラ") }
        if app.id == "firefox" { return model.text("Official download", "官方下载", "公式ダウンロード") }
        return model.text("Open releases", "打开发布页", "リリースを開く")
    }

    private func row<Trailing: View>(
        app: CatalogApp, subtitle: String, accent: Bool = false, @ViewBuilder trailing: () -> Trailing
    ) -> some View {
        HStack(alignment: .center, spacing: 13) {
            CatalogIcon(app: app, size: 37)
            VStack(alignment: .leading, spacing: 4) {
                Text(app.name).font(.headline)
                Text(app.chipSupport.title(model))
                    .font(.caption.weight(.medium))
                    .foregroundStyle(.secondary)
                Text(subtitle)
                    .font(.callout)
                    .foregroundStyle(accent ? Color.accentColor : .secondary)
                    .lineLimit(page == .discover ? 2 : nil)
                    .fixedSize(horizontal: false, vertical: true)
            }
            Spacer(minLength: 6)
            trailing().fixedSize(horizontal: true, vertical: false)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(.vertical, 10)
        .contentShape(Rectangle())
    }

    private var testedBadge: some View {
        Label { Text(model.text("Tested by io", "io 实测", "io が使用確認済み")) } icon: { Glyph(name: "check") }
            .font(.caption.weight(.medium))
            .foregroundStyle(Color(nsColor: .systemGreen))
    }

    private var installedEntries: [InstalledApp] { model.inventory.filter { model.app($0.id) != nil } }
    private var availableUpdates: Int {
        installedEntries.filter { hasUpdate($0.id) }.count
    }

    private func hasUpdate(_ id: String) -> Bool {
        if case .result(_, true) = model.updates[id] { return true }
        return false
    }

    private func title(_ page: Page) -> String {
        switch page {
        case .discover: model.text("Discover", "发现", "見つける")
        case .installed: model.text("Installed", "已安装", "インストール済み")
        case .updates: model.text("Updates", "更新", "アップデート")
        }
    }

    private func switchPage(_ newPage: Page, checkImmediately: Bool = true) {
        if newPage != .discover {
            searchFocusRequest = nil
            searchFocused = false
        }
        page = newPage
        if newPage == .installed { model.scanInstalled() }
        if newPage == .updates, checkImmediately { Task { await model.checkUpdates(force: false) } }
    }

    private func timestamp(_ date: Date) -> String {
        date.formatted(Date.FormatStyle(date: .abbreviated, time: .shortened).locale(model.language.locale))
    }

    private func installedVersion(_ location: InstalledApp.Location) -> String {
        location.version ?? model.text("Version not available", "版本未知", "バージョン不明")
    }

    private var catalogStatus: String {
        switch model.catalogState {
        case .bundled:
            model.syncedAt == nil ? model.text("Built-in catalog", "内置目录", "内蔵カタログ") :
                model.text("Saved catalog", "已保存的目录", "保存済みカタログ")
        case .refreshing: model.text("Syncing catalog…", "正在同步目录…", "カタログを同期中…")
        case .synced: model.text("Catalog synced", "目录已同步", "カタログを同期済み")
        case .offline: model.text("Sync unavailable · showing saved catalog", "暂时无法同步，正在显示已有目录", "同期できません。保存済みのカタログを表示中")
        case .unsaved: model.text("Synced · could not save a local copy", "已同步，但无法保存到本机", "同期済み。ローカル保存に失敗しました")
        case .unavailable: model.text("Catalog unavailable", "目录暂不可用", "カタログを利用できません")
        }
    }

    private func empty(_ title: String) -> some View {
        Text(title)
            .font(.headline)
            .foregroundStyle(.secondary)
            .frame(maxWidth: .infinity, minHeight: 140)
    }
}
