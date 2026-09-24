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

export function FeaturedWork() {
  return (
    <div className="space-y-8 md:space-y-12">
      {PROJECTS.map((p, i) => (
        <Reveal key={p.slug}>
          <article
            className={`group grid items-center gap-0 overflow-hidden rounded-ctrl border border-line bg-card transition-shadow duration-500 hover:shadow-[0_30px_70px_-30px_rgba(23,63,43,0.35)] lg:grid-cols-2 ${
              i % 2 === 1 ? "" : ""
            }`}
          >
            <Link
              href={p.href}
              aria-label={`View ${p.name} case study`}
              className={`block p-4 md:p-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-ctrl-sm">
                <div className="transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <Visual slug={p.slug} />
                </div>
              </div>
            </Link>
            <div className={`p-6 md:p-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <p className="flex flex-wrap items-center gap-3 font-body text-[11px] font-bold tracking-[0.18em] text-stone">
                <span className="rounded-full bg-pine px-3 py-1 text-gold">
                  {p.index} / {p.total}
                </span>
                {p.category} · {p.year}
              </p>
              <h3 className="display-tight mt-4 font-display text-4xl font-bold text-ink md:text-5xl">
                {p.name}
              </h3>
              <p className="mt-3 max-w-md font-body text-[15px] leading-relaxed text-stone md:text-base">
                {p.description}
              </p>
              <p className="mt-4 font-body text-[12px] font-bold tracking-[0.1em] text-pine">
                {p.stack.join("  ·  ").toUpperCase()}
              </p>
              <Link
                href={p.href}
                className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-ctrl bg-ink px-6 py-3 font-body text-[13px] font-bold tracking-[0.1em] text-cream transition-colors hover:bg-pine"
              >
                VIEW CASE STUDY
                <ArrowRight size={16} aria-hidden className="text-gold transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
