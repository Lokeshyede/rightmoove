import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Target, Play, BarChart2, ShieldCheck, Zap } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqAccordion, FaqItem } from "@/components/seo/FaqAccordion";
import { EnquiryForm } from "@/components/seo/EnquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Meta Ads Agency | Facebook & Instagram Ads Experts",
  description:
    "High-ROAS Meta Ads agency engineering scalable Facebook & Instagram ad campaigns with dynamic creative testing, high-retention video reels, and conversion funnels.",
  alternates: {
    canonical: "/services/meta-ads"
  },
  openGraph: {
    title: "Meta Ads Agency | Facebook & Instagram Ads Experts | RIGHTMOVE",
    description:
      "High-ROAS Meta Ads agency engineering scalable Facebook & Instagram ad campaigns with dynamic creative testing, high-retention video reels, and conversion funnels.",
    url: `${SITE_CONFIG.url}/services/meta-ads`,
    type: "website"
  }
};

export default function MetaAdsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Meta Ads Agency Services",
    serviceType: "Paid Social & Meta Advertising",
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url
    },
    areaServed: SITE_CONFIG.targetLocations.map((loc) => ({
      "@type": "City",
      name: loc.city
    })),
    description:
      "Full-service Meta Ads management covering Facebook Ads, Instagram Ads, Dynamic Creative Testing (DCT), video reel production, and Meta Conversions API integration.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Meta Ads Management Packages",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dynamic Creative Testing (DCT)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Conversions API (CAPI) Integration" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vertical Reel & Video Ad Production" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-ROAS Scaling Architecture" } }
      ]
    }
  };

  const faqs: FaqItem[] = [
    {
      question: "Why are my existing Meta Ads underperforming or experiencing ad fatigue?",
      answer:
        "Ad fatigue occurs when ad accounts rely on repetitive visual hooks, uncalibrated broad audiences, or static banners that fail to engage modern mobile consumers within the first 3 seconds. RIGHTMOVE implements weekly Dynamic Creative Testing (DCT) frameworks that systematically rotate visual hooks, copy angles, and call-to-actions to eliminate ad fatigue."
    },
    {
      question: "How do you handle iOS privacy updates and signal loss?",
      answer:
        "We implement full server-side tracking via the Meta Conversions API (CAPI) paired with First-Party data telemetry and UTM attribution modeling. This bypasses client-side browser ad-blockers and iOS privacy restrictions, providing Meta's machine learning algorithm with 100% accurate conversion data."
    },
    {
      question: "What minimum ad budget is recommended for Meta Ads?",
      answer:
        "For meaningful algorithmic learning and sufficient conversion events (minimum 50 conversions per ad set per week), we generally recommend starting with an ad spend budget of ₹30,000 to ₹75,000 per month for local/regional campaigns, and ₹1,50,000+ per month for national scaling."
    },
    {
      question: "Do you produce the ad videos and reels internally?",
      answer:
        "Yes. RIGHTMOVE operates an in-house visual production team specializing in cinematic 4K commercial videos and high-retention 9:16 vertical reels engineered specifically for Instagram and Facebook feeds."
    },
    {
      question: "Can Meta Ads work for B2B or local service businesses in cities like Nagpur or Indore?",
      answer:
        "Absolutely. While many consider Meta primarily B2C, founders, professionals, doctors, real estate investors, and procurement decision-makers spend hours daily on Instagram and Facebook. With targeted lead generation forms, WhatsApp click-to-chat ads, and localized angles, Meta Ads consistently generate high-intent B2B and local inquiries."
    }
  ];

  return (
    <div className="pt-28 pb-16 bg-[#070B12] text-white">
      <JsonLd data={serviceSchema} id="service-meta-ads-schema" />

      {/* Hero Section */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <Breadcrumbs items={[{ name: "Services", url: "/#services-overview" }, { name: "Meta Ads", url: "/services/meta-ads" }]} />

        <div className="mt-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase text-[#009DFF] bg-[#0B1220] border border-[#087BFF]/30 mb-6">
            <span>ALGORITHMIC META SCALING</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05] mb-6">
            Meta Ads Agency Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text">
              High-ROAS Profitability.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A7B0C0] leading-relaxed font-sans max-w-2xl mb-8">
            Turn passive social scrolling into profitable customer acquisition. We combine
            cinema-grade vertical video hooks, systematic dynamic creative testing, and server-side
            conversions telemetry to scale your Facebook and Instagram advertising.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#enquiry-section"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase btn-primary glow-blue-md"
            >
              <span>Get Meta Ads Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/#our-work"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase btn-secondary"
            >
              <span>Review Ad Productions</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Meta Ads Capabilities */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-24 sm:mb-32">
        <div className="border-t border-white/[0.08] pt-16">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] block mb-2">
              ENGINEERED PROTOCOLS
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
              The RIGHTMOVE Meta Ads System
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Play className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">High-Retention Video Reels</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Scroll-stopping 9:16 vertical video assets crafted with psychology-backed visual hooks, clear value props, and frictionless calls to action.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Dynamic Creative Testing (DCT)</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Scientific variable isolation testing: hooks, body copy, visual creatives, and headlines systematically tested to reveal runaway winners.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Server-Side CAPI &amp; Telemetry</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Full-funnel Meta Conversions API setup ensuring 100% data fidelity and bypassing iOS privacy barriers to fuel Meta's machine learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links & Synergy */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1220] border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#009DFF] block mb-2">
                INTEGRATED MULTI-CHANNEL SCALING
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
                Pair Meta Ads with Google Ads &amp; High-Converting Landing Pages
              </h2>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed mb-6 font-sans">
                Meta Ads generate massive consumer awareness and interest. When paired with Google Ads to capture search intent and high-speed Next.js landing pages to convert traffic, your return on investment multiples exponentially.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono">
                <Link href="/services/google-ads" className="text-[#009DFF] hover:underline flex items-center gap-1">
                  <span>Google Ads Management</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/services/performance-marketing" className="text-[#009DFF] hover:underline flex items-center gap-1">
                  <span>Performance Marketing</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/services/website-development" className="text-[#009DFF] hover:underline flex items-center gap-1">
                  <span>Conversion Web Development</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#070B12] border border-white/10">
              <p className="text-xs font-mono uppercase text-[#009DFF] mb-3">Serving Regional Hubs</p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {SITE_CONFIG.targetLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={loc.path}
                    className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#087BFF] transition-all text-white/80 hover:text-white"
                  >
                    Meta Ads in {loc.city} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        title="Meta Ads Strategy FAQs"
        subtitle="COMMON CONCERNS & BEST PRACTICES"
        items={faqs}
        schemaId="faq-meta-ads-schema"
      />

      {/* Conversion Form */}
      <EnquiryForm
        initialService="Meta Ads"
        headline="STOP BURNING AD SPEND ON META"
        subheadline="REQUEST A PROFESSIONAL FACEBOOK & INSTAGRAM ADS AUDIT"
        sourceContext="Service Page: Meta Ads"
      />
    </div>
  );
}
