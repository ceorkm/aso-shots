// Roam hero globe: a teal sphere with dotted land, an atmosphere glow, pulsing pins and
// flight arcs that draw themselves. Loops every 8 s. window.__setT(t) renders a fixed moment
// (used for the still screenshot and for frame-by-frame video export).
import * as THREE from 'three';

const LOOP = 8;
const CITIES = { nyc: [40.71, -74.0], par: [48.86, 2.35], mrs: [43.3, 5.37], lis: [38.72, -9.14], rom: [41.9, 12.5], jtr: [36.4, 25.4] };
const ROUTES = [['nyc', 'par', .32, 0.3, 2.6], ['par', 'mrs', .07, 2.4, 3.3], ['mrs', 'lis', .12, 3.1, 4.2], ['mrs', 'jtr', .14, 3.4, 4.5]];

function ll(lat, lon, r = 1) {
  const a = (lon + 180) * Math.PI / 180, t = (90 - lat) * Math.PI / 180;
  return new THREE.Vector3(-Math.cos(a) * Math.sin(t) * r, Math.cos(t) * r, Math.sin(a) * Math.sin(t) * r);
}
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export async function mountGlobe(canvas, anchors) {
  const W = canvas.width, H = canvas.height;
  const R = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true });
  R.setClearColor(0, 0); R.outputEncoding = THREE.sRGBEncoding;
  const S = new THREE.Scene(), cam = new THREE.PerspectiveCamera(30, W / H, .1, 50); cam.position.set(0, 0, 4.25);

  // land mask (equirectangular: land dark, ocean light)
  const img = await new Promise(r => { const i = new Image(); i.onload = () => r(i); i.src = 'img/earth_spec.jpg'; });
  const mc = document.createElement('canvas'); mc.width = 1024; mc.height = 512; const mx = mc.getContext('2d'); mx.drawImage(img, 0, 0, 1024, 512);
  const md = mx.getImageData(0, 0, 1024, 512).data;
  const isLand = (lat, lon) => { const x = Math.floor((lon + 180) / 360 * 1023), y = Math.floor((90 - lat) / 180 * 511); return md[(y * 1024 + x) * 4] < 110; };

  const tilt = new THREE.Group(), spin = new THREE.Group(); tilt.add(spin); S.add(tilt);
  // ocean sphere: teal with soft lambert + a darker limb
  const ocean = new THREE.ShaderMaterial({
    uniforms: { L: { value: new THREE.Vector3(-.5, .7, .9).normalize() } },
    vertexShader: `varying vec3 vN; varying vec3 vV; void main(){ vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`,
    fragmentShader: `uniform vec3 L; varying vec3 vN; varying vec3 vV;
      void main(){ float d=max(dot(vN,L),0.); float f=pow(1.-max(dot(vN,vV),0.),2.2);
        vec3 deep=vec3(.02,.30,.33), lit=vec3(.06,.55,.55);
        vec3 c=mix(deep,lit,.25+.75*d); c=mix(c,vec3(.45,.85,.85),f*.3); gl_FragColor=vec4(c,1.); }`
  });
  spin.add(new THREE.Mesh(new THREE.SphereGeometry(1, 128, 96), ocean));

  // dotted land: an even Fibonacci sphere of points, kept where the mask says land
  const pts = [], N = 26000, ga = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), th = ga * i;
    const v = new THREE.Vector3(Math.cos(th) * r, y, Math.sin(th) * r);
    const lat = Math.asin(v.y) * 180 / Math.PI, a = Math.atan2(v.z, -v.x), lon = a * 180 / Math.PI - 180;
    const LON = ((lon + 540) % 360) - 180; if (isLand(lat, LON)) pts.push(v.multiplyScalar(1.002));
  }
  const pg = new THREE.BufferGeometry().setFromPoints(pts);
  const pm = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { size: { value: W / 300 } },
    vertexShader: `uniform float size; varying float vF; void main(){ vec4 mv=modelViewMatrix*vec4(position,1.); vec3 n=normalize(normalMatrix*position);
      vF=clamp(dot(n,normalize(-mv.xyz))*1.6,0.,1.); gl_PointSize=size*(0.55+0.45*vF); gl_Position=projectionMatrix*mv; }`,
    fragmentShader: `varying float vF; void main(){ vec2 p=gl_PointCoord-.5; float d=length(p); if(d>.5) discard;
      float a=smoothstep(.5,.32,d)*(0.35+0.65*vF); gl_FragColor=vec4(vec3(.86,1.,.96),a); }`
  });
  spin.add(new THREE.Points(pg, pm));

  // atmosphere glow (back-faced, slightly larger)
  const atm = new THREE.Mesh(new THREE.SphereGeometry(1.14, 96, 64), new THREE.ShaderMaterial({
    side: THREE.BackSide, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `varying vec3 vN; void main(){ vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
    fragmentShader: `varying vec3 vN; void main(){ float i=pow(max(0.,.72-dot(vN,vec3(0,0,1.))),2.6); gl_FragColor=vec4(.75,.97,1.,1.)*i*1.1; }`
  }));
  tilt.add(atm);

  // pins: a white bead and a pulsing ring, oriented to the surface
  const pins = {};
  for (const [k, [la, lo]] of Object.entries(CITIES)) {
    const p = ll(la, lo, 1.004), g = new THREE.Group(); g.position.copy(p); g.lookAt(p.clone().multiplyScalar(2));
    const bead = new THREE.Mesh(new THREE.SphereGeometry(.016, 16, 12), new THREE.MeshBasicMaterial({ color: 0xffffff })); g.add(bead);
    const ring = new THREE.Mesh(new THREE.RingGeometry(.022, .03, 40), new THREE.MeshBasicMaterial({ color: 0xFFE7A8, transparent: true, side: THREE.DoubleSide })); g.add(ring);
    spin.add(g); pins[k] = { g, ring, p };
  }
  // arcs: great-circle tubes lifted off the surface, drawn progressively
  const arcs = ROUTES.map(([a, b, h, t0, t1]) => {
    const A = ll(...CITIES[a]), B = ll(...CITIES[b]), seg = 160, P = [];
    for (let i = 0; i <= seg; i++) { const t = i / seg, v = A.clone().lerp(B, t).normalize(); P.push(v.multiplyScalar(1.003 + Math.sin(Math.PI * t) * h)); }
    const curve = new THREE.CatmullRomCurve3(P), geo = new THREE.TubeGeometry(curve, seg, .0055, 8, false);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true })); spin.add(m);
    return { m, geo, curve, seg, t0, t1, idx: geo.index.count };
  });
  // the travelling light on the long-haul route
  const dot = new THREE.Mesh(new THREE.SphereGeometry(.024, 16, 12), new THREE.MeshBasicMaterial({ color: 0xFFE7A8 }));
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,240,200,1)'); g.addColorStop(1, 'rgba(255,240,200,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  halo.scale.setScalar(.16); spin.add(dot); spin.add(halo);

  // orientation: bring Western Europe forward and up into the visible top of the globe
  const front = ll(40, -6), base = Math.atan2(-front.x, front.z);
  tilt.rotation.x = .3;

  const v = new THREE.Vector3();
  function render(t) {
    t = ((t % LOOP) + LOOP) % LOOP;
    spin.rotation.y = base + .16 * Math.sin(2 * Math.PI * t / LOOP);
    const fade = 1 - smooth(6.6, 7.8, t);
    arcs.forEach(a => { const p = smooth(a.t0, a.t1, t); a.geo.setDrawRange(0, Math.floor(p * a.seg) * 48); a.m.material.opacity = fade; });
    const lp = smooth(.5, 2.8, t), on = lp > 0 && lp < 1 && fade > .5;
    const pos = arcs[0].curve.getPointAt(Math.min(.999, lp)); dot.position.copy(pos); halo.position.copy(pos); dot.visible = halo.visible = on;
    Object.values(pins).forEach((p, i) => { const s = (t * .9 + i * .23) % 1; p.ring.scale.setScalar(1 + s * 2.2); p.ring.material.opacity = (1 - s) * .9; });
    R.render(S, cam);
    // keep the HTML photo bubbles attached to their cities
    tilt.updateMatrixWorld(true);
    for (const [k, el] of Object.entries(anchors || {})) {
      v.copy(pins[k].p).applyMatrix4(spin.matrixWorld); const facing = v.clone().normalize().z;
      const sp = v.clone().project(cam), cw = canvas.clientWidth, ch = canvas.clientHeight; el.style.left = ((sp.x + 1) / 2 * cw) + 'px'; el.style.top = ((1 - sp.y) / 2 * ch) + 'px';
      el.style.opacity = facing > .15 ? 1 : 0;
    }
  }
  let fixed = null;
  window.__setT = t => { fixed = t; render(t); };
  const t0 = performance.now();
  (function loop() { if (fixed === null) render((performance.now() - t0) / 1000); requestAnimationFrame(loop); })();
  const q = new URLSearchParams(location.search); if (q.has('t')) window.__setT(+q.get('t'));
  window.__globeReady = true;
}
