"use client";

import { motion } from "framer-motion";

export default function Esports() {
  return (
    <section
      id="esports"
      className="w-full py-24 px-6 relative"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(228,241,45,0.03) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="font-heading text-4xl md:text-6xl uppercase text-white mb-8">
          BEYOND THE TRACK
        </h2>

        {/* Video Placeholder */}
        <div className="relative bg-charcoal aspect-video w-full mb-8 flex items-center justify-center">
          <button
            aria-label="Play video"
            className="w-20 h-20 rounded-full border-2 border-neon flex items-center justify-center hover:bg-neon/10 transition-colors"
          >
            <svg
              className="w-8 h-8 text-neon ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
          From the virtual grid to content creation, explore the world beyond
          racing. Gaming, lifestyle, and a community built on shared passion for
          speed in all its forms.
        </p>

        <a
          href="#"
          className="inline-block bg-neon text-black font-bold px-8 py-4 uppercase tracking-wider text-sm rounded-none hover:bg-neon/90 transition-colors"
        >
          EXPLORE QUADRANT
        </a>
      </motion.div>
    </section>
  );
}
