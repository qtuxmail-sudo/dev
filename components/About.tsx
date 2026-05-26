"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
      >
        {/* Image - 3 cols */}
        <div className="lg:col-span-3 relative aspect-[4/3] w-full overflow-hidden bg-charcoal">
          <Image
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80"
            alt="Sports car action shot"
            fill
            className="object-cover"
          />
        </div>

        {/* Text - 2 cols */}
        <div className="lg:col-span-2">
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-neon mb-6">
            THE STORY
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Born with petrol in his veins, the journey from karting prodigy to
            global racing icon has been anything but ordinary. Every lap, every
            overtake, every podium tells a story of relentless determination.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            Off the track, the mission continues - building a brand that bridges
            motorsport, streetwear culture, and competitive gaming into one
            unified vision.
          </p>
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-neon uppercase tracking-wider text-sm font-bold group"
            whileHover="hover"
          >
            Read Full Story
            <motion.span
              variants={{ hover: { x: 8 } }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              &rarr;
            </motion.span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
