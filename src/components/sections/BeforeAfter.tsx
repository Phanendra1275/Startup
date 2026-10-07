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
    <section className="py-24 bg-[#0b0c0e] border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-14 text-center mb-16">
        <span className="mb-4 inline-flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#FF5722]">
          <span className="h-px w-8 bg-[#FF5722]/60"></span>
          The Transformation
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-3xl mx-auto"
        >
          See the difference quality <span className="text-[#FF5722]">makes.</span>
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 md:px-14 max-w-5xl">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-[#14161a] select-none cursor-ew-resize touch-none border border-white/10 shadow-2xl"
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
          <div className="absolute inset-0 bg-[#1c1f24] flex items-center justify-center">
            <div className="text-white/40 font-heading font-bold text-2xl md:text-3xl">POLISHED OUTPUT (PRO PRODUCTION)</div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5722]/10 via-transparent to-transparent pointer-events-none"></div>
          </div>

          <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full border border-white/10 text-white font-mono text-xs tracking-wider z-10">
            AFTER (NOVA STUDIO)
          </div>

          {/* Before Image (Clipped layer) */}
          <div
            className="absolute inset-0 bg-[#0e0e10] flex items-center justify-center overflow-hidden border-r-2 border-[#FF5722]"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <div className="text-white/20 font-mono text-xl tracking-widest absolute inset-0 flex items-center justify-center" style={{ width: '100vw', maxWidth: '1024px' }}>
              RAW ASSET / DRAFT
            </div>

            <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full border border-white/10 text-white/60 font-mono text-xs tracking-wider z-10">
              BEFORE
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-transparent z-20 flex items-center justify-center -ml-[2px]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 bg-[#FF5722] rounded-full shadow-[0_0_20px_rgba(255,87,34,0.7)] flex items-center justify-center text-white">
              <MoveHorizontal className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

