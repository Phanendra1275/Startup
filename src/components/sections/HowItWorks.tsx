"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { id: "01", title: "Tell us your idea", desc: "Share your vision through our project builder." },
  { id: "02", title: "We plan the direction", desc: "Moodboards, scripts, and design strategy." },
  { id: "03", title: "We create", desc: "Our studio brings the concept to life." },
  { id: "04", title: "You review", desc: "Collaborative feedback and refinements." },
  { id: "05", title: "We deliver", desc: "Final premium assets ready for the world." },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section ref={containerRef} className="py-32 bg-deepest-green relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 text-center">
          <span className="text-leaf-green uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
            The Process
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-ivory">
            How it works
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-heritage-green/30 -translate-x-1/2 hidden md:block">
            <motion.div 
              className="absolute top-0 w-full bg-leaf-green origin-top shadow-[0_0_10px_rgba(85,216,62,0.5)]"
              style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            />
          </div>

          <div className="space-y-24 relative">
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
                      transition={{ duration: 0.6 }}
                    >
                      <h3 className="text-3xl font-serif text-ivory mb-4">{step.title}</h3>
                      <p className="text-ivory/60 text-lg">{step.desc}</p>
                    </motion.div>
                  </div>

                  {/* Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-deepest-green border-2 border-heritage-green items-center justify-center z-10 text-leaf-green font-serif text-xl italic">
                    {step.id}
                  </div>

                  {/* Visual Representation */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.6 }}
                      className="aspect-video bg-forest-green/20 rounded-2xl border border-heritage-green/20 flex items-center justify-center relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 to-transparent"></div>
                      <span className="text-ivory/20 font-serif text-6xl italic opacity-50 absolute right-4 bottom-0 translate-y-4">
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
