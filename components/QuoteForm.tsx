"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, AlertCircle, Send } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { trackFormSubmit } from "@/lib/analytics";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().min(1, "Please enter your business name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "Please enter your business city"),
  service: z.string().min(1, "Please select a service"),
  users: z.string().min(1, "Please select a range"),
  locations: z.string().optional(),
  currentProvider: z.string().optional(),
  timeline: z.string().optional(),
  preferredContact: z.string().optional(),
  message: z.string().optional(),
  smsConsent: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

const SERVICES = [
  "Business Internet & ISP Selection",
  "Network Setup & Wi-Fi",
  "Structured Cabling",
  "Business VoIP Phone System (Hosted Cloud)",
  "Business VoIP Phone System (On-Premise PBX)",
  "Security Cameras",
  "Office Move / New Office Buildout",
  "Multiple Services",
  "Not Sure — Need a Free Assessment",
];

const USER_RANGES = [
  "1–10",
  "11–25",
  "26–50",
  "51–100",
  "101–250",
  "251–500",
  "500+",
];

const LOCATION_RANGES = ["1 location", "2–3 locations", "4–10 locations", "10+ locations"];

const TIMELINES = [
  "As soon as possible",
  "Within 30 days",
  "1–3 months",
  "3–6 months",
  "Just researching",
];

const CONTACT_METHODS = ["Phone call", "Text message", "Email"];

interface QuoteFormProps {
  dark?: boolean;
  /** Identifies which CTA produced the lead (e.g. "Free Assessment", "Site Survey"). */
  formType?: string;
}

