"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PORTFOLIO_VIDEOS, PortfolioVideoProject } from "@/config/portfolioVideos";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const OurWorkSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. Header reveal
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      if (prefersReducedMotion) return;

      // 2. Individual Project Showcase Reveal Animations
      projectRefs.current.forEach((el, index) => {
        if (!el) return;

        const videoInner = el.querySelector<HTMLDivElement>(".video-inner-container");
        const maskElement = el.querySelector<HTMLDivElement>(".showcase-mask");
        const metaOverlay = el.querySelector<HTMLDivElement>(".showcase-meta");
        const leftGlow = el.querySelector<HTMLDivElement>(".glow-seam-left");
        const rightGlow = el.querySelector<HTMLDivElement>(".glow-seam-right");

        // Video 1: Cinematic Horizontal Curtain Reveal
        if (index % 2 === 0) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "center 55%",
              scrub: 1.2
            }
          });

          if (maskElement) {
            tl.fromTo(
              maskElement,
              { clipPath: "inset(0% 16% 0% 16%)" },
              { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.out" }
            );
          }

          if (videoInner) {
            tl.fromTo(
              videoInner,
              { scale: 1.12 },
              { scale: 1.0, ease: "power2.out" },
              0
            );
          }

          if (leftGlow && rightGlow) {
            tl.fromTo(
              [leftGlow, rightGlow],
              { opacity: 1 },
              { opacity: 0, ease: "power2.in" },
              "-=0.4"
            );
          }

          if (metaOverlay) {
            gsap.fromTo(
              metaOverlay,
              { opacity: 0, y: 25 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 60%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          }
        } 
        // Video 2: Depth Zoom & Vertical Shutter Parallax Reveal
        else {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "center 55%",
              scrub: 1.2
            }
          });

          if (maskElement) {
            tl.fromTo(
              maskElement,
              {
                clipPath: "inset(10% 0% 10% 0%)",
                transformPerspective: 1200,
                rotateX: 4
              },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                rotateX: 0,
                ease: "power2.out"
              }
            );
          }

          if (videoInner) {
            tl.fromTo(
              videoInner,
              { scale: 1.14, y: 40 },
              { scale: 1.0, y: 0, ease: "power2.out" },
              0
            );
          }

          if (metaOverlay) {
            gsap.fromTo(
              metaOverlay,
              { opacity: 0, y: 25 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 60%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          }
        }
      });
    }, section);

    // 3. Lazy Video Playback Management via IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      ctx.revert();
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="our-work"
      className="relative w-full bg-[#070B12] text-white pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 lg:pb-36 overflow-hidden border-t border-white/[0.06]"
    >
      {/* Ambient Electric-Blue Center Lighting */}
      <div className="ambient-glow w-[800px] h-[800px] top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none" />

      {/* Top Header */}
      <div
        ref={headerRef}
        className="relative z-20 max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 mb-14 sm:mb-20 lg:mb-28 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="max-w-3xl">
          {/* Secondary Subtitle Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-[0.25em] uppercase text-[#009DFF] bg-[#0B1220]/90 border border-[#087BFF]/35 backdrop-blur-md mb-4 sm:mb-5 shadow-[0_0_15px_rgba(8,123,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#087BFF]" />
            <span>FEATURED PRODUCTIONS</span>
          </div>

          {/* Primary Bold Prominent Heading: OUR WORK */}
          <h2 className="text-[44px] sm:text-[56px] md:text-[68px] lg:text-[76px] xl:text-[80px] font-[800] font-heading text-[#FFFFFF] tracking-[-0.03em] leading-[0.95] sm:leading-[0.98] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            OUR WORK<span className="text-[#087BFF]">.</span>
          </h2>
        </div>

        {/* Supporting Minimal Context */}
        <p className="text-xs sm:text-sm font-mono text-[#A7B0C0] max-w-sm leading-relaxed pb-1">
          Cinematic commercials, digital brand motion, and high-retention campaigns engineered for market authority.
        </p>
      </div>

      {/* Data-Driven Video Showcases Container */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-24 sm:gap-36 lg:gap-48">
        {PORTFOLIO_VIDEOS.map((project: PortfolioVideoProject, index: number) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.id}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              className="relative w-full group"
            >
              {/* Outer Showcase Frame with Subtle Glow */}
              <div className="showcase-mask relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0B1220] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] will-change-transform">
                {/* Responsive Aspect Ratio Container */}
                <div
                  className={`relative w-full overflow-hidden ${
                    project.aspectRatio === "21/9"
                      ? "aspect-[16/10] sm:aspect-[21/9] min-h-[420px] sm:min-h-[520px] lg:min-h-[640px]"
                      : "aspect-[16/10] sm:aspect-[16/9] min-h-[420px] sm:min-h-[520px] lg:min-h-[640px]"
                  }`}
                >
                  {/* Inner Video Container (Scaled and Scrubbed) */}
                  <div className="video-inner-container absolute inset-0 w-full h-full will-change-transform">
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      className="w-full h-full object-cover object-center"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={project.poster}
                      aria-label={project.title || "RIGHTMOVE Portfolio Video"}
                    >
                      <source src={project.src} type="video/mp4" />
                      {project.fallbackSrc && (
                        <source src={project.fallbackSrc} type="video/mp4" />
                      )}
                    </video>

                    {/* Gradient Overlay for Cinematic Depth & Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/90 via-[#070B12]/20 to-[#070B12]/40 pointer-events-none" />
                  </div>

                  {/* Electric-Blue Edge Seams (Curtain Reveal Accents) */}
                  {isEven && (
                    <>
                      <div className="glow-seam-left absolute top-0 bottom-0 left-[16%] w-[2px] bg-[#009DFF] shadow-[0_0_20px_#087BFF,0_0_40px_#009DFF] pointer-events-none z-10 opacity-0" />
                      <div className="glow-seam-right absolute top-0 bottom-0 right-[16%] w-[2px] bg-[#009DFF] shadow-[0_0_20px_#087BFF,0_0_40px_#009DFF] pointer-events-none z-10 opacity-0" />
                    </>
                  )}

                  {/* Showcase Meta Overlay */}
                  <div className="showcase-meta absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-12 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pointer-events-none">
                    <div className="max-w-xl">
                      <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-[#009DFF] uppercase mb-2">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <span>//</span>
                        <span>{project.category || "COMMERCIAL PRODUCTION"}</span>
                      </div>

                      {project.title && (
                        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight">
                          {project.title}
                        </h3>
                      )}

                      {project.description && (
                        <p className="mt-2 text-xs sm:text-sm font-mono text-white/70 line-clamp-2 max-w-lg">
                          {project.description}
                        </p>
                      )}
                    </div>

                    <a
                      href="#contact"
                      className="pointer-events-auto self-start sm:self-end inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-mono tracking-wider uppercase text-white bg-[#070B12]/80 border border-white/20 hover:border-[#087BFF] hover:bg-[#087BFF]/20 backdrop-blur-md transition-all duration-300"
                    >
                      <span>Inquire Campaign</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#009DFF]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Smooth Dark Transition into DISCIPLINES / SERVICES */}
      <div className="w-full h-32 sm:h-44 bg-gradient-to-b from-transparent to-[#070B12] pointer-events-none mt-20" />
    </section>
  );
};
