#!/usr/bin/env python3
"""Generate one image asset with OpenAI GPT Image 2.5 or Google Nano Banana 2.1.

Usage:
  python gen_image.py --prompt "..." --out assets/hand.png [--ref ref.png ...]
                      [--size 1024x1536] [--transparent] [--provider openai|gemini] [--quality high]

Models (override with env vars when newer ones ship; check the provider docs first):
  OpenAI  OPENAI_IMAGE_MODEL      default gpt-image-2.5-flare   (fast, high quality; use gpt-image-2.5-sunburst for precise edits)
  Google  GEMINI_IMAGE_MODEL      default gemini-nano-banana-2.1
Keys: OPENAI_API_KEY or GEMINI_API_KEY.

Transparency: OpenAI returns a real transparent PNG (background=transparent). Nano Banana has no documented
transparent output, so the prompt asks for a flat #00FF00 background; remove it with chroma_key.py.
"""
import argparse, base64, json, os, sys, urllib.request, mimetypes, uuid

def post(url, headers, body, ctype='application/json'):
    req = urllib.request.Request(url, data=body, headers={**headers, 'Content-Type': ctype}, method='POST')
    try:
        with urllib.request.urlopen(req, timeout=600) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        sys.exit(f'HTTP {e.code}: {e.read().decode()[:800]}')

def snap16(size):
    """OpenAI custom sizes must be multiples of 16, ratio 1:3..3:1, edge <= 3840."""
    if size in ('auto',): return size
    w, h = (int(v) for v in size.lower().split('x'))
    return f'{max(16, round(w / 16) * 16)}x{max(16, round(h / 16) * 16)}'

def openai(a):
    key = os.environ['OPENAI_API_KEY']
    model = os.environ.get('OPENAI_IMAGE_MODEL', 'gpt-image-2.5-sunburst' if a.ref else 'gpt-image-2.5-flare')
    H = {'Authorization': f'Bearer {key}'}
    opts = {'model': model, 'prompt': a.prompt, 'size': snap16(a.size), 'quality': a.quality, 'output_format': 'png'}
    if a.transparent: opts['background'] = 'transparent'
    if a.ref:  # reference images -> /v1/images/edits (multipart, repeatable image[])
        b = uuid.uuid4().hex; parts = []
        for k, v in opts.items():
            parts.append(f'--{b}\r\nContent-Disposition: form-data; name="{k}"\r\n\r\n{v}\r\n'.encode())
        for p in a.ref:
            parts.append(f'--{b}\r\nContent-Disposition: form-data; name="image[]"; filename="{os.path.basename(p)}"\r\n'
                         f'Content-Type: {mimetypes.guess_type(p)[0] or "image/png"}\r\n\r\n'.encode() + open(p, 'rb').read() + b'\r\n')
        parts.append(f'--{b}--\r\n'.encode())
        r = post('https://api.openai.com/v1/images/edits', H, b''.join(parts), f'multipart/form-data; boundary={b}')
    else:
        r = post('https://api.openai.com/v1/images/generations', H, json.dumps(opts).encode())
    return base64.b64decode(r['data'][0]['b64_json'])

def aspect(size):
    w, h = (int(v) for v in size.lower().split('x')); r = w / h
    opts = {'1:1': 1, '2:3': 2 / 3, '3:2': 1.5, '3:4': .75, '4:3': 4 / 3, '4:5': .8, '5:4': 1.25, '9:16': 9 / 16, '16:9': 16 / 9, '21:9': 21 / 9, '1:4': .25, '4:1': 4}
    return min(opts, key=lambda k: abs(opts[k] - r))

def gemini(a):
    key = os.environ['GEMINI_API_KEY']; model = os.environ.get('GEMINI_IMAGE_MODEL', 'gemini-nano-banana-2.1')
    prompt = a.prompt + (' Isolated on a perfectly flat, evenly lit pure #00FF00 green background; no shadow or gradient on the background.' if a.transparent else '')
    inp = [{'type': 'text', 'text': prompt}] + [
        {'type': 'image', 'mime_type': mimetypes.guess_type(p)[0] or 'image/png', 'data': base64.b64encode(open(p, 'rb').read()).decode()}
        for p in (a.ref or [])]   # up to 14 reference images
    size = 'auto' if a.size == 'auto' else a.size
    body = {'model': model, 'input': inp,
            'response_format': {'type': 'image', 'mime_type': 'image/png', 'image_size': a.gemini_size,
                                **({} if size == 'auto' else {'aspect_ratio': aspect(size)})},
            'generation_config': {'thinking_level': 'high'}}
    r = post('https://generativelanguage.googleapis.com/v1beta/interactions', {'x-goog-api-key': key}, json.dumps(body).encode())
    img = (r.get('output_image') or {}).get('data')
    if not img:  # fall back to scanning steps for the last image block
        for st in r.get('steps', []):
            for c in st.get('content', []) or []:
                if c.get('type') == 'image' and c.get('data'): img = c['data']
    if not img: sys.exit('no image returned: ' + json.dumps(r)[:800])
    return base64.b64decode(img)

if __name__ == '__main__':
    p = argparse.ArgumentParser()
    p.add_argument('--prompt', required=True); p.add_argument('--out', required=True)
    p.add_argument('--ref', nargs='*', help='reference images (character / pose / style / product)')
    p.add_argument('--size', default='1024x1536', help='WxH; OpenAI snaps to multiples of 16, Gemini maps to the nearest aspect ratio')
    p.add_argument('--quality', default='high', help='OpenAI: low|medium|high|xhigh|max|auto')
    p.add_argument('--gemini-size', default='2K', help='Gemini: 1K|2K|4K')
    p.add_argument('--transparent', action='store_true'); p.add_argument('--provider')
    a = p.parse_args()
    prov = a.provider or ('openai' if os.environ.get('OPENAI_API_KEY') else 'gemini' if os.environ.get('GEMINI_API_KEY') else None)
    if not prov: sys.exit('Set OPENAI_API_KEY or GEMINI_API_KEY (or use Codex).')
    data = openai(a) if prov == 'openai' else gemini(a)
    os.makedirs(os.path.dirname(a.out) or '.', exist_ok=True); open(a.out, 'wb').write(data); print(a.out)