export default function QuoteForm({ dark = false, formType = "Quote Request" }: QuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      /*
       * Posts to the server-side proxy at /api/quote, which forwards to the Go
       * HighLevel inbound webhook (GHL_WEBHOOK_URL in .env.local). Routing through
       * the proxy keeps the webhook URL server-side and lets GHL capture the lead
       * source. In dev/demo (no webhook configured) the proxy returns success.
       */
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          formType,
          pagePath: typeof window !== "undefined" ? window.location.pathname : "",
          referrer: typeof document !== "undefined" ? document.referrer : "",
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      trackFormSubmit(formType);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl text-sm transition-colors focus:outline-none focus:ring-2 ${
      dark
        ? "bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-brand-green/40 focus:border-brand-green/40"
        : "bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-brand-blue/30 focus:border-brand-blue/40"
    } ${hasError ? "border-red-500 focus:ring-red-500/30" : ""}`;

  const labelClass = `block text-xs font-semibold uppercase tracking-wide mb-1.5 ${
    dark ? "text-gray-400" : "text-gray-600"
  }`;

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="w-16 h-16 text-brand-green mb-4" />
        <h3 className={`text-2xl font-bold mb-2 ${dark ? "text-white" : "text-gray-900"}`}>
          We Received Your Request!
        </h3>
        <p className={`max-w-sm ${dark ? "text-gray-400" : "text-gray-600"}`}>
          One of our specialists will reach out within one business day. Need us sooner? Call{" "}
          <a href={COMPANY.phoneHref} className="text-brand-green font-semibold">
            {COMPANY.phone}
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-brand-green hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className={labelClass} htmlFor="qf-name">Full Name *</label>
          <input id="qf-name" type="text" placeholder="Jane Smith" autoComplete="name"
            {...register("name")} className={inputClass(!!errors.name)} />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>

        {/* Business name */}
        <div>
          <label className={labelClass} htmlFor="qf-company">Business Name *</label>
          <input id="qf-company" type="text" placeholder="Acme Dental" autoComplete="organization"
            {...register("company")} className={inputClass(!!errors.company)} />
          {errors.company && <p className="mt-1 text-xs text-red-400">{errors.company.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className={labelClass} htmlFor="qf-phone">Phone *</label>
          <input id="qf-phone" type="tel" placeholder="(954) 555-0100" autoComplete="tel"
            {...register("phone")} className={inputClass(!!errors.phone)} />
          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className={labelClass} htmlFor="qf-email">Business Email *</label>
          <input id="qf-email" type="email" placeholder="jane@company.com" autoComplete="email"
            {...register("email")} className={inputClass(!!errors.email)} />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>

        {/* Business city */}
        <div>
          <label className={labelClass} htmlFor="qf-city">Business City *</label>
          <input id="qf-city" type="text" placeholder="Lauderhill" autoComplete="address-level2"
            {...register("city")} className={inputClass(!!errors.city)} />
          {errors.city && <p className="mt-1 text-xs text-red-400">{errors.city.message}</p>}
        </div>

        {/* Service needed */}
        <div>
          <label className={labelClass} htmlFor="qf-service">Service Needed *</label>
          <select id="qf-service" {...register("service")} className={inputClass(!!errors.service)}>
            <option value="">Select a service...</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.service && <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>}
        </div>

        {/* Employees / phone users */}
        <div>
          <label className={labelClass} htmlFor="qf-users">Employees / Phone Users *</label>
          <select id="qf-users" {...register("users")} className={inputClass(!!errors.users)}>
            <option value="">Select range...</option>
            {USER_RANGES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          {errors.users && <p className="mt-1 text-xs text-red-400">{errors.users.message}</p>}
        </div>

        {/* Number of locations */}
        <div>
          <label className={labelClass} htmlFor="qf-locations">Number of Locations</label>
          <select id="qf-locations" {...register("locations")} className={inputClass(false)}>
            <option value="">Select...</option>
            {LOCATION_RANGES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        {/* Current provider */}
        <div>
          <label className={labelClass} htmlFor="qf-provider">Current Provider (if known)</label>
          <input id="qf-provider" type="text" placeholder="e.g. Comcast, AT&T, RingCentral"
            {...register("currentProvider")} className={inputClass(false)} />
        </div>

        {/* Timeline */}
        <div>
          <label className={labelClass} htmlFor="qf-timeline">Project Timeline</label>
          <select id="qf-timeline" {...register("timeline")} className={inputClass(false)}>
            <option value="">Select...</option>
            {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        {/* Preferred contact method */}
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="qf-contact">Preferred Contact Method</label>
          <select id="qf-contact" {...register("preferredContact")} className={inputClass(false)}>
            <option value="">Select...</option>
            {CONTACT_METHODS.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="qf-message">Message / Additional Details</label>
          <textarea id="qf-message" rows={4}
            placeholder="Tell us about your current setup, the problems you're having, your timeline, or any questions..."
            {...register("message")} className={inputClass(false)} />
        </div>
      </div>

      {/* SMS / contact consent */}
      <label className="mt-5 flex items-start gap-3 cursor-pointer">
        <input
          id="qf-sms"
          type="checkbox"
          {...register("smsConsent")}
          className="mt-1 w-4 h-4 rounded border-gray-300 text-brand-green focus:ring-brand-green/40 flex-shrink-0"
        />
        <span className={`text-xs leading-relaxed ${dark ? "text-gray-400" : "text-gray-500"}`}>
          I agree to be contacted by {COMPANY.name} by phone, email, or text message at the number
          and email provided about my request. Message and data rates may apply. Message frequency
          varies. Reply <strong>STOP</strong> to opt out of texts at any time, or <strong>HELP</strong> for
          help. Consent is not a condition of purchase.
        </span>
      </label>

      {status === "error" && (
        <div className="mt-4 flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          Something went wrong. Please call us at {COMPANY.phone} or email {COMPANY.email}.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-blue hover:bg-brand-blue-mid text-white font-semibold text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 shadow-lg shadow-brand-blue/20"
      >
        {status === "loading" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Request My Free Assessment
          </>
        )}
      </button>

      <p className={`mt-3 text-xs text-center ${dark ? "text-gray-500" : "text-gray-400"}`}>
        No spam, no pressure. We&apos;ll respond within one business day.
      </p>
    </form>
  );
}
