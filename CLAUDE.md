# VoIP Made Simple — Project Reference

**Read this first.** Claude Code auto-loads this file when you open the project, so it always has this context without you repeating it.

## Where everything lives

- **Local folder:** `C:\Users\vmsqu\MyProjectsVmsi\New Web2\voipmsi`
- **GitHub repo:** `git@github.com:voipmsi/voipmsi-website.git` (org: `voipmsi`, repo: `voipmsi-website`)
- **Live site:** **https://voipmsi.com** — hosted on **Vercel**, auto-deploys from GitHub `main` on every push
- **Default branch:** `main`

## Hosting & DNS (set up 2026-08-09)

**The site runs on Vercel and redeploys automatically every time we `git push` to `main`.** No manual deploy step.

- **Host:** Vercel project (imported from the GitHub repo). Production URL: `voipmsi-website.vercel.app`.
- **Domain registrar / DNS:** **Hostinger** (hPanel → Domains → DNS/Nameservers). The domain lives at Hostinger; only the website records point to Vercel.
- **Key DNS records at Hostinger:**
  - `A  @  216.198.79.1` (apex → Vercel's current IP; legacy `76.76.21.21` also works)
  - `CNAME  www  b6acfd6846a65dd6.vercel-dns-017.com` (Vercel per-domain target)
- **Redirect:** In Vercel, `voipmsi.com` (apex) is set to **308-redirect to `www.voipmsi.com`** (www is primary). Works fine. NOTE: the code's canonical/`metadataBase` is the apex (`voipmsi.com`); optional future cleanup = make apex primary so canonical matches. Not urgent.
- **Email = Titan on Hostinger, untouched.** Do NOT remove/alter these Hostinger records: `MX @ mx1/mx2.titan.email`, `TXT @ (SPF: v=spf1 include:spf.titan.email)`, `TXT titan1._domainkey (DKIM)`. Also leave `A ftp`, `CNAME app (whitelabel.deal.ai)`.
- **History / the fix:** Originally the apex was an `ALIAS @ → voipmsi.com.cdn.hstgr.net` (old Hostinger CDN, served a stale copy). An ALIAS can't coexist with an A record at the root, which is why adding the A record errored. Fix = **delete the ALIAS on `@`, then add the `A @ 216.198.79.1`**. Earlier abandoned attempts: GitHub Pages (CNAME removed) and a brief Vercel setup; the site is now solely Vercel + Hostinger DNS.

## Stack

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + react-hook-form/zod + `sharp` (image optimization). Lead form posts to `/api/quote` (server proxy → Go HighLevel webhook). Booking calendar + analytics integrate via env vars.

**Env vars live in Vercel** (Project → Settings → Environment Variables), NOT `.env.local` for production:
- `GHL_WEBHOOK_URL` — lead form → GoHighLevel (server-side)
- `NEXT_PUBLIC_GHL_CALENDAR_URL` — booking widget
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager (analytics events fire once set)

## Common commands

```bash
npm install       # first time / after pulling dependency changes
npm run dev       # local dev server, http://localhost:3000
npm run build     # production build (Vercel runs this automatically on deploy)
npm run lint      # lint check
git status        # check for uncommitted work before you stop for the day
git push          # backs up to GitHub AND auto-deploys to voipmsi.com via Vercel
```

## Session log (newest first)

### 2026-08-09
- **Migrated hosting Hostinger → Vercel** (see Hosting & DNS above). Root cause of "voipmsi.com broken / stale": Hostinger was serving an old manual copy and never auto-updated from GitHub. Fixed the apex DNS (removed ALIAS, added `A @ 216.198.79.1`); `www` CNAME → Vercel. Confirmed live: `voipmsi.com` → Vercel → serves latest code. Every push now auto-deploys.
- Note: the apex "broken" symptom was partly browser cache (HSTS/DNS) from earlier host changes — flushed DNS; incognito confirmed the server side was fine.
- Updated serving-area line site-wide to tri-county: "…Broward, Miami-Dade and Palm Beach County."

### (earlier, ~2026-06 to 08)
- Phase 1 repositioning (internet→network→cabling→phones), Phase 2 local-SEO city pages + office-moves + deeper VoIP/cabling pages, thank-you redirect + schema.
- Added real product photos: all Grandstream/Yealink/Cisco phone cards on `/services/voip-systems`, UCM appliance image, network-rack hero on Network Setup. Installed `sharp`; downscaled oversized sources.

## Outstanding / optional

- [ ] Set the three env vars in **Vercel** (GHL webhook, GHL calendar, GTM) — site works without them (form falls back to demo).
- [ ] Enable the GHL booking calendar iframe in `components/Navbar.tsx` once `NEXT_PUBLIC_GHL_CALENDAR_URL` is set.
- [ ] Optional SEO: expand page titles / structured-data `areaServed` to include Miami-Dade & Palm Beach (currently Broward-focused) to match the new serving line.
- [ ] Optional: make apex (`voipmsi.com`) the primary domain in Vercel so it stops redirecting to `www` (matches the code's canonical URL).
- [ ] Add a real OG/social share image.
- Testimonials & partner labels: **confirmed real/approved by the owner** — keep as-is.
