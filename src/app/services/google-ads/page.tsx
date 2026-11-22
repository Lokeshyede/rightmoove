import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Search, Target, TrendingUp, BarChart, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqAccordion, FaqItem } from "@/components/seo/FaqAccordion";
import { EnquiryForm } from "@/components/seo/EnquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Google Ads Agency | High-Intent Search & Performance Max",
  description:
    "Maximize buyer conversion with data-driven Google Ads management. Search, Performance Max, YouTube, and Display campaigns focused on measurable ROI.",
  alternates: {
    canonical: "/services/google-ads"
  },
  openGraph: {
    title: "Google Ads Agency | High-Intent Search & Performance Max | RIGHTMOVE",
    description:
      "Maximize buyer conversion with data-driven Google Ads management. Search, Performance Max, YouTube, and Display campaigns focused on measurable ROI.",
    url: `${SITE_CONFIG.url}/services/google-ads`,
    type: "website"
  }
};

export default function GoogleAdsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Ads Management Services",
    serviceType: "Pay-Per-Click & Search Engine Advertising",
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
      "Expert Google Ads management covering High-Intent Search Ads, Performance Max (PMax), YouTube video ads, negative keyword sculpting, and conversion value bidding.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Google Ads Solutions",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-Intent Google Search Campaigns" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance Max (PMax) Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Negative Keyword Architecture" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conversion Value Bidding Optimization" } }
      ]
    }
  };

  const faqs: FaqItem[] = [
    {
      question: "How does Google Ads differ from Meta Ads for my business?",
      answer:
        "Google Ads primarily targets active intent: users actively typing search queries for solutions they need right now (e.g., 'best commercial interior designer in Nagpur' or 'industrial packaging suppliers in Indore'). Meta Ads, conversely, generates latent demand through visual feeds. When paired together, Meta builds brand demand while Google captures immediate conversions."
    },
    {
      question: "How do you prevent wasted ad spend on irrelevant clicks?",
      answer:
        "We implement aggressive negative keyword sculpting, exact match and phrase match structures, strict geo-fencing, and audience exclusions. We continually audit search terms reports weekly to eliminate irrelevant traffic before it burns your budget."
    },
    {
      question: "Are Performance Max (PMax) campaigns suitable for my business?",
      answer:
        "Performance Max is exceptionally powerful when fed clean, high-intent first-party conversion data and premium creative assets. We deploy PMax alongside dedicated Search campaigns to maximize reach across Search, YouTube, Gmail, Maps, and Display while maintaining strict cost-per-acquisition (CPA) targets."
    },
    {
      question: "Can Google Ads drive local inquiries for businesses in tier-2 cities?",
      answer:
        "Yes. Google Local Search Ads and call campaigns are one of the highest-converting channels for local businesses, clinics, manufacturers, real estate developers, and service providers in cities like Gondia, Balaghat, Bhopal, and Raipur."
    },
    {
      question: "Who owns our Google Ads account and data?",
      answer:
        "You retain 100% ownership of your Google Ads account, pixel tracking, and historical data. We operate as an authorized manager, ensuring complete transparency at all times."
    }
  ];

  return (
    <div className="pt-28 pb-16 bg-[#070B12] text-white">
      <JsonLd data={serviceSchema} id="service-google-ads-schema" />

      {/* Hero Section */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <Breadcrumbs items={[{ name: "Services", url: "/#services-overview" }, { name: "Google Ads", url: "/services/google-ads" }]} />

        <div className="mt-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase text-[#009DFF] bg-[#0B1220] border border-[#087BFF]/30 mb-6">
            <span>HIGH-INTENT DEMAND CAPTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05] mb-6">
            Google Ads Agency Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text">
              High-Intent Buyer Conversion.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A7B0C0] leading-relaxed font-sans max-w-2xl mb-8">
            Capture customers at the exact moment they are searching for your services. We architect
            precision Google Search, Performance Max, and YouTube campaigns with aggressive
            negative keyword sculpting and value-based bidding.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#enquiry-section"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase btn-primary glow-blue-md"
            >
              <span>Get Google Ads Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/services/meta-ads"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase btn-secondary"
            >
              <span>Compare Meta Ads Synergy</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Google Ads Features */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-24 sm:mb-32">
        <div className="border-t border-white/[0.08] pt-16">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] block mb-2">
              PRECISION PPC ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
              Engineered Google Ads Protocols
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">High-Intent Search Ads</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Laser-targeted keywords capturing buyers at the decision stage with tightly themed ad groups and ad copy crafted to outrank competitors.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Performance Max &amp; Shopping</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Full-inventory algorithmic deployment leveraging first-party audience signals, video creative assets, and conversion value maximization.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Negative Keyword Shield</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Continuous negative search query auditing to eliminate tire-kickers, irrelevant job seekers, and low-intent searches that inflate your CPA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links to Cities */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1220] border border-white/10">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#009DFF] block mb-2">
            REGIONAL &amp; NATIONAL SEARCH STRATEGY
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
            Targeting Local Searchers Across Maharashtra, MP &amp; CG
          </h2>
          <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed mb-6 font-sans max-w-3xl">
            Whether you want to capture commercial buyers searching in Nagpur or industrial inquiries in Raipur and Indore, we configure geo-targeted Google Ads structures to maximize your local market share.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SITE_CONFIG.targetLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={loc.path}
                className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#087BFF] transition-all text-center group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-[#009DFF] block">
                  {loc.city}
                </span>
                <span className="text-[10px] text-white/50 block font-mono">Google Ads</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        title="Google Ads Strategy FAQs"
        subtitle="SEARCH MARKETING & ROI"
        items={faqs}
        schemaId="faq-google-ads-schema"
      />

      {/* Conversion Form */}
      <EnquiryForm
        initialService="Google Ads"
        headline="STOP LOSING HIGH-INTENT BUYERS TO COMPETITORS"
        subheadline="REQUEST YOUR GOOGLE ADS ACCOUNT AUDIT"
        sourceContext="Service Page: Google Ads"
      />
    </div>
  );
}
