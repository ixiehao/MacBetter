#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."

configuration="${1:-release}"
case "$configuration" in debug|release) ;; *) echo "Use debug or release." >&2; exit 2 ;; esac
architecture="${2:-}"
case "$architecture" in ""|arm64|x86_64) ;; *) echo "Use arm64 or x86_64." >&2; exit 2 ;; esac

# Keep the generated toolchain cache with the local build.
module_cache="$PWD/desktop/.build/module-cache"
mkdir -p "$module_cache"
export SWIFTPM_MODULECACHE_OVERRIDE="$module_cache"
swift_args=(--package-path desktop -c "$configuration" --manifest-cache local)
output="$PWD/desktop/dist"
if [[ -n "$architecture" ]]; then
    swift_args+=(--arch "$architecture" --scratch-path "$PWD/desktop/.build/$architecture")
    output="$output/$architecture"
fi
if [[ "${MACBETTER_SWIFT_DISABLE_SANDBOX:-0}" == 1 ]]; then
    swift_args+=(--disable-sandbox -debug-info-format none)
fi
swift build "${swift_args[@]}" -Xswiftc -module-cache-path -Xswiftc "$module_cache"
binary_directory="$(swift build "${swift_args[@]}" --show-bin-path)"
mkdir -p "$output"
stage="$(mktemp -d "$output/.packaging.XXXXXXXX")"
trap 'rm -rf "$stage"' EXIT

bundle="$stage/MacBetter.app"
resources="$bundle/Contents/Resources"
mkdir -p "$bundle/Contents/MacOS" "$resources"
cp desktop/Packaging/Info.plist "$bundle/Contents/Info.plist"
cp "$binary_directory/MacBetter" "$bundle/Contents/MacOS/MacBetter"
binary="$bundle/Contents/MacOS/MacBetter"
if [[ -n "$architecture" ]]; then
    [[ "$(lipo -archs "$binary")" == "$architecture" ]]
    minimum="$(plutil -extract LSMinimumSystemVersion raw "$bundle/Contents/Info.plist")"
    xcrun vtool -show-build "$binary" | awk -v minimum="$minimum" '
        $1 == "platform" && $2 == "MACOS" { mac = 1 }
        $1 == "minos" && $2 == minimum { min = 1 }
        END { exit !(mac && min) }'
    xcrun dsymutil "$binary" -o "$stage/MacBetter.dSYM"
    binary_uuid="$(xcrun dwarfdump --uuid "$binary" | awk '{print $2}')"
    symbols_uuid="$(xcrun dwarfdump --uuid "$stage/MacBetter.dSYM" | awk '{print $2}')"
    [[ -n "$binary_uuid" && "$binary_uuid" == "$symbols_uuid" ]]
fi

node --input-type=module - "$resources/desktop-v1.json" <<'JS'
import { readFileSync, writeFileSync } from "node:fs";
import { desktopCatalog } from "./scripts/desktop-catalog.mjs";
const catalog = JSON.parse(readFileSync("website/data/apps.json", "utf8"));
writeFileSync(process.argv[2], desktopCatalog(catalog) + "\n");
JS

cp -R website/assets/icons "$resources/catalog-icons"
cp desktop/Brand/macbetter-mark.svg "$resources/"
cp website/assets/TABLER-ICONS-LICENSE.md LICENSE "$resources/"
node desktop/Packaging/extract-glyphs.mjs "$resources/glyphs"
cp desktop/Packaging/glyphs/*.svg "$resources/glyphs/"

swift -module-cache-path "$module_cache" desktop/Packaging/render-brand.swift \
    "$resources/macbetter-mark.svg" "$stage/macbetter-mark.png"
sips -z 512 512 "$stage/macbetter-mark.png" --out "$stage/macbetter-icon-512.png" >/dev/null
sips -s format icns "$stage/macbetter-icon-512.png" --out "$resources/MacBetter.icns" >/dev/null

codesign --force --sign - --options runtime "$bundle"
codesign --verify --strict --verbose=2 "$bundle"
destination="$output/MacBetter.app"
if [[ -e "$destination" ]]; then
    mv "$destination" "$stage/previous.app"
fi
if ! mv "$bundle" "$destination"; then
    if [[ -d "$stage/previous.app" ]]; then mv "$stage/previous.app" "$destination"; fi
    exit 1
fi
if [[ -n "$architecture" ]]; then
    version="$(plutil -extract CFBundleShortVersionString raw "$destination/Contents/Info.plist")"
    mkdir -p desktop/dist/Symbols
    ditto "$stage/MacBetter.dSYM" "desktop/dist/Symbols/MacBetter-$version-$architecture.dSYM"
fi

printf '%s\n' "$destination"
