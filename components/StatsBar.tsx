"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: 8, label: "RACE WINS" },
  { number: 25, label: "PODIUMS" },
  { number: 4, label: "POLE POSITIONS" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, start]);

  return value;
}

function StatItem({ number, label, start }: { number: number; label: string; start: boolean }) {
  const displayValue = useCountUp(number, 1500, start);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-5xl md:text-6xl font-heading text-neon">{displayValue}</p>
      <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">{label}</p>
    </motion.div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full py-20 px-6 bg-charcoal">
      <div
        ref={ref}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
      >
        {stats.map((stat) => (
          <StatItem
            key={stat.label}
            number={stat.number}
            label={stat.label}
            start={isInView}
          />
        ))}
      </div>
    </section>
  );
}
