import { occasions } from "@/data/occasions";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function OccasionsPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-24">
      <div className="mb-24">
        <h1 className="text-5xl md:text-7xl font-serif text-ivory mb-6">Occasion Studio</h1>
        <p className="text-xl text-ivory/60 max-w-2xl">
          Visual stories for life's most meaningful moments and grandest celebrations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {occasions.map((occ) => (
          <Link
            key={occ.id}
            href={`/occasions/${occ.slug}`}
            className="group block rounded-3xl overflow-hidden bg-forest-green/20 border border-heritage-green/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(20,140,90,0.3)]"
          >
            <div className="aspect-[4/3] relative overflow-hidden bg-deepest-green">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-deepest-green to-transparent"></div>
               
               <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-ivory/10 backdrop-blur-md flex items-center justify-center text-ivory opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                 <ArrowUpRight className="w-5 h-5" />
               </div>
            </div>
            
            <div className="p-8">
              <span className="text-leaf-green uppercase tracking-[0.2em] text-[10px] font-semibold mb-3 block">
                {occ.category}
              </span>
              <h2 className="text-3xl font-serif text-ivory mb-3 group-hover:text-leaf-green transition-colors">{occ.title}</h2>
              <p className="text-ivory/60 text-sm mb-6">{occ.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {occ.styles.slice(0, 3).map((style, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full border border-ivory/10 text-ivory/70 bg-ivory/5">
                    {style}
                  </span>
                ))}
                {occ.styles.length > 3 && (
                  <span className="text-xs px-3 py-1 rounded-full text-ivory/50">+{occ.styles.length - 3}</span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
