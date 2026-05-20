"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface HeroProps {
  badge?: string;
  headline: string;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean;
  centered?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Hero({
  badge,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  dark = true,
  centered = true,
  size = "lg",
}: HeroProps) {
  const sizeClasses = {
    sm: "pt-32 pb-16",
    md: "pt-36 pb-20",
    lg: "pt-40 pb-28",
  };

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
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-dark text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-brand-green/20 hover:shadow-brand-green/30 hover:-translate-y-0.5"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className={`inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 border hover:-translate-y-0.5 ${
                    dark
                      ? "border-white/20 text-white hover:bg-white/10"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
