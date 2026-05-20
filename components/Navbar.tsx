"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Calendar } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-brand-dark/95 backdrop-blur-md shadow-lg" : "bg-brand-dark"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center gap-1">
                <div className="flex items-center bg-brand-navy border border-brand-green/20 rounded-lg px-3 py-1.5">
                  <span className="font-heading font-bold text-xl text-white tracking-tight">
                    vo<span className="text-brand-green">I</span>Pmsi
                  </span>
                </div>
              </div>
              <div className="hidden sm:block">
                <p className="text-xs text-gray-400 leading-tight">VoIP Made Simple Inc.</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        pathname.startsWith("/services")
                          ? "text-brand-green"
                          : "text-gray-300 hover:text-white"
                      }`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-brand-navy border border-white/10 rounded-xl shadow-xl overflow-hidden">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "text-brand-green"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-green" />
                {COMPANY.phone}
              </a>
              <button
                onClick={() => setCalendarOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors border border-white/10"
                aria-label="Book a call"
              >
                <Calendar className="w-4 h-4" />
                Book a Call
              </button>
              <Link
                href="/contact"
                className="px-5 py-2 rounded-lg bg-brand-green hover:bg-brand-green-dark text-white text-sm font-semibold transition-colors"
              >
                Free Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-brand-dark/98 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block pl-6 pr-3 py-2.5 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "text-brand-green bg-brand-green/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-300"
                >
                  <Phone className="w-4 h-4 text-brand-green" />
                  {COMPANY.phone}
                </a>
                <button
                  onClick={() => { setIsOpen(false); setCalendarOpen(true); }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 text-white text-sm font-medium border border-white/10"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Call
                </button>
                <Link
                  href="/contact"
                  className="block text-center px-4 py-2.5 rounded-lg bg-brand-green text-white text-sm font-semibold"
                >
                  Request Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* GHL Calendar Modal */}
      {calendarOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setCalendarOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="font-semibold text-gray-900">Book a Free Consultation</h2>
              <button
                onClick={() => setCalendarOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close calendar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/*
              SWAP IN: Replace this placeholder with your actual GHL calendar embed:
              <iframe
                src={process.env.NEXT_PUBLIC_GHL_CALENDAR_URL}
                style={{ width: "100%", height: "600px", border: "none" }}
                title="Book a Call"
              />
            */}
            <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
              <Calendar className="w-12 h-12 text-brand-blue mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calendar Coming Soon</h3>
              <p className="text-gray-500 mb-6 max-w-sm">
                Add your Go HighLevel calendar URL to <code className="bg-gray-100 px-1 rounded">.env.local</code> to enable online booking.
              </p>
              <a
                href={COMPANY.phoneHref}
                className="px-6 py-3 bg-brand-blue hover:bg-brand-blue-dark text-white rounded-lg font-semibold transition-colors"
              >
                Call Us Now: {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
