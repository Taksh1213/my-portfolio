from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

output_dir = Path('public')
output_dir.mkdir(parents=True, exist_ok=True)
size = (64, 64)
background = (14, 165, 233)
text_color = (15, 23, 42)

img = Image.new('RGB', size, background)
draw = ImageDraw.Draw(img)

try:
    font = ImageFont.truetype('arial.ttf', 36)
except Exception:
    font = ImageFont.load_default()

text = 'T'
text_bbox = draw.textbbox((0, 0), text, font=font)
text_width = text_bbox[2] - text_bbox[0]
text_height = text_bbox[3] - text_bbox[1]
text_position = ((size[0] - text_width) / 2, (size[1] - text_height) / 2 - 2)

draw.text(text_position, text, fill=text_color, font=font)

img.save(output_dir / 'favicon.ico', format='ICO', sizes=[(64, 64)])
print('Created public/favicon.ico')
