/*
 * Per-city content for local-SEO location pages (/locations/[city]).
 * Each entry is GENUINELY UNIQUE — real local context, business districts and
 * industry mix — so these read as useful local pages, not thin doorway pages.
 * Distance/landmarks reflect Broward County geography around our Lauderhill base.
 */

export interface CityFaq {
  q: string;
  a: string;
}

export interface City {
  slug: string;
  name: string;
  county: string;
  /** Page <title> — keyword-forward, city + service. */
  metaTitle: string;
  metaDescription: string;
  /** H1 + hero supporting line. */
  heroSub: string;
  /** Opening paragraph — unique local framing. */
  intro: string;
  /** Local business landscape paragraph. */
  localContext: string;
  /** Recognizable business areas / corridors / landmarks in the city. */
  areas: string[];
  /** Industries we commonly serve in this city. */
  industries: string[];
  /** Adjacent cities (slugs) for internal linking. */
  nearby: string[];
  /** Drive context from our Lauderhill office. */
  proximity: string;
  faqs: CityFaq[];
}

export const CITIES: City[] = [
  {
    slug: "lauderhill",
    name: "Lauderhill",
    county: "Broward County",
    metaTitle: "Business Phone Systems & Network Installation in Lauderhill, FL",
    metaDescription:
      "Local Lauderhill VoIP, structured cabling, business internet and network installation. Based right here off Inverrary Blvd. 30+ years serving Lauderhill businesses. Call (954) 975-4899.",
    heroSub:
      "We're headquartered in Lauderhill — so when a business down the road needs internet, cabling, Wi-Fi or a phone system done right, we're minutes away.",
    intro:
      "Lauderhill is our home. Our office sits on Inverrary Blvd, and for more than 30 years we've wired, connected and supported businesses across the city — from professional suites and medical offices to retail, houses of worship and nonprofits. When you call us, you're not reaching a national call center; you're reaching the company that's already working in your neighborhood.",
    localContext:
      "Lauderhill's business community is busy and diverse — independent medical and dental practices, accounting and law offices, property managers and community organizations, many clustered around the Inverrary, Central Broward and Oakland Park Blvd corridors. These are exactly the kinds of offices that need reliable internet, clean cabling and a phone system that simply works, without an in-house IT department to manage it. That's the gap we fill.",
    areas: ["Inverrary", "Central Broward", "Oakland Park Blvd corridor", "NW 19th St business district", "Commercial Blvd"],
    industries: ["Medical & dental offices", "Law & accounting firms", "Churches & nonprofits", "Property management", "Retail & restaurants"],
    nearby: ["lauderdale-lakes", "tamarac", "sunrise", "plantation"],
    proximity: "We're based in Lauderhill — typically on-site the same day.",
    faqs: [
      {
        q: "Do you really service Lauderhill locally?",
        a: "Yes — our office is on Inverrary Blvd in Lauderhill. This is our home base, so we're usually on-site fast and we know the local buildings, carriers and permitting well.",
      },
      {
        q: "Can you handle both my internet and my phones?",
        a: "That's our whole model. We help you choose and order business internet, build the network and cabling behind it, then install and support your VoIP phones — one local team, one point of contact.",
      },
    ],
  },
  {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale",
    county: "Broward County",
    metaTitle: "Business VoIP, Cabling & Network Installation in Fort Lauderdale, FL",
    metaDescription:
      "Office network installation, structured cabling, business internet and hosted VoIP in Fort Lauderdale. Downtown, Las Olas, Cypress Creek. Local Broward installer. Call (954) 975-4899.",
    heroSub:
      "From the Las Olas high-rises to the Cypress Creek office corridor, we install the internet, networks and phone systems Fort Lauderdale businesses run on.",
    intro:
      "Fort Lauderdale runs on connectivity — law and finance downtown, marine and trade near the port, agencies and professional offices along Cypress Creek. We design and install the structured cabling, networks and VoIP phone systems that keep these businesses moving, with the kind of hands-on local support a national provider can't match.",
    localContext:
      "The Fort Lauderdale market spans dense downtown towers, the Las Olas professional district, the Cypress Creek / Commercial Blvd office corridor, and countless smaller offices in between. High-rise suites bring their own cabling and riser challenges; growing agencies need Wi-Fi that covers an open floor plan and phones that follow staff to home and mobile. We handle both — and we coordinate building access and low-voltage requirements so installs go smoothly.",
    areas: ["Downtown / Las Olas", "Cypress Creek office corridor", "Flagler Village", "Port Everglades area", "17th Street Causeway"],
    industries: ["Law & professional services", "Finance & real estate", "Marine & trade", "Marketing agencies", "Hospitality"],
    nearby: ["oakland-park", "plantation", "davie", "lauderhill"],
    proximity: "A short drive east from our Lauderhill office.",
    faqs: [
      {
        q: "Can you cable a high-rise office suite downtown?",
        a: "Yes. We regularly work in multi-tenant towers, coordinating building management access, riser and pathway rules, and plenum-rated cable so your suite is wired cleanly and to code.",
      },
      {
        q: "Do you support hybrid and remote teams in Fort Lauderdale?",
        a: "Absolutely. Hosted cloud VoIP lets your team take their extension anywhere — desk phone downtown, softphone at home, mobile app on the road — all on one business number.",
      },
    ],
  },
  {
    slug: "plantation",
    name: "Plantation",
    county: "Broward County",
    metaTitle: "Business Network, Cabling & VoIP Installation in Plantation, FL",
    metaDescription:
      "Structured cabling, business internet, Wi-Fi and VoIP phone systems for Plantation, FL offices. Plantation Midtown corporate corridor specialists. Local installer. Call (954) 975-4899.",
    heroSub:
      "Plantation's corporate corridors and professional offices need infrastructure that performs — we design, install and support it locally.",
    intro:
      "Plantation is one of Broward's strongest corporate and professional hubs, anchored by the Plantation Midtown district and a dense mix of medical, financial and corporate offices. We bring those businesses reliable internet, well-designed networks, clean cabling and modern VoIP — built to the standard a professional office expects.",
    localContext:
      "Around Plantation Midtown and the University Drive / Broward Blvd corridors you'll find corporate campuses, medical office buildings and established professional practices. These offices tend to value reliability and documentation over the cheapest bid — labeled patch panels, QoS-tuned networks for clear calls, and a partner who answers the phone. That's the work we do best.",
    areas: ["Plantation Midtown", "University Drive corridor", "Broward Blvd", "Fountains business area", "Pine Island Rd"],
    industries: ["Corporate offices", "Medical office buildings", "Financial services", "Insurance", "Professional practices"],
    nearby: ["sunrise", "davie", "fort-lauderdale", "lauderhill"],
    proximity: "Just southwest of our Lauderhill office — minutes away.",
    faqs: [
      {
        q: "Do you work in Plantation's larger corporate office buildings?",
        a: "Yes — we design and install for everything from a single suite to a full corporate floor, with structured cabling, switching, Wi-Fi coverage planning and multi-line phone systems.",
      },
      {
        q: "Can you make our network ready for clear VoIP calls?",
        a: "We build VoIP readiness into every network: PoE switching, a separate voice VLAN and QoS so calls stay clear even when the office network is busy.",
      },
    ],
  },
  {
    slug: "sunrise",
    name: "Sunrise",
    county: "Broward County",
    metaTitle: "Business VoIP, Wi-Fi & Cabling Installation in Sunrise, FL",
    metaDescription:
      "Business internet, structured cabling, Wi-Fi and VoIP phone systems in Sunrise, FL. Sawgrass corporate park and retail specialists. Local Broward installer. Call (954) 975-4899.",
    heroSub:
      "From the Sawgrass corporate park to high-traffic retail and hospitality, Sunrise businesses need networks built for volume — we deliver them.",
    intro:
      "Sunrise blends large corporate parks, major retail and hospitality, and busy professional offices. Whether it's a multi-tenant suite in the Sawgrass corporate corridor or a high-traffic retail location near Sawgrass Mills, we install the internet, cabling, Wi-Fi and phone systems these operations depend on.",
    localContext:
      "The Sawgrass International Corporate Park and the Sunrise / Sawgrass Expressway corridor host a heavy mix of corporate offices, while the area around Sawgrass Mills and Amerant Bank Arena drives retail, restaurant and hospitality demand. Retail and hospitality need rock-solid Wi-Fi and reliable phones for bookings and point-of-sale; corporate suites need clean cabling and scalable VoIP. We cover the full range.",
    areas: ["Sawgrass International Corporate Park", "Sawgrass Mills area", "Sunrise Blvd corridor", "Pat Salerno / NW commerce area", "Amerant Bank Arena district"],
    industries: ["Corporate offices", "Retail & shopping centers", "Restaurants & hospitality", "Logistics & distribution", "Healthcare"],
    nearby: ["plantation", "tamarac", "lauderhill", "coral-springs"],
    proximity: "A quick drive west from our Lauderhill office.",
    faqs: [
      {
        q: "Can you handle Wi-Fi for a busy retail or restaurant location?",
        a: "Yes. We survey the space and place business-grade access points for full coverage, with separate secure staff and guest networks so point-of-sale and bookings stay reliable.",
      },
      {
        q: "Do you support multi-location businesses in Sunrise?",
        a: "We do — consistent network and phone setups across every location, with number porting, multi-site VoIP and a single point of contact for all of them.",
      },
    ],
  },
  {
    slug: "tamarac",
    name: "Tamarac",
    county: "Broward County",
    metaTitle: "Business Internet, Cabling & VoIP Phone Systems in Tamarac, FL",
    metaDescription:
      "Tamarac, FL business phone systems, structured cabling, Wi-Fi and internet consulting. Medical offices and property management specialists. Local installer. Call (954) 975-4899.",
    heroSub:
      "Tamarac's medical offices, community associations and small businesses get reliable, locally-supported communications from a neighbor.",
    intro:
      "Tamarac sits right next door to our Lauderhill base, and we've spent years supporting its medical practices, professional offices, community associations and small businesses. We make the internet, network, cabling and phones work as one — without the runaround of dealing with four different vendors.",
    localContext:
      "Along Commercial Blvd, McNab Rd and the University Drive corridor, Tamarac is full of medical and dental offices, property management and HOA offices, and owner-operated businesses. Many run lean, with no IT staff, so they need a dependable local partner who can both install new systems and troubleshoot the ones already in place. That neighbor-down-the-road support is exactly what we provide.",
    areas: ["Commercial Blvd", "McNab Rd", "University Drive corridor", "Tamarac Commerce Park", "Nob Hill Rd"],
    industries: ["Medical & dental offices", "Property management & HOAs", "Professional offices", "Small business & retail", "Nonprofits"],
    nearby: ["lauderhill", "sunrise", "coral-springs", "lauderdale-lakes"],
    proximity: "Right next to Lauderhill — one of our fastest service areas.",
    faqs: [
      {
        q: "We don't have IT staff — can you support us ongoing?",
        a: "Most of our Tamarac clients don't have in-house IT. We install your systems and stay on as your local support contact for changes, additions and troubleshooting.",
      },
      {
        q: "Can you fix dropped calls or weak Wi-Fi in our office?",
        a: "Yes — a lot of our work is diagnosing existing offices. Dropped calls and dead Wi-Fi zones are usually network or cabling issues we can identify and fix.",
      },
    ],
  },
  {
    slug: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    county: "Broward County",
    metaTitle: "Business Phone Systems, Cabling & Internet in Lauderdale Lakes, FL",
    metaDescription:
      "Lauderdale Lakes, FL VoIP, structured cabling, Wi-Fi and business internet. Right next to our Lauderhill office. Fast local service. Call (954) 975-4899.",
    heroSub:
      "Lauderdale Lakes shares a border with our Lauderhill office — local businesses here get some of our fastest, most hands-on service.",
    intro:
      "Lauderdale Lakes is practically next door, and its mix of small businesses, offices, retail and community organizations along Oakland Park Blvd and State Road 7 (441) is exactly the market we serve every day. We bring reliable internet, clean cabling and modern phones to businesses that want a real local partner.",
    localContext:
      "The Oakland Park Blvd and State Road 7 (US-441) corridors carry much of Lauderdale Lakes' commercial activity — independent retail, medical and professional offices, restaurants and faith-based organizations. These businesses need affordable, reliable communications and an installer who's genuinely local and responsive. Being right next door in Lauderhill, we are.",
    areas: ["Oakland Park Blvd", "State Road 7 (US-441)", "NW 31st Ave business area", "Commercial Blvd"],
    industries: ["Retail & restaurants", "Medical & professional offices", "Churches & nonprofits", "Small business", "Community organizations"],
    nearby: ["lauderhill", "oakland-park", "tamarac", "fort-lauderdale"],
    proximity: "Bordering Lauderhill — among our fastest-response areas.",
    faqs: [
      {
        q: "Is there a minimum business size you work with?",
        a: "No. We support everything from a 3-phone office to a large multi-site operation. Small Lauderdale Lakes businesses get the same professional install and labeling as anyone else.",
      },
      {
        q: "Can you lower our phone and internet costs?",
        a: "Often, yes. Because we compare carriers and VoIP options independently, we frequently find businesses better service for less than they're paying now.",
      },
    ],
  },
  {
    slug: "oakland-park",
    name: "Oakland Park",
    county: "Broward County",
    metaTitle: "Business Network, VoIP & Cabling Installation in Oakland Park, FL",
    metaDescription:
      "Oakland Park, FL structured cabling, business internet, Wi-Fi and VoIP phone systems. Culinary Arts District and Powerline corridor specialists. Call (954) 975-4899.",
    heroSub:
      "Oakland Park's restaurants, creative businesses and offices need connectivity that keeps up — we design and install it locally.",
    intro:
      "Oakland Park's growing Culinary Arts District, its creative and small-business scene, and its established offices along the Powerline and Dixie corridors all depend on solid connectivity. We install the internet, networks, Wi-Fi and phone systems that keep restaurants seating guests, studios producing and offices running.",
    localContext:
      "From the Culinary Arts District to the Powerline Rd, Dixie Hwy and Oakland Park Blvd corridors, this is a city of restaurants, breweries, creative studios and independent professional offices. Restaurants live and die on reliable Wi-Fi, point-of-sale and phones; creative businesses need fast, dependable networks. We tailor each install to how the business actually operates.",
    areas: ["Culinary Arts District", "Powerline Rd corridor", "Dixie Hwy", "Oakland Park Blvd", "NE 12th Ave"],
    industries: ["Restaurants & breweries", "Creative & studios", "Professional offices", "Retail", "Auto & service businesses"],
    nearby: ["fort-lauderdale", "lauderdale-lakes", "lauderhill", "tamarac"],
    proximity: "A short drive east from our Lauderhill office.",
    faqs: [
      {
        q: "Can you set up phones and Wi-Fi for a new restaurant?",
        a: "Yes — restaurants are a frequent project. We handle the cabling, business-grade Wi-Fi for staff and guests, point-of-sale network readiness, and phones for reservations and takeout.",
      },
      {
        q: "Do you coordinate cabling during a build-out?",
        a: "We do. During a build-out we run and certify cabling, set up the network rack, and have everything ready for your internet, phones and cameras at opening.",
      },
    ],
  },
  {
    slug: "davie",
    name: "Davie",
    county: "Broward County",
    metaTitle: "Business VoIP, Cabling & Network Installation in Davie, FL",
    metaDescription:
      "Davie, FL business internet, structured cabling, Wi-Fi and VoIP phone systems. Near Nova Southeastern and the Tower Shops. Local Broward installer. Call (954) 975-4899.",
    heroSub:
      "From the education and healthcare hub around Nova Southeastern to Davie's offices and retail, we install communications built to last.",
    intro:
      "Davie pairs a major education and healthcare cluster around Nova Southeastern University with established offices, retail at the Tower Shops, and its well-known equestrian and agricultural character. We design and install the internet, networks, cabling and VoIP these varied businesses rely on, with documentation and support that hold up over time.",
    localContext:
      "The University Park area around Nova Southeastern drives healthcare, research and education-adjacent business, while the University Drive and Griffin Rd corridors carry offices, medical practices and retail. These organizations often need structured cabling done to a documented standard, strong Wi-Fi across larger footprints, and phone systems that scale. That's squarely our work.",
    areas: ["University Park / Nova Southeastern area", "Tower Shops", "Griffin Rd corridor", "University Drive", "Davie Rd"],
    industries: ["Healthcare & medical", "Education & research", "Professional offices", "Retail", "Veterinary & agricultural"],
    nearby: ["plantation", "fort-lauderdale", "sunrise", "lauderhill"],
    proximity: "South of our Lauderhill office — a straightforward drive.",
    faqs: [
      {
        q: "Can you cable and network a larger office or facility in Davie?",
        a: "Yes. We design structured cabling for larger footprints, including documented patch panels, network racks and Wi-Fi coverage planning so the whole facility performs reliably.",
      },
      {
        q: "Do you work with medical and healthcare offices?",
        a: "Frequently. We install clean, documented cabling and reliable phone systems appropriate for medical offices, and we keep records so future changes are simple.",
      },
    ],
  },
  {
    slug: "coral-springs",
    name: "Coral Springs",
    county: "Broward County",
    metaTitle: "Business Phone Systems, Internet & Cabling in Coral Springs, FL",
    metaDescription:
      "Coral Springs, FL VoIP phone systems, structured cabling, Wi-Fi and business internet consulting. Corporate park and professional office specialists. Call (954) 975-4899.",
    heroSub:
      "Coral Springs' corporate park and professional offices get enterprise-grade communications with genuinely local support.",
    intro:
      "Coral Springs is known for its well-planned business environment — the Coral Springs Corporate Park, established professional practices, and family-owned businesses along the Sample Rd and University Drive corridors. We bring these businesses reliable internet, clean networks and modern VoIP, delivered and supported by a local Broward team.",
    localContext:
      "The Coral Springs Corporate Park and the Sample Rd, University Drive and Coral Ridge corridors host corporate offices, medical and dental practices, and a strong base of professional and family-owned businesses. This is a community that expects things done properly — and our standard of engineered design, labeled cabling and dependable support fits right in.",
    areas: ["Coral Springs Corporate Park", "Sample Rd corridor", "University Drive", "Coral Ridge", "Coral Springs Dr"],
    industries: ["Corporate offices", "Medical & dental practices", "Professional services", "Family-owned businesses", "Retail"],
    nearby: ["sunrise", "tamarac", "coral-springs", "plantation"],
    proximity: "Northwest of our Lauderhill office — we serve it regularly.",
    faqs: [
      {
        q: "Do you serve the Coral Springs Corporate Park?",
        a: "Yes — corporate offices there are a regular project, from structured cabling and switching to multi-line VoIP and Wi-Fi coverage for full floors.",
      },
      {
        q: "Can you move our phone system to a new Coral Springs office?",
        a: "We handle the whole move: ordering internet at the new space, cabling, network setup, porting your numbers and cutting over your phones with minimal downtime.",
      },
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
