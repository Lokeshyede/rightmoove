"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const ServicesOverview: React.FC = () => {
  const services = [
    {
      num: "01",
      title: "DIGITAL MARKETING",
      href: "/services/digital-marketing",
      tags: "Full-Funnel Strategy · Omnichannel Growth · Brand Authority · Data Attribution"
    },
    {
      num: "02",
      title: "META ADS & REELS",
      href: "/services/meta-ads",
      tags: "Facebook & Instagram Ads · Dynamic Creative Testing · High ROAS · Algorithmic Scale"
    },
    {
      num: "03",
      title: "GOOGLE ADS & SEARCH",
      href: "/services/google-ads",
      tags: "High-Intent Search · Performance Max (PMax) · YouTube Advertising · Demand Capture"
    },
    {
      num: "04",
      title: "SOCIAL MEDIA MARKETING",
      href: "/services/social-media-marketing",
      tags: "Content Systems · High-Retention Reels · Brand Narrative · Community Loyalty"
    },
    {
      num: "05",
      title: "PERFORMANCE MARKETING",
      href: "/services/performance-marketing",
      tags: "Multi-Channel Media Buying · CRO · Funnel Telemetry · CAC & LTV Optimization"
    },
    {
      num: "06",
      title: "WEBSITE DEVELOPMENT",
      href: "/services/website-development",
      tags: "Next.js Engineering · Conversion Architecture · Speed Optimization · UI/UX Design"
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
              SPECIALIZED DISCIPLINES
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

        {/* Editorial Service List linking to deep service pages */}
        <div className="divide-y divide-white/[0.08]">
          {services.map((item) => (
            <Link
              key={item.num}
              href={item.href}
              className="py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 group transition-all duration-300 hover:px-3 hover:bg-white/[0.02] rounded-xl"
            >
              <div className="flex items-baseline gap-6 sm:gap-10">
                <span className="text-xs font-mono text-[#009DFF]">
                  {item.num}
                </span>
                <h3 className="text-xl sm:text-3xl font-bold font-heading text-white group-hover:text-[#009DFF] transition-colors flex items-center gap-3">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#009DFF]" />
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-mono text-[#A7B0C0] md:text-right group-hover:text-white/90 transition-colors">
                {item.tags}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
