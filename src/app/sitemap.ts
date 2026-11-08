import type { MetadataRoute } from "next";
import { site } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
  ].map(({ path, priority }) => ({ url: `${site.url}${path}`, lastModified: now, changeFrequency: "monthly" as const, priority }));
}
