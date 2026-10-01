import { services } from "@/data/services";
import Link from "next/link";
import * as Icons from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-24">
      <div className="mb-24">
        <h1 className="text-5xl md:text-7xl font-serif text-ivory mb-6">Our Services</h1>
        <p className="text-xl text-ivory/60 max-w-2xl">
          Comprehensive creative solutions tailored for modern brands and meaningful occasions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {services.map((service, index) => {
          const IconComponent = (Icons as any)[service.icon] || Icons.Code;
          return (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group block rounded-3xl bg-forest-green/20 border border-heritage-green/30 p-8 md:p-12 hover:bg-forest-green/40 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-deepest-green border border-heritage-green/50 flex items-center justify-center text-leaf-green group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_15px_rgba(85,216,62,0.3)]">
                  <IconComponent strokeWidth={1.5} size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-serif text-ivory mb-4 group-hover:text-leaf-green transition-colors">{service.title}</h2>
                  <p className="text-ivory/70 leading-relaxed mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-ivory/60 text-sm">
                        <Icons.CheckCircle2 className="w-4 h-4 mr-3 text-leaf-green/70" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center text-sm font-medium tracking-wide text-ivory/50 group-hover:text-ivory transition-colors uppercase">
                    View Details
                    <Icons.ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
