# Build recipes

Everything is one HTML file: a fixed-size **stage** that holds the panels side by side, built with HTML/CSS/SVG (plus Three.js only for real 3D). Export screenshots each panel separately.

## 1. Stage & panels

```html
<div id="stage" style="position:relative;width:{W}px;height:{H}px;background:{canvas}">
  <div class="panel" style="left:{x}px;top:{y}px;width:{w}px;height:{h}px;border-radius:{r}px;background:{bg}"></div>
</div>
```
```css
.panel{position:absolute;overflow:hidden}
.abs{position:absolute}
```
- Take the geometry from the chosen `design.md`.
- Place every element in **stage coordinates** with a helper `box(panel, x, y, w, h, html, css)` that subtracts the panel's origin. Elements that cross a panel seam are added to each panel at the same stage position; each panel clips its own part.
- Keep each panel at a ratio of about 0.46 (portrait App Store). Design at the canvas size and scale up at export.

## 2. Text that fits exactly

Place each headline line, or each word when words are styled differently, with SVG `textLength`, so the width is exact whatever the font metrics are:
```js
// x, baseline, cap height in px, weight, text, target ink width
function T(parent, x, base, cap, weight, txt, w, fill, fam='Inter') {
  const fs = cap / CAP[fam];                 // CAP = measured cap-height ratio of the font
  const h = fs * 1.4;
  parent.insertAdjacentHTML('beforeend',
    `<svg class="abs" style="left:${x-4}px;top:${base-fs*1.05}px" width="${w+8}" height="${h}">
       <text x="4" y="${fs*1.05}" font-family="${fam}" font-weight="${weight}" font-size="${fs}" fill="${fill}"
             textLength="${w}" lengthAdjust="spacingAndGlyphs">${txt}</text></svg>`);
}
// measure CAP once fonts load: ctx.font = '700 100px Inter'; CAP.Inter = ctx.measureText('H').actualBoundingBoxAscent / 100
```
- Wait for `document.fonts.load(...)` before laying out any text.
- Load Google Fonts with only the weights you use.
- Tricks used by the styles:
  - **Mixed weights or fonts:** one `T()` per word.
  - **Gradient text:** an SVG `linearGradient` fill.
  - **Softer rounded type:** a same-colour stroke with `stroke-linejoin="round"`.
  - **Narrowed type:** `transform="scale(0.92 1)"`.
  - **Glow:** `filter: drop-shadow(0 0 6px rgba(255,255,255,.5))`. Keep it tight.

## 3. Device frames

Choose per screenshot (see SKILL.md Rules): **no frame**, **soft frame**, or **realistic frame**.

**Soft frame** (the default when a device helps): the screen with large rounded corners, a soft light bezel and a gentle shadow, with no metal edges, buttons or glare.
```css
.soft{border-radius:56px;padding:10px;background:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.06),0 30px 60px rgba(0,0,0,.10)}
.soft .screen{border-radius:46px;overflow:hidden}
```
**Realistic frame** (only when a physical device makes sense):

Use **real device-frame PNGs** with a transparent screen hole. The free set is fastlane frameit-frames:
`https://raw.githubusercontent.com/fastlane/frameit-frames/gh-pages/latest/<Device Name>.png`, with screen offsets in `latest/offsets.json`.

Useful frames:
- `Apple iPhone 16 Pro Black Titanium` (also White / Natural / Desert);
- `Apple iPhone 16 Pro Max Black Titanium`;
- `Apple iPhone 13 Midnight` (notch style).

Measure the screen hole (the first transparent pixel run in the middle row and middle column), then:
```html
<div class="abs" style="left:..;top:..;width:{frameW*k}px;height:{frameH*k}px">
  <img src="screen.png" style="position:absolute;left:{sx*k}px;top:{sy*k}px;width:{sw*k}px;height:{sh*k}px;border-radius:{sw*k*.13}px">
  <img src="frame.png" style="position:absolute;inset:0;width:100%;height:100%">
</div>
```
- **Frame colour:** recolour only the coloured rim pixels (keep the luminance, swap the hue) to match a brand.
- **White outline** (a common style touch): stacked `drop-shadow(±1.5px 0 0 #fff) drop-shadow(0 ±1.5px 0 #fff)`.
- **The user's real screenshot is the screen.** Crop away the status bar only if it's ugly.

## 4. Tilted phones

| Look | Method |
|---|---|
| Rotated flat in the image plane | Rotate the whole frame + screen group with `transform:rotate(deg)` |
| Leaning back (wider at the bottom) | Compose frame + screen on a canvas, then keystone-warp it row by row from a homography solved from the target corners. Sharper than CSS 3D at small sizes. |
| A real 3D angle | Three.js with a real phone model (the free iPhone 15 Pro GLB from github.com/YUZU-Hub/appscreen, MIT). Put the screen on an overlay plane; pose it with OpenCV `solvePnP` against 4 target corners, or set angles by eye. |

When matching the user's inspiration: pick 3 landmarks on the screen (the time, the notch or island, the battery), solve scale, rotation and offset, and draw the screen content through the inverse transform.

## 5. Screen on a generated phone (AI hand or phone image)

