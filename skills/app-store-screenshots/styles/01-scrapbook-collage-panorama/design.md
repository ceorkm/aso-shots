# 01 · Scrapbook Collage Panorama

> Off-white "paper" panels and sky-photo panels alternate. Pinned polaroid photos with handwritten captions, scalloped photo edges and scribbled doodles make it feel like a personal scrapbook.

**Best for:** Social / photo-sharing / journaling apps. Warm, personal, casual, a little playful.

## Canvas & panels
- Design canvas 1200 × 675, outer background `#d3d3d3`.
- 4 panels, 252 × 541, top 66, corner radius 32, x ≈ 86 / 346 / 606 / 864 (gap ≈ 8).
- Panels 1 and 3 are paper (`#fbfbfb` with a faint repeating smiley/emoji texture at ~6% opacity). Panels 2 and 4 are a sky photo (blue `#89b9cf` → cloud white) with green grass at the bottom.

Panels are App Store portrait screenshots (ratio ≈ 0.46). Export each panel with `scripts/export.js` presets `ios-6.9` (1320 × 2868) and `ios-6.3` (1206 × 2622, required); build a separate 9:16 layout for Google Play.

## Colour palette
| Role | Hex |
|---|---|
| Canvas | `#d3d3d3` |
| Paper panel | `#fbfbfb` / `#edeeed` |
| Sky top | `#5aa6dc` → `#89b9cf` |
| Ink (headlines) | `#111111` |
| Body on sky | `#ffffff` at 90% |
| Pin / tape | `#1a1a1a`, washi tape semi-transparent white |

## Typography
- Headlines: **Archivo** 800, tight tracking (−1%), black on paper, white on sky. Cap height ≈ 10% of panel width. 3–4 short lines, centred (panels 2–4) or left (panel 1).
- Subtitle: Inter 500, ≈ 4.5% of panel width, 2 lines, white on sky or grey `#444` on paper.
- Handwriting: **Gochi Hand** for photo captions (names, 2 lines, slight rotation −8° to +12°), with a tiny grey Inter 400 caption below.

## Device presentation
- Front-facing modern phone (island-style), black frame, real device-frame PNG over a drawn screen.
- Phones are cropped by the panel edge (rising from the bottom or hanging from the top), never fully shown.

## Decorative system
- Polaroids: white border (8% of photo width, thicker at the bottom), soft drop shadow `0 6px 14px rgba(0,0,0,.18)`.
- Scalloped (wavy) top edges on photo cards: SVG mask.
- Hand-drawn doodles (smiley, cloud, heart) as thin black SVG strokes, 1.5px.
- Faint emoji-pattern paper texture.

## Build recipe
- Photos: real CC0 photos of people, pets and landscapes, cropped to each frame.
- Envelope/folder: CSS gradient shape with soft inner shadow.
- Everything is flat (CSS/SVG); no 3D.

## Do / Don't
- **Do** keep the alternating paper/sky rhythm.
- **Do** rotate photos individually; never align them on a grid.
- **Don't** use more than one handwriting font.

## Fidelity checklist
- [ ] Every panel has the App Store portrait ratio (≈ 0.46 : 1).
- [ ] Panel colours were sampled from pixels, not guessed.
- [ ] Every headline word was placed at its measured position and width; line breaks match.
- [ ] Every person, product or object in a photo fits the storyboard in hair, clothing colours and pose; recolour or composite a real photo if needed.
- [ ] Only things this style draws in 3D are rendered in 3D. Flat things stay flat (CSS/SVG).
- [ ] Viewed side by side, as a slider and as an overlay, every element lines up within a few px.
