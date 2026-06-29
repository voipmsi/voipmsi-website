import { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://voipmsi.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/business-internet`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/network-setup`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/structured-cabling`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/voip-systems`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/security-cameras`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/office-moves`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/partners`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  const cityRoutes: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${baseUrl}/locations/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...cityRoutes];
}
