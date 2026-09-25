import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PROJECTS, type Project } from "@/data/projects";
import { Reveal } from "./Reveal";
import { CTA } from "./CTA";
import { ProjectImage } from "./ProjectImage";

function filenameOf(src: string) {
  return src.split("/").pop() ?? src;
}

function MetaRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="border border-line bg-surface p-5">
      <dt className="font-body text-[11px] tracking-[0.22em] text-muted">{k}</dt>
      <dd className="mt-1.5 font-body text-sm leading-relaxed text-cream">{v}</dd>
    </div>
  );
}

/** Shared PROBLEM → PROCESS → SOLUTION → OUTCOME layout for all case studies. */
export function CaseStudy({ project }: { project: Project }) {
  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const WRAP = "mx-auto max-w-[1400px] px-5 md:px-10";

  return (
    <>
      <section aria-labelledby="cs-h1" className={`${WRAP} pb-12 pt-[120px] md:pt-[160px]`}>
        <Reveal>
          <Link href="/work" className="inline-flex min-h-[44px] items-center gap-2 font-body text-[12px] tracking-[0.16em] text-muted transition-colors hover:text-cream">
            <ArrowLeft size={15} aria-hidden /> ALL WORK
          </Link>
          <p className="mt-6 font-body text-[11px] tracking-[0.24em] text-muted">
            <span className="text-lime">{project.index}</span> / {project.total} — {project.category} — {project.year}
          </p>
          <h1 id="cs-h1" className="display-tight mt-4 max-w-5xl font-display text-5xl font-bold text-cream md:text-7xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-muted md:text-lg">
            {project.description}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <dl className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
            <MetaRow k="ROLE" v={project.category === "WEB DEVELOPMENT" ? "Design / Frontend Development" : "AI Automation / Workflow Architecture / Development"} />
            <MetaRow k="STACK" v={project.tags.join(" / ")} />
            <MetaRow k="YEAR" v={project.year} />
          </dl>
        </Reveal>
      </section>

      <section aria-label={`${project.name} screenshot`} className={`${WRAP} pb-4`}>
        <Reveal>
          <ProjectImage src={project.image} alt={project.imageAlt} filename={filenameOf(project.image)} caption={`${project.name} — REAL PROJECT ARTIFACT. CLICK TO ENLARGE.`} wide />
        </Reveal>
      </section>

      <section aria-labelledby="cs-arch" className={`${WRAP} py-12 md:py-16`}>
        <Reveal>
          <h2 id="cs-arch" className="font-body text-[11px] tracking-[0.24em] text-muted">
            <span className="text-lime">SYSTEM</span> — HOW IT FITS TOGETHER
          </h2>
          <p className="mt-4 flex max-w-4xl flex-wrap items-center gap-x-2 gap-y-2 font-display text-base font-bold tracking-[0.06em] text-cream md:text-lg" aria-label={`Architecture: ${project.architecture.join(", ")}`}>
            {project.architecture.map((a, i) => (
              <span key={a} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-lime">→</span>}
                <span className={i === 0 || i === project.architecture.length - 1 ? "text-cream" : "text-cream/70"}>{a}</span>
              </span>
            ))}
          </p>
        </Reveal>
      </section>

      <div className="border-t border-line">
        {[
          ["01 — THE PROBLEM", project.problem],
          ["03 — THE SOLUTION", project.solution],
          ["04 — THE OUTCOME", project.outcome],
        ].map(([k, v]) => (
          <section key={k} className={`${WRAP} grid gap-6 border-b border-line py-12 md:py-16 lg:grid-cols-12`}>
            <div className="lg:col-span-4">
              <Reveal><h2 className="font-body text-[11px] tracking-[0.24em] text-muted"><span className="text-lime">{k.split(" ")[0]}</span> — {k.split("— ")[1]}</h2></Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal><p className="max-w-2xl font-body text-[15px] leading-relaxed text-muted md:text-base">{v}</p></Reveal>
            </div>
          </section>
        ))}
        <section className={`${WRAP} grid gap-6 border-b border-line py-12 md:py-16 lg:grid-cols-12`}>
          <div className="lg:col-span-4">
            <Reveal><h2 className="font-body text-[11px] tracking-[0.24em] text-muted"><span className="text-lime">02</span> — THE PROCESS</h2></Reveal>
          </div>
          <div className="lg:col-span-8">
            <ol className="space-y-0">
              {project.process.map((s, i) => (
                <li key={s}>
                  <Reveal>
                    <div className="flex gap-4 border border-line bg-surface px-5 py-4">
                      <span className="font-display text-sm font-bold text-lime">0{i + 1}</span>
                      <p className="font-body text-[15px] leading-relaxed text-muted">{s}</p>
                    </div>
                  </Reveal>
                  {i < project.process.length - 1 && (
                    <div className="flex justify-center py-1" aria-hidden><span className="block h-3 w-px bg-line" /></div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>

      <section className={`${WRAP} flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between`}>
        <Reveal>
          <p className="font-body text-[11px] tracking-[0.24em] text-muted">NEXT CASE STUDY</p>
          <p className="mt-2 font-display text-2xl font-bold text-cream md:text-3xl">{next.name}</p>
          <p className="mt-1 font-body text-[12px] tracking-[0.16em] text-muted">{next.category}</p>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap gap-4">
            <CTA href={next.href}>NEXT PROJECT</CTA>
            <Link href="/contact" className="group inline-flex min-h-[48px] items-center gap-2 border border-line px-6 py-3 font-body text-[13px] font-bold tracking-[0.1em] text-cream transition-colors hover:border-lime hover:text-lime">
              WORK WITH ME <ArrowRight size={16} aria-hidden className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
