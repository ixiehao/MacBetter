import AppKit
import CryptoKit
import SwiftUI

struct AppDetail: View {
    let app: CatalogApp
    let model: DesktopModel
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        let app = model.app(app.id) ?? app
        let copy = app.copy(model.language)
        VStack(spacing: 0) {
            HStack(alignment: .center, spacing: 16) {
                CatalogIcon(app: app, size: 58)
                VStack(alignment: .leading, spacing: 5) {
                    Text(app.name).font(.system(size: 26, weight: .bold))
                    Text(app.license).foregroundStyle(.secondary)
                }
                Spacer()
                Button(model.text("Done", "完成", "完了")) { dismiss() }.keyboardShortcut(.cancelAction)
            }
            .padding(22)
            Divider()
            ScrollView {
                VStack(alignment: .leading, spacing: 18) {
                    Text(copy.summary).font(.title3)
                    if let recommendation = copy.recommendation, !recommendation.isEmpty {
                        Text(recommendation).font(.headline)
                    }
                    HStack(spacing: 12) {
                        if let download = secureURL(app.download) {
                            Link(destination: download) {
                                DesktopAction(title: model.text("Official download", "官方下载", "公式ダウンロード"), icon: "download")
                            }
                            .buttonStyle(DesktopActionStyle(prominent: true))
                        }
                        if let site = secureURL(app.homepage) {
                            Link(model.text("Project site", "项目主页", "公式サイト"), destination: site)
                        }
                        if let source = secureURL(app.github) {
                            Link(model.text("Source code", "源代码", "ソースコード"), destination: source)
                        }
                    }
                    if app.tested {
                        Label { Text(model.text("Tested by io", "io 实测", "io が使用確認済み")) } icon: { Glyph(name: "check") }
                            .font(.callout.weight(.medium)).foregroundStyle(Color(nsColor: .systemGreen))
                    }
                    VStack(alignment: .leading, spacing: 5) {
                        note(model.text("Chip compatibility", "芯片兼容性", "対応チップ"), app.chipSupport.title(model))
                        if let source = app.architecture.flatMap({ secureURL($0.source) }) {
                            Link(model.text("Source for chip support", "芯片支持来源", "対応チップの確認元"), destination: source)
                                .font(.callout)
                        }
                    }
                    note(model.text("System requirements", "系统要求", "動作環境"), copy.compatibility)
                    note(model.text("Permissions and notes", "权限与说明", "権限・注意点"), copy.permissions)
                    if let preview = app.preview, let image = preview.url(model.language),
                       let source = secureURL(preview.source) {
                        VStack(alignment: .leading, spacing: 10) {
                            Text(model.text("Project screenshot", "项目截图", "公式スクリーンショット")).font(.headline)
                            AsyncImage(url: image) { phase in
                                switch phase {
                                case let .success(image):
                                    image.resizable().scaledToFit()
                                        .frame(maxWidth: .infinity, maxHeight: 290)
                                        .accessibilityLabel(model.text("Project screenshot", "项目截图", "公式スクリーンショット"))
                                case .failure:
                                    Text(model.text("Screenshot unavailable", "截图暂不可用", "画像を表示できません"))
                                        .foregroundStyle(.secondary)
                                default:
                                    ProgressView().controlSize(.small)
                                }
                            }
                            .id(image)
                            Link(model.text("Image source", "图片来源", "画像の出典"), destination: source)
                                .font(.callout)
                        }
                    }
                }
                .frame(maxWidth: .infinity, alignment: .leading)
                .padding(22)
            }
        }
        .frame(width: 610)
        .frame(minHeight: 480, idealHeight: 575, maxHeight: 660)
    }

    private func note(_ title: String, _ value: String) -> some View {
        VStack(alignment: .leading, spacing: 5) {
            Text(title).font(.headline)
            Text(value).foregroundStyle(.secondary).textSelection(.enabled)
        }
    }
}

@MainActor
enum DesktopImages {
    static let brand = Bundle.main.url(forResource: "macbetter-mark", withExtension: "svg").flatMap(NSImage.init(contentsOf:))
    static let loaded: NSCache<NSString, NSImage> = {
        let cache = NSCache<NSString, NSImage>()
        cache.countLimit = 72
        return cache
    }()
    private struct IconSources: Decodable {
        struct Item: Decodable { let id: String; let sha256: String }
        let icons: [Item]
    }
    static let bundledHashes: [String: String] = {
        guard let url = Bundle.main.url(forResource: "sources", withExtension: "json", subdirectory: "catalog-icons"),
              let data = try? Data(contentsOf: url),
              let sources = try? JSONDecoder().decode(IconSources.self, from: data) else { return [:] }
        return Dictionary(sources.icons.map { ($0.id, $0.sha256) }, uniquingKeysWith: { first, _ in first })
    }()

    static func bundledIcon(_ filename: String) -> NSImage? {
        guard let root = Bundle.main.resourceURL else { return nil }
        return localImage(root.appendingPathComponent("catalog-icons").appendingPathComponent(filename))
    }

    static func glyph(_ name: String) -> NSImage? {
        guard let url = Bundle.main.url(forResource: name, withExtension: "svg", subdirectory: "glyphs"),
              let raw = localImage(url) else { return nil }
        raw.isTemplate = true
        return raw
    }

    private static func localImage(_ url: URL) -> NSImage? {
        let key = url.path as NSString
        if let cached = loaded.object(forKey: key) { return cached }
        let image = NSImage(contentsOf: url)
        if let image { loaded.setObject(image, forKey: key) }
        return image
    }
}

struct Glyph: View {
    let name: String

    var body: some View {
        Group {
            if let image = DesktopImages.glyph(name) {
                Image(nsImage: image).renderingMode(.template).resizable().scaledToFit()
            }
        }
        .frame(width: 16, height: 16)
        .accessibilityHidden(true)
    }
}

struct CatalogIcon: View {
    let app: CatalogApp
    let size: CGFloat
    @State private var remoteImage: NSImage?

    var body: some View {
        let iconURL = app.iconURL
        let local = iconURL.flatMap { DesktopImages.bundledIcon($0.lastPathComponent) }
        Group {
            if let image = remoteImage ?? local {
                Image(nsImage: image).resizable().scaledToFit()
            } else {
                RoundedRectangle(cornerRadius: 8).fill(.secondary.opacity(0.10))
                    .overlay { Text(String(app.name.prefix(1))).font(.headline).foregroundStyle(.secondary) }
            }
        }
        .frame(width: size, height: size)
        .accessibilityHidden(true)
        .task(id: iconURL) {
            remoteImage = nil
            let hashChanged = app.iconHash.map { $0 != DesktopImages.bundledHashes[app.id] } ?? false
            guard local == nil || hashChanged, let iconURL else { return }
            let key = iconURL.absoluteString as NSString
            if let cached = DesktopImages.loaded.object(forKey: key) {
                remoteImage = cached
                return
            }
            guard let (data, response) = try? await URLSession.shared.data(from: iconURL),
                  (response as? HTTPURLResponse)?.statusCode == 200, response.url == iconURL,
                  data.count <= 2_000_000, !Task.isCancelled,
                  Self.matchesHash(data, expected: app.iconHash),
                  let image = NSImage(data: data) else { return }
            DesktopImages.loaded.setObject(image, forKey: key)
            remoteImage = image
        }
    }

    private static func matchesHash(_ data: Data, expected: String?) -> Bool {
        guard let expected else { return true }
        return SHA256.hash(data: data).map { String(format: "%02x", $0) }.joined() == expected
    }
}
