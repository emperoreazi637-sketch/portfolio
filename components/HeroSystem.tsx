"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

const NODES = ["IDEA", "AUTOMATE", "BUILD", "CONNECT", "RESULT"];

/**
 * Interactive IDEA → SYSTEM → RESULT visualization.
 * Nodes drift subtly toward the pointer on desktop; the active
 * stage cycles automatically. Static on touch / reduced-motion.
 */
export function HeroSystem() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(1);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setActive((a) => (a + 1) % NODES.length), 2000);
    return () => clearInterval(id);
  }, [reduce]);

  function onMove(e: React.MouseEvent) {
    if (reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / r.width;
    const y = (e.clientY - (r.top + r.height / 2)) / r.height;
    setOffset({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      role="img"
      aria-label="System diagram: from idea, to automate, build and connect, to result"
      className="relative rounded-ctrl border border-line bg-card p-6 shadow-[0_24px_60px_-30px_rgba(23,63,43,0.35)] md:p-8"
    >
      <div className="flex items-center justify-between">
        <p className="font-body text-[11px] font-bold tracking-[0.2em] text-stone">IDEA → SYSTEM → RESULT</p>
        <span className="flex items-center gap-2 rounded-full bg-pine px-3 py-1 font-body text-[11px] font-bold tracking-[0.14em] text-cream">
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          LIVE
        </span>
      </div>

      <ol className="mt-6">
        {NODES.map((n, i) => {
          const isActive = i === active;
          const isResult = n === "RESULT";
          const dx = reduce ? 0 : offset.x * (i + 1) * 5;
          return (
            <li key={n}>
              <motion.div
                animate={{ x: dx }}
                transition={{ type: "spring", stiffness: 90, damping: 18 }}
                className={`flex items-center justify-between rounded-ctrl-sm px-4 py-3.5 font-display text-sm font-bold tracking-[0.14em] transition-colors duration-500 md:text-base ${
                  isActive
                    ? isResult
                      ? "bg-pine text-cream"
                      : "bg-gold text-ink"
                    : "bg-cream text-ink/60"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className={`font-body text-[11px] font-bold ${isActive ? (isResult ? "text-gold" : "text-ink/60") : "text-stone"}`}>
                    0{i + 1}
                  </span>
                  {n}
                </span>
                <span
                  aria-hidden
                  className={`h-2 w-2 rounded-full transition-colors duration-500 ${
                    isActive ? (isResult ? "bg-gold" : "bg-pine") : "bg-line"
                  }`}
                />
              </motion.div>
              {i < NODES.length - 1 && (
                <div className="flex justify-center py-1" aria-hidden>
                  <span className="block h-4 w-[2px] rounded bg-line" />
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-4 font-body text-[11px] font-bold tracking-[0.16em] text-stone">
        <span>INPUT: COMPLEXITY</span>
        <span className="text-pine">OUTPUT: CLARITY</span>
      </div>
    </div>
  );
}
