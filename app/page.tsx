import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SelectedWork } from "@/components/SelectedWork";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { ProjectImage } from "@/components/ProjectImage";
import { SERVICES, PROCESS_STEPS, TOOLKIT, PHILOSOPHY, PROJECTS } from "@/data/projects";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Ojo Ezekiel O. — AI Automation & Web Developer",
  description:
    "Ojo Ezekiel O. is an AI Automation & Web Developer building intelligent workflows, modern websites and digital experiences.",
};

const WRAP = "mx-auto max-w-[1400px] px-5 md:px-10";

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section aria-labelledby="hero-heading" className={`${WRAP} pb-16 pt-[130px] md:pb-24 md:pt-[170px]`}>
        <Reveal>
          <p className="font-body text-[11px] tracking-[0.26em] text-muted">PORTFOLIO — 2026</p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-6 font-display text-xl font-bold tracking-[0.06em] text-cream md:text-2xl">
            AI AUTOMATION <span className="text-lime">&amp;</span> WEB DEVELOPER
          </p>
          <h1 id="hero-heading" className="display-tight mt-4 max-w-5xl font-display text-[13vw] font-bold text-cream sm:text-7xl md:text-8xl">
            I BUILD<br />INTELLIGENT SYSTEMS<br />&amp; DIGITAL EXPERIENCES.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-muted md:text-lg">
            I design and build automated workflows, modern websites and digital experiences that turn
            ideas into practical systems.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTA href="/work">VIEW MY WORK</CTA>
            <CTA href="/contact" variant="ghost">WORK WITH ME</CTA>
          </div>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-line pt-5 font-body text-[11px] tracking-[0.2em] text-muted">
            <p>{SITE.location}</p>
            <p aria-label="From idea to system to result">
              IDEA <span className="text-lime">→</span> SYSTEM <span className="text-lime">→</span> RESULT
            </p>
          </div>
        </Reveal>
      </section>

      {/* ============ 01 ABOUT ============ */}
      <section id="about" aria-labelledby="about-h" className={`${WRAP} scroll-mt-24 border-t border-line py-16 md:py-24`}>
        <SectionHeading
          index="01"
          kicker="ABOUT"
          title={<span id="about-h">I build systems that make digital work better.</span>}
        />
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12">
            <p className="font-body text-[15px] leading-relaxed text-muted md:text-base lg:col-span-5">
              I&apos;m Ojo Ezekiel O., an AI Automation &amp; Web Developer focused on building intelligent
              workflows, modern websites and practical digital experiences.
            </p>
            <p className="font-body text-[15px] leading-relaxed text-muted md:text-base lg:col-span-5 lg:col-start-7">
              My work combines automation, web development, APIs, AI tools and thoughtful interface design to
              turn complex processes into simple, usable systems.
            </p>
          </div>
          <Link href="/about" className="group mt-8 inline-flex min-h-[44px] items-center gap-2 font-body text-[13px] font-bold tracking-[0.12em] text-cream transition-colors hover:text-lime">
            MORE ABOUT ME
            <ArrowRight size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

      {/* ============ 02 SERVICES ============ */}
      <section id="services" aria-labelledby="services-h" className={`${WRAP} scroll-mt-24 border-t border-line py-16 md:py-24`}>
        <SectionHeading index="02" kicker="SERVICES" title={<span id="services-h">What I do.</span>} />
        <ol className="border-t border-line">
          {SERVICES.map((s) => (
            <li key={s.n}>
              <Reveal>
                <div className="group grid gap-1 border-b border-line py-6 transition-colors duration-200 md:grid-cols-[72px_1fr_1.3fr] md:items-baseline md:gap-8">
                  <span className="font-display text-sm font-bold text-lime">{s.n}</span>
                  <h3 className="font-display text-xl font-bold tracking-tight text-cream transition-transform duration-200 group-hover:translate-x-1 md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="font-body text-[14px] leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ============ 03 SELECTED WORK ============ */}
      <section aria-labelledby="work-h" className={`${WRAP} border-t border-line py-16 md:py-24`}>
        <SectionHeading
          index="03"
          kicker="SELECTED WORK"
          title={<span id="work-h">Featured work.</span>}
          intro="Real systems and websites — shown as they are, with the actual artifacts."
        />
        <SelectedWork />
      </section>

      {/* ============ 04 CASE STUDIES ============ */}
      <section aria-labelledby="cases-h" className="border-t border-line bg-surface/60">
        <div className={`${WRAP} py-16 md:py-24`}>
          <SectionHeading
            index="04"
            kicker="CASE STUDIES"
            title={<span id="cases-h">How each system was built.</span>}
            intro="Problem → process → solution → outcome. No fabricated numbers — only the delivered system."
          />
          <ol className="grid gap-px border border-line bg-line md:grid-cols-2">
            {PROJECTS.map((p) => (
              <li key={p.slug} className="bg-ink">
                <Reveal>
                  <Link href={p.href} className="group block p-6 transition-colors duration-200 hover:bg-surface md:p-8">
                    <p className="font-body text-[11px] tracking-[0.22em] text-muted">
                      <span className="text-lime">{p.index}</span> / {p.total} — {p.category}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-cream transition-transform duration-200 group-hover:translate-x-1 md:text-3xl">
                      {p.name}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-muted">{p.description}</p>
                    <span className="mt-4 inline-flex min-h-[44px] items-center gap-2 font-body text-[12px] font-bold tracking-[0.14em] text-cream group-hover:text-lime">
                      READ CASE STUDY
                      <ArrowRight size={15} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ 05 PROCESS ============ */}
      <section id="process" aria-labelledby="process-h" className={`${WRAP} scroll-mt-24 border-t border-line py-16 md:py-24`}>
        <SectionHeading index="05" kicker="PROCESS" title={<span id="process-h">From idea to system.</span>} />
        <ol className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((s) => (
            <li key={s.n} className="bg-ink p-6 md:p-8">
              <Reveal>
                <p className="font-display text-sm font-bold text-lime">{s.n}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-cream">{s.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ============ 06 TOOLKIT ============ */}
      <section aria-labelledby="toolkit-h" className="border-t border-line bg-surface/60">
        <div className={`${WRAP} py-16 md:py-24`}>
          <SectionHeading index="06" kicker="TOOLKIT" title={<span id="toolkit-h">Tools of the trade.</span>} />
          <Reveal>
            <ul className="flex flex-wrap gap-2.5" aria-label="Tools and technologies">
              {TOOLKIT.map((t) => (
                <li
                  key={t}
                  className="border border-line bg-ink px-5 py-2.5 font-body text-sm text-cream/85 transition-colors duration-200 hover:border-lime hover:text-lime"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============ 07 PHILOSOPHY ============ */}
      <section aria-labelledby="phil-h" className={`${WRAP} border-t border-line py-16 md:py-24`}>
        <SectionHeading index="07" kicker="WORKING PHILOSOPHY" title={<span id="phil-h">How I work.</span>} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PHILOSOPHY.map((p) => (
            <Reveal key={p.n}>
              <div className="border-t border-line pt-5">
                <p className="font-display text-sm font-bold text-lime">{p.n}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-cream">{p.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CLIENT FEEDBACK (empty state — real reviews only) ============ */}
      <section aria-labelledby="feedback-h" className="border-t border-line bg-surface/60">
        <div className={`${WRAP} py-16 md:py-24`}>
          <SectionHeading
            index="08"
            kicker="CLIENT FEEDBACK"
            title={<span id="feedback-h">What people say.</span>}
          />
          <Reveal>
            <div className="border border-line bg-ink p-8 md:p-12">
              <p className="max-w-xl font-body text-[15px] leading-relaxed text-muted">
                Verified project feedback will appear here once confirmed — with real quotes, names and
                roles. Nothing is published without attribution.
              </p>
              <p className="mt-4 font-body text-[11px] tracking-[0.22em] text-muted">
                STATUS: <span className="text-lime">AWAITING FIRST VERIFIED REVIEW</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 08 CONTACT ============ */}
      <section aria-labelledby="contact-h" className={`${WRAP} border-t border-line py-16 md:py-24`}>
        <SectionHeading
          index="09"
          kicker="CONTACT"
          title={<span id="contact-h">Have a system<br />that needs building?</span>}
          intro="Let's turn the idea into something practical."
        />
        <Reveal>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-3">
            <a href={SITE.phoneHref} className="group bg-ink p-6 transition-colors duration-200 hover:bg-surface">
              <p className="font-body text-[11px] tracking-[0.22em] text-muted">PHONE</p>
              <p className="mt-2 font-display text-lg font-bold text-cream group-hover:text-lime">{SITE.phone}</p>
            </a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="group bg-ink p-6 transition-colors duration-200 hover:bg-surface">
              <p className="font-body text-[11px] tracking-[0.22em] text-muted">WHATSAPP</p>
              <p className="mt-2 font-display text-lg font-bold text-cream group-hover:text-lime">Chat directly →</p>
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="group bg-ink p-6 transition-colors duration-200 hover:bg-surface">
              <p className="font-body text-[11px] tracking-[0.22em] text-muted">LINKEDIN</p>
              <p className="mt-2 font-display text-lg font-bold text-cream group-hover:text-lime">Profile →</p>
            </a>
          </div>
          <div className="mt-8">
            <CTA href="/contact">LET&apos;S WORK TOGETHER</CTA>
          </div>
        </Reveal>

        {/* Visual anchor: first real artifact */}
        <div className="mt-14">
          <Reveal>
            <ProjectImage
              src={PROJECTS[0].image}
              alt={PROJECTS[0].imageAlt}
              filename="flowfix-website.jpg"
              caption="FLOWFIX — WEB DEVELOPMENT"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
