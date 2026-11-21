"""Finder window settings and verification for the MacBetter installer."""

import struct
import sys
from pathlib import Path


WIDTH, HEIGHT = 660, 380
APP_NAME = "MacBetter.app"
WINDOW_RECT = ((160, 120), (WIDTH, HEIGHT))
ICON_SIZE = 104
ICON_LOCATIONS = {APP_NAME: (165, 156), "Applications": (495, 156)}

if "defines" in globals():
    format = "UDZO"
    filesystem = "HFS+"
    files = [defines["app"]]
    symlinks = {"Applications": "/Applications"}
    background = defines["background"]
    show_toolbar = False
    show_status_bar = False
    show_sidebar = False
    show_pathbar = False
    show_tab_view = False
    default_view = "icon-view"
    window_rect = WINDOW_RECT
    icon_locations = ICON_LOCATIONS
    arrange_by = None
    icon_size = ICON_SIZE
    text_size = 13
elif __name__ == "__main__":
    from ds_store import DSStore
    from mac_alias import Alias

    def require(condition, message):
        if not condition:
            raise SystemExit(message)

    volume = Path(sys.argv[1])
    require((volume / APP_NAME / "Contents/Info.plist").is_file(), "Missing MacBetter.app")
    applications = volume / "Applications"
    require(applications.is_symlink() and applications.readlink() == Path("/Applications"),
            "Applications does not link to /Applications")
    image = volume / ".background.png"
    with image.open("rb") as png:
        header = png.read(24)
    require(header[:16] == b"\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR"
            and struct.unpack(">II", header[16:24]) == (WIDTH, HEIGHT), "Unexpected background dimensions")

    with DSStore.open(str(volume / ".DS_Store"), "r") as store:
        require(store["."]["icvl"] == (b"type", b"icnv"), "Finder must open in icon view")
        window = store["."]["bwsp"]
        (left, top), _ = WINDOW_RECT
        require(window["WindowBounds"] == f"{{{{{left}, {top}}}, {{{WIDTH}, {HEIGHT}}}}}",
                "Unexpected Finder window bounds")
        require(not any(window.get(key) for key in ("ShowToolbar", "ShowSidebar", "ShowStatusBar", "ShowPathbar")),
                "Unexpected Finder window controls")
        view = store["."]["icvp"]
        require(view["backgroundType"] == 2 and view["iconSize"] == ICON_SIZE and view["arrangeBy"] == "none",
                "Unexpected Finder background or icon settings")
        for item, location in ICON_LOCATIONS.items():
            require(store[item]["Iloc"] == location, f"Unexpected position for {item}")
        require(not list(store.find(".", b"pBBk")), "Obsolete bookmark may hide the Finder background")
        saved = Alias.from_bytes(view["backgroundImageAlias"]).target
        actual = Alias.for_file(str(image)).target
        require((saved.cnid, saved.creation_date) == (actual.cnid, actual.creation_date),
                "Finder background alias does not identify the packaged background")

    print("Verified Finder background, icon positions and Applications link")
