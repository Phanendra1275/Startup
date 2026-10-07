"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BRAND } from "@/config/brand";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Plans", href: "/#pricing" },
  { name: "Contact", href: "/start-project" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed inset-x-0 top-6 z-[1000] flex justify-center pointer-events-none px-4">
        <nav className="pointer-events-auto pill-capsule flex items-center justify-between gap-4 md:gap-8 rounded-full px-6 py-3 text-white border border-[#6366F1]/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
          {/* Logo */}
          <Link aria-label={`${BRAND.name} — home`} className="group flex items-center gap-1.5" href="/">
            <span className="font-heading text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-white/90 transition-colors">
              {BRAND.shortName}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#5865F2]"></span>
          </Link>

          {/* Desktop Nav Capsule Links */}
          <div className="hidden items-center gap-1 md:flex bg-[#070a18]/60 rounded-full px-2 py-1 border border-[#6366F1]/20">
            <Link
              className={`relative flex items-center gap-1 rounded-full px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-200 ${
                pathname === "/" ? "bg-[#5865F2] text-white shadow-[0_0_15px_rgba(88,101,242,0.5)]" : "text-white/70 hover:text-white"
              }`}
              href="/"
            >
              Home
            </Link>

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  className={`relative flex items-center gap-1 rounded-full px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-200 ${
                    isActive ? "bg-[#5865F2] text-white shadow-[0_0_15px_rgba(88,101,242,0.5)]" : "text-white/70 hover:text-white"
                  }`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA Button */}
          <div className="flex shrink-0 items-center gap-3">
            <Link
              className="btn-indigo items-center gap-1.5 rounded-full px-5 py-2 font-mono text-[11px] font-bold uppercase tracking-wider inline-flex"
              href="/start-project"
            >
              Start Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              aria-label="Open menu"
              className="group inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors duration-200 hover:bg-white/10 md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[1050] bg-[#070a18] flex flex-col p-6 overflow-y-auto"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex justify-between items-center pb-6 border-b border-[#6366F1]/20">
              <span className="font-heading text-2xl font-bold text-white">
                {BRAND.shortName}<span className="text-[#5865F2]">.</span>
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white hover:text-[#5865F2] transition-colors rounded-full hover:bg-white/10"
                aria-label="Close Menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-6 py-8">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-3xl font-bold text-white hover:text-[#5865F2] transition-colors"
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-heading text-3xl font-bold text-white/80 hover:text-[#5865F2] transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-6 border-t border-[#6366F1]/20 flex flex-col gap-4">
                <Link
                  href="/start-project"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-indigo w-full text-center py-4 rounded-full font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  Start Project <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


