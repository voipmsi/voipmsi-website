import type { Metadata } from "next";
import { Phone, Network, Camera, Wifi, Cable, Boxes } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import { COMPANY, SERVING_LINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services — Internet, Networks, Cabling, VoIP & Security",
  description:
    "VoIP Made Simple Inc. is your one local partner for business internet, network design, structured cabling, VoIP phone systems, security cameras, and office moves across Broward County.",
};

const SERVICES = [
  {
    icon: <Wifi className="w-6 h-6 text-brand-blue" />,
    title: "Business Internet & ISP Solutions",
    description:
      "Independent help comparing fiber, cable, broadband, dedicated and backup internet for your exact address — then ordering and coordinating it through our carrier relationships.",
    href: "/services/business-internet",
  },
  {
    icon: <Network className="w-6 h-6 text-brand-blue" />,
    title: "Network Setup & Wi-Fi",
    description:
      "Routers, firewalls, managed switches, VLANs, business Wi-Fi, racks and QoS — designed, installed and documented, and tuned for clear, reliable VoIP.",
    href: "/services/network-setup",
  },
  {
    icon: <Cable className="w-6 h-6 text-brand-blue" />,
    title: "Structured Cabling",
    description:
      "Professional Cat6/Cat6a and fiber installation. Every drop terminated, tested, certified and labeled — the backbone behind every reliable system.",
    href: "/services/structured-cabling",
  },
  {
    icon: <Phone className="w-6 h-6 text-brand-blue" />,
    title: "Business VoIP Phone Systems",
    description:
      "Hosted cloud VoIP, on-premise IP PBX, or hybrid — we help you choose, then install and support Grandstream, Yealink, Cisco and major hosted providers.",
    href: "/services/voip-systems",
  },
  {
    icon: <Camera className="w-6 h-6 text-brand-blue" />,
    title: "Security Camera Systems",
    description:
      "Professional IP camera systems with remote access — installed with the same clean cabling and labeling standard as the rest of your network.",
    href: "/services/security-cameras",
  },
  {
    icon: <Boxes className="w-6 h-6 text-brand-blue" />,
    title: "Office Moves & Buildouts",
    description:
      "Internet, cabling, network, Wi-Fi, phones, number porting and cameras — coordinated into one cutover plan so you open without downtime.",
    href: "/services/office-moves",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        badge="What We Do"
        headline="One Local Partner — From the Internet to the Phone on Your Desk"
        subheadline="We design, install and support the complete communication infrastructure that keeps your internet, network, Wi-Fi, phones and connected devices working as one."
        primaryCta={{ label: "Schedule a Free Assessment", href: "/contact" }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: COMPANY.phoneHref }}
        note={SERVING_LINE}
        size="md"
      />

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <ServiceCard
                key={s.href}
                icon={s.icon}
                title={s.title}
                description={s.description}
                href={s.href}
                index={i % 3}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need Help Deciding What's Right for Your Business?"
        subheading="We'll assess your needs and recommend exactly what fits — with no pressure and no upsell."
        primaryCta={{ label: "Schedule a Free Assessment", href: "/contact" }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: COMPANY.phoneHref }}
        variant="dark"
      />
    </>
  );
}
