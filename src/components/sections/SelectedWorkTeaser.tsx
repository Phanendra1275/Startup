"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function SelectedWorkTeaser() {
  return (
    <section className="py-24 bg-[#0b0c0e] relative border-t border-white/10" id="work">
      <div className="container mx-auto px-6 md:px-14">
        <div className="mb-20">
          <span className="mb-4 flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#FF5722]">
            <span className="h-px w-8 bg-[#FF5722]/60"></span>
            Selected Portfolio
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white"
          >
            Proof of <span className="text-[#FF5722]">imagination.</span>
          </motion.h2>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
            >
              <div className="w-full md:w-3/5 group relative cursor-pointer">
                <Link href={`/work/${project.slug}`}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#14161a] border border-white/10 group-hover:border-[#FF5722]/50 transition-all duration-500 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white/30 font-heading text-3xl font-bold bg-[#14161a] group-hover:scale-105 transition-transform duration-700">
                      [ {project.title} Visual ]
                    </div>

                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="btn-accent font-mono text-xs tracking-wider uppercase px-6 py-3 rounded-full flex items-center gap-2 shadow-2xl">
                        View Project <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <div className="font-mono text-[#FF5722] text-xl font-bold mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 hover:text-[#FF5722] transition-colors">
                  <Link href={`/work/${project.slug}`}>{project.title}</Link>
                </h3>
                <div className="flex flex-col space-y-3 mb-6 font-sans">
                  <div>
                    <span className="font-mono text-white/40 uppercase text-[11px] tracking-widest block mb-1">Service</span>
                    <span className="text-white/90 text-sm font-semibold">{project.service}</span>
                  </div>
                  <div>
                    <span className="font-mono text-white/40 uppercase text-[11px] tracking-widest block mb-1">Client</span>
                    <span className="text-white/90 text-sm">{project.client}</span>
                  </div>
                </div>
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#FF5722] hover:text-[#FF7A1A] transition-colors w-fit group"
                >
                  <span className="border-b border-[#FF5722] pb-0.5">
                    Explore Case Study
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <Link
            href="/work"
            className="btn-outline font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

