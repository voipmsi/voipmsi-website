import type { Metadata } from "next";
import { Phone, Network, Camera } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Our Services — VoIP, Structured Cabling & Security Cameras",
  description:
    "VoIP Made Simple Inc. provides enterprise VoIP phone systems, professional structured cabling, and IP security camera systems for South Florida businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        badge="What We Do"
        headline="Complete Business Communication Solutions"
        subheadline="From the phone on your desk to the wire in the wall to the camera above the door — we design, install, and support the technology that keeps your business connected and secure."
        primaryCta={{ label: "Request a Free Quote", href: "/contact" }}
        size="md"
      />

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Phone className="w-6 h-6 text-brand-blue" />}
              title="VoIP Phone Systems"
              description="Enterprise-grade on-premise PBX systems and hosted cloud VoIP from the brands you trust. We deploy Grandstream UCM, Yealink, Cisco, and all major hosted providers. Scalable from 5 users to 3,000+."
              href="/services/voip-systems"
              index={0}
            />
            <ServiceCard
              icon={<Network className="w-6 h-6 text-brand-blue" />}
              title="Structured Cabling"
              description="Professional Cat6/Cat6a, fiber optic, and data network installation. Every drop tested, certified, and documented. The backbone behind every reliable communication system."
              href="/services/structured-cabling"
              index={1}
            />
            <ServiceCard
              icon={<Camera className="w-6 h-6 text-brand-blue" />}
              title="Security Cameras"
              description="State-of-the-art IP camera systems with 4K clarity, AI analytics, NVR recording, cloud backup, and 24/7 remote access from any device. Built for business, not consumers."
              href="/services/security-cameras"
              index={2}
            />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need Help Deciding What's Right for Your Business?"
        subheading="We'll assess your needs and recommend exactly what fits — with no pressure and no upsell."
        primaryCta={{ label: "Request a Free Consultation", href: "/contact" }}
        variant="dark"
      />
    </>
  );
}
