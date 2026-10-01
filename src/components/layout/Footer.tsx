import Link from "next/link";
import { BRAND } from "@/config/brand";

export function Footer() {
  return (
    <footer className="bg-deepest-green relative overflow-hidden pt-16 md:pt-24 pb-12 border-t border-heritage-green/30">
      {/* Subtle background motif */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] rounded-full bg-forest-green/20 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-ivory mb-8 max-w-3xl leading-tight">
            Have an idea worth creating?
          </h2>
          <Link
            href="/start-project"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary-green hover:bg-leaf-green text-ivory hover:text-deepest-green transition-all duration-500 rounded-full text-base md:text-lg font-medium overflow-hidden shadow-[0_0_20px_rgba(20,140,90,0.3)] hover:shadow-[0_0_30px_rgba(85,216,62,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let’s build it together
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pt-12 border-t border-heritage-green/40">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-serif text-ivory mb-4 inline-block">
              {BRAND.name.toUpperCase()}
            </Link>
            <p className="text-ivory/60 max-w-sm mt-2 text-sm leading-relaxed">
              {BRAND.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-ivory font-medium uppercase tracking-widest text-xs mb-4 md:mb-6">Explore</h4>
            <ul className="space-y-3 md:space-y-4 text-ivory/70 text-sm">
              <li><Link href="/services" className="hover:text-leaf-green transition-colors">Services</Link></li>
              <li><Link href="/occasions" className="hover:text-leaf-green transition-colors">Occasions</Link></li>
              <li><Link href="/work" className="hover:text-leaf-green transition-colors">Selected Work</Link></li>
              <li><Link href="/about" className="hover:text-leaf-green transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-ivory font-medium uppercase tracking-widest text-xs mb-4 md:mb-6">Connect</h4>
            <ul className="space-y-3 md:space-y-4 text-ivory/70 text-sm">
              <li>
                <a href={BRAND.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-leaf-green transition-colors">Instagram</a>
              </li>
              <li>
                <a href={BRAND.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-leaf-green transition-colors">YouTube</a>
              </li>
              <li>
                <a href={BRAND.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-leaf-green transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="hover:text-leaf-green transition-colors">Email</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-heritage-green/20 flex flex-col md:flex-row justify-between items-center text-ivory/40 text-xs gap-4">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-ivory transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ivory transition-colors">Terms of Service</Link>
          </div>
        </div>
        
        {/* Minimal Indian decorative border at the bottom */}
        <div className="w-full h-1 mt-8 opacity-20 flex justify-center space-x-2">
           <div className="w-2 h-2 bg-heritage-green rotate-45"></div>
           <div className="w-2 h-2 bg-heritage-green rotate-45"></div>
           <div className="w-2 h-2 bg-heritage-green rotate-45"></div>
        </div>
      </div>
    </footer>
  );
}
