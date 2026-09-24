import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INSIGHTS } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Insights",
  description: "Notes from the workbench — Ojo Ezekiel O. on AI automation, n8n workflows and useful systems.",
};

const WRAP = "mx-auto max-w-[1400px] px-5 md:px-10";

export default function InsightsPage() {
  return (
    <div className={`${WRAP} pb-20 pt-[120px] md:pt-[150px]`}>
      <Reveal>
        <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-1.5 font-body text-[11px] font-bold tracking-[0.2em] text-pine">
          <span className="h-1.5 w-1.5 rounded-full bg-goldeep" aria-hidden /> INSIGHTS
        </p>
        <h1 className="display-tight mt-5 max-w-3xl font-display text-5xl font-bold text-ink md:text-6xl">
          Notes from the workbench.
        </h1>
        <p className="mt-5 max-w-xl font-body text-[15px] leading-relaxed text-stone md:text-base">
          Short pieces on automation and workflow design. These are topics in progress — published here as
          they&apos;re finished, not backdated to look established.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {INSIGHTS.map((n, i) => (
          <Reveal key={n.n} delay={i * 0.06}>
            <article className="flex h-full flex-col rounded-ctrl border border-line bg-card p-6 md:p-8">
              <p className="font-display text-sm font-bold text-goldeep">{n.n} · COMING SOON</p>
              <h2 className="mt-3 flex-1 font-display text-2xl font-bold leading-snug text-ink">{n.title}</h2>
              <p className="mt-3 font-body text-[14px] leading-relaxed text-stone">{n.body}</p>
              <div className="mt-6 h-1.5 w-full rounded-full bg-cream" aria-hidden>
                <div className="h-1.5 rounded-full bg-gold" style={{ width: `${35 + i * 15}%` }} />
              </div>
              <p className="mt-2 font-body text-[12px] font-bold tracking-[0.1em] text-stone">DRAFT IN PROGRESS</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <CTA href="/contact" variant="dark">DISCUSS THESE TOPICS</CTA>
        <Link href="/work" className="group inline-flex min-h-[48px] items-center gap-2 font-body text-[13px] font-bold tracking-[0.1em] text-pine">
          SEE THE WORK INSTEAD <ArrowRight size={15} aria-hidden className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </div>
  );
}
