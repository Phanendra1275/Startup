import { BRAND } from "@/config/brand";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-24">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <span className="text-leaf-green uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">
          Our Story
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-ivory mb-8 leading-tight">
          We blend cinematic scale with digital precision.
        </h1>
        <p className="text-xl text-ivory/70 leading-relaxed font-light">
          {BRAND.name} is a modern Indian creative studio. We believe that every brand, every occasion, and every idea deserves more than just a template. We build bespoke visual experiences powered by human creativity and artificial intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        <div className="aspect-square bg-forest-green/20 rounded-full border border-heritage-green/30 relative flex items-center justify-center p-12">
          {/* Decorative mandala-inspired abstraction */}
          <div className="absolute inset-4 border border-leaf-green/10 rounded-full rotate-45"></div>
          <div className="absolute inset-8 border border-leaf-green/10 rounded-full -rotate-45"></div>
          <div className="text-center">
            <span className="font-serif text-6xl text-leaf-green italic block mb-4">70%</span>
            <span className="text-ivory/60 uppercase tracking-widest text-xs">Modern Digital</span>
          </div>
        </div>
        
        <div className="space-y-8 text-lg text-ivory/80 leading-relaxed font-light">
          <h2 className="text-4xl font-serif text-ivory mb-6">Our Philosophy</h2>
          <p>
            We draw inspiration from deep Indian heritage—its vibrant celebrations, intricate geometry, and rich storytelling traditions—and merge it with the bleeding edge of modern digital design.
          </p>
          <p>
            Whether it’s a 4K AI-generated wedding film that feels like a royal cinematic epic, or a sleek, lightning-fast Next.js website for a global startup, we approach every project with the same meticulous craftsmanship.
          </p>
        </div>
      </div>

      <div className="text-center bg-forest-green/10 p-16 rounded-3xl border border-heritage-green/20">
        <h2 className="text-4xl font-serif text-ivory mb-8">Ready to collaborate?</h2>
        <Link
          href="/start-project"
          className="inline-flex items-center justify-center px-10 py-5 bg-primary-green text-ivory rounded-full text-lg font-medium transition-all duration-300 hover:bg-leaf-green hover:text-deepest-green"
        >
          Start Your Project
        </Link>
      </div>
    </div>
  );
}
