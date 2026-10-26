# 12 · Lime Highlight Travel Mockups

> Light grey panels with big clean geometric headlines, one line marked with a lime highlighter block (with editor handles), travel scenery wrapping around phones, a hand-held phone and a phone tilted in 3D.

**Best for:** Travel, booking, hospitality, outdoor experiences. Fresh, aspirational, clear.

## Canvas & panels
- Design canvas 1622 × 1154, background `#a7a7a9` with faint hand-drawn swirl lines (`#b3b3b5`).
- 3 panels, 476 × 1030, top 45, radius 48, x = 78 / 582 / 1085.
- Panels `#ebebed` with soft white cloud blobs.

Panels are App Store portrait screenshots (ratio ≈ 0.46). Export each panel with `scripts/export.js` presets `ios-6.9` (1320 × 2868) and `ios-6.3` (1206 × 2622, required); build a separate 9:16 layout for Google Play.

## Colour palette
| Role | Hex |
|---|---|
| Canvas | `#a7a7a9` |
| Panel | `#ebebed` |
| Ink | `#141416` |
| Body grey | `#6e6e74` |
| Highlighter lime | `#e2f566` |
| Contrail blue | `#79b8ec` |

## Typography
- Headlines: **Urbanist** 500 (one highlighted line in 600), `#141416`, cap ≈ 9.5% of panel width, 3 lines, left-aligned; each word placed at its measured position.
- Highlight: a lime block behind one line, with 7 px black dot handles at the corners (editor-selection look).
- Body: Urbanist 500, `#6e6e74`, 3 short lines.
- Icon tile labels: Urbanist 500 grey.

## Device presentation
- Tilted phone: a real 3D phone model (WebGL), posed by solving the camera pose (solvePnP) against the target phone outline; the screen is an overlay plane.
- Hand-held phone: an open-source hand mockup split into a back layer and a fingertips layer, with a modern frame inserted between them.
- Front phone: flat frame PNG + white rim.

## Decorative system
- Mountain: a WebGL ridged-noise heightmap in deep blue, misted at the foot.
- Cut-out scenery: palms (sky keyed out), beach (sky keyed out), fronds (white keyed out), parrot (white keyed out).
- Small props: 3D-emoji-style renders, tinted.

## Build recipe
- Screens are redrawn as 390-pt canvases.
- 3D is used for the phone pose and the mountain only.

## Do / Don't
- **Do** highlight exactly one line per headline.
- **Do** let scenery wrap around and behind the phone.
- **Don't** use photos with busy skies; key them out.

## Fidelity checklist
- [ ] Every panel has the App Store portrait ratio (≈ 0.46 : 1).
- [ ] Panel colours were sampled from pixels, not guessed.
- [ ] Every headline word was placed at its measured position and width; line breaks match.
- [ ] Every person, product or object in a photo fits the storyboard in hair, clothing colours and pose; recolour or composite a real photo if needed.
- [ ] Only things this style draws in 3D are rendered in 3D. Flat things stay flat (CSS/SVG).
- [ ] Viewed side by side, as a slider and as an overlay, every element lines up within a few px.