1. Generate the phone with a flat `#00FF00` screen (`assets.md`).
2. Find the green quad: mask `g > 180 & r < 90 & b < 90`, then take the 4 corners of the largest blob (`cv2.approxPolyDP`).
3. Warp the app screenshot into that quad (`cv2.getPerspectiveTransform` + `warpPerspective`), with rounded-corner masking; or use a CSS `matrix3d` built from the homography.
4. Composite: hand image, then the warped screen inside the green area, then edge despill (`scripts/chroma_key.py`).

## 6. Glass, cards, pills, stickers

```css
.glass{background:linear-gradient(180deg,rgba(255,255,255,.34),rgba(255,255,255,.1) 60%,rgba(255,255,255,.2));
  border:1.5px solid rgba(255,255,255,.72);backdrop-filter:blur(8px);
  box-shadow:inset 0 2px 6px rgba(255,255,255,.55),0 8px 22px rgba(0,60,140,.14)}
.card{background:#fff;border-radius:22px;box-shadow:0 14px 34px rgba(0,0,0,.10)}
.sticker{filter:drop-shadow(3px 0 0 #fff) drop-shadow(-3px 0 0 #fff) drop-shadow(0 3px 0 #fff) drop-shadow(0 -3px 0 #fff) drop-shadow(0 6px 10px rgba(0,0,0,.18))}
```
- Pull important UI out of the phone: the card is wider than the screen and overlaps the frame.
- Blurred colour meshes for backgrounds: sample a small colour grid, upscale it on canvas, then blur by about 25 px.

## 7. Real 3D (only for things that are 3D)

- Three.js `r149` from `https://cdn.jsdelivr.net/npm/three@0.149.0/build/three.min.js`.
- Render offscreen at 2×, copy into a canvas, then convert to an `<img>` (`toDataURL`) so it downsamples cleanly.
- Studio environment: a PMREM-generated texture from a dark sphere with 3–4 bright plane "softboxes".
- Chrome: `metalness:1, roughness:.13, clearcoat:.6`. Matte plastic: `roughness:.4, metalness:.05`.
- Organic characters, fur and plush: use AI generation instead (`assets.md`).

## 8. Check against the user's inspiration (when they ask to match one)

- Make the compare page (side by side / slider / overlay) and crop each panel next to the inspiration at 2×.
- Fix the biggest difference first. Repeat until every element is within a few px.
- Judge at thumbnail size too: shrink the whole set to about 1400 px wide.

## 9. Export

Use `scripts/export.js` (Playwright) with a preset or `WxH`:
```bash
node scripts/export.js screenshots.html out/ios-6.9  ios-6.9      # 1320 × 2868
node scripts/export.js screenshots.html out/ios-6.3  ios-6.3      # 1206 × 2622 (required size class)
node scripts/export.js screenshots-ipad.html out/ipad ipad-13     # 2064 × 2752
node scripts/export.js screenshots-play.html out/play play-phone  # 1080 × 1920
```
Output is RGB PNG with **no alpha channel** (both stores reject alpha); `--jpeg` writes quality-95 JPEG instead. Corners are exported square (stores show rectangles); `--keep-radius` keeps the design's rounding.
- It screenshots every `.panel` separately at high resolution, centre-crops to the exact ratio (it warns if more than 1% gets cropped), and resamples to the exact pixel size.

**Apple App Store** ([official spec](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/)): JPEG or PNG, no alpha, 1–10 per size class.

| Size class | Portrait px | Status |
|---|---|---|
| iPhone Dynamic Island, medium | **1206 × 2622** or 1179 × 2556 | **Required** |
| iPhone Dynamic Island, large | **1320 × 2868**, 1290 × 2796, 1260 × 2736 | Recommended (otherwise Face ID large is required) |
| iPhone Face ID, large | 1284 × 2778, 1242 × 2688 | Only if Dynamic Island large isn't provided |
| iPad 13" | **2064 × 2752** or 2048 × 2732 | Required if the app runs on iPad |
| iPad 11" | 1668 × 2420, 1668 × 2388, 1640 × 2360, 1488 × 2266 | Optional (scaled from 13") |

Smaller size classes are scaled down automatically from these. Both iPhone sets share the same ratio (≈ 0.46), so one design exports to both.

**Google Play** ([official spec](https://support.google.com/googleplay/android-developer/answer/9866151)): JPEG or 24-bit PNG (no alpha); shorter side 320–3840 px; long side at most 2× the short side; up to 8 per device type, at least 2 to publish; **alt text** (140 characters or less) for each.
- **Phone:** 9:16 portrait, at least 1080 × 1920. At least 4 at 1080 px+ are needed to be eligible for promotion.
- **7"/10" tablets and Chromebook:** at least 4, 9:16 or 16:9, 1080–7680 px.
- **Feature graphic** (required): 1024 × 500, no alpha; keep key content centred and avoid device imagery.
- **App icon:** 512 × 512, 32-bit PNG.
- Google recommends that screenshots show the real app UI without device frames or added text and backgrounds. Offer a "clean" Play variant: the screen with minimal headline, no frame.
- **Build the Play set as its own layout** with 9:16 panels (ratio 0.5625). Exporting the iPhone-shaped panels (0.46) at 9:16 would crop about 18% off the top and bottom; the script warns if that happens.
