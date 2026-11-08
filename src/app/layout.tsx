import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/lib/config";

const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Sora({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} – Software Development & Automation Agency`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: site.gscVerification ? { google: site.gscVerification } : undefined,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    url: "/",
    title: `${site.name} – ${site.tagline}`,
    description: site.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} – ${site.tagline}` }],
  },
  twitter: { card: "summary_large_image", images: ["/twitter-image"] },
};

export const viewport: Viewport = { themeColor: "#0B1020", width: "device-width", initialScale: 1 };

const sameAs = Object.values(site.social).filter(Boolean);

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  slogan: site.tagline,
  description: site.description,
  areaServed: "IN",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  ...(site.email ? { email: site.email } : {}),
  ...(sameAs.length ? { sameAs } : {}),
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en-IN",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${body.variable} ${display.variable}`}>
      <body>
        <a href="#main" className="sr-only z-[60] rounded-lg bg-white px-4 py-2 font-semibold text-navy-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={organization} />
        <JsonLd data={website} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
