import SwiftUI

struct CatalogFilterBar: View {
    let model: DesktopModel
    let categories: [CatalogCategory]
    let total: Int
    let counts: [String: Int]
    @Binding var category: String
    @Binding var onlyTested: Bool
    @Binding var chip: ChipFilter
    @State private var leadingCategory: String?
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    var body: some View {
        HStack(spacing: 11) {
            chip(id: "all", title: model.text("All", "全部", "すべて"), count: total, icon: "apps")
            boundary
            ScrollView(.horizontal) {
                LazyHStack(spacing: 7) {
                    ForEach(categories) { item in
                        chip(id: item.id, title: item.title(model.language), count: counts[item.id, default: 0])
                            .id(item.id)
                    }
                }
                .scrollTargetLayout()
                .padding(.vertical, 4)
            }
            .scrollPosition(id: $leadingCategory, anchor: .leading)
            .scrollIndicators(.hidden)
            .accessibilityLabel(model.text("Categories", "软件分类", "カテゴリ"))

            HStack(spacing: 3) {
                arrow(-1)
                arrow(1)
            }

            boundary
            Picker(model.text("Chip compatibility", "芯片兼容性", "対応チップ"), selection: $chip) {
                Text(model.text("All chips", "所有芯片", "すべてのチップ")).tag(ChipFilter.all)
                Text("Apple Silicon").tag(ChipFilter.appleSilicon)
                Text("Intel").tag(ChipFilter.intel)
            }
            .pickerStyle(.menu)
            .labelsHidden()
            .fixedSize()
            .help(model.text("Filter by native chip support", "按原生芯片支持筛选", "ネイティブ対応チップで絞り込む"))
            Button {
                onlyTested.toggle()
            } label: {
                HStack(spacing: 5) {
                    Glyph(name: "check")
                    Text(model.text("Tested by io", "io 实测", "io が使用確認済み"))
                        .font(.callout.weight(.semibold))
                }
                .fixedSize(horizontal: true, vertical: false)
                .padding(.horizontal, 10)
                .frame(height: 32)
                .foregroundStyle(onlyTested ? Color(nsColor: .systemGreen) : .secondary)
                .background(.green.opacity(onlyTested ? 0.15 : 0.04), in: Capsule())
                .overlay(Capsule().strokeBorder(.green.opacity(onlyTested ? 0.38 : 0.17)))
            }
            .buttonStyle(.plain)
            .accessibilityAddTraits(onlyTested ? .isSelected : [])
        }
        .frame(height: 40)
        .padding(.horizontal, 26)
        .padding(.vertical, 4)
        .background(Color(nsColor: .controlBackgroundColor))
        .onChange(of: categories.map(\.id)) { _, newIDs in
            if category != "all" && !newIDs.contains(category) { category = "all" }
        }
    }

    private var boundary: some View {
        Rectangle()
            .fill(.secondary.opacity(0.20))
            .frame(width: 1, height: 21)
            .accessibilityHidden(true)
    }

    private func chip(id: String, title: String, count: Int, icon: String? = nil) -> some View {
        let selected = category == id
        return Button {
            category = id
        } label: {
            HStack(spacing: 6) {
                if let icon { Glyph(name: icon) }
                Text(title).font(.callout.weight(selected ? .semibold : .medium))
                Text(count, format: .number)
                    .font(.caption2.monospacedDigit().weight(.semibold))
                    .foregroundStyle(selected ? Color.white : .secondary)
                    .padding(.horizontal, 5)
                    .padding(.vertical, 2)
                    .background(selected ? Color.white.opacity(0.2) : Color.secondary.opacity(0.11), in: Capsule())
            }
            .fixedSize(horizontal: true, vertical: false)
            .padding(.horizontal, 10)
            .frame(height: 32)
            .foregroundStyle(selected ? Color.white : .primary)
            .background(selected ? Color(red: 0.09, green: 0.36, blue: 0.78) : Color(nsColor: .windowBackgroundColor), in: Capsule())
            .overlay(Capsule().strokeBorder(selected ? Color.clear : Color.secondary.opacity(0.16)))
            .contentShape(Capsule())
        }
        .buttonStyle(.plain)
        .accessibilityLabel(Text(title))
        .accessibilityValue(Text(count, format: .number))
        .accessibilityAddTraits(selected ? .isSelected : [])
    }

    private var leadingIndex: Int {
        categories.firstIndex { $0.id == leadingCategory } ?? 0
    }

    private func arrow(_ direction: Int) -> some View {
        let label = direction < 0 ? model.text("Previous categories", "前面的分类", "前のカテゴリ") :
            model.text("More categories", "更多分类", "次のカテゴリ")
        return Button {
            let next = min(max(0, leadingIndex + direction * 2), categories.count - 1)
            guard categories.indices.contains(next) else { return }
            withAnimation(reduceMotion ? nil : .easeOut(duration: 0.17)) {
                leadingCategory = categories[next].id
            }
        } label: {
            Glyph(name: direction < 0 ? "chevron-left" : "chevron-right")
                .frame(width: 24, height: 30)
                .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .accessibilityLabel(label)
        .help(label)
        .disabled(categories.isEmpty || (direction < 0 ? leadingIndex == 0 : leadingIndex >= categories.count - 1))
    }
}
