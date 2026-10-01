"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <section className="py-24 bg-deepest-green overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
        <span className="text-leaf-green uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
          The Transformation
        </span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-4xl md:text-5xl font-serif text-ivory max-w-2xl mx-auto"
        >
          See the difference quality makes.
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-forest-green/20 select-none cursor-ew-resize touch-none border border-heritage-green/30"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* After Image (Base layer) */}
          <div className="absolute inset-0 bg-forest-green flex items-center justify-center">
             <div className="text-ivory/30 font-serif text-3xl">POLISHED OUTPUT</div>
             {/* Gradient overlay to simulate polished look */}
             <div className="absolute inset-0 bg-gradient-to-tr from-primary-green/20 to-transparent"></div>
          </div>
          
          <div className="absolute bottom-6 right-6 px-4 py-2 bg-deepest-green/60 backdrop-blur-sm rounded-full border border-ivory/10 text-ivory text-xs tracking-wider z-10">
            AFTER
          </div>

          {/* Before Image (Clipped layer) */}
          <div 
            className="absolute inset-0 bg-deepest-green flex items-center justify-center overflow-hidden border-r-2 border-leaf-green"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
             <div className="text-ivory/20 font-sans text-xl tracking-widest absolute inset-0 flex items-center justify-center" style={{ width: '100vw', maxWidth: '1024px' }}>
                RAW ASSET
             </div>
             
             <div className="absolute bottom-6 left-6 px-4 py-2 bg-deepest-green/60 backdrop-blur-sm rounded-full border border-ivory/10 text-ivory/60 text-xs tracking-wider z-10">
                BEFORE
             </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-transparent z-20 flex items-center justify-center -ml-[2px]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 bg-leaf-green rounded-full shadow-[0_0_15px_rgba(85,216,62,0.5)] flex items-center justify-center text-deepest-green">
              <MoveHorizontal className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
