import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/config/brand";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: BRAND.seo.title,
    template: `%s | ${BRAND.shortName}`,
  },
  description: BRAND.seo.description,
  metadataBase: new URL(BRAND.seo.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${manrope.variable} scroll-smooth`}>
      <body className="min-h-screen bg-deepest-green text-ivory antialiased flex flex-col relative overflow-x-hidden selection:bg-primary-green selection:text-ivory">
        <div className="bg-grain fixed inset-0 pointer-events-none z-50"></div>
        <Navbar />
        <main className="flex-1 flex flex-col pt-24">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
