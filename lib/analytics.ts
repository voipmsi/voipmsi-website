/*
 * Lightweight analytics layer. Pushes events to the GTM dataLayer AND calls
 * gtag() directly when GA4 is loaded, so it works with either a Google Tag
 * Manager container (NEXT_PUBLIC_GTM_ID) or a direct GA4 tag (NEXT_PUBLIC_GA_ID).
 *
 * If neither is configured, every call is a safe no-op — nothing breaks in dev.
 *
 * Wire real IDs in .env.local:
 *   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX     (preferred — manage all tags in GTM)
 *   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX     (direct GA4, optional)
 */

type EventParams = Record<string, string | number | boolean | undefined>;

interface AnalyticsWindow extends Window {
  dataLayer?: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
}

export function trackEvent(event: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;

  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });

  if (typeof w.gtag === "function") {
    w.gtag("event", event, params);
  }
}

// Named helpers for the conversion events in the brief.
export const trackPhoneClick = (location: string) =>
  trackEvent("phone_click", { event_category: "lead", location });

export const trackFormSubmit = (formType: string) =>
  trackEvent("form_submit", { event_category: "lead", form_type: formType });

export const trackEmailClick = (location: string) =>
  trackEvent("email_click", { event_category: "lead", location });

export const trackCalendarOpen = (location: string) =>
  trackEvent("calendar_open", { event_category: "lead", location });

export const trackQuoteClick = (location: string) =>
  trackEvent("quote_click", { event_category: "lead", location });

export const trackServiceView = (service: string) =>
  trackEvent("service_view", { event_category: "engagement", service });
