import type { Metadata } from "next";
import { CheckCircle, Cloud, Server, Phone, Wifi, Monitor } from "lucide-react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import CTABanner from "@/components/CTABanner";
import { UCM_PRODUCTS, IP_PHONES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "VoIP Phone Systems — On-Premise & Cloud Hosted PBX",
  description:
    "Enterprise VoIP phone systems for South Florida businesses. Grandstream UCM on-premise PBX, Yealink and Cisco IP phones, and hosted cloud VoIP solutions. Authorized Grandstream distributor.",
};

const CLOUD_FEATURES = [
  { icon: Cloud, title: "No Hardware Required", description: "Everything runs in the cloud. No PBX box, no server room, no maintenance contracts." },
  { icon: Wifi, title: "Work From Anywhere", description: "Desk phones, softphones, mobile apps — your number works wherever you are." },
  { icon: Monitor, title: "Enterprise Features", description: "Auto attendant, call queues, voicemail-to-email, CRM integration, and video conferencing — included." },
  { icon: Server, title: "Instant Scalability", description: "Add or remove seats in minutes. No truck roll, no hardware purchase, no delay." },
  { icon: CheckCircle, title: "Built-in Redundancy", description: "Carrier-grade uptime with geographic redundancy baked in. No single point of failure." },
  { icon: Phone, title: "Local Number Portability", description: "Keep your existing phone numbers. We handle the porting from any carrier." },
];

const PHONE_TIERS: Record<string, { label: string; color: string }> = {
  "Entry Level": { label: "Entry Level", color: "bg-gray-100 text-gray-600" },
  Standard: { label: "Standard", color: "bg-blue-50 text-blue-700" },
  Business: { label: "Business", color: "bg-blue-100 text-blue-800" },
  "Business+": { label: "Business+", color: "bg-indigo-100 text-indigo-800" },
  "Power User": { label: "Power User", color: "bg-purple-100 text-purple-800" },
  Executive: { label: "Executive", color: "bg-brand-blue/10 text-brand-blue" },
  Enterprise: { label: "Enterprise", color: "bg-brand-navy/10 text-brand-navy" },
};

export default function VoIPSystemsPage() {
  return (
    <>
      <Hero
        badge="VoIP Phone Systems"
        headline="Enterprise-Grade VoIP Systems — On-Premise & Cloud"
        subheadline="From a 5-person office to a 3,000-seat enterprise, we deploy and support the VoIP systems that power modern business communication."
        primaryCta={{ label: "Request a Free Consultation", href: "/contact" }}
        secondaryCta={{ label: "View Our Partners", href: "/partners" }}
        size="md"
      />

      {/* On-Premise PBX */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-brand-green/10 text-brand-green border border-brand-green/20 mb-4">
              Authorized Grandstream Distributor
            </div>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              On-Premise IP PBX Systems
            </h2>
            <p className="text-gray-600 leading-relaxed">
              When you need full control over your communications — voicemail, call routing, security, and integrations — an on-premise PBX delivers. As an authorized Grandstream partner and distributor, we specialize in the Grandstream UCM series: the most capable, most affordable IP PBX systems on the market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {UCM_PRODUCTS.map((product, i) => (
              <ProductCard
                key={product.model}
                model={product.model}
                tagline={product.tagline}
                specs={product.specs}
                description={product.description}
                highlights={product.highlights}
                index={i}
                accent="green"
              />
            ))}
          </div>
        </div>
      </section>

      {/* IP Phones */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Business IP Phones — Built for Every Desk
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We carry the industry&apos;s most trusted IP phone brands, so you get the right device for every role in your business.
            </p>
          </div>

          {/* Grandstream Phones */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1.5 rounded-lg text-sm font-bold" style={{ background: "#FEE2E2", color: "#E8401C" }}>
                Grandstream
              </div>
              <p className="text-sm text-gray-500">Authorized Distributor — Best value for UCM environments</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {IP_PHONES.grandstream.map((phone) => (
                <div
                  key={phone.model}
                  className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-blue/20 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold text-gray-900">{phone.model}</h3>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${PHONE_TIERS[phone.tier]?.color}`}>
                      {phone.tier}
                    </span>
                  </div>
                  <p className="text-xs text-brand-green font-semibold mb-2">{phone.line}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{phone.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Yealink Phones */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1.5 rounded-lg text-sm font-bold" style={{ background: "#DBEAFE", color: "#0078D4" }}>
                Yealink
              </div>
              <p className="text-sm text-gray-500">Authorized Reseller — Industry-leading voice quality</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {IP_PHONES.yealink.map((phone) => (
                <div
                  key={phone.model}
                  className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-blue/20 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold text-gray-900">{phone.model}</h3>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${PHONE_TIERS[phone.tier]?.color}`}>
                      {phone.tier}
                    </span>
                  </div>
                  <p className="text-xs text-brand-blue font-semibold mb-2">{phone.series}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{phone.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cisco Phones */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1.5 rounded-lg text-sm font-bold" style={{ background: "#E0F2FE", color: "#1BA0D7" }}>
                Cisco
              </div>
              <p className="text-sm text-gray-500">Authorized Reseller — Enterprise-grade mission-critical deployments</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {IP_PHONES.cisco.map((phone) => (
                <div
                  key={phone.model}
                  className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-blue/20 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold text-gray-900">{phone.model}</h3>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${PHONE_TIERS[phone.tier]?.color}`}>
                      {phone.tier}
                    </span>
                  </div>
                  <p className="text-xs text-[#1BA0D7] font-semibold mb-2">{phone.series}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{phone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hosted Cloud VoIP */}
      <section className="bg-brand-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-brand-blue/20 text-blue-300 border border-brand-blue/30 mb-5">
                Hosted Cloud VoIP
              </div>
              <h2 className="text-3xl font-heading font-bold text-white mb-5">
                Dial Tone, Anywhere. No Hardware Required.
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Skip the hardware. Skip the maintenance. Cloud-hosted VoIP gives your team enterprise-grade calling features that work from the office, from home, or from a hotel in another time zone.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Through our partnerships with industry-leading hosted providers — including RingCentral, Vonage, Nextiva, Fusion Connect, Momentum, and others — we&apos;ll match you with the platform that fits your team size, budget, and feature needs. We don&apos;t just resell — we configure, train, and support.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CLOUD_FEATURES.map((f, i) => (
                <FeatureCard
                  key={f.title}
                  icon={<f.icon className="w-5 h-5 text-brand-green" />}
                  title={f.title}
                  description={f.description}
                  dark
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Not Sure What Fits? Let's Talk."
        subheading="We'll assess your needs and recommend the right solution — cloud, on-premise, or hybrid."
        primaryCta={{ label: "Request a Free VoIP Consultation", href: "/contact" }}
        secondaryCta={{ label: "View Our Partners", href: "/partners" }}
        variant="dark"
      />
    </>
  );
}
