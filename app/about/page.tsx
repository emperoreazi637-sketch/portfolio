import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { IdentityVisual } from "@/components/visuals";
import { CapabilityTabs } from "@/components/CapabilityTabs";
import { SERVICES, JOURNEY, TOOL_STACK } from "@/data/projects";

export const metadata: Metadata = {
  title: "About",
  description: "About Ojo Ezekiel O. — AI Automation & Web Developer working at the intersection of automation and digital experiences.",
};

const WRAP = "mx-auto max-w-[1400px] px-5 md:px-10";

export default function AboutPage() {
  return (
    <>
      {/* INTRODUCTION */}
      <section aria-labelledby="about-h1" className={`${WRAP} grid items-center gap-10 pb-14 pt-[120px] md:pt-[150px] lg:grid-cols-2`}>
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-1.5 font-body text-[11px] font-bold tracking-[0.2em] text-pine">
              <span className="h-1.5 w-1.5 rounded-full bg-goldeep" aria-hidden /> ABOUT OJO
            </p>
            <h1 id="about-h1" className="display-tight mt-5 font-display text-5xl font-bold text-ink md:text-6xl">
              I turn ideas, processes and problems into useful digital systems.
            </h1>
            <p className="mt-5 max-w-xl font-body text-[15px] leading-relaxed text-stone md:text-base">
              My work sits at the intersection of web development, automation and emerging AI technologies. I
              enjoy understanding how something works, finding the unnecessary complexity, and designing a better
              way to make it happen.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <IdentityVisual />
        </Reveal>
      </section>

      {/* PHILOSOPHY — dark band */}
      <section aria-labelledby="phil-h" className="on-dark bg-pine">
        <div className={`${WRAP} py-16 md:py-24`}>
          <Reveal>
            <p className="font-body text-[11px] font-bold tracking-[0.22em] text-gold">PHILOSOPHY</p>
            <h2 id="phil-h" className="display-tight mt-4 max-w-3xl font-display text-3xl font-bold text-cream md:text-5xl">
              Technology should remove work — not relocate it.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["CLARITY FIRST", "If a system needs a manual to survive, the design isn't finished."],
              ["AUTOMATE THE BORING", "Every repetitive click is a candidate for a workflow that never sleeps."],
              ["SHIP & REFINE", "Real projects beat perfect plans. Build, test, simplify, repeat."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.06}>
                <div className="h-full rounded-ctrl border border-cream/15 bg-cream/[0.05] p-6 md:p-7">
                  <p className="font-display text-sm font-bold tracking-[0.14em] text-gold">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-cream">{t}</h3>
                  <p className="mt-2 font-body text-[14px] leading-relaxed text-cream/70">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section aria-labelledby="wib-h" className={`${WRAP} py-16 md:py-24`}>
        <SectionHeading
          kicker="WHAT I BUILD"
          title={<span id="wib-h">Three kinds of outcomes.</span>}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["AUTOMATION SYSTEMS", "Workflows that connect AI, APIs and tools — doing the repetitive work so people don't have to."],
            ["WEB EXPERIENCES", "Responsive, performant websites and apps with interfaces people actually enjoy using."],
            ["CONNECTED PRODUCTS", "The combination: products with automation inside, from first sketch to shipped system."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <div className="h-full rounded-ctrl bg-gold/15 p-7 md:p-8">
                <p className="font-display text-4xl font-bold text-pine">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">{t}</h3>
                <p className="mt-2 font-body text-[14px] leading-relaxed text-stone">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 rounded-ctrl border border-line bg-card p-6 md:p-8">
            <h3 className="font-display text-xl font-bold text-ink">Services in detail</h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <li key={s.n} className="flex items-start gap-3 rounded-ctrl-sm bg-cream p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-ctrl-sm bg-pine text-gold" aria-hidden>
                    <s.icon size={17} />
                  </span>
                  <span>
                    <span className="block font-display text-[15px] font-bold text-ink">{s.title}</span>
                    <span className="mt-0.5 block font-body text-[13px] leading-relaxed text-stone">{s.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* CAPABILITIES + TOOLS */}
      <section aria-labelledby="cap-h" className="border-y border-line bg-card/60">
        <div className={`${WRAP} py-16 md:py-24`}>
          <SectionHeading
            kicker="CAPABILITIES & TOOLS"
            title={<span id="cap-h">The working stack.</span>}
            intro="The tools I reach for daily — hover or tap a category to explore."
          />
          <Reveal><CapabilityTabs /></Reveal>
          <Reveal>
            <div className="mt-8 flex flex-wrap gap-2.5" aria-label="Full tool list">
              {TOOL_STACK.map((t) => (
                <span key={t} className="rounded-full border border-line bg-cream px-4 py-2 font-body text-[13px] font-bold text-ink">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* JOURNEY */}
      <section aria-labelledby="jrny-h" className={`${WRAP} py-16 md:py-24`}>
        <SectionHeading
          kicker="DEVELOPMENT JOURNEY"
          title={<span id="jrny-h">Built in the open, one project at a time.</span>}
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {JOURNEY.map((j, i) => (
            <li key={j.title}>
              <Reveal delay={i * 0.06}>
                <div className="h-full rounded-ctrl border border-line bg-card p-6">
                  <p className="font-body text-[11px] font-bold tracking-[0.2em] text-goldeep">PHASE_0{i + 1}</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">{j.title}</h3>
                  <p className="mt-2 font-body text-[14px] leading-relaxed text-stone">{j.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal className="mt-10 text-center">
          <CTA href="/contact">START YOUR PROJECT</CTA>
        </Reveal>
      </section>
    </>
  );
}
