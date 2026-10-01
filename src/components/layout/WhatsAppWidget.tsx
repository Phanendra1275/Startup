"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/config/brand";
import { MessageCircle, X } from "lucide-react";
import Link from "next/link";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
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
            className="mb-4 w-72 bg-deepest-green/95 backdrop-blur-md border border-heritage-green/40 p-6 rounded-2xl shadow-[0_10px_40px_-10px_rgba(20,140,90,0.4)]"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-leaf-green font-serif text-xl">Hey 👋</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-ivory/50 hover:text-ivory transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-ivory/80 text-sm mb-6 leading-relaxed">
              Want to discuss your idea directly? We're online and ready to help.
            </p>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 bg-primary-green hover:bg-leaf-green text-ivory hover:text-deepest-green rounded-xl text-sm font-medium transition-colors"
              >
                Start WhatsApp Chat
              </a>
              <Link
                href="/start-project"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-3 bg-forest-green hover:bg-forest-green/80 text-ivory border border-heritage-green/50 rounded-xl text-sm font-medium transition-colors"
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
        className="flex items-center gap-2 px-6 py-3 bg-deepest-green/80 backdrop-blur-md border border-leaf-green/50 rounded-full text-ivory shadow-[0_0_15px_rgba(20,140,90,0.3)] hover:shadow-[0_0_25px_rgba(85,216,62,0.5)] transition-shadow"
      >
        <MessageCircle className="w-5 h-5 text-leaf-green" />
        <span className="text-sm font-medium">Chat with us</span>
      </motion.button>
    </div>
  );
}
