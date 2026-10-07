"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { BRAND } from "@/config/brand";

const rotatingServices = [
  "High-Converting Web Apps",
  "AI Video Production",
  "Brand Visual Identity",
  "Motion Graphics & Reels",
  "UI/UX Platform Design",
];

const floatingTools = [
  { name: "Ae", color: "bg-[#00005B] text-[#9999FF] border-[#9999FF]/40" },
  { name: "Pr", color: "bg-[#00005B] text-[#9999FF] border-[#9999FF]/40" },
  { name: "Figma", color: "bg-[#1E1E1E] text-[#F24E1E] border-[#F24E1E]/40" },
];

export function HeroSection() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % rotatingServices.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[88vh] overflow-hidden bg-[#070a18] z-10 flex flex-col justify-center pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Background Radial Glow & Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] blue-purple-glow pointer-events-none rounded-full blur-3xl opacity-80"></div>

      <div className="w-full px-6 md:px-14 relative z-10 select-none">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

          {/* Top Pill Subhead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6366F1]/30 bg-[#0d1233]/80 px-4 py-1.5 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#818CF8]" />
            <span className="font-mono text-[#818CF8] text-xs font-semibold tracking-wider uppercase">
              {BRAND.name} &bull; Digital &amp; Creative Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-white tracking-tight mb-6 max-w-5xl"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold leading-[1.02] tracking-[-0.03em] uppercase">
              DIGITAL <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A5B4FC] bg-clip-text text-transparent">
                CREATIVE STUDIO
              </span>
            </h1>

            <div className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-white/90 leading-[1.2] flex flex-wrap items-center justify-center gap-2">
              <span className="text-white/60">Crafting</span>
              <div className="relative inline-block h-[38px] sm:h-[46px] min-w-[260px] sm:min-w-[340px] overflow-hidden align-middle">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentServiceIndex}
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="absolute inset-x-0 text-[#818CF8] font-semibold border-b border-[#6366F1]/40"
                  >
                    {rotatingServices[currentServiceIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 max-w-2xl"
          >
            <p className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed">
              We help brands, creators, and scaling businesses launch high-impact digital experiences, custom web apps, video edits, and modern visual identities.
            </p>
          </motion.div>

          {/* Floating Software Tool Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center justify-center gap-3 mt-8"
          >
            {floatingTools.map((tool) => (
              <span
                key={tool.name}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-bold border shadow-lg ${tool.color}`}
              >
                {tool.name}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-10"
          >
            <Link
              href="/start-project"
              className="btn-indigo inline-flex items-center gap-2 rounded-full px-8 py-4 font-mono text-xs md:text-sm uppercase tracking-wider"
            >
              Start Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="btn-card-outline inline-flex items-center gap-2 rounded-full px-8 py-4 font-mono text-xs md:text-sm uppercase tracking-wider"
            >
              Explore Services
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


