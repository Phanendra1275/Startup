import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as Icons from "lucide-react";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const IconComponent = (Icons as any)[service.icon] || Icons.Code;

  return (
    <div className="container mx-auto px-6 md:px-12 py-24 min-h-[70vh]">
      <Link href="/services" className="inline-flex items-center text-leaf-green uppercase tracking-widest text-xs font-semibold mb-12 hover:text-ivory transition-colors">
        <Icons.ArrowLeft className="w-4 h-4 mr-2" />
        Back to Services
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="w-20 h-20 rounded-3xl bg-forest-green/40 border border-heritage-green/50 flex items-center justify-center text-leaf-green mb-8 shadow-[0_0_30px_rgba(85,216,62,0.15)]">
            <IconComponent strokeWidth={1.5} size={40} />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-ivory mb-8">{service.title}</h1>
          <p className="text-xl text-ivory/70 leading-relaxed mb-12 max-w-xl">
            {service.description}
          </p>

          <h3 className="text-2xl font-serif text-ivory mb-6">What's included</h3>
          <ul className="space-y-4 mb-12">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center text-ivory/80 text-lg">
                <div className="w-2 h-2 rounded-full bg-leaf-green mr-4"></div>
                {feature}
              </li>
            ))}
          </ul>

          <Link
            href={`/start-project?service=${service.id}`}
            className="inline-flex items-center justify-center px-10 py-5 bg-primary-green text-ivory rounded-full text-lg font-medium transition-all duration-300 hover:bg-leaf-green hover:text-deepest-green shadow-[0_0_20px_rgba(20,140,90,0.4)]"
          >
            Start a {service.title} Project
          </Link>
        </div>

        <div className="aspect-[4/5] rounded-3xl bg-forest-green/20 border border-heritage-green/30 relative overflow-hidden flex items-center justify-center">
          {/* Visual placeholder for the service detail */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-green/10 to-transparent"></div>
          <div className="text-ivory/20 font-serif text-2xl italic tracking-wider px-8 text-center">
            [ Premium Visual Representation of {service.title} ]
          </div>
        </div>
      </div>
    </div>
  );
}
