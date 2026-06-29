export const COMPANY = {
  name: "VoIP Made Simple Inc.",
  shortName: "voIPmsi",
  tagline: "From Legacy Telecom to Modern VoIP — Simplified.",
  address: {
    street: "3800 Inverrary Blvd, Ste 206",
    city: "Lauderhill",
    state: "FL",
    zip: "33318",
    full: "3800 Inverrary Blvd, Ste 206, Lauderhill, FL 33318",
  },
  phone: "(954) 975-4899",
  phoneHref: "tel:+19549754899",
  email: "info@voipmsi.com",
  emailHref: "mailto:info@voipmsi.com",
  hours: {
    weekdays: "Monday – Friday: 9:00 AM – 6:00 PM EST",
    saturday: "Saturday: By appointment",
    sunday: "Sunday: Closed",
    emergency: "Emergency Support: Available 24/7 for current customers",
  },
  social: {
    linkedin: "https://linkedin.com/company/voipmsi",
    facebook: "https://facebook.com/voipmsi",
    twitter: "https://twitter.com/voipmsi",
  },
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.8!2d-80.1658!3d26.1622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a3b0d0000001%3A0x1!2s3800+Inverrary+Blvd%2C+Lauderhill%2C+FL+33319!5e0!3m2!1sen!2sus!4v1700000000000",
};

export const PARTNERS = {
  hardware: [
    { name: "Grandstream", role: "Authorized Distributor", color: "#E8401C" },
    { name: "Yealink", role: "Authorized Reseller", color: "#0078D4" },
    { name: "Cisco", role: "Authorized Reseller", color: "#1BA0D7" },
  ],
  hosted: [
    { name: "RingCentral", role: "Partner", color: "#F97316" },
    { name: "Vonage", role: "Partner", color: "#9333EA" },
    { name: "Nextiva", role: "Partner", color: "#2563EB" },
    { name: "Fusion Connect", role: "Partner", color: "#0F766E" },
    { name: "Momentum", role: "Partner", color: "#7C3AED" },
  ],
  carrier: [
    { name: "AT&T", role: "Carrier Partner", color: "#00A8E0" },
    { name: "Verizon Business", role: "Carrier Partner", color: "#CD040B" },
    { name: "Comcast Business", role: "Carrier Partner", color: "#CC0000" },
    { name: "Frontier", role: "Carrier Partner", color: "#E11D48" },
    { name: "Zayo", role: "Carrier Partner", color: "#1E40AF" },
  ],
};

export const ALL_PARTNERS = [
  ...PARTNERS.hardware,
  ...PARTNERS.hosted,
  ...PARTNERS.carrier,
];

export const UCM_PRODUCTS = [
  {
    model: "UCM6300",
    tagline: "Small Business PBX",
    specs: "Up to 50 users | 25 concurrent calls | Built-in video conferencing",
    description:
      "Compact, feature-rich PBX for small offices that demand enterprise capabilities without enterprise complexity.",
    highlights: ["Auto Attendant", "Voicemail to Email", "Mobile App", "CRM Integration"],
  },
  {
    model: "UCM6304A",
    tagline: "Mid-Market PBX Powerhouse",
    specs: "Up to 500 users | 100 concurrent calls | High-availability ready",
    description:
      "The UCM6304A delivers a full-featured IP PBX with video conferencing, mobility apps, and deep carrier integrations — at a price that makes sense.",
    highlights: ["500 Users", "Video Conferencing", "Wave App", "Call Recording"],
  },
  {
    model: "UCM6308A",
    tagline: "Enterprise IP PBX",
    specs: "Up to 1,500 users | 200 concurrent calls | Dual NIC",
    description:
      "Designed for growing enterprises. The UCM6308A handles complex call routing, SIP trunking at scale, and integrations with leading CRM and ERP platforms.",
    highlights: ["1,500 Users", "LDAP/Active Directory", "API Access", "Hot Standby"],
  },
  {
    model: "UCM6310",
    tagline: "Large Enterprise PBX",
    specs: "Up to 3,000 users | 450 concurrent calls | Maximum redundancy",
    description:
      "VoIP Made Simple's flagship on-premise solution for large enterprises. Built for maximum capacity, reliability, and carrier-grade performance.",
    highlights: ["3,000 Users", "450 Concurrent Calls", "Cluster Support", "Enterprise SBC"],
  },
];

