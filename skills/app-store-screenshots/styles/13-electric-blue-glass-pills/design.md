# 13 · Electric Blue Glass Pills

> Solid electric-blue panels with big medium-weight white headlines that fade to pale blue, laurel stat badges, rim-lit glass pills with 3D emoji, a phone tilted back in perspective and white-outlined black phones.

**Best for:** AI note-takers, productivity, transcription, meetings. Confident, techy, clean.

## Canvas & panels
- Design canvas 2000 × 1294, background `#1a1a1a`.
- 4 panels (the last cut off), 532 × 1154, top 135, radius 80, x = 73 / 636 / 1199 / 1762.
- Panels: `#0478ff` → `#1e73ff`, with a soft lighter radial bloom near the top.

Panels are App Store portrait screenshots (ratio ≈ 0.46). Export each panel with `scripts/export.js` presets `ios-6.9` (1320 × 2868) and `ios-6.3` (1206 × 2622, required); build a separate 9:16 layout for Google Play.

## Colour palette
| Role | Hex |
|---|---|
| Canvas | `#1a1a1a` |
| Blue | `#0478ff` → `#1e73ff` |
| Headline | `#ffffff` → `#b7dcff` (vertical fade) |
| Pill fill | `#3893f7` → `#2584f2` |
| Pill rim | `rgba(170,215,255,.55)` |
| Frame outline | `#ffffff` 1.5 px |

## Typography
- Headlines: **Inter** 500, white with a vertical gradient to `#b7dcff` in the lower part of the letters; cap ≈ 12% of panel width (panel 1) or 9% (others); centred; soft drop shadow.
- Stats: Inter 600 numbers + 500 caps labels, between laurel branches.
- Pills: Inter 500 white, 30–40 px.

## Device presentation
- Front phones: real flat frame PNG (dark titanium) with a 1.5 px white outline and a soft glow.
- Tilted phone: the flat composed phone is keystone-warped row by row from a homography solved from the target phone outline (a sharper result than CSS 3D when scaled down).

## Decorative system
- Glass pills: gradient fill, 2 px light inner rim, top inner highlight, soft drop shadow `0 8px 18px rgba(0,40,120,.25)`.
- Laurels: SVG branches.
- Frosted keyboard: gradient blue → white panel with translucent keys.

## Build recipe
- Screens drawn as 390-pt canvases.
- No real 3D; the emoji are 3D-style images.

## Do / Don't
- **Do** keep every panel the same blue.
- **Do** fade headline glyphs from white to pale blue.
- **Don't** use bold 800; the weight is medium.

## Fidelity checklist
- [ ] Every panel has the App Store portrait ratio (≈ 0.46 : 1).
- [ ] Panel colours were sampled from pixels, not guessed.
- [ ] Every headline word was placed at its measured position and width; line breaks match.
- [ ] Every person, product or object in a photo fits the storyboard in hair, clothing colours and pose; recolour or composite a real photo if needed.
- [ ] Only things this style draws in 3D are rendered in 3D. Flat things stay flat (CSS/SVG).
- [ ] Viewed side by side, as a slider and as an overlay, every element lines up within a few px.
