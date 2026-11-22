import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, CheckCircle2, ShoppingBag, Rocket, TrendingUp, BarChart } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqAccordion, FaqItem } from "@/components/seo/FaqAccordion";
import { EnquiryForm } from "@/components/seo/EnquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Digital Marketing in Indore | D2C, Startup & Performance Ads Agency",
  description:
    "Scale your brand in Indore with high-ROAS Meta Ads, Google Performance Max, and conversion engineering. Tailored for D2C brands, pharma, and commercial enterprises.",
  alternates: {
    canonical: "/locations/digital-marketing-indore"
  },
  openGraph: {
    title: "Digital Marketing in Indore | D2C, Startup & Performance Ads Agency | RIGHTMOVE",
    description:
      "Scale your brand in Indore with high-ROAS Meta Ads, Google Performance Max, and conversion engineering. Tailored for D2C brands, pharma, and commercial enterprises.",
    url: `${SITE_CONFIG.url}/locations/digital-marketing-indore`,
    type: "website"
  }
};

export default function DigitalMarketingIndorePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "RIGHTMOVE - Digital Marketing Agency Indore",
    url: `${SITE_CONFIG.url}/locations/digital-marketing-indore`,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
    description:
      "High-velocity performance marketing, Meta Ads, and D2C scaling agency serving startups, pharmaceutical manufacturers, and commercial enterprises in Indore, MP.",
    areaServed: {
      "@type": "City",
      name: "Indore",
      containedInPlace: {
        "@type": "State",
        name: "Madhya Pradesh"
      }
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Indore Digital Growth Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-ROAS Meta Ads for D2C Brands" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Performance Max & Search" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conversion Rate Optimization (CRO)" } }
      ]
    }
  };

  const faqs: FaqItem[] = [
    {
      question: "Why is Indore considered the startup and D2C capital of central India?",
      answer:
        "Indore possesses an energetic entrepreneurial culture, rapid tech adoption, and massive commercial infrastructure spanning retail, FMCG, and pharmaceuticals (Pithampur corridor). Brands originating from Indore require metropolitan-grade creative production and sophisticated media buying to compete not just locally, but nationally across India."
    },
    {
      question: "How do you help D2C e-commerce brands in Indore scale profitably?",
      answer:
        "We implement Dynamic Creative Testing (DCT) on Meta Ads to rapidly identify runaway creative hooks, paired with Performance Max on Google Ads for multi-touch demand capture. Crucially, we audit post-click checkout friction and implement server-side CAPI tracking to ensure maximum conversion efficiency."
    },
    {
      question: "Can you target industrial and B2B buyers in Pithampur and Sanwer Road?",
      answer:
        "Yes. For manufacturers, packaging companies, and pharmaceutical suppliers in Indore's industrial belts, we deploy precision Google Search campaigns and account-based LinkedIn/Meta funnels targeting procurement managers and business owners."
    },
    {
      question: "What makes RIGHTMOVE's creative production suitable for ambitious Indore brands?",
      answer:
        "We do not use cookie-cutter Canva templates. We produce cinema-grade 4K commercial films, 9:16 vertical reels with high-retention hook pacing, and bespoke Next.js web applications that position your brand at the absolute top of your market."
    }
  ];

  return (
    <div className="pt-28 pb-16 bg-[#070B12] text-white">
      <JsonLd data={localBusinessSchema} id="local-indore-schema" />

      {/* Hero Section */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <Breadcrumbs items={[{ name: "Locations", url: "/#services-overview" }, { name: "Digital Marketing in Indore", url: "/locations/digital-marketing-indore" }]} />

        <div className="mt-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase text-[#009DFF] bg-[#0B1220] border border-[#087BFF]/30 mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#087BFF]" />
            <span>INDORE, MADHYA PRADESH // COMMERCIAL &amp; D2C POWERHOUSE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05] mb-6">
            Digital Marketing &amp; Meta Ads Agency in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text">
              Indore.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A7B0C0] leading-relaxed font-sans max-w-2xl mb-8">
            Built for Indore&apos;s relentless entrepreneurial spirit. RIGHTMOVE delivers
            revenue-first performance marketing, algorithmic Meta Ads scaling, and conversion
            platforms engineered for D2C brands, ambitious startups, and commercial enterprises.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#enquiry-section"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase btn-primary glow-blue-md"
            >
              <span>Request Indore Growth Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                "Hello RIGHTMOVE team, I run a brand in Indore and want to consult on Meta Ads and performance marketing."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase btn-secondary"
            >
              <span>WhatsApp Strategy Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Indore Sector Analysis */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-24 sm:mb-32">
        <div className="border-t border-white/[0.08] pt-16">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] block mb-2">
              GROWTH ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white mb-4">
              Performance Marketing for Indore&apos;s Fastest-Growing Verticals
            </h2>
            <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed font-sans">
              As central India&apos;s primary commercial engine, Indore companies compete on a national stage. We engineer high-velocity acquisition funnels tailored for:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">D2C E-Commerce Brands</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Apparel, gourmet food, cosmetics, and lifestyle products originating in Indore scaled nationally using high-converting Meta reels and Google PMax funnels.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Tech Startups &amp; SaaS</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Customer acquisition cost (CAC) reduction and pipeline acceleration for high-growth tech ventures in Vijay Nagar and Super Corridor.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Pharma &amp; Manufacturing B2B</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Industrial procurement funnels targeting contract manufacturing inquiries, API exports, and commercial trade for Pithampur enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1220] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-2">
              Explore Our Core Capabilities for Indore Enterprises
            </h2>
            <div className="flex flex-wrap gap-3 text-xs font-mono mt-3">
              <Link href="/services/performance-marketing" className="text-[#009DFF] hover:underline">Performance Marketing →</Link>
              <span className="text-white/20">|</span>
              <Link href="/services/meta-ads" className="text-[#009DFF] hover:underline">Meta Ads →</Link>
              <span className="text-white/20">|</span>
              <Link href="/services/website-development" className="text-[#009DFF] hover:underline">Next.js Web Applications →</Link>
              <span className="text-white/20">|</span>
              <Link href="/locations/digital-marketing-bhopal" className="text-[#009DFF] hover:underline">Bhopal Hub →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        title="Indore Digital Marketing FAQs"
        subtitle="SCALING &amp; E-COMMERCE"
        items={faqs}
        schemaId="faq-indore-schema"
      />

      {/* Conversion Form */}
      <EnquiryForm
        initialService="Performance Marketing"
        locationName="Indore"
        headline="READY TO SCALE YOUR BRAND IN INDORE?"
        subheadline="REQUEST YOUR CUSTOM GROWTH & CAC AUDIT"
        sourceContext="Location Page: Indore"
      />
    </div>
  );
}
