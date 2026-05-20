import type { Metadata } from "next";
import { Heart, Eye, Star, Users, Award, Clock, Headphones, CheckCircle } from "lucide-react";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Us — 30+ Years of Telecom Expertise",
  description:
    "VoIP Made Simple Inc. has served South Florida businesses for 30+ years, evolving from traditional telecom to modern VoIP PBX and cloud solutions. Learn our story.",
};

const VALUES = [
  {
    icon: CheckCircle,
    title: "Honesty",
    description:
      "We recommend what's right for you, not what's easiest to sell. If a simpler, less expensive option fits your needs, that's what you'll hear from us.",
  },
  {
    icon: Award,
    title: "Expertise",
    description:
      "Three decades of telecom isn't a tagline — it's our foundation. We've seen every type of deployment and learned from every edge case.",
  },
  {
    icon: Users,
    title: "Accountability",
    description:
      "We answer the phone. We show up. We follow through. When something needs attention after the install, we're still here.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description:
      "Your success is the only metric that matters. We measure our performance by how well your communications work, not by how many seats we sold.",
  },
];

const MILESTONES = [
  {
    year: "1990s",
    title: "Traditional Telecom Roots",
    description:
      "We began in the era of key systems, analog lines, and punch-down blocks — installing and maintaining phone infrastructure for South Florida businesses.",
  },
  {
    year: "2000s",
    title: "The Digital Transition",
    description:
      "We embraced digital PBX and early VoIP technology early, building the technical expertise that would define our future.",
  },
  {
    year: "2010s",
    title: "Full VoIP & Cloud",
    description:
      "As cloud VoIP matured, we became authorized partners for the industry's top platforms and hardware manufacturers, giving clients the full spectrum of options.",
  },
  {
    year: "Today",
    title: "Complete Telecom Solutions",
    description:
      "Today we deliver end-to-end communication solutions: VoIP systems (cloud and premise), structured cabling, and security infrastructure — under one roof.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        badge="Our Story"
        headline="Three Decades of Telecom. One Mission: Make It Simple."
        subheadline="We've watched the industry transform — from copper wires and PBX closets to cloud-hosted, AI-powered communications. Through every shift, our purpose has stayed the same: help businesses communicate better, without the complexity."
        size="md"
      />

      {/* Our Story */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Built on Experience. Driven by What&apos;s Next.
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  VoIP Made Simple Inc. didn&apos;t start as a VoIP company. We started in the era of traditional telecom — back when &ldquo;phone systems&rdquo; meant punch-down blocks, key systems, and analog lines snaking through office ceilings. For more than 30 years, we&apos;ve installed, maintained, and modernized communication systems for businesses across South Florida and beyond.
                </p>
                <p>
                  When VoIP arrived, we didn&apos;t just adapt — we embraced it. We saw early that the future of business communications would be defined by flexibility, mobility, and the cloud. Today, we deliver the best of both worlds: rock-solid on-premise PBX systems for businesses that need control, and powerful hosted cloud solutions for those who need agility.
                </p>
                <p>
                  What hasn&apos;t changed in 30+ years is our approach. We listen first. We recommend honestly. We install professionally. And we stand behind every system we deploy — because in this business, your dial tone is our reputation.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-white">{i + 1}</span>
                    </div>
                    {i < MILESTONES.length - 1 && (
                      <div className="w-px flex-1 bg-gray-200 mt-2 min-h-[24px]" />
                    )}
                  </div>
                  <div className="pb-6">
                    <span className="text-xs font-semibold text-brand-green uppercase tracking-wide">
                      {m.year}
                    </span>
                    <h3 className="font-semibold text-gray-900 mt-1 mb-1">{m.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {/* Mission */}
            <div className="lg:col-span-1 p-8 rounded-2xl bg-brand-blue text-white">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Our Mission</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                To simplify business communications by pairing decades of telecom expertise with the best modern technology — and delivering it with the kind of personal service that big providers can&apos;t match.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-brand-green text-white">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Our Vision</h3>
              <p className="text-green-100 text-sm leading-relaxed">
                To be the trusted communications partner for every business that values reliability, honesty, and lasting relationships over the cheapest quote of the month.
              </p>
            </div>

            {/* Commitment */}
            <div className="p-8 rounded-2xl bg-brand-navy text-white">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <Headphones className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Our Commitment</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Every client gets the same level of attention whether they have 5 phones or 500. We show up, we answer, and we make sure your system works the way you need it to.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <FeatureCard
                key={v.title}
                icon={<v.icon className="w-5 h-5 text-brand-blue" />}
                title={v.title}
                description={v.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Clock, value: "30+", label: "Years in Telecom" },
              { icon: Users, value: "1,000+", label: "Businesses Served" },
              { icon: Award, value: "20+", label: "Authorized Partners" },
              { icon: Headphones, value: "24/7", label: "Support Available" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <stat.icon className="w-6 h-6 text-brand-green mb-2" />
                <p className="text-4xl font-heading font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Let's Modernize Your Phone System the Right Way."
        subheading="No pressure, no jargon — just an honest conversation about what your business needs."
        primaryCta={{ label: "Get Your Free Quote", href: "/contact" }}
        secondaryCta={{ label: "View Our Services", href: "/services" }}
        variant="dark"
      />
    </>
  );
}
