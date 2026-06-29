import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us — Request a Free Quote",
  description:
    "Contact VoIP Made Simple Inc. for a free VoIP consultation and quote. Based in Lauderhill, FL. Call (954) 975-4899 or fill out our form for same-business-day response.",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.name,
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
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <Hero
        badge="Contact Us"
        headline="Let's Simplify Your Telecom."
        subheadline="Have a question, need a quote, or want to talk through your options? We're here — and a real person will answer."
        size="sm"
      />

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left — Contact Info + Map */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-0.5">Address</p>
                      <address className="text-sm text-gray-600 not-italic">
                        {COMPANY.address.street}
                        <br />
                        {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-0.5">Phone</p>
                      <a
                        href={COMPANY.phoneHref}
                        className="text-sm text-gray-600 hover:text-brand-green transition-colors"
                      >
                        {COMPANY.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-0.5">Email</p>
                      <a
                        href={COMPANY.emailHref}
                        className="text-sm text-gray-600 hover:text-brand-blue transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1.5">Business Hours</p>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>{COMPANY.hours.weekdays}</p>
                        <p>{COMPANY.hours.saturday}</p>
                        <p>{COMPANY.hours.sunday}</p>
                        <p className="text-brand-green font-medium mt-2">{COMPANY.hours.emergency}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-3">Follow Us</p>
                <div className="flex items-center gap-3 flex-wrap">
                  {[
                    { href: COMPANY.social.linkedin, label: "LinkedIn", hoverClass: "hover:text-blue-700 hover:border-blue-300" },
                    { href: COMPANY.social.facebook, label: "Facebook", hoverClass: "hover:text-blue-600 hover:border-blue-300" },
                    { href: COMPANY.social.twitter, label: "Twitter", hoverClass: "hover:text-sky-500 hover:border-sky-300" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-gray-600 transition-colors ${s.hoverClass}`}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.3854948!2d-80.16965!3d26.16412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a5f2c8a2c8a3%3A0xa1b2c3d4e5f67890!2s3800%20Inverrary%20Blvd%2C%20Lauderhill%2C%20FL%2033319!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VoIP Made Simple Inc. — 3800 Inverrary Blvd, Lauderhill, FL 33319"
                />
              </div>
            </div>

            {/* Right — Quote Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                  Schedule a Free Assessment
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Tell us about your business and what&apos;s not working. One of our local specialists will get back to you within one business day — no pressure, no obligation.
                </p>
                <QuoteForm formType="Free Assessment (Contact Page)" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
