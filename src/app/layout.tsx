import type { Metadata, Viewport } from "next";
import { Geist_Mono, Instrument_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollSignal } from "@/components/ScrollSignal";
import { links } from "@/content/site";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const description =
  "Nova Labs helps non-technical founders and operators turn ideas into working AI products, software and systems — from strategy through build and launch.";

export const metadata: Metadata = {
  title: "Nova Labs | Technical AI Partner for Founders",
  description,
  applicationName: "Nova Labs",
  authors: [{ name: "Daniel Kelly", url: links.linkedin }],
  creator: "Daniel Kelly",
  category: "technology",
  openGraph: {
    title: "Nova Labs | Technical AI Partner for Founders",
    description,
    locale: "en_GB",
    type: "website",
    siteName: "Nova Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Labs | Technical AI Partner for Founders",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07111F",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nova Labs",
  legalName: "Nova Labs Ai Limited",
  description,
  founder: {
    "@type": "Person",
    name: "Daniel Kelly",
    jobTitle: "Founder & AI Partner",
    sameAs: links.linkedin,
  },
  areaServed: "United Kingdom",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manchester",
    addressCountry: "GB",
  },
  sameAs: [links.company, links.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-svh bg-ink text-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <ScrollSignal />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
