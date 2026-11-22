"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
  schemaId?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "TRANSPARENT ANSWERS & STRATEGIC CLARITY",
  items,
  schemaId = "faq-schema"
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <section className="relative py-16 sm:py-24 border-t border-white/[0.08]">
      <JsonLd data={faqSchema} id={schemaId} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-14 text-center sm:text-left">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] block mb-2">
            {subtitle}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            {title}
          </h2>
        </div>

        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5 sm:py-6 transition-colors group">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white group-hover:text-[#009DFF] transition-colors">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/70 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#009DFF] border-[#087BFF]/40 bg-[#087BFF]/10" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-6 sm:pr-12 text-sm sm:text-base leading-relaxed text-[#A7B0C0] font-sans">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
