"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { id: "01", title: "Tell us your idea", desc: "Share your vision through our interactive project builder." },
  { id: "02", title: "We plan the direction", desc: "Design strategy, storyboards, and technology blueprint." },
  { id: "03", title: "We create", desc: "Our studio brings the concept to life with pro precision." },
  { id: "04", title: "You review", desc: "Collaborative feedback and seamless refinements." },
  { id: "05", title: "We deliver", desc: "Final production-ready assets launched to market." },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section ref={containerRef} className="py-24 bg-[#070a18] border-t border-[#6366F1]/20 relative">
      <div className="container mx-auto px-6 md:px-14">
        <div className="mb-20 text-center">
          <span className="mb-4 inline-flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#818CF8]">
            <span className="h-px w-8 bg-[#5865F2]"></span>
            The Process
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase">
            HOW IT <span className="bg-gradient-to-r from-[#818CF8] to-[#5865F2] bg-clip-text text-transparent">WORKS.</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-[#6366F1]/20 -translate-x-1/2 hidden md:block">
            <motion.div
              className="absolute top-0 w-full bg-[#5865F2] origin-top shadow-[0_0_15px_rgba(88,101,242,0.8)]"
              style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            />
          </div>

          <div className="space-y-20 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={step.id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="font-mono text-[#818CF8] text-sm font-bold block mb-2">{step.id}</span>
                      <h3 className="text-2xl font-heading font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-slate-300 text-base font-sans leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>

                  {/* Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0d1233] border border-[#5865F2] items-center justify-center z-10 text-[#818CF8] font-mono text-sm font-bold shadow-lg">
                    {step.id}
                  </div>

                  {/* Visual Container */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.5 }}
                      className="aspect-video bg-[#0d1233] rounded-3xl border border-[#6366F1]/20 flex items-center justify-center relative overflow-hidden shadow-xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/10 to-transparent"></div>
                      <span className="text-[#818CF8]/20 font-heading text-6xl font-bold opacity-40 absolute right-4 bottom-2">
                        {step.id}
                      </span>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


