# 06 · Mascot Hype

> Electric purple panels with huge italic condensed hype headlines, a furry 3D gorilla mascot, coral pill tags and before/after photo cards. Loud, sporty, motivating.

**Best for:** Fitness, workout, diet, habit apps. High energy, bold, fun.

## Canvas & panels
- Design canvas 1746 × 996, background lavender `#e6dcff`.
- 4 panels, 401 × 869, top 68, radius 50, x = 36 / 462 / 888 / 1315.
- Panel background: vertical gradient `#7c45ff` → `#8148ff` → `#8a4cfb` → `#9b51ef` → `#a653f2`.

Panels are App Store portrait screenshots (ratio ≈ 0.46). Export each panel with `scripts/export.js` presets `ios-6.9` (1320 × 2868) and `ios-6.3` (1206 × 2622, required); build a separate 9:16 layout for Google Play.

## Colour palette
| Role | Hex |
|---|---|
| Canvas | `#e6dcff` |
| Purple | `#7c45ff` → `#a653f2` |
| Deep purple | `#603aad` |
| Coral pill | `#f76a6a` |
| White | `#ffffff` |
| Ink on white | `#16161a` |

## Typography
- Kicker (top line): **Archivo** 900 expanded, white, caps, ≈ 5.5% of panel width.
- Hero headline: **Archivo** 900 **condensed (wdth 62) italic**, white, caps, cap height ≈ 22% of panel width, very tight; 1–2 lines; can be cut slightly by the next element.
- Pill tags: Archivo 900 caps on coral, white.
- UI: Inter 600–700.

## Device presentation
- Front-facing phone with a soft white glow frame; screens drawn in code; important cards overhang the phone.

## Decorative system
- Gorilla: WebGL with real **shell-texture fur** (many offset shells with noise alpha), purple, headband with a lightning bolt, expressive eyes. Separate poses per panel (flex, teacher, pointing).
- Before/after: real CC0 fitness photos; desaturate the "before".

## Build recipe
- Three.js for the mascot only (fur shells, ~24–32 layers).
- Archivo variable font with `font-variation-settings:'wdth' 62` and italic for the hero type.

## Do / Don't
- **Do** make the hero headline as big as possible.
- **Do** give the mascot a different pose and prop per panel.
- **Don't** use plain bold; the condensed italic is the voice of this style.

## Fidelity checklist
- [ ] Every panel has the App Store portrait ratio (≈ 0.46 : 1).
- [ ] Panel colours were sampled from pixels, not guessed.
- [ ] Every headline word was placed at its measured position and width; line breaks match.
- [ ] Every person, product or object in a photo fits the storyboard in hair, clothing colours and pose; recolour or composite a real photo if needed.
- [ ] Only things this style draws in 3D are rendered in 3D. Flat things stay flat (CSS/SVG).
- [ ] Viewed side by side, as a slider and as an overlay, every element lines up within a few px.
