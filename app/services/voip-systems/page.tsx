import type { Metadata } from "next";
import { CheckCircle, Cloud, Server, Phone, Wifi, Monitor, Layers, Users } from "lucide-react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import CTABanner from "@/components/CTABanner";
import { UCM_PRODUCTS, IP_PHONES, COMPANY, SERVING_LINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Business VoIP Phone Systems — Hosted, On-Premise & Hybrid",
  description:
    "Hosted cloud VoIP, on-premise IP PBX, or hybrid for Broward County businesses. We help you choose, then install and support Grandstream, Yealink and Cisco — with number porting, auto attendants, call queues and CRM integration.",
  alternates: { canonical: "/services/voip-systems" },
};

const VOIP_OPTIONS = [
  {
    icon: Cloud,
    name: "Hosted Cloud VoIP",
    summary: "Your phone system lives in the cloud. No PBX hardware on site.",
    pros: ["No upfront hardware investment", "Scales up or down in minutes", "Works from office, home and mobile", "Carrier-grade redundancy included", "Predictable monthly per-seat cost"],
    cons: ["Ongoing monthly per-seat fees", "Depends on reliable internet (we design for this)"],
    bestFor: "Remote/hybrid teams, multi-site businesses, and offices that want enterprise features without capital outlay.",
  },
  {
    icon: Server,
    name: "On-Premise IP PBX",
    summary: "You own the PBX. It runs on site for full control.",
    pros: ["Full system ownership — no per-seat fees", "Deep customization and integrations", "Great for compliance-sensitive offices", "Lower long-term cost at scale"],
    cons: ["Higher upfront hardware cost", "You own maintenance (we support it)"],
    bestFor: "Businesses with strong internal IT, compliance needs, existing infrastructure, or many seats where owning pays off.",
  },
  {
    icon: Layers,
    name: "Hybrid VoIP",
    summary: "On-premise control where you need it, cloud flexibility where you don't.",
    pros: ["Keep on-site control + cloud mobility", "Smooth path from legacy to cloud", "Per-location flexibility", "Resilience across sites"],
    cons: ["More design up front (we handle it)", "Requires a partner who knows both worlds"],
    bestFor: "Multi-location operations and businesses transitioning from a legacy system at their own pace.",
  },
];

const VOIP_FEATURES = [
  "Number porting (keep your numbers)",
  "Auto attendants & IVR menus",
  "Call queues & ring groups",
  "Mobile & desktop softphone apps",
  "Voicemail to email",
  "Call recording",
  "CRM integration",
  "Multi-location support",
  "Local installation & support",
];

const VOIP_FAQS = [
  {
    q: "Hosted, on-premise, or hybrid — which is right for us?",
    a: "It depends on your team size, how mobile your staff is, your budget structure (monthly vs. upfront), and any compliance needs. Hosted suits most small and multi-site businesses; on-premise pays off at scale or where control matters; hybrid bridges the two. We assess your situation and recommend honestly — we install all three.",
  },
  {
    q: "Can we keep our existing phone numbers?",
    a: "Yes. We handle number porting from your current carrier so you keep every number. We schedule the port carefully to avoid any gap in service.",
  },
  {
    q: "Do you install and support the system locally?",
    a: "Yes. We're based in Lauderhill and provide local installation, configuration, staff training and ongoing support — not a remote 1-800 line. We program your auto attendants, call queues and voicemail-to-email and make sure it all works.",
  },
  {
    q: "Will our internet handle VoIP calls?",
    a: "That's exactly why we also design networks. We size your connection and tune your network — voice VLAN, QoS, PoE switching — so calls are clear and reliable. Poor call quality is almost always a network issue, and we fix it at the source.",
  },
];

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Business VoIP Phone System Installation",
  provider: {
    "@type": "LocalBusiness",
    name: COMPANY.name,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "AdministrativeArea", name: "Broward County, Florida" },
  description:
    "Hosted cloud VoIP, on-premise IP PBX and hybrid phone system selection, installation and support, including number porting, auto attendants, call queues and CRM integration.",
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://voipmsi.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://voipmsi.com/services" },
    { "@type": "ListItem", position: 3, name: "Business VoIP Phone Systems", item: "https://voipmsi.com/services/voip-systems" },
  ],
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: VOIP_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <Hero
        badge="Business VoIP Phone Systems"
        headline="Hosted, On-Premise & Hybrid VoIP — We Help You Choose"
        subheadline="From a 5-person office to a 3,000-seat enterprise, we help South Florida businesses pick the right phone system, then install and support it locally."
        primaryCta={{ label: "Schedule a Free Assessment", href: "/contact" }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: COMPANY.phoneHref }}
        note={SERVING_LINE}
        size="md"
      />

      {/* Hosted vs On-Premise vs Hybrid */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Hosted, On-Premise, or Hybrid?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              There&apos;s no single &ldquo;best&rdquo; VoIP system — only the best fit for your business. Here&apos;s an honest comparison of all three.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {VOIP_OPTIONS.map((opt) => (
              <div key={opt.name} className="flex flex-col p-7 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                  <opt.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">{opt.name}</h3>
                <p className="text-sm text-gray-500 mb-5">{opt.summary}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-green mb-2">Advantages</p>
                <ul className="space-y-1.5 mb-5">
                  {opt.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Trade-offs</p>
                <ul className="space-y-1.5 mb-5">
                  {opt.cons.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" /> Best for
                  </p>
                  <p className="text-sm text-gray-600">{opt.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features included */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Features We Set Up &amp; Support</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Whichever path you choose, we configure the capabilities that make a phone system actually work for your team.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {VOIP_FEATURES.map((f) => (
              <div key={f} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100">
                <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                <span className="text-sm text-gray-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-10 text-center">
            Business VoIP — Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {VOIP_FAQS.map((f) => (
              <div key={f.q} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Not Sure What Fits? Let's Talk."
        subheading="We'll assess your needs and recommend the right solution — hosted, on-premise, or hybrid."
        primaryCta={{ label: "Schedule a Free Assessment", href: "/contact" }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: COMPANY.phoneHref }}
        variant="dark"
      />
    </>
  );
}
