import { NextRequest, NextResponse } from "next/server";

/*
 * Optional server-side proxy to Go HighLevel webhook.
 * Use this route instead of calling the webhook directly from the client
 * if you want to keep the webhook URL server-side only (move to GHL_WEBHOOK_URL
 * without NEXT_PUBLIC_ prefix) and add rate limiting or validation.
 *
 * To use: change QuoteForm.tsx to POST to /api/quote instead of the GHL URL.
 */

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const webhookUrl = process.env.GHL_WEBHOOK_URL || process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;

    if (!webhookUrl || webhookUrl.includes("YOUR_WEBHOOK_ID")) {
      // Return 200 in dev/demo mode
      return NextResponse.json({ success: true, demo: true });
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "voIPmsi-Website/1.0",
      },
      body: JSON.stringify({
        ...data,
        // `formType` and `pagePath` come from the client so GHL can attribute
        // the lead source (which CTA / which page produced it).
        source: data.formType
          ? `Website — ${data.formType}`
          : "Website Lead Form",
        timestamp: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      throw new Error(`GHL webhook responded with ${res.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote form submission error:", error);
    return NextResponse.json({ success: false, error: "Submission failed" }, { status: 500 });
  }
}
