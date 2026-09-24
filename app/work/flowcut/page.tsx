import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FlowcutInteractive } from "@/components/FlowcutInteractive";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { FlowcutVisual } from "@/components/visuals";

export const metadata: Metadata = {
  title: "Flowcut — AI Content Automation",
  description: "Flowcut: from one idea to a complete content production workflow. An AI automation case study by Ojo Ezekiel O.",
};

const WRAP = "mx-auto max-w-[1400px] px-5 md:px-10";
const PROCESS = [
  ["01", "DISCOVER", "Map the real production path — every tool, handoff and repeat step."],
  ["02", "STRUCTURE", "Turn the messy middle into defined stages with clear inputs and outputs."],
  ["03", "AUTOMATE", "Connect stages with orchestrated workflows instead of manual glue work."],
  ["04", "GENERATE", "Use AI for research, scripting and media where it adds leverage."],
  ["05", "REFINE", "Keep a human checkpoint for quality before anything ships."],
  ["06", "PUBLISH", "Output publishing-ready packages, archived and traceable."],
];
const DECISIONS = [
  ["One idea in", "Every run starts from a single content idea so the pipeline never needs re-briefing mid-flow."],
  ["Human checkpoint", "AI drafts, humans approve. The refine stage exists so quality never depends on luck."],
  ["Vertical-first", "Formatting targets 9:16 from the start instead of cropping desktop outputs as an afterthought."],
];

export default function FlowcutPage() {
  return (
    <>
      <section aria-labelledby="fc-h1" className={`${WRAP} pb-12 pt-[120px] md:pt-[150px]`}>
        <Reveal>
          <Link href="/work" className="inline-flex min-h-[44px] items-center gap-2 font-body text-[12px] font-bold tracking-[0.14em] text-stone hover:text-ink">
            <ArrowLeft size={15} aria-hidden /> ALL WORK
          </Link>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-pine px-4 py-1.5 font-body text-[11px] font-bold tracking-[0.16em] text-gold">
            01 / 03 · AI CONTENT AUTOMATION · 2026
          </p>
          <h1 id="fc-h1" className="display-tight mt-4 font-display text-6xl font-bold text-ink md:text-8xl">FLOWCUT</h1>
          <p className="mt-4 max-w-2xl font-display text-2xl font-bold leading-snug text-pine md:text-3xl">
            From one idea to a complete content production workflow.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["ROLE", "AI Automation / Development"],
              ["YEAR", "2026"],
              ["STACK", "n8n / OpenAI / Veo / APIs"],
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
        <Reveal><FlowcutVisual /></Reveal>
      </section>

      <section aria-labelledby="fc-problem" className="border-y border-line bg-card/60">
        <div className={`${WRAP} grid gap-8 py-14 md:py-20 lg:grid-cols-12`}>
          <div className="lg:col-span-4">
            <Reveal><h2 id="fc-problem" className="font-body text-[11px] font-bold tracking-[0.2em] text-pine">01 — PROBLEM &amp; APPROACH</h2></Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="max-w-2xl font-body text-lg leading-relaxed text-ink md:text-xl">
                Producing short-form content often requires moving between multiple tools for research, scripting,
                generation, formatting and publishing.
              </p>
              <p className="mt-4 max-w-2xl font-body text-[15px] leading-relaxed text-stone">
                The approach: connect those steps into a single automated pipeline — so one idea enters, and
                publishing-ready content comes out, without the fragmented tab-switching in between.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="fc-process" className={`${WRAP} py-14 md:py-20`}>
        <Reveal>
          <h2 id="fc-process" className="font-body text-[11px] font-bold tracking-[0.2em] text-pine">02 — PROCESS</h2>
        </Reveal>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map(([n, t, d], i) => (
            <li key={n + t}>
              <Reveal delay={(i % 3) * 0.06}>
                <div className="h-full rounded-ctrl border border-line bg-card p-6">
                  <p className="font-display text-sm font-bold text-goldeep">{n}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink">{t}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-stone">{d}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="fc-solution" className="border-y border-line bg-card/60">
        <div className={`${WRAP} py-14 md:py-20`}>
          <Reveal>
            <h2 id="fc-solution" className="font-body text-[11px] font-bold tracking-[0.2em] text-pine">03 — SYSTEM ARCHITECTURE · INTERACTIVE</h2>
            <p className="mt-3 max-w-xl font-body text-[15px] text-stone">The workflow is the product here. Hover or tap each stage to see what happens inside.</p>
          </Reveal>
          <div className="mt-8"><FlowcutInteractive /></div>
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
        </div>
      </section>

      <section aria-labelledby="fc-result" className={`${WRAP} grid gap-8 py-14 md:py-20 lg:grid-cols-12`}>
        <div className="lg:col-span-4">
          <Reveal><h2 id="fc-result" className="font-body text-[11px] font-bold tracking-[0.2em] text-pine">04 — OUTCOME &amp; TECH</h2></Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal>
            <p className="max-w-2xl rounded-ctrl border-l-4 border-gold bg-card p-6 font-display text-2xl font-bold leading-snug text-ink md:text-3xl">
              The final concept turns a fragmented production process into a connected automation pipeline,
              reducing unnecessary manual handoffs between stages.
            </p>
            <p className="mt-4 max-w-2xl font-body text-sm text-stone">
              Presented as a concept system — no fabricated performance metrics. Technology: n8n orchestration,
              OpenAI language work, Veo generation, REST APIs and JavaScript glue.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTA href="/work/finly" variant="dark">NEXT PROJECT: FINLY</CTA>
              <Link href="/contact" className="group inline-flex min-h-[48px] items-center gap-2 font-body text-[13px] font-bold tracking-[0.1em] text-pine">
                BUILD SOMETHING LIKE THIS <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
