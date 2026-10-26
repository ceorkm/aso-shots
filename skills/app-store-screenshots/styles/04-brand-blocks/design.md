# 04 · Brand Blocks

> Solid brand-colour panels (blue, white, orange, white) with a flat vector mascot bird, big round flag discs, a comparison card and a real-person video on the phone. Clean, confident, product-marketing.

**Best for:** Language learning, education, edtech. Bright, credible, playful mascot.

## Canvas & panels
- Design canvas 843 × 632, background `#eaeaea`.
- 4 panels, 166 × 358, top 95, radius 19, x = 75 / 251 / 425 / 602.
- Panel colours: P1 brand blue `#3588f0`, P2 white `#f8f8f8`, P3 brand orange `#f2611a`, P4 white.

Panels are App Store portrait screenshots (ratio ≈ 0.46). Export each panel with `scripts/export.js` presets `ios-6.9` (1320 × 2868) and `ios-6.3` (1206 × 2622, required); build a separate 9:16 layout for Google Play.

## Colour palette
| Role | Hex |
|---|---|
| Brand blue | `#3588f0` |
| Brand orange | `#f2611a` |
| Ink | `#141414` / `#242b32` |
| White panel | `#f8f8f8` |
| Success green | `#22c55e` |
| Seal red | `#e8343a` |

## Typography
- Headlines: **Plus Jakarta Sans** 700–800, cap ≈ 12% of panel width; the small lead-in line above is 500 at ~45% of the headline size.
- An italic, semi-transparent "fast"-type word below the headline (Plus Jakarta Sans 600 italic, gradient fade).
- Serif credentials line (university-style wordmarks) in **Libre Caslon Text**.
- UI text: Plus Jakarta Sans 500–700.

## Device presentation
- Front-facing black phone, flat device frame, video still (real CC0 portrait photo) as the screen with UI overlays drawn on top.

## Decorative system
- Mascot: **flat vector SVG** (traced shapes, solid fills, no gradients except a subtle beak shade). Never 3D: this style is flat.
- Flag discs: SVG circles with simple flag geometry.
- Seal: SVG scalloped circle.

## Build recipe
- All flat: SVG and CSS. Photos only for the video stills.
- Draw the mascot as traced SVG paths.

## Do / Don't
- **Do** alternate coloured and white panels.
- **Do** keep the mascot flat and cropped at panel edges.
- **Don't** add gradients or 3D to the mascot.

## Fidelity checklist
- [ ] Every panel has the App Store portrait ratio (≈ 0.46 : 1).
- [ ] Panel colours were sampled from pixels, not guessed.
- [ ] Every headline word was placed at its measured position and width; line breaks match.
- [ ] Every person, product or object in a photo fits the storyboard in hair, clothing colours and pose; recolour or composite a real photo if needed.
- [ ] Only things this style draws in 3D are rendered in 3D. Flat things stay flat (CSS/SVG).
- [ ] Viewed side by side, as a slider and as an overlay, every element lines up within a few px.
