#!/bin/bash
set -euo pipefail
desktop="$(cd "$(dirname "$0")" && pwd)"
packaging="$desktop/Packaging"
cd "$desktop/dist"

target="${1:-}"
case "$target" in ""|arm64|x86_64) ;; *) echo "Use arm64 or x86_64." >&2; exit 2 ;; esac
app="$PWD/${target:+$target/}MacBetter.app"
info="$app/Contents/Info.plist"
version="$(plutil -extract CFBundleShortVersionString raw "$info")"
minimum="$(plutil -extract LSMinimumSystemVersion raw "$info")"
architectures="$(lipo -archs "$app/Contents/MacOS/MacBetter")"
[[ -z "$target" || "$target" == "$architectures" ]]
case "$architectures" in
    arm64) chip="Apple Silicon" ;;
    x86_64) chip="Intel" ;;
    'arm64 x86_64'|'x86_64 arm64') architectures=universal; chip="Apple Silicon / Intel" ;;
    *) printf 'Unsupported app architecture: %s\n' "$architectures" >&2; exit 1 ;;
esac
name="MacBetter-$version-$architectures"
outputs=("$name.dmg" "$name.dmg.sha256" "$name.zip" "$name.zip.sha256")
for output in "${outputs[@]}"; do
    if [[ -e "$output" || -L "$output" ]]; then
        printf 'Installer output already exists: %s\n' "$output" >&2
        exit 1
    fi
done

python="${MACBETTER_DMG_PYTHON:-$desktop/.build/dmg-tools/bin/python3}"
if ! "$python" -c 'import dmgbuild, ds_store, mac_alias' >/dev/null 2>&1; then
    printf 'Set up the DMG packaging tools described in docs/DESKTOP.md.\n' >&2
    exit 1
fi

stage="$(mktemp -d "$PWD/.disk-image.XXXXXXXX")"
mounted=0
cleanup() {
    if [[ "$mounted" == 1 ]] && ! hdiutil detach "$stage/mount" >/dev/null; then return; fi
    rm -rf "$stage"
}
trap cleanup EXIT

codesign --verify --deep --strict --verbose=2 "$app"
mkdir "$stage/mount"
swift -module-cache-path "$desktop/.build/module-cache" \
    "$packaging/create-dmg-background.swift" "$stage/background.png" "$chip" "${minimum%.0}"
PYTHONDONTWRITEBYTECODE=1 "$python" -m dmgbuild -s "$packaging/dmg-layout.py" \
    -D app="$app" -D background="$stage/background.png" "MacBetter $version ($chip)" "$stage/$name.dmg"

hdiutil verify -quiet "$stage/$name.dmg"
hdiutil attach -quiet -readonly -nobrowse -noautoopen -mountpoint "$stage/mount" "$stage/$name.dmg"
mounted=1
PYTHONDONTWRITEBYTECODE=1 "$python" "$packaging/dmg-layout.py" "$stage/mount"
codesign --verify --deep --strict --verbose=2 "$stage/mount/MacBetter.app"
[[ "$(lipo -archs "$stage/mount/MacBetter.app/Contents/MacOS/MacBetter")" == "$(lipo -archs "$app/Contents/MacOS/MacBetter")" ]]
hdiutil detach -quiet "$stage/mount"
mounted=0

ditto -c -k --keepParent "$app" "$stage/$name.zip"
(
    cd "$stage"
    for extension in dmg zip; do
        shasum -a 256 "$name.$extension" > "$name.$extension.sha256"
        shasum -a 256 -c "$name.$extension.sha256"
    done
)
"$python" - "$stage" "${outputs[@]}" <<'PY'
import os
import sys
from pathlib import Path

stage = Path(sys.argv[1])
published = []
try:
    for name in sys.argv[2:]:
        os.link(stage / name, name, follow_symlinks=False)
        published.append(name)
except OSError:
    for name in published:
        if (stage / name).samefile(name):
            os.unlink(name)
    raise
PY
