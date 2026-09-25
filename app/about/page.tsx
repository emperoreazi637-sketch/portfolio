import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description: "About Ojo Ezekiel O. — AI Automation & Web Developer. Approach, capabilities and contact.",
};

const WRAP = "mx-auto max-w-[1400px] px-5 md:px-10";

const CAPABILITIES = [
  "AI Automation",
  "Web Development",
  "Workflow Engineering",
  "API Integration",
  "AI Content Systems",
  "Digital Experiences",
];

const APPROACH = [
  ["01", "DISCOVER", "Understand the problem, users and desired outcome."],
  ["02", "MAP", "Break the workflow or experience into clear systems and steps."],
  ["03", "DESIGN", "Create the structure, interface and interaction model."],
  ["04", "BUILD", "Develop the website, automation or integrated system."],
  ["05", "REFINE", "Test, improve and simplify."],
  ["06", "DELIVER", "Ship a polished and usable final system."],
];

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-h1" className={`${WRAP} pb-14 pt-[120px] md:pt-[160px]`}>
        <Reveal>
          <p className="font-body text-[11px] tracking-[0.24em] text-muted"><span className="text-lime">ABOUT</span> — OJO EZEKIEL O.</p>
          <h1 id="about-h1" className="display-tight mt-4 max-w-4xl font-display text-5xl font-bold text-cream md:text-7xl">
            I turn ideas, processes and problems into useful digital systems.
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted md:text-lg">
            I&apos;m Ojo Ezekiel O., an AI Automation &amp; Web Developer based in Lagos, working remotely
            worldwide. My work sits at the intersection of automation, web development and practical
            digital experiences.
          </p>
        </Reveal>
      </section>

      <section aria-labelledby="approach-h" className="border-t border-line bg-surface/60">
        <div className={`${WRAP} py-14 md:py-20`}>
          <Reveal>
            <h2 id="approach-h" className="font-body text-[11px] tracking-[0.24em] text-muted"><span className="text-lime">APPROACH</span> — UNDERSTAND → DESIGN → BUILD → REFINE</h2>
          </Reveal>
          <ol className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {APPROACH.map(([n, t, d]) => (
              <li key={n + t} className="bg-ink p-6">
                <Reveal>
                  <p className="font-display text-sm font-bold text-lime">{n}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-cream">{t}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted">{d}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="cap-h" className={`${WRAP} grid gap-10 py-14 md:py-20 lg:grid-cols-2`}>
        <div>
          <Reveal>
            <h2 id="cap-h" className="font-body text-[11px] tracking-[0.24em] text-muted"><span className="text-lime">CAPABILITIES</span></h2>
            <ul className="mt-5 space-y-0">
              {CAPABILITIES.map((c) => (
                <li key={c} className="border-b border-line py-3 font-display text-lg font-bold text-cream md:text-xl">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div>
          <Reveal delay={0.08}>
            <h2 className="font-body text-[11px] tracking-[0.24em] text-muted"><span className="text-lime">POSITIONING</span></h2>
            <p className="mt-5 font-body text-[15px] leading-relaxed text-muted md:text-base">
              Not only an AI engineer, not only a web developer. The combination — automation systems plus
              web experiences — is the work: workflows that do the heavy lifting, wrapped in interfaces
              people can actually use.
            </p>
            <div className="mt-8">
              <CTA href="/contact">WORK WITH ME</CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
