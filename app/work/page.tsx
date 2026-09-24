import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { FlowcutVisual, FinlyVisual, ContentOsVisual } from "@/components/visuals";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Systems, interfaces and experiments by Ojo Ezekiel O. — built around automation, technology and digital experiences.",
};

const WRAP = "mx-auto max-w-[1400px] px-5 md:px-10";

function Visual({ slug }: { slug: string }) {
  if (slug === "flowcut") return <FlowcutVisual />;
  if (slug === "finly") return <FinlyVisual />;
  return <ContentOsVisual />;
}

const NARRATIVE: Record<string, { problem: string; process: string; solution: string; result: string }> = {
  flowcut: {
    problem: "Short-form production meant hopping between research, scripting, generation, formatting and publishing tools.",
    process: "Mapped every handoff, then structured the chaos into six defined stages with clear inputs and outputs.",
    solution: "A single orchestrated pipeline — one idea enters, publishing-ready content comes out.",
    result: "A connected automation concept with fewer tools, fewer handoffs and one traceable path. No invented metrics.",
  },
  finly: {
    problem: "Budgeting apps show everything and explain nothing — the answer to “am I okay this month?” stays buried.",
    process: "Designed around one question and three answers: standing, spend and goal progress.",
    solution: "A focused concept interface with strong hierarchy — glanceable in under ten seconds.",
    result: "A design concept judged on its reasoning: fewer elements, stronger hierarchy. Fictional sample data throughout.",
  },
  "content-os": {
    problem: "Content work scatters across notes, drafts, assets and platforms with no shared structure.",
    process: "Defined six independent modules with one contract between them: defined input, defined output.",
    solution: "A modular OS — run any stage alone, swap models freely, publish from a single library.",
    result: "An architecture concept where modularity is the feature: change one part without rewiring the rest.",
  },
};

export default function WorkPage() {
  return (
    <>
      <div className={`${WRAP} pb-12 pt-[120px] md:pt-[150px]`}>
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-1.5 font-body text-[11px] font-bold tracking-[0.2em] text-pine">
            <span className="h-1.5 w-1.5 rounded-full bg-goldeep" aria-hidden /> PORTFOLIO INDEX
          </p>
          <h1 className="display-tight mt-5 font-display text-5xl font-bold text-ink md:text-7xl">
            Selected<br />work.
          </h1>
          <p className="mt-5 max-w-xl font-body text-[15px] leading-relaxed text-stone md:text-base">
            Systems, interfaces and experiments built around automation, technology and digital experiences —
            each one told as problem → process → solution → result.
          </p>
        </Reveal>
      </div>

      <div className={`${WRAP} space-y-8 pb-20 md:space-y-12`}>
        {PROJECTS.map((p, i) => {
          const n = NARRATIVE[p.slug];
          return (
            <Reveal key={p.slug}>
              <article className="overflow-hidden rounded-ctrl border border-line bg-card">
                <div className={`grid items-center gap-0 lg:grid-cols-2`}>
                  <div className={`p-4 md:p-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="overflow-hidden rounded-ctrl-sm">
                      <Visual slug={p.slug} />
                    </div>
                  </div>
                  <div className={`p-6 md:p-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="flex flex-wrap items-center gap-3 font-body text-[11px] font-bold tracking-[0.18em] text-stone">
                      <span className="rounded-full bg-pine px-3 py-1 text-gold">{p.index} / {p.total}</span>
                      {p.category} · {p.year}
                    </p>
                    <h2 className="display-tight mt-3 font-display text-4xl font-bold text-ink md:text-5xl">{p.name}</h2>
                    <p className="mt-2 font-display text-lg font-bold text-pine">{p.tagline}</p>
                    <dl className="mt-6 space-y-3 border-t border-line pt-6">
                      {[
                        ["PROBLEM", n.problem],
                        ["PROCESS", n.process],
                        ["SOLUTION", n.solution],
                        ["RESULT", n.result],
                      ].map(([k, v]) => (
                        <div key={k} className="grid gap-1 sm:grid-cols-[110px_1fr] sm:gap-4">
                          <dt className="font-body text-[11px] font-bold tracking-[0.16em] text-goldeep">{k}</dt>
                          <dd className="font-body text-[14px] leading-relaxed text-stone">{v}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-5 font-body text-[12px] font-bold tracking-[0.1em] text-ink">
                      {p.stack.join("  ·  ").toUpperCase()}
                    </p>
                    <Link
                      href={p.href}
                      className="group mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-ctrl bg-ink px-6 py-3 font-body text-[13px] font-bold tracking-[0.1em] text-cream transition-colors hover:bg-pine"
                    >
                      VIEW CASE STUDY
                      <ArrowRight size={16} aria-hidden className="text-gold transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
        <Reveal className="text-center">
          <CTA href="/contact">START A PROJECT LIKE THESE</CTA>
        </Reveal>
      </div>
    </>
  );
}
