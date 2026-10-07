"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { occasions } from "@/data/occasions";
import { ArrowUpRight } from "lucide-react";

export function OccasionStudioTeaser() {
  const teaserOccasions = occasions.slice(0, 4);

  return (
    <section className="py-24 bg-[#0b0c0e] relative overflow-hidden border-t border-white/10" id="occasions">
      <div className="container mx-auto px-6 md:px-14 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="mb-4 flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#FF5722]">
              <span className="h-px w-8 bg-[#FF5722]/60"></span>
              The Occasion Studio
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white"
            >
              Every occasion deserves its own <span className="text-[#FF5722]">story.</span>
            </motion.h2>
          </div>
          <Link
            href="/occasions"
            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white/80 hover:text-[#FF5722] transition-colors pb-2 border-b border-white/20 hover:border-[#FF5722]"
          >
            Explore All Occasions
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teaserOccasions.map((occ, i) => (
            <motion.div
              key={occ.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={`/occasions/${occ.slug}`}
                className="group relative block aspect-[3/4] rounded-2xl overflow-hidden bg-[#14161a] border border-white/10 hover:border-[#FF5722]/50 transition-all duration-300 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/60 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105"></div>

                <div className="absolute top-5 right-5 w-10 h-10 border border-white/20 rounded-full bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                  <ArrowUpRight className="w-4 h-4 text-[#FF5722]" />
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="font-mono text-[#FF5722] text-[10px] uppercase tracking-widest font-bold mb-2 block">
                      {occ.category}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white mb-2">{occ.title}</h3>
                    <p className="text-white/60 text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {occ.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

