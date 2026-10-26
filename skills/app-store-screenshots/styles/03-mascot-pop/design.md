# 03 · Mascot Pop

> Warm orange gradient panels starring a cute 3D blob mascot that wears props (crown, chef hat) and peeks over phones. Glossy speech bubbles, a real hand holding a phone, and a 3D object popping out of the screen.

**Best for:** AI assistants, beauty/self-care, lifestyle coaches. Friendly, energetic, cheeky.

## Canvas & panels
- Design canvas 1200 × 675, background `#e3e3e3`.
- 5 panels, 216 × 465, top 105, radius 26, x = 45 / 268 / 491 / 715 / 938.
- Panel backgrounds: vertical gradient from saturated orange `#e8742c` at the top to peach `#f7ca8b` and cream `#fbf6f0` at the bottom; alternate panels start cream at the top.

Panels are App Store portrait screenshots (ratio ≈ 0.46). Export each panel with `scripts/export.js` presets `ios-6.9` (1320 × 2868) and `ios-6.3` (1206 × 2622, required); build a separate 9:16 layout for Google Play.

## Colour palette
| Role | Hex |
|---|---|
| Orange | `#cf662d` / `#e79d62` |
| Peach | `#f7ca8b` |
| Cream | `#fbf6f0` |
| Highlight bubble | `#f8f0c4` (butter yellow) |
| Ink | `#2a1a10` |
| Headline | `#ffffff` with soft warm glow |

## Typography
- Headlines: **Inter** 800, white, very tight tracking (−3%), cap height ≈ 13% of panel width, with a soft orange outer glow.
- In cream panels the headline is orange `#e8742c`.
- Bubble labels: Inter 600 in dark orange on butter-yellow pills, slightly rotated.
- Speech card: white rounded card (radius 18), Inter 500 grey with bold words.

## Device presentation
- Phones: real 3D phone model (WebGL) with an orange aluminium body so it reads as a matched device; screens drawn in code (checklists, chat).
- One panel uses a real photo of a hand holding a phone; the screen is replaced by the drawn UI.

## Decorative system
- Mascot: WebGL blob (squashed sphere, glossy orange material, big white eyes with black pupils, clearcoat). Props (crown, chef hat) are parented to the mascot's head so they sit on it.
- Glow rings: SVG ellipses with blur.
- Bubbles: rounded pills, slight rotation (−8° to +8°).

## Build recipe
- Three.js: mascot, props and phone bodies, rendered at 2× and copied into the panel as an image.
- Hand: CC0 hand-holding-phone photo, cut out (rembg), screen area replaced.
- Do not use 3D for flat things such as bubbles, cards or text.

## Do / Don't
- **Do** give the mascot one prop per panel, worn on the mascot.
- **Do** keep everything in the orange/peach/cream family.
- **Don't** let the mascot float unattached; it must interact with a phone, pedestal or card.

## Fidelity checklist
- [ ] Every panel has the App Store portrait ratio (≈ 0.46 : 1).
- [ ] Panel colours were sampled from pixels, not guessed.
- [ ] Every headline word was placed at its measured position and width; line breaks match.
- [ ] Every person, product or object in a photo fits the storyboard in hair, clothing colours and pose; recolour or composite a real photo if needed.
- [ ] Only things this style draws in 3D are rendered in 3D. Flat things stay flat (CSS/SVG).
- [ ] Viewed side by side, as a slider and as an overlay, every element lines up within a few px.
