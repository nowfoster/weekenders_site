import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { links, ogImage, site, siteUrl } from "@/content/site";

// Self-hosted at build time by next/font: no render-blocking request to Google.
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Weekenders – weekend fostering by Now Foster",
    template: "%s | Weekenders by Now Foster",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "weekend fostering",
    "fostering one weekend a month",
    "short break fostering",
    "become a foster carer",
    "Now Foster",
    "fostering London",
    "fostering Manchester",
    "fostering Durham",
    "fostering North Somerset",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    images: [ogImage],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#164045",
};

const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Now Foster",
  alternateName: site.name,
  url: siteUrl,
  email: site.email,
  description: site.description,
  identifier: `Registered Charity in England and Wales ${site.charityNumber}`,
  areaServed: ["Greater London", "Greater Manchester", "County Durham", "North Somerset"].map((name) => ({
    "@type": "AdministrativeArea",
    name,
  })),
  sameAs: [links.instagram, links.linkedin, links.facebook, links.blog],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={montserrat.variable}>
      <body>
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-white px-4 py-2 font-semibold text-brand focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
        />
      </body>
    </html>
  );
}
