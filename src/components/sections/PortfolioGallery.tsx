"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const PortfolioGallery: React.FC = () => {
  const projects = [
    {
      title: "AETHER LUXURY PARFUMS",
      category: "Global Brand Launch // Product Advertising",
      image: "/images/portfolio/perfume-campaign.jpg"
    },
    {
      title: "AURORA CONCEPT HYPERCAR",
      category: "Commercial Film // Brand Architecture",
      image: "/images/portfolio/automotive-campaign.jpg"
    },
    {
      title: "CHRONOS TOURBILLON",
      category: "Haute Horlogerie // Visual Identity & Motion",
      image: "/images/portfolio/watch-campaign.jpg"
    },
    {
      title: "STUDIO APEX PRODUCTION",
      category: "Commercial Video Direction // 4K Master",
      image: "/images/portfolio/film-production.jpg"
    }
  ];

  return (
    <section
      id="portfolio"
      className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-16 bg-[#070B12] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] bg-[#0B1220] border border-[#087BFF]/30 mb-3">
              <Sparkles className="w-3 h-3 text-[#087BFF]" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              EDITORIAL CAMPAIGNS.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#A7B0C0] max-w-xs">
            Curated advertising, visual storytelling, and high-performance digital executions.
          </p>
        </div>

        {/* 2x2 Grid of Large Editorial Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-[#0B1220] border border-white/10 hover:border-[#087BFF]/50 transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/95 via-[#070B12]/20 to-transparent pointer-events-none" />
              </div>

              {/* Card Meta */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#009DFF] mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-[#009DFF] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#087BFF] group-hover:border-[#087BFF] transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
