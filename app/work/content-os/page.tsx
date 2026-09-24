import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { ContentOsVisual } from "@/components/visuals";

export const metadata: Metadata = {
  title: "Content OS — AI Workflow System",
  description: "Content OS: a modular AI system for content production. A case study by Ojo Ezekiel O.",
};

const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8";
const STAGES = [
  ["RESEARCH", "Sources and references into one intake. AI summarizes; humans keep what matters."],
  ["IDEATION", "Research becomes angles and hooks in a structured backlog."],
  ["WRITING", "AI-assisted drafts inside templates — consistent voice, faster starts."],
  ["ASSETS", "Visuals and formats derived from the same source draft."],
  ["ORGANIZE", "Everything lands in a searchable library with status and ownership."],
  ["PUBLISH", "Ship on schedule. Finished work feeds back into research."],
];

function Block({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <section className={`${WRAP} py-10 md:py-14`}>
      <Reveal>
        <h2 className="font-body text-[11px] font-bold tracking-[0.2em] text-pine">{k}</h2>
        <div className="mt-3 max-w-2xl font-body text-[15px] leading-relaxed text-gray">{children}</div>
      </Reveal>
    </section>
  );
}

export default function ContentOsPage() {
  return (
    <>
      <section aria-labelledby="co-h1" className={`${WRAP} pb-10 pt-[120px] md:pt-[160px]`}>
        <Reveal>
          <Link href="/work" className="inline-flex min-h-[44px] items-center gap-2 font-body text-[12px] font-bold tracking-[0.14em] text-gray hover:text-ink">
            <ArrowLeft size={15} aria-hidden /> ALL WORK
          </Link>
          <p className="mt-5 font-body text-[12px] font-bold tracking-[0.18em] text-pine">03 / 03 · AI WORKFLOW SYSTEM · 2026</p>
          <h1 id="co-h1" className="display-tight mt-3 font-display text-6xl font-bold text-ink md:text-8xl">CONTENT OS</h1>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-gray md:text-lg">
            A modular AI system for content production.
          </p>
        </Reveal>
      </section>

      <div className={WRAP}>
        <Reveal><ContentOsVisual /></Reveal>
      </div>

      <div className="mt-6 divide-y divide-line border-y border-line">
        <Block k="PROBLEM">
          <>Content work scatters across notes, drafts, assets and platforms with no shared structure.</>
        </Block>
        <Block k="PROCESS">
          <>Define six independent modules with one contract between them: each stage receives a defined input and produces a defined output.</>
        </Block>
        <Block k="SOLUTION — SIX STAGES">
          <ol>
            {STAGES.map(([t, d], i) => (
              <li key={t} className="flex gap-4 border-b border-line py-3 last:border-0">
                <span className="font-body text-[12px] font-bold text-golddeep">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-base font-bold tracking-[0.06em] text-ink">{t}</h3>
                  <p className="mt-0.5 font-body text-sm leading-relaxed text-gray">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Block>
        <Block k="SYSTEM & KEY DECISIONS">
          <ul className="space-y-2.5">
            <li><strong className="text-ink">Modules over monolith</strong> — run any stage alone or the full OS.</li>
            <li><strong className="text-ink">One contract</strong> — swap models or tools without rewiring neighbors.</li>
            <li><strong className="text-ink">Library as source of truth</strong> — every asset searchable and traceable.</li>
            <li><strong className="text-ink">Stack</strong> — n8n, OpenAI, Notion-style library, REST APIs, JavaScript.</li>
          </ul>
        </Block>
        <Block k="OUTCOME">
          <>
            An architecture concept where modularity is the feature: change one part without rewiring the rest.
            <div className="mt-7 flex flex-wrap gap-3">
              <CTA href="/contact" variant="gold">BUILD YOUR SYSTEM</CTA>
              <Link href="/work/flowcut" className="group inline-flex min-h-[48px] items-center gap-2 font-body text-[13px] font-bold tracking-[0.1em] text-ink hover:text-pine">
                REVISIT FLOWCUT <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </>
        </Block>
      </div>
      <div className="h-16" />
    </>
  );
}
