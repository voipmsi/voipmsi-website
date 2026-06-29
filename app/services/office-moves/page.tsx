import type { Metadata } from "next";
import Link from "next/link";
import {
  Boxes,
  Wifi,
  Cable,
  Network,
  Phone,
  Camera,
  CalendarClock,
  PhoneForwarded,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import { COMPANY, SERVING_LINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Office Moves & New Office Buildouts — Telecom Installation",
  description:
    "Moving offices or opening a second location in Broward County? We coordinate internet, cabling, network, Wi-Fi, phones, number porting, cameras and cutover so you open without downtime. Call (954) 975-4899.",
  alternates: { canonical: "/services/office-moves" },
};

const COORDINATE = [
  { icon: Cable, title: "Internet Ordering", description: "We start the internet circuit early — the longest-lead item in any move — and coordinate the install date with the carrier." },
  { icon: Cable, title: "Structured Cabling", description: "New Cat6/Cat6a and fiber runs, terminated, tested and labeled before your furniture and equipment arrive." },
  { icon: Network, title: "Network Equipment", description: "Firewall, switches and racks configured and mounted so the network is live the day you move in." },
  { icon: Wifi, title: "Wi-Fi Coverage", description: "Access points placed and tuned for the new floor plan — full coverage from day one, no dead zones." },
  { icon: Phone, title: "Phone Systems", description: "Hosted or on-premise VoIP installed, programmed and tested so phones ring the moment you open." },
  { icon: PhoneForwarded, title: "Number Porting", description: "We port your existing numbers so customers reach you without interruption — carefully scheduled around your cutover." },
  { icon: Camera, title: "Security Cameras", description: "Cameras cabled and installed during the build-out, while walls and pathways are still open." },
  { icon: CalendarClock, title: "Cutover Planning", description: "A clear timeline that sequences every dependency so the old office winds down as the new one comes up." },
];

const SCENARIOS = [
  "Relocating to a new office",
  "Opening a second (or third) location",
  "Building out raw or renovated space",
  "Expanding into an adjacent suite",
  "Consolidating multiple offices into one",
];

const FAQS = [
  {
    q: "How far in advance should we contact you about a move?",
    a: "As early as possible — ideally 6–8 weeks out. Business internet is the long pole: ordering and installing a new circuit can take weeks, and everything else (cabling, network, phones) sequences around it. The earlier we start, the smoother the cutover.",
  },
  {
    q: "Can you keep our phone numbers when we move?",
    a: "Yes. We port your existing numbers to your new system and schedule the port around your cutover so there's no gap in service. Customers keep reaching you on the same numbers.",
  },
  {
    q: "Will there be downtime during the move?",
    a: "Our goal is zero downtime. We get the new location fully built and tested before cutover, then sequence the switch so the new office is live before the old one goes dark. A clear cutover plan is the difference between a smooth move and a chaotic one.",
  },
  {
    q: "Do we have to manage all the different vendors?",
    a: "No — that's the point. Instead of juggling an internet company, a cabling crew, a network person and a phone vendor, you work with one local team that coordinates all of it and owns the result.",
  },
];

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Office Move & New Office Buildout Telecom Installation",
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
    "Coordinated office-move and new-office-buildout telecom installation: internet ordering, cabling, network, Wi-Fi, phones, number porting, security cameras and cutover planning.",
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://voipmsi.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://voipmsi.com/services" },
    { "@type": "ListItem", position: 3, name: "Office Moves & New Office Buildouts", item: "https://voipmsi.com/services/office-moves" },
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

export default function OfficeMovesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <Hero
        badge="Office Moves & New Office Buildouts"
        headline="Moving or Opening a New Office? We Handle the Technology."
        subheadline="Internet, cabling, network, Wi-Fi, phones, number porting and cameras — coordinated into one cutover plan so you open on day one without downtime or finger-pointing between vendors."
        primaryCta={{ label: "Schedule a Free Assessment", href: "/contact" }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: COMPANY.phoneHref }}
        note={SERVING_LINE}
        size="md"
      />

      {/* Intro */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-6">
            <Boxes className="w-7 h-7 text-brand-blue" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            A Move Is the Worst Time for a Surprise
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            An office move touches everything at once: the internet has to be ordered weeks ahead, the cabling has to go in before the furniture, the network and phones have to be live the moment you walk in, and your numbers have to follow you. Miss one dependency and opening day becomes a scramble. We coordinate the whole sequence so it doesn&apos;t.
          </p>
        </div>
      </section>

      {/* What we coordinate */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">What We Coordinate</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              One team, one plan, one point of accountability for every moving part.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {COORDINATE.map((c) => (
              <div key={c.title} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4">
                  <c.icon className="w-5 h-5 text-brand-green" />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">We Handle Every Kind of Move</h2>
              <ul className="space-y-3">
                {SCENARIOS.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/services/network-setup" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-mid transition-colors">
                  See how we design the network <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-brand-navy text-white">
              <CalendarClock className="w-8 h-8 text-brand-green mb-4" />
              <h3 className="text-xl font-heading font-bold mb-3">Start Early, Move Smoothly</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                The single biggest factor in a clean move is lead time. Reach out as soon as you sign the lease — we&apos;ll map the timeline, order the long-lead items first, and keep every vendor in sync to your opening date.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-white transition-colors">
                Plan your move with us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-10 text-center">
            Office Moves — Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <div key={f.q} className="p-6 rounded-2xl bg-white border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Signed a New Lease? Let's Plan the Cutover."
        subheading="The earlier we start, the smoother your opening day. Get a free move assessment."
        primaryCta={{ label: "Schedule a Free Assessment", href: "/contact" }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: COMPANY.phoneHref }}
        variant="dark"
      />
    </>
  );
}
