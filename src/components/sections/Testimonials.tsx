"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Quote, Star } from "lucide-react";

const categories = ["All Reviews", "Editing", "Design", "Development", "Motion"];

export function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState("All Reviews");

  return (
    <section className="py-24 bg-[#070a18] border-t border-[#6366F1]/20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-14 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="mb-4 inline-flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#818CF8]">
              <span className="h-px w-8 bg-[#5865F2]"></span>
              WHAT PEOPLE SAY
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase">
              REAL CLIENTS. <span className="bg-gradient-to-r from-[#818CF8] to-[#5865F2] bg-clip-text text-transparent">REAL RESULTS.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-mono text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-[#5865F2] text-white shadow-lg"
                    : "bg-[#0d1233] text-slate-400 border border-[#6366F1]/20 hover:border-[#5865F2] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#0d1233] rounded-3xl p-8 border border-[#6366F1]/20 hover:border-[#5865F2] transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-[#5865F2]/40 absolute top-6 right-6" />
              <p className="text-slate-200 text-sm font-sans leading-relaxed mb-8 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-[#6366F1]/15 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-heading font-bold text-sm">{t.clientName}</h4>
                  <span className="text-[#818CF8] font-mono text-[10px] uppercase tracking-wider font-semibold">{t.serviceUsed}</span>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-3.5 h-3.5 fill-[#5865F2] text-[#5865F2]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


