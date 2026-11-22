import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, CheckCircle2, TrendingUp, Target, Smartphone } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqAccordion, FaqItem } from "@/components/seo/FaqAccordion";
import { EnquiryForm } from "@/components/seo/EnquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Digital Marketing in Gondia | Meta Ads & Local Growth Agency",
  description:
    "Grow your business in Gondia with data-driven digital marketing, high-ROAS Meta Ads, and local Google visibility. Tailored for agro-enterprises, retail, and local healthcare.",
  alternates: {
    canonical: "/locations/digital-marketing-gondia"
  },
  openGraph: {
    title: "Digital Marketing in Gondia | Meta Ads & Local Growth Agency | RIGHTMOVE",
    description:
      "Grow your business in Gondia with data-driven digital marketing, high-ROAS Meta Ads, and local Google visibility. Tailored for agro-enterprises, retail, and local healthcare.",
    url: `${SITE_CONFIG.url}/locations/digital-marketing-gondia`,
    type: "website"
  }
};

export default function DigitalMarketingGondiaPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "RIGHTMOVE - Digital Marketing in Gondia",
    url: `${SITE_CONFIG.url}/locations/digital-marketing-gondia`,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
    description:
      "Specialized digital marketing, Meta Ads, and Google Ads solutions for businesses, retailers, healthcare providers, and agro-enterprises in Gondia, Maharashtra.",
    areaServed: {
      "@type": "City",
      name: "Gondia",
      containedInPlace: {
        "@type": "State",
        name: "Maharashtra"
      }
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Gondia Digital Growth Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local Meta Ads & Reels" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-Intent Google Search Ads" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "WhatsApp Direct Lead Generation" } }
      ]
    }
  };

  const faqs: FaqItem[] = [
    {
      question: "Can digital marketing really help traditional businesses in Gondia?",
      answer:
        "Yes. Over 80% of consumers and traders across Gondia and nearby talukas actively use smartphones, Instagram, and YouTube daily. Local retailers, private healthcare clinics, jewelry stores, educational institutes, and agro-processors who switch from static print banners to targeted Meta Ads reach thousands of active buyers for a fraction of the cost."
    },
    {
      question: "How do you target customers specifically in and around Gondia?",
      answer:
        "We utilize hyper-local radius geo-fencing (targeting Gondia city, Tirora, Amgaon, Goregaon, and surrounding trade corridors), customized demographic filters, and regional language creative hooks in Hindi and Marathi to ensure your ad budget is only shown to people who can realistically purchase from you."
    },
    {
      question: "What is the best way to handle leads generated from ads in Gondia?",
      answer:
        "For the Gondia market, direct WhatsApp click-to-chat ads combined with click-to-call mobile buttons yield the highest conversion rates. Customers prefer instant direct communication without having to fill out complex forms."
    },
    {
      question: "What budget is required to start marketing in Gondia?",
      answer:
        "Because local advertising competition in Gondia is significantly less saturated than major metros, local businesses can achieve strong results with starting ad spend budgets between ₹15,000 and ₹35,000 per month."
    }
  ];

  return (
    <div className="pt-28 pb-16 bg-[#070B12] text-white">
      <JsonLd data={localBusinessSchema} id="local-gondia-schema" />

      {/* Hero Section */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <Breadcrumbs items={[{ name: "Locations", url: "/#services-overview" }, { name: "Digital Marketing in Gondia", url: "/locations/digital-marketing-gondia" }]} />

        <div className="mt-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase text-[#009DFF] bg-[#0B1220] border border-[#087BFF]/30 mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#087BFF]" />
            <span>GONDIA, MAHARASHTRA // REGIONAL GROWTH</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05] mb-6">
            Digital Marketing &amp; Meta Ads Agency in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text">
              Gondia.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A7B0C0] leading-relaxed font-sans max-w-2xl mb-8">
            Help your business break through traditional local limitations. RIGHTMOVE delivers
            precision Meta Ads, high-retention video reels, and high-intent Google Search advertising
            tailored for businesses and entrepreneurs across Gondia.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#enquiry-section"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase btn-primary glow-blue-md"
            >
              <span>Consult with Gondia Strategist</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                "Hello RIGHTMOVE team, I run a business in Gondia and would like to discuss digital marketing and Meta Ads."
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

      {/* Local Market Dynamics & Solutions */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-24 sm:mb-32">
        <div className="border-t border-white/[0.08] pt-16">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] block mb-2">
              LOCAL MARKET INSIGHTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white mb-4">
              Marketing Opportunities &amp; Challenges in Gondia
            </h2>
            <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed font-sans">
              As the &apos;Rice City&apos; of Maharashtra and a vital commercial hub bordering Madhya Pradesh and Chhattisgarh, Gondia businesses hold immense untapped potential. Here is how we turn local market dynamics into a competitive advantage:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Transition from Print to Mobile</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Traditional hoardings and newspaper flyers are expensive and impossible to track. Our geo-targeted mobile ads place your brand directly on smartphones across Gondia city, Amgaon, and Tirora.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Agro-Commodity &amp; B2B Expansion</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                For rice millers, agricultural equipment suppliers, and building material merchants in Gondia, we design digital lead generation funnels that attract wholesale buyers from across Maharashtra and MP.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Local Retail &amp; Healthcare Growth</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Hospitals, diagnostic centers, jewelry stores, and coaching academies in Gondia benefit from localized Meta Reels and Google Search campaigns that route patients and shoppers straight to your desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links to Services & Other Cities */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1220] border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#009DFF] block mb-2">
                COMPLETE DIGITAL CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
                Core Services for Gondia Enterprises
              </h2>
              <div className="flex flex-wrap gap-3 text-xs font-mono">
                <Link href="/services/meta-ads" className="px-3 py-2 rounded-lg bg-white/5 hover:bg-[#087BFF]/20 border border-white/10 hover:border-[#087BFF] transition-all">
                  Meta Ads &amp; Reels →
                </Link>
                <Link href="/services/google-ads" className="px-3 py-2 rounded-lg bg-white/5 hover:bg-[#087BFF]/20 border border-white/10 hover:border-[#087BFF] transition-all">
                  Google Search Ads →
                </Link>
                <Link href="/services/website-development" className="px-3 py-2 rounded-lg bg-white/5 hover:bg-[#087BFF]/20 border border-white/10 hover:border-[#087BFF] transition-all">
                  Next.js Websites →
                </Link>
                <Link href="/services/performance-marketing" className="px-3 py-2 rounded-lg bg-white/5 hover:bg-[#087BFF]/20 border border-white/10 hover:border-[#087BFF] transition-all">
                  Performance Marketing →
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#070B12] border border-white/10">
              <p className="text-xs font-mono uppercase text-[#009DFF] mb-3">Nearby Connected Markets</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <Link href="/locations/digital-marketing-nagpur" className="p-2 rounded bg-white/[0.02] hover:text-[#009DFF]">
                  Nagpur Marketing →
                </Link>
                <Link href="/locations/digital-marketing-balaghat" className="p-2 rounded bg-white/[0.02] hover:text-[#009DFF]">
                  Balaghat Marketing →
                </Link>
                <Link href="/locations/digital-marketing-raipur" className="p-2 rounded bg-white/[0.02] hover:text-[#009DFF]">
                  Raipur Marketing →
                </Link>
                <Link href="/locations/digital-marketing-bhopal" className="p-2 rounded bg-white/[0.02] hover:text-[#009DFF]">
                  Bhopal Marketing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <FaqAccordion
        title="Gondia Digital Marketing FAQs"
        subtitle="LOCAL BUSINESS STRATEGY"
        items={faqs}
        schemaId="faq-gondia-schema"
      />

      {/* Conversion Form */}
      <EnquiryForm
        initialService="Digital Marketing"
        locationName="Gondia"
        headline="READY TO EXPAND YOUR BUSINESS IN GONDIA?"
        subheadline="SCHEDULE A STRATEGIC CONSULTATION WITH RIGHTMOVE"
        sourceContext="Location Page: Gondia"
      />
    </div>
  );
}
