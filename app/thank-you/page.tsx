import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import ConversionTracker from "@/components/ConversionTracker";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Thank You — We Received Your Request",
  description: "Thank you for contacting VoIP Made Simple Inc. A local specialist will be in touch within one business day.",
  robots: { index: false, follow: true },
};

// Distinct copy per conversion type. Each is reached via /thank-you?type=...
// so it's an independently trackable conversion URL for GTM/GA4 and GHL redirects.
const VARIANTS: Record<string, { heading: string; body: string }> = {
  assessment: {
    heading: "Your Free Assessment Request Is In",
    body: "Thanks for reaching out. One of our local specialists will contact you within one business day to schedule your free business communications assessment.",
  },
  "site-survey": {
    heading: "Your Site Survey Request Is In",
    body: "Thanks for reaching out. We'll contact you within one business day to schedule your free structured cabling site survey at your location.",
  },
  consultation: {
    heading: "Your Consultation Is Booked",
    body: "Thanks for booking. You'll receive a confirmation, and we look forward to your free 20-minute business communications consultation.",
  },
  quote: {
    heading: "Your Quote Request Is In",
    body: "Thanks for reaching out. A specialist will review your request and get back to you within one business day with the details.",
  },
  default: {
    heading: "We Received Your Request",
    body: "Thanks for reaching out to VoIP Made Simple Inc. A local specialist will be in touch within one business day.",
  },
};

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: { type?: string };
}) {
  const type = searchParams.type && VARIANTS[searchParams.type] ? searchParams.type : "default";
  const variant = VARIANTS[type];

  return (
    <>
      <ConversionTracker type={type} />

      <section className="relative overflow-hidden bg-brand-dark pt-40 pb-32 min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.10),transparent_60%)]" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-brand-green/15 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-9 h-9 text-brand-green" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-5">
            {variant.heading}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">{variant.body}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-dark text-white font-semibold text-sm transition-all shadow-lg shadow-brand-green/20 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Need us sooner? Call {COMPANY.phone}
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border border-white/20 text-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
