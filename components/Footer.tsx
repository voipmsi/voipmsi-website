import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, SERVICES_NAV } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center bg-brand-navy border border-brand-green/20 rounded-lg px-3 py-1.5 w-fit">
                <span className="font-heading font-bold text-xl text-white tracking-tight">
                  vo<span className="text-brand-green">I</span>Pmsi
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Three decades of telecom expertise. One trusted partner for VoIP, cabling, and security.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: COMPANY.social.linkedin, label: "LinkedIn", abbr: "in" },
                { href: COMPANY.social.facebook, label: "Facebook", abbr: "fb" },
                { href: COMPANY.social.twitter, label: "Twitter", abbr: "tw" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors flex items-center justify-center text-xs font-bold"
                >
                  {s.abbr}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Service Areas", href: "/locations" },
                { label: "Our Partners", href: "/partners" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {SERVICES_NAV.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-400 hover:text-brand-green transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-brand-green hover:text-white transition-colors font-medium"
                >
                  Schedule a Free Assessment →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                <address className="text-sm text-gray-400 not-italic">
                  {COMPANY.address.street}
                  <br />
                  {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-green flex-shrink-0" />
                <a
                  href={COMPANY.phoneHref}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-green flex-shrink-0" />
                <a
                  href={COMPANY.emailHref}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
