"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Minimal IDEA → SYSTEM → RESULT strip with subtle motion. */
export function HeroStrip() {
  const reduce = useReducedMotion();
  const items = ["IDEA", "SYSTEM", "RESULT"];
  return (
    <div
      role="img"
      aria-label="From idea to system to result"
      className="mt-10 flex max-w-md items-center gap-2 rounded-ctrl border border-line bg-card px-4 py-3"
    >
      {items.map((t, i) => (
        <div key={t} className="flex flex-1 items-center gap-2 last:flex-none">
          <motion.span
            initial={reduce ? false : { opacity: 0.35 }}
            whileInView={{ opacity: 1 }}
            whileHover={reduce ? undefined : { scale: 1.06 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className={`flex-1 rounded-ctrl-sm px-3 py-2 text-center font-display text-[13px] font-bold tracking-[0.12em] ${
              i === 1 ? "bg-pine text-cream" : i === 2 ? "bg-gold text-ink" : "bg-paper text-ink"
            }`}
          >
            {t}
          </motion.span>
          {i < items.length - 1 && (
            <span aria-hidden className="font-bold text-golddeep">→</span>
          )}
        </div>
      ))}
    </div>
  );
}
