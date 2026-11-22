"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, MessageCircle, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { trackPixelEvent } from "@/lib/fpixel";

interface EnquiryFormProps {
  initialService?: string;
  locationName?: string;
  sourceContext?: string;
  headline?: string;
  subheadline?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialService = "Digital Marketing",
  locationName,
  sourceContext = "General Enquiry",
  headline = "ACCELERATE YOUR REVENUE GROWTH",
  subheadline = "START YOUR CAMPAIGN AUDIT & STRATEGY CONSULTATION"
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    service: initialService,
    city: locationName || "",
    description: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) errs.phone = "Phone number is required.";
    if (!formData.description.trim()) {
      errs.description = "Please tell us briefly about your goals or challenges.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // Simulate submission network call
      await new Promise((res) => setTimeout(res, 600));

      // Fire Meta Pixel Lead Event
      trackPixelEvent("Lead", {
        content_name: formData.service,
        content_category: locationName ? `Location: ${locationName}` : "Service Enquiry",
        city: formData.city || locationName || "Not Specified",
        business_name: formData.businessName,
        source: sourceContext
      });

      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    trackPixelEvent("Contact", {
      channel: "whatsapp",
      location: locationName || "General",
      service: formData.service
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello RIGHTMOVE team, I am interested in ${formData.service}${
      locationName ? ` for my business in ${locationName}` : ""
    }. Could we schedule a consultation?`
  );

  return (
    <section
      id="enquiry-section"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#070B12] border-t border-white/[0.08] overflow-hidden"
    >
      <div className="ambient-glow w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] block mb-2">
            {subheadline}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            {headline}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#A7B0C0] max-w-xl mx-auto font-sans">
            Speak directly with our senior growth strategists. Receive a customized growth
            roadmap, competitive ad analysis, and clear performance projections.
          </p>
        </div>

        <div className="max-w-2xl mx-auto rounded-2xl p-6 sm:p-10 bg-[#0B1220]/80 border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-14 h-14 rounded-full bg-[#087BFF]/20 text-[#009DFF] flex items-center justify-center mb-4 glow-blue-md">
                <CheckCircle2 className="w-7 h-7 text-[#087BFF]" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">
                Consultation Request Received
              </h3>
              <p className="mt-2 text-sm text-[#A7B0C0] max-w-md">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. Our
                strategy team has received your brief and will review your objectives.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Hello RIGHTMOVE, I submitted a consultation inquiry for ${formData.service} (${formData.fullName}). Connecting directly.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-semibold uppercase btn-primary"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect on WhatsApp Now</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-white/70 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#070B12]/80 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#087BFF] transition-colors"
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-[11px] mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-white/70 mb-1">
                    Brand or Business
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    placeholder="e.g. Acme Corp"
                    className="w-full px-4 py-3 rounded-xl bg-[#070B12]/80 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#087BFF] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-white/70 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#070B12]/80 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#087BFF] transition-colors"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-white/70 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#070B12]/80 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#087BFF] transition-colors"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-white/70 mb-1">
                    Selected Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#070B12]/80 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#087BFF] transition-colors"
                  >
                    {SITE_CONFIG.services.map((svc) => (
                      <option key={svc} value={svc} className="bg-[#0B1220] text-white">
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-white/70 mb-1">
                    Target City / Region
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    placeholder="e.g. Nagpur / Gondia / Indore / All-India"
                    className="w-full px-4 py-3 rounded-xl bg-[#070B12]/80 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#087BFF] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-white/70 mb-1">
                  Project Brief &amp; Target Goals *
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Share your current marketing bottlenecks, targets, or desired outcomes..."
                  className="w-full px-4 py-3 rounded-xl bg-[#070B12]/80 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#087BFF] transition-colors resize-none"
                />
                {errors.description && (
                  <p className="text-red-400 text-[11px] mt-1">{errors.description}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider btn-primary flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting Brief...</span>
                ) : (
                  <>
                    <span>REQUEST CONSULTATION</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="pt-2 text-center">
                <a
                  href={`https://wa.me/?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Prefer instant chat? Talk directly on WhatsApp →</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
