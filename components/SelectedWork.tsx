"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Reveal } from "./Reveal";
import { ProjectImage } from "./ProjectImage";

function filenameOf(src: string) {
  return src.split("/").pop() ?? src;
}

/** Large editorial project rows — real screenshots as case-study artifacts. */
export function SelectedWork() {
  return (
    <div className="space-y-16 md:space-y-24">
      {PROJECTS.map((p) => (
        <Reveal key={p.slug}>
          <article className="group">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p className="font-body text-[11px] tracking-[0.22em] text-muted">
                <span className="text-lime">{p.index}</span> / {p.total} — {p.category} — {p.year}
              </p>
              <p className="font-body text-[11px] tracking-[0.22em] text-muted">{p.tags.slice(0, 3).join(" · ").toUpperCase()}</p>
            </div>
            <Link href={p.href} className="mt-3 block">
              <h3 className="display-tight font-display text-4xl font-bold text-cream transition-transform duration-300 group-hover:translate-x-1 md:text-6xl">
                {p.name}
              </h3>
            </Link>
            <p className="mt-3 max-w-2xl font-body text-[15px] leading-relaxed text-muted">{p.description}</p>
            <div className="mt-6">
              <ProjectImage src={p.image} alt={p.imageAlt} filename={filenameOf(p.image)} caption={`${p.name} — ${p.category}`} />
            </div>
            <Link
              href={p.href}
              className="mt-5 inline-flex min-h-[44px] items-center gap-2 font-body text-[13px] font-bold tracking-[0.12em] text-cream transition-colors hover:text-lime"
            >
              VIEW CASE STUDY
              <ArrowRight size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
