import AppKit
import SwiftUI

struct ToolbarSearchField: NSViewRepresentable {
    @Binding var text: String
    @Binding var isFocused: Bool
    let placeholder: String
    let focusRequest: UUID?

    func makeCoordinator() -> Coordinator { Coordinator(self) }

    func makeNSView(context: Context) -> Field {
        let field = Field()
        field.isBordered = false
        field.isBezeled = false
        field.drawsBackground = false
        field.focusRingType = .none
        field.usesSingleLineMode = true
        field.font = .systemFont(ofSize: NSFont.systemFontSize)
        field.setContentCompressionResistancePriority(.defaultLow, for: .horizontal)
        field.delegate = context.coordinator
        field.wrappedFocusChanged = { [weak coordinator = context.coordinator] focused in
            coordinator?.focusChanged(focused)
        }
        return field
    }

    func updateNSView(_ field: Field, context: Context) {
        context.coordinator.parent = self
        field.placeholderString = placeholder
        field.setAccessibilityLabel(placeholder)

        if let editor = field.currentEditor() as? NSTextView {
            if !editor.hasMarkedText(), editor.string != text { editor.string = text }
        } else if field.stringValue != text {
            field.stringValue = text
        }
        field.requestFocus(focusRequest)
    }

    final class Field: NSTextField {
        var wrappedFocusChanged: ((Bool) -> Void)?
        private var focusRequest: UUID?
        private var handledRequest: UUID?

        override func viewDidMoveToWindow() {
            super.viewDidMoveToWindow()
            queueRequestedFocus()
        }

        override func becomeFirstResponder() -> Bool {
            let accepted = super.becomeFirstResponder()
            if accepted { wrappedFocusChanged?(true) }
            return accepted
        }

        func requestFocus(_ request: UUID?) {
            focusRequest = request
            queueRequestedFocus()
        }

        private func queueRequestedFocus() {
            guard let request = focusRequest, request != handledRequest, window != nil else { return }
            DispatchQueue.main.async { [weak self] in
                guard let self, self.focusRequest == request, self.handledRequest != request,
                      let window = self.window, window.makeFirstResponder(self) else { return }
                self.handledRequest = request
            }
        }
    }

    final class Coordinator: NSObject, NSTextFieldDelegate {
        var parent: ToolbarSearchField

        init(_ parent: ToolbarSearchField) { self.parent = parent }

        func focusChanged(_ focused: Bool) {
            DispatchQueue.main.async { [weak self] in
                guard let self, parent.isFocused != focused else { return }
                parent.isFocused = focused
            }
        }

        func controlTextDidChange(_ notification: Notification) {
            guard let field = notification.object as? NSTextField,
                  let editor = field.currentEditor() as? NSTextView, !editor.hasMarkedText() else { return }
            parent.text = editor.string
        }

        func controlTextDidEndEditing(_ notification: Notification) {
            if let field = notification.object as? NSTextField, parent.text != field.stringValue {
                parent.text = field.stringValue
            }
            focusChanged(false)
        }

        func control(_ control: NSControl, textView: NSTextView, doCommandBy commandSelector: Selector) -> Bool {
            guard commandSelector == #selector(NSResponder.cancelOperation(_:)), !textView.hasMarkedText() else {
                return false
            }
            textView.string = ""
            parent.text = ""
            return true
        }
    }
}
