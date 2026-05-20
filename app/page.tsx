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
} from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import CTABanner from "@/components/CTABanner";
import QuoteForm from "@/components/QuoteForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "voIPmsi — Business VoIP Phone Systems | VoIP Made Simple Inc.",
  description:
    "South Florida's trusted VoIP partner for 30+ years. Enterprise phone systems, structured cabling, and security cameras. Authorized Grandstream distributor. Request a free quote today.",
  openGraph: {
    title: "voIPmsi — VoIP Made Simple Inc.",
    description: "30+ years of telecom expertise. Modern VoIP solutions for South Florida businesses.",
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
    "Business VoIP phone systems, structured cabling, and security cameras for South Florida businesses. 30+ years of telecom experience.",
  areaServed: { "@type": "State", name: "Florida" },
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
        badge="30+ Years of Telecom Expertise"
        headline="From Legacy Telecom to Modern VoIP — Made Simple."
        subheadline="For over 30 years, VoIP Made Simple Inc. has helped businesses across South Florida and beyond stay connected. We've evolved with the industry — so you don't have to figure it out alone."
        primaryCta={{ label: "Request a Free Quote", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
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
              Complete Communication Solutions Under One Roof
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Whether you&apos;re modernizing a single office or rolling out a multi-site enterprise system, we deliver the hardware, infrastructure, and connectivity to keep your business running.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Phone className="w-6 h-6 text-brand-blue" />}
              title="VoIP Phone Systems"
              description="On-premise PBX systems and hosted cloud VoIP solutions from the brands you trust. Scalable, reliable, and built for the way you work today."
              href="/services/voip-systems"
              index={0}
            />
            <ServiceCard
              icon={<Network className="w-6 h-6 text-brand-blue" />}
              title="Structured Cabling"
              description="Professional data network design, installation, and certification. The backbone of every reliable communication system."
              href="/services/structured-cabling"
              index={1}
            />
            <ServiceCard
              icon={<Camera className="w-6 h-6 text-brand-blue" />}
              title="Security Cameras"
              description="Protect your people, property, and assets with state-of-the-art IP surveillance and remote monitoring solutions."
              href="/services/security-cameras"
              index={2}
            />
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

      {/* Quote Form */}
      <section className="bg-brand-dark py-24" id="quote">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Request a Free Quote
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Fill out the form below and one of our specialists will get back to you within one business day with a custom, no-obligation quote.
            </p>
          </div>
          <div className="bg-brand-navy border border-white/10 rounded-2xl p-8">
            <QuoteForm dark />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Simplify Your Business Communications?"
        subheading="Get a no-pressure consultation and a free custom quote within 24 hours."
        primaryCta={{ label: "Request a Free Quote", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
        variant="dark"
      />
    </>
  );
}
