import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ContentOsVisual } from "@/components/visuals";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Content OS — AI Workflow System",
  description: "Content OS: a modular AI system for content production. Architecture case study by Ojo Ezekiel O.",
};

const WRAP = "mx-auto max-w-[1400px] px-5 md:px-10";
const STAGES = [
  ["RESEARCH", "Gather sources, links and references into one intake. AI summarizes; humans keep what matters."],
  ["IDEATION", "Turn research into angles and hooks. A structured backlog replaces scattered notes."],
  ["WRITING", "Draft with AI assistance inside templates — consistent voice, faster first drafts."],
  ["ASSET GENERATION", "Derive visuals, snippets and formats from the same source draft."],
  ["ORGANIZATION", "Everything lands in a searchable library with status and ownership."],
  ["PUBLISHING", "Ship from the library on schedule. Finished work feeds back into research."],
];
const DECISIONS = [
  ["Modules over monolith", "Each stage runs standalone — adopt research alone or the full OS without rework."],
  ["One contract between stages", "Defined input, defined output. Swap models or tools without rewiring neighbors."],
  ["Library as source of truth", "Nothing lives only in chat threads; every asset is searchable and traceable."],
];

export default function ContentOsPage() {
  return (
    <>
      <section aria-labelledby="co-h1" className={`${WRAP} pb-12 pt-[120px] md:pt-[150px]`}>
        <Reveal>
          <Link href="/work" className="inline-flex min-h-[44px] items-center gap-2 font-body text-[12px] font-bold tracking-[0.14em] text-stone hover:text-ink">
            <ArrowLeft size={15} aria-hidden /> ALL WORK
          </Link>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-pine px-4 py-1.5 font-body text-[11px] font-bold tracking-[0.16em] text-gold">
            03 / 03 · AI WORKFLOW SYSTEM · 2026
          </p>
          <h1 id="co-h1" className="display-tight mt-4 font-display text-6xl font-bold text-ink md:text-8xl">CONTENT OS</h1>
          <p className="mt-4 max-w-2xl font-display text-2xl font-bold leading-snug text-pine md:text-3xl">
            A modular AI system for content production.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["ROLE", "Automation / AI Integration / Development"],
              ["YEAR", "2026"],
              ["STACK", "n8n / OpenAI / Notion / APIs"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-ctrl border border-line bg-card p-5">
                <dt className="font-body text-[11px] font-bold tracking-[0.18em] text-stone">{k}</dt>
                <dd className="mt-1 font-body text-[15px] font-semibold text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className={`${WRAP} pb-14`}>
        <Reveal><ContentOsVisual /></Reveal>
      </section>

      <section aria-labelledby="co-arch" className="border-y border-line bg-card/60">
        <div className={`${WRAP} grid gap-8 py-14 md:py-20 lg:grid-cols-12`}>
          <div className="lg:col-span-4">
            <Reveal><h2 id="co-arch" className="font-body text-[11px] font-bold tracking-[0.2em] text-pine">01 — PROBLEM, APPROACH &amp; ARCHITECTURE</h2></Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="max-w-2xl font-body text-[15px] leading-relaxed text-stone md:text-base">
                <strong className="text-ink">Problem:</strong> content work scatters across notes, drafts, assets
                and platforms with no shared structure. <strong className="text-ink">Approach:</strong> design six
                independent modules with one contract between them — each stage receives a defined input and
                produces a defined output. n8n orchestrates the flow, OpenAI handles the language work, and a
                Notion-style library keeps every asset searchable and traceable.
              </p>
              <p className="mt-5 inline-block rounded-ctrl-sm bg-pine px-5 py-3 font-display text-lg font-bold text-cream">
                IDEA <span className="text-gold">→</span> SYSTEM <span className="text-gold">→</span> RESULT
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-label="System stages" className={`${WRAP} py-14 md:py-20`}>
        <Reveal>
          <h2 className="font-body text-[11px] font-bold tracking-[0.2em] text-pine">02 — PROCESS: SIX STAGES</h2>
        </Reveal>
        <ol className="mt-8">
          {STAGES.map(([t, d], i) => (
            <li key={t}>
              <Reveal>
                <div className="flex flex-col gap-1 rounded-ctrl-sm border border-line bg-card px-5 py-4 sm:flex-row sm:items-center sm:gap-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold font-body text-[12px] font-bold text-ink">{i + 1}</span>
                  <h3 className="font-display text-lg font-bold tracking-[0.06em] text-ink sm:w-60">{t}</h3>
                  <p className="flex-1 font-body text-sm leading-relaxed text-stone">{d}</p>
                </div>
              </Reveal>
              {i < STAGES.length - 1 && (
                <div className="flex justify-center py-1.5" aria-hidden><span className="block h-4 w-[2px] rounded bg-line" /></div>
              )}
            </li>
          ))}
        </ol>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {DECISIONS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <div className="h-full rounded-ctrl bg-gold/15 p-6">
                <h3 className="font-display text-lg font-bold text-ink">{t}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-stone">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="co-out" className="border-t border-line bg-card/60">
        <div className={`${WRAP} grid gap-8 py-14 md:py-20 lg:grid-cols-12`}>
          <div className="lg:col-span-4">
            <Reveal><h2 id="co-out" className="font-body text-[11px] font-bold tracking-[0.2em] text-pine">03 — OUTCOME</h2></Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="max-w-2xl rounded-ctrl border-l-4 border-gold bg-cream p-6 font-display text-2xl font-bold leading-snug text-ink md:text-3xl">
                An architecture concept where modularity is the feature: change one part without rewiring the rest.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTA href="/contact">BUILD YOUR SYSTEM</CTA>
                <Link href="/work/flowcut" className="group inline-flex min-h-[48px] items-center gap-2 rounded-ctrl border border-ink/20 px-6 py-3 font-body text-[13px] font-bold tracking-[0.1em] text-ink hover:border-pine">
                  REVISIT FLOWCUT <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
