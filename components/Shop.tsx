"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Neon Racing Tee",
    price: "$65",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=400&q=80",
  },
  {
    name: "Track Day Hoodie",
    price: "$120",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80",
  },
  {
    name: "Paddock Cap",
    price: "$45",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=400&q=80",
  },
  {
    name: "Pit Crew Jacket",
    price: "$180",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80",
  },
  {
    name: "Grid Position Shorts",
    price: "$75",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&q=80",
  },
  {
    name: "Checkered Flag Tee",
    price: "$55",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&q=80",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Shop() {
  return (
    <section id="shop" className="w-full py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-6xl uppercase text-white mb-12"
        >
          LATEST DROP
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start group"
            >
              <div className="relative bg-charcoal rounded-none aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-neon text-black font-bold px-6 py-3 uppercase tracking-wider text-sm">
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-white text-sm uppercase tracking-wider">{product.name}</p>
                <p className="text-gray-400 text-sm mt-1">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
