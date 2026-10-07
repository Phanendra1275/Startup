"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";
import * as Icons from "lucide-react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function ServicesOverview() {
  return (
    <section className="py-24 bg-[#070a18] relative z-10 border-t border-[#6366F1]/20" id="services">
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-14 relative z-10">
        <div className="mb-16 max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#818CF8]">
            <span className="h-px w-8 bg-[#5865F2]"></span>
            What We Do
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.06] text-white uppercase">
            SERVICES BUILT FOR <span className="bg-gradient-to-r from-[#818CF8] to-[#5865F2] bg-clip-text text-transparent">IMPACT.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base md:text-lg font-sans">
            From high-end video editing and AI generation to custom web development and brand systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.Code;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col justify-between h-full p-8 bg-[#0d1233] border border-[#6366F1]/25 rounded-3xl hover:border-[#5865F2] hover:bg-[#111740] transition-all duration-300 relative overflow-hidden shadow-xl"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#5865F2]/15 border border-[#5865F2]/30 flex items-center justify-center text-[#818CF8] group-hover:scale-110 group-hover:bg-[#5865F2] group-hover:text-white transition-all duration-300">
                        <IconComponent strokeWidth={1.8} size={22} />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-[#818CF8] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-[#818CF8] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed font-sans mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 font-sans text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5865F2]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-[#6366F1]/15 flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400 group-hover:text-white transition-colors">
                    <span>Explore Service</span>
                    <span className="text-[#818CF8]">&rarr;</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


