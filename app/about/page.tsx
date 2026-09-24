import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { APPROACH, ABOUT_CAPABILITIES, TOOLS } from "@/data/projects";

export const metadata: Metadata = {
  title: "About",
  description: "About Ojo Ezekiel O. — AI Automation & Web Developer. Approach, capabilities and tools.",
};

const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8";

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-h1" className={`${WRAP} pb-14 pt-[120px] md:pt-[160px]`}>
        <Reveal>
          <p className="font-body text-[12px] font-bold tracking-[0.2em] text-pine">ABOUT</p>
          <h1 id="about-h1" className="display-tight mt-4 max-w-3xl font-display text-5xl font-bold text-ink md:text-6xl">
            Developer of intelligent systems.
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-gray md:text-lg">
            I&apos;m Ojo Ezekiel O., an AI Automation &amp; Web Developer. I build intelligent workflows,
            modern websites and digital systems that turn complex processes into simple products — working
            from Lagos, Nigeria with clients everywhere.
          </p>
        </Reveal>
      </section>

      <section aria-labelledby="approach-h" className="border-t border-line bg-card">
        <div className={`${WRAP} py-14 md:py-20`}>
          <SectionHeading kicker="APPROACH" title={<span id="approach-h">How every project runs.</span>} />
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((a, i) => (
              <li key={a}>
                <Reveal delay={i * 0.05}>
                  <div className="h-full rounded-ctrl bg-paper p-6">
                    <p className="font-display text-sm font-bold text-golddeep">0{i + 1}</p>
                    <h3 className="mt-2 font-display text-xl font-bold text-ink">{a}</h3>
                    <p className="mt-1.5 font-body text-sm leading-relaxed text-gray">
                      {[
                        "Understand the problem, workflow or product idea first.",
                        "Map the experience, architecture and automation logic.",
                        "Develop the website, workflow, integrations and interfaces.",
                        "Test, simplify and prepare the final system.",
                      ][i]}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="capab-h" className={`${WRAP} grid gap-10 py-14 md:py-20 lg:grid-cols-2`}>
        <div>
          <Reveal>
            <h2 id="capab-h" className="font-body text-[11px] font-bold tracking-[0.22em] text-pine">CAPABILITIES</h2>
            <ul className="mt-5 space-y-3">
              {ABOUT_CAPABILITIES.map((c) => (
                <li key={c} className="border-b border-line pb-3 font-display text-lg font-bold text-ink md:text-xl">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div>
          <Reveal delay={0.08}>
            <h2 className="font-body text-[11px] font-bold tracking-[0.22em] text-pine">TOOLS</h2>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools I use">
              {TOOLS.map((t) => (
                <li key={t} className="rounded-full border border-line bg-card px-4 py-2 font-body text-[13px] font-semibold text-ink">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CTA href="/contact">LET&apos;S WORK TOGETHER</CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
