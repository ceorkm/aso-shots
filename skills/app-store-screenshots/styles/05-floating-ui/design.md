# 05 · Floating UI

> White panels on a coral background. Bold black claims with one coloured word, real hands holding food, and UI cards that float outside the phone (stat bubbles, charts, filter sheets, compare cards) as the main visual.

**Best for:** Food, nutrition, fitness, shopping-comparison apps. Clean, appetising, persuasive.

## Canvas & panels
- Design canvas 1782 × 1182, background coral `#ed645c`.
- 4 panels, 401 × 868, top 54, radius 52, x = 38 / 464 / 890 / 1316 (gap 25).
- Panels white `#ffffff`; a large app icon + name sit centred below the panels on the coral.

Panels are App Store portrait screenshots (ratio ≈ 0.46). Export each panel with `scripts/export.js` presets `ios-6.9` (1320 × 2868) and `ios-6.3` (1206 × 2622, required); build a separate 9:16 layout for Google Play.

## Colour palette
| Role | Hex |
|---|---|
| Canvas coral | `#ed645c` |
| Panel | `#ffffff` / `#f3f4f3` |
| Ink | `#0d0d0d` |
| Accent word | `#ef5a5a` (coral red) |
| Grey subtitle | `#b5b5b5` |
| Chart bars | yellow `#ffd43b`, blue `#2f9bff`, red `#f2555a`, green `#30c45a`, orange `#ff9d4d` |

## Typography
- Headlines: **Plus Jakarta Sans** 800, tracking −3%, cap ≈ 10% of panel width, centred, 2–3 lines; one key word in coral red.
- Grey sub-claim: Plus Jakarta Sans 600, `#b5b5b5`, ≈ 50% of headline size.
- Press "featured on" wordmark in **Oswald** 700 condensed.
- UI: Inter 500–700.
- Big stats: Plus Jakarta Sans 800 (for example "125K+").

## Device presentation
- Front-facing black phone with island, flat frame, white screen; the important card is lifted out of the phone (bigger than the screen, with a strong soft shadow `0 18px 40px rgba(0,0,0,.12)`).
- Phones are cropped by the panel bottom or fade into white.

## Decorative system
- Floating cards: white, radius 22, shadow; selected state = 3px blue `#2f9bff` outline + round check badge.
- Bottom fade: white gradient over the lower phone to merge with the panel.

## Build recipe
- Food photos: real CC0 burger/drink photos cut out with rembg; hands from CC0 hand photos.
- Everything else is HTML/CSS.

## Do / Don't
- **Do** make the floating card the hero; the phone is the stage.
- **Do** colour exactly one headline word.
- **Don't** clutter the background; panels stay pure white.

## Fidelity checklist
- [ ] Every panel has the App Store portrait ratio (≈ 0.46 : 1).
- [ ] Panel colours were sampled from pixels, not guessed.
- [ ] Every headline word was placed at its measured position and width; line breaks match.
- [ ] Every person, product or object in a photo fits the storyboard in hair, clothing colours and pose; recolour or composite a real photo if needed.
- [ ] Only things this style draws in 3D are rendered in 3D. Flat things stay flat (CSS/SVG).
- [ ] Viewed side by side, as a slider and as an overlay, every element lines up within a few px.
