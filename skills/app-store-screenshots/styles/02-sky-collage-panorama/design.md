# 02 · Sky Collage Panorama

> A continuous blue sky with clouds runs behind every panel. A globe, an airplane and tilted photo cards cross the panel seams so the set reads as one panorama. Headlines mix light and heavy weights.

**Best for:** Travel, meet-ups, social discovery. Adventurous, youthful, bright.

## Canvas & panels
- Design canvas 1200 × 675, background `#e3e3e3`.
- 5 panels, 214 × 465, top 105, radius 24, x = 47 / 270 / 493 / 716 / 939 (gap ≈ 9).
- One sky layer (`#a5d8fb` → `#d0e8ec` with soft clouds) is placed in stage coordinates and shown through all 5 panels, so clouds continue across the gaps.

Panels are App Store portrait screenshots (ratio ≈ 0.46). Export each panel with `scripts/export.js` presets `ios-6.9` (1320 × 2868) and `ios-6.3` (1206 × 2622, required); build a separate 9:16 layout for Google Play.

## Colour palette
| Role | Hex |
|---|---|
| Canvas | `#e3e3e3` |
| Sky | `#7fc4f5` → `#a5d8fb` → `#d0e8ec` |
| Ink | `#111318` |
| Accent outline (hand-drawn) | `#2f6bff` blue, `#d6f04a` lime underline |
| Card white | `#f6f8f8` |

## Typography
- Headlines: **Plus Jakarta Sans**, mixing 300 (light) and 800 (extra bold) inside one phrase (for example a light word followed by a bold word). Cap height ≈ 9% of panel width.
- Panel 1 uses a giant word split across panels 1 and 2 (the last letters continue into panel 2).
- Handwritten stamps: **Permanent Marker** in yellow `#e8f04a`, rotated 90°, for date stamps on photo edges.
- UI text: Plus Jakarta Sans 500–700, small.

## Device presentation
- Front-facing phone, thin light frame, screen drawn in code (feeds, map with avatar pins, profile match cards).
- UI elements (search bars, filter pills, match cards) are pulled out of the screen and overhang the phone by 10–20 px.

## Decorative system
- Globe: rendered sphere (WebGL) or a high-res earth photo, cropped by the panel bottom.
- Avatar bubbles: circular photos with a 3px coloured ring (pink, green, blue).
- Airplane: cut-out photo/3D render.
- Laurel wreath for the stat badge.

## Build recipe
- Shared background: one absolutely positioned sky image behind all panels, with each panel's `overflow:hidden` showing its slice.
- Map screen: real map tiles are not needed; draw roads/labels faintly in SVG and place avatar pins.
- 3D only for the globe/airplane if photos aren't available; everything else is flat.

## Do / Don't
- **Do** let one word or object cross a panel seam; that is the signature of this style.
- **Do** mix font weights inside one headline.
- **Don't** give panels different backgrounds; the sky must be continuous.

## Fidelity checklist
- [ ] Every panel has the App Store portrait ratio (≈ 0.46 : 1).
- [ ] Panel colours were sampled from pixels, not guessed.
- [ ] Every headline word was placed at its measured position and width; line breaks match.
- [ ] Every person, product or object in a photo fits the storyboard in hair, clothing colours and pose; recolour or composite a real photo if needed.
- [ ] Only things this style draws in 3D are rendered in 3D. Flat things stay flat (CSS/SVG).
- [ ] Viewed side by side, as a slider and as an overlay, every element lines up within a few px.
