// swift-tools-version: 5.10
import PackageDescription

let package = Package(
    name: "MacBetterDesktop",
    platforms: [.macOS(.v14)],
    targets: [
        .executableTarget(name: "MacBetter"),
        .testTarget(name: "MacBetterTests", dependencies: ["MacBetter"]),
    ]
)
