import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { FlowcutVisual, FinlyVisual, ContentOsVisual } from "@/components/visuals";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Selected work by Ojo Ezekiel O. — automation systems, web products and AI workflows.",
};

const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8";

function Visual({ slug }: { slug: string }) {
  if (slug === "flowcut") return <FlowcutVisual />;
  if (slug === "finly") return <FinlyVisual />;
  return <ContentOsVisual />;
}

const NARRATIVE: Record<string, { overview: string; problem: string; process: string; solution: string; outcome: string }> = {
  flowcut: {
    overview: "An automated short-form content pipeline — one idea enters, publishing-ready content comes out.",
    problem: "Producing short-form content meant hopping between separate tools for research, scripting, generation, formatting and publishing.",
    process: "Mapped every handoff, then structured the chaos into six defined stages with clear inputs and outputs.",
    solution: "A single orchestrated pipeline built on n8n, OpenAI and generative video — with a human checkpoint before anything ships.",
    outcome: "A connected automation concept: fewer tools, fewer handoffs, one traceable path. No invented metrics.",
  },
  finly: {
    overview: "A personal finance web app concept that answers one question: am I okay this month?",
    problem: "Budgeting apps show everything and explain nothing — clarity stays buried under charts.",
    process: "Designed around three answers: standing, spend and goal progress. Hierarchy does the work.",
    solution: "A focused concept interface readable in under ten seconds, built with React, TypeScript and Supabase in mind.",
    outcome: "A design concept judged on its reasoning. All figures are fictional sample data.",
  },
  "content-os": {
    overview: "A modular content operating system — six independent stages, one shared contract.",
    problem: "Content work scatters across notes, drafts, assets and platforms with no shared structure.",
    process: "Defined six modules where each stage has a defined input and a defined output.",
    solution: "Run any stage alone or the full system; swap models freely; publish from a single library.",
    outcome: "An architecture concept where modularity is the feature.",
  },
};

export default function WorkPage() {
  return (
    <>
      <div className={`${WRAP} pb-12 pt-[120px] md:pt-[160px]`}>
        <Reveal>
          <p className="font-body text-[12px] font-bold tracking-[0.2em] text-pine">PORTFOLIO</p>
          <h1 className="display-tight mt-4 font-display text-5xl font-bold text-ink md:text-7xl">Selected<br />work.</h1>
        </Reveal>
      </div>
      <div className={`${WRAP} space-y-16 pb-20 md:space-y-24`}>
        {PROJECTS.map((p) => {
          const n = NARRATIVE[p.slug];
          return (
            <Reveal key={p.slug}>
              <article className="border-t border-line pt-10">
                <p className="flex items-center gap-3 font-body text-[12px] font-bold tracking-[0.16em] text-gray">
                  <span className="font-display text-5xl font-bold text-ink/15 md:text-6xl">{p.index}</span>
                  {p.category} · {p.year}
                </p>
                <h2 className="display-tight mt-3 font-display text-4xl font-bold text-ink md:text-6xl">{p.name}</h2>
                <p className="mt-3 max-w-xl font-body text-[15px] leading-relaxed text-gray md:text-base">{n.overview}</p>
                <div className="mt-8 overflow-hidden rounded-ctrl">
                  <Visual slug={p.slug} />
                </div>
                <dl className="mt-8 grid gap-6 md:grid-cols-2">
                  {[
                    ["PROBLEM", n.problem],
                    ["PROCESS", n.process],
                    ["SOLUTION", n.solution],
                    ["OUTCOME", n.outcome],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="font-body text-[11px] font-bold tracking-[0.18em] text-golddeep">{k}</dt>
                      <dd className="mt-1.5 font-body text-[14px] leading-relaxed text-gray">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 font-body text-[12px] font-bold tracking-[0.08em] text-ink">
                  {p.stack.join("  ·  ").toUpperCase()}
                </p>
                <Link href={p.href} className="group mt-4 inline-flex min-h-[48px] items-center gap-2 font-body text-[13px] font-bold tracking-[0.1em] text-ink hover:text-pine">
                  VIEW CASE STUDY
                  <ArrowRight size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          );
        })}
        <Reveal className="text-center">
          <CTA href="/contact">START YOUR PROJECT</CTA>
        </Reveal>
      </div>
    </>
  );
}
