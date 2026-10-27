"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#our-work" },
    { label: "Services", href: "#services-overview" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 sm:px-10 lg:px-16 ${
          isScrolled
            ? "bg-[#070B12]/80 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="w-full flex items-center justify-between">
          {/* Brand Logo - Original uploaded logo */}
          <Link
            href="#hero"
            className="flex items-center group relative transition-transform duration-300 hover:scale-[1.02]"
            aria-label="RIGHTMOVE Home"
          >
            <div className="relative h-9 w-32 sm:h-10 sm:w-36 flex items-center">
              <Image
                src={SITE_CONFIG.logo}
                alt={SITE_CONFIG.logoAlt}
                fill
                priority
                className="object-contain object-left drop-shadow-[0_0_15px_rgba(8,123,255,0.4)]"
                sizes="150px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-7 text-xs uppercase tracking-widest font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors relative py-1 group"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#087BFF] to-[#009DFF] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Compact CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase font-semibold btn-primary"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#070B12]/80 border border-white/10 text-white hover:text-[#009DFF] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#070B12]/95 backdrop-blur-2xl transition-all duration-400 md:hidden flex flex-col justify-between p-8 pt-24 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-8">
          <p className="text-[11px] font-mono tracking-widest text-[#009DFF] uppercase">
            RIGHTMOVE AGENCY
          </p>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold font-heading text-white hover:text-[#087BFF] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10">
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3.5 rounded-xl text-xs font-mono font-semibold tracking-wider uppercase btn-primary flex items-center justify-center gap-2"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
};
