'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLenis } from '@/context/LenisContext';
import VisualEnvironment from './VisualEnvironment';
import { setScrollProgress } from './sharedScrollProgress';
import './MainExperience.css';

gsap.registerPlugin(ScrollTrigger);

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const SCENE_PX = 600;
const SCENES = [
  'p2-opening',
  'f-ad', 'f-attn', 'f-click', 'f-lead', 'f-cust', 'f-growth',
  'srv-meta', 'srv-google', 'srv-seo', 'srv-lead',
  'p3-social', 'p3-content', 'p3-video', 'p3-creative',
  'p3-digital', 'p3-eco', 'p3-cta',
];
const SCROLL_TRACK_HEIGHT = SCENES.length * SCENE_PX; // 10,800px

// ─── Funnel + Services data ───────────────────────────────────────────────────
const FUNNEL_STEPS = [
  { label: 'AD',       cls: 'f-ad',     num: '01' },
  { label: 'ATTENTION',cls: 'f-attn',   num: '02' },
  { label: 'CLICK',    cls: 'f-click',  num: '03' },
  { label: 'LEAD',     cls: 'f-lead',   num: '04' },
  { label: 'CUSTOMER', cls: 'f-cust',   num: '05' },
  { label: 'GROWTH',   cls: 'f-growth', num: '06' },
];

const SERVICES = [
  {
    id: 'srv-meta',   title: 'META ADS',       desc: 'Reach. Convert. Scale.',
    img: '/media/rightmove/marketing/meta-campaign-01.jpg',
    imgAlt: 'Meta advertising campaign dashboard concept',
  },
  {
    id: 'srv-google', title: 'GOOGLE ADS',      desc: 'Target. Capture. Convert.',
    img: '/media/rightmove/marketing/google-ads-01.jpg',
    imgAlt: 'Search advertising and keyword targeting concept',
  },
  {
    id: 'srv-seo',    title: 'SEO',             desc: 'Get discovered. Build authority.',
    img: '/media/rightmove/marketing/seo-01.jpg',
    imgAlt: 'Organic search ranking and authority visualization',
  },
  {
    id: 'srv-lead',   title: 'LEAD GENERATION', desc: 'Traffic. Interest. Form. Growth.',
    img: '/media/rightmove/marketing/lead-gen-01.jpg',
    imgAlt: 'Lead generation funnel and conversion concept',
  },
];

// ─── Cinematic Particle Canvas ────────────────────────────────────────────────
const CinematicParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    type Particle = { x: number; y: number; z: number; size: number; speed: number; alpha: number };
    const pts: Particle[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 1000,
      size: Math.random() * 1.8 + 0.4,
      speed: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let rid = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#00d2ff';
      pts.forEach((p) => {
        p.z -= p.speed * 2;
        if (p.z <= 0) { p.z = 1000; p.x = Math.random() * w; p.y = Math.random() * h; }
        const sc = 1000 / p.z;
        const x2 = (p.x - w / 2) * sc + w / 2;
        const y2 = (p.y - h / 2) * sc + h / 2;
        if (x2 < -10 || x2 > w + 10 || y2 < -10 || y2 > h + 10) return;
        ctx.globalAlpha = p.alpha * Math.min(1, sc / 2);
        ctx.beginPath();
        ctx.arc(x2, y2, Math.min(p.size * sc, 6), 0, Math.PI * 2);
        ctx.fill();
      });
      rid = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(rid); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={canvasRef} className="cinematic-particles" aria-hidden="true" />;
};

