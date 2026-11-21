import AppKit
import SwiftUI

@main
struct MacBetterApp: App {
    @State private var model = DesktopModel()

    var body: some Scene {
        WindowGroup("MacBetter", id: "main") {
            DesktopWindow(model: model)
                .environment(\.locale, model.language.locale)
                .frame(minWidth: 810, minHeight: 560)
                .task { await model.start() }
        }
        .defaultSize(width: 1120, height: 760)
        .windowResizability(.contentMinSize)
        .windowToolbarStyle(.unifiedCompact)
        .commands {
            CommandGroup(replacing: .newItem) {}
            CommandGroup(replacing: .appInfo) {
                Button(model.text("About MacBetter", "关于 MacBetter", "MacBetter について")) {
                    showAbout()
                }
            }
            CommandGroup(after: .textEditing) {
                Button(model.text("Search Catalog", "搜索软件目录", "カタログを検索")) {
                    NotificationCenter.default.post(name: .focusCatalogSearch, object: nil)
                }
                .keyboardShortcut("f")
            }
            CommandMenu(model.text("Language", "语言", "言語")) {
                Picker(model.text("Language", "语言", "言語"), selection: $model.languagePreference) {
                    Text(model.text("Follow System", "跟随系统", "システムに従う")).tag("system")
                    ForEach(Language.allCases, id: \.rawValue) { language in
                        Text(language.name).tag(language.rawValue)
                    }
                }
                .labelsHidden()
            }
            CommandGroup(replacing: .help) {
                Button(model.text("Check for Updates…", "检查更新…", "アップデートを確認…")) {
                    Task { await model.checkClientUpdate(manual: true) }
                }
                Divider()
                Link(model.text("MacBetter Website", "MacBetter 官网", "MacBetter 公式サイト"), destination: model.website)
                Button(model.text("Refresh Catalog", "同步软件目录", "カタログを同期")) {
                    Task { await model.refreshCatalog() }
                }
                .keyboardShortcut("r")
                .disabled(model.catalogState == .refreshing)
                Button(model.text("Check for App Updates…", "检查已安装软件更新…", "インストール済みアプリの更新を確認…")) {
                    NotificationCenter.default.post(name: .showDesktopUpdates, object: nil)
                }
            }
        }
    }

    @MainActor private func showAbout() {
        let source = URL(string: "https://github.com/\(DesktopModel.repository)")!
        let credits = NSMutableAttributedString(string: "")
        let style = NSMutableParagraphStyle()
        style.alignment = .center
        let attributes: [NSAttributedString.Key: Any] = [
            .font: NSFont.systemFont(ofSize: 12), .paragraphStyle: style, .foregroundColor: NSColor.labelColor,
        ]
        func append(_ text: String, link: URL? = nil) {
            var formatted = attributes
            if let link { formatted[.link] = link }
            credits.append(NSAttributedString(string: text, attributes: formatted))
        }
        append(model.text("Discover open-source apps and check their updates.",
                          "发现开源 Mac 软件，查看可用更新。", "オープンソースのMacアプリを探し、更新を確認します。"))
        append("\n\niXiehao · MIT\n\n")
        append(model.text("Website", "官网", "公式サイト"), link: model.website)
        append("   ·   ")
        append(model.text("Source", "源代码", "ソースコード"), link: source)
        append("   ·   ")
        append(model.text("Feedback", "反馈", "フィードバック"), link: source.appendingPathComponent("issues"))
        let build = Bundle.main.object(forInfoDictionaryKey: "CFBundleVersion") as? String
        var options: [NSApplication.AboutPanelOptionKey: Any] = [.credits: credits, .applicationVersion: DesktopModel.version]
        if build == DesktopModel.version { options[.version] = "" }
        if let icon = DesktopImages.brand { options[.applicationIcon] = icon }
        NSApplication.shared.orderFrontStandardAboutPanel(options: options)
    }
}

extension Notification.Name {
    static let showDesktopUpdates = Notification.Name("MacBetter.ShowDesktopUpdates")
    static let focusCatalogSearch = Notification.Name("MacBetter.FocusCatalogSearch")
}
