"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    service: "Brand Advertising",
    description: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedPayload, setSubmittedPayload] = useState<typeof formData | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) errs.phone = "Phone is required.";
    if (!formData.description.trim()) {
      errs.description = "Brief description is required.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 600));
      setSubmittedPayload({ ...formData });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedPayload(null);
    setFormData({
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      service: "Brand Advertising",
      description: ""
    });
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-16 bg-[#070B12] border-t border-white/[0.08] overflow-hidden"
    >
      <div className="ambient-glow w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#009DFF] block mb-2">
            INITIATION
          </span>
          <h2 className="text-3xl sm:text-6xl font-black font-heading text-white tracking-tight">
            LET&apos;S MAKE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text">
              THE RIGHT MOVE.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Minimal Form */}
          <div className="lg:col-span-7 rounded-2xl p-6 sm:p-8 bg-[#0B1220]/70 border border-white/10 backdrop-blur-xl">
            {submittedPayload ? (
              <div className="flex flex-col items-center text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#087BFF]/20 text-[#009DFF] flex items-center justify-center mb-4 glow-blue-md">
                  <CheckCircle2 className="w-7 h-7 text-[#087BFF]" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">
                  Inquiry Prepared
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#A7B0C0] max-w-sm">
                  Thank you, <strong className="text-white">{submittedPayload.fullName}</strong>. Your project brief has been recorded.
                </p>

                <div className="mt-5 p-3.5 rounded-xl bg-[#070B12] border border-amber-500/30 text-left w-full text-xs text-[#A7B0C0]">
                  <p className="font-semibold text-amber-400 flex items-center gap-1.5 mb-1">
                    <AlertCircle className="w-3.5 h-3.5" /> Integration Boundary
                  </p>
                  <p className="text-[11px]">
                    Form captured on client. Connect your CRM or API endpoint to receive submissions live.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 justify-center">
                  <a
                    href={`https://wa.me/?text=Hello%20RIGHTMOVE,%20I%20am%20${encodeURIComponent(
                      submittedPayload.fullName
                    )}.%20Project%20inquiry%20for%20${encodeURIComponent(
                      submittedPayload.service
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold uppercase btn-primary"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Send on WhatsApp</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-xl text-xs font-mono font-semibold uppercase btn-secondary"
                  >
                    New Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="Full Name *"
                      className="w-full px-4 py-3 rounded-xl bg-[#070B12]/80 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#087BFF] transition-colors"
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-[11px] mt-1">{errors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({ ...formData, businessName: e.target.value })
                      }
                      placeholder="Brand or Company"
                      className="w-full px-4 py-3 rounded-xl bg-[#070B12]/80 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#087BFF] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Email Address *"
                      className="w-full px-4 py-3 rounded-xl bg-[#070B12]/80 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#087BFF] transition-colors"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="Phone Number *"
                      className="w-full px-4 py-3 rounded-xl bg-[#070B12]/80 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#087BFF] transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
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
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Project Brief or Target Goals *"
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
                    <span>Formatting Brief...</span>
                  ) : (
                    <>
                      <span>SEND INQUIRY</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct Channels */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <a
              href={SITE_CONFIG.contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-colors flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-mono uppercase text-[#A7B0C0] block">
                  Instant Message
                </span>
                <span className="text-sm font-semibold text-white">
                  WhatsApp Direct
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#A7B0C0] group-hover:text-white" />
            </a>

            <a
              href={`mailto:${SITE_CONFIG.contacts.email}`}
              className="p-5 rounded-2xl bg-[#0B1220]/70 border border-white/10 hover:border-[#087BFF]/50 transition-colors flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#087BFF]/10 text-[#009DFF] flex items-center justify-center group-hover:bg-[#087BFF] group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-mono uppercase text-[#A7B0C0] block">
                  Agency Desk
                </span>
                <span className="text-sm font-semibold text-white">
                  {SITE_CONFIG.contacts.email}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#A7B0C0] group-hover:text-white" />
            </a>

            <div className="p-5 rounded-2xl bg-[#0B1220]/70 border border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 text-white/70 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#A7B0C0] block">
                  Direct Line
                </span>
                <span className="text-sm font-semibold text-white">
                  {SITE_CONFIG.contacts.phone}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
