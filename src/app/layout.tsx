import type { Metadata } from "next";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/config/brand";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
    <html lang="en" className={`${syne.variable} ${manrope.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#070a18] text-white antialiased flex flex-col relative overflow-x-hidden selection:bg-[#5865F2] selection:text-white">
        {/* Background Radial Glow Effects */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[25%] w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18)_0%,rgba(139,92,246,0.05)_50%,transparent_70%)] animate-float-slow"></div>
          <div className="absolute bottom-[-10%] right-[15%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(88,101,242,0.14)_0%,rgba(59,130,246,0.04)_50%,transparent_70%)] animate-float-medium"></div>
        </div>

        <Navbar />
        <main className="flex-1 flex flex-col pt-24 relative z-10">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}


