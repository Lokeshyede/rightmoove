"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, MessageCircle, Mail, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { trackPixelEvent } from "@/lib/fpixel";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactClick = (channel: string) => {
    trackPixelEvent("Contact", { channel, location: "Footer" });
  };

  return (
    <footer className="relative bg-[#070B12] text-white pt-20 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden border-t border-white/[0.06]">
      {/* Subtle Electric Blue Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#087BFF] to-transparent opacity-60" />

      {/* Atmospheric lighting */}
      <div className="ambient-glow w-[600px] h-[300px] top-0 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link href="/" className="inline-block relative h-12 w-44">
              <Image
                src={SITE_CONFIG.logo}
                alt={SITE_CONFIG.logoAlt}
                fill
                className="object-contain object-left"
                sizes="180px"
              />
            </Link>

            <p className="text-xs font-mono text-[#009DFF] tracking-wider uppercase">
              {SITE_CONFIG.tagline}
            </p>

            <p className="text-xs text-[#A7B0C0] max-w-sm leading-relaxed">
              Performance marketing, Meta Ads, Google Ads, and full-funnel digital
              growth architectures engineered to help ambitious businesses acquire customers
              and command market authority.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleContactClick("whatsapp")}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contacts.email}`}
                onClick={() => handleContactClick("email")}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#087BFF]/10 text-[#009DFF] border border-[#087BFF]/20 text-xs font-semibold hover:bg-[#087BFF] hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Desk</span>
              </a>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <p className="text-xs font-mono uppercase tracking-widest text-[#009DFF]">
              Specialized Services
            </p>
            <ul className="space-y-2 text-xs">
              {SITE_CONFIG.servicePages.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={svc.path}
                    className="text-[#A7B0C0] hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{svc.name}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#087BFF]">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Target Locations */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <p className="text-xs font-mono uppercase tracking-widest text-[#009DFF] flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#087BFF]" />
              <span>Target Markets</span>
            </p>
            <ul className="space-y-2 text-xs">
              {SITE_CONFIG.targetLocations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={loc.path}
                    className="text-[#A7B0C0] hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>Digital Marketing {loc.city}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#087BFF]">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Review Consultation CTA */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <p className="text-xs font-mono uppercase tracking-widest text-[#009DFF]">
              Consultation
            </p>
            <div className="p-4 rounded-xl bg-[#0B1220]/70 border border-white/[0.06]">
              <p className="text-xs font-semibold text-white">Campaign Audits</p>
              <p className="text-[11px] text-[#A7B0C0] mt-1">
                Direct strategic onboarding for growth ventures.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 text-xs text-[#009DFF] hover:text-white mt-3 font-medium"
              >
                <span>Request Review</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7B0C0]">
          <p>© 2026 RIGHTMOVE. All rights reserved. Professional Performance Marketing &amp; Strategy.</p>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#009DFF] hover:text-white transition-colors group cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
