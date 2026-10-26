"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CinematicVideo } from "@/components/common/CinematicVideo";
import { VIDEOS } from "@/config/videos";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const BrandAdvertisingSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sideVisualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const visual = sideVisualRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Headline reveal
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

      // Editorial campaign visual slide-in from edge
      if (visual && !isMobile) {
        gsap.fromTo(
          visual,
          { opacity: 0, x: 120, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
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
      id="brand-advertising"
      className="relative w-screen h-screen min-h-[100svh] flex items-center justify-between overflow-hidden bg-[#070B12]"
    >
      {/* Full-Screen Edge-to-Edge Background Video */}
      <CinematicVideo
        src={VIDEOS.brandAdvertising.src}
        fallbackSrc={VIDEOS.brandAdvertising.fallbackSrc}
        poster={VIDEOS.brandAdvertising.poster}
        alt="Brand Advertising Commercial Visual"
        isFullScreen={true}
        objectFit="cover"
        objectPosition="center"
        showOverlay={true}
        overlayOpacity="bg-gradient-to-t from-[#070B12]/80 via-[#070B12]/25 to-[#070B12]/60"
      />

      {/* Ambient Lighting */}
      <div className="ambient-glow w-[600px] h-[600px] top-1/2 left-1/4 -translate-y-1/2 opacity-30 pointer-events-none" />

      {/* Minimal Scene Header & Editorial Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pointer-events-none">
        {/* Left Headline */}
        <div ref={textRef} className="max-w-xl pointer-events-auto">
          <div className="inline-block text-[11px] font-mono tracking-[0.3em] uppercase text-[#009DFF] mb-3">
            BRAND CAMPAIGNS
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-white tracking-tight leading-[1.05]">
            WE DON&apos;T JUST CREATE ADS.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text block">
              WE CREATE IMPACT.
            </span>
          </h2>
        </div>

        {/* Right Subtle Editorial Visual Preview */}
        <div
          ref={sideVisualRef}
          className="hidden lg:flex flex-col gap-2 max-w-sm pointer-events-auto"
        >
          <div className="relative aspect-[16/10] w-72 rounded-xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] glow-blue-sm group">
            <Image
              src="/images/portfolio/perfume-campaign.jpg"
              alt="Luxury Perfume Commercial Art Direction"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono tracking-wider text-white">
              <span>COMMERCIAL ART DIRECTION</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#009DFF]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
