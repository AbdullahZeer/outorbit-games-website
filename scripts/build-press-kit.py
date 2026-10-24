#!/usr/bin/env python3
"""Pack public/hype/press/hype-press-kit.zip from press-kit/ and copy the fact sheets and description.

Run after editing the copy or images in press-kit/:

    npm run presskit
"""

from pathlib import Path
import shutil
import zipfile

root = Path(__file__).resolve().parents[1]
kit = root / "press-kit"
out_dir = root / "public" / "hype" / "press"
out_dir.mkdir(parents=True, exist_ok=True)

for name in ("fact-sheet-en.txt", "fact-sheet-ja.txt", "description-en.txt"):
	shutil.copy(kit / name, out_dir / name)

zip_path = out_dir / "hype-press-kit.zip"
if zip_path.exists():
	zip_path.unlink()

# Include every file, including nested logos and GIFs, in a stable order.
files = [
	(src, f"HYPE-press-kit/{src.relative_to(kit).as_posix()}")
	for src in sorted(kit.rglob("*"))
	if src.is_file()
]

with zipfile.ZipFile(zip_path, "w", compression=zipfile.ZIP_DEFLATED) as archive:
	for src, dest in files:
		if not src.exists():
			raise SystemExit(f"Missing press kit file: {src}")
		archive.write(src, dest)

print(f"Wrote {zip_path.relative_to(root)} ({zip_path.stat().st_size // 1024} KB)")
