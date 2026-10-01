"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";
import * as Icons from "lucide-react";

export function ServicesOverview() {
  return (
    <section className="py-24 bg-deepest-green relative z-10" id="services">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-ivory mb-6"
          >
            What can we create for you?
          </motion.h2>
          <div className="w-24 h-1 bg-leaf-green/50 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.Code;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={`/services/${service.slug}`}
                  className="group block h-full p-8 md:p-10 bg-deepest-green hover:bg-forest-green/20 border-t border-heritage-green/30 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-xl bg-forest-green/40 flex items-center justify-center text-leaf-green group-hover:scale-110 transition-transform duration-500">
                        <IconComponent strokeWidth={1.5} size={24} />
                      </div>
                      <Icons.ArrowRight className="w-5 h-5 text-ivory/20 group-hover:text-leaf-green group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    
                    <h3 className="text-3xl font-serif text-ivory mb-4 group-hover:text-leaf-green transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-ivory/60 leading-relaxed font-light mb-8 flex-1">
                      {service.description}
                    </p>

                    <div className="text-xs font-medium tracking-[0.2em] text-ivory/40 uppercase group-hover:text-ivory transition-colors">
                      View Service
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
