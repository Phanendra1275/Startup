"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { pricingList } from "@/data/pricing";

export function PricingTeaser() {
  return (
    <section className="py-24 bg-deepest-green relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <span className="text-leaf-green uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
              Investment
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-ivory mb-6"
            >
              Premium quality, transparent pricing.
            </motion.h2>
            <p className="text-ivory/60 text-lg mb-10 max-w-md">
              Every project is unique. We provide starting estimates so you know what to expect before we dive into the details.
            </p>
            <Link
              href="/start-project"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-leaf-green text-leaf-green hover:bg-leaf-green hover:text-deepest-green rounded-full text-base font-medium transition-all duration-300"
            >
              Get Exact Quote
            </Link>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-forest-green/20 border border-heritage-green/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <ul className="space-y-6">
                {pricingList.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex justify-between items-center border-b border-ivory/10 pb-6 last:border-0 last:pb-0"
                  >
                    <span className="text-ivory text-lg">{item.service}</span>
                    <span className="text-leaf-green font-serif italic text-xl">{item.price}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
