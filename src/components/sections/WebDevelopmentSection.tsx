"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles, Terminal, Cpu } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CinematicVideo } from "@/components/common/CinematicVideo";
import { VIDEOS } from "@/config/videos";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const WebDevelopmentSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const maskWrapperRef = useRef<HTMLDivElement>(null);
  const videoInnerRef = useRef<HTMLDivElement>(null);
  const scanBeamRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const mask = maskWrapperRef.current;
    const videoInner = videoInnerRef.current;
    const scanBeam = scanBeamRef.current;
    const text = textRef.current;
    const hud = hudRef.current;
    if (!container || !mask) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // 1. Bottom-to-Top Vertical Reveal Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "center center",
          scrub: 1.2
        }
      });

      // Background subtle transition from black -> deep navy -> black
      tl.fromTo(
        container,
        { backgroundColor: "#070B12" },
        { backgroundColor: "#0B1220", ease: "power1.inOut" },
        0
      );

      // Reveal incoming scene from bottom to top using clipping mask
      tl.fromTo(
        mask,
        { clipPath: isMobile ? "inset(40% 0% 0% 0%)" : "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.out" },
        0
      );

      // Vertical camera movement & scale settling
      if (videoInner) {
        tl.fromTo(
          videoInner,
          { y: 80, scale: 1.08 },
          { y: 0, scale: 1.0, ease: "power2.out" },
          0
        );
      }

      // Electric-blue scanning beam at the leading mask edge
      if (scanBeam) {
        tl.fromTo(
          scanBeam,
          { opacity: 1, scaleX: 0.8 },
          { opacity: 0, scaleX: 1.2, ease: "power2.in" },
          "-=0.4"
        );
      }

      // 2. Minimal Headline & HUD entrance
      if (text) {
        gsap.fromTo(
          text,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 45%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      if (hud) {
        gsap.fromTo(
          hud,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 35%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="digital-experiences"
      className="relative w-screen h-screen min-h-[100svh] flex flex-col justify-between p-6 sm:p-12 lg:p-16 overflow-hidden bg-[#070B12]"
    >
      {/* Bottom-to-Top Vertical Clipping Mask Wrapper */}
      <div
        ref={maskWrapperRef}
        className="absolute inset-0 w-full h-full overflow-hidden will-change-transform"
        style={{ clipPath: "inset(0% 0% 0% 0%)" }}
      >
        <div
          ref={videoInnerRef}
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          {/* Full-Screen Edge-to-Edge Background Video */}
          <CinematicVideo
            src={VIDEOS.webDevelopment.src}
            fallbackSrc={VIDEOS.webDevelopment.fallbackSrc}
            poster={VIDEOS.webDevelopment.poster}
            alt="Web and Mobile App Engineering"
            isFullScreen={true}
            objectFit="cover"
            objectPosition="center"
            showOverlay={true}
            overlayOpacity="bg-gradient-to-t from-[#070B12]/85 via-transparent to-[#070B12]/50"
          />
        </div>

        {/* Electric-Blue Leading Edge Scanning Beam */}
        <div
          ref={scanBeamRef}
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#009DFF] to-transparent shadow-[0_0_20px_#087BFF,0_0_40px_#009DFF] pointer-events-none z-10 opacity-0"
        />
      </div>

      {/* Top Label */}
      <div className="relative z-20 flex items-center justify-between w-full pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] bg-[#070B12]/70 border border-[#087BFF]/30 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-[#087BFF]" />
          <span>DIGITAL EXPERIENCES</span>
        </div>
      </div>

      {/* Center Minimal Headline */}
      <div
        ref={textRef}
        className="relative z-20 max-w-4xl mx-auto text-center my-auto pointer-events-none"
      >
        <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black font-heading text-white tracking-tight leading-[1.05]">
          DIGITAL EXPERIENCES{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text block">
            BUILT TO PERFORM.
          </span>
        </h2>
      </div>

      {/* Subtle Floating Interface Telemetry HUD */}
      <div
        ref={hudRef}
        className="relative z-20 w-full flex flex-wrap items-center justify-between gap-4 pointer-events-none"
      >
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#070B12]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-white/90 pointer-events-auto">
          <Terminal className="w-3.5 h-3.5 text-[#009DFF]" />
          <span>NEXT.JS // TAILWIND // REACT 19</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#070B12]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-white/90 pointer-events-auto">
          <Cpu className="w-3.5 h-3.5 text-[#009DFF]" />
          <span>HIGH-CONVERSION ARCHITECTURE</span>
        </div>
      </div>
    </section>
  );
};

