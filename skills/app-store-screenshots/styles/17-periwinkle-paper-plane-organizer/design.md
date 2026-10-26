# 17 · Periwinkle Paper-Plane Organizer

> Pastel periwinkle panels with heavy navy rounded headlines (one word in italic, one in blue), a big cut-out person photo as the hero, paper-plane doodles with dashed flight paths, ID cards held with paper clips and calendar-app icons.

**Best for:** Family organisers, school/parent apps, calendars, inbox assistants. Warm, trustworthy, organised.

## Canvas & panels
- Design canvas 1584 × 858, background `#e3e3e3`.
- 4 full panels plus a cut-off 5th; top 47, h 782, radius 30: x = 44 (w 361, `#cfdcff`), 417 (w 364, `#7ba4ff`), 794 (w 357, `#edf3ff`), 1168 (w 360, `#cfdeff`), 1540 (`#d3dffc`).

Panels are App Store portrait screenshots (ratio ≈ 0.46). Export each panel with `scripts/export.js` presets `ios-6.9` (1320 × 2868) and `ios-6.3` (1206 × 2622, required); build a separate 9:16 layout for Google Play.

## Colour palette
| Role | Hex |
|---|---|
| Periwinkle light | `#cfdcff` / `#edf3ff` |
| Periwinkle mid | `#7ba4ff` |
| Navy ink | `#0f2343` |
| Accent blue | `#7aa4f5` / `#8db0f7` |
| Alert red | `#f0473f` |
| Event green / yellow | `#d8f5cf` / `#fbf4cf` |

## Typography
- Headlines: **Nunito** 800, navy `#0f2343`, cap ≈ 11% of panel width; one word in **italic 700** with a hand-drawn blue underline; one word in white or blue for contrast; each word placed individually at its measured position.
- Small labels squeezed beside the headline (for example "emails / RSVPs / forms") in Nunito 700, with a red notification dot.
- UI: Inter 400–700.

## Device presentation
- No phone frames: screens are shown as white rounded sheets or cards directly on the panels.

## Decorative system
- Paper planes: white fill + navy 3 px outline SVG, dashed curved trails.
- Paper clips: SVG.
- Calendar-app icons: generic SVG (a coloured grid icon, a red-header date icon, a blue envelope icon).
- The hero cut-out has a soft edge.

## Build recipe
- Hero photo: CC0 photo cut out with rembg, then recoloured (hat, hair, sweater) to the palette; the hat sits on the head.
- ID photos: CC0 child portraits matching age and look.

## Do / Don't
- **Do** match the hero person closely; it is the biggest element.
- **Do** place every headline word individually.
- **Don't** use a generic stock person; match hair, hat and clothing colours.

## Fidelity checklist
- [ ] Every panel has the App Store portrait ratio (≈ 0.46 : 1).
- [ ] Panel colours were sampled from pixels, not guessed.
- [ ] Every headline word was placed at its measured position and width; line breaks match.
- [ ] Every person, product or object in a photo fits the storyboard in hair, clothing colours and pose; recolour or composite a real photo if needed.
- [ ] Only things this style draws in 3D are rendered in 3D. Flat things stay flat (CSS/SVG).
- [ ] Viewed side by side, as a slider and as an overlay, every element lines up within a few px.
