"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

export function SelectedWorkTeaser() {
  return (
    <section className="py-24 bg-deepest-green relative" id="work">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <span className="text-leaf-green uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
            Selected Work
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-ivory"
          >
            Proof of imagination.
          </motion.h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-24 items-center`}
            >
              <div className="w-full md:w-3/5 group relative cursor-pointer">
                <Link href={`/work/${project.slug}`}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-forest-green/20">
                    <div className="absolute inset-0 bg-ivory/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    {/* Placeholder image styling */}
                    <div className="absolute inset-0 flex items-center justify-center text-ivory/20 font-serif text-4xl bg-forest-green/30 group-hover:scale-105 transition-transform duration-700">
                      [ Cinematic Visual ]
                    </div>
                    
                    {/* Custom cursor label simulation for desktop */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-leaf-green text-deepest-green font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-full scale-90 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                        View Project
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <div className="text-leaf-green font-serif text-xl italic mb-6">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-4xl font-serif text-ivory mb-4 hover:text-leaf-green transition-colors">
                  <Link href={`/work/${project.slug}`}>{project.title}</Link>
                </h3>
                <div className="flex flex-col space-y-4 mb-8">
                  <div>
                    <span className="text-ivory/40 uppercase text-xs tracking-widest block mb-1">Service</span>
                    <span className="text-ivory/90 text-sm">{project.service}</span>
                  </div>
                  <div>
                    <span className="text-ivory/40 uppercase text-xs tracking-widest block mb-1">Client</span>
                    <span className="text-ivory/90 text-sm">{project.client}</span>
                  </div>
                </div>
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center text-sm font-medium tracking-wide text-ivory/60 hover:text-leaf-green transition-colors uppercase w-fit group"
                >
                  <span className="border-b border-transparent group-hover:border-leaf-green pb-1 transition-all">
                    Explore Case Study
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-32 flex justify-center">
          <Link
            href="/work"
            className="px-8 py-4 border border-heritage-green/50 hover:border-leaf-green rounded-full text-ivory hover:text-leaf-green transition-colors font-medium tracking-wide"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
