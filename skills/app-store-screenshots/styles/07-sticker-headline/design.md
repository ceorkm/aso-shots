# 07 · Sticker Headline

> Soft grey-white panels where one word in each headline is replaced by a white sticker containing an icon and a word, with the line partly greyed. Clean black phones, die-cut 3D object stickers and dashed connector lines.

**Best for:** Creative tools, music/audio, productivity. Minimal, premium, playful detail.

## Canvas & panels
- Design canvas 2000 × 1055, background `#e3e3e3`.
- 4 panels, 415 × 897, top 99, radius 48, x = 83 / 523.5 / 964 / 1404.
- Panel background: soft radial white `#fdfcfc` centre → `#f5f4f5` edges, with faint concentric ripple rings behind the phone.

Panels are App Store portrait screenshots (ratio ≈ 0.46). Export each panel with `scripts/export.js` presets `ios-6.9` (1320 × 2868) and `ios-6.3` (1206 × 2622, required); build a separate 9:16 layout for Google Play.

## Colour palette
| Role | Hex |
|---|---|
| Canvas | `#e3e3e3` |
| Panel | `#fdfcfc` → `#f5f4f5` |
| Ink | `#16161a` |
| Greyed word | `#b9b9bd` |
| Sticker white | `#ffffff` + shadow |
| Accent button | `#5b5ff0` (indigo), black `#0b0b0d` |

## Typography
- Headlines: **Inter** 800, tracking −4%, cap ≈ 12% of panel width, centred, 3 lines.
- The middle line starts with a **greyed word** (`#b9b9bd`), and a white rounded **sticker** (radius 14, shadow) overlaps it, holding a small icon + a word in Inter 800 black.
- Small "#1 App for…" laurel in grey Inter 800.
- UI: Inter 500–700.

## Device presentation
- Front-facing black modern phone, flat frame; phones cropped by the panel top or bottom edge.

## Decorative system
- Die-cut stickers: object photos/renders with a thick white outline (6–8 px) and a soft shadow, rotated slightly.
- Dashed connector arrows: SVG, 2px grey `#9a9aa0`, 6/6 dash.
- Ripple rings: concentric 1px circles at 4% opacity.

## Build recipe
- Objects: CC0 photos or 3D-emoji renders cut out; white outline via stacked drop-shadows.
- Everything else is flat CSS/SVG.

## Do / Don't
- **Do** use exactly one sticker word per headline.
- **Do** keep the palette monochrome; colour lives only in the stickers and buttons.
- **Don't** add background colour to the panels.

## Fidelity checklist
- [ ] Every panel has the App Store portrait ratio (≈ 0.46 : 1).
- [ ] Panel colours were sampled from pixels, not guessed.
- [ ] Every headline word was placed at its measured position and width; line breaks match.
- [ ] Every person, product or object in a photo fits the storyboard in hair, clothing colours and pose; recolour or composite a real photo if needed.
- [ ] Only things this style draws in 3D are rendered in 3D. Flat things stay flat (CSS/SVG).
- [ ] Viewed side by side, as a slider and as an overlay, every element lines up within a few px.
