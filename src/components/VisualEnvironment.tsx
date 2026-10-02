'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getScrollProgress } from './sharedScrollProgress';
import './VisualEnvironment.css';

// ═══════════════════════════════════════════════════════════════════════════════
// MATH HELPERS
// ═══════════════════════════════════════════════════════════════════════════════

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const lerp   = (a: number, b: number, t: number)  => a + (b - a) * t;

const smooth = (e0: number, e1: number, x: number): number => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};

/** Bell-curve envelope: 0 → max → 0 across [enter, peak, exit] */
const bell = (enter: number, peak: number, exit: number, p: number, max = 1): number =>
  p <= enter || p >= exit ? 0
  : Math.min(smooth(enter, peak, p), 1 - smooth(peak, exit, p)) * max;

/** Quadratic Bezier point at parameter t */
const bPt = (p0: number, cp: number, p1: number, t: number) =>
  (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * cp + t * t * p1;

type Ctx   = CanvasRenderingContext2D;
type Depth = 'far' | 'mid' | 'near';

// ═══════════════════════════════════════════════════════════════════════════════
// CAMERA  — stable, heavy, intentional drift
// ═══════════════════════════════════════════════════════════════════════════════

function getCamOffset(tSec: number): { x: number; y: number } {
  return {
    x: Math.sin(tSec * 0.048) * 6 + Math.sin(tSec * 0.021) * 3,   // ±9 px max
    y: Math.sin(tSec * 0.033 + 1.1) * 4 + Math.cos(tSec * 0.017) * 2, // ±6 px max
  };
}

// Parallax multiplier per depth layer
const PAR: Record<Depth, number> = { far: 0.35, mid: 1.0, near: 1.65 };

// ═══════════════════════════════════════════════════════════════════════════════
// PARTICLE SYSTEM  — three depth layers (far / mid / near)
// ═══════════════════════════════════════════════════════════════════════════════

interface Particle {
  x: number; y: number; z: number;
  vx: number; vy: number;
  sz: number; a: number;
  layer: Depth;
}

function makeParticles(total: number, w: number, h: number): Particle[] {
  return Array.from({ length: total }, (_, i) => {
    const frac  = i / total;
    const layer: Depth = frac < 0.27 ? 'far' : frac < 0.85 ? 'mid' : 'near';

    const sz  = layer === 'far'  ? 0.2  + Math.random() * 0.40
              : layer === 'mid'  ? 0.50 + Math.random() * 1.30
              :                    1.0  + Math.random() * 2.00;

    const a   = layer === 'far'  ? 0.03 + Math.random() * 0.07
              : layer === 'mid'  ? 0.10 + Math.random() * 0.30
              :                    0.25 + Math.random() * 0.30;

    const spd = layer === 'far'  ? 0.04 + Math.random() * 0.09
              : layer === 'mid'  ? 0.13 + Math.random() * 0.30
              :                    0.42 + Math.random() * 0.55;

    const zMax = layer === 'far' ? 1000 : layer === 'mid' ? 500 : 80;

    return {
      x: Math.random() * w,   y: Math.random() * h,   z: Math.random() * zMax,
      vx: (Math.random() - 0.5) * spd, vy: (Math.random() - 0.5) * spd * 0.45,
      sz, a, layer,
    };
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// PANEL DEFINITIONS
// ═══════════════════════════════════════════════════════════════════════════════

interface Panel {
  src: string; alt: string;
  enter: number; peak: number; exit: number;
  left: string; top: string; width: string;
  rotY: number; rotX: number; z: number;
  scale: number; maxOp: number;
  driftX: number; driftY: number; driftT: number; driftSpd: number;
  imgW: number; imgH: number;
  depth: Depth;
  cx: number;   // approx viewport center 0-1 (for canvas aura)
  cy: number;
}

interface PanelMobile {
  left: string; top: string; width: string;
  rotY: number; rotX: number;
}

/**
 * Mobile-safe panel overrides.
 * Desktop positions can put panels at 56%–76% left, which on 320–430px phones
 * means the 220px+ wide panel overflows the right edge causing horizontal scroll.
 * These overrides keep all panels within [2%..50%] on the left so they stay
 * fully within the viewport at all phone widths ≥ 320px.
 * INDEX matches PANELS array order exactly.
 */
const PANELS_MOBILE: PanelMobile[] = [
  // 0 ENV02-a  meta-campaign top-right → top-left on mobile
  { left:  '3%', top: '6%',  width: 'clamp(140px,38vw,200px)', rotY:  6, rotX: 2 },
  // 1 ENV02-b  google-ads bottom-right → hidden (index>=4 on mobile already hidden by JS)
  { left:  '3%', top: '52%', width: 'clamp(130px,36vw,190px)', rotY:  6, rotX: 2 },
  // 2 ENV03   seo top-right → top-right safe
  { left: '50%', top: '10%', width: 'clamp(140px,42vw,200px)', rotY: -5, rotX: 2 },
  // 3 ENV04-a  meta near → left side
  { left:  '3%', top:  '8%', width: 'clamp(160px,44vw,220px)', rotY:  8, rotX: 2 },
  // 4 ENV04-b  google far → hidden on mobile (>= 4)
  { left: '50%', top:  '6%', width: 'clamp(140px,40vw,200px)', rotY:  2, rotX: 2 },
  // 5 ENV04-c  seo mid → hidden on mobile (>= 4)
  { left: '52%', top: '32%', width: 'clamp(130px,38vw,185px)', rotY: -8, rotX: 2 },
  // 6 ENV05   lead-gen near → right safe
  { left: '50%', top: '12%', width: 'clamp(140px,42vw,200px)', rotY: -8, rotX: 3 },
  // 7 ENV06-a  social near → left safe
  { left:  '3%', top:  '7%', width: 'clamp(155px,44vw,215px)', rotY:  8, rotX: 2 },
  // 8 ENV06-b  content far → hidden on mobile (>= 4)
  { left: '48%', top: '38%', width: 'clamp(130px,38vw,185px)', rotY: -6, rotX: 2 },
  // 9 ENV07-a  video near → right safe (clamped width)
  { left: '48%', top:  '6%', width: 'clamp(150px,44vw,210px)', rotY: -5, rotX: 2 },
  // 10 ENV07-b creative mid → left safe
  { left:  '3%', top: '15%', width: 'clamp(145px,42vw,200px)', rotY:  7, rotX: 2 },
  // 11 ENV08-a website near → left safe
  { left:  '2%', top:  '6%', width: 'clamp(150px,44vw,210px)', rotY:  8, rotX: 3 },
  // 12 ENV08-b app far → right safe
  { left: '50%', top: '18%', width: 'clamp(135px,38vw,190px)', rotY: -7, rotX: 2 },
  // 13 ENV08-c software far
  { left: '20%', top: '44%', width: 'clamp(130px,36vw,185px)', rotY:  0, rotX: 2 },
  // 14 ENV09-a meta tiny
  { left:  '4%', top: '58%', width: 'clamp(90px,26vw,140px)',  rotY: 10, rotX: 3 },
  // 15 ENV09-b social tiny
  { left: '66%', top: '55%', width: 'clamp(85px,24vw,130px)',  rotY:-10, rotX: 3 },
  // 16 ENV09-c website tiny
  { left: '35%', top: '62%', width: 'clamp(80px,22vw,125px)',  rotY:  0, rotX: 2 },
];

const PANELS: Panel[] = [
  // ── ENV 02: Performance teasers ──────────────────────────────────────────────
  { src: '/media/rightmove/marketing/meta-campaign-01.jpg',
    alt: 'Meta ads campaign dashboard',         imgW: 720, imgH: 405,
    enter: 0.06, peak: 0.11, exit: 0.22,
    left: '56%', top: '11%', width: 'clamp(220px,25vw,400px)',
    rotY: -9,  rotX: 3, z:  30, scale: 0.88, maxOp: 0.65,
    driftX: 18, driftY:  9, driftT: 0.0, driftSpd: 0.38,
    depth: 'mid',  cx: 0.68, cy: 0.25 },
  { src: '/media/rightmove/marketing/google-ads-01.jpg',
    alt: 'Search advertising concept',          imgW: 720, imgH: 405,
    enter: 0.09, peak: 0.14, exit: 0.24,
    left: '61%', top: '50%', width: 'clamp(200px,22vw,360px)',
    rotY: -13, rotX: 2, z: -25, scale: 0.76, maxOp: 0.48,
    driftX: 12, driftY: 14, driftT: 1.2, driftSpd: 0.29,
    depth: 'far',  cx: 0.72, cy: 0.62 },
  // ── ENV 03: Funnel ────────────────────────────────────────────────────────────
  { src: '/media/rightmove/marketing/seo-01.jpg',
    alt: 'SEO ranking visualization',           imgW: 720, imgH: 405,
    enter: 0.17, peak: 0.22, exit: 0.32,
    left: '55%', top: '17%', width: 'clamp(220px,24vw,380px)',
    rotY:  -6, rotX: 4, z:  20, scale: 0.80, maxOp: 0.63,
    driftX: 10, driftY: 20, driftT: 2.1, driftSpd: 0.44,
    depth: 'mid',  cx: 0.67, cy: 0.30 },
  // ── ENV 04: Ads main ─────────────────────────────────────────────────────────
  { src: '/media/rightmove/marketing/meta-campaign-01.jpg',
    alt: 'Meta advertising dashboard',          imgW: 720, imgH: 405,
    enter: 0.28, peak: 0.35, exit: 0.46,
    left:  '3%', top:  '9%', width: 'clamp(280px,32vw,500px)',
    rotY:  11, rotX: 3, z:  55, scale: 0.92, maxOp: 0.76,
    driftX: 16, driftY: 10, driftT: 0.3, driftSpd: 0.34,
    depth: 'near', cx: 0.19, cy: 0.22 },
  { src: '/media/rightmove/marketing/google-ads-01.jpg',
    alt: 'Search advertising',                  imgW: 720, imgH: 405,
    enter: 0.30, peak: 0.37, exit: 0.46,
    left: '36%', top:  '5%', width: 'clamp(260px,30vw,460px)',
    rotY:    1, rotX: 2, z: -45, scale: 0.72, maxOp: 0.52,
    driftX:  6, driftY: 12, driftT: 0.8, driftSpd: 0.27,
    depth: 'far',  cx: 0.51, cy: 0.18 },
  { src: '/media/rightmove/marketing/seo-01.jpg',
    alt: 'SEO concept',                         imgW: 720, imgH: 405,
    enter: 0.32, peak: 0.38, exit: 0.47,
    left: '64%', top: '34%', width: 'clamp(240px,27vw,420px)',
    rotY: -11, rotX: 2, z:  10, scale: 0.79, maxOp: 0.65,
    driftX: 14, driftY:  8, driftT: 1.5, driftSpd: 0.40,
    depth: 'mid',  cx: 0.77, cy: 0.47 },
  // ── ENV 05: Lead Generation ───────────────────────────────────────────────────
  { src: '/media/rightmove/marketing/lead-gen-01.jpg',
    alt: 'Lead generation funnel',              imgW: 600, imgH: 450,
    enter: 0.43, peak: 0.50, exit: 0.60,
    left: '55%', top: '15%', width: 'clamp(260px,30vw,440px)',
    rotY: -14, rotX: 5, z:  50, scale: 0.88, maxOp: 0.78,
    driftX: 20, driftY:  6, driftT: 2.5, driftSpd: 0.46,
    depth: 'near', cx: 0.70, cy: 0.28 },
  // ── ENV 06: Social Media ──────────────────────────────────────────────────────
  { src: '/media/rightmove/social/social-creative-01.jpg',
    alt: 'Social media ad creatives',           imgW: 800, imgH: 600,
    enter: 0.52, peak: 0.59, exit: 0.70,
    left:  '3%', top:  '7%', width: 'clamp(280px,33vw,500px)',
    rotY:  13, rotX: 3, z:  65, scale: 0.92, maxOp: 0.80,
    driftX: 14, driftY: 16, driftT: 0.1, driftSpd: 0.37,
    depth: 'near', cx: 0.19, cy: 0.20 },
  { src: '/media/rightmove/social/content-strategy-01.jpg',
    alt: 'Content strategy dashboard',          imgW: 800, imgH: 450,
    enter: 0.54, peak: 0.61, exit: 0.71,
    left: '56%', top: '37%', width: 'clamp(250px,29vw,440px)',
    rotY:  -9, rotX: 2, z: -18, scale: 0.76, maxOp: 0.60,
    driftX: 10, driftY: 18, driftT: 1.8, driftSpd: 0.29,
    depth: 'far',  cx: 0.70, cy: 0.50 },
  // ── ENV 07: Video Ads ─────────────────────────────────────────────────────────
  { src: '/media/rightmove/video-ads/video-ads-01.jpg',
    alt: 'Video advertising creatives',         imgW: 800, imgH: 450,
    enter: 0.62, peak: 0.69, exit: 0.78,
    left: '50%', top:  '5%', width: 'clamp(320px,38vw,560px)',
    rotY:  -7, rotX: 2, z:  35, scale: 0.86, maxOp: 0.76,
    driftX: 12, driftY: 14, driftT: 0.6, driftSpd: 0.41,
    depth: 'near', cx: 0.69, cy: 0.18 },
  { src: '/media/rightmove/social/creative-performance-01.jpg',
    alt: 'Creative performance analytics',      imgW: 800, imgH: 450,
    enter: 0.64, peak: 0.71, exit: 0.79,
    left:  '1%', top: '17%', width: 'clamp(280px,32vw,460px)',
    rotY:  11, rotX: 3, z:  -8, scale: 0.82, maxOp: 0.70,
    driftX: 16, driftY:  8, driftT: 2.2, driftSpd: 0.34,
    depth: 'mid',  cx: 0.17, cy: 0.30 },
  // ── ENV 08: Digital Experiences ───────────────────────────────────────────────
  { src: '/media/rightmove/websites/website-mockup-01.jpg',
    alt: 'Website design mockups',              imgW: 720, imgH: 405,
    enter: 0.73, peak: 0.79, exit: 0.88,
    left:  '2%', top:  '6%', width: 'clamp(300px,36vw,520px)',
    rotY:  13, rotX: 4, z:  60, scale: 0.91, maxOp: 0.80,
    driftX: 10, driftY: 12, driftT: 0.4, driftSpd: 0.31,
    depth: 'near', cx: 0.18, cy: 0.18 },
  { src: '/media/rightmove/apps/app-mockup-01.jpg',
    alt: 'Mobile app mockups',                  imgW: 720, imgH: 405,
    enter: 0.75, peak: 0.81, exit: 0.89,
    left: '58%', top: '19%', width: 'clamp(260px,30vw,440px)',
    rotY: -11, rotX: 3, z: -28, scale: 0.80, maxOp: 0.65,
    driftX: 12, driftY: 16, driftT: 1.4, driftSpd: 0.40,
    depth: 'far',  cx: 0.73, cy: 0.32 },
  { src: '/media/rightmove/software/software-mockup-01.jpg',
    alt: 'Business software dashboard',         imgW: 720, imgH: 405,
    enter: 0.77, peak: 0.83, exit: 0.90,
    left: '28%', top: '44%', width: 'clamp(240px,28vw,400px)',
    rotY:    0, rotX: 2, z: -75, scale: 0.70, maxOp: 0.54,
    driftX:  8, driftY: 10, driftT: 0.9, driftSpd: 0.25,
    depth: 'far',  cx: 0.42, cy: 0.57 },
  // ── ENV 09: Ecosystem — everything converging ─────────────────────────────────
  { src: '/media/rightmove/marketing/meta-campaign-01.jpg',
    alt: '',                                    imgW: 720, imgH: 405,
    enter: 0.84, peak: 0.88, exit: 0.95,
    left:  '4%', top: '58%', width: 'clamp(130px,15vw,220px)',
    rotY:  15, rotX: 5, z: -55, scale: 0.55, maxOp: 0.40,
    driftX:  8, driftY:  8, driftT: 0.2, driftSpd: 0.50,
    depth: 'far',  cx: 0.11, cy: 0.70 },
  { src: '/media/rightmove/social/social-creative-01.jpg',
    alt: '',                                    imgW: 800, imgH: 600,
    enter: 0.84, peak: 0.88, exit: 0.95,
    left: '76%', top: '55%', width: 'clamp(120px,13vw,200px)',
    rotY: -15, rotX: 4, z: -38, scale: 0.52, maxOp: 0.40,
    driftX: 10, driftY:  6, driftT: 1.1, driftSpd: 0.45,
    depth: 'far',  cx: 0.82, cy: 0.67 },
  { src: '/media/rightmove/websites/website-mockup-01.jpg',
    alt: '',                                    imgW: 720, imgH: 405,
    enter: 0.85, peak: 0.89, exit: 0.95,
    left: '39%', top: '62%', width: 'clamp(110px,12vw,190px)',
    rotY:    0, rotX: 2, z: -70, scale: 0.50, maxOp: 0.38,
    driftX:  6, driftY:  8, driftT: 2.0, driftSpd: 0.38,
    depth: 'far',  cx: 0.45, cy: 0.74 },
];

// ═══════════════════════════════════════════════════════════════════════════════
// TRANSITION BRIDGES  — energy paths between environments
// ═══════════════════════════════════════════════════════════════════════════════

interface Bridge {
  p0: number; p1: number; p2: number;      // progress lifecycle
  sx: number; sy: number;                  // start (normalized 0-1)
  cpx: number; cpy: number;               // bezier control point
  ex: number; ey: number;                 // end (normalized 0-1)
}

const BRIDGES: Bridge[] = [
  // ENV04 ads → ENV05 leads:  right side → center-right
  { p0: 0.440, p1: 0.455, p2: 0.470,  sx: 0.77, sy: 0.47,  cpx: 0.65, cpy: 0.08,  ex: 0.60, ey: 0.28 },
  // ENV05 leads → ENV06 social:  center-right → left
  { p0: 0.580, p1: 0.595, p2: 0.610,  sx: 0.60, sy: 0.28,  cpx: 0.35, cpy: 0.58,  ex: 0.19, ey: 0.20 },
  // ENV06 social → ENV07 video:  left → right
  { p0: 0.700, p1: 0.715, p2: 0.730,  sx: 0.19, sy: 0.20,  cpx: 0.45, cpy: 0.62,  ex: 0.69, ey: 0.18 },
  // ENV07 video → ENV08 digital:  right → left
  { p0: 0.782, p1: 0.797, p2: 0.812,  sx: 0.69, sy: 0.18,  cpx: 0.45, cpy: 0.46,  ex: 0.18, ey: 0.18 },
  // ENV08 digital → ENV09 ecosystem:  corner → center
  { p0: 0.872, p1: 0.887, p2: 0.902,  sx: 0.18, sy: 0.18,  cpx: 0.50, cpy: 0.32,  ex: 0.50, ey: 0.48 },
];

// ═══════════════════════════════════════════════════════════════════════════════
// CANVAS DRAWING FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

/** Fill a soft radial gradient at viewport-normalized (cx, cy) */
function radialGlow(
  ctx: Ctx, w: number, h: number,
  cx: number, cy: number, r: number,   // all 0-1 of viewport
  rgb: string, alpha: number
) {
  if (alpha < 0.003) return;
  const g = ctx.createRadialGradient(w * cx, h * cy, 0, w * cx, h * cy, h * r);
  g.addColorStop(0,   `rgba(${rgb},${alpha.toFixed(4)})`);
  g.addColorStop(0.5, `rgba(${rgb},${(alpha * 0.42).toFixed(4)})`);
  g.addColorStop(1,   'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
}

/** Per-environment atmospheric glows */
function drawAtmosphere(ctx: Ctx, w: number, h: number, p: number) {
  // Deep base — always on, centres attention
  const base = ctx.createRadialGradient(w * 0.5, h * 0.38, 0, w * 0.5, h * 0.55, h * 0.92);
  base.addColorStop(0, 'rgba(0,10,28,0.35)');
  base.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, w, h);

  type Env = [number, number, number, number, number, number, number, string, number];
  const envs: Env[] = [
    [0.00, 0.08, 0.18, 0.28,  0.50, 0.50, 0.75,  '0,62,148',  0.24],
    [0.08, 0.14, 0.24, 0.32,  0.65, 0.35, 0.65,  '0,82,178',  0.21],
    [0.17, 0.23, 0.31, 0.38,  0.50, 0.45, 0.70,  '0,98,195',  0.20],
    [0.28, 0.35, 0.44, 0.50,  0.45, 0.32, 0.72,  '0,88,200',  0.23],
    [0.43, 0.50, 0.58, 0.64,  0.60, 0.28, 0.65,  '0,108,210', 0.20],
    [0.52, 0.59, 0.68, 0.74,  0.22, 0.40, 0.60,  '0,152,215', 0.24],
    [0.62, 0.69, 0.76, 0.82,  0.62, 0.28, 0.65,  '0,122,200', 0.21],
    [0.73, 0.80, 0.87, 0.93,  0.40, 0.55, 0.70,  '0,102,185', 0.20],
    [0.83, 0.88, 0.93, 0.98,  0.50, 0.48, 0.55,  '0,162,232', 0.27],
    [0.92, 0.97, 1.00, 1.00,  0.50, 0.48, 0.45,  '0,182,255', 0.34],
  ];

  envs.forEach(([p0, p1, p2, p3, cx, cy, r, rgb, maxA]) => {
    const wt = smooth(p0, p1, p) * (1 - smooth(p2, p3, p));
    radialGlow(ctx, w, h, cx, cy, r, rgb, wt * maxA);
  });
}

/** Perspective grid — intro and digital environments */
function drawGrid(ctx: Ctx, w: number, h: number, alpha: number) {
  if (alpha < 0.004) return;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.strokeStyle = 'rgba(0,145,255,1)';
  ctx.lineWidth   = 0.4;
  const sp = 70;
  for (let x = 0; x <= w; x += sp) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
  for (let y = 0; y <= h; y += sp) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
  ctx.restore();
}

/** Three-layer particle system with environmental direction bias */
function drawParticles(
  ctx: Ctx, w: number, h: number,
  pts: Particle[], p: number, dt: number, reduced: boolean
) {
  const dtS    = dt / 16;
  const colC   = smooth(0.85, 1.0,  p);                                          // near-white shift
  const colB   = smooth(0.50, 0.66, p) * (1 - smooth(0.82, 0.96, p));           // cyan shift

  // Environmental direction bias (particles follow the narrative)
  const biasDn = smooth(0.17, 0.24, p) * (1 - smooth(0.29, 0.35, p)) * 0.034;  // funnel — downward
  const biasRt = smooth(0.43, 0.50, p) * (1 - smooth(0.57, 0.63, p)) * 0.048;  // flow — rightward
  const biasIn = smooth(0.83, 0.90, p) * 0.024;                                 // converge — inward

  pts.forEach(pt => {
    const cx = w * 0.5, cy = h * 0.5;
    const inX = (cx - pt.x) / w, inY = (cy - pt.y) / h;

    if (!reduced) {
      pt.x += (pt.vx + biasRt + inX * biasIn) * dtS;
      pt.y += (pt.vy + biasDn + inY * biasIn) * dtS;
    }
    if (pt.x < -30) pt.x = w + 30;  if (pt.x > w + 30) pt.x = -30;
    if (pt.y < -30) pt.y = h + 30;  if (pt.y > h + 30) pt.y = -30;

    // Z depth advance (creates depth-to-camera starfield feel)
    if (pt.layer !== 'near') {
      pt.z -= pt.layer === 'far' ? 0.22 : 0.48;
      const zMax = pt.layer === 'far' ? 1000 : 500;
      if (pt.z <= 1) { pt.z = zMax; pt.x = Math.random() * w; pt.y = Math.random() * h; }
    }

    // Depth projection
    const sc = 800 / Math.max(1, 800 + pt.z);
    const px = (pt.x - cx) * sc + cx;
    const py = (pt.y - cy) * sc + cy;
    if (px < -10 || px > w + 10 || py < -10 || py > h + 10) return;

    const sz    = Math.max(0.2, pt.sz * sc);
    const alpha = clamp(pt.a * sc * (pt.layer === 'far' ? 0.62 : 1), 0, 0.57);
    if (alpha < 0.018) return;

    const r = Math.round(colC * 162);
    const g = Math.round(colB * 172 + colC * 55);
    ctx.fillStyle = `rgb(${r},${g},255)`;

    // Near particles: soft halo glow
    if (pt.layer === 'near' && sz > 1.0) {
      ctx.globalAlpha = alpha * 0.17;
      ctx.beginPath(); ctx.arc(px, py, sz * 3.8, 0, Math.PI * 2); ctx.fill();
    }

    ctx.globalAlpha = alpha;
    ctx.beginPath(); ctx.arc(px, py, sz, 0, Math.PI * 2); ctx.fill();
  });

  ctx.globalAlpha = 1;
}

/** Soft radial aura on canvas behind each visible panel — creates "back light" */
function drawPanelAuras(ctx: Ctx, w: number, h: number, tSec: number, alphas: number[]) {
  PANELS.forEach((panel, i) => {
    const alpha = alphas[i];
    if (alpha < 0.07) return;

    const dx  = Math.sin(tSec * panel.driftSpd + panel.driftT) * panel.driftX * 0.22;
    const dy  = Math.cos(tSec * panel.driftSpd * 0.78 + panel.driftT) * panel.driftY * 0.22;
    const px  = panel.cx * w + dx;
    const py  = panel.cy * h + dy;
    const r   = panel.depth === 'near' ? 0.21 : panel.depth === 'mid' ? 0.16 : 0.12;

    radialGlow(ctx, w, h, px / w, py / h, r, '0,172,255', alpha * 0.30);
  });
}

/** ENV02: animated marketing data node network */
function drawNodeNetwork(ctx: Ctx, w: number, h: number, time: number, wt: number, mobile: boolean) {
  if (wt < 0.02) return;
  const N = mobile ? 7 : 14;
  const nodes = Array.from({ length: N }, (_, i) => ({
    x: w * (0.25 + 0.55 * Math.sin(i * 2.09 + time * 0.00027 + i * 0.3)),
    y: h * (0.15 + 0.65 * Math.sin(i * 1.72 + time * 0.00019 + i * 0.5 + 1.2)),
    pulse: 0.7 + 0.3 * Math.sin(time * 0.001 + i * 1.1),
  }));
  ctx.save();
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const dx = nodes[j].x - nodes[i].x, dy = nodes[j].y - nodes[i].y;
      const d  = Math.sqrt(dx * dx + dy * dy);
      if (d > w * 0.29) continue;
      const fade = 1 - d / (w * 0.29);

      // Gradient connection line
      const g = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      g.addColorStop(0,   `rgba(0,198,255,${wt * fade * 0.44})`);
      g.addColorStop(0.5, `rgba(0,220,255,${wt * fade * 0.22})`);
      g.addColorStop(1,   `rgba(0,198,255,${wt * fade * 0.44})`);
      ctx.strokeStyle = g; ctx.lineWidth = 0.75; ctx.globalAlpha = 1;
      ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke();

      // Traveling data packet
      const u  = ((time * (0.0003 + (i + j) * 0.000022)) % 1);
      const px = lerp(nodes[i].x, nodes[j].x, u);
      const py = lerp(nodes[i].y, nodes[j].y, u);
      ctx.globalAlpha = wt * fade * 0.75;
      ctx.fillStyle   = 'rgba(255,255,255,1)';
      ctx.beginPath(); ctx.arc(px, py, 2, 0, Math.PI * 2); ctx.fill();
    }
  }
  // Pulsing node dots
  nodes.forEach(n => {
    ctx.globalAlpha = wt * 0.60;
    ctx.fillStyle   = 'rgba(0,188,255,1)';
    ctx.beginPath(); ctx.arc(n.x, n.y, 3 * n.pulse, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = wt * 0.18;
    ctx.beginPath(); ctx.arc(n.x, n.y, 7 * n.pulse, 0, Math.PI * 2); ctx.fill();
  });
  ctx.restore();
}

/** ENV03: converging funnel streams with traveling dots */
function drawFunnelStreams(ctx: Ctx, w: number, h: number, time: number, wt: number, mobile: boolean) {
  if (wt < 0.02) return;
  const N = mobile ? 5 : 10;
  ctx.save();
  for (let i = 0; i < N; i++) {
    const ratio = i / (N - 1);
    const xTop  = w * (0.05 + 0.90 * ratio);
    const xBot  = w * (0.35 + 0.30 * ratio);   // converge toward center-bottom
    const spd   = 0.55 + i * 0.08;
    const ph    = time * 0.00087 * spd + i * 0.88;

    const g = ctx.createLinearGradient(xTop, 0, xBot, h);
    g.addColorStop(0,    'rgba(0,198,255,0)');
    g.addColorStop(0.35, `rgba(0,210,255,${wt * 0.31})`);
    g.addColorStop(0.75, `rgba(0,224,255,${wt * 0.19})`);
    g.addColorStop(1,    'rgba(0,198,255,0)');
    ctx.strokeStyle = g; ctx.lineWidth = 1.4; ctx.globalAlpha = wt;
    ctx.beginPath(); ctx.moveTo(xTop, 0);
    for (let y = 0; y <= h; y += 12) {
      ctx.lineTo(lerp(xTop, xBot, y / h) + Math.sin(y * 0.018 + ph) * 14, y);
    }
    ctx.stroke();

    // Traveling dot along stream
    const dotY = ((time * 0.10 * spd + i * h / N) % h);
    const dotX  = lerp(xTop, xBot, dotY / h) + Math.sin(dotY * 0.018 + ph) * 14;
    ctx.globalAlpha = wt * 0.75; ctx.fillStyle = 'rgba(0,234,255,1)';
    ctx.beginPath(); ctx.arc(dotX, dotY, 2.5, 0, Math.PI * 2); ctx.fill();
  }
  ctx.restore();
}

/** ENV05: energy rivers flowing left → right (the lead journey) */
function drawEnergyFlow(ctx: Ctx, w: number, h: number, time: number, wt: number, mobile: boolean) {
  if (wt < 0.02) return;
  const N = mobile ? 3 : 6;
  ctx.save();
  for (let i = 0; i < N; i++) {
    const yBase = h * (0.18 + 0.64 * (i / (N - 1)));
    const spd   = 0.48 + i * 0.14;
    const ph    = time * 0.00088 * spd + i * 1.1;

    const g = ctx.createLinearGradient(0, yBase, w, yBase);
    g.addColorStop(0,   'rgba(0,198,255,0)');
    g.addColorStop(0.2, `rgba(0,214,255,${wt * 0.24})`);
    g.addColorStop(0.8, `rgba(0,214,255,${wt * 0.24})`);
    g.addColorStop(1,   'rgba(0,198,255,0)');
    ctx.strokeStyle = g; ctx.lineWidth = 1.6; ctx.globalAlpha = wt;
    ctx.beginPath(); ctx.moveTo(0, yBase);
    for (let x = 0; x <= w; x += 10) {
      ctx.lineTo(x, yBase + Math.sin(x * 0.010 + ph) * 26 + Math.sin(x * 0.023 + ph * 1.3) * 10);
    }
    ctx.stroke();

    // Bright moving dot with glow aura
    const dotX = ((time * 0.082 * spd + i * (w / N)) % w);
    const dotY  = yBase + Math.sin(dotX * 0.010 + ph) * 26 + Math.sin(dotX * 0.023 + ph * 1.3) * 10;
    ctx.globalAlpha = wt * 0.22; ctx.fillStyle = 'rgba(0,228,255,1)';
    ctx.beginPath(); ctx.arc(dotX, dotY, 8, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = wt * 0.82; ctx.fillStyle = 'rgba(218,240,255,1)';
    ctx.beginPath(); ctx.arc(dotX, dotY, 2.8, 0, Math.PI * 2); ctx.fill();
  }
  ctx.restore();
}

/** Inter-environment energy bridges — the same energy morphing between scenes */
function drawTransitionBridges(ctx: Ctx, w: number, h: number, time: number, p: number) {
  BRIDGES.forEach(b => {
    const wt = smooth(b.p0, b.p1, p) * (1 - smooth(b.p1, b.p2, p));
    if (wt < 0.02) return;

    const [sx, sy, ex, ey, cpx, cpy] = [
      b.sx  * w, b.sy  * h,
      b.ex  * w, b.ey  * h,
      b.cpx * w, b.cpy * h,
    ];

    ctx.save();
    ctx.globalAlpha = wt * 0.38;
    ctx.strokeStyle = 'rgba(0,210,255,1)';
    ctx.lineWidth   = 1.5;
    ctx.setLineDash([5, 9]);
    ctx.beginPath(); ctx.moveTo(sx, sy); ctx.quadraticCurveTo(cpx, cpy, ex, ey); ctx.stroke();
    ctx.setLineDash([]);

    // Energy particles traveling the bezier
    const speed = time * 0.00048;
    for (let i = 0; i < 7; i++) {
      const u   = ((speed + i / 7) % 1);
      const bx  = bPt(sx, cpx, ex, u);
      const by  = bPt(sy, cpy, ey, u);
      const intensity = 1 - Math.abs(u - 0.5) * 1.65;
      if (intensity <= 0) continue;
      ctx.globalAlpha = clamp(wt * intensity * 0.88, 0, 1);
      ctx.fillStyle   = u > 0.6 ? 'rgba(195,238,255,1)' : 'rgba(0,220,255,1)';
      ctx.beginPath(); ctx.arc(bx, by, 2.5, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
  });
}

/** ENV07: cinematic light streaks with glow trails */
function drawLightStreaks(ctx: Ctx, w: number, h: number, time: number, wt: number, mobile: boolean) {
  if (wt < 0.02) return;
  const N = mobile ? 4 : 9;
  ctx.save();
  for (let i = 0; i < N; i++) {
    const ang  = (-30 + i * 8.5) * (Math.PI / 180);
    const spd  = 0.032 + i * 0.017;
    const sx   = ((time * spd + i * w / N) % (w * 1.7)) - w * 0.35;
    const sy   = h * (0.06 + i * 0.10);
    const len  = w * (0.10 + (i % 3) * 0.09);
    const ex   = sx + Math.cos(ang) * len;
    const ey   = sy + Math.sin(ang) * len;

    const g = ctx.createLinearGradient(sx, sy, ex, ey);
    g.addColorStop(0,   'rgba(0,188,255,0)');
    g.addColorStop(0.4, `rgba(255,255,255,${wt * 0.27})`);
    g.addColorStop(0.7, `rgba(198,232,255,${wt * 0.17})`);
    g.addColorStop(1,   'rgba(0,178,255,0)');
    ctx.strokeStyle = g; ctx.lineWidth = 1.5 + (i % 2) * 0.7; ctx.globalAlpha = wt;
    ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, ey); ctx.stroke();

    const g2 = ctx.createLinearGradient(sx, sy, ex, ey);
    g2.addColorStop(0,   'rgba(0,148,218,0)');
    g2.addColorStop(0.5, `rgba(0,175,255,${wt * 0.09})`);
    g2.addColorStop(1,   'rgba(0,148,218,0)');
    ctx.strokeStyle = g2; ctx.lineWidth = 7; ctx.globalAlpha = wt;
    ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, ey); ctx.stroke();
  }
  ctx.restore();
}

/** ENV09: all energy converges to the RightMove arrow */
function drawConvergence(ctx: Ctx, w: number, h: number, time: number, wt: number, mobile: boolean) {
  if (wt < 0.02) return;
  const cx = w * 0.5, cy = h * 0.47;
  const N  = mobile ? 8 : 18;
  ctx.save();

  const ringR = h * 0.35 + Math.sin(time * 0.0008) * 12;
  for (let i = 0; i < N; i++) {
    const ang = (i / N) * Math.PI * 2 + time * 0.00026;
    const nx  = cx + Math.cos(ang) * ringR;
    const ny  = cy + Math.sin(ang) * ringR;

    const g = ctx.createLinearGradient(nx, ny, cx, cy);
    g.addColorStop(0,   `rgba(0,192,255,${wt * 0.11})`);
    g.addColorStop(0.7, `rgba(0,213,255,${wt * 0.28})`);
    g.addColorStop(1,   `rgba(0,218,255,${wt * 0.38})`);
    ctx.strokeStyle = g; ctx.lineWidth = 0.75; ctx.globalAlpha = 1;
    ctx.beginPath(); ctx.moveTo(nx, ny); ctx.lineTo(cx, cy); ctx.stroke();

    ctx.globalAlpha = wt * 0.52; ctx.fillStyle = 'rgba(0,208,255,1)';
    ctx.beginPath(); ctx.arc(nx, ny, 2.5, 0, Math.PI * 2); ctx.fill();
  }

  // Center pulsing glow
  const pulse = 0.8 + 0.2 * Math.sin(time * 0.002);
  const ig    = ctx.createRadialGradient(cx, cy, 0, cx, cy, h * 0.15 * pulse);
  ig.addColorStop(0,   `rgba(0,188,255,${wt * 0.30})`);
  ig.addColorStop(0.5, `rgba(0,158,228,${wt * 0.13})`);
  ig.addColorStop(1,   'rgba(0,0,0,0)');
  ctx.fillStyle = ig; ctx.globalAlpha = 1;
  ctx.beginPath(); ctx.arc(cx, cy, h * 0.15 * pulse, 0, Math.PI * 2); ctx.fill();

  ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function VisualEnvironment() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef    = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile   = () => window.innerWidth < 768;
    const isReduced  = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr        = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;

    const resize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width  = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.scale(dpr, dpr);
    };
    resize();

    // ── One-time depth-of-field + depth class per panel ────────────────────────
    // Static filter set once; JS RAF loop only updates opacity/transform/boxShadow
    PANELS.forEach((panel, i) => {
      const el = panelRefs.current[i]; if (!el) return;
      const blur = panel.z < -55 ? 1.4 : panel.z < -20 ? 0.7 : 0;
      const sat  = panel.depth === 'far'  ? 0.82 : panel.depth === 'mid' ? 0.91 : 1;
      const bri  = panel.depth === 'far'  ? 0.86 : panel.depth === 'mid' ? 0.93 : 1;
      el.style.filter = `${blur > 0 ? `blur(${blur}px) ` : ''}saturate(${sat}) brightness(${bri})`;
      el.classList.add(`ve-panel--${panel.depth}`);
    });

    // ── Particle system ────────────────────────────────────────────────────────
    const PC  = isMobile() ? 24 : 85;
    const pts = makeParticles(PC, window.innerWidth, window.innerHeight);

    // Cache inner elements for rim-light updates
    const innerEls = PANELS.map((_, i) => {
      const el = panelRefs.current[i];
      return el ? el.querySelector<HTMLElement>('.ve-panel-inner') : null;
    });

    // ── Main RAF loop ──────────────────────────────────────────────────────────
    let lastT = 0;
    const loop = (time: number) => {
      const dt   = Math.min(time - lastT, 50); lastT = time;
      const p    = getScrollProgress();
      const tSec = time * 0.001;                      // seconds
      const cam  = getCamOffset(tSec);
      const mob  = isMobile();

      // ── Canvas ────────────────────────────────────────────────────────────────
      ctx.clearRect(0, 0, w, h);
      drawAtmosphere(ctx, w, h, p);

      // Grid appears in intro (ENV01) and digital (ENV08)
      const gridA = smooth(0.00, 0.06, p) * (1 - smooth(0.18, 0.26, p)) * 0.07
                  + smooth(0.72, 0.80, p) * (1 - smooth(0.90, 0.96, p)) * 0.06;
      drawGrid(ctx, w, h, gridA);

      // Precompute panel alphas (needed for both auras and DOM)
      const alphas = PANELS.map(panel => bell(panel.enter, panel.peak, panel.exit, p, panel.maxOp));

      // Back-light auras behind visible panels
      drawPanelAuras(ctx, w, h, tSec, alphas);

      // Three-layer particles
      if (!isReduced) drawParticles(ctx, w, h, pts, p, dt, false);

      // Environment canvas effects
      drawNodeNetwork   (ctx, w, h, time, smooth(0.09, 0.15, p) * (1 - smooth(0.22, 0.30, p)), mob);
      drawFunnelStreams  (ctx, w, h, time, smooth(0.18, 0.24, p) * (1 - smooth(0.28, 0.33, p)), mob);
      drawEnergyFlow    (ctx, w, h, time, smooth(0.44, 0.49, p) * (1 - smooth(0.56, 0.62, p)), mob);
      drawTransitionBridges(ctx, w, h, time, p);
      drawLightStreaks  (ctx, w, h, time, smooth(0.63, 0.68, p) * (1 - smooth(0.76, 0.81, p)), mob);
      drawConvergence   (ctx, w, h, time, smooth(0.83, 0.88, p) * (1 - smooth(0.92, 0.97, p)), mob);

      // ── DOM panels ────────────────────────────────────────────────────────────
      PANELS.forEach((panel, i) => {
        const el = panelRefs.current[i]; if (!el) return;

        // Mobile: limit visible panels to avoid crowding + overflow.
        // We show panels 0,2,3,6,7,9,11 (one per environment, left-side preferred)
        const MOB_VISIBLE = new Set([0, 2, 3, 6, 7, 9, 11]);
        if (mob && !MOB_VISIBLE.has(i)) {
          if (el.style.opacity !== '0') el.style.opacity = '0';
          return;
        }

        const alpha = alphas[i];
        if (alpha < 0.008) { if (el.style.opacity !== '0') el.style.opacity = '0'; return; }

        // Camera parallax by depth — far moves less, near moves more
        const par  = PAR[panel.depth];
        // Reduce camera movement on mobile to avoid drift-induced overflow
        const camMult = mob ? 0.3 : 1.0;
        const camX = isReduced ? 0 : cam.x * par * camMult;
        const camY = isReduced ? 0 : cam.y * par * camMult;

        // Drift — reduce amplitude on mobile
        const driftAmp = mob ? 0.35 : 1.0;
        const dx = isReduced ? 0 : Math.sin(tSec * panel.driftSpd + panel.driftT) * panel.driftX * driftAmp;
        const dy = isReduced ? 0 : Math.cos(tSec * panel.driftSpd * 0.78 + panel.driftT) * panel.driftY * driftAmp;

        // Approach boost: panel slightly scales up at peak visibility
        const peakFactor = smooth(panel.enter, panel.peak, p) * smooth(panel.exit, panel.peak, p);
        const scaleFinal = panel.scale * (1 + peakFactor * 0.035);

        // On mobile use mobile-safe rotation (reduced) and mobile-safe perspective
        const rotY = mob ? PANELS_MOBILE[i].rotY : panel.rotY;
        const rotX = mob ? PANELS_MOBILE[i].rotX : panel.rotX;
        // Reduce Z depth on mobile to avoid perspective clipping
        const pz   = mob ? panel.z * 0.4 : panel.z;

        el.style.opacity   = alpha.toFixed(4);
        el.style.transform = [
          mob ? 'perspective(600px)' : 'perspective(900px)',
          `rotateY(${rotY}deg)`,
          `rotateX(${rotX}deg)`,
          `translateZ(${pz}px)`,
          `translate(${(dx + camX).toFixed(2)}px, ${(dy + camY).toFixed(2)}px)`,
          `scale(${scaleFinal.toFixed(4)})`,
        ].join(' ');

        // Apply mobile-safe left/top/width via inline style when on mobile
        // (the initial CSS values come from the PANELS array which has desktop values)
        if (mob) {
          const mp = PANELS_MOBILE[i];
          el.style.left  = mp.left;
          el.style.top   = mp.top;
          el.style.width = mp.width;
        }

        // Dynamic rim light — brighter at peak, dims on enter/exit
        const inner = innerEls[i]; if (!inner) return;
        const rimA  = alpha * 0.90;
        const rimSz = 8 + alpha * 14;
        inner.style.boxShadow = [
          `0 0 0 1px rgba(0,210,255,${(alpha * 0.18).toFixed(3)})`,
          `0 0 ${rimSz.toFixed(1)}px rgba(0,195,255,${(rimA * 0.65).toFixed(3)})`,
          `0 0 ${(rimSz * 2.8).toFixed(1)}px rgba(0,165,235,${(rimA * 0.25).toFixed(3)})`,
          `0 ${(12 + alpha * 8).toFixed(1)}px ${(40 + alpha * 22).toFixed(1)}px rgba(0,0,0,${(0.58 + alpha * 0.20).toFixed(3)})`,
          `inset 0 1px 0 rgba(255,255,255,${(alpha * 0.055).toFixed(3)})`,
        ].join(', ');
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <div className="ve-root" aria-hidden="true">
      {/* Atmospheric canvas — all environmental effects */}
      <canvas ref={canvasRef} className="ve-canvas" />

      {/* Floating cinematic panels */}
      {PANELS.map((panel, i) => (
        <div
          key={`vp-${i}`}
          ref={el => { panelRefs.current[i] = el; }}
          className="ve-panel"
          style={{ left: panel.left, top: panel.top, width: panel.width, opacity: 0 }}
        >
          <div className="ve-panel-inner">
            <Image
              src={panel.src}
              alt={panel.alt}
              width={panel.imgW}
              height={panel.imgH}
              unoptimized
              draggable={false}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
