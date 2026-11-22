import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, BarChart3, LineChart, Cpu, DollarSign } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqAccordion, FaqItem } from "@/components/seo/FaqAccordion";
import { EnquiryForm } from "@/components/seo/EnquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Performance Marketing Agency | Multi-Channel Media Buying",
  description:
    "Eliminate ad waste with revenue-first performance marketing. Advanced attribution, conversion rate optimization (CRO), and CAC-reduction architectures.",
  alternates: {
    canonical: "/services/performance-marketing"
  },
  openGraph: {
    title: "Performance Marketing Agency | Multi-Channel Media Buying | RIGHTMOVE",
    description:
      "Eliminate ad waste with revenue-first performance marketing. Advanced attribution, conversion rate optimization (CRO), and CAC-reduction architectures.",
    url: `${SITE_CONFIG.url}/services/performance-marketing`,
    type: "website"
  }
};

export default function PerformanceMarketingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Performance Marketing Agency Services",
    serviceType: "Performance Marketing & Media Buying",
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
      "Revenue-first performance marketing agency providing multi-channel media buying, CRO, customer acquisition cost reduction, server-side attribution, and scaling architectures.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Performance Marketing Solutions",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-Channel Media Buying (Meta + Google + YouTube)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conversion Rate Optimization (CRO)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full-Funnel Analytics & CAPI Telemetry" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "LTV & CAC Mathematical Modeling" } }
      ]
    }
  };

  const faqs: FaqItem[] = [
    {
      question: "What exactly is performance marketing and how does it differ from traditional advertising?",
      answer:
        "Traditional advertising bills for creative outputs and unmeasured reach. Performance marketing, by contrast, operates on mathematical unit economics: every rupee invested in ad spend is measured against concrete outputs: Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), Qualified Leads, and net revenue."
    },
    {
      question: "How do you optimize Conversion Rate (CRO) alongside media buying?",
      answer:
        "Media buying only gets prospective buyers to your digital doorstep. Conversion Rate Optimization ensures they cross the finish line. We analyze heatmaps, session recordings, page load speeds, headline clarity, and checkout friction to systematically increase the percentage of visitors who become paying customers."
    },
    {
      question: "What is your attribution modeling methodology?",
      answer:
        "We implement blended ROAS and multi-touch attribution modeling combining server-side CAPI telemetry, GA4 event tracking, and custom UTM parameters. This prevents channel double-counting and provides an accurate, single source of truth for business decisions."
    },
    {
      question: "Can performance marketing scale my business in tier-2 cities like Raipur, Bhopal, or Indore?",
      answer:
        "Yes. Regional markets in central India often feature lower initial CPMs and less aggressive ad competition than saturated metros like Mumbai or Bengaluru. When executed with high-level performance marketing discipline, businesses in Indore, Raipur, and Nagpur often achieve exceptionally high returns on capital."
    }
  ];

  return (
    <div className="pt-28 pb-16 bg-[#070B12] text-white">
      <JsonLd data={serviceSchema} id="service-performance-marketing-schema" />

      {/* Hero Section */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <Breadcrumbs items={[{ name: "Services", url: "/#services-overview" }, { name: "Performance Marketing", url: "/services/performance-marketing" }]} />

        <div className="mt-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase text-[#009DFF] bg-[#0B1220] border border-[#087BFF]/30 mb-6">
            <span>REVENUE-FIRST MEDIA BUYING</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05] mb-6">
            Performance Marketing Agency Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text">
              Mathematical Profitability.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A7B0C0] leading-relaxed font-sans max-w-2xl mb-8">
            Eliminate vanity metrics and speculative ad spending. RIGHTMOVE engineers disciplined,
            multi-channel media buying architectures combining Meta Ads, Google Ads, server-side
            telemetry, and conversion rate optimization to scale your bottom line.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#enquiry-section"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase btn-primary glow-blue-md"
            >
              <span>Request Unit Economics Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/services/website-development"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase btn-secondary"
            >
              <span>Explore Conversion Tech</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Unit Economics Features */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-24 sm:mb-32">
        <div className="border-t border-white/[0.08] pt-16">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] block mb-2">
              DISCIPLINED METRICS
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
              The Four Pillars of Capital Efficiency
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: DollarSign,
                title: "CAC Minimization",
                desc: "Continual creative testing and algorithmic bid tuning engineered to depress Customer Acquisition Cost across all channels."
              },
              {
                icon: TrendingUp,
                title: "ROAS Scaling",
                desc: "Scaling winning ad angles horizontally and vertically to maximize aggregate return on ad spend without performance decay."
              },
              {
                icon: Cpu,
                title: "Server-Side Telemetry",
                desc: "Meta Conversions API and Google Enhanced Conversions providing 100% signal resilience against browser ad blockers."
              },
              {
                icon: BarChart3,
                title: "CRO & Funnel Speed",
                desc: "Continuous post-click landing page friction reduction to extract maximum revenue from every single media click."
              }
            ].map((pillar, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-4">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">{pillar.title}</h3>
                <p className="text-xs text-[#A7B0C0] leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links to Services & Cities */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1220] border border-white/10">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#009DFF] block mb-2">
            INTEGRATED EXECUTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
            Connect Performance Marketing Across Key Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono mt-6">
            <Link
              href="/services/meta-ads"
              className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#087BFF] transition-all"
            >
              <span className="text-white font-bold block mb-1">Meta Ads Protocol</span>
              <span className="text-white/60">Dynamic creative testing &amp; vertical reels →</span>
            </Link>
            <Link
              href="/services/google-ads"
              className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#087BFF] transition-all"
            >
              <span className="text-white font-bold block mb-1">Google Ads Capture</span>
              <span className="text-white/60">Search &amp; Performance Max intent →</span>
            </Link>
            <Link
              href="/services/website-development"
              className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#087BFF] transition-all"
            >
              <span className="text-white font-bold block mb-1">Conversion Web Platforms</span>
              <span className="text-white/60">Sub-second Next.js architecture →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        title="Performance Marketing FAQs"
        subtitle="CAPITAL EFFICIENCY & REPORTING"
        items={faqs}
        schemaId="faq-performance-marketing-schema"
      />

      {/* Conversion Form */}
      <EnquiryForm
        initialService="Performance Marketing"
        headline="STOP SPECULATING. START SCALING."
        subheadline="REQUEST YOUR FULL-FUNNEL PERFORMANCE AUDIT"
        sourceContext="Service Page: Performance Marketing"
      />
    </div>
  );
}
