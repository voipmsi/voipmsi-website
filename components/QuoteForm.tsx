"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, AlertCircle, Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().min(1, "Please enter your company name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  users: z.string().min(1, "Please select number of users"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const SERVICES = [
  "VoIP Phone System (On-Premise)",
  "Hosted Cloud VoIP",
  "Structured Cabling",
  "Security Cameras",
  "Multiple Services",
  "Not Sure — Need Consultation",
];

const USER_RANGES = [
  "1–10 users",
  "11–25 users",
  "26–50 users",
  "51–100 users",
  "101–250 users",
  "251–500 users",
  "500+ users",
];

interface QuoteFormProps {
  dark?: boolean;
}

export default function QuoteForm({ dark = false }: QuoteFormProps) {
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
       * Posts form data to Go HighLevel inbound webhook.
       * Replace NEXT_PUBLIC_GHL_WEBHOOK_URL in .env.local with your actual
       * webhook URL from: GHL Settings → Integrations → Webhooks → Create Webhook.
       *
       * ALTERNATIVE: To use the native GHL form embed instead of this custom form,
       * replace this entire QuoteForm component with an <iframe> pointing to your
       * GHL form embed URL (found in GHL → Forms → [Your Form] → Embed).
       * Example: <iframe src="https://api.leadconnectorhq.com/widget/form/YOUR_FORM_ID" />
       */
      const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;

      if (!webhookUrl || webhookUrl.includes("YOUR_WEBHOOK_ID")) {
        // Dev/demo fallback: simulate success
        await new Promise((r) => setTimeout(r, 1000));
        setStatus("success");
        reset();
        return;
      }

      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "Website Quote Form",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
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
          One of our specialists will reach out within one business day with your custom quote.
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
          <input
            id="qf-name"
            type="text"
            placeholder="Jane Smith"
            autoComplete="name"
            {...register("name")}
            className={inputClass(!!errors.name)}
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>

        {/* Company */}
        <div>
          <label className={labelClass} htmlFor="qf-company">Company *</label>
          <input
            id="qf-company"
            type="text"
            placeholder="Acme Corporation"
            autoComplete="organization"
            {...register("company")}
            className={inputClass(!!errors.company)}
          />
          {errors.company && <p className="mt-1 text-xs text-red-400">{errors.company.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className={labelClass} htmlFor="qf-email">Business Email *</label>
          <input
            id="qf-email"
            type="email"
            placeholder="jane@company.com"
            autoComplete="email"
            {...register("email")}
            className={inputClass(!!errors.email)}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className={labelClass} htmlFor="qf-phone">Phone Number *</label>
          <input
            id="qf-phone"
            type="tel"
            placeholder="(954) 555-0100"
            autoComplete="tel"
            {...register("phone")}
            className={inputClass(!!errors.phone)}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
        </div>

        {/* Service */}
        <div>
          <label className={labelClass} htmlFor="qf-service">Service Interested In *</label>
          <select
            id="qf-service"
            {...register("service")}
            className={inputClass(!!errors.service)}
          >
            <option value="">Select a service...</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>}
        </div>

        {/* Users */}
        <div>
          <label className={labelClass} htmlFor="qf-users">Number of Users *</label>
          <select
            id="qf-users"
            {...register("users")}
            className={inputClass(!!errors.users)}
          >
            <option value="">Select range...</option>
            {USER_RANGES.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          {errors.users && <p className="mt-1 text-xs text-red-400">{errors.users.message}</p>}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="qf-message">Message / Additional Details</label>
          <textarea
            id="qf-message"
            rows={4}
            placeholder="Tell us about your current setup, specific needs, timeline, or any questions..."
            {...register("message")}
            className={inputClass(false)}
          />
        </div>
      </div>

      {status === "error" && (
        <div className="mt-4 flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          Something went wrong. Please call us at (954) 975-4899 or email info@voipmsi.com.
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
            Request My Free Quote
          </>
        )}
      </button>

      <p className={`mt-3 text-xs text-center ${dark ? "text-gray-500" : "text-gray-400"}`}>
        No spam, no pressure. We&apos;ll respond within one business day.
      </p>
    </form>
  );
}
