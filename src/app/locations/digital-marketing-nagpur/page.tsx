import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, CheckCircle2, Building2, Target, BarChart2 } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqAccordion, FaqItem } from "@/components/seo/FaqAccordion";
import { EnquiryForm } from "@/components/seo/EnquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Digital Marketing in Nagpur | Meta Ads & Performance Marketing Agency",
  description:
    "Scale your brand in Nagpur with high-ROAS Meta Ads, precision Google Search advertising, and full-funnel digital marketing. Tailored for healthcare, real estate, and B2B.",
  alternates: {
    canonical: "/locations/digital-marketing-nagpur"
  },
  openGraph: {
    title: "Digital Marketing in Nagpur | Meta Ads & Performance Marketing Agency | RIGHTMOVE",
    description:
      "Scale your brand in Nagpur with high-ROAS Meta Ads, precision Google Search advertising, and full-funnel digital marketing. Tailored for healthcare, real estate, and B2B.",
    url: `${SITE_CONFIG.url}/locations/digital-marketing-nagpur`,
    type: "website"
  }
};

export default function DigitalMarketingNagpurPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "RIGHTMOVE - Digital Marketing Agency Nagpur",
    url: `${SITE_CONFIG.url}/locations/digital-marketing-nagpur`,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
    description:
      "Premier digital marketing, Meta Ads, and performance marketing agency serving high-growth brands, healthcare networks, real estate builders, and manufacturers in Nagpur.",
    areaServed: {
      "@type": "City",
      name: "Nagpur",
      containedInPlace: {
        "@type": "State",
        name: "Maharashtra"
      }
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nagpur Digital Growth Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-ROAS Meta Ads & Reels" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-Intent Google Ads for Healthcare & Real Estate" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conversion Web Development" } }
      ]
    }
  };

  const faqs: FaqItem[] = [
    {
      question: "Why is digital marketing in Nagpur becoming more competitive?",
      answer:
        "As Central India's logistics capital and a rapid urban economic hub with major developments like MIHAN, Nagpur has seen an explosion of commercial activity. Real estate developers, premier hospital chains, coaching institutes, and D2C brands are all competing for user attention in the same digital feeds. Winning requires cinematic creative execution, strict attribution, and micro-targeted advertising."
    },
    {
      question: "How do you generate qualified leads for real estate and healthcare in Nagpur?",
      answer:
        "We avoid generic broad lead forms that attract junk inquiries. For real estate, we deploy interactive video walkthrough reels showcasing property amenities combined with custom pre-qualification filters. For healthcare, we engineer high-intent Google Search campaigns targeting specific treatments and doctor specialties."
    },
    {
      question: "Can you target specific neighborhoods in Nagpur like Dharampeth, Wardha Road, or Hingna?",
      answer:
        "Yes. We configure precise geographic boundaries across key residential and commercial zones including Ramdaspeth, Dharampeth, Civil Lines, Manish Nagar, Wardha Road, and Hingna MIDC."
    },
    {
      question: "What typical return on ad spend (ROAS) can Nagpur businesses expect?",
      answer:
        "While ROAS varies by industry and ticket size, well-structured Meta Ads campaigns for local services and e-commerce typically achieve between 3.5x to 7x ROAS, while high-ticket B2B and real estate campaigns focus on keeping cost-per-qualified-lead (CPL) strictly within profitable margins."
    }
  ];

  return (
    <div className="pt-28 pb-16 bg-[#070B12] text-white">
      <JsonLd data={localBusinessSchema} id="local-nagpur-schema" />

      {/* Hero Section */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <Breadcrumbs items={[{ name: "Locations", url: "/#services-overview" }, { name: "Digital Marketing in Nagpur", url: "/locations/digital-marketing-nagpur" }]} />

        <div className="mt-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase text-[#009DFF] bg-[#0B1220] border border-[#087BFF]/30 mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#087BFF]" />
            <span>NAGPUR, MAHARASHTRA // COMMERCIAL CAPITAL OF CENTRAL INDIA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05] mb-6">
            Digital Marketing &amp; Meta Ads Agency in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text">
              Nagpur.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A7B0C0] leading-relaxed font-sans max-w-2xl mb-8">
            Command market authority in Nagpur&apos;s rapidly accelerating economy. RIGHTMOVE delivers
            revenue-first performance marketing, cinematic Meta Ads, and precision Google PPC
            engineered for ambitious brands and high-ticket service providers.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#enquiry-section"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase btn-primary glow-blue-md"
            >
              <span>Request Nagpur Market Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                "Hello RIGHTMOVE team, I would like to consult about digital marketing and Meta Ads for my business in Nagpur."
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

      {/* Nagpur Industry Opportunities */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-24 sm:mb-32">
        <div className="border-t border-white/[0.08] pt-16">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] block mb-2">
              SECTOR ANALYSIS
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white mb-4">
              Strategic Digital Marketing for Nagpur&apos;s Core Sectors
            </h2>
            <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed font-sans">
              Nagpur&apos;s economic landscape is diverse, competitive, and expanding. We engineer custom digital acquisition architectures for the city&apos;s flagship industries:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Real Estate &amp; Infrastructure</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Premium video walkthroughs and lead-filtering funnels for luxury townships, commercial projects, and plotted layouts along Wardha Road, Besa, and MIHAN.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Healthcare &amp; Medical Tourism</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                As Central India&apos;s hospital capital, Nagpur healthcare providers attract patients from across MP, CG, and Vidarbha. We deploy high-intent search ads for specialized medical procedures.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <BarChart2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">B2B, Logistics &amp; Manufacturing</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Warehousing, transport hubs, and industrial manufacturing plants in Butibori and Hingna benefit from precision Google Search and account-based performance targeting.
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
              Explore Our Core Disciplines for Nagpur Brands
            </h2>
            <div className="flex flex-wrap gap-3 text-xs font-mono mt-3">
              <Link href="/services/meta-ads" className="text-[#009DFF] hover:underline">Meta Ads →</Link>
              <span className="text-white/20">|</span>
              <Link href="/services/google-ads" className="text-[#009DFF] hover:underline">Google Ads →</Link>
              <span className="text-white/20">|</span>
              <Link href="/services/performance-marketing" className="text-[#009DFF] hover:underline">Performance Marketing →</Link>
              <span className="text-white/20">|</span>
              <Link href="/services/website-development" className="text-[#009DFF] hover:underline">Next.js Web Platforms →</Link>
            </div>
          </div>
          <Link
            href="/locations/digital-marketing-gondia"
            className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#087BFF] text-xs font-mono text-white/80 shrink-0"
          >
            Connected Hub: Gondia →
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        title="Nagpur Digital Marketing FAQs"
        subtitle="METROPOLITAN MARKET STRATEGY"
        items={faqs}
        schemaId="faq-nagpur-schema"
      />

      {/* Conversion Form */}
      <EnquiryForm
        initialService="Meta Ads"
        locationName="Nagpur"
        headline="SCALE YOUR CUSTOMER ACQUISITION IN NAGPUR"
        subheadline="REQUEST YOUR STRATEGY & AD ACCOUNT AUDIT"
        sourceContext="Location Page: Nagpur"
      />
    </div>
  );
}
