"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { CAPABILITY_GROUPS } from "@/data/projects";

/** Interactive capabilities: click/hover a category to reveal its tools. */
export function CapabilityTabs() {
  const [active, setActive] = useState(2);
  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="flex flex-row gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible" role="tablist" aria-label="Capability categories">
        {CAPABILITY_GROUPS.map((g, i) => {
          const isActive = i === active;
          return (
            <button
              key={g.title}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="cap-panel"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`flex min-h-[52px] shrink-0 items-center justify-between gap-4 rounded-ctrl-sm px-5 py-3.5 font-display text-base font-bold tracking-[0.06em] transition-all duration-300 lg:text-lg ${
                isActive ? "bg-pine text-cream" : "border border-line bg-card text-ink/60 hover:border-pine hover:text-ink"
              }`}
            >
              {g.title}
              <span
                aria-hidden
                className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${
                  isActive ? "bg-gold text-ink" : "bg-cream text-stone"
                }`}
              >
                {g.items.length}
              </span>
            </button>
          );
        })}
      </div>
      <div id="cap-panel" role="tabpanel" className="min-h-[260px] rounded-ctrl bg-pine p-6 md:p-8 on-dark">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            <p className="font-body text-[11px] font-bold tracking-[0.22em] text-gold">
              {String(active + 1).padStart(2, "0")} — {CAPABILITY_GROUPS[active].title}
            </p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {CAPABILITY_GROUPS[active].items.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 rounded-ctrl-sm border border-cream/15 bg-cream/[0.06] px-4 py-3.5 font-body text-[15px] font-semibold text-cream"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold" aria-hidden>
                    <Check size={14} className="text-ink" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
