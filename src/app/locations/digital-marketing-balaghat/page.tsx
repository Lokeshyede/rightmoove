import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, CheckCircle2, TrendingUp, Store, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqAccordion, FaqItem } from "@/components/seo/FaqAccordion";
import { EnquiryForm } from "@/components/seo/EnquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Digital Marketing in Balaghat | Meta Ads & Local Business Growth",
  description:
    "Accelerate your business in Balaghat with high-impact Meta Ads, local Google search marketing, and direct WhatsApp customer conversion funnels.",
  alternates: {
    canonical: "/locations/digital-marketing-balaghat"
  },
  openGraph: {
    title: "Digital Marketing in Balaghat | Meta Ads & Local Business Growth | RIGHTMOVE",
    description:
      "Accelerate your business in Balaghat with high-impact Meta Ads, local Google search marketing, and direct WhatsApp customer conversion funnels.",
    url: `${SITE_CONFIG.url}/locations/digital-marketing-balaghat`,
    type: "website"
  }
};

export default function DigitalMarketingBalaghatPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "RIGHTMOVE - Digital Marketing in Balaghat",
    url: `${SITE_CONFIG.url}/locations/digital-marketing-balaghat`,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
    description:
      "Specialized digital marketing, Meta Ads, and mobile acquisition solutions for merchants, SMEs, mining logistics, and local enterprises in Balaghat, Madhya Pradesh.",
    areaServed: {
      "@type": "City",
      name: "Balaghat",
      containedInPlace: {
        "@type": "State",
        name: "Madhya Pradesh"
      }
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Balaghat Digital Growth Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local Meta Ads & Reels" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "WhatsApp Direct Customer Funnels" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Local Search Setup" } }
      ]
    }
  };

  const faqs: FaqItem[] = [
    {
      question: "How can a business in Balaghat benefit from digital advertising?",
      answer:
        "Most businesses in Balaghat still depend solely on physical shopfront footfall and word-of-mouth. By launching professionally produced video reels and localized Meta Ads, you gain a massive first-mover advantage, reaching thousands of families, farmers, and traders across Balaghat, Waraseoni, Baihar, and Katangi."
    },
    {
      question: "What types of businesses in Balaghat achieve the best results?",
      answer:
        "Local retail stores (clothing, jewelry, electronics, furniture), healthcare clinics, diagnostic centers, coaching institutes, building material suppliers, and agro/mineral service providers achieve outstanding customer response via localized WhatsApp click-to-chat ads."
    },
    {
      question: "Do people in Balaghat interact with Instagram and Facebook ads?",
      answer:
        "Yes, daily active smartphone usage in Balaghat has surged. Engaging vertical reels created in Hindi that clearly showcase products, pricing, and a one-click WhatsApp button convert extremely well."
    },
    {
      question: "How do we coordinate with RIGHTMOVE if we are located in Balaghat?",
      answer:
        "We serve clients across central India through seamless digital onboarding, dedicated WhatsApp strategy channels, video conferences, and on-site video production visits when scheduled."
    }
  ];

  return (
    <div className="pt-28 pb-16 bg-[#070B12] text-white">
      <JsonLd data={localBusinessSchema} id="local-balaghat-schema" />

      {/* Hero Section */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <Breadcrumbs items={[{ name: "Locations", url: "/#services-overview" }, { name: "Digital Marketing in Balaghat", url: "/locations/digital-marketing-balaghat" }]} />

        <div className="mt-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase text-[#009DFF] bg-[#0B1220] border border-[#087BFF]/30 mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#087BFF]" />
            <span>BALAGHAT, MADHYA PRADESH // REGIONAL EXPANSION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05] mb-6">
            Digital Marketing &amp; Meta Ads Agency in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text">
              Balaghat.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A7B0C0] leading-relaxed font-sans max-w-2xl mb-8">
            Gain a massive competitive edge in Balaghat. RIGHTMOVE helps local retail merchants,
            healthcare providers, and regional enterprises scale their customer base through
            high-retention video reels, Meta Ads, and direct WhatsApp acquisition.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#enquiry-section"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase btn-primary glow-blue-md"
            >
              <span>Consult with Balaghat Strategist</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                "Hello RIGHTMOVE team, I run a business in Balaghat and would like to learn more about digital marketing."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase btn-secondary"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Local Opportunities */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-24 sm:mb-32">
        <div className="border-t border-white/[0.08] pt-16">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] block mb-2">
              LOCAL MARKET OPPORTUNITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white mb-4">
              Unlocking Digital Potential in Balaghat
            </h2>
            <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed font-sans">
              Balaghat&apos;s rich natural resource corridor, agricultural base, and vibrant retail markets are transitioning rapidly to smartphone-driven commerce. We help you capitalize on this inflection point:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">First-Mover Market Advantage</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Most competitors in Balaghat haven&apos;t started professional digital advertising yet. Establishing your digital presence now allows you to dominate local mindshare at minimal cost.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">WhatsApp Click-to-Chat Funnels</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Connect directly with prospective customers across Waraseoni, Baihar, and Katangi who can message your sales team with a single tap on Instagram or Facebook.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Cross-Border Regional Reach</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Balaghat&apos;s proximity to Gondia and Seoni enables businesses to expand their reach across state borders effortlessly with targeted digital campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1220] border border-white/10">
          <p className="text-xs font-mono uppercase text-[#009DFF] mb-2">Connected Regional Nodes</p>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mb-4">
            Explore Growth Strategies for Neighboring Commercial Centers
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <Link href="/locations/digital-marketing-gondia" className="p-3 rounded-lg bg-white/[0.02] border border-white/10 hover:border-[#087BFF] transition-all">
              Gondia Growth →
            </Link>
            <Link href="/locations/digital-marketing-nagpur" className="p-3 rounded-lg bg-white/[0.02] border border-white/10 hover:border-[#087BFF] transition-all">
              Nagpur Hub →
            </Link>
            <Link href="/services/meta-ads" className="p-3 rounded-lg bg-white/[0.02] border border-white/10 hover:border-[#087BFF] transition-all">
              Meta Ads Suite →
            </Link>
            <Link href="/services/google-ads" className="p-3 rounded-lg bg-white/[0.02] border border-white/10 hover:border-[#087BFF] transition-all">
              Google Ads Suite →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        title="Balaghat Digital Marketing FAQs"
        subtitle="LOCAL SME STRATEGY"
        items={faqs}
        schemaId="faq-balaghat-schema"
      />

      {/* Conversion Form */}
      <EnquiryForm
        initialService="Digital Marketing"
        locationName="Balaghat"
        headline="START SCALING YOUR BUSINESS IN BALAGHAT"
        subheadline="REQUEST YOUR STRATEGY CONSULTATION WITH RIGHTMOVE"
        sourceContext="Location Page: Balaghat"
      />
    </div>
  );
}
