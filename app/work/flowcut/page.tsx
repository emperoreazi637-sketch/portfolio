import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { FlowcutVisual } from "@/components/visuals";

export const metadata: Metadata = {
  title: "Flowcut — AI Content Automation",
  description: "Flowcut: from one idea to a complete content production workflow. A case study by Ojo Ezekiel O.",
};

const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8";
const STAGES = [
  ["IDEA", "A single starting point — a topic, note or rough angle."],
  ["RESEARCH", "Gather context and talking points so scripts start from substance."],
  ["SCRIPT", "Structured short-form scripts with hooks, beats and calls to action."],
  ["GENERATE", "Script segments become video with consistent direction and pacing."],
  ["FORMAT", "Cropped, captioned and packaged for 9:16 publishing."],
  ["PUBLISH", "Publishing-ready packages move to scheduling, archived and traceable."],
];

function Block({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <section className={`${WRAP} py-10 md:py-14`}>
      <Reveal>
        <h2 className="font-body text-[11px] font-bold tracking-[0.2em] text-pine">{k}</h2>
        <div className="mt-3 max-w-2xl">{children}</div>
      </Reveal>
    </section>
  );
}

export default function FlowcutPage() {
  return (
    <>
      <section aria-labelledby="fc-h1" className={`${WRAP} pb-10 pt-[120px] md:pt-[160px]`}>
        <Reveal>
          <Link href="/work" className="inline-flex min-h-[44px] items-center gap-2 font-body text-[12px] font-bold tracking-[0.14em] text-gray hover:text-ink">
            <ArrowLeft size={15} aria-hidden /> ALL WORK
          </Link>
          <p className="mt-5 font-body text-[12px] font-bold tracking-[0.18em] text-pine">01 / 03 · AI CONTENT AUTOMATION · 2026</p>
          <h1 id="fc-h1" className="display-tight mt-3 font-display text-6xl font-bold text-ink md:text-8xl">FLOWCUT</h1>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-gray md:text-lg">
            From one idea to a complete content production workflow.
          </p>
        </Reveal>
      </section>

      <div className={WRAP}>
        <Reveal><FlowcutVisual /></Reveal>
      </div>

      <div className="mt-6 divide-y divide-line border-y border-line">
        <Block k="PROBLEM">
          <p className="font-body text-[15px] leading-relaxed text-gray">
            Producing short-form content often requires moving between multiple tools for research, scripting,
            generation, formatting and publishing. The goal was to connect those steps into a single automated pipeline.
          </p>
        </Block>
        <Block k="PROCESS">
          <ol className="grid gap-2.5 sm:grid-cols-2">
            {["Discover", "Structure", "Automate", "Generate", "Refine", "Publish"].map((s, i) => (
              <li key={s} className="rounded-ctrl-sm bg-card px-4 py-3 font-body text-sm font-semibold text-ink">
                <span className="mr-2 font-bold text-golddeep">0{i + 1}</span> {s}
              </li>
            ))}
          </ol>
        </Block>
        <Block k="SOLUTION — THE WORKFLOW">
          <ol>
            {STAGES.map(([t, d], i) => (
              <li key={t} className="flex gap-4 border-b border-line py-3.5 last:border-0">
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
          <ul className="space-y-2.5 font-body text-[15px] leading-relaxed text-gray">
            <li><strong className="text-ink">One idea in</strong> — every run starts from a single input, never re-briefed mid-flow.</li>
            <li><strong className="text-ink">Human checkpoint</strong> — AI drafts, humans approve; quality never depends on luck.</li>
            <li><strong className="text-ink">Vertical-first</strong> — 9:16 from the start, not cropped as an afterthought.</li>
            <li><strong className="text-ink">Stack</strong> — n8n orchestration, OpenAI language work, Veo generation, REST APIs, JavaScript.</li>
          </ul>
        </Block>
        <Block k="OUTCOME">
          <p className="font-body text-[15px] leading-relaxed text-gray">
            The final concept turns a fragmented production process into a connected automation pipeline,
            reducing unnecessary manual handoffs between stages. Presented as a concept — no fabricated metrics.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CTA href="/work/finly" variant="gold">NEXT: FINLY</CTA>
            <Link href="/contact" className="group inline-flex min-h-[48px] items-center gap-2 font-body text-[13px] font-bold tracking-[0.1em] text-ink hover:text-pine">
              BUILD SOMETHING LIKE THIS <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Block>
      </div>
      <div className="h-16" />
    </>
  );
}
