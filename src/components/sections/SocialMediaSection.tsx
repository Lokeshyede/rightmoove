"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CinematicVideo } from "@/components/common/CinematicVideo";
import { VIDEOS } from "@/config/videos";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const SocialMediaSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const darkVeilRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const leftVisualRef = useRef<HTMLDivElement>(null);
  const rightVisualRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const videoWrapper = videoWrapperRef.current;
    const darkVeil = darkVeilRef.current;
    const text = textRef.current;
    const leftVisual = leftVisualRef.current;
    const rightVisual = rightVisualRef.current;
    const tags = tagsRef.current;
    if (!container || !videoWrapper) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 1024;

    const ctx = gsap.context(() => {
      // 1. Depth Zoom & Dark-to-Visible Parallax Transition
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "center center",
          scrub: 1.2
        }
      });

      tl.fromTo(
        videoWrapper,
        { scale: 1.18, y: 70 },
        { scale: 1.0, y: 0, ease: "power2.out" }
      );

      if (darkVeil) {
        tl.fromTo(
          darkVeil,
          { opacity: 0.9 },
          { opacity: 0.15, ease: "power1.out" },
          0
        );
      }

      // 2. Introduce campaign visuals from edges and then settle/fade naturally
      if (!isMobile) {
        const edgeTl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 60%",
            end: "bottom 30%",
            scrub: 1
          }
        });

        if (leftVisual && rightVisual) {
          // Slide in from edges
          edgeTl.fromTo(
            leftVisual,
            { opacity: 0, x: -100, scale: 0.9 },
            { opacity: 0.9, x: 0, scale: 1, duration: 0.6 }
          );
          edgeTl.fromTo(
            rightVisual,
            { opacity: 0, x: 100, scale: 0.9 },
            { opacity: 0.9, x: 0, scale: 1, duration: 0.6 },
            "<"
          );

          // Gently fade away as user continues into center so video is completely unobstructed
          edgeTl.to(
            [leftVisual, rightVisual],
            { opacity: 0, y: -30, duration: 0.4 },
            "+=0.2"
          );
        }
      }

      // Headline and bottom tags entrance
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

      if (tags) {
        gsap.fromTo(
          tags.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
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
      id="performance-marketing"
      className="relative w-screen h-screen min-h-[100svh] flex flex-col justify-between p-6 sm:p-12 lg:p-16 overflow-hidden bg-[#070B12]"
    >
      {/* Zooming Parallax Video Wrapper */}
      <div
        ref={videoWrapperRef}
        className="absolute inset-0 w-full h-full overflow-hidden will-change-transform"
      >
        <CinematicVideo
          src={VIDEOS.socialMedia.src}
          fallbackSrc={VIDEOS.socialMedia.fallbackSrc}
          poster={VIDEOS.socialMedia.poster}
          alt="Social Media and Performance Marketing Architecture"
          isFullScreen={true}
          objectFit="cover"
          objectPosition="center"
          showOverlay={true}
          overlayOpacity="bg-gradient-to-t from-[#070B12]/85 via-transparent to-[#070B12]/60"
        />

        {/* Dark Veil overlay that lifts during depth zoom */}
        <div
          ref={darkVeilRef}
          className="absolute inset-0 bg-[#070B12] pointer-events-none z-10"
        />
      </div>

      {/* Top Section Label */}
      <div className="relative z-20 flex items-center justify-between w-full pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] bg-[#070B12]/70 border border-[#087BFF]/30 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-[#087BFF]" />
          <span>PERFORMANCE MARKETING</span>
        </div>
      </div>

      {/* Transient Edge Campaign Visual: Left Meta Reel Preview */}
      <div
        ref={leftVisualRef}
        className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-20 w-56 rounded-xl overflow-hidden border border-white/10 bg-[#0B1220]/80 backdrop-blur-md p-2 glow-blue-sm pointer-events-none"
      >
        <div className="relative aspect-[9/16] h-64 w-full rounded-lg overflow-hidden">
          <Image
            src="/images/portfolio/watch-campaign.jpg"
            alt="Dynamic Meta Reel Ad Asset"
            fill
            className="object-cover"
            sizes="250px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-transparent to-transparent" />
          <div className="absolute bottom-2 left-2 right-2 text-[9px] font-mono text-white/90">
            DYNAMIC REEL // HOOK TESTING
          </div>
        </div>
      </div>

      {/* Transient Edge Campaign Visual: Right Performance Ad Preview */}
      <div
        ref={rightVisualRef}
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-20 w-64 rounded-xl overflow-hidden border border-white/10 bg-[#0B1220]/80 backdrop-blur-md p-3 glow-blue-sm pointer-events-none"
      >
        <div className="text-[10px] font-mono text-[#009DFF] mb-1">
          GOOGLE INTENT ENGINE
        </div>
        <p className="text-xs font-semibold text-white mb-2">
          High-intent conversion sequence
        </p>
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#087BFF] to-[#009DFF] w-4/5 animate-pulse" />
        </div>
      </div>

      {/* Center Minimal Headline */}
      <div
        ref={textRef}
        className="relative z-20 max-w-4xl mx-auto text-center my-auto pointer-events-none"
      >
        <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black font-heading text-white tracking-tight leading-[1.05]">
          ATTENTION INTO{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text">
            CONVERSION.
          </span>
        </h2>
      </div>

      {/* Bottom Floating Supporting Tags */}
      <div
        ref={tagsRef}
        className="relative z-20 w-full flex flex-wrap items-center justify-between gap-4 pointer-events-none"
      >
        <div className="px-4 py-2 rounded-xl bg-[#070B12]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-white/80 pointer-events-auto">
          <span className="text-[#009DFF]">META &amp; REELS</span> // DYNAMIC CREATIVE TESTING
        </div>

        <div className="px-4 py-2 rounded-xl bg-[#070B12]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-white/80 pointer-events-auto">
          <span className="text-[#009DFF]">GOOGLE SEARCH &amp; PMAX</span> // INTENT ATTRIBUTION
        </div>
      </div>
    </section>
  );
};
