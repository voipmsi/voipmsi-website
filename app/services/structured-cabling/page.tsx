import type { Metadata } from "next";
import { Search, PenTool, Wrench, FileText, CheckCircle, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import CTABanner from "@/components/CTABanner";
import { COMPANY, SERVING_LINE, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Structured Cabling & Data Cabling Contractor — Broward County",
  description:
    "Structured cabling contractor in Broward County: Cat6, Cat6a, fiber, racks, patch panels and certified testing for Lauderhill, Fort Lauderdale and South Florida businesses. Free site survey. Call (954) 975-4899.",
  alternates: { canonical: "/services/structured-cabling" },
};

const CABLING_FAQS = [
  {
    q: "Do you offer a free cabling site survey?",
    a: "Yes. Before we quote anything, we walk your space, measure the runs, count the drops and identify obstacles — so there are no surprises on installation day. The site survey is free and there's no obligation.",
  },
  {
    q: "What areas do you serve for structured cabling?",
    a: "We're based in Lauderhill and install structured cabling throughout Broward County — Fort Lauderdale, Plantation, Sunrise, Tamarac, Davie, Coral Springs, Oakland Park and beyond. Being local means we're on-site fast and we know the buildings.",
  },
  {
    q: "Cat6 or Cat6a — which do we need?",
    a: "It depends on your bandwidth needs and how long you want the cabling to last. Cat6 handles gigabit easily for most offices; Cat6a supports 10-gigabit over longer runs and is a smart future-proofing choice for new build-outs. We'll recommend based on your actual usage and budget.",
  },
  {
    q: "Will the work be tested and documented?",
    a: "Always. Every drop is tested and certified, labeled at both ends, and delivered with as-built documentation and a test report. The next technician who touches your network — including us — will know exactly what's where.",
  },
];

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Structured Cabling & Data Cabling Installation",
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
    "Professional structured cabling: Cat6/Cat6a copper, fiber optic, network racks, patch panels, wireless access point cabling, certification and documentation.",
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://voipmsi.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://voipmsi.com/services" },
    { "@type": "ListItem", position: 3, name: "Structured Cabling", item: "https://voipmsi.com/services/structured-cabling" },
  ],
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CABLING_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const INSTALLATIONS = [
  "Cat5e, Cat6, Cat6a, and Cat7 copper cabling",
  "Single-mode and multi-mode fiber optic",
  "Network rack and server room build-outs",
  "Patch panel termination and cable management",
  "Wireless Access Point cabling",
  "Coaxial and AV cabling",
  "Fluke certification and full documentation",
  "Plenum-rated cable where required",
];

const BENEFITS = [
  {
    icon: CheckCircle,
    title: "Certified Installations",
    description:
      "Every drop tested with Fluke certification equipment. You receive a full test report and as-built documentation — not just a handshake.",
  },
  {
    icon: PenTool,
    title: "Engineered Design",
    description:
      "We don't just pull cable — we design it. Port counts, run lengths, labeling schemas, and riser diagrams before a single nail goes in the wall.",
  },
  {
    icon: Wrench,
    title: "Clean Professional Work",
    description:
      "Every run labeled at both ends. Cable management that looks as good in the rack as it does on the report. We take pride in the craft.",
  },
  {
    icon: FileText,
    title: "Full Documentation",
    description:
      "As-built drawings, port labeling maps, and test reports delivered at project close. The next tech who touches your network will thank you.",
  },
];

const PROCESS = [
  {
    icon: Search,
    step: "01",
    title: "Site Survey",
    description:
      "We walk the space, measure the runs, and identify the obstacles before we ever quote. No surprises on installation day.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design & Engineering",
    description:
      "Engineered drawings, port counts, and a clean labeling schema you'll actually be able to read in 5 years.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Professional Installation",
    description:
      "Clean, professional cable pulls. Plenum-rated where required. Every drop labeled at both ends during installation.",
  },
  {
    icon: FileText,
    step: "04",
    title: "Test, Certify & Document",
    description:
      "Every drop tested with a Fluke certifier. You receive a full test report and complete as-built documentation.",
  },
];

export default function StructuredCablingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <Hero
        badge="Structured Cabling — Data Cabling Contractor"
        headline="Structured Cabling Done Right — The First Time."
        subheadline="Your network is only as reliable as the cable inside the wall. We design, install and certify Cat6/Cat6a and fiber cabling built to last — for businesses across Broward County."
        primaryCta={{ label: "Request a Free Site Survey", href: "/contact" }}
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
                Professional Data Network Installation &amp; Management
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  A phone system is only part of the equation. Behind every reliable VoIP deployment, every fast Wi-Fi network, and every security camera feed is a structured cabling system doing the heavy lifting. After three decades of pulling cable, terminating jacks, and certifying drops, we know exactly what it takes to build infrastructure that just works.
                </p>
                <p>
                  Cheap cabling is the most expensive mistake a business can make. We&apos;ve replaced countless networks installed by the lowest bidder — work that failed inspections, caused dropped calls, or simply wore out years before it should have. Our structured cabling installs are built to certification standards and warranted.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">What We Install</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {INSTALLATIONS.map((item) => (
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

      {/* Our Process */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Our 4-Step Process</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every cabling project follows the same disciplined process — whether it&apos;s a 10-drop office or a 500-port enterprise campus.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <div
                key={step.step}
                className="relative p-7 rounded-2xl bg-white border border-gray-100 shadow-sm"
              >
                <div className="text-5xl font-heading font-bold text-gray-100 absolute top-5 right-6 select-none">
                  {step.step}
                </div>
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-heading font-bold text-white mb-4">
            The Cable You Don&apos;t See is the Most Important Infrastructure You Have
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Every VoIP call, every camera stream, every file transfer runs over the cabling in your walls. A properly designed and installed structured cabling system eliminates dropped calls, network outages, and the headaches that come with &ldquo;mystery network problems.&rdquo; We build it right the first time — so you never have to think about it again.
          </p>
        </div>
      </section>

      {/* Service Areas + FAQ */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-brand-green/10 text-brand-green border border-brand-green/20 mb-4">
              <MapPin className="w-3.5 h-3.5" />
              Local Broward Cabling Contractor
            </div>
            <p className="text-gray-600 leading-relaxed">
              Based in Lauderhill, we run and certify structured cabling for businesses across Broward County:
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-5">
              {SERVICE_AREAS.map((c) => (
                <span key={c.slug} className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-600">
                  {c.name}
                </span>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-heading font-bold text-gray-900 mt-16 mb-10 text-center">
            Structured Cabling — Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {CABLING_FAQS.map((f) => (
              <div key={f.q} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Building Out an Office? Renovating? Let's Wire It Right."
        subheading="Request a free site survey and we'll spec out exactly what you need."
        primaryCta={{ label: "Request a Free Site Survey", href: "/contact" }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: COMPANY.phoneHref }}
        variant="dark"
      />
    </>
  );
}
