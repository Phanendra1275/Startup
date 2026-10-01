"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BRAND } from "@/config/brand";

const rotatingServices = [
  "AI Films",
  "Web Experiences",
  "Brand Identities",
  "Video Stories",
  "Digital Campaigns",
  "UI Experiences",
];

export function HeroSection() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % rotatingServices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Refined Minimal Background Elements */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
        {/* Subtle Indian geometric motif (Mandala fragment) centered behind text */}
        <div className="w-[600px] h-[600px] border-[0.5px] border-heritage-green/30 rounded-full flex items-center justify-center">
          <div className="w-[450px] h-[450px] border-[0.5px] border-heritage-green/20 rounded-full rotate-45"></div>
          <div className="w-[300px] h-[300px] border-[0.5px] border-heritage-green/10 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="text-leaf-green uppercase tracking-[0.25em] text-[10px] md:text-xs font-semibold">
            {BRAND.name}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[90px] font-serif leading-[1.05] text-ivory max-w-5xl mx-auto mb-8 tracking-tight"
        >
          {BRAND.tagline}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-ivory/80 font-light max-w-3xl mx-auto mb-14 flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-1"
        >
          <span>We create</span>
          <div className="h-10 md:h-12 relative overflow-hidden min-w-[280px] sm:w-[320px] text-leaf-green font-serif italic text-3xl md:text-4xl flex items-center justify-center sm:justify-start">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentServiceIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute"
              >
                {rotatingServices[currentServiceIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <Link
            href="/start-project"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center px-10 py-4 md:py-5 bg-primary-green text-ivory rounded-full text-base md:text-lg font-medium transition-all duration-300 hover:bg-leaf-green hover:text-deepest-green shadow-[0_0_15px_rgba(20,140,90,0.3)] hover:shadow-[0_0_30px_rgba(85,216,62,0.4)]"
          >
            <span className="flex items-center gap-2">
              Start Your Project
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
          <Link
            href="/work"
            className="w-full sm:w-auto group inline-flex items-center justify-center px-10 py-4 md:py-5 bg-transparent border border-heritage-green/50 text-ivory hover:border-ivory/50 rounded-full text-base md:text-lg font-medium transition-colors"
          >
            Explore Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
