from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "og-image.png"

W, H = 1200, 630
SCALE = 2
SW, SH = W * SCALE, H * SCALE

NAVY_TOP = (10, 22, 40)
NAVY_BOTTOM = (15, 31, 61)
BLUE = (59, 130, 246)
BLUE_2 = (96, 165, 250)
WHITE = (255, 255, 255)
SLATE_300 = (203, 213, 225)
SLATE_400 = (148, 163, 184)

FONT_CANDIDATES = [
    "C:/Windows/Fonts/arialbd.ttf",
    "C:/Windows/Fonts/ArialBD.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
]


def font(size: int) -> ImageFont.FreeTypeFont:
    for path in FONT_CANDIDATES:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def lerp(a: tuple, b: tuple, t: float) -> tuple:
    return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))


def draw() -> Image.Image:
    img = Image.new("RGB", (SW, SH), NAVY_TOP)
    draw = ImageDraw.Draw(img)

    for y in range(SH):
        t = y / (SH - 1)
        draw.line([(0, y), (SW, y)], fill=lerp(NAVY_TOP, NAVY_BOTTOM, t))

    draw.ellipse([SW - 560, -380, SW + 180, 360], fill=(15, 34, 66))
    draw.ellipse([-420, SH - 300, 60, SH + 120], fill=(20, 42, 82))

    avatar_center = (300 * SCALE, 315 * SCALE)
    avatar_r = 165 * SCALE
    draw.ellipse(
        [
            avatar_center[0] - avatar_r,
            avatar_center[1] - avatar_r,
            avatar_center[0] + avatar_r,
            avatar_center[1] + avatar_r,
        ],
        fill=BLUE,
    )
    eye_off = 42 * SCALE
    eye_r = 16 * SCALE
    for dx in (-eye_off, eye_off):
        draw.ellipse(
            [
                avatar_center[0] + dx - eye_r,
                avatar_center[1] - 45 * SCALE - eye_r,
                avatar_center[0] + dx + eye_r,
                avatar_center[1] - 45 * SCALE + eye_r,
            ],
            fill=WHITE,
        )
    draw.arc(
        [
            avatar_center[0] - 95 * SCALE,
            avatar_center[1] - 60 * SCALE,
            avatar_center[0] + 95 * SCALE,
            avatar_center[1] + 105 * SCALE,
        ],
        start=20,
        end=160,
        fill=WHITE,
        width=22 * SCALE,
    )

    name_font = font(64 * SCALE)
    sub_font = font(36 * SCALE)
    foot_font = font(26 * SCALE)

    text_x = 600 * SCALE
    draw.text((text_x, 250 * SCALE), "Eduardo Rojas Velasquez", font=name_font, fill=WHITE)
    draw.text((text_x, 340 * SCALE), "IT Operations", font=sub_font, fill=BLUE_2)
    draw.text((text_x, 390 * SCALE), "Business Software Developer", font=sub_font, fill=BLUE_2)
    draw.text((text_x, 440 * SCALE), "AI Automation", font=sub_font, fill=BLUE_2)
    draw.text((text_x, 500 * SCALE), "eduardo-cv.pages.dev", font=foot_font, fill=SLATE_400)

    return img.resize((W, H), Image.LANCZOS)


if __name__ == "__main__":
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    draw().save(OUTPUT)
    print(f"Wrote {OUTPUT}")
