from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

for size in (192, 512):
    img = Image.new('RGB', (size, size), '#0ea5e9')
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype('arial.ttf', int(size * 0.6))
    except Exception:
        font = ImageFont.load_default()
    text = 'T'
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    position = ((size - text_width) / 2, (size - text_height) / 2)
    draw.text(position, text, fill='#020617', font=font)
    Path('public').mkdir(parents=True, exist_ok=True)
    img.save(Path('public') / f'icon-{size}.png', format='PNG')
    print(f'Created public/icon-{size}.png')
