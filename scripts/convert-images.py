from pathlib import Path
from PIL import Image

folder = Path('public/images')
for path in folder.glob('*.png'):
    img = Image.open(path)
    out = folder / (path.stem + '.webp')
    img = img.convert('RGBA') if img.mode in ('RGBA', 'LA') else img.convert('RGB')
    img.save(out, 'WEBP', quality=75, optimize=True, method=6)
    print(path.name, '->', out.name, 'size', round(path.stat().st_size / 1024, 1), 'KB', '->', round(out.stat().st_size / 1024, 1), 'KB')
