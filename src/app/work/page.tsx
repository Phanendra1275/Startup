import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WorkPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-24">
      <div className="mb-24">
        <h1 className="text-5xl md:text-7xl font-serif text-ivory mb-6">Selected Work</h1>
        <p className="text-xl text-ivory/60 max-w-2xl">
          A showcase of our finest visual stories, brand identities, and digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            href={`/work/${project.slug}`}
            className={`group block ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-forest-green/20 mb-8 border border-heritage-green/30">
              <div className="absolute inset-0 bg-ivory/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              
              {/* Visual Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-ivory/20 font-serif text-2xl bg-forest-green/30 group-hover:scale-105 transition-transform duration-700">
                [ Project Visual ]
              </div>
              
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-leaf-green text-deepest-green font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-full scale-90 group-hover:scale-100 transition-transform duration-500 shadow-xl flex items-center">
                  View Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-leaf-green font-serif italic text-lg">{String(index + 1).padStart(2, '0')}</span>
                <div className="h-[1px] flex-1 bg-heritage-green/50"></div>
              </div>
              <h2 className="text-3xl font-serif text-ivory mb-2 group-hover:text-leaf-green transition-colors">{project.title}</h2>
              <p className="text-ivory/60 uppercase tracking-widest text-xs">{project.service}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