export const IP_PHONES = {
  grandstream: [
    {
      model: "GRP2601",
      line: "2-line",
      tier: "Entry Level",
      description: "Affordable, carrier-grade IP phone with HD audio.",
    },
    {
      model: "GRP2612W",
      line: "2-line",
      tier: "Standard",
      description: "2-line Wi-Fi phone with built-in PoE and dual-band wireless.",
    },
    {
      model: "GRP2624",
      line: "4-line",
      tier: "Business",
      description: "4-line phone with color display and Bluetooth for busy professionals.",
    },
    {
      model: "GRP2670",
      line: "6-line",
      tier: "Executive",
      description: "6-line executive phone with 4.3\" color display, Wi-Fi, Bluetooth, and USB.",
    },
  ],
  yealink: [
    {
      model: "T31P",
      series: "T3 Series",
      tier: "Entry Level",
      description: "Reliable 2-line phone with HD audio — ideal for general staff.",
    },
    {
      model: "T46U",
      series: "T4 Series",
      tier: "Business",
      description: "16-line color display phone with USB recording and Bluetooth.",
    },
    {
      model: "T54W",
      series: "T5 Series",
      tier: "Power User",
      description: "16-line 4.3\" color screen with Wi-Fi, Bluetooth, and USB.",
    },
    {
      model: "T57W",
      series: "T5 Series",
      tier: "Executive",
      description: "7\" touchscreen executive phone — the gold standard for C-suite deployments.",
    },
  ],
  cisco: [
    {
      model: "7841",
      series: "7800 Series",
      tier: "Business",
      description: "4-line SIP phone with full-duplex speakerphone and wideband audio.",
    },
    {
      model: "8841",
      series: "8800 Series",
      tier: "Business+",
      description: "5-line phone with 5\" grayscale display and Gigabit Ethernet.",
    },
    {
      model: "8845",
      series: "8800 Series",
      tier: "Executive",
      description: "5-line phone with 5\" color display, HD video, and Wi-Fi.",
    },
    {
      model: "8865",
      series: "8800 Series",
      tier: "Enterprise",
      description: "5-line HD video phone with 5\" color touchscreen and Wi-Fi for executive suites.",
    },
  ],
};

export const SERVICES_NAV = [
  { label: "Business Internet & ISP", href: "/services/business-internet" },
  { label: "Network Setup", href: "/services/network-setup" },
  { label: "Structured Cabling", href: "/services/structured-cabling" },
  { label: "Business VoIP Phone Systems", href: "/services/voip-systems" },
  { label: "Security Cameras", href: "/services/security-cameras" },
];

// Primary South Florida communities we serve. Drives local-SEO city pages
// (Phase 2) and "service area" content. Lauderhill is our home base.
export const SERVICE_AREAS = [
  { name: "Lauderhill", slug: "lauderhill", county: "Broward County" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale", county: "Broward County" },
  { name: "Plantation", slug: "plantation", county: "Broward County" },
  { name: "Sunrise", slug: "sunrise", county: "Broward County" },
  { name: "Tamarac", slug: "tamarac", county: "Broward County" },
  { name: "Lauderdale Lakes", slug: "lauderdale-lakes", county: "Broward County" },
  { name: "Oakland Park", slug: "oakland-park", county: "Broward County" },
  { name: "Davie", slug: "davie", county: "Broward County" },
  { name: "Coral Springs", slug: "coral-springs", county: "Broward County" },
];

// Core positioning line — reused across hero, footer, and metadata.
export const POSITIONING =
  "From the internet connection to the phone on your desk, VoIP Made Simple Inc. makes business communications simple.";

export const SERVING_LINE =
  "Serving Lauderhill, Fort Lauderdale and businesses throughout Broward County.";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES_NAV,
  },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];
