import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Router,
  Network,
  Wifi,
  Server,
  ShieldCheck,
  Layers,
  Activity,
  FileText,
  Tag,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import CTABanner from "@/components/CTABanner";
import { COMPANY, SERVING_LINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Business Network Design & Installation — Broward County",
  description:
    "Office network installation in Fort Lauderdale and Broward County: routers, firewalls, managed switches, VLANs, business Wi-Fi, racks and patch panels — designed for reliable VoIP. VoIP Made Simple Inc., Lauderhill FL.",
  alternates: { canonical: "/services/network-setup" },
};

const CAPABILITIES = [
  { icon: ShieldCheck, title: "Router & Firewall Planning", description: "The right gateway and firewall for your size, security needs and number of sites — configured, not just plugged in." },
  { icon: Network, title: "Managed & Unmanaged Switches", description: "We spec and deploy the right switching, with PoE for phones, cameras and access points where you need it." },
  { icon: Layers, title: "VLAN Setup", description: "Separate voice, data, guest and camera traffic for performance and security on the same physical network." },
  { icon: Wifi, title: "Wireless Access Points", description: "Business-grade APs placed for real coverage — not a consumer router fighting to reach the back office." },
  { icon: Wifi, title: "Wi-Fi Coverage Planning", description: "We map your space and design AP placement so coverage is strong everywhere your team and customers work." },
  { icon: Server, title: "Network Racks", description: "Clean, organized racks that make your network easy to support today and years from now." },
  { icon: Tag, title: "Patch Panels", description: "Terminated, tested and labeled patch panels so every connection is traceable end to end." },
  { icon: Activity, title: "Network Troubleshooting", description: "Chasing dropped calls, dead drops or slow Wi-Fi? We diagnose and fix existing networks, not just new ones." },
  { icon: Router, title: "VoIP Network Readiness", description: "We tune your network for voice — the difference between a phone system that works and one that frustrates everyone." },
  { icon: Activity, title: "Quality of Service (QoS)", description: "Prioritize voice traffic so calls stay clear even when the network is busy with everything else." },
  { icon: FileText, title: "Documentation & Labeling", description: "As-built documentation, labeled drops and a network map the next technician will actually thank you for." },
];

const FAQS = [
  {
    q: "Why does my network matter for my phone system?",
    a: "VoIP runs over your data network. Mis-configured switches, no QoS, an overloaded firewall or weak Wi-Fi are the most common causes of dropped and choppy calls. We design the network and the phone system together, so voice is prioritized and reliable from day one.",
  },
  {
    q: "Can you fix or improve our existing network?",
    a: "Yes. A large part of our work is troubleshooting and upgrading networks installed by someone else — replacing consumer gear with business-grade equipment, adding VLANs and QoS, fixing Wi-Fi dead zones, and documenting what's actually in the rack.",
  },
  {
    q: "Do you handle the cabling too?",
    a: "We do. Network equipment is only as good as the cabling behind it. We install and certify the Cat6/Cat6a and fiber, terminate the patch panels, and mount the racks. See our structured cabling page for details.",
  },
  {
    q: "Do you offer business Wi-Fi installation in Broward County?",
    a: "Yes — business Wi-Fi installation across Broward County is one of our core services. We survey your space, plan access-point placement for full coverage, run the cabling, and configure secure staff and guest networks.",
  },
];

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Business Network Design and Installation",
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
    "Business network design and installation: routers, firewalls, managed switches, VLANs, business Wi-Fi, racks, patch panels, QoS and VoIP network readiness.",
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://voipmsi.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://voipmsi.com/services" },
    { "@type": "ListItem", position: 3, name: "Network Setup", item: "https://voipmsi.com/services/network-setup" },
  ],
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function NetworkSetupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <Hero
        badge="Business Network Design & Installation"
        headline="Business Network Design and Installation"
        subheadline="Routers, firewalls, switches, VLANs and business Wi-Fi — designed, installed and documented as one reliable system. The foundation that keeps your internet, phones, cameras and devices working together."
        primaryCta={{ label: "Schedule a Free Assessment", href: "/contact" }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: COMPANY.phoneHref }}
        note={SERVING_LINE}
        size="md"
      />

      {/* Intro + image */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                The Infrastructure Behind Everything That Connects
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Your phones, your Wi-Fi, your cameras and your cloud apps all ride on one thing: your network. When it&apos;s designed right, you never think about it. When it&apos;s not, you get dropped calls, dead Wi-Fi zones and &ldquo;the internet is down again.&rdquo;
                </p>
                <p>
                  We design and install business networks built for reliability and ready for voice. From the firewall at the edge to the access point over the conference room, every piece is selected for your environment, configured properly, labeled and documented — so the system holds up and stays supportable.
                </p>
                <p>
                  And because we install the cabling, the network and the phone system, there&apos;s no finger-pointing between vendors. One local team owns the result.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/services/structured-cabling" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-mid transition-colors">
                  Pairs with our structured cabling <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <Image
                src="/images/network-rack-hero.jpg"
                alt="VoIP Made Simple technician terminating Cat6 cabling into a labeled patch panel on a clean network rack in a bright Broward County, Florida office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">What We Design & Install</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A complete network — planned, installed, secured and documented.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((c, i) => (
              <FeatureCard
                key={c.title}
                icon={<c.icon className="w-5 h-5 text-brand-blue" />}
                title={c.title}
                description={c.description}
                index={i % 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* VoIP readiness callout */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-heading font-bold text-white mb-4">
            A Network That&apos;s Ready for Voice
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Most &ldquo;phone problems&rdquo; are really network problems. We build VoIP readiness into every install — proper switching, PoE for your phones, VLANs to separate voice traffic, and QoS to keep calls clear when the network is busy. The result is a phone system that simply works.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
            {["PoE for phones, cameras & APs", "Voice VLAN separation", "QoS call prioritization", "Documented & labeled"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-green" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-10 text-center">
            Network Setup — Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <div key={f.q} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Dropped Calls or Dead Wi-Fi Zones? Let's Fix the Network."
        subheading="We'll assess your current setup and design a network that's ready for voice, video and growth."
        primaryCta={{ label: "Schedule a Free Assessment", href: "/contact" }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: COMPANY.phoneHref }}
        variant="dark"
      />
    </>
  );
}
