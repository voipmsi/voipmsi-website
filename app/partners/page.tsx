import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PartnerTicker from "@/components/PartnerTicker";
import CTABanner from "@/components/CTABanner";
import { PARTNERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Partners — Grandstream, Yealink, Cisco, RingCentral & More",
  description:
    "VoIP Made Simple Inc. is an authorized partner for Grandstream, Yealink, Cisco, RingCentral, Vonage, Nextiva, AT&T, Verizon Business, and 13+ industry-leading brands.",
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  hardware:
    "We carry and deploy the industry's most trusted IP phones and PBX hardware. As an authorized Grandstream distributor and reseller for Yealink and Cisco, we give you factory-direct pricing and certified support.",
  hosted:
    "We're agnostic when it comes to hosted VoIP. We work with every major UCaaS provider so we can recommend what genuinely fits your team — not just the platform we're paid the most to push.",
  carrier:
    "From SIP trunking to dedicated internet circuits, we've built relationships with every major carrier serving South Florida and beyond so we can negotiate the right service at the right price for your business.",
};

export default function PartnersPage() {
  return (
    <>
      <Hero
        badge="Our Partners"
        headline="Powered by the Industry's Most Trusted Names."
        subheadline="As an authorized partner, distributor, and reseller for the biggest names in telecom, we don't just sell technology — we connect you with the right solution from the right provider."
        size="md"
      />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-5">
            Why Partnerships Matter
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            No single carrier or hardware brand is the right fit for every business. That&apos;s why we&apos;ve spent three decades building relationships with the industry&apos;s leading manufacturers and service providers. When you work with VoIP Made Simple Inc., you get unbiased recommendations from a partner who has direct access to all of them.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you need premium hardware from Grandstream, Yealink, or Cisco — hosted VoIP from RingCentral, Vonage, or Nextiva — or carrier services from AT&T, Verizon Business, Comcast, or Zayo — we&apos;ll match you with the right solution and stand by you through the entire deployment.
          </p>
        </div>
      </section>

      {/* Ticker */}
      <section className="bg-gray-50 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="text-2xl font-heading font-bold text-gray-900 text-center mb-2">
            Our Partner Ecosystem
          </h2>
          <p className="text-sm text-gray-400 text-center">13+ authorized partnerships across hardware, hosted VoIP, and carrier services</p>
        </div>
        <div className="pause-on-hover">
          <PartnerTicker />
        </div>
      </section>

      {/* Partner Categories */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Partners by Category
            </h2>
          </div>

          <div className="space-y-16">
            {/* Hardware */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-heading font-bold text-gray-900">Hardware Partners</h3>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-brand-green/10 text-brand-green">
                  Authorized Distributor / Reseller
                </span>
              </div>
              <p className="text-gray-500 mb-8 max-w-2xl">{CATEGORY_DESCRIPTIONS.hardware}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {PARTNERS.hardware.map((p) => (
                  <div
                    key={p.name}
                    className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-heading font-bold" style={{ color: p.color }}>
                        {p.name}
                      </span>
                      <span className="px-2.5 py-1 text-xs font-medium bg-brand-green/10 text-brand-green rounded-full">
                        {p.role}
                      </span>
                    </div>
                    {p.name === "Grandstream" && (
                      <p className="text-sm text-gray-500">
                        IP PBX systems (UCM series), IP phones (GRP, GXP series), video conferencing, and unified communications.
                      </p>
                    )}
                    {p.name === "Yealink" && (
                      <p className="text-sm text-gray-500">
                        Business IP phones (T3–T5 series), conference phones, video phones, and Microsoft Teams-certified devices.
                      </p>
                    )}
                    {p.name === "Cisco" && (
                      <p className="text-sm text-gray-500">
                        Cisco 7800 and 8800 series IP phones for enterprise and mission-critical deployments.
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Hosted VoIP */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-heading font-bold text-gray-900">
                  Hosted VoIP &amp; UCaaS Providers
                </h3>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-brand-blue/10 text-brand-blue">
                  Reseller Partners
                </span>
              </div>
              <p className="text-gray-500 mb-8 max-w-2xl">{CATEGORY_DESCRIPTIONS.hosted}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {PARTNERS.hosted.map((p) => (
                  <div
                    key={p.name}
                    className="p-5 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-center"
                  >
                    <span className="text-sm font-bold" style={{ color: p.color }}>
                      {p.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Carrier */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-heading font-bold text-gray-900">
                  Carrier &amp; Connectivity Partners
                </h3>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                  Master Agent / Reseller
                </span>
              </div>
              <p className="text-gray-500 mb-8 max-w-2xl">{CATEGORY_DESCRIPTIONS.carrier}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {PARTNERS.carrier.map((p) => (
                  <div
                    key={p.name}
                    className="p-5 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-center"
                  >
                    <span className="text-sm font-bold" style={{ color: p.color }}>
                      {p.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="One Call. Every Option. Zero Sales Pressure."
        subheading="Tell us what your business needs. We'll bring you the right partner and the right price."
        primaryCta={{ label: "Request a Free Quote", href: "/contact" }}
        variant="dark"
      />
    </>
  );
}
