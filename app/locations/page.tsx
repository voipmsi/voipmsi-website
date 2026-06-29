import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import { CITIES } from "@/lib/cities";
import { COMPANY, SERVING_LINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas — Broward County Business Communications",
  description:
    "VoIP Made Simple Inc. installs business internet, networks, structured cabling and VoIP phone systems across Broward County — Lauderhill, Fort Lauderdale, Plantation, Sunrise, Tamarac, Davie, Coral Springs and more.",
  alternates: { canonical: "/locations" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://voipmsi.com" },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://voipmsi.com/locations" },
  ],
};

export default function LocationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <Hero
        badge="Service Areas"
        headline="Local Across Broward County"
        subheadline="From our Lauderhill office, we install and support business internet, networks, structured cabling and VoIP phone systems for businesses throughout Broward County and South Florida."
        primaryCta={{ label: "Schedule a Free Assessment", href: "/contact" }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: COMPANY.phoneHref }}
        note={SERVING_LINE}
        size="md"
      />

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                className="group flex flex-col p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-blue/20 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-brand-green" />
                  <h2 className="text-lg font-heading font-bold text-gray-900">{c.name}</h2>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{c.heroSub}</p>
                <span className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-brand-blue group-hover:gap-3 transition-all">
                  {c.name} services <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-10 max-w-2xl mx-auto">
            Don&apos;t see your city? We serve businesses throughout Broward County and the surrounding South Florida area.{" "}
            <Link href="/contact" className="text-brand-blue font-semibold hover:underline">
              Ask us about your location
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABanner
        heading="One Local Partner, Across South Florida"
        subheading="From the internet connection to the phone on your desk — get a free assessment today."
        primaryCta={{ label: "Schedule a Free Assessment", href: "/contact" }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: COMPANY.phoneHref }}
        variant="dark"
      />
    </>
  );
}
