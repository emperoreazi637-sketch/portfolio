import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FinlyVisual } from "@/components/visuals";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Finly — Product Experience",
  description: "Finly: a simpler way to understand personal finances. A concept product case study by Ojo Ezekiel O.",
};

const WRAP = "mx-auto max-w-[1400px] px-5 md:px-10";

const SECTIONS = [
  {
    id: "sec-problem",
    kicker: "01 — PROBLEM",
    body: "Budgeting apps often show everything and explain nothing. Balances, charts and categories pile up, but the answer to “am I okay this month?” stays buried. Finly started from that single question: what would a finance screen look like if clarity was the only metric?",
  },
  {
    id: "sec-approach",
    kicker: "02 — APPROACH & PROCESS",
    body: "One screen, three answers: where I stand, where money went, and whether the goal is on track. Large readable numbers, a single spending breakdown, and one savings progress bar. No gamified streaks, no dense dashboards — hierarchy does the work. Everything shown uses realistic fictional data, clearly treated as a design concept rather than a shipped product.",
  },
  {
    id: "sec-ux",
    kicker: "03 — USER EXPERIENCE",
    body: "The flow is glance → understand → act. A user opens Finly and immediately sees total balance with a month-over-month note, spend against a subtle budget bar, and a savings goal at 68%. Category rows below explain the spend without requiring a second screen. Touch targets stay generous, contrast stays high, and the layout collapses to a single column on mobile.",
  },
  {
    id: "sec-ui",
    kicker: "04 — INTERFACE & KEY DECISIONS",
    body: "Cream surfaces, pine text, one gold accent reserved for progress and positive movement. Space Grotesk carries the numbers so balances scan instantly; Inter keeps labels quiet. Two deliberate decisions: the savings goal gets the accent border because it is the emotional core of the screen, and the balance card goes dark pine so the most important number owns the hierarchy.",
  },
  {
    id: "sec-result",
    kicker: "05 — OUTCOME & TECHNOLOGY",
    body: "The outcome is a focused concept: a personal finance screen that can be understood in under ten seconds. As a concept, success isn't measured in users or revenue — it's measured in whether the design reasoning holds. Stack: React, TypeScript, Supabase for data, Figma for design exploration.",
  },
];

export default function FinlyPage() {
  return (
    <>
      <section aria-labelledby="fin-h1" className={`${WRAP} pb-12 pt-[120px] md:pt-[150px]`}>
        <Reveal>
          <Link href="/work" className="inline-flex min-h-[44px] items-center gap-2 font-body text-[12px] font-bold tracking-[0.14em] text-stone hover:text-ink">
            <ArrowLeft size={15} aria-hidden /> ALL WORK
          </Link>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-pine px-4 py-1.5 font-body text-[11px] font-bold tracking-[0.16em] text-gold">
            02 / 03 · WEB PRODUCT / DIGITAL EXPERIENCE · 2025 · CONCEPT
          </p>
          <h1 id="fin-h1" className="display-tight mt-4 font-display text-6xl font-bold text-ink md:text-8xl">FINLY</h1>
          <p className="mt-4 max-w-2xl font-display text-2xl font-bold leading-snug text-pine md:text-3xl">
            A simpler way to understand personal finances.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["ROLE", "UI/UX / Frontend Development"],
              ["YEAR", "2025 · Concept project"],
              ["STACK", "React / TypeScript / Supabase / Figma"],
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
        <Reveal><FinlyVisual /></Reveal>
        <p className="mt-3 font-body text-[12px] text-stone">
          Interface mockup built in HTML/CSS for this portfolio. All figures are fictional sample data for a concept project.
        </p>
      </section>

      <div className="border-t border-line bg-card/60">
        {SECTIONS.map((s) => (
          <section key={s.id} aria-labelledby={s.id} className={`${WRAP} grid gap-6 border-b border-line py-12 md:py-16 lg:grid-cols-12`}>
            <div className="lg:col-span-4">
              <Reveal><h2 id={s.id} className="font-body text-[11px] font-bold tracking-[0.2em] text-pine">{s.kicker}</h2></Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal><p className="max-w-2xl font-body text-[15px] leading-relaxed text-stone md:text-base">{s.body}</p></Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className={`${WRAP} flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between`}>
        <Reveal>
          <p className="font-body text-[11px] font-bold tracking-[0.2em] text-goldeep">NEXT CASE STUDY</p>
          <p className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">Content OS — modular AI system.</p>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap gap-4">
            <CTA href="/work/content-os" variant="dark">NEXT PROJECT</CTA>
            <Link href="/contact" className="group inline-flex min-h-[48px] items-center gap-2 rounded-ctrl border border-ink/20 px-6 py-3 font-body text-[13px] font-bold tracking-[0.1em] text-ink hover:border-pine">
              START A PROJECT <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
