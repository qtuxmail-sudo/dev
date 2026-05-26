"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "8", label: "RACE WINS" },
  { number: "25", label: "PODIUMS" },
  { number: "4", label: "POLE POSITIONS" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function StatsBar() {
  return (
    <section className="w-full py-20 px-6 bg-charcoal">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={itemVariants}>
            <p className="text-5xl md:text-6xl font-heading text-neon">{stat.number}</p>
            <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
