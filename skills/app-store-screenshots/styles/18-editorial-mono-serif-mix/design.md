# 18 · Editorial Mono Serif-Mix

> Strictly monochrome: white, light-grey, black and grey-to-black gradient panels. Headlines mix grey sans words with bold black (or white) serif words, with notch-style phones (some tilted), floating command bars and cards, and a 3D logo mark.

**Best for:** B2B SaaS, operations, inventory, analytics, AI agents. Premium, editorial, serious.

## Canvas & panels
- Design canvas 2000 × 1082, white `#ffffff`.
- 4 panels, top 104, h 958, radius 26: x = 98 (w 439, white → `#f5f4f7`), 586 (w 443, `#0b0b0b`), 1044 (w 440, `#eeeeee`), 1529 (w 442, `#7c7c7c` → `#0d0d0d` diagonal gradient).

Panels are App Store portrait screenshots (ratio ≈ 0.46). Export each panel with `scripts/export.js` presets `ios-6.9` (1320 × 2868) and `ios-6.3` (1206 × 2622, required); build a separate 9:16 layout for Google Play.

## Colour palette
| Role | Hex |
|---|---|
| White panel | `#ffffff` → `#f5f4f7` |
| Light grey panel | `#eeeeee` |
| Black panel | `#0b0b0b` |
| Grey words | `#9d9da0` |
| Dark words | `#38383b` / `#0f0f10` |
| Card grey | `#efeef1` / `#f8f8f9` |

## Typography
- Sans words: **Inter** 400, grey `#9d9da0` (or white on black), tracking −2%, cap ≈ 10.5% of panel width.
- Serif words: **Instrument Serif** (regular, thickened with a 2.8% same-colour stroke), black on light / white on dark; italic serif for whole lines on the black panel.
- Typical mix: "Inventory / tracking / made **effortless.**", "An **AI Agent** / built to take / action."
- UI: Inter 400–700.

## Device presentation
- Notch-style phone frame (flat PNG, midnight colour) with a thin light outline (1 px `#c9c9cb`).
- Tilted phones: the frame + screen are rotated as one unit; the transform is solved from three screen landmarks (time, notch, battery), and the screen content is drawn through the inverse transform.

## Decorative system
- 3D mark: WebGL, an octagonal ring + a raised square frame + an inner face + a triangle, matte grey materials with a studio environment.
- Feature cards: white, radius 16, soft shadow; icon tiles in pastel green/blue/purple.
- Floating input bar: white, radius 14, shadow.

## Build recipe
- Three.js only for the 3D mark. Food photo: CC0, reshaped/cropped to a top-down view.

## Do / Don't
- **Do** keep it grayscale; colour appears only in tiny icon tiles and photos.
- **Do** mix sans and serif inside the same headline.
- **Don't** use bold sans for the grey words; the serif carries the weight.

## Fidelity checklist
- [ ] Every panel has the App Store portrait ratio (≈ 0.46 : 1).
- [ ] Panel colours were sampled from pixels, not guessed.
- [ ] Every headline word was placed at its measured position and width; line breaks match.
- [ ] Every person, product or object in a photo fits the storyboard in hair, clothing colours and pose; recolour or composite a real photo if needed.
- [ ] Only things this style draws in 3D are rendered in 3D. Flat things stay flat (CSS/SVG).
- [ ] Viewed side by side, as a slider and as an overlay, every element lines up within a few px.
