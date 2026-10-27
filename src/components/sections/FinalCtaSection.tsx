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
  const irisWrapperRef = useRef<HTMLDivElement>(null);
  const videoInnerRef = useRef<HTMLDivElement>(null);
  const irisRingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const iris = irisWrapperRef.current;
    const videoInner = videoInnerRef.current;
    const ring = irisRingRef.current;
    const content = contentRef.current;
    if (!container || !iris) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // 1. Center-Outward Iris Reveal & Spatial Zoom-Out Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "center center",
          scrub: 1.2
        }
      });

      // Expand from center outward using circular clipPath
      tl.fromTo(
        iris,
        {
          clipPath: isMobile
            ? "circle(18% at 50% 50%)"
            : "circle(10% at 50% 50%)"
        },
        {
          clipPath: "circle(125% at 50% 50%)",
          ease: "power2.out"
        },
        0
      );

      // Subtle zoom-out creating deep feeling of space
      if (videoInner) {
        tl.fromTo(
          videoInner,
          { scale: 1.16 },
          { scale: 1.0, ease: "power2.out" },
          0
        );
      }

      // Glowing electric-blue iris ring dissolving as it expands
      if (ring) {
        tl.fromTo(
          ring,
          { scale: 0.2, opacity: 1 },
          { scale: 2.2, opacity: 0, ease: "power1.in" },
          0
        );
      }

      // 2. Minimal Final Headline and CTA revealed after visual transition begins
      if (content) {
        gsap.fromTo(
          content,
          { opacity: 0, scale: 0.92, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 45%",
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
      id="final-scene"
      className="relative w-screen h-screen min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#070B12]"
    >
      {/* Center-Outward Radial Iris Reveal Wrapper */}
      <div
        ref={irisWrapperRef}
        className="absolute inset-0 w-full h-full overflow-hidden will-change-transform"
        style={{ clipPath: "circle(125% at 50% 50%)" }}
      >
        <div
          ref={videoInnerRef}
          className="absolute inset-0 w-full h-full will-change-transform"
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
        </div>

        {/* Glowing Electric-Blue Iris Aperture Ring */}
        <div
          ref={irisRingRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border-2 border-[#009DFF] shadow-[0_0_40px_#087BFF,inset_0_0_40px_#009DFF] pointer-events-none z-10 opacity-0"
        />
      </div>

      {/* Atmospheric Electric Blue Glow */}
      <div className="ambient-glow w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35 pointer-events-none" />

      {/* Foreground Display: "MAKE YOUR NEXT MOVE." & CTA Button */}
      <div
        ref={contentRef}
        className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center pointer-events-none"
      >
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-heading text-white tracking-tight leading-[1.02]">
          MAKE YOUR{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text">
            NEXT MOVE.
          </span>
        </h2>

        <div className="mt-8 sm:mt-12 pointer-events-auto">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-mono font-bold tracking-wider uppercase btn-primary glow-blue-md transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <span>LET&apos;S WORK TOGETHER</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

