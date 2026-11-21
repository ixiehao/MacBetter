import AppKit
import SwiftUI

struct DesktopAction: View {
    let title: String
    let icon: String

    var body: some View {
        HStack(spacing: 6) {
            Glyph(name: icon)
            Text(title)
        }
        .fixedSize(horizontal: true, vertical: false)
    }
}

struct DesktopActionStyle: ButtonStyle {
    var prominent = false
    @Environment(\.isEnabled) private var isEnabled

    func makeBody(configuration: Configuration) -> some View {
        let blue = Color(red: 0.09, green: 0.36, blue: 0.78)
        return configuration.label
            .font(.callout.weight(.semibold))
            .padding(.horizontal, 11)
            .frame(height: 32)
            .foregroundStyle(prominent ? Color.white : Color.primary)
            .background(prominent ? blue : Color(nsColor: .controlBackgroundColor), in: RoundedRectangle(cornerRadius: 8))
            .overlay(RoundedRectangle(cornerRadius: 8).strokeBorder(.secondary.opacity(prominent ? 0 : 0.23)))
            .overlay(RoundedRectangle(cornerRadius: 8).fill(.primary.opacity(configuration.isPressed ? 0.10 : 0)))
            .opacity(isEnabled ? 1 : 0.5)
    }
}
