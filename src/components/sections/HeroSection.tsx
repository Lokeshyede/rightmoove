"use client";

import React, { useEffect, useRef } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CinematicVideo } from "@/components/common/CinematicVideo";
import { VIDEOS } from "@/config/videos";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion && contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.3
          }
        );
      }

      // Smooth scroll parallax exit
      if (containerRef.current && contentRef.current) {
        gsap.to(contentRef.current, {
          y: -70,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-screen h-screen min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#070B12]"
    >
      {/* Full-Screen Edge-to-Edge Hero Video */}
      <CinematicVideo
        src={VIDEOS.hero.src}
        fallbackSrc={VIDEOS.hero.fallbackSrc}
        poster={VIDEOS.hero.poster}
        alt="RIGHTMOVE Cinematic Brand Vision"
        isHero={true}
        priority={true}
        isFullScreen={true}
        objectFit="cover"
        objectPosition="center"
        showOverlay={true}
        overlayOpacity="bg-gradient-to-t from-[#070B12]/85 via-[#070B12]/30 to-[#070B12]/60"
        blurGlow={false}
      />

      {/* Atmospheric Electric Blue Center Glow */}
      <div className="ambient-glow w-[650px] h-[650px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35 pointer-events-none" />

      {/* Minimal Hero Text - Strict to requirements */}
      <div
        ref={contentRef}
        className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center"
      >
        <span className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#009DFF] mb-4 drop-shadow-[0_0_15px_rgba(8,123,255,0.6)]">
          RIGHTMOVE
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-heading text-white tracking-tight leading-[1.02]">
          WE MAKE BRANDS{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text block sm:inline">
            IMPOSSIBLE TO IGNORE.
          </span>
        </h1>

        <div className="mt-8 sm:mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase btn-primary glow-blue-md"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/50 pointer-events-none">
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase">
          SCROLL
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#009DFF]" />
      </div>
    </section>
  );
};
