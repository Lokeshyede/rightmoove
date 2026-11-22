import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const lastModified = new Date();

  // Root Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0
    }
  ];

  // 6 Core Service Pages
  SITE_CONFIG.servicePages.forEach((svc) => {
    routes.push({
      url: `${baseUrl}${svc.path}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9
    });
  });

  // 6 Target City Landing Pages
  SITE_CONFIG.targetLocations.forEach((loc) => {
    routes.push({
      url: `${baseUrl}${loc.path}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8
    });
  });

  return routes;
}
