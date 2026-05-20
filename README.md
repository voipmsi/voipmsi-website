# voIPmsi — VoIP Made Simple Inc. Website

Professional marketing website for VoIP Made Simple Inc. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.local.example .env.local
```

Open `.env.local` and replace the placeholder values (see **Go HighLevel Setup** below).

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Go HighLevel (GHL) Integration

### Setting Up the Quote Form Webhook

1. Log into your Go HighLevel account
2. Go to **Settings → Integrations → Webhooks**
3. Click **Create Webhook**
4. Set the trigger to **Form Submitted** (or use a Workflow with a webhook trigger)
5. Copy the webhook URL (format: `https://services.leadconnectorhq.com/hooks/XXXXXXXXX`)
6. Paste it into `.env.local`:

```env
NEXT_PUBLIC_GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_ACTUAL_ID
```

**Alternative:** If you prefer GHL's native form embed, open `components/QuoteForm.tsx` and follow the `SWAP IN` comment — it shows exactly where to replace the form with a GHL `<iframe>` embed.

### Setting Up the "Book a Call" Calendar Widget

1. In GHL, go to **Calendars → [Your Calendar] → Booking Widget**
2. Copy the widget URL
3. Paste it into `.env.local`:

```env
NEXT_PUBLIC_GHL_CALENDAR_URL=https://api.leadconnectorhq.com/widget/booking/YOUR_CALENDAR_ID
```

4. Open `components/Navbar.tsx` and find the `SWAP IN:` comment — uncomment the `<iframe>` block to enable the live calendar modal.

---

## Replacing Placeholder Logos

All partner logos currently display as styled text badges. To replace with real logo files:

1. Download official logos from each partner's brand/press page
2. Place them in `/public/partners/` (e.g., `grandstream.svg`, `yealink.svg`)
3. In `components/PartnerTicker.tsx`, swap the `<span>` text with `<Image>` components:

```tsx
import Image from "next/image";

// Replace the <span> with:
<Image
  src={`/partners/${name.toLowerCase().replace(/\s+/g, "-")}.svg`}
  alt={name}
  width={120}
  height={36}
  className="object-contain"
/>
```

---

## Project Structure

```
/app
  layout.tsx              Root layout (Navbar, Footer, SEO metadata)
  page.tsx                Home page
  icon.tsx                Favicon generator
  sitemap.ts              Dynamic sitemap.xml
  robots.ts               robots.txt
  /about/page.tsx         About page
  /services/
    page.tsx              Services overview
    /voip-systems/        VoIP Systems page (UCM + phones + cloud)
    /structured-cabling/  Cabling page
    /security-cameras/    Security cameras page
  /partners/page.tsx      Partners page with ticker
  /contact/page.tsx       Contact page + quote form
  /api/quote/route.ts     Optional server-side GHL webhook proxy

/components
  Navbar.tsx              Sticky nav, dropdown, mobile menu, Book a Call modal
  Footer.tsx              Full footer with links and contact info
  Hero.tsx                Flexible hero used on all pages
  QuoteForm.tsx           react-hook-form + zod → GHL webhook POST
  PartnerTicker.tsx       CSS infinite scrolling dual-row marquee
  ServiceCard.tsx         Animated service link card
  ProductCard.tsx         PBX/phone product display card
  FeatureCard.tsx         Icon + title + description card
  CTABanner.tsx           Reusable bottom-of-page CTA section

/lib
  constants.ts            Company info, partner data, all product specs

/public
  favicon.svg             Placeholder favicon
  /partners/              Drop real partner logo files here
```

---

## Deploying to Vercel

### Option A — Vercel Dashboard (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo
3. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_GHL_WEBHOOK_URL`
   - `NEXT_PUBLIC_GHL_CALENDAR_URL`
4. Click **Deploy**

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

---

## Customization Checklist

- [ ] Set `NEXT_PUBLIC_GHL_WEBHOOK_URL` in `.env.local`
- [ ] Set `NEXT_PUBLIC_GHL_CALENDAR_URL` in `.env.local`
- [ ] Uncomment GHL calendar iframe in `components/Navbar.tsx`
- [ ] Replace placeholder partner logos in `/public/partners/`
- [ ] Update Google Maps embed URL in `app/contact/page.tsx`
- [ ] Replace dummy testimonials in `app/page.tsx` with real client quotes
- [ ] Update social media URLs in `lib/constants.ts`
- [ ] Add real OG image to `/public/og-image.png`
- [ ] Update `metadataBase` URL in `app/layout.tsx` once domain is live
- [ ] Add Google Analytics / GTM tag to `app/layout.tsx`

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 14 App Router | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling + custom brand theme |
| Framer Motion | Scroll animations |
| lucide-react | Icons |
| react-hook-form + zod | Form validation |

---

**VoIP Made Simple Inc.**
3800 Inverrary Blvd, Ste 206, Lauderhill, FL 33318
(954) 975-4899 · info@voipmsi.com
