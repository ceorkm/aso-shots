# 11 · Bubbly Sticker Rewards

> Fat, rounded, slightly tilted capitals in pale grey over a blurred olive/mauve gradient panel and two near-black panels, surrounded by brand-logo sticker circles, lime bag icons, reward pills, pastel 3D hearts and grey doodles.

**Best for:** Rewards, loyalty, cashback, beauty/retail communities. Playful, collectible, gamified.

## Canvas & panels
- Design canvas 1830 × 1310, background `#e3e3e3`.
- 3 panels, 539 × 1161, top 90, radius 76, x = 105 / 664 / 1223.
- Panel 1: blurred colour mesh (olive `#8a8070`, mauve `#7a6b64`, lime-olive `#b2b16e`), built by sampling a 7×13 colour grid and blurring it. Panels 2 and 3: `#141414`.

Panels are App Store portrait screenshots (ratio ≈ 0.46). Export each panel with `scripts/export.js` presets `ios-6.9` (1320 × 2868) and `ios-6.3` (1206 × 2622, required); build a separate 9:16 layout for Google Play.

## Colour palette
| Role | Hex |
|---|---|
| Canvas | `#e3e3e3` |
| Dark panel | `#141414` |
| Headline | `#ececec` |
| Lime | `#d6fd62` → `#a5d834` |
| Olive pill | `#34440f` → `#263308` |
| Grey doodles | `#5c5c5c` |
| Purple (levels) | `#8e72ff` |

## Typography
- Headlines: **Fredoka** 600, horizontally narrowed to 0.92, with a round-joined same-colour stroke (6% of size) to soften corners; pale grey `#ececec`; each line rotated −2° to +2°; cap ≈ 12% of panel width.
- Logo stickers use display fonts (rounded serif, geometric sans, condensed italic, fat display serif) to mimic varied brand marks.
- UI: Plus Jakarta Sans 600–800.

## Device presentation
- Panel 3 uses a **frameless phone outline**: a rounded rect with a 2px `#2b2b2b` border and a `#1a1a1a` fill.
- Dark UI cards are rotated −3° to −4° and stacked.

## Decorative system
- 3D pastel hearts (3D-emoji style, tinted white-pink to deep pink).
- Faceted grey gems: WebGL cut-gem geometry, matte metal.
- Lime bags: SVG with a radial highlight gradient.
- Blur on background stickers (0.5–2 px) for depth.

## Build recipe
- The colour-mesh background is generated, not drawn: sample a grid of colours, upscale and Gaussian-blur it on canvas.
- Product photos are CC0; logos are recreated with web fonts inside circles.

## Do / Don't
- **Do** tilt each headline line slightly differently.
- **Do** vary sticker blur for depth.
- **Don't** use the font at full width; narrow it.

## Fidelity checklist
- [ ] Every panel has the App Store portrait ratio (≈ 0.46 : 1).
- [ ] Panel colours were sampled from pixels, not guessed.
- [ ] Every headline word was placed at its measured position and width; line breaks match.
- [ ] Every person, product or object in a photo fits the storyboard in hair, clothing colours and pose; recolour or composite a real photo if needed.
- [ ] Only things this style draws in 3D are rendered in 3D. Flat things stay flat (CSS/SVG).
- [ ] Viewed side by side, as a slider and as an overlay, every element lines up within a few px.
