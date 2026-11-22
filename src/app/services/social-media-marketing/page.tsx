import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Share2, Video, HeartHandshake, Eye, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqAccordion, FaqItem } from "@/components/seo/FaqAccordion";
import { EnquiryForm } from "@/components/seo/EnquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Social Media Marketing Agency & Brand Narrative",
  description:
    "Dominate modern feeds with viral content systems, high-retention vertical reels, and brand narrative architecture that builds enduring consumer loyalty.",
  alternates: {
    canonical: "/services/social-media-marketing"
  },
  openGraph: {
    title: "Social Media Marketing Agency & Brand Narrative | RIGHTMOVE",
    description:
      "Dominate modern feeds with viral content systems, high-retention vertical reels, and brand narrative architecture that builds enduring consumer loyalty.",
    url: `${SITE_CONFIG.url}/services/social-media-marketing`,
    type: "website"
  }
};

export default function SocialMediaMarketingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Social Media Marketing Services",
    serviceType: "Social Media Marketing & Brand Narrative",
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
      "Strategic social media marketing, viral vertical reels production, audience community management, and organic-to-paid growth amplification.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Social Media Capabilities",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-Retention Vertical Reels Production" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Narrative & Visual Grid Strategy" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Community Engagement & Audience Building" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Organic to Paid Conversion Loops" } }
      ]
    }
  };

  const faqs: FaqItem[] = [
    {
      question: "Why has organic social reach declined and how do you overcome it?",
      answer:
        "Modern social algorithms on Instagram, LinkedIn, and YouTube prioritize watch time and retention over follower counts. Generic static graphics no longer get distributed. RIGHTMOVE engineers high-hook vertical video reels and carousel narratives that maintain 70%+ retention, signaling algorithmic favor and triggering organic reach."
    },
    {
      question: "How do you connect social media presence to actual revenue?",
      answer:
        "We build organic-to-paid bridge funnels. High-performing organic reels are boosted and repurposed into targeted Meta Ads to re-engage warm audiences, driving viewers to dedicated landing pages or direct WhatsApp enquiry channels."
    },
    {
      question: "Do you handle shooting and production on location?",
      answer:
        "Yes. Our visual production crew handles scripting, cinematic video shoots, lighting, sound, and post-production editing for commercial shoots and batch reel production across central India."
    },
    {
      question: "What platforms should my business focus on?",
      answer:
        "For consumer brands, lifestyle, real estate, and healthcare: Instagram, YouTube Shorts, and Facebook. For B2B, industrial, logistics, and professional services: LinkedIn, YouTube, and targeted Instagram reels. We tailor your distribution mix to your ideal customer profile."
    }
  ];

  return (
    <div className="pt-28 pb-16 bg-[#070B12] text-white">
      <JsonLd data={serviceSchema} id="service-smm-schema" />

      {/* Hero Section */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <Breadcrumbs items={[{ name: "Services", url: "/#services-overview" }, { name: "Social Media Marketing", url: "/services/social-media-marketing" }]} />

        <div className="mt-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase text-[#009DFF] bg-[#0B1220] border border-[#087BFF]/30 mb-6">
            <span>BRAND NARRATIVE &amp; REELS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05] mb-6">
            Social Media Marketing That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text">
              Captures Attention &amp; Builds Loyalty.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A7B0C0] leading-relaxed font-sans max-w-2xl mb-8">
            Move beyond generic posts. We engineer impossible-to-ignore social narratives,
            scroll-stopping 9:16 vertical video reels, and loyal customer communities that translate
            attention into sustainable brand equity.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#enquiry-section"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase btn-primary glow-blue-md"
            >
              <span>Elevate Your Social Presence</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/services/meta-ads"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase btn-secondary"
            >
              <span>Explore Paid Amplification</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars of Social Media Marketing */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-24 sm:mb-32">
        <div className="border-t border-white/[0.08] pt-16">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] block mb-2">
              VIRAL CONTENT ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
              The 3 Pillars of Modern Social Dominance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">High-Retention Video Reels</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Vertical video productions structured with immediate hook pacing, professional color grading, dynamic sound design, and clear narrative arcs.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Brand Visual Identity</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Cohesive visual language across all platforms: typography, color theory, carousels, and design systems that establish premium market positioning.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Audience Conversion Loops</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Direct-response community engagement transforming passive viewers into qualified email subscribers, WhatsApp inquiries, and repeat buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complementary Services */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1220] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-2">
              Supercharge Social Media with Paid Meta Advertising
            </h2>
            <p className="text-xs sm:text-sm text-[#A7B0C0] max-w-xl">
              Turn your highest-performing organic reels into scaled acquisition engines with RIGHTMOVE Meta Ads.
            </p>
          </div>
          <Link
            href="/services/meta-ads"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold uppercase btn-primary shrink-0"
          >
            <span>Explore Meta Ads</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        title="Social Media Marketing FAQs"
        subtitle="CONTENT &amp; STRATEGY"
        items={faqs}
        schemaId="faq-smm-schema"
      />

      {/* Conversion Form */}
      <EnquiryForm
        initialService="Social Media Marketing"
        headline="READY TO COMMAND ATTENTION ON SOCIAL?"
        subheadline="REQUEST A SOCIAL MEDIA NARRATIVE REVIEW"
        sourceContext="Service Page: Social Media Marketing"
      />
    </div>
  );
}
