import { occasions } from "@/data/occasions";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";

export function generateStaticParams() {
  return occasions.map((o) => ({ slug: o.slug }));
}

export default async function OccasionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const occasion = occasions.find((o) => o.slug === resolvedParams.slug);

  if (!occasion) {
    notFound();
  }

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0 bg-deepest-green">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-deepest-green via-deepest-green/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 pb-16">
          <Link href="/occasions" className="inline-flex items-center text-leaf-green uppercase tracking-widest text-xs font-semibold mb-8 hover:text-ivory transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Occasions
          </Link>
          
          <span className="text-leaf-green/80 uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
            {occasion.category}
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-ivory mb-6 max-w-4xl">{occasion.title}</h1>
          <p className="text-xl md:text-2xl text-ivory/70 max-w-2xl font-light">
            {occasion.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-serif text-ivory mb-8">Curated Styles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {occasion.styles.map((style, i) => (
                <div key={i} className="group relative aspect-video rounded-2xl overflow-hidden bg-forest-green/30 border border-heritage-green/40 cursor-pointer">
                   <div className="absolute inset-0 bg-deepest-green/50 group-hover:bg-deepest-green/20 transition-colors duration-500 z-10"></div>
                   
                   <div className="absolute inset-0 flex items-center justify-center z-20">
                     <div className="w-12 h-12 rounded-full bg-ivory/10 backdrop-blur-md flex items-center justify-center text-ivory opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                       <Play className="w-5 h-5 ml-1" />
                     </div>
                   </div>

                   <div className="absolute bottom-6 left-6 z-20">
                     <h3 className="text-2xl font-serif text-ivory">{style}</h3>
                   </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="bg-forest-green/20 rounded-3xl p-8 border border-heritage-green/30 sticky top-32">
              <h3 className="text-2xl font-serif text-ivory mb-4">Start your {occasion.title} project</h3>
              <p className="text-ivory/60 mb-8">
                Tell us your vision and let us craft a cinematic memory that lasts forever.
              </p>
              <Link
                href={`/start-project?purpose=${occasion.id}`}
                className="block w-full text-center px-8 py-4 bg-primary-green text-ivory rounded-full text-lg font-medium transition-all duration-300 hover:bg-leaf-green hover:text-deepest-green"
              >
                Create Something Like This
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
