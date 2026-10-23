#!/usr/bin/env python3
"""Pack public/hype/press/hype-press-kit.zip from press-kit/ and copy the fact sheets.

Run after editing press-kit/fact-sheet-*.txt or the images in press-kit/images/:

    python3 scripts/build-press-kit.py
"""

from pathlib import Path
import shutil
import zipfile

root = Path(__file__).resolve().parents[1]
kit = root / "press-kit"
out_dir = root / "public" / "hype" / "press"
out_dir.mkdir(parents=True, exist_ok=True)

for name in ("fact-sheet-en.txt", "fact-sheet-ja.txt"):
	shutil.copy(kit / name, out_dir / name)

zip_path = out_dir / "hype-press-kit.zip"
if zip_path.exists():
	zip_path.unlink()

files = [
	(kit / "README.txt", "HYPE-press-kit/README.txt"),
	(kit / "fact-sheet-en.txt", "HYPE-press-kit/fact-sheet-en.txt"),
	(kit / "fact-sheet-ja.txt", "HYPE-press-kit/fact-sheet-ja.txt"),
	(kit / "outorbit-logo.svg", "HYPE-press-kit/outorbit-logo.svg"),
	(kit / "images" / "key-art.png", "HYPE-press-kit/images/key-art.png"),
	(kit / "images" / "steam-header.jpg", "HYPE-press-kit/images/steam-header.jpg"),
	(kit / "images" / "steam-capsule.jpg", "HYPE-press-kit/images/steam-capsule.jpg"),
]

for shot in sorted((kit / "images" / "screenshots").glob("*.jpg")):
	files.append((shot, f"HYPE-press-kit/images/screenshots/{shot.name}"))

for concept in sorted((kit / "images" / "concept").glob("*")):
	files.append((concept, f"HYPE-press-kit/images/concept/{concept.name}"))

with zipfile.ZipFile(zip_path, "w", compression=zipfile.ZIP_DEFLATED) as archive:
	for src, dest in files:
		if not src.exists():
			raise SystemExit(f"Missing press kit file: {src}")
		archive.write(src, dest)

print(f"Wrote {zip_path.relative_to(root)} ({zip_path.stat().st_size // 1024} KB)")
