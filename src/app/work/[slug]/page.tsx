import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pb-24">
      {/* Full-width Hero */}
      <div className="relative h-[80vh] min-h-[600px] bg-forest-green">
         <div className="absolute inset-0 flex items-center justify-center text-ivory/20 font-serif text-5xl">
            [ High Quality Project Cover ]
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-deepest-green via-deepest-green/40 to-transparent"></div>
         
         <div className="absolute bottom-16 left-0 right-0 container mx-auto px-6 md:px-12 z-10">
           <h1 className="text-5xl md:text-8xl font-serif text-ivory mb-6 max-w-5xl leading-tight">{project.title}</h1>
           <div className="flex flex-wrap gap-12 text-ivory/70">
             <div>
               <span className="uppercase text-[10px] tracking-widest block mb-2 text-ivory/50">Client</span>
               <span className="text-lg">{project.client}</span>
             </div>
             <div>
               <span className="uppercase text-[10px] tracking-widest block mb-2 text-ivory/50">Service</span>
               <span className="text-lg">{project.service}</span>
             </div>
             <div>
               <span className="uppercase text-[10px] tracking-widest block mb-2 text-ivory/50">Year</span>
               <span className="text-lg">{project.year}</span>
             </div>
           </div>
         </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24 max-w-4xl">
        <Link href="/work" className="inline-flex items-center text-leaf-green uppercase tracking-widest text-xs font-semibold mb-16 hover:text-ivory transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Work
        </Link>
        
        <div className="space-y-24 text-lg text-ivory/80 leading-relaxed font-light">
          
          <section>
            <h2 className="text-3xl font-serif text-ivory mb-6">The Idea</h2>
            <p>
              [ Content describing the initial idea, the client's vision, and the core objective of the project. ]
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-ivory mb-6">The Challenge</h2>
            <p>
              [ Content describing the obstacles faced, technical constraints, or creative hurdles that needed to be overcome. ]
            </p>
          </section>

          {/* Large Media Break */}
          <div className="aspect-video bg-forest-green/20 rounded-3xl border border-heritage-green/30 flex items-center justify-center w-[100vw] relative left-1/2 -translate-x-1/2 max-w-[1400px]">
             <Play className="w-16 h-16 text-leaf-green opacity-50" />
          </div>

          <section>
            <h2 className="text-3xl font-serif text-ivory mb-6">The Creative Direction</h2>
            <p>
              [ Detail the aesthetic choices, color palettes, typography, or cinematic style chosen for this project. ]
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-ivory mb-6">The Final Output</h2>
            <p className="mb-8">
              [ Summary of the final deliverables and the impact of the work. ]
            </p>
            <div className="bg-forest-green/10 border border-heritage-green/20 p-8 rounded-2xl">
              <span className="uppercase text-[10px] tracking-widest block mb-4 text-leaf-green">Deliverables</span>
              <ul className="space-y-3">
                {project.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-ivory/30 mr-4"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>

        <div className="mt-32 text-center border-t border-heritage-green/30 pt-24">
          <h2 className="text-4xl font-serif text-ivory mb-8">Ready to create something similar?</h2>
          <Link
            href="/start-project"
            className="inline-flex items-center justify-center px-10 py-5 bg-primary-green text-ivory rounded-full text-lg font-medium transition-all duration-300 hover:bg-leaf-green hover:text-deepest-green"
          >
            Start a Similar Project
          </Link>
        </div>
      </div>
    </div>
  );
}
