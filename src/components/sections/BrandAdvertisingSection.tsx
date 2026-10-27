"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CinematicVideo } from "@/components/common/CinematicVideo";
import { VIDEOS } from "@/config/videos";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const BrandAdvertisingSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const maskWrapperRef = useRef<HTMLDivElement>(null);
  const leftGlowSeamRef = useRef<HTMLDivElement>(null);
  const rightGlowSeamRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sideVisualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const mask = maskWrapperRef.current;
    const leftGlow = leftGlowSeamRef.current;
    const rightGlow = rightGlowSeamRef.current;
    const text = textRef.current;
    const visual = sideVisualRef.current;
    if (!container || !mask) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // 1. Horizontal Clip-Path & Perspective Reveal from Center
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "center center",
          scrub: 1.2
        }
      });

      // Expand from narrow vertical opening to full-screen 100%
      tl.fromTo(
        mask,
        {
          clipPath: isMobile ? "inset(0% 25% 0% 25%)" : "inset(0% 48% 0% 48%)",
          scale: 1.14,
          rotateY: isMobile ? 0 : 6,
          transformPerspective: 1200
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1.0,
          rotateY: 0,
          ease: "power2.out"
        }
      );

      // Glowing blue seams on expanding slit edges
      if (leftGlow && rightGlow) {
        tl.fromTo(
          [leftGlow, rightGlow],
          { opacity: 1, scaleY: 1 },
          { opacity: 0, scaleY: 1.2, ease: "power1.in" },
          "-=0.4"
        );
      }

      // Text and supporting visual entrance after expansion settles
      if (text) {
        gsap.fromTo(
          text,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 40%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      if (visual && !isMobile) {
        gsap.fromTo(
          visual,
          { opacity: 0, x: 80, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
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
      id="brand-advertising"
      className="relative w-screen h-screen min-h-[100svh] flex items-center justify-between overflow-hidden bg-[#070B12]"
    >
      {/* Expanding Masked Video Wrapper */}
      <div
        ref={maskWrapperRef}
        className="absolute inset-0 w-full h-full overflow-hidden will-change-transform"
        style={{ clipPath: "inset(0% 0% 0% 0%)" }}
      >
        <CinematicVideo
          src={VIDEOS.brandAdvertising.src}
          fallbackSrc={VIDEOS.brandAdvertising.fallbackSrc}
          poster={VIDEOS.brandAdvertising.poster}
          alt="Brand Advertising Commercial Visual"
          isFullScreen={true}
          objectFit="cover"
          objectPosition="center"
          showOverlay={true}
          overlayOpacity="bg-gradient-to-t from-[#070B12]/80 via-[#070B12]/20 to-[#070B12]/60"
        />

        {/* Electric Blue Expanding Glow Seams */}
        <div
          ref={leftGlowSeamRef}
          className="absolute top-0 bottom-0 left-[2%] w-[2px] bg-[#009DFF] shadow-[0_0_20px_#087BFF,0_0_40px_#009DFF] pointer-events-none z-10 opacity-0"
        />
        <div
          ref={rightGlowSeamRef}
          className="absolute top-0 bottom-0 right-[2%] w-[2px] bg-[#009DFF] shadow-[0_0_20px_#087BFF,0_0_40px_#009DFF] pointer-events-none z-10 opacity-0"
        />
      </div>

      {/* Atmospheric Ambient Lighting */}
      <div className="ambient-glow w-[600px] h-[600px] top-1/2 left-1/4 -translate-y-1/2 opacity-30 pointer-events-none" />

      {/* Minimal Scene Header & Editorial Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pointer-events-none">
        {/* Left Headline */}
        <div ref={textRef} className="max-w-xl pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] bg-[#070B12]/70 border border-[#087BFF]/30 backdrop-blur-md mb-4">
            <Sparkles className="w-3 h-3 text-[#087BFF]" />
            <span>BRAND CAMPAIGNS</span>
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
