"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1920&q=80"
          alt="Motorsport background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase tracking-wider text-white mb-8"
        >
          DRIVER. CREATOR. ICON.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#shop"
            className="bg-neon text-black font-bold px-8 py-4 uppercase tracking-wider text-sm rounded-none hover:bg-neon/90 transition-colors"
          >
            SHOP LATEST COLLECTION
          </a>
          <a
            href="#calendar"
            className="border-2 border-neon text-neon px-8 py-4 uppercase tracking-wider text-sm rounded-none hover:bg-neon hover:text-black transition-colors"
          >
            VIEW RACE CALENDAR
          </a>
        </motion.div>
      </div>
    </section>
  );
}
