import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { ProjectImage } from "@/components/ProjectImage";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Selected work by Ojo Ezekiel O. — real automation systems and websites with full case studies.",
};

const WRAP = "mx-auto max-w-[1400px] px-5 md:px-10";

export default function WorkPage() {
  return (
    <>
      <div className={`${WRAP} pb-12 pt-[120px] md:pt-[160px]`}>
        <Reveal>
          <p className="font-body text-[11px] tracking-[0.24em] text-muted">PORTFOLIO INDEX — 2026</p>
          <h1 className="display-tight mt-4 font-display text-5xl font-bold text-cream md:text-7xl">Selected<br />work.</h1>
          <p className="mt-5 max-w-xl font-body text-[15px] leading-relaxed text-muted">
            Four pieces of real work — each with its actual artifact and a full case study.
          </p>
        </Reveal>
      </div>
      <div className={`${WRAP} space-y-16 pb-20 md:space-y-24`}>
        {PROJECTS.map((p) => (
          <Reveal key={p.slug}>
            <article className="group border-t border-line pt-8">
              <p className="font-body text-[11px] tracking-[0.22em] text-muted">
                <span className="text-lime">{p.index}</span> / {p.total} — {p.category} — {p.year}
              </p>
              <Link href={p.href} className="mt-3 block">
                <h2 className="display-tight font-display text-4xl font-bold text-cream transition-transform duration-300 group-hover:translate-x-1 md:text-5xl">
                  {p.name}
                </h2>
              </Link>
              <p className="mt-3 max-w-2xl font-body text-[15px] leading-relaxed text-muted">{p.description}</p>
              <div className="mt-6">
                <ProjectImage src={p.image} alt={p.imageAlt} filename={p.image.split("/").pop() ?? ""} caption={`${p.name} — ${p.category}`} />
              </div>
              <p className="mt-4 font-body text-[11px] tracking-[0.14em] text-muted">{p.tags.join(" · ").toUpperCase()}</p>
              <Link href={p.href} className="mt-3 inline-flex min-h-[44px] items-center gap-2 font-body text-[13px] font-bold tracking-[0.12em] text-cream transition-colors hover:text-lime">
                READ CASE STUDY
                <ArrowRight size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </article>
          </Reveal>
        ))}
        <Reveal className="text-center">
          <CTA href="/contact">START YOUR PROJECT</CTA>
        </Reveal>
      </div>
    </>
  );
}
