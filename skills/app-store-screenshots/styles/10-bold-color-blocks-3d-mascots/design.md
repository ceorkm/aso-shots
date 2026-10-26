# 10 · Bold Color Blocks + 3D Mascots

> Five saturated panels in different colours (violet, crimson, tangerine, emerald, cobalt) with big white headlines, chrome 3D coins, spiky 3D monsters, cute 3D characters in onesies and tilted purple phones. A rotated wordmark watermark runs through the panels.

**Best for:** Fintech, wallets, payments, crypto. Bold, fun, trustworthy.

## Canvas & panels
- Design canvas 2000 × 879, white `#ffffff`.
- 5 panels, 370 × 799, top 40, radius 34, x = 37 / 432 / 826 / 1220 / 1614.
- Panel colours: `#480ca8` violet, `#c8174b` crimson, `#f85537` tangerine, `#027f5f` emerald, `#0367c9` cobalt.
- A huge rotated wordmark watermark (`#7f53c3`, ~206 px) and blob shapes run behind the content.

Panels are App Store portrait screenshots (ratio ≈ 0.46). Export each panel with `scripts/export.js` presets `ios-6.9` (1320 × 2868) and `ios-6.3` (1206 × 2622, required); build a separate 9:16 layout for Google Play.

## Colour palette
| Role | Hex |
|---|---|
| Violet | `#480ca8` |
| Crimson | `#c8174b` |
| Tangerine | `#f85537` |
| Emerald | `#027f5f` |
| Cobalt | `#0367c9` |
| Headline | `#ffffff` |
| Phone body | purple aluminium `#5a4bff` |

## Typography
- Headlines: **Outfit** 600–700, white, cap ≈ 9% of panel width, left-aligned, 2–3 lines; a light (300) lead-in line on some panels.
- Body: Outfit 400 white at 85%, 4–5 short lines.
- UI: Inter 400–700.
- Every line is fitted to its measured width.

## Device presentation
- Real phone frame PNG with the rim recoloured to purple; tilted flat phones are drawn as a WebGL plane with an extruded body behind for the side band.

## Decorative system
- Coins: WebGL, displaced face with a raised symbol, reeded edge, high-metal chrome with a studio environment.
- Monsters: sphere + cone spikes, two-tone eyes.
- Characters: sphere-based head with a hood, rim, teeth, small horn, closed or open eyes, blush, pacifier and arms; held props.
- Watermark: rotated text, 30% contrast.

## Build recipe
- Three.js for coins, monsters and characters only; text, cards and blobs stay flat.

## Do / Don't
- **Do** give every panel its own saturated colour.
- **Do** make the coins look like chrome (reflections, not flat grey).
- **Don't** put 3D on flat items such as cards and blobs.

## Fidelity checklist
- [ ] Every panel has the App Store portrait ratio (≈ 0.46 : 1).
- [ ] Panel colours were sampled from pixels, not guessed.
- [ ] Every headline word was placed at its measured position and width; line breaks match.
- [ ] Every person, product or object in a photo fits the storyboard in hair, clothing colours and pose; recolour or composite a real photo if needed.
- [ ] Only things this style draws in 3D are rendered in 3D. Flat things stay flat (CSS/SVG).
- [ ] Viewed side by side, as a slider and as an overlay, every element lines up within a few px.
