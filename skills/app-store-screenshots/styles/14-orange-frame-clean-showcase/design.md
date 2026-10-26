# 14 · Orange Frame Clean Showcase

> White panels with rounded corners on a vivid orange canvas: a small orange caps kicker above a bold black two-line headline, a front black phone in every panel, and cards that spill past the phone edges.

**Best for:** AI video/voice/creator tools, editing apps. Clean, bold, modern.

## Canvas & panels
- Design canvas 2000 × 948, background `#fd6f1d`.
- 5 panels (the last cut off), 409 × 880, top 59, radius 46, x = 57 / 486 / 915 / 1344 / 1774.
- Panels: `#ffffff` → `#f6f6f6`, with a faint peach inner glow `inset 0 0 18px 4px rgba(253,140,80,.18)`.

Panels are App Store portrait screenshots (ratio ≈ 0.46). Export each panel with `scripts/export.js` presets `ios-6.9` (1320 × 2868) and `ios-6.3` (1206 × 2622, required); build a separate 9:16 layout for Google Play.

## Colour palette
| Role | Hex |
|---|---|
| Canvas | `#fd6f1d` |
| Panel | `#ffffff` → `#f6f6f6` |
| Kicker | `#f2773a` |
| Ink | `#111111` |
| Muted | `#cfcfd3` |
| Player card | `#050505` |

## Typography
- Kicker: **Inter** 800, caps, `#f2773a`, cap ≈ 2.8% of panel width, centred above the headline.
- Headline: Inter 800, black, cap ≈ 6.4% of panel width, 2 lines, centred, tight.
- Panel 1 (hero) headline: left-aligned, 4 lines, cap ≈ 7.3%, with a laurel rating line above ("4.9 ★ 9k+ ratings").
- UI: Inter 500–700.

## Device presentation
- Front phones: real flat frame PNG (black titanium); the screen is drawn directly in stage coordinates, so status bars and buttons land exactly.

## Decorative system
- Spilling cards: white, radius 24, shadow `0 14px 34px rgba(0,0,0,.10)`.
- 3D-style emoji (heart, pointing hand) as images.
- Bottom fade: white gradient over the phone.
- Speech bubbles: orange with a tail.

## Build recipe
- Flat only. Photos: CC0 people/animals/food as needed.

## Do / Don't
- **Do** keep the kicker → headline → phone stack identical across panels 2–5.
- **Do** make one card break out of each phone.
- **Don't** colour panel backgrounds; only the canvas is orange.

## Fidelity checklist
- [ ] Every panel has the App Store portrait ratio (≈ 0.46 : 1).
- [ ] Panel colours were sampled from pixels, not guessed.
- [ ] Every headline word was placed at its measured position and width; line breaks match.
- [ ] Every person, product or object in a photo fits the storyboard in hair, clothing colours and pose; recolour or composite a real photo if needed.
- [ ] Only things this style draws in 3D are rendered in 3D. Flat things stay flat (CSS/SVG).
- [ ] Viewed side by side, as a slider and as an overlay, every element lines up within a few px.
