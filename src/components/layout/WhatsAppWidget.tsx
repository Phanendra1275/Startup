"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/config/brand";
import { MessageCircle, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-72 bg-[#0d1233]/95 backdrop-blur-md border border-[#6366F1]/30 p-6 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.7)]"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-[#818CF8] font-heading font-bold text-lg">Hey 👋</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Close widget"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-slate-300 text-xs mb-6 leading-relaxed font-sans">
              Want to discuss your project directly? Connect with our team now.
            </p>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-indigo flex items-center justify-center gap-2 w-full text-center px-4 py-3 rounded-2xl font-mono text-xs uppercase tracking-wider"
              >
                WhatsApp Chat <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/start-project"
                onClick={() => setIsOpen(false)}
                className="btn-card-outline flex items-center justify-center gap-2 w-full text-center px-4 py-3 rounded-2xl font-mono text-xs uppercase tracking-wider"
              >
                Submit Project Brief
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2.5 px-5 py-3 bg-[#0d1233]/90 backdrop-blur-md border border-[#5865F2]/60 rounded-full text-white shadow-[0_0_25px_rgba(88,101,242,0.45)] hover:shadow-[0_0_35px_rgba(88,101,242,0.65)] transition-all"
      >
        <MessageCircle className="w-5 h-5 text-[#818CF8]" />
        <span className="font-mono text-xs font-bold uppercase tracking-wider">Chat with us</span>
      </motion.button>
    </div>
  );
}


