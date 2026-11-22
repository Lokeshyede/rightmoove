import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, CheckCircle2, GraduationCap, Building, Stethoscope } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqAccordion, FaqItem } from "@/components/seo/FaqAccordion";
import { EnquiryForm } from "@/components/seo/EnquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Digital Marketing in Bhopal | Meta Ads & Performance Marketing Agency",
  description:
    "Grow your brand in Bhopal with high-ROAS Meta Ads, precision Google Search campaigns, and performance marketing. Tailored for education, real estate, and healthcare.",
  alternates: {
    canonical: "/locations/digital-marketing-bhopal"
  },
  openGraph: {
    title: "Digital Marketing in Bhopal | Meta Ads & Performance Marketing Agency | RIGHTMOVE",
    description:
      "Grow your brand in Bhopal with high-ROAS Meta Ads, precision Google Search campaigns, and performance marketing. Tailored for education, real estate, and healthcare.",
    url: `${SITE_CONFIG.url}/locations/digital-marketing-bhopal`,
    type: "website"
  }
};

export default function DigitalMarketingBhopalPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "RIGHTMOVE - Digital Marketing Agency Bhopal",
    url: `${SITE_CONFIG.url}/locations/digital-marketing-bhopal`,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
    description:
      "Professional digital marketing, Meta Ads, and student/patient acquisition agency serving educational institutions, real estate builders, and healthcare networks in Bhopal, MP.",
    areaServed: {
      "@type": "City",
      name: "Bhopal",
      containedInPlace: {
        "@type": "State",
        name: "Madhya Pradesh"
      }
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Bhopal Digital Growth Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-ROAS Meta Ads for Student Admissions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real Estate Property Buyer Funnels" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Healthcare Lead Generation" } }
      ]
    }
  };

  const faqs: FaqItem[] = [
    {
      question: "How do you generate student admissions for colleges and institutes in Bhopal?",
      answer:
        "Bhopal is one of central India's premier higher education hubs with fierce competition among private universities and coaching academies. We design multi-stage student acquisition funnels combining campus tour vertical video reels, career outcome carousels, WhatsApp counseling chatbots, and intent-driven Google Search campaigns for specific degrees."
    },
    {
      question: "What is your approach to real estate marketing along Kolar and Hoshangabad Road?",
      answer:
        "Rather than collecting low-quality bulk leads, we build qualification funnels with budget verification, location preferences, and interactive project walkthroughs that filter out casual browsers and deliver verified homebuyers to your sales desk."
    },
    {
      question: "How do you track return on investment for advertising in Bhopal?",
      answer:
        "We implement server-side Meta Conversions API (CAPI) and Google Analytics 4 tracking. We link lead generation directly to your CRM, allowing you to track cost-per-lead (CPL) and cost-per-enrolled-student or cost-per-site-visit."
    },
    {
      question: "Can RIGHTMOVE manage campaigns across both Bhopal and Indore simultaneously?",
      answer:
        "Yes. Many of our clients operate across the Bhopal-Indore commercial belt. We design unified campaigns with segmented geographic attribution so you can compare performance across both cities effortlessly."
    }
  ];

  return (
    <div className="pt-28 pb-16 bg-[#070B12] text-white">
      <JsonLd data={localBusinessSchema} id="local-bhopal-schema" />

      {/* Hero Section */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
        <Breadcrumbs items={[{ name: "Locations", url: "/#services-overview" }, { name: "Digital Marketing in Bhopal", url: "/locations/digital-marketing-bhopal" }]} />

        <div className="mt-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase text-[#009DFF] bg-[#0B1220] border border-[#087BFF]/30 mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#087BFF]" />
            <span>BHOPAL, MADHYA PRADESH // INSTITUTIONAL &amp; COMMERCIAL HUB</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05] mb-6">
            Digital Marketing &amp; Meta Ads Agency in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text">
              Bhopal.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A7B0C0] leading-relaxed font-sans max-w-2xl mb-8">
            Scale your brand in Madhya Pradesh&apos;s administrative and educational capital.
            RIGHTMOVE crafts high-conversion Meta Ads, intent-driven Google Search campaigns, and
            performance architectures built for institutional and enterprise growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#enquiry-section"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase btn-primary glow-blue-md"
            >
              <span>Consult with Bhopal Strategist</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                "Hello RIGHTMOVE team, I would like to consult about digital marketing and Meta Ads for my business in Bhopal."
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

      {/* Bhopal Core Sectors */}
      <section className="relative px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto mb-24 sm:mb-32">
        <div className="border-t border-white/[0.08] pt-16">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] block mb-2">
              SECTOR EXPERTISE
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white mb-4">
              Strategic Solutions for Bhopal&apos;s Leading Industries
            </h2>
            <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed font-sans">
              From the educational institutions in MP Nagar to the growing residential corridors of Kolar and Hoshangabad Road, we design sector-specific conversion engines:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Higher Education &amp; EdTech</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                High-impact admission recruitment campaigns on Instagram and YouTube targeting students and parents across Madhya Pradesh, Chhattisgarh, and UP.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Real Estate &amp; Township Sales</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Qualified buyer lead generation for residential high-rises and luxury villas along Hoshangabad Road, Ayodhya Bypass, and Kolar Road.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center mb-6">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Healthcare &amp; Specialty Clinics</h3>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                Intent-driven Google Search Ads capturing patients actively seeking specialized surgeries, dental treatments, and diagnostic consultations in Bhopal.
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
              Explore Complementary Disciplines for Bhopal Brands
            </h2>
            <div className="flex flex-wrap gap-3 text-xs font-mono mt-3">
              <Link href="/services/meta-ads" className="text-[#009DFF] hover:underline">Meta Ads →</Link>
              <span className="text-white/20">|</span>
              <Link href="/services/google-ads" className="text-[#009DFF] hover:underline">Google Ads →</Link>
              <span className="text-white/20">|</span>
              <Link href="/services/website-development" className="text-[#009DFF] hover:underline">Website Development →</Link>
              <span className="text-white/20">|</span>
              <Link href="/locations/digital-marketing-indore" className="text-[#009DFF] hover:underline">Indore Node →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        title="Bhopal Digital Marketing FAQs"
        subtitle="INSTITUTIONAL STRATEGY"
        items={faqs}
        schemaId="faq-bhopal-schema"
      />

      {/* Conversion Form */}
      <EnquiryForm
        initialService="Meta Ads"
        locationName="Bhopal"
        headline="ACCELERATE YOUR ACQUISITION IN BHOPAL"
        subheadline="REQUEST YOUR CUSTOM GROWTH BLUEPRINT"
        sourceContext="Location Page: Bhopal"
      />
    </div>
  );
}
