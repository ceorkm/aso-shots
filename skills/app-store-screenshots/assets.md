# Assets: where every image comes from

## What makes what

| Asset | Source |
|---|---|
| The app's screens | **The user's real screenshots**, placed in device frames |
| Device frames | Real frame PNGs (see `build.md` → Frames); never hand-drawn |
| Headlines, cards, pills, glass, doodles, icons, charts | Code (HTML/CSS/SVG) |
| Simple geometric 3D: coins, gems, logo marks, chrome objects | Code (Three.js) |
| Hands holding phones, people, mascots and characters, fur and plush, food, products, scenery, 3D-looking props | **AI image generation** |
| Logos (the user's, press, partners) | Files from the user; ask if they're missing |
| Third-party service logos shown inside the app UI (Netflix, Spotify…) | Official marks as SVG from Simple Icons (`cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/<slug>.svg`, CC0 files), drawn as real app-icon tiles. Apple 5.2.1: trademarks need permission; tell the user, who decides |
| Stock photos | Only if the user asks for them |

---

## How to generate

**1. Codex (preferred when installed).** Codex has built-in image generation (GPT Image) on the user's ChatGPT plan; it must be signed in (`codex login`). Delegate through the Codex plugin (github.com/openai/codex-plugin-cc), either `/codex:rescue …` or the `codex:codex-rescue` subagent. Send one asset per task, with:
- the full prompt (see the formulas below);
- the output path, for example `assets/hand-phone.png`;
- "PNG, transparent background" (or "flat #00FF00 background");
- any reference images to follow, attached or given as paths.

Then check that the file exists and look at it. If Codex can't produce images in this setup, switch to the API.

**2. API.** Use `scripts/gen_image.py`. It defaults to the newest models: OpenAI `gpt-image-2.5-flare`, or `gpt-image-2.5-sunburst` when reference images are passed; Google `gemini-nano-banana-2.1`.
```bash
python scripts/gen_image.py --prompt "…" --out assets/mascot.png --transparent --size 1024x1536
python scripts/gen_image.py --prompt "same character, now waving" --ref assets/mascot.png --out assets/mascot-wave.png --transparent
```
- **OpenAI GPT Image 2.5:** real transparent PNG (`background: transparent`); sizes are multiples of 16, up to 3840 px per edge, ratio 1:3–3:1; quality `low`…`max`; reference images go through `/v1/images/edits`.
- **Google Nano Banana 2.1:** up to 14 reference images (strong character consistency); 1K / 2K / 4K; aspect ratios such as 9:16, 2:3, 3:4, 1:1. No documented transparency: the script asks for a flat green background, then run `scripts/chroma_key.py`.
- Override the model with `OPENAI_IMAGE_MODEL` / `GEMINI_IMAGE_MODEL` when newer models ship. Older IDs (`gpt-image-1`, `gpt-image-1.5`, `gemini-2.5-flash-image`) are being retired.

---

## Prompt formulas

Always state: **subject + pose + clothing/colours + camera angle + lighting + style + background**.

**Hand holding a phone (for screen replacement)**
> Photorealistic hand of a [skin tone] person holding a modern smartphone in portrait, natural relaxed grip, thumb on the side, [nails/jewellery if the style needs it]. The phone screen is a perfectly flat, evenly lit pure #00FF00 green with no reflections. Soft studio light, 3/4 front view, the phone tilted [angle]. Transparent background.

Then map the real app screen onto the green area (`build.md` → Screen on a generated phone).

**Person (hero photo)**
> Photorealistic [age] [gender] with [hair colour/length/texture], wearing [garment + colour], [expression, for example laughing and looking up to the left], waist-up, soft daylight, shallow depth of field. Transparent background.

**Mascot (first image)**
> Cute 3D mascot character: [shape/species], [main colour], [eye style], [texture: glossy plastic / soft fur / clay], [accessory worn on the head or body], friendly expression, full body, front 3/4 view, studio render with soft shadows. Transparent background.

**Mascot (every later pose):** pass the first mascot image with `--ref`, and change only the pose:
> The exact same character as the reference image (same colours, proportions, face and accessory), now [pose: waving / pointing at something on the right / holding a phone / peeking over an edge]. Transparent background.

**Product, food or object**
> Photorealistic [object] in [colour/material], [angle: top-down / 3/4 / side], studio product lighting, crisp edges. Transparent background.

**Scenery strip** (beach, mountain, clouds)
> [Scene], wide, soft and slightly dreamy, [time of day], colours [palette from the style], with the top part fading to plain [colour]. No text.

**Sticker objects**
> [Object], 3D render, glossy, centred, isolated, transparent background.

Then add a white die-cut outline in code.

---

## Rules

1. **Transparent PNG every time** (or a flat key colour that you remove). Never a busy background.
2. **Generate at least 2× the size the asset will appear at.**
3. **Match the storyboard and the style:** colours from the `design.md` palette, and lighting matching the panel (warm, cool or studio).
4. **Keep characters consistent:** the first image of a character is the reference for all its other images.
5. **Props are worn, not floating:** a hat on a head, a phone in a hand.
6. **Look at every asset before using it:** extra fingers, wrong text, warped logos or a wrong pose mean regenerating.
7. **No real people's likeness and no copyrighted characters**, unless the user owns them.
8. **Store each asset in `assets/`** with a clear name, and keep the prompt next to it in `assets/prompts.md`, so it can be regenerated.

---

## Fallback: stock photos (only if the user asks)

- Free sources: Openverse (CC0 / CC-BY), Wikimedia Commons, or the user's own photos.
- Cut out with `rembg` (`u2net_human_seg` model for people).
- Recolour clothing or hair to match the brief if needed.
- Credit CC-BY authors if required.
