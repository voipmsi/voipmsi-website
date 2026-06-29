import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Building2, Wrench, CheckCircle, ArrowRight, Phone } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import { CITIES, getCity } from "@/lib/cities";
import { COMPANY, SERVICES_NAV } from "@/lib/constants";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = getCity(params.city);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `/locations/${city.slug}` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `https://voipmsi.com/locations/${city.slug}`,
    },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = getCity(params.city);
  if (!city) notFound();

  const nearby = city.nearby
    .filter((s) => s !== city.slug)
    .map((s) => getCity(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    image: "https://voipmsi.com/favicon.svg",
    url: `https://voipmsi.com/locations/${city.slug}`,
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
    areaServed: { "@type": "City", name: `${city.name}, FL` },
    description: city.metaDescription,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://voipmsi.com" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://voipmsi.com/locations" },
      { "@type": "ListItem", position: 3, name: city.name, item: `https://voipmsi.com/locations/${city.slug}` },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark pt-36 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,197,94,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.08),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 bg-brand-green/10 text-brand-green border border-brand-green/20">
            <MapPin className="w-3.5 h-3.5" />
            {city.name}, {city.county}
          </div>
          <h1 className="font-heading font-bold tracking-tight mb-6 text-3xl sm:text-4xl lg:text-5xl text-white">
            Business Internet, Networks & VoIP in {city.name}, FL
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-10 text-gray-400 max-w-2xl mx-auto">
            {city.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-dark text-white font-semibold text-sm transition-all shadow-lg shadow-brand-green/20 hover:-translate-y-0.5"
            >
              Schedule a Free Assessment
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border border-white/20 text-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-brand-green" />
              Call {COMPANY.phone}
            </a>
          </div>
          <p className="mt-7 text-sm text-gray-300">{city.proximity}</p>
        </div>
      </section>

      {/* Intro + local context */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Your Local Communications Partner in {city.name}
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>{city.intro}</p>
                <p>{city.localContext}</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-brand-blue" />
                  <h3 className="font-heading font-semibold text-gray-900">Areas We Serve in {city.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {city.areas.map((a) => (
                    <span key={a} className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-sm text-gray-600">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-5 h-5 text-brand-green" />
                  <h3 className="font-heading font-semibold text-gray-900">Businesses We Help Here</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {city.industries.map((ind) => (
                    <li key={ind} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              What We Install &amp; Support in {city.name}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              One local partner for the complete picture — from the internet connection to the phone on every desk.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES_NAV.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-center justify-between p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-blue/20 transition-all hover:-translate-y-0.5"
              >
                <span className="font-heading font-semibold text-gray-900">{s.label}</span>
                <ArrowRight className="w-4 h-4 text-brand-blue group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-10 text-center">
            {city.name} Business Communications — FAQs
          </h2>
          <div className="space-y-4">
            {city.faqs.map((f) => (
              <div key={f.q} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          {/* Nearby internal links */}
          {nearby.length > 0 && (
            <div className="mt-12 text-center">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                We Also Serve Nearby
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {nearby.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/locations/${c.slug}`}
                    className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-700 hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        heading={`Serving Businesses Across ${city.name}`}
        subheading="Get a free, no-pressure assessment of your internet, network and phone systems."
        primaryCta={{ label: "Schedule a Free Assessment", href: "/contact" }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: COMPANY.phoneHref }}
        variant="dark"
      />
    </>
  );
}
