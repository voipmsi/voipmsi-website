"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Fires a single conversion event when a thank-you page mounts. Used as the
 * redirect/landing target for form submissions and calendar bookings so each
 * conversion type is independently trackable in GTM/GA4.
 */
export default function ConversionTracker({ type }: { type: string }) {
  useEffect(() => {
    trackEvent("conversion", { event_category: "lead", conversion_type: type });
  }, [type]);

  return null;
}
