"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TARGET_DATE = new Date("2026-03-15T14:00:00Z");

function getTimeRemaining(target: Date) {
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function RaceCalendar() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeRemaining> | null>(null);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeRemaining(TARGET_DATE));

    const interval = setInterval(() => {
      const remaining = getTimeRemaining(TARGET_DATE);
      setTimeLeft(remaining);

      if (remaining.days === 0 && remaining.hours === 0 && remaining.minutes === 0 && remaining.seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdownItems = [
    { value: mounted && timeLeft ? timeLeft.days : 0, label: "DAYS" },
    { value: mounted && timeLeft ? timeLeft.hours : 0, label: "HOURS" },
    { value: mounted && timeLeft ? timeLeft.minutes : 0, label: "MINS" },
    { value: mounted && timeLeft ? timeLeft.seconds : 0, label: "SECS" },
  ];

  return (
    <section id="calendar" className="w-full py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="font-heading text-4xl md:text-6xl uppercase text-white mb-12">
          NEXT RACE
        </h2>

        <div className="bg-charcoal rounded-none overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-video lg:aspect-auto bg-charcoal">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
              alt="Australian Grand Prix circuit"
              fill
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="font-heading text-3xl md:text-4xl uppercase text-white mb-2">
              AUSTRALIAN GRAND PRIX
            </h3>
            <p className="text-gray-400 uppercase tracking-wider text-sm mb-8">
              Melbourne | March 15, 2026
            </p>

            {/* Countdown */}
            <div className="grid grid-cols-4 gap-3">
              {countdownItems.map((item) => (
                <div
                  key={item.label}
                  className="bg-black px-3 py-4 text-center"
                  suppressHydrationWarning
                >
                  <p className="text-3xl md:text-4xl font-heading text-neon" suppressHydrationWarning>
                    {String(item.value).padStart(2, "0")}
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
