# 15 · Red Sticker Drop

> Bright red and white cards with heavy condensed caps, prize products as white-bordered die-cut stickers, a collage of prizes, a grid of category tiles and a plush toy hanging from a rope between clouds.

**Best for:** Giveaways, contests, rewards, marketplaces, drops. Loud, exciting, collectible.

## Canvas & panels
- Design canvas 1434 × 734, background `#e3e3e3`.
- 5 panels, h 571, top 86, radius 22: x = 36 (w 263), 311 (w 262), 584 (w 263), 858 (w 264), 1131 (w 267).
- Panel 1 is a red card `#e33b38` inside a white border; panels 2 and 4 are white/cream; panel 3 is black; panel 5 is full red `#ec4444`.

Panels are App Store portrait screenshots (ratio ≈ 0.46). Export each panel with `scripts/export.js` presets `ios-6.9` (1320 × 2868) and `ios-6.3` (1206 × 2622, required); build a separate 9:16 layout for Google Play.

## Colour palette
| Role | Hex |
|---|---|
| Red | `#e33b38` / `#ec4444` |
| White | `#fbfbfb` |
| Cream | `#ece9e3` |
| Black | `#0b0b0b` |
| Ink | `#1a1a1a` |
| Soft pink text | `#fdeceb` |

## Typography
- Headlines: **Anton** (heavy condensed), caps, cap ≈ 11% of panel width; mixes a huge word with tiny stacked words (for example "SWIPE ₜₒ ENTER", "20+ TO PICK / CATEGORIES PRIZE").
- Hero: a giant "#1" in white over red, then "GIVEAWAY APP" in Anton white with a rough-edge filter.
- UI: Inter 400–800.

## Device presentation
- Flat front phones, black frame; screens drawn in code.

## Decorative system
- Die-cut stickers: product photos cut out with a 3–4 px white outline and a soft shadow, rotated.
- Clouds: simple white SVG cloud shapes behind the text.
- Mascot: flat SVG bird.

## Build recipe
- Product photos: CC0, recoloured to the palette.
- No real 3D.

## Do / Don't
- **Do** mix huge and tiny type inside one headline.
- **Do** outline every product photo in white.
- **Don't** let clouds cover the text; they sit behind it.

## Fidelity checklist
- [ ] Every panel has the App Store portrait ratio (≈ 0.46 : 1).
- [ ] Panel colours were sampled from pixels, not guessed.
- [ ] Every headline word was placed at its measured position and width; line breaks match.
- [ ] Every person, product or object in a photo fits the storyboard in hair, clothing colours and pose; recolour or composite a real photo if needed.
- [ ] Only things this style draws in 3D are rendered in 3D. Flat things stay flat (CSS/SVG).
- [ ] Viewed side by side, as a slider and as an overlay, every element lines up within a few px.
