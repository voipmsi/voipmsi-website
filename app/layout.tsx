import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import { COMPANY } from "@/lib/constants";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voipmsi.com"),
  title: {
    default: "voIPmsi — VoIP Made Simple Inc. | Business Phone Systems South Florida",
    template: "%s | voIPmsi",
  },
  description:
    "30+ years of telecom expertise. VoIP Made Simple Inc. delivers enterprise VoIP systems, structured cabling, and security cameras for businesses across South Florida. Authorized Grandstream partner.",
  keywords: [
    "VoIP phone system",
    "business phone system",
    "Grandstream UCM",
    "hosted PBX",
    "structured cabling",
    "security cameras",
    "South Florida VoIP",
    "Lauderhill telecom",
    "IP phones",
    "cloud VoIP",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://voipmsi.com",
    siteName: COMPANY.name,
    title: "voIPmsi — Business VoIP Systems Made Simple",
    description:
      "30+ years of telecom expertise. Enterprise VoIP, structured cabling, and security cameras for South Florida businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "voIPmsi — VoIP Made Simple Inc.",
    description: "30+ years of telecom expertise. Modern VoIP systems for South Florida businesses.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Google Tag Manager — only loads when NEXT_PUBLIC_GTM_ID is set in .env.local */}
        {GTM_ID && (
          <Script id="gtm-base" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
      </head>
      <body className="antialiased font-sans">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCallBar />
        {/* Spacer so the fixed mobile call bar never hides the footer's last row */}
        <div className="h-[68px] lg:hidden" aria-hidden="true" />
      </body>
    </html>
  );
}
