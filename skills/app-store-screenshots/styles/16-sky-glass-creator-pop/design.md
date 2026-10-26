# 16 · Sky Glass Creator Pop

> Staggered frosted-glass panels floating on a bright sky-blue gradient with clouds at the bottom, big white headlines, glassy pills with money values, glossy social-app tiles, flying banknotes and tilted or front-facing phones.

**Best for:** Creator economy, influencer/UGC marketplaces, side-income apps. Aspirational, airy, upbeat.

## Canvas & panels
- Design canvas 2000 × 1240, sky gradient `#1f88c9` → `#41b2ea` → `#36c1f8` → `#6ed1f6`, with clouds along the bottom.
- 4 panels, staggered and bleeding off the canvas edges: [-160, 95 → 378, 1218], [448, 15 → 968, 1140], [1035, 95 → 1567, 1228], [1635, 15 → 2080, 1140]; radius 62–70.
- Each panel is its own vertical blue gradient (`#5eb1ef` → `#dce8f8`, or the reverse) with a glass rim: `inset 0 0 0 2.5px rgba(255,255,255,.9), inset 0 0 0 10px rgba(255,255,255,.18)`.

Panels are App Store portrait screenshots (ratio ≈ 0.46). Export each panel with `scripts/export.js` presets `ios-6.9` (1320 × 2868) and `ios-6.3` (1206 × 2622, required); build a separate 9:16 layout for Google Play.

## Colour palette
| Role | Hex |
|---|---|
| Sky | `#1f88c9` → `#6ed1f6` |
| Panel glass | `#6fbaf2` → `#e8eef8` |
| Headline | `#ffffff` |
| Accent purple | `#7d5cf0` / `#6d4cec` |
| Money green | `#2e9a1d` |
| Ink (UI) | `#141418` |

## Typography
- Headlines: **Inter** 700–900, white, cap ≈ 10% of panel width; a light/regular lead line and a bold line ("Share your portfolio" / "**Grow Your Business**"); soft shadow.
- Glass pills: Inter 600 white.
- UI: Inter 400–900.

## Device presentation
- Tilted phones: real 3D phone model or a homography warp; front phones: flat frame PNG.

## Decorative system
- Glass: `rgba(255,255,255,.34)` → `.1` gradient, 1.5 px white border, inner highlights, `backdrop-filter: blur(5px)`.
- Glossy app tiles: rounded squares with gradient + top shine + drop shadow (draw generic video/social/photo glyphs, not real logos).
- Banknotes: green bill renders with motion tilt.
- Clouds: soft white blurred shapes along the bottom of the canvas.

## Build recipe
- People: CC0 portraits matched to the storyboard (hair colour, clothing colour, setting), recoloured if needed.

## Do / Don't
- **Do** stagger panel heights and let the outer panels bleed off the canvas.
- **Do** make every chip glass.
- **Don't** use flat opaque cards; everything is translucent.

## Fidelity checklist
- [ ] Every panel has the App Store portrait ratio (≈ 0.46 : 1).
- [ ] Panel colours were sampled from pixels, not guessed.
- [ ] Every headline word was placed at its measured position and width; line breaks match.
- [ ] Every person, product or object in a photo fits the storyboard in hair, clothing colours and pose; recolour or composite a real photo if needed.
- [ ] Only things this style draws in 3D are rendered in 3D. Flat things stay flat (CSS/SVG).
- [ ] Viewed side by side, as a slider and as an overlay, every element lines up within a few px.
