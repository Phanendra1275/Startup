import { BRAND } from "@/config/brand";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 md:px-14 py-24">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <span className="mb-4 inline-flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#FF5722]">
          <span className="h-px w-8 bg-[#FF5722]/60"></span>
          Our Story
        </span>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          We blend cinematic scale with digital <span className="text-[#FF5722]">precision.</span>
        </h1>
        <p className="text-xl text-white/70 leading-relaxed font-sans">
          {BRAND.name} is a modern creative studio. We believe that every brand, every occasion, and every idea deserves more than just a template. We build bespoke visual experiences powered by human creativity and artificial intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        <div className="aspect-square bg-[#14161a] rounded-full border border-white/10 relative flex items-center justify-center p-12 shadow-2xl">
          <div className="absolute inset-4 border border-[#FF5722]/20 rounded-full rotate-45"></div>
          <div className="absolute inset-8 border border-[#FF5722]/20 rounded-full -rotate-45"></div>
          <div className="text-center">
            <span className="font-heading text-6xl font-bold text-[#FF5722] block mb-2">150+</span>
            <span className="font-mono text-white/60 uppercase tracking-widest text-xs">Projects Delivered</span>
          </div>
        </div>

        <div className="space-y-6 text-lg text-white/80 leading-relaxed font-sans">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">Our Philosophy</h2>
          <p>
            We draw inspiration from deep storytelling traditions—intricate geometry, bold color dynamics, and narrative depth—and merge it with the bleeding edge of modern software development and AI tools.
          </p>
          <p>
            Whether it&rsquo;s a 4K AI-generated film that feels like a cinematic blockbuster, or a sleek, lightning-fast Next.js web application for a scaling enterprise, we approach every project with meticulous craftsmanship.
          </p>
        </div>
      </div>

      <div className="text-center bg-[#14161a] p-16 rounded-3xl border border-white/10 shadow-2xl">
        <h2 className="text-4xl font-heading font-bold text-white mb-8">Ready to collaborate?</h2>
        <Link
          href="/start-project"
          className="btn-accent inline-flex items-center gap-2 rounded-full px-10 py-5 font-mono text-xs md:text-sm uppercase tracking-wider"
        >
          Start Your Project <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

