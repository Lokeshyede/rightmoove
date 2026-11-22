import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, CheckCircle2, Factory, Gem, Home, TrendingUp } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqAccordion, FaqItem } from "@/components/seo/FaqAccordion";
import { EnquiryForm } from "@/components/seo/EnquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Digital Marketing in Raipur | Industrial & Retail Growth Agency",
  description:
    "Accelerate your business in Raipur with high-impact Meta Ads, B2B Google Search campaigns, and performance marketing. Tailored for steel, gems & luxury retail, and real estate.",
  alternates: {
    canonical: "/locations/digital-marketing-raipur"
  },
  openGraph: {
    title: "Digital Marketing in Raipur | Industrial & Retail Growth Agency | RIGHTMOVE",
    description:
      "Accelerate your business in Raipur with high-impact Meta Ads, B2B Google Search campaigns, and performance marketing. Tailored for steel, gems & luxury retail, and real estate.",
    url: `${SITE_CONFIG.url}/locations/digital-marketing-raipur`,
    type: "website"
  }
};

export default function DigitalMarketingRaipurPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "RIGHTMOVE - Digital Marketing Agency Raipur",
    url: `${SITE_CONFIG.url}/locations/digital-marketing-raipur`,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
    description:
      "Leading digital marketing, Meta Ads, and industrial customer acquisition agency serving steel manufacturers, luxury jewelers, and real estate builders in Raipur, Chhattisgarh.",
    areaServed: {
      "@type": "City",
      name: "Raipur",
      containedInPlace: {
        "@type": "State",
        name: "Chhattisgarh"
      }
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Raipur Digital Growth Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "B2B Industrial Google Search Marketing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-ROAS Meta Ads for Luxury Retail" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Naya Raipur Real Estate Lead Funnels" } }
      ]
    }
  };

  const faqs: FaqItem[] = [
    {
      question: "How can industrial manufacturers in Raipur generate B2B inquiries online?",
      answer:
        "Raipur is Chhattisgarh's heavy industrial capital (sponge iron, rebar steel, cement, heavy fabrication in Urla and Siltara). Industrial buyers across India turn to Google when sourcing commercial materials. We architect high-intent Google Search campaigns and landing pages targeting specific industrial search queries (e.g., 'TMT bar manufacturers in Raipur' or 'structural steel suppliers Chhattisgarh'), capturing active procurement buyers directly."
    },
    {
      question: "What is your strategy for luxury retail and jewelry in Raipur?",
      answer:
        "For prestigious jewelers and luxury retailers in Sadar Bazaar, Malviya Road, and Pandri, brand perception is everything. We produce cinema-grade commercial films and high-retention Instagram reels that highlight craftsmanship and luxury authority, combined with local VIP WhatsApp appointment booking funnels."
    },
    {
      question: "How do you generate verified leads for real estate in Naya Raipur (Atal Nagar)?",
      answer:
        "We build high-ticket real estate acquisition funnels featuring drone site videography, interactive master plan walk-throughs, and income-qualified lead forms that connect prospective luxury homebuyers with your sales team."
    },
    {
      question: "How does RIGHTMOVE serve clients across Chhattisgarh?",
      answer:
        "We serve clients in Raipur, Bhilai, Durg, and Bilaspur through direct digital management, real-time reporting dashboards, and on-site production teams for commercial video shoots."
    }
  ];

  return (
    <div className="pt-28 pb-16 bg-[#070B12] text-white">
      <JsonLd data={localBusinessSchema} id="local-raipur-schema" />

      {/* Hero Section */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <Breadcrumbs items={[{ name: "Locations", url: "/#services-overview" }, { name: "Digital Marketing in Raipur", url: "/locations/digital-marketing-raipur" }]} />

        <div className="mt-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase text-[#009DFF] bg-[#0B1220] border border-[#087BFF]/30 mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#087BFF]" />
            <span>RAIPUR, CHHATTISGARH // INDUSTRIAL &amp; COMMERCIAL CAPITAL</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05] mb-6">
            Digital Marketing &amp; Meta Ads Agency in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text">
              Raipur.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A7B0C0] leading-relaxed font-sans max-w-2xl mb-8">
            Command market dominance in Chhattisgarh&apos;s economic engine. RIGHTMOVE delivers
            precision B2B Google Search acquisition, cinema-grade Meta Ads, and conversion
            platforms built for Raipur&apos;s industrial champions and luxury retail brands.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#enquiry-section"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase btn-primary glow-blue-md"
            >
              <span>Consult with Raipur Strategist</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                "Hello RIGHTMOVE team, I run an enterprise in Raipur and want to consult on digital marketing and Meta Ads."
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

      {/* Raipur Industrial and Retail Insights */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-24 sm:mb-32">
        <div className="border-t border-white/[0.08] pt-16">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] block mb-2">
              MARKET DYNAMICS
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white mb-4">
              Digital Acquisition for Raipur&apos;s Powerhouse Sectors
            </h2>
            <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed font-sans">
              Raipur represents a unique synthesis of heavy industry, mineral wealth, and high-net-worth retail commerce. We engineer tailored acquisition funnels for:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Steel, Power &amp; Heavy Fabrication</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Industrial procurement lead funnels capturing national buyers searching for TMT bars, structural steel, sponge iron, and mineral logistics across Urla and Siltara.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Gem className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Jewelry &amp; Luxury Retail</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Cinema-grade visual storytelling reels showcasing fine gold, diamond jewelry, and bridal couture for Raipur&apos;s premier retail houses with VIP WhatsApp appointment booking.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Naya Raipur Real Estate</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Buyer pre-qualification funnels and cinematic drone walkthroughs for premium gated communities and commercial complexes in Atal Nagar (Naya Raipur).
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
              Explore Our Digital Disciplines for Raipur Brands
            </h2>
            <div className="flex flex-wrap gap-3 text-xs font-mono mt-3">
              <Link href="/services/google-ads" className="text-[#009DFF] hover:underline">B2B Google Ads →</Link>
              <span className="text-white/20">|</span>
              <Link href="/services/meta-ads" className="text-[#009DFF] hover:underline">Meta Ads &amp; Reels →</Link>
              <span className="text-white/20">|</span>
              <Link href="/services/performance-marketing" className="text-[#009DFF] hover:underline">Performance Marketing →</Link>
              <span className="text-white/20">|</span>
              <Link href="/locations/digital-marketing-nagpur" className="text-[#009DFF] hover:underline">Nagpur Hub →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        title="Raipur Digital Marketing FAQs"
        subtitle="INDUSTRIAL &amp; RETAIL STRATEGY"
        items={faqs}
        schemaId="faq-raipur-schema"
      />

      {/* Conversion Form */}
      <EnquiryForm
        initialService="Google Ads"
        locationName="Raipur"
        headline="ACCELERATE YOUR REVENUE IN RAIPUR"
        subheadline="REQUEST YOUR STRATEGY & AD ACCOUNT AUDIT"
        sourceContext="Location Page: Raipur"
      />
    </div>
  );
}
