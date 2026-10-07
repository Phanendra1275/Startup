import Link from "next/link";
import { BRAND } from "@/config/brand";
import { ArrowUpRight, Globe, Video, Share2, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#070a18] relative overflow-hidden pt-16 pb-12 border-t border-[#6366F1]/20">
      <div className="container mx-auto px-6 md:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Electric Blue Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#5865F2] to-[#3B82F6] rounded-3xl p-8 md:p-10 flex flex-col justify-between text-white shadow-[0_10px_40px_rgba(88,101,242,0.4)]">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest font-bold opacity-80 mb-4 block">
                {BRAND.name} &bull; STUDIO
              </span>
              <h3 className="font-heading font-bold text-3xl sm:text-4xl mb-4 leading-tight">
                Beyond The Timeline.
              </h3>
              <p className="text-white/80 text-sm font-sans leading-relaxed mb-8">
                Crafting cinematic video edits, full-stack software, and digital experiences that elevate your brand.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#5865F2] flex items-center justify-center transition-all"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href={BRAND.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#5865F2] flex items-center justify-center transition-all"
              >
                <Video className="w-5 h-5" />
              </a>
              <a
                href={BRAND.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#5865F2] flex items-center justify-center transition-all"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#5865F2] flex items-center justify-center transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>


          {/* Right Dark Card Container */}
          <div className="lg:col-span-7 bg-[#0d1233] border border-[#6366F1]/20 rounded-3xl p-8 md:p-10 flex flex-col justify-between">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-mono text-[#818CF8] text-xs uppercase tracking-widest font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2.5 font-sans text-slate-300 text-xs">
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
                  <li><Link href="/start-project" className="hover:text-white transition-colors">Start Project</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-[#818CF8] text-xs uppercase tracking-widest font-bold mb-4">Direct Contact</h4>
                <ul className="space-y-2.5 font-sans text-slate-300 text-xs">
                  <li><a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors truncate block">{BRAND.email}</a></li>
                  <li><a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{BRAND.phone}</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-[#818CF8] text-xs uppercase tracking-widest font-bold mb-4">Location</h4>
                <p className="text-slate-300 text-xs font-sans leading-relaxed">
                  Hyderabad, India &bull; Remote Worldwide
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#6366F1]/15 flex flex-wrap items-center justify-between gap-4">
              <p className="text-slate-400 font-mono text-xs">
                Have a project in mind? Let&rsquo;s get started today.
              </p>
              <Link
                href="/start-project"
                className="btn-indigo px-6 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
              >
                Contact Us <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#6366F1]/15 flex flex-col sm:flex-row justify-between items-center text-slate-500 font-mono text-xs gap-3">
          <p>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


