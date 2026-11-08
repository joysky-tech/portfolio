import type { Metadata } from "next";
import { site } from "./config";

export function buildMetadata(opts: { title: string; description: string; path: string }): Metadata {
  const { title, description, path } = opts;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      url: path,
      locale: "en_IN",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} – ${site.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: ["/twitter-image"],
    },
  };
}
