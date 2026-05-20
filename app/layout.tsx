import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/constants";

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
      <body className="antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
