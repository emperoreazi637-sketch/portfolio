"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STEPS = [
  { title: "CONTENT IDEA", body: "A single starting point — a topic, note, or rough angle. Everything downstream keys off this input." },
  { title: "AI RESEARCH", body: "The system gathers context, references and talking points so scripts start from substance, not a blank page." },
  { title: "SCRIPT GENERATION", body: "Structured short-form scripts with hooks, beats and calls to action, tuned for vertical video." },
  { title: "VIDEO GENERATION", body: "Script segments are passed to generative video with consistent direction and pacing." },
  { title: "VERTICAL FORMATTING", body: "Outputs are cropped, captioned and packaged for 9:16 publishing." },
  { title: "CONTENT STORAGE", body: "Finished assets and metadata are archived in an organized library for reuse." },
  { title: "PUBLISHING", body: "Publishing-ready packages move to scheduling — the handoff, not the scramble." },
];

export function FlowcutInteractive() {
  const [active, setActive] = useState(0);
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
      <ol>
        {STEPS.map((s, i) => {
          const isActive = i === active;
          return (
            <li key={s.title}>
              <button
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-expanded={isActive}
                className={`flex min-h-[52px] w-full items-center justify-between gap-4 rounded-ctrl-sm px-4 py-3 text-left transition-all duration-300 ${
                  isActive ? "bg-pine text-cream" : "border border-line bg-card text-ink/70 hover:border-pine"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full font-body text-[11px] font-bold ${isActive ? "bg-gold text-ink" : "bg-cream text-stone"}`}>
                    {i + 1}
                  </span>
                  <span className="font-display text-sm font-bold tracking-[0.1em]">{s.title}</span>
                </span>
                <span className={`h-2 w-2 shrink-0 rounded-full ${isActive ? "bg-gold" : "bg-line"}`} aria-hidden />
              </button>
              {i < STEPS.length - 1 && (
                <div className="flex justify-center py-1" aria-hidden><span className="block h-3 w-[2px] rounded bg-line" /></div>
              )}
            </li>
          );
        })}
      </ol>
      <div className="on-dark rounded-ctrl bg-pine p-6 md:p-8 lg:sticky lg:top-24 lg:self-start">
        <p className="font-body text-[11px] font-bold tracking-[0.22em] text-gold">STAGE_0{active + 1} — DETAIL</p>
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-cream md:text-3xl">{STEPS[active].title}</h3>
            <p className="mt-3 font-body text-[15px] leading-relaxed text-cream/75">{STEPS[active].body}</p>
            <div className="mt-6 border-t border-cream/15 pt-4 font-body text-[12px] font-bold tracking-[0.16em] text-cream/70">
              IDEA <span className="text-gold">→</span> SYSTEM <span className="text-gold">→</span> RESULT
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