// ─── Main Experience Component ────────────────────────────────────────────────
export default function MainExperience() {
  const wrapperRef   = useRef<HTMLDivElement>(null);
  const entryDone    = useRef(false);
  const scrollSetup  = useRef(false);
  const scrollCtxRef = useRef<gsap.Context | null>(null);
  const { lenis } = useLenis();

  // ══════════════════════════════════════════════════════════════════════════
  // SYSTEM B — SCROLL-DRIVEN EXPERIENCE (declared first — resolves TDZ)
  // ══════════════════════════════════════════════════════════════════════════
  const setupScrollExperience = () => {
    if (scrollSetup.current) return;
    scrollSetup.current = true;
    console.log('[RIGHTMOVE] SCROLL MODE ENABLED');

    const ctx = gsap.context(() => {
      const SCENE_DUR = 1 / SCENES.length;
      const EXIT_Z = 700;

      const depthMap = (
        tl: gsap.core.Timeline,
        selector: string,
        atProgress: number
      ) => {
        const approachDur = SCENE_DUR * 0.35;
        const holdDur     = SCENE_DUR * 0.35;
        const exitDur     = SCENE_DUR * 0.30;

        tl.fromTo(selector,
          { z: -1600, opacity: 0, filter: 'blur(24px)', scale: 0.65 },
          { z: 0,     opacity: 1, filter: 'blur(0px)',  scale: 1,
            duration: approachDur, ease: 'power2.out',
            onStart: () => console.log(`[RIGHTMOVE] SCENE ${selector} ENTER`) },
          atProgress
        );
        tl.to(selector,
          { z: 0, duration: holdDur, ease: 'none' },
          atProgress + approachDur
        );
        tl.to(selector,
          { z: EXIT_Z, opacity: 0, filter: 'blur(28px)', scale: 1.4,
            duration: exitDur, ease: 'power2.in',
            onComplete: () => console.log(`[RIGHTMOVE] SCENE ${selector} EXIT`) },
          atProgress + approachDur + holdDur
        );
      };

      const masterTl = gsap.timeline({ paused: true });
      SCENES.forEach((cls, i) => { depthMap(masterTl, `.${cls}`, i * SCENE_DUR); });

      const funnelStart = 1 * SCENE_DUR;
      const funnelEnd   = 8 * SCENE_DUR;
      const funnelDur   = funnelEnd - funnelStart;
      const pathEl = document.querySelector('.energy-path') as SVGGeometryElement | null;
      const pathLen = pathEl ? Math.ceil(pathEl.getTotalLength()) : 1800;

      masterTl.fromTo('.energy-path',
        { strokeDasharray: pathLen, strokeDashoffset: pathLen, opacity: 0 },
        { strokeDashoffset: 0, opacity: 0.6, ease: 'none', duration: funnelDur },
        funnelStart
      );
      masterTl.to('.energy-path',
        { opacity: 0, ease: 'none', duration: SCENE_DUR },
        funnelEnd
      );
      masterTl.to('.final-glow-circle', {
        opacity: 0.7, scale: 2.2, ease: 'power2.out', duration: SCENE_DUR,
      }, 17 * SCENE_DUR);

      ScrollTrigger.create({
        trigger: '.scroll-track',
        start: 'top top',
        end: `+=${SCROLL_TRACK_HEIGHT}`,
        scrub: 1.5,
        onUpdate: (self) => {
          masterTl.progress(self.progress);
          setScrollProgress(self.progress); // share with VisualEnvironment — no new scroll system
        },
        onEnter:     () => console.log('[RIGHTMOVE] PHASE 2 ENTER'),
        onLeave:     () => console.log('[RIGHTMOVE] PHASE 3 EXIT'),
        onEnterBack: () => console.log('[RIGHTMOVE] SCROLL BACKWARD'),
      });
    });

    scrollCtxRef.current = ctx;
  };

  // ══════════════════════════════════════════════════════════════════════════
  // SYSTEM A — PAGE-ENTRY ANIMATION
  // ══════════════════════════════════════════════════════════════════════════
  useEffect(() => {
    if (!lenis || entryDone.current) return;
    entryDone.current = true;

    lenis.stop();
    document.documentElement.style.overflow = 'hidden';

    gsap.set('.p1-container',    { opacity: 1, display: 'flex' });
    gsap.set('.p1-energy-line',  { opacity: 0, scaleX: 0, x: 0, transformOrigin: 'left center' });
    gsap.set('.p1-arrow-wrapper',{ opacity: 0, scale: 0.15 });
    gsap.set('.p1-arrow-glow',   { opacity: 0, scale: 0.5 });
    gsap.set('.p1-logo',         { opacity: 0, y: 50 });
    gsap.set('.p1-env',          { opacity: 0 });
    gsap.set('.p1-wemove',       { opacity: 0, scale: 0.6 });

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = '';
        lenis.start();
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
          setupScrollExperience();
        });
      },
    });

    tl.set('.p1-energy-line', { opacity: 0 }, 0.3);
    tl.to('.p1-energy-line', { opacity: 1, scaleX: 1, duration: 0.25, ease: 'power4.out' }, 0.3);
    tl.to('.p1-energy-line', { x: '110vw', opacity: 0, duration: 0.45, ease: 'power3.in' }, 0.55);
    tl.to('.p1-arrow-wrapper', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.6)' }, 1.0);
    tl.to('.p1-arrow-glow',    { opacity: 1, scale: 1, duration: 0.5 }, 1.0);
    tl.to('.p1-arrow-wrapper', { scale: 5, opacity: 0, duration: 0.6, ease: 'power4.in' }, 1.7);
    tl.to('.p1-arrow-glow',    { scale: 5, opacity: 0, duration: 0.6, ease: 'power4.in' }, 1.7);
    tl.to('.p1-logo', { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out' }, 2.3);
    tl.to('.p1-logo', { opacity: 0, y: -30, duration: 0.35, ease: 'power2.in' }, 3.0);
    tl.to('.p1-env',  { opacity: 1, duration: 0.6, ease: 'power2.out' }, 3.0);
    tl.to('.p1-wemove', { opacity: 1, scale: 1, duration: 0.9, ease: 'expo.out' }, 3.6);
    tl.to('.p1-wemove',    { opacity: 0, scale: 1.25, duration: 0.4, ease: 'power2.in' }, 4.6);
    tl.to('.p1-env',       { opacity: 0.15, duration: 0.4 }, 4.6);
    tl.to('.p1-container', {
      opacity: 0, duration: 0.4, ease: 'power2.inOut',
      onComplete: () => gsap.set('.p1-container', { display: 'none' }),
    }, 4.6);

    [1, 2, 3, 4].forEach(s => {
      tl.call(() => console.log(`[RIGHTMOVE] ENTRY ${s}s`), [], s);
    });
    tl.call(() => console.log('[RIGHTMOVE] ENTRY COMPLETE'), [], 5.0);

    return () => {
      tl.kill();
      scrollCtxRef.current?.revert();
      document.documentElement.style.overflow = '';
    };
  }, [lenis]);

  return (
    <div ref={wrapperRef} className="mc-wrapper">
      {/* ─── Continuous background visual environment — behind everything ─── */}
      <VisualEnvironment />

      <CinematicParticles />

      {/* ═══ SYSTEM A — Phase 1 Fixed Cinematic Intro Overlay ═══ */}
      <section className="p1-container" aria-label="RightMove intro" aria-hidden="true">
        <div className="p1-env absolute-fill" aria-hidden="true">
          <div className="grid-floor" />
          <div className="radial-vignette" />
        </div>
        <div className="p1-energy-line" aria-hidden="true" />
        <div className="p1-arrow-glow" aria-hidden="true" />
        <div className="p1-arrow-wrapper" aria-hidden="true">
          <svg width="140" height="140" viewBox="0 0 24 24" fill="none"
            stroke="var(--color-cyan)" strokeWidth="1.1"
            strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <polyline points="14 5 21 12 14 19" />
          </svg>
        </div>
        <div className="p1-logo" role="img" aria-label="RightMove — Performance Marketing & Strategy">
          <Image
            src="/media/rightmove/logo/rightmove-logo.png"
            alt="RightMove — Performance Marketing & Strategy"
            width={860}
            height={287}
            priority
            unoptimized
            className="p1-logo-img"
          />
        </div>
        <div className="p1-wemove" aria-hidden="true">
          <h2 className="hero-text glow-white">
            WE MOVE<br />
            <span className="text-grad-cyan">BRANDS</span><br />
            FORWARD
          </h2>
        </div>
      </section>

      {/* ═══ SYSTEM B — Scroll-Driven Phase 2 + Phase 3 ═══ */}
      <div
        className="scroll-track"
        style={{ height: SCROLL_TRACK_HEIGHT }}
        aria-label="Cinematic scroll experience"
      >
        <div className="camera-panel perspective-root">

          <div className="ambient-bg" aria-hidden="true">
            <div className="grid-floor grid-floor--dim" />
            <div className="radial-vignette" />
          </div>

          <svg className="energy-svg" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="eg" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="var(--color-electric-blue)" />
                <stop offset="50%"  stopColor="var(--color-cyan)" />
                <stop offset="100%" stopColor="#fff" />
              </linearGradient>
              <filter id="eglow">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <path className="energy-path"
              d="M -60,450 C 280,200 480,700 720,450 C 960,200 1160,700 1500,450"
              fill="none" stroke="url(#eg)" strokeWidth="3" filter="url(#eglow)" />
          </svg>

          <div className="final-glow-circle" aria-hidden="true" />

          {/* ── Phase 2 Opening ───────────────────────────────── */}
          <div className="p2-opening scene-node" aria-hidden="true">
            <h2 className="hero-text glow-white">
              WE TURN<br />
              <span className="glow-cyan">ATTENTION</span><br />
              INTO GROWTH.
            </h2>
          </div>

          {/* ── Funnel Journey ────────────────────────────────── */}
          {FUNNEL_STEPS.map((step) => (
            <div key={step.cls} className={`${step.cls} scene-node`} aria-hidden="true">
              <div className="funnel-node">
                <span>{step.num}</span>
              </div>
              <h3 className="hero-text glow-white">{step.label}</h3>
            </div>
          ))}

          {/* ── Services — with floating media panels ─────────── */}
          {SERVICES.map((srv) => (
            <div key={srv.id} className={`${srv.id} scene-node scene-has-visual`} aria-hidden="true">
              <div className="srv-text">
                <p className="tag-text glow-cyan mb-sm">CAPABILITIES</p>
                <h3 className="display-text text-grad-white mb-md">{srv.title}</h3>
                <p className="body-text glow-cyan">{srv.desc}</p>
              </div>
              <div className="srv-visual">
                <div className="media-float">
                  <Image
                    src={srv.img}
                    alt={srv.imgAlt}
                    width={720}
                    height={405}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          ))}

          {/* ── Phase 3: Social Media ─────────────────────────── */}
          <div className="p3-social scene-node scene-has-visual scene-visual-right" aria-hidden="true">
            <div className="srv-text">
              <p className="tag-text glow-cyan mb-sm">SOCIAL MEDIA</p>
              <h2 className="hero-text glow-white">CONTENT<br />THAT MOVES.</h2>
            </div>
            <div className="srv-visual">
              <div className="media-float media-float--tilt-left">
                <Image
                  src="/media/rightmove/social/social-creative-01.jpg"
                  alt="Premium social media advertising creatives"
                  width={800}
                  height={600}
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* ── Phase 3: Content Strategy ────────────────────── */}
          <div className="p3-content scene-node scene-has-visual scene-visual-left" aria-hidden="true">
            <div className="srv-visual">
              <div className="media-float media-float--tilt-right">
                <Image
                  src="/media/rightmove/social/content-strategy-01.jpg"
                  alt="Content planning dashboard and editorial calendar"
                  width={800}
                  height={450}
                  unoptimized
                />
              </div>
            </div>
            <div className="srv-text">
              <p className="tag-text glow-cyan mb-sm">CONTENT STRATEGY</p>
              <h2 className="hero-text glow-white">STRATEGY<br />BEHIND EVERY<br />SCROLL.</h2>
            </div>
          </div>

          {/* ── Phase 3: Video Ads ───────────────────────────── */}
          <div className="p3-video scene-node scene-has-visual" aria-hidden="true">
            <div className="srv-text">
              <p className="tag-text glow-cyan mb-sm">VIDEO ADS</p>
              <h2 className="display-text text-grad-white">STOP<br />THE SCROLL.</h2>
            </div>
            <div className="srv-visual">
              <div className="media-float media-float--wide">
                <Image
                  src="/media/rightmove/video-ads/video-ads-01.jpg"
                  alt="Vertical video advertising creative mockups"
                  width={800}
                  height={450}
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* ── Phase 3: Creative + Performance ─────────────── */}
          <div className="p3-creative scene-node scene-has-visual scene-visual-left" aria-hidden="true">
            <div className="srv-visual">
              <div className="media-float media-float--tilt-right">
                <Image
                  src="/media/rightmove/social/creative-performance-01.jpg"
                  alt="Creative and performance marketing analytics dashboard"
                  width={800}
                  height={450}
                  unoptimized
                />
              </div>
            </div>
            <div className="srv-text">
              <h2 className="hero-text glow-white">
                CREATIVE<br />MEETS<br />
                <span className="glow-cyan">PERFORMANCE.</span>
              </h2>
            </div>
          </div>

          {/* ── Phase 3: Digital Experiences ─────────────────── */}
          <div className="p3-digital scene-node p3-digital-layout" aria-hidden="true">
            <div className="digital-text-row">
              <p className="tag-text text-gray mb-sm">DIGITAL EXPERIENCES</p>
              <h2 className="hero-text text-gray-light">WEBSITE + APP + SOFTWARE</h2>
            </div>
            <div className="digital-media-row">
              <div className="media-float media-float--sm">
                <Image
                  src="/media/rightmove/websites/website-mockup-01.jpg"
                  alt="Premium website design mockups"
                  width={720}
                  height={405}
                  unoptimized
                />
              </div>
              <div className="media-float media-float--sm media-float--mid">
                <Image
                  src="/media/rightmove/apps/app-mockup-01.jpg"
                  alt="Mobile application mockups"
                  width={720}
                  height={405}
                  unoptimized
                />
              </div>
              <div className="media-float media-float--sm media-float--back">
                <Image
                  src="/media/rightmove/software/software-mockup-01.jpg"
                  alt="Business software and CRM dashboard mockup"
                  width={720}
                  height={405}
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* ── Phase 3: Ecosystem ───────────────────────────── */}
          <div className="p3-eco scene-node" aria-hidden="true">
            <h2 className="large-text glow-cyan mb-xl">CONNECTED ECOSYSTEM</h2>
            <div className="eco-flow">
              <span>CONTENT →</span>
              <span>ADS →</span>
              <span>ATTENTION →</span>
              <span>LEADS →</span>
              <span>EXPERIENCE →</span>
              <span className="text-white font-black">GROWTH</span>
            </div>
          </div>

          {/* ── Final CTA ────────────────────────────────────── */}
          <div className="p3-cta scene-node" aria-label="Contact RightMove">
            <h2 className="display-text glow-white mb-xl">
              READY TO MOVE<br />YOUR BUSINESS<br />FORWARD?
            </h2>
            <a
              href="mailto:hello@rightmove.agency"
              className="cta-btn"
              aria-label="Contact RightMove team"
            >
              LET&apos;S TALK
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
