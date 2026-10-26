# 08 · Glow Night

> Near-black panels on electric blue, with glowing white headline words, blue edge glows, chat bubbles and photos of friends, plus a soft 3D blue character. Night-out, social, privacy-friendly.

**Best for:** Photo sharing, social, camera/AI face features. Moody, modern, fun.

## Canvas & panels
- Design canvas 1906 × 996, background electric blue `#0093fd`.
- 4 panels, 402 × 868, top 64, radius 50, x = 88 / 514 / 940 / 1366.
- Panel background `#020203` with blue glows: panels 1 and 3 glow at the top and bottom edges (`#004272` → transparent over ~96 px; bottom rising to `#004679`); panels 2 and 4 are plain black. Inner rim `inset 0 0 0 1.5px rgba(80,160,255,.35)`.

Panels are App Store portrait screenshots (ratio ≈ 0.46). Export each panel with `scripts/export.js` presets `ios-6.9` (1320 × 2868) and `ios-6.3` (1206 × 2622, required); build a separate 9:16 layout for Google Play.

## Colour palette
| Role | Hex |
|---|---|
| Canvas | `#0093fd` |
| Panel | `#020203` |
| Edge glow | `#004272` / `#004679` |
| Bubble blue | `#1f8bff` |
| Bubble grey | `#e9e9ee` |
| Glow text | `#ffffff` with white bloom |

## Typography
- Headlines: **Nunito** 900 (rounded), white, with a soft white glow (`drop-shadow(0 0 6px rgba(255,255,255,.55))`); lines alternate a smaller regular word and a huge glowing word (for example "In your friends'" / "**gallery**").
- Bubbles & UI: Inter 500–700.
- Keep the glow tight, or the text looks blurry.

## Device presentation
- Front-facing phones with a **blue glowing rim** (2px `#2a8cff` + outer glow); screens are dark UI.

## Decorative system
- 3D character and hand: WebGL soft blue matte material (or 3D emoji-style renders), with a subtle subsurface feel.
- Face-scan brackets: white rounded corner strokes.
- Photos: real CC0 group/friend photos.

## Build recipe
- Glows: CSS gradients on panels and filter drop-shadows on text, kept tight.
- Three.js for the character and the hand only.

## Do / Don't
- **Do** keep panels black and let the blue live in glows, bubbles and the canvas.
- **Don't** blur the headline; the glow must stay crisp.

## Fidelity checklist
- [ ] Every panel has the App Store portrait ratio (≈ 0.46 : 1).
- [ ] Panel colours were sampled from pixels, not guessed.
- [ ] Every headline word was placed at its measured position and width; line breaks match.
- [ ] Every person, product or object in a photo fits the storyboard in hair, clothing colours and pose; recolour or composite a real photo if needed.
- [ ] Only things this style draws in 3D are rendered in 3D. Flat things stay flat (CSS/SVG).
- [ ] Viewed side by side, as a slider and as an overlay, every element lines up within a few px.
