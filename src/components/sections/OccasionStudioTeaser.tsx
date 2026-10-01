"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { occasions } from "@/data/occasions";
import { ArrowUpRight } from "lucide-react";

export function OccasionStudioTeaser() {
  // Only take a few for the homepage teaser
  const teaserOccasions = occasions.slice(0, 4);

  return (
    <section className="py-24 relative overflow-hidden" id="occasions">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-leaf-green uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
              The Occasion Studio
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-ivory"
            >
              Every occasion deserves its own story.
            </motion.h2>
          </div>
          <Link
            href="/occasions"
            className="group flex items-center text-ivory/80 hover:text-leaf-green transition-colors pb-2 border-b border-ivory/20 hover:border-leaf-green"
          >
            Explore All Occasions
            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teaserOccasions.map((occ, i) => (
            <motion.div
              key={occ.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/occasions/${occ.slug}`}
                className="group relative block aspect-[3/4] rounded-2xl overflow-hidden bg-forest-green/40 border border-heritage-green/30"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-deepest-green/90 via-deepest-green/40 to-transparent z-10 transition-opacity group-hover:opacity-80"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105"></div>
                
                {/* Hover motif based on category */}
                <div className={`absolute top-6 right-6 w-12 h-12 border border-ivory/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-20 translate-y-4 group-hover:translate-y-0 ${occ.category === 'festival' ? 'rotate-45' : ''}`}>
                  <ArrowUpRight className="w-5 h-5 text-ivory" />
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-leaf-green/80 uppercase text-[10px] tracking-widest font-semibold mb-2 block">
                      {occ.category}
                    </span>
                    <h3 className="text-2xl font-serif text-ivory mb-2">{occ.title}</h3>
                    <p className="text-ivory/60 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
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
