import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Network,
  Camera,
  Award,
  Shield,
  Cloud,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Server,
  Wifi,
  Search,
  GitCompareArrows,
  PencilRuler,
  Wrench,
  AlertTriangle,
} from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import CTABanner from "@/components/CTABanner";
import QuoteForm from "@/components/QuoteForm";
import { COMPANY, SERVING_LINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Business Internet, Networks & VoIP in Broward County | VoIP Made Simple Inc.",
  description:
    "Your local Lauderhill partner for business internet, data networks, structured cabling and VoIP phone systems. Serving Fort Lauderdale and all of Broward County for 30+ years. Schedule a free assessment.",
  openGraph: {
    title: "VoIP Made Simple Inc. — Business Internet, Networks & VoIP",
    description:
      "From the internet connection to the phone on your desk, we make South Florida business communications simple. 30+ years, based in Lauderhill, FL.",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.name,
  alternateName: COMPANY.shortName,
  url: "https://voipmsi.com",
  telephone: COMPANY.phone,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.state,
    postalCode: COMPANY.address.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  description:
    "Local business communications and network company in Lauderhill, FL. Business internet selection, data network design, structured cabling, business VoIP phone systems, and security cameras for South Florida businesses. 30+ years of telecom experience.",
  areaServed: [
    { "@type": "City", name: "Lauderhill" },
    { "@type": "City", name: "Fort Lauderdale" },
    { "@type": "City", name: "Plantation" },
    { "@type": "City", name: "Sunrise" },
    { "@type": "City", name: "Tamarac" },
    { "@type": "AdministrativeArea", name: "Broward County" },
  ],
};

const TESTIMONIALS = [
  {
    quote:
      "voIPmsi replaced our aging key system with a Grandstream UCM and it was seamless. The call quality went from barely acceptable to crystal clear overnight. Their team knew exactly what they were doing.",
    author: "Robert M.",
    title: "Operations Director",
    company: "South Florida Distribution Co.",
  },
  {
    quote:
      "We moved three office locations to hosted cloud VoIP through voIPmsi and the whole process was handled start to finish. No surprises, no downtime. Just a phone system that actually works.",
    author: "Angela T.",
    title: "Office Manager",
    company: "Broward Legal Group",
  },
  {
    quote:
      "The cabling and camera work they did during our office buildout was professional-grade. Everything labeled, everything documented. Two years later and not a single port has given us a problem.",
    author: "Carlos V.",
    title: "IT Manager",
    company: "Atlantic Medical Practice",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <Hero
        badge="30+ Years in Telecom · Based in Lauderhill, FL"
        headline="Your Local Partner for Business Internet, Networks and VoIP."
        subheadline="VoIP Made Simple Inc. helps South Florida businesses select the right internet provider, build reliable data networks, install structured cabling, and choose the right business phone system — hosted, on-premise, or hybrid."
        primaryCta={{ label: "Schedule a Free Assessment", href: "/contact" }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: COMPANY.phoneHref }}
        note={SERVING_LINE}
      />

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-6">
            Authorized Partner &amp; Distributor
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {[
              { name: "Grandstream", color: "#E8401C" },
              { name: "Yealink", color: "#0078D4" },
              { name: "Cisco", color: "#1BA0D7" },
              { name: "RingCentral", color: "#F97316" },
              { name: "Vonage", color: "#9333EA" },
              { name: "AT&T", color: "#00A8E0" },
            ].map((p) => (
              <div key={p.name} className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-100">
                <span className="text-sm font-bold" style={{ color: p.color }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              One Local Partner — From the Internet to the Phone on Your Desk
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We&apos;re not just selling phones. We design and install the complete communication infrastructure that keeps your internet, network, Wi-Fi, phones, and connected devices working as one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Wifi className="w-6 h-6 text-brand-blue" />}
              title="Business Internet & ISP Solutions"
              description="We help you compare fiber, cable, broadband, dedicated internet and backup options — then order and coordinate the right service through our carrier relationships."
              href="/services/business-internet"
              index={0}
            />
            <ServiceCard
              icon={<Network className="w-6 h-6 text-brand-blue" />}
              title="Network Setup & Structured Cabling"
              description="Switches, routers, Wi-Fi, VLANs, racks, patch panels and Cat6/Cat6a and fiber cabling — designed, installed, labeled and documented."
              href="/services/network-setup"
              index={1}
            />
            <ServiceCard
              icon={<Phone className="w-6 h-6 text-brand-blue" />}
              title="Business VoIP Phone Systems"
              description="Hosted cloud VoIP, on-premise IP PBX, or hybrid — we help you choose, then install and support Grandstream, Yealink, Cisco and more."
              href="/services/voip-systems"
              index={2}
            />
            <ServiceCard
              icon={<Camera className="w-6 h-6 text-brand-blue" />}
              title="Security Camera Systems"
              description="Professional IP camera systems with remote access — installed with the same clean cabling and labeling standard as the rest of your network."
              href="/services/security-cameras"
              index={3}
            />
          </div>
        </div>
      </section>

      {/* One Local Partner — Process */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              One Local Partner From Internet to Phones
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Most businesses juggle a separate internet company, cabling crew, network person and phone vendor. We bring it all together — one team, one plan, one point of accountability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Search, step: "01", title: "Assess the Business", description: "We learn how your business works, what's failing today, and what you actually need — on site, in person." },
              { icon: GitCompareArrows, step: "02", title: "Compare Options", description: "We compare internet providers and technology options — fiber, cable, hosted vs. on-premise — with honest trade-offs." },
              { icon: PencilRuler, step: "03", title: "Design the System", description: "We design the network and communication system: cabling, switches, Wi-Fi, phones and cameras as one cohesive plan." },
              { icon: Wrench, step: "04", title: "Install & Support", description: "We install, configure, test, train your team — and stay your local point of contact for ongoing service." },
            ].map((s, i) => (
              <div key={s.step} className="relative p-7 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-5xl font-heading font-bold text-gray-100 absolute top-5 right-6 select-none">{s.step}</div>
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
                {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gray-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              Sound Familiar?
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              The Problems We Solve Every Day
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Internet is too slow or unreliable",
              "Phone calls keep dropping",
              "Wi-Fi coverage is poor in parts of the office",
              "Office wiring is outdated or disorganized",
              "The business is moving or expanding to a new location",
              "The current phone bill is too expensive",
              "Not sure whether to choose cloud or on-premise VoIP",
              "Different vendors blame each other when something fails",
            ].map((problem) => (
              <div key={problem} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100">
                <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{problem}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-gray-700 font-medium mt-10 max-w-2xl mx-auto">
            We bring the internet, network, cabling and phone system together so everything works as one complete solution.
          </p>
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-dark text-white font-semibold text-sm transition-all shadow-lg shadow-brand-green/20 hover:-translate-y-0.5"
            >
              Schedule a Free Assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-brand-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Three Decades of Telecom. One Trusted Partner.
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              We&apos;ve been in telecom since before VoIP was a buzzword. That experience means fewer surprises and smarter recommendations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <FeatureCard
              icon={<Award className="w-5 h-5 text-brand-green" />}
              title="30+ Years Experience"
              description="We've been in telecom since long before VoIP was a buzzword. That depth of experience means fewer surprises and smarter recommendations for your business."
              dark
              index={0}
            />
            <FeatureCard
              icon={<Shield className="w-5 h-5 text-brand-green" />}
              title="Certified Partners"
              description="As an authorized Grandstream distributor and reseller for Yealink, Cisco, and every major carrier, we give you direct access to the right solutions at the right price."
              dark
              index={1}
            />
            <FeatureCard
              icon={<Server className="w-5 h-5 text-brand-green" />}
              title="On-Premise & Cloud"
              description="Most companies push you toward whatever they sell. We offer both on-premise and cloud solutions, then recommend what genuinely fits your business."
              dark
              index={2}
            />
            <FeatureCard
              icon={<MapPin className="w-5 h-5 text-brand-green" />}
              title="Local Florida Support"
              description="Based in Lauderhill, FL, with real technicians, real phone numbers, and real accountability. We answer the phone when you need us."
              dark
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Cloud vs On-Premise */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Cloud or On-Premise? We Do Both — And We&apos;ll Help You Choose.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-brand-navy text-white border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-brand-green/15 flex items-center justify-center mb-5">
                <Server className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">On-Premise PBX</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Full control. Predictable long-term costs. Ideal for businesses with strong internal IT, compliance requirements, or existing infrastructure investments. We deploy and support Grandstream UCM PBX systems built to scale from 50 to 3,000+ users.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Full system ownership — no monthly per-seat fees",
                  "Deep customization and integration options",
                  "Ideal for compliance-sensitive environments",
                  "Grandstream UCM authorized deployment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/services/voip-systems" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-brand-green hover:text-white transition-colors">
                Explore PBX Systems <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-brand-blue/5 border border-brand-blue/20">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5">
                <Cloud className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">Hosted Cloud VoIP</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                No hardware. No maintenance. Just dial tone, anywhere. Perfect for remote teams, multi-site operations, and businesses that want enterprise features without the upfront investment. We resell and support every major hosted provider in the industry.
              </p>
              <ul className="space-y-2.5">
                {[
                  "No upfront hardware investment",
                  "Scales up or down in minutes",
                  "Works from office, home, or mobile",
                  "Includes RingCentral, Vonage, Nextiva & more",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/services/voip-systems" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors">
                Explore Cloud VoIP <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
              Not sure which is right? Talk to an expert →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "30+", label: "Years in Telecom" },
              { value: "1,000+", label: "Businesses Served" },
              { value: "20+", label: "Carrier & Hardware Partners" },
              { value: "24/7", label: "Support Available" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-heading font-bold text-brand-blue mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-7 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.author}</p>
                  <p className="text-xs text-gray-500">{t.title} — {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Form */}
      <section className="bg-brand-dark py-24" id="quote">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Schedule a Free Assessment
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Tell us about your business and what&apos;s not working. One of our local specialists will reach out within one business day — no pressure, no obligation.
            </p>
          </div>
          <div className="bg-brand-navy border border-white/10 rounded-2xl p-8">
            <QuoteForm dark formType="Free Assessment (Homepage)" />
          </div>
        </div>
      </section>

      <CTABanner
        heading="From the Internet Connection to the Phone on Your Desk."
        subheading="One local partner makes your business communications simple. Get a free, no-pressure assessment."
        primaryCta={{ label: "Schedule a Free Assessment", href: "/contact" }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: COMPANY.phoneHref }}
        variant="dark"
      />
    </>
  );
}
