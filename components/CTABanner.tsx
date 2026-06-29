"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { trackPhoneClick } from "@/lib/analytics";

interface CtaConfig {
  label: string;
  href: string;
}

interface CTABannerProps {
  heading: string;
  subheading?: string;
  primaryCta: CtaConfig;
  secondaryCta?: CtaConfig;
  variant?: "green" | "blue" | "dark";
}

// Internal routes use Next <Link>; tel:/mailto:/http use a plain <a>. Phone links tracked.
function BannerCta({ cta, className }: { cta: CtaConfig; className: string }) {
  const isTel = cta.href.startsWith("tel:");
  const isExternal = isTel || cta.href.startsWith("mailto:") || cta.href.startsWith("http");
  const content = (
    <>
      {cta.label}
      <ArrowRight className="w-4 h-4" />
    </>
  );
  if (isExternal) {
    return (
      <a href={cta.href} className={className} onClick={isTel ? () => trackPhoneClick("cta_banner") : undefined}>
        {content}
      </a>
    );
  }
  return (
    <Link href={cta.href} className={className}>
      {content}
    </Link>
  );
}

export default function CTABanner({
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  variant = "dark",
}: CTABannerProps) {
  const bg = {
    green: "bg-brand-green",
    blue: "bg-brand-blue",
    dark: "bg-brand-navy",
  }[variant];

  const primaryBtn = {
    green: "bg-white text-brand-green hover:bg-gray-100",
    blue: "bg-white text-brand-blue hover:bg-gray-100",
    dark: "bg-brand-green text-white hover:bg-brand-green-dark shadow-lg shadow-brand-green/20",
  }[variant];

  const secondaryBtn = "border border-white/30 text-white hover:bg-white/10";

  return (
    <section className={`${bg} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            {heading}
          </h2>
          {subheading && (
            <p className="text-lg text-white/75 mb-8 max-w-xl mx-auto">{subheading}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BannerCta
              cta={primaryCta}
              className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${primaryBtn}`}
            />
            {secondaryCta && (
              <BannerCta
                cta={secondaryCta}
                className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${secondaryBtn}`}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
