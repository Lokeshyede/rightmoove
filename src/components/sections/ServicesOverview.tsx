"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export const ServicesOverview: React.FC = () => {
  const services = [
    {
      num: "01",
      title: "BRAND ADVERTISING",
      tags: "Creative Strategy · Commercial Films · Brand Identity · Campaign Direction"
    },
    {
      num: "02",
      title: "PERFORMANCE MARKETING",
      tags: "Meta Ads & Reels · Google Search & PMax · Customer Acquisition · Telemetry"
    },
    {
      num: "03",
      title: "DIGITAL PLATFORMS",
      tags: "Flagship Web Development · Web Applications · UI/UX Design · E-Commerce"
    },
    {
      num: "04",
      title: "CINEMA & REELS",
      tags: "Commercial Video Production · Product Shoots · High-Retention Reels · Motion"
    }
  ];

  return (
    <section
      id="services-overview"
      className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-16 bg-[#070B12] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] block mb-2">
              DISCIPLINES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              SERVICES.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#009DFF] hover:text-white transition-colors"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Minimal Editorial Service List */}
        <div className="divide-y divide-white/[0.08]">
          {services.map((item) => (
            <div
              key={item.num}
              className="py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-default transition-all duration-300 hover:px-3"
            >
              <div className="flex items-baseline gap-6 sm:gap-10">
                <span className="text-xs font-mono text-[#009DFF]">
                  {item.num}
                </span>
                <h3 className="text-xl sm:text-3xl font-bold font-heading text-white group-hover:text-[#009DFF] transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-mono text-[#A7B0C0] md:text-right">
                {item.tags}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
