"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Sparkles } from "lucide-react";

const plans = [
  {
    name: "STARTER",
    price: "₹2,999",
    tagline: "Ideal for quick creative assets & edits.",
    features: [
      "Access to Creator Tools",
      "Fast Turnaround",
      "1 Custom Revision",
      "Standard Resolution",
      "Basic Content Strategy",
      "Full Commercial License",
    ],
    highlight: false,
    cta: "GET STARTED",
  },
  {
    name: "GROWTH",
    price: "₹5,999",
    tagline: "Best for scaling brands & video campaigns.",
    badge: "MOST POPULAR",
    features: [
      "Everything in Starter",
      "Advanced Motion Graphics",
      "4K Output Delivery",
      "Priority Turnaround",
      "Dedicated Project Manager",
      "Custom Brand Assets",
      "Social Media Optimization",
    ],
    highlight: true,
    cta: "GET STARTED NOW",
  },
  {
    name: "PROFESSIONAL",
    price: "₹9,999",
    tagline: "Full-stack development & AI production.",
    features: [
      "Everything in Growth",
      "Custom Web & App Dev",
      "AI Video Production",
      "3 Custom Revisions",
      "Source Files Included",
      "24/7 Priority Support",
      "Performance Tuning",
    ],
    highlight: false,
    cta: "GET STARTED NOW",
  },
];

export function PricingTeaser() {
  return (
    <section className="py-24 bg-[#070a18] border-t border-[#6366F1]/20 relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-6 md:px-14 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="mb-4 inline-flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#818CF8]">
            <span className="h-px w-8 bg-[#5865F2]"></span>
            Pricing &amp; Packages
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight">
            CHOOSE YOUR <span className="bg-gradient-to-r from-[#818CF8] to-[#5865F2] bg-clip-text text-transparent">PLAN</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm md:text-base font-sans">
            Select a package tailored for your project or get in touch for custom enterprise needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col justify-between p-8 rounded-3xl border transition-all duration-300 shadow-2xl ${
                plan.highlight
                  ? "bg-[#0f1438] border-[#5865F2] shadow-[0_10px_40px_rgba(88,101,242,0.3)] ring-1 ring-[#5865F2]"
                  : "bg-[#0d1233] border-[#6366F1]/20 hover:border-[#6366F1]/50"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 right-6 px-3.5 py-1 bg-[#5865F2] text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="font-heading font-bold text-xl text-white tracking-wide uppercase mb-1">
                  {plan.name}
                </h3>
                <p className="text-slate-400 text-xs font-sans mb-6">{plan.tagline}</p>

                <div className="mb-6 flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 text-xs font-mono">/ project</span>
                </div>

                <Link
                  href="/start-project"
                  className={`w-full py-3.5 px-6 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider text-center block mb-8 transition-all ${
                    plan.highlight
                      ? "btn-indigo"
                      : "btn-card-outline"
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="space-y-3 border-t border-[#6366F1]/15 pt-6">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#5865F2] shrink-0" />
                      <span>{feat}</span>
                    </div>
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


