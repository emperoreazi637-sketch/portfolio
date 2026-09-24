import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { FinlyVisual } from "@/components/visuals";

export const metadata: Metadata = {
  title: "Finly — Web Product",
  description: "Finly: a simpler way to understand personal finances. A concept case study by Ojo Ezekiel O.",
};

const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8";

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

export default function FinlyPage() {
  return (
    <>
      <section aria-labelledby="fin-h1" className={`${WRAP} pb-10 pt-[120px] md:pt-[160px]`}>
        <Reveal>
          <Link href="/work" className="inline-flex min-h-[44px] items-center gap-2 font-body text-[12px] font-bold tracking-[0.14em] text-gray hover:text-ink">
            <ArrowLeft size={15} aria-hidden /> ALL WORK
          </Link>
          <p className="mt-5 font-body text-[12px] font-bold tracking-[0.18em] text-pine">02 / 03 · WEB PRODUCT · 2025 · CONCEPT</p>
          <h1 id="fin-h1" className="display-tight mt-3 font-display text-6xl font-bold text-ink md:text-8xl">FINLY</h1>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-gray md:text-lg">
            A simpler way to understand personal finances.
          </p>
        </Reveal>
      </section>

      <div className={WRAP}>
        <Reveal><FinlyVisual /></Reveal>
        <p className="mt-3 font-body text-[12px] text-gray">Interface mockup built for this portfolio. All figures are fictional sample data.</p>
      </div>

      <div className="mt-6 divide-y divide-line border-y border-line">
        <Block k="PROBLEM">
          <>Budgeting apps often show everything and explain nothing. The answer to “am I okay this month?” stays buried. Finly started from that single question.</>
        </Block>
        <Block k="PROCESS">
          <>One screen, three answers: where I stand, where money went, whether the goal is on track. Large readable numbers, one spending breakdown, one savings bar. Hierarchy does the work.</>
        </Block>
        <Block k="SOLUTION & INTERFACE">
          <>A glanceable concept screen: balance with a month note, spend against a budget bar, a 68% savings goal. Cream surfaces, pine text, one gold accent reserved for progress. Touch targets stay generous; the layout collapses to one column on mobile.</>
        </Block>
        <Block k="KEY DECISIONS">
          <ul className="space-y-2.5">
            <li><strong className="text-ink">Dark balance card</strong> — the most important number owns the hierarchy.</li>
            <li><strong className="text-ink">Gold only for progress</strong> — the accent always means “moving forward.”</li>
            <li><strong className="text-ink">Stack</strong> — React, TypeScript, Supabase for data, Figma for exploration.</li>
          </ul>
        </Block>
        <Block k="OUTCOME">
          <>
            A focused concept: personal finance understood in under ten seconds. Success here is design reasoning,
            not users or revenue.
            <div className="mt-7 flex flex-wrap gap-3">
              <CTA href="/work/content-os" variant="gold">NEXT: CONTENT OS</CTA>
              <Link href="/contact" className="group inline-flex min-h-[48px] items-center gap-2 font-body text-[13px] font-bold tracking-[0.1em] text-ink hover:text-pine">
                START A PROJECT <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </>
        </Block>
      </div>
      <div className="h-16" />
    </>
  );
}
