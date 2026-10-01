"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/config/brand";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Occasions", href: "/occasions" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-deepest-green/80 backdrop-blur-md py-4 border-b border-heritage-green/30"
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-serif tracking-wide text-ivory hover:text-leaf-green transition-colors"
          >
            {BRAND.shortName.toUpperCase()}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 text-sm uppercase tracking-widest text-ivory/80">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-leaf-green transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-leaf-green transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/start-project"
              className="bg-primary-green hover:bg-leaf-green hover:text-deepest-green text-ivory px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-[0_0_15px_rgba(20,140,90,0.4)] hover:shadow-[0_0_25px_rgba(85,216,62,0.6)]"
            >
              Start a Project
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-ivory p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-deepest-green flex flex-col"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-grain fixed inset-0 pointer-events-none opacity-10"></div>
            
            <div className="flex justify-between items-center p-6 border-b border-heritage-green/30">
              <span className="text-2xl font-serif tracking-wide text-ivory">
                {BRAND.shortName.toUpperCase()}
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-ivory hover:text-leaf-green transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center space-y-8 relative z-10">
              {/* Decorative motif */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-heritage-green/20 rounded-full flex items-center justify-center opacity-20 pointer-events-none">
                <div className="w-48 h-48 border border-heritage-green/40 rounded-full rotate-45"></div>
              </div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl md:text-5xl font-serif text-ivory hover:text-leaf-green transition-colors block py-2"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-8"
              >
                <Link
                  href="/start-project"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-primary-green text-ivory px-8 py-4 rounded-full text-lg font-medium transition-colors hover:bg-leaf-green hover:text-deepest-green"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
