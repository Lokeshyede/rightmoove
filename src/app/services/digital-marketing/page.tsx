import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, TrendingUp, Target, BarChart3, Layers } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqAccordion, FaqItem } from "@/components/seo/FaqAccordion";
import { EnquiryForm } from "@/components/seo/EnquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Digital Marketing Services & Growth Strategy",
  description:
    "Scale your business with full-funnel digital marketing services from RIGHTMOVE. Performance-driven campaigns, Meta Ads, Google Ads, and revenue architecture.",
  alternates: {
    canonical: "/services/digital-marketing"
  },
  openGraph: {
    title: "Digital Marketing Services & Growth Strategy | RIGHTMOVE",
    description:
      "Scale your business with full-funnel digital marketing services from RIGHTMOVE. Performance-driven campaigns, Meta Ads, Google Ads, and revenue architecture.",
    url: `${SITE_CONFIG.url}/services/digital-marketing`,
    type: "website"
  }
};

export default function DigitalMarketingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Marketing Services",
    serviceType: "Digital Marketing & Growth Strategy",
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
      "Comprehensive digital marketing services including multi-channel customer acquisition, Meta Ads, Google Ads, brand positioning, and analytics telemetry.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Solutions",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full-Funnel Campaign Architecture" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paid Media Acquisition (Meta & Google)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conversion Rate Optimization (CRO)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Customer Lifecycle Marketing" } }
      ]
    }
  };

  const faqs: FaqItem[] = [
    {
      question: "What makes RIGHTMOVE's digital marketing approach different?",
      answer:
        "Unlike agencies that focus merely on vanity metrics like impressions and clicks, RIGHTMOVE engineers full-funnel revenue architectures. We combine cinema-grade visual storytelling with rigorous media buying, granular telemetry, and algorithmic audience modeling to drive actual customer acquisition and bottom-line revenue."
    },
    {
      question: "Which digital channels deliver the fastest return on ad spend?",
      answer:
        "For immediate customer acquisition, Meta Ads (Facebook & Instagram) and Google Search Ads deliver the fastest velocity. Meta Ads excel at generating net-new demand through visually compelling hooks, while Google Ads captures immediate intent from buyers actively searching for your solutions."
    },
    {
      question: "How long does it take to see measurable results?",
      answer:
        "Paid advertising campaigns through Meta and Google typically produce actionable conversion data within the first 7 to 14 days during the learning phase. Once optimal creative hooks and audience segments are validated, scaling and sustained profitability accelerate over 30 to 90 days."
    },
    {
      question: "Do you serve businesses in tier-2 cities like Nagpur, Gondia, and Indore?",
      answer:
        "Yes. RIGHTMOVE works with ambitious businesses across central India, including Gondia, Nagpur, Balaghat, Bhopal, Indore, and Raipur, as well as brands competing nationally across India. We tailor campaigns specifically to local buying behaviors, regional languages, and market dynamics."
    },
    {
      question: "How do you track and report campaign performance?",
      answer:
        "We implement server-side tracking, Meta Conversions API (CAPI), and Google Analytics 4 (GA4) with custom conversion attribution. Clients receive transparent, real-time reporting dashboards detailing Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and net qualified leads."
    }
  ];

  return (
    <div className="pt-28 pb-16 bg-[#070B12] text-white">
      <JsonLd data={serviceSchema} id="service-digital-marketing-schema" />

      {/* Hero Section */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <Breadcrumbs items={[{ name: "Services", url: "/#services-overview" }, { name: "Digital Marketing", url: "/services/digital-marketing" }]} />

        <div className="mt-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase text-[#009DFF] bg-[#0B1220] border border-[#087BFF]/30 mb-6">
            <span>FULL-FUNNEL GROWTH ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05] mb-6">
            Digital Marketing Services Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text">
              Predictable Revenue Scale.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A7B0C0] leading-relaxed font-sans max-w-2xl mb-8">
            Stop wasting capital on fragmented marketing tactics. RIGHTMOVE synthesizes
            high-retention creative campaigns, algorithmically optimized paid media, and conversion
            telemetry into a single customer acquisition engine.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#enquiry-section"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase btn-primary glow-blue-md"
            >
              <span>Request Growth Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/#our-work"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase btn-secondary"
            >
              <span>View Case Productions</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-24 sm:mb-32">
        <div className="border-t border-white/[0.08] pt-16">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] block mb-2">
              SYSTEMATIC CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
              What We Deliver
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Paid Acquisition (Meta &amp; Google)</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Aggressive demand generation across Facebook, Instagram, Google Search, and YouTube engineered to capture high-intent buyers and scale ROAS.
              </p>
              <div className="mt-4 flex gap-2">
                <Link href="/services/meta-ads" className="text-xs text-[#009DFF] hover:underline">Meta Ads →</Link>
                <span className="text-white/20">|</span>
                <Link href="/services/google-ads" className="text-xs text-[#009DFF] hover:underline">Google Ads →</Link>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Performance Marketing</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Granular media buying models focused on reducing Customer Acquisition Costs (CAC), increasing customer lifetime value (LTV), and maximizing cash flow.
              </p>
              <div className="mt-4">
                <Link href="/services/performance-marketing" className="text-xs text-[#009DFF] hover:underline">Explore Performance →</Link>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Conversion Digital Platforms</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Ultra-fast Next.js web applications and frictionless landing pages engineered to convert paid traffic into qualified leads and sales.
              </p>
              <div className="mt-4">
                <Link href="/services/website-development" className="text-xs text-[#009DFF] hover:underline">Explore Web Dev →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Methodology */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-24 sm:mb-32">
        <div className="border-t border-white/[0.08] pt-16">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] block mb-2">
              EXECUTION PROCESS
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
              The 4-Stage Revenue Acceleration Protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Deep Funnel Audit",
                desc: "We analyze your existing ad accounts, conversion tracking, unit economics, and competitors to identify immediate revenue leakage."
              },
              {
                step: "02",
                title: "Strategy & Creative Setup",
                desc: "Developing high-retention video hooks, irresistible offers, landing page wireframes, and multi-layered audience targeting architectures."
              },
              {
                step: "03",
                title: "Algorithmic Launch",
                desc: "Deploying dynamic creative testing (DCT) and intent-targeted campaigns with server-side CAPI telemetry to ensure bulletproof attribution."
              },
              {
                step: "04",
                title: "Aggressive Scale & CRO",
                desc: "Doubling down on winning creative angles, optimizing post-click landing page friction, and scaling budget sustainably."
              }
            ].map((phase) => (
              <div key={phase.step} className="p-6 rounded-2xl bg-[#0B1220]/40 border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#009DFF] block mb-4">{phase.step} // PHASE</span>
                  <h3 className="text-lg font-bold font-heading text-white mb-2">{phase.title}</h3>
                  <p className="text-xs text-[#A7B0C0] leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Focus Internal Links */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0B1220] via-[#070B12] to-[#0B1220] border border-[#087BFF]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#009DFF] block mb-2">
            REGIONAL MARKETING AUTHORITY
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
            Serving Ambitious Enterprises Across Central India
          </h2>
          <p className="text-xs sm:text-sm text-[#A7B0C0] max-w-3xl leading-relaxed mb-6 font-sans">
            We deliver hyper-targeted regional marketing and national growth campaigns. Explore our city-specific market insights:
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
                <span className="text-[10px] text-white/50 block font-mono">{loc.state}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        title="Digital Marketing Strategy FAQs"
        subtitle="METHODOLOGY &amp; EXPECTATIONS"
        items={faqs}
        schemaId="faq-digital-marketing-schema"
      />

      {/* Conversion Form */}
      <EnquiryForm
        initialService="Digital Marketing"
        headline="READY TO SCALE YOUR ACQUISITION?"
        subheadline="REQUEST YOUR STRATEGY CONSULTATION & AUDIT"
        sourceContext="Service Page: Digital Marketing"
      />
    </div>
  );
}
