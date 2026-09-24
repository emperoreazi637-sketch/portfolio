"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Reveal } from "./Reveal";
import { FlowcutVisual, FinlyVisual, ContentOsVisual } from "./visuals";

function Visual({ slug }: { slug: string }) {
  if (slug === "flowcut") return <FlowcutVisual />;
  if (slug === "finly") return <FinlyVisual />;
  return <ContentOsVisual />;
}

/** Large horizontal editorial showcases — one per project. */
export function SelectedWork() {
  return (
    <div className="space-y-12 md:space-y-16">
      {PROJECTS.map((p) => (
        <Reveal key={p.slug}>
          <article className="group grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div>
              <p className="flex items-center gap-3 font-body text-[12px] font-bold tracking-[0.16em] text-gray">
                <span className="font-display text-5xl font-bold text-ink/15 transition-colors duration-300 group-hover:text-golddeep/40 md:text-6xl">
                  {p.index}
                </span>
                {p.category} · {p.year}
              </p>
              <h3 className="display-tight mt-3 font-display text-4xl font-bold text-ink md:text-5xl">
                {p.name}
              </h3>
              <p className="mt-3 max-w-md font-body text-[15px] leading-relaxed text-gray">
                {p.description}
              </p>
              {p.workflow && (
                <p className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1 font-body text-[11px] font-bold tracking-[0.1em] text-pine" aria-label={`Workflow: ${p.workflow.join(", ")}`}>
                  {p.workflow.map((w, i) => (
                    <span key={w} className="flex items-center gap-1.5">
                      {w}
                      {i < (p.workflow?.length ?? 0) - 1 && <span aria-hidden className="text-golddeep">→</span>}
                    </span>
                  ))}
                </p>
              )}
              <p className="mt-3 font-body text-[12px] font-bold tracking-[0.08em] text-gray">
                {p.stack.join("  ·  ").toUpperCase()}
              </p>
              <Link
                href={p.href}
                className="mt-5 inline-flex min-h-[48px] items-center gap-2 font-body text-[13px] font-bold tracking-[0.1em] text-ink transition-colors hover:text-pine"
              >
                VIEW CASE STUDY
                <ArrowRight size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
            <Link href={p.href} aria-label={`View ${p.name} case study`} className="block overflow-hidden rounded-ctrl">
              <div className="transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                <Visual slug={p.slug} />
              </div>
            </Link>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
