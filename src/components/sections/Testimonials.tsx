"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-forest-green/20 border-y border-heritage-green/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <span className="text-leaf-green uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
            Client Stories
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-ivory"
          >
            Don't just take our word for it.
          </motion.h2>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-12 -mx-6 px-6 md:mx-0 md:px-0">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] flex-1 snap-center bg-deepest-green rounded-3xl p-8 border border-heritage-green/30 relative"
            >
              <Quote className="w-10 h-10 text-leaf-green/20 absolute top-6 right-6" />
              <p className="text-ivory/80 text-lg md:text-xl font-serif italic mb-8 relative z-10 leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <h4 className="text-ivory font-medium">{t.clientName}</h4>
                <span className="text-leaf-green/80 text-xs uppercase tracking-wider">{t.serviceUsed}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
