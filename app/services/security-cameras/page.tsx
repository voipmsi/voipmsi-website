import type { Metadata } from "next";
import {
  Camera,
  Eye,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  Building,
  ShoppingBag,
  Truck,
  LayoutGrid,
  CheckCircle,
} from "lucide-react";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import CTABanner from "@/components/CTABanner";
import { COMPANY, SERVING_LINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Business Security Camera Systems — Broward County, FL",
  description:
    "Professional IP security camera installation for Broward County businesses. 4K cameras, NVR recording, AI analytics, cloud storage and mobile access — installed with clean, labeled cabling. Call (954) 975-4899.",
  alternates: { canonical: "/services/security-cameras" },
};

const CAMERA_FAQS = [
  {
    q: "Are these business cameras or the kind I'd buy at a big-box store?",
    a: "Business-grade. We install professional IP camera systems with ruggedized hardware, encrypted streams, proper retention storage and clean, labeled cabling — built for compliance, HR and insurance needs, not a consumer doorbell.",
  },
  {
    q: "Can I view my cameras from my phone?",
    a: "Yes. View any camera live from your phone, tablet or laptop, review recorded footage, and receive motion or AI-based alerts — from anywhere, on any device.",
  },
  {
    q: "How long is footage stored?",
    a: "It depends on your camera count, resolution and retention needs. We size NVR storage accordingly and can add hybrid cloud backup so footage survives even if on-site hardware is damaged or stolen. We'll recommend a retention plan that fits your requirements.",
  },
  {
    q: "Do you run the cabling for the cameras too?",
    a: "We do. We install the low-voltage cabling and PoE infrastructure with the same clean, labeled standard as the rest of your network — ideally during a build-out while walls and pathways are open.",
  },
];

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Business Security Camera System Installation",
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
    "Professional IP security camera installation: 4K cameras, NVR/hybrid recording, AI analytics, cloud backup, mobile access and multi-site monitoring.",
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://voipmsi.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://voipmsi.com/services" },
    { "@type": "ListItem", position: 3, name: "Security Cameras", item: "https://voipmsi.com/services/security-cameras" },
  ],
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CAMERA_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const DEPLOYMENTS = [
  "4K IP cameras — indoor, outdoor, dome, bullet, PTZ, and panoramic",
  "NVR and hybrid recorders with redundant storage",
  "Cloud backup and hybrid storage options",
  "AI-powered analytics: person, vehicle, license plate recognition",
  "Remote mobile access from any device",
  "Integration with access control and alarm systems",
  "VoIP intercom and video doorbell integration",
  "Multi-site centralized monitoring",
];

const BENEFITS = [
  {
    icon: Eye,
    title: "24/7 Monitoring",
    description:
      "Continuous recording with motion detection, scheduled recording, and AI-powered alert triggers — day and night.",
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description:
      "Hybrid local + cloud storage protects your footage even if on-site hardware is damaged, stolen, or compromised.",
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description:
      "View any camera live from your phone, tablet, or laptop. Review footage, receive alerts, and manage your system from anywhere.",
  },
  {
    icon: Zap,
    title: "AI Analytics",
    description:
      "Go beyond recording with intelligent detection. Person counting, license plate capture, line crossing alerts, and heat mapping.",
  },
  {
    icon: Shield,
    title: "Tamper Detection",
    description:
      "Cameras alert you if they're blocked, moved, or disconnected — so you know immediately if someone is trying to defeat your system.",
  },
  {
    icon: Camera,
    title: "4K Image Quality",
    description:
      "Modern IP cameras deliver Ultra HD resolution so you can actually identify faces, license plates, and details in critical footage.",
  },
];

const USE_CASES = [
  {
    icon: ShoppingBag,
    label: "Retail",
    description: "Loss prevention, customer behavior analytics, and dispute resolution.",
  },
  {
    icon: Building,
    label: "Office Buildings",
    description: "Access monitoring, lobby surveillance, and parking lot coverage.",
  },
  {
    icon: Truck,
    label: "Warehouses",
    description: "Wide-area coverage, dock monitoring, and inventory protection.",
  },
  {
    icon: LayoutGrid,
    label: "Multi-Site",
    description: "Centralized monitoring across multiple locations from a single dashboard.",
  },
];

export default function SecurityCamerasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <Hero
        badge="Security Cameras"
        headline="Protect What You've Built — With Surveillance That Sees Everything."
        subheadline="Modern IP camera systems with 4K clarity, AI analytics, and 24/7 remote access from any device. Built for business, not consumers."
        primaryCta={{ label: "Request a Free Security Assessment", href: "/contact" }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: COMPANY.phoneHref }}
        note={SERVING_LINE}
        size="md"
      />

      {/* Main content */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                State-of-the-Art Business Security &amp; Surveillance
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Your business is more than a building — it&apos;s an investment in your people, your customers, and your future. We deploy professional-grade IP camera systems that let you see your business clearly, day or night, from anywhere in the world.
                </p>
                <p>
                  Unlike consumer cameras you&apos;ll find at a big-box store, our systems are built for business: ruggedized hardware, encrypted streams, professional installation, and storage solutions that meet retention requirements for insurance, HR, and compliance purposes.
                </p>
                <p>
                  We bring the same standard of installation to your camera system that we bring to your phone system: professional cabling, clean mounting, configured alerts, and a walkthrough that ensures you actually know how to use what we installed.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">What We Deploy</h3>
                <ul className="space-y-2.5">
                  {DEPLOYMENTS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BENEFITS.map((b, i) => (
                <FeatureCard
                  key={b.title}
                  icon={<b.icon className="w-5 h-5 text-brand-blue" />}
                  title={b.title}
                  description={b.description}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every industry has different camera placement, retention, and integration requirements. We design systems that fit your specific environment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {USE_CASES.map((uc) => (
              <div
                key={uc.label}
                className="p-6 rounded-2xl bg-white border border-gray-100 text-center hover:border-brand-blue/20 hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                  <uc.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-2">{uc.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center text-sm text-gray-500">
            {["Healthcare", "Auto Dealerships", "Restaurants", "Multi-Tenant Properties"].map((item) => (
              <div key={item} className="py-3 px-4 rounded-xl bg-white border border-gray-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why voIPmsi */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-heading font-bold text-white mb-5">
            Why Choose voIPmsi for Security?
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            We bring the same standard of installation to your camera system that we bring to your phone system: professional cabling, clean mounting, configured alerts, and a full walkthrough so you actually know how to use what we installed. No dropped calls. No blind spots. No mystery.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-10 text-center">
            Business Security Cameras — Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {CAMERA_FAQS.map((f) => (
              <div key={f.q} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="See Your Business Clearly — From Anywhere."
        subheading="Request a free security assessment and we'll design the right system for your facility."
        primaryCta={{ label: "Request a Free Security Assessment", href: "/contact" }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: COMPANY.phoneHref }}
        variant="dark"
      />
    </>
  );
}
