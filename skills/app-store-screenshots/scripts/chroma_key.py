#!/usr/bin/env python3
"""Remove a flat chroma background (default pure green) and save a transparent PNG.
Usage: python chroma_key.py in.png out.png [--color 00ff00] [--tol 90]
For photos with a busy background use `rembg i in.png out.png` instead."""
import argparse, numpy as np
from PIL import Image, ImageFilter
p = argparse.ArgumentParser(); p.add_argument('src'); p.add_argument('dst'); p.add_argument('--color', default='00ff00'); p.add_argument('--tol', type=float, default=90)
a = p.parse_args()
im = np.array(Image.open(a.src).convert('RGBA')).astype(float)
key = np.array([int(a.color[i:i+2], 16) for i in (0, 2, 4)], float)
d = np.sqrt(((im[..., :3] - key) ** 2).sum(-1))
alpha = np.clip((d - a.tol * .5) / (a.tol * .5), 0, 1)
# despill: pull the key colour out of semi-transparent edge pixels
g = 1 if a.color.lower() == '00ff00' else None
if g is not None:
    im[..., 1] = np.minimum(im[..., 1], np.maximum(im[..., 0], im[..., 2]) + 10)
im[..., 3] = alpha * 255
out = Image.fromarray(im.astype(np.uint8), 'RGBA')
a_ch = out.getchannel('A').filter(ImageFilter.GaussianBlur(.6)); out.putalpha(a_ch); out.save(a.dst); print(a.dst)
