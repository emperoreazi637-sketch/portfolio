import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { SITE } from "@/data/site";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Ojo Ezekiel O. — AI Automation & Web Developer",
    template: "%s — Ojo Ezekiel O.",
  },
  description:
    "Ojo Ezekiel O. is an AI Automation & Web Developer building intelligent workflows, modern websites and digital experiences.",
  openGraph: {
    type: "website",
    siteName: "Ojo Ezekiel O.",
    title: "Ojo Ezekiel O. — AI Automation & Web Developer",
    description:
      "Ojo Ezekiel O. is an AI Automation & Web Developer building intelligent workflows, modern websites and digital experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ojo Ezekiel O. — AI Automation & Web Developer",
    description:
      "Ojo Ezekiel O. is an AI Automation & Web Developer building intelligent workflows, modern websites and digital experiences.",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="grain bg-cream font-body text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-ctrl-sm focus:bg-gold focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
