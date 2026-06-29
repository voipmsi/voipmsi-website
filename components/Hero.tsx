"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { trackPhoneClick } from "@/lib/analytics";

interface CtaConfig {
  label: string;
  href: string;
}

interface HeroProps {
  badge?: string;
  headline: string;
  subheadline: string;
  primaryCta?: CtaConfig;
  secondaryCta?: CtaConfig;
  /** Small line rendered under the CTAs — used for the local "serving" message. */
  note?: string;
  dark?: boolean;
  centered?: boolean;
  size?: "sm" | "md" | "lg";
}

// Renders a Next <Link> for internal routes, but a plain <a> for tel:/mailto:/http
// links (Next Link is for client-side navigation only). Phone links are tracked.
function CtaButton({ cta, className }: { cta: CtaConfig; className: string }) {
  const isTel = cta.href.startsWith("tel:");
  const isExternal = isTel || cta.href.startsWith("mailto:") || cta.href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={cta.href}
        className={className}
        onClick={isTel ? () => trackPhoneClick("hero") : undefined}
      >
        {cta.label}
      </a>
    );
  }
  return (
    <Link href={cta.href} className={className}>
      {cta.label}
    </Link>
  );
}

export default function Hero({
  badge,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  note,
  dark = true,
  centered = true,
  size = "lg",
}: HeroProps) {
  const sizeClasses = {
    sm: "pt-32 pb-16",
    md: "pt-36 pb-20",
    lg: "pt-40 pb-28",
  };

  const primaryClass =
    "inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-dark text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-brand-green/20 hover:shadow-brand-green/30 hover:-translate-y-0.5";

  const secondaryClass = `inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 border hover:-translate-y-0.5 ${
    dark
      ? "border-white/20 text-white hover:bg-white/10"
      : "border-gray-300 text-gray-700 hover:bg-gray-50"
  }`;

  return (
    <section
      className={`relative overflow-hidden ${sizeClasses[size]} ${
        dark ? "bg-brand-dark" : "bg-gray-50"
      }`}
    >
      {/* Background gradient */}
      {dark && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,197,94,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.08),transparent_60%)]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </>
      )}

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${centered ? "text-center" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {badge && (
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 ${
                dark
                  ? "bg-brand-green/10 text-brand-green border border-brand-green/20"
                  : "bg-brand-blue/10 text-brand-blue border border-brand-blue/20"
              }`}
            >
              {badge}
            </div>
          )}

          <h1
            className={`font-heading font-bold tracking-tight mb-6 ${
              size === "lg" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl lg:text-5xl"
            } ${dark ? "text-white" : "text-gray-900"} ${centered ? "max-w-4xl mx-auto" : ""}`}
          >
            {headline}
          </h1>

          <p
            className={`text-lg sm:text-xl leading-relaxed mb-10 ${
              dark ? "text-gray-400" : "text-gray-600"
            } ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
          >
            {subheadline}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className={`flex flex-col sm:flex-row gap-4 ${centered ? "justify-center" : ""}`}>
              {primaryCta && <CtaButton cta={primaryCta} className={primaryClass} />}
              {secondaryCta && <CtaButton cta={secondaryCta} className={secondaryClass} />}
            </div>
          )}

          {note && (
            <div
              className={`mt-7 inline-flex items-center gap-2 text-sm font-medium ${
                dark ? "text-gray-300" : "text-gray-600"
              } ${centered ? "" : ""}`}
            >
              <MapPin className="w-4 h-4 text-brand-green flex-shrink-0" />
              <span>{note}</span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
