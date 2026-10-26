"use client";

import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CinematicVideo } from "@/components/common/CinematicVideo";
import { VIDEOS } from "@/config/videos";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const FinalCtaSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        { opacity: 0, scale: 0.92, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="final-scene"
      className="relative w-screen h-screen min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#070B12]"
    >
      {/* Full-Screen Edge-to-Edge Background Video */}
      <CinematicVideo
        src={VIDEOS.finalCta.src}
        fallbackSrc={VIDEOS.finalCta.fallbackSrc}
        poster={VIDEOS.finalCta.poster}
        alt="RIGHTMOVE Final Call To Action"
        isFullScreen={true}
        objectFit="cover"
        objectPosition="center"
        showOverlay={true}
        overlayOpacity="bg-gradient-to-t from-[#070B12]/80 via-[#070B12]/40 to-[#070B12]/70"
      />

      {/* Atmospheric Electric Blue Glow */}
      <div className="ambient-glow w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35 pointer-events-none" />

      {/* Foreground Display: Display only "MAKE YOUR NEXT MOVE." & Button "LET'S WORK TOGETHER ↗" */}
      <div
        ref={contentRef}
        className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
      >
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-heading text-white tracking-tight leading-[1.02]">
          MAKE YOUR{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text">
            NEXT MOVE.
          </span>
        </h2>

        <div className="mt-8 sm:mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-mono font-bold tracking-wider uppercase btn-primary glow-blue-md"
          >
            <span>LET&apos;S WORK TOGETHER</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
