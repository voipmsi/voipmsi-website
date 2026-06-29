"use client";

import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { trackPhoneClick, trackQuoteClick } from "@/lib/analytics";

/**
 * Sticky call-to-action bar pinned to the bottom of the viewport on mobile only
 * (hidden on lg+ where the navbar already shows the phone number and CTAs).
 * Keeps the phone number and "Free Assessment" one tap away on every page.
 */
export default function StickyCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-brand-dark/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-2 gap-2 p-2.5">
        <a
          href={COMPANY.phoneHref}
          onClick={() => trackPhoneClick("sticky_bar")}
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-green text-white font-semibold text-sm active:scale-[0.98] transition-transform"
          aria-label={`Call ${COMPANY.phone}`}
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <Link
          href="/contact"
          onClick={() => trackQuoteClick("sticky_bar")}
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/15 active:scale-[0.98] transition-transform"
        >
          <CalendarCheck className="w-4 h-4 text-brand-green" />
          Free Assessment
        </Link>
      </div>
    </div>
  );
}
