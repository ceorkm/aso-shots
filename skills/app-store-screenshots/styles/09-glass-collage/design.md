# 09 · Glass Collage

> Light frosted-glass panels on a cool grey canvas, editorial headlines mixing a tight grotesque with an italic serif, and soft-shadowed image tiles and a prompt bar that cross panel seams.

**Best for:** AI design/creative tools, templates, editing apps. Calm, premium, editorial.

## Canvas & panels
- Design canvas 2000 × 1114, background `#c7c7c9`.
- 5 panels (the last cut off at the edge), 462 × 1003, top 50, radius 58, x = 30 / 512 / 994 / 1476 / 1958.
- Panels: frosted white `#f2f2f3` → `#fafafa` with a 1px white inner rim; panels 1–2 are slightly warmer `#efecea`.

Panels are App Store portrait screenshots (ratio ≈ 0.46). Export each panel with `scripts/export.js` presets `ios-6.9` (1320 × 2868) and `ios-6.3` (1206 × 2622, required); build a separate 9:16 layout for Google Play.

## Colour palette
| Role | Hex |
|---|---|
| Canvas | `#c7c7c9` |
| Glass panel | `#f2f2f3` → `#fafafa` |
| Ink | `#111111` |
| Tile glass | `rgba(255,255,255,.55)` + blur |
| Accent button | `#1a7cff` |
| Colour dots | white, black, blue, green, yellow, orange, red |

## Typography
- Headlines: **Inter Tight** 500–600, tracking −5%, cap ≈ 11% of panel width; key words in **Instrument Serif italic** (for example "*hundreds*", "*anything*", "*design*").
- One word framed by a thin black selection box with square corner handles (editor style).
- Prompt bar text: Inter 400, grey `#8a8a8e`, large.
- UI labels: Inter 500.

## Device presentation
- No phone frame: the UI is shown as floating glass sheets and tiles directly on the panels.

## Decorative system
- Glass tiles: radius 22, `background: rgba(255,255,255,.55)`, `backdrop-filter: blur(14px)`, 1px white border, soft shadow `0 20px 40px rgba(60,60,80,.12)`, and a coloured glow behind each image tile (a blurred copy of the image).
- Tiles and the prompt bar are positioned in stage coordinates and replicated into each panel so they cross the seams.

## Build recipe
- AI-art tiles: CC0 portraits and posters, or generated art.
- Everything flat CSS; no 3D.

## Do / Don't
- **Do** mix grotesque and italic serif in every headline.
- **Do** let at least two elements cross panel seams.
- **Don't** use saturated backgrounds; colour lives in the images only.

## Fidelity checklist
- [ ] Every panel has the App Store portrait ratio (≈ 0.46 : 1).
- [ ] Panel colours were sampled from pixels, not guessed.
- [ ] Every headline word was placed at its measured position and width; line breaks match.
- [ ] Every person, product or object in a photo fits the storyboard in hair, clothing colours and pose; recolour or composite a real photo if needed.
- [ ] Only things this style draws in 3D are rendered in 3D. Flat things stay flat (CSS/SVG).
- [ ] Viewed side by side, as a slider and as an overlay, every element lines up within a few px.
