import type { Metadata } from "next";
import Link from "next/link";
import {
  Wifi,
  Cable,
  Gauge,
  ShieldCheck,
  Building2,
  Network,
  RefreshCw,
  MapPinned,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import CTABanner from "@/components/CTABanner";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { COMPANY, SERVING_LINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Business Internet & ISP Solutions in Broward County",
  description:
    "Independent business internet consultant in Broward County. We help you compare fiber, cable, broadband, dedicated internet and backup options, then order and coordinate installation through our carrier relationships. Lauderhill, FL.",
  alternates: { canonical: "/services/business-internet" },
};

const OPTIONS = [
  { icon: Cable, title: "Fiber Internet", description: "Symmetrical speeds and low latency for VoIP, cloud apps and large file transfers — where fiber is available to your building." },
  { icon: Wifi, title: "Business Broadband & Cable", description: "Cost-effective cable and broadband connections for offices that need solid speed without a dedicated-fiber budget." },
  { icon: Gauge, title: "Dedicated Internet Access", description: "Guaranteed bandwidth with an SLA — no sharing with the neighbors. Ideal for call-heavy and compliance-sensitive offices." },
  { icon: Wifi, title: "Fixed Wireless", description: "A fast-to-install alternative where wired options are limited or as a path to connectivity at a new location." },
  { icon: RefreshCw, title: "Backup & Failover Internet", description: "A second connection on a different network so your phones and point-of-sale keep working if the primary line goes down." },
  { icon: MapPinned, title: "Multi-Location Internet", description: "Consistent service and a single point of contact across every office, branch or new location you operate." },
];

const HELP = [
  "Check which providers and speeds actually reach your specific address",
  "Compare fiber, cable, broadband, dedicated and fixed-wireless options side by side",
  "Right-size bandwidth to your number of users, VoIP lines and cloud apps",
  "Evaluate contract terms, pricing and early-termination exposure",
  "Plan static IP requirements for VPNs, servers, cameras and on-premise PBX",
  "Design failover so a single outage doesn't take down your phones",
  "Place the order and coordinate the install date with the carrier",
  "Make sure the hand-off works with your firewall, network and phone system",
];

const FAQS = [
  {
    q: "Are you an internet provider?",
    a: "No — and that's the point. We are not the carrier. We're an independent local consultant who helps you evaluate, order and coordinate business internet through our carrier relationships, then make sure it integrates with your network and phone system. Because we don't own the network, our recommendation is based on what actually fits your business.",
  },
  {
    q: "How do I know which internet is available at my address?",
    a: "Availability changes block by block in Broward County. Tell us your exact address and we'll check which providers, technologies (fiber, cable, fixed wireless) and speeds actually serve your building — not just what's advertised in the area.",
  },
  {
    q: "Do I really need backup internet?",
    a: "If your phones, payments or booking system run over the internet, an outage means lost revenue. We design failover using a second connection on a different network so your VoIP and critical systems stay up. For many offices it's inexpensive insurance.",
  },
  {
    q: "Can you help with internet for a new office or second location?",
    a: "Yes. Ordering business internet can take weeks, so we get the circuit started early and coordinate it with your cabling, network and phone-system cutover. See our office moves and buildouts process, or call us to start.",
  },
];

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Business Internet & ISP Consulting",
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
    "Independent business internet consulting: compare and select fiber, cable, broadband, dedicated and backup internet, then coordinate ordering and installation.",
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://voipmsi.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://voipmsi.com/services" },
    { "@type": "ListItem", position: 3, name: "Business Internet & ISP Solutions", item: "https://voipmsi.com/services/business-internet" },
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

export default function BusinessInternetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <Hero
        badge="Business Internet & ISP Solutions"
        headline="Business Internet & ISP Solutions in Broward County"
        subheadline="Choosing a business internet provider shouldn't mean guessing. As your independent local consultant, we compare fiber, cable, broadband, dedicated and backup options for your exact address — then order and coordinate it for you."
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
                An Independent Guide Through the Internet Maze
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Every carrier will tell you their service is the fastest and most reliable. We don&apos;t sell you a network — we help you choose one. After more than 30 years connecting South Florida businesses, we know which technologies actually perform at which addresses, where the contracts hide their teeth, and how much bandwidth your business really needs.
                </p>
                <p>
                  We help you evaluate availability, speed, reliability, contract terms, static IP needs, failover options and budget — then we place the order and coordinate installation through our carrier relationships, so you have one local point of contact instead of a 1-800 number.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Important:</strong> VoIP Made Simple Inc. is not the internet carrier. We help clients evaluate, order and coordinate service through our carrier relationships.
                </p>
              </div>
            </div>
            <ImagePlaceholder
              alt="VoIP Made Simple consultant reviewing business internet provider options with a Broward County business owner"
              label="Business internet consultation"
              fileHint="business-internet-consult.webp"
              ratio="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Options grid */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Connectivity Options We Compare</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The right answer depends on your address, your applications and your tolerance for downtime. Here&apos;s what we put on the table.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OPTIONS.map((o, i) => (
              <FeatureCard
                key={o.title}
                icon={<o.icon className="w-5 h-5 text-brand-blue" />}
                title={o.title}
                description={o.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">How We Help You Choose</h2>
              <ul className="grid grid-cols-1 gap-2.5">
                {HELP.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <FeatureBadge icon={<ShieldCheck className="w-4 h-4 text-brand-green" />} text="Static IP planning" />
                <FeatureBadge icon={<Network className="w-4 h-4 text-brand-green" />} text="Firewall hand-off" />
                <FeatureBadge icon={<Building2 className="w-4 h-4 text-brand-green" />} text="Multi-location" />
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-brand-navy text-white">
              <h3 className="text-xl font-heading font-bold mb-3">Internet that&apos;s ready for VoIP</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Slow or jittery internet is the number-one cause of dropped calls and choppy audio. Because we also design your network and install your phone system, we size and configure your connection specifically for clear, reliable VoIP — not just a fast speed-test number.
              </p>
              <Link href="/services/network-setup" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-white transition-colors">
                See how we set up your network <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-10 text-center">
            Business Internet — Frequently Asked Questions
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
        heading="Not Sure Which Internet Your Office Should Have?"
        subheading="We'll check what's available at your address and compare your real options — free."
        primaryCta={{ label: "Schedule a Free Assessment", href: "/contact" }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: COMPANY.phoneHref }}
        variant="dark"
      />
    </>
  );
}

function FeatureBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-green/10 border border-brand-green/20 text-sm font-medium text-gray-700">
      {icon}
      {text}
    </div>
  );
}
