import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Code2, Zap, Smartphone, ShieldCheck, Gauge, Layers } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqAccordion, FaqItem } from "@/components/seo/FaqAccordion";
import { EnquiryForm } from "@/components/seo/EnquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Website Development Agency | Next.js & High-Converting UI/UX",
  description:
    "High-speed Next.js websites, headless e-commerce, and conversion-optimized digital platforms engineered for blistering performance and maximum sales.",
  alternates: {
    canonical: "/services/website-development"
  },
  openGraph: {
    title: "Website Development Agency | Next.js & High-Converting UI/UX | RIGHTMOVE",
    description:
      "High-speed Next.js websites, headless e-commerce, and conversion-optimized digital platforms engineered for blistering performance and maximum sales.",
    url: `${SITE_CONFIG.url}/services/website-development`,
    type: "website"
  }
};

export default function WebsiteDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Development Services",
    serviceType: "Web Development & Conversion Platform Engineering",
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
      "Modern Next.js web application development, conversion-optimized landing pages, e-commerce architectures, and technical Core Web Vitals optimization.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Engineering Capabilities",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-Performance Next.js & React Web Applications" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conversion Rate Optimized (CRO) Landing Pages" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Headless E-Commerce Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical SEO & Core Web Vitals Engineering" } }
      ]
    }
  };

  const faqs: FaqItem[] = [
    {
      question: "Why does website speed directly impact paid advertising ROI?",
      answer:
        "Every 1-second delay in mobile page load drops conversions by up to 20% and degrades your Google Ads Quality Score and Meta Ads Relevance Diagnostics. RIGHTMOVE builds with Next.js 16 and modern headless frameworks to achieve sub-second load times, cutting bounce rates and dramatically lowering your cost-per-lead."
    },
    {
      question: "Why build on Next.js instead of WordPress or Wix?",
      answer:
        "WordPress and bloated website builders rely on dozens of third-party plugins that create heavy code, severe security vulnerabilities, and sluggish mobile speeds. Next.js delivers pre-rendered static content, instant navigation, bank-grade security, and superior technical SEO out of the box."
    },
    {
      question: "Are your websites optimized for mobile devices and fast 4G/5G connections?",
      answer:
        "Yes. Every platform is designed mobile-first with adaptive image compression, modern AVIF/WebP formats, responsive layouts, and zero cumulative layout shift (CLS)."
    },
    {
      question: "Can you integrate our CRM, WhatsApp, and advertising pixels?",
      answer:
        "Yes. We configure server-side Meta Conversions API (CAPI), Google Tag Manager, custom webhook triggers, and direct WhatsApp click-to-chat integrations for immediate lead routing."
    },
    {
      question: "How long does a typical website development project take?",
      answer:
        "A high-converting landing page campaign can be designed and deployed within 7 to 10 days. Comprehensive corporate or e-commerce web applications typically take 3 to 6 weeks depending on custom feature requirements."
    }
  ];

  return (
    <div className="pt-28 pb-16 bg-[#070B12] text-white">
      <JsonLd data={serviceSchema} id="service-website-development-schema" />

      {/* Hero Section */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <Breadcrumbs items={[{ name: "Services", url: "/#services-overview" }, { name: "Website Development", url: "/services/website-development" }]} />

        <div className="mt-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase text-[#009DFF] bg-[#0B1220] border border-[#087BFF]/30 mb-6">
            <span>BLEEDING-EDGE WEB ENGINEERING</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05] mb-6">
            Website Development Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text">
              Blistering Speed &amp; Conversion.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A7B0C0] leading-relaxed font-sans max-w-2xl mb-8">
            Your website is your brand&apos;s digital flagship. We engineer lightning-fast Next.js web
            applications, frictionless conversion funnels, and cinematic digital platforms that turn
            visitors into loyal customers.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#enquiry-section"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase btn-primary glow-blue-md"
            >
              <span>Build Your Platform</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/#our-work"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase btn-secondary"
            >
              <span>Explore Interactive Work</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Standards */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-24 sm:mb-32">
        <div className="border-t border-white/[0.08] pt-16">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] block mb-2">
              TECHNICAL ADVANTAGES
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
              Why Next.js Outperforms Legacy Platforms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Sub-Second Page Load</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Server-side rendering, partial pre-rendering, and intelligent asset optimization delivering instantaneous page loads across all mobile networks.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Semantic Technical SEO</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Structured Schema JSON-LD, automated XML sitemaps, clean canonical hierarchies, and OpenGraph tags built directly into source code.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Mobile Conversion UX</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Intuitive navigation, thumb-zone CTA placement, sticky inquiry buttons, and seamless WhatsApp click-to-chat lead handoffs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links to Cities & Synergy */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1220] border border-white/10">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#009DFF] block mb-2">
            CROSS-DISCIPLINE ACCELERATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
            A Great Website Deserves Relentless Traffic
          </h2>
          <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed mb-6 font-sans max-w-3xl">
            A high-speed website is step one. To dominate your market, pair your new platform with RIGHTMOVE&apos;s Meta Ads and Google Ads systems.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-mono">
            <Link href="/services/meta-ads" className="text-[#009DFF] hover:underline flex items-center gap-1">
              <span>Drive Traffic via Meta Ads</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/services/google-ads" className="text-[#009DFF] hover:underline flex items-center gap-1">
              <span>Capture Intent via Google Ads</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/services/digital-marketing" className="text-[#009DFF] hover:underline flex items-center gap-1">
              <span>Full Digital Strategy</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        title="Web Engineering FAQs"
        subtitle="DEVELOPMENT &amp; TIMELINES"
        items={faqs}
        schemaId="faq-website-development-schema"
      />

      {/* Conversion Form */}
      <EnquiryForm
        initialService="Website Development"
        headline="UPGRADE TO A HIGH-CONVERSION DIGITAL FLAGSHIP"
        subheadline="REQUEST A CUSTOM WEB ARCHITECTURE PROPOSAL"
        sourceContext="Service Page: Website Development"
      />
    </div>
  );
}
