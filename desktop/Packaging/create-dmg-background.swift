import AppKit

func fail(_ message: String) -> Never {
    FileHandle.standardError.write(Data((message + "\n").utf8))
    exit(EXIT_FAILURE)
}

guard CommandLine.arguments.count == 4 else {
    fail("Usage: create-dmg-background.swift <output PNG> <chip label> <minimum macOS>")
}

// Match the Finder content area and icon centers in dmg-layout.py.
let size = NSSize(width: 660, height: 380)
let bounds = NSRect(origin: .zero, size: size)
guard let bitmap = NSBitmapImageRep(
    bitmapDataPlanes: nil, pixelsWide: Int(size.width), pixelsHigh: Int(size.height),
    bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false,
    colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0
), let context = NSGraphicsContext(bitmapImageRep: bitmap) else {
    fail("Unable to create the installer background")
}

let ink = NSColor(srgbRed: 0.07, green: 0.13, blue: 0.25, alpha: 1)
let secondary = NSColor(srgbRed: 0.25, green: 0.34, blue: 0.49, alpha: 1)
let accent = NSColor(srgbRed: 0.14, green: 0.34, blue: 0.69, alpha: 1)
let paleBlue = NSColor(srgbRed: 0.89, green: 0.94, blue: 1, alpha: 1)
let nearWhite = NSColor(srgbRed: 0.98, green: 0.99, blue: 1, alpha: 1)

func center(_ title: String, at y: CGFloat, font: NSFont, color: NSColor) {
    let paragraph = NSMutableParagraphStyle()
    paragraph.alignment = .center
    NSAttributedString(string: title, attributes: [
        .font: font, .foregroundColor: color, .paragraphStyle: paragraph,
    ]).draw(in: NSRect(x: 36, y: y, width: size.width - 72, height: font.pointSize * 1.55))
}

NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = context
NSGradient(starting: nearWhite, ending: paleBlue)?.draw(in: bounds, angle: -90)

center("MacBetter", at: 309, font: .systemFont(ofSize: 32, weight: .bold), color: ink)
let chip = CommandLine.arguments[2]
let minimum = CommandLine.arguments[3]
center("\(chip) · macOS \(minimum)+", at: 287, font: .systemFont(ofSize: 13, weight: .medium), color: secondary)

let middle = NSPoint(x: size.width / 2, y: size.height - 156)
NSColor.white.withAlphaComponent(0.68).setFill()
NSBezierPath(ovalIn: NSRect(x: middle.x - 24, y: middle.y - 24, width: 48, height: 48)).fill()

// Tabler Icons Outline v3.49.0, arrow-right. MIT notice is in the application bundle.
func point(_ x: CGFloat, _ y: CGFloat) -> NSPoint {
    NSPoint(x: middle.x + (x - 12) * 1.5, y: middle.y - (y - 12) * 1.5)
}
let arrow = NSBezierPath()
arrow.lineWidth = 3
arrow.lineCapStyle = .round
arrow.lineJoinStyle = .round
arrow.move(to: point(5, 12))
arrow.line(to: point(19, 12))
arrow.move(to: point(13, 18))
arrow.line(to: point(19, 12))
arrow.line(to: point(13, 6))
accent.setStroke()
arrow.stroke()

center("Drag MacBetter to Applications.", at: 83, font: .systemFont(ofSize: 15, weight: .semibold), color: ink)
center("将 MacBetter 拖到「应用程序」。", at: 60, font: .systemFont(ofSize: 14), color: secondary)
center("MacBetter を「アプリケーション」にドラッグします。", at: 37, font: .systemFont(ofSize: 14), color: secondary)
NSGraphicsContext.restoreGraphicsState()

guard let png = bitmap.representation(using: .png, properties: [:]) else {
    fail("Unable to encode the installer background")
}
try png.write(to: URL(fileURLWithPath: CommandLine.arguments[1]), options: .atomic)
