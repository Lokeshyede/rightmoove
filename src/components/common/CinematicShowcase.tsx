"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CinematicVideo } from "./CinematicVideo";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface CinematicShowcaseProps {
  id?: string;
  badge?: string;
  title: string;
  highlightWords?: string[];
  description: string;
  videoSrc: string;
  fallbackSrc?: string;
  poster: string;
  aspectRatio?: string;
  children?: React.ReactNode;
  tags?: string[];
  ctaText?: string;
  ctaHref?: string;
  reverse?: boolean;
}

export const CinematicShowcase: React.FC<CinematicShowcaseProps> = ({
  id,
  badge,
  title,
  highlightWords = [],
  description,
  videoSrc,
  fallbackSrc,
  poster,
  aspectRatio = "aspect-video",
  children,
  tags = [],
  ctaText = "Explore Capability",
  ctaHref = "#contact",
  reverse = false
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    const card = cardRef.current;
    const content = contentRef.current;
    if (!el || !card) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Timeline for scroll-driven card entrance and exit
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1.2,
          toggleActions: "play none none reverse"
        }
      });

      // Entrance animation
      tl.fromTo(
        card,
        {
          scale: 0.85,
          opacity: 0.2,
          y: isMobile ? 40 : 80,
          rotateX: isMobile ? 0 : 8,
          transformPerspective: 1000
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          ease: "power2.out"
        }
      );

      // Subtle exit animation as user scrolls deeper
      tl.to(card, {
        scale: 0.94,
        opacity: 0.75,
        y: isMobile ? -30 : -50,
        duration: 0.8,
        ease: "power1.in"
      });

      // Staggered reveal for supporting text
      if (content) {
        gsap.fromTo(
          content,
          {
            opacity: 0,
            y: 40
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 65%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  // Helper to highlight specific words with electric blue
  const renderHighlightedTitle = () => {
    if (!highlightWords.length) {
      return title;
    }
    const regex = new RegExp(`(${highlightWords.join("|")})`, "gi");
    const parts = title.split(regex);

    return parts.map((part, index) => {
      const isMatch = highlightWords.some(
        (word) => word.toLowerCase() === part.toLowerCase()
      );
      if (isMatch) {
        return (
          <span
            key={index}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] to-[#009DFF] drop-shadow-[0_0_20px_rgba(8,123,255,0.4)]"
          >
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative min-h-screen py-24 md:py-36 px-4 sm:px-6 lg:px-12 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="ambient-glow w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Content Column */}
        <div
          ref={contentRef}
          className={`lg:col-span-5 flex flex-col gap-6 ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase bg-[#0B1220] border border-[#087BFF]/30 text-[#009DFF] w-fit glow-blue-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087BFF] animate-pulse" />
              {badge}
            </div>
          )}

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-heading leading-[1.1] text-white">
            {renderHighlightedTitle()}
          </h2>

          <p className="text-base sm:text-lg text-[#A7B0C0] font-normal leading-relaxed max-w-xl">
            {description}
          </p>

          {/* Service tags / capabilities */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium bg-[#111827]/80 text-white/90 border border-white/10 hover:border-[#087BFF]/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Custom children or CTA */}
          <div className="pt-4 flex items-center gap-4">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold btn-primary"
            >
              <span>{ctaText}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Floating Cinematic Media Card Column */}
        <div
          className={`lg:col-span-7 perspective-container ${
            reverse ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div
            ref={cardRef}
            className="glass-card rounded-2xl sm:rounded-3xl p-2 sm:p-3 lg:p-4 glow-blue-md glass-card-hover preserve-3d"
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#070B12]">
              <CinematicVideo
                src={videoSrc}
                fallbackSrc={fallbackSrc}
                poster={poster}
                alt={title}
                aspectRatio={aspectRatio}
                showOverlay={true}
                overlayOpacity="bg-black/20"
                blurGlow={false}
              />

              {/* Extra children overlays if any (e.g. browser frame, cards) */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
