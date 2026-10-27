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
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const shutterTopRef = useRef<HTMLDivElement>(null);
  const shutterBottomRef = useRef<HTMLDivElement>(null);
  const sweepLineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const videoWrapper = videoWrapperRef.current;
    const shutterTop = shutterTopRef.current;
    const shutterBottom = shutterBottomRef.current;
    const sweepLine = sweepLineRef.current;
    const text = textRef.current;
    const pill = pillRef.current;
    if (!container || !videoWrapper) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // 1. Layered Dark Shutter Wipe Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "center center",
          scrub: 1.2
        }
      });

      // Video scale settles gracefully into full screen
      tl.fromTo(
        videoWrapper,
        { scale: 1.08 },
        { scale: 1.0, ease: "power2.out" },
        0
      );

      // Top shutter wipes diagonally to the left
      if (shutterTop) {
        tl.fromTo(
          shutterTop,
          { xPercent: 0, yPercent: 0 },
          { xPercent: isMobile ? -100 : -102, yPercent: isMobile ? 0 : -15, ease: "power2.inOut" },
          0
        );
      }

      // Bottom shutter wipes diagonally to the right
      if (shutterBottom) {
        tl.fromTo(
          shutterBottom,
          { xPercent: 0, yPercent: 0 },
          { xPercent: isMobile ? 100 : 102, yPercent: isMobile ? 0 : 15, ease: "power2.inOut" },
          0
        );
      }

      // Electric-blue light sweep line traversing along the parting boundary
      if (sweepLine) {
        tl.fromTo(
          sweepLine,
          { opacity: 1, scaleY: 1, xPercent: -50 },
          { opacity: 0, scaleY: 1.2, xPercent: 50, ease: "power1.in" },
          "-=0.5"
        );
      }

      // 2. Minimal Headline & Bottom Pill entrance
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

      if (pill) {
        gsap.fromTo(
          pill,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
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
      id="brands-in-motion"
      className="relative w-screen h-screen min-h-[100svh] flex flex-col justify-between p-6 sm:p-12 lg:p-16 overflow-hidden bg-[#070B12]"
    >
      {/* Settling Full-Screen Video Wrapper */}
      <div
        ref={videoWrapperRef}
        className="absolute inset-0 w-full h-full overflow-hidden will-change-transform"
      >
        <CinematicVideo
          src={VIDEOS.businessTransformation.src}
          fallbackSrc={VIDEOS.businessTransformation.fallbackSrc}
          poster={VIDEOS.businessTransformation.poster}
          alt="Business Transformation E-Commerce Redesign"
          isFullScreen={true}
          objectFit="cover"
          objectPosition="center"
          showOverlay={true}
          overlayOpacity="bg-gradient-to-t from-[#070B12]/85 via-transparent to-[#070B12]/50"
        />
      </div>

      {/* Layer 1: Top Diagonal Dark Shutter Mask */}
      <div
        ref={shutterTopRef}
        className="absolute inset-0 w-full h-[60%] bg-[#0B1220] z-10 pointer-events-none origin-top-left will-change-transform shadow-[0_15px_40px_rgba(0,0,0,0.9)]"
      />

      {/* Layer 2: Bottom Diagonal Dark Shutter Mask */}
      <div
        ref={shutterBottomRef}
        className="absolute bottom-0 left-0 right-0 w-full h-[60%] bg-[#070B12] z-10 pointer-events-none origin-bottom-right will-change-transform shadow-[0_-15px_40px_rgba(0,0,0,0.9)]"
      />

      {/* Electric-Blue Sweep Line traversing the parting seam */}
      <div
        ref={sweepLineRef}
        className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#009DFF] to-transparent shadow-[0_0_25px_#087BFF,0_0_50px_#009DFF] pointer-events-none z-15 opacity-0"
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

