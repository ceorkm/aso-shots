#!/usr/bin/env python3
"""Download every screenshot (full resolution) + metadata from an App Store listing.

Usage: python fetch_listing.py <app-store-url | app-id> [outDir] [--country us]
Writes outDir/iphone/01.png…, outDir/ipad/01.png…, outDir/icon.png and outDir/listing.json
(name, subtitle-less description, rating, review count, genre, seller, release notes).
"""
import json, os, re, sys, urllib.request

def get(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'}), timeout=60).read()

def full(u):  # thumbnail URL ".../1_iPhone.jpg/320x480bb.jpg" -> original upload as PNG
    return re.sub(r'/[^/]+$', '/9999x0w.png', u)

if __name__ == '__main__':
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    country = sys.argv[sys.argv.index('--country') + 1] if '--country' in sys.argv else (re.search(r'apps\.apple\.com/(\w\w)/', args[0]) or [None, 'us'])[1]
    m = re.search(r'id(\d+)', args[0]) or re.fullmatch(r'(\d+)', args[0])
    if not m: sys.exit('give an App Store URL or numeric app id')
    app_id = m.group(1); out = args[1] if len(args) > 1 else f'listing-{app_id}'
    r = json.loads(get(f'https://itunes.apple.com/lookup?id={app_id}&country={country}&entity=software'))['results']
    if not r: sys.exit('app not found in that country store')
    r = r[0]; os.makedirs(out, exist_ok=True)
    for kind, key in (('iphone', 'screenshotUrls'), ('ipad', 'ipadScreenshotUrls')):
        urls = r.get(key) or []
        if urls: os.makedirs(f'{out}/{kind}', exist_ok=True)
        for i, u in enumerate(urls, 1):
            open(f'{out}/{kind}/{i:02d}.png', 'wb').write(get(full(u))); print(f'{out}/{kind}/{i:02d}.png')
    if r.get('artworkUrl512'): open(f'{out}/icon.png', 'wb').write(get(full(r['artworkUrl512'])))
    keep = ['trackName', 'sellerName', 'primaryGenreName', 'genres', 'averageUserRating', 'userRatingCount', 'description', 'releaseNotes', 'version', 'price', 'formattedPrice', 'trackViewUrl', 'contentAdvisoryRating']
    json.dump({k: r.get(k) for k in keep}, open(f'{out}/listing.json', 'w'), indent=1, ensure_ascii=False)
    print(f'{out}/listing.json')
