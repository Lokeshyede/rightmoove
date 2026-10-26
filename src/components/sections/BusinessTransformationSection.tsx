"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles, TrendingUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CinematicVideo } from "@/components/common/CinematicVideo";
import { VIDEOS } from "@/config/videos";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const BusinessTransformationSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const pill = pillRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (text) {
        gsap.fromTo(
          text,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 60%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      if (pill) {
        gsap.fromTo(
          pill,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 50%",
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
      id="brands-in-motion"
      className="relative w-screen h-screen min-h-[100svh] flex flex-col justify-between p-6 sm:p-12 lg:p-16 overflow-hidden bg-[#070B12]"
    >
      {/* Full-Screen Edge-to-Edge Background Video */}
      <CinematicVideo
        src={VIDEOS.businessTransformation.src}
        fallbackSrc={VIDEOS.businessTransformation.fallbackSrc}
        poster={VIDEOS.businessTransformation.poster}
        alt="Business Transformation E-Commerce Redesign"
        isFullScreen={true}
        objectFit="cover"
        objectPosition="center"
        showOverlay={true}
        overlayOpacity="bg-gradient-to-t from-[#070B12]/80 via-transparent to-[#070B12]/50"
      />

      {/* Top Label */}
      <div className="relative z-20 flex items-center justify-between w-full pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] bg-[#070B12]/70 border border-[#087BFF]/30 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-[#087BFF]" />
          <span>BRANDS IN MOTION</span>
        </div>
      </div>

      {/* Center Minimal Headline */}
      <div
        ref={textRef}
        className="relative z-20 max-w-4xl mx-auto text-center my-auto pointer-events-none"
      >
        <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black font-heading text-white tracking-tight leading-[1.05]">
          YOUR BUSINESS.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text block">
            OUR NEXT BIG MOVE.
          </span>
        </h2>
      </div>

      {/* Bottom Minimal Case Pill */}
      <div
        ref={pillRef}
        className="relative z-20 w-full flex items-center justify-between text-[11px] font-mono text-white/80 pointer-events-none"
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#070B12]/80 border border-white/10 backdrop-blur-md pointer-events-auto">
          <TrendingUp className="w-3.5 h-3.5 text-[#009DFF]" />
          <span>FLAGSHIP COMMERCE MODERNIZATION</span>
        </div>

        <div className="hidden sm:block px-4 py-2 rounded-xl bg-[#070B12]/80 border border-white/10 backdrop-blur-md pointer-events-auto">
          MARKET POSITIONING · DIGITAL ECOSYSTEMS · SCALE
        </div>
      </div>
    </section>
  );
};
