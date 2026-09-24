import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroStrip } from "@/components/HeroStrip";
import { SelectedWork } from "@/components/SelectedWork";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { CAPABILITIES } from "@/data/projects";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Ojo Ezekiel O. — AI Automation & Web Developer",
  description:
    "Ojo Ezekiel O. is an AI Automation & Web Developer building intelligent workflows, modern websites and digital experiences.",
};

const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8";

export default function HomePage() {
  return (
    <>
      {/* ============ 1. HERO ============ */}
      <section aria-labelledby="hero-heading" className={`${WRAP} pb-16 pt-[120px] md:pb-20 md:pt-[160px]`}>
        <Reveal>
          <p className="font-body text-[12px] font-bold tracking-[0.2em] text-pine">
            OJO EZEKIEL O. — AI AUTOMATION &amp; WEB DEVELOPER
          </p>
          <h1 id="hero-heading" className="display-tight mt-5 max-w-4xl font-display text-[15vw] font-bold text-ink sm:text-7xl md:text-8xl">
            I BUILD<br />INTELLIGENT<br />SYSTEMS<span className="text-golddeep">.</span>
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-gray md:text-lg">
            AI Automation &amp; Web Developer building intelligent workflows, modern websites and useful
            digital experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTA href="/work">VIEW MY WORK</CTA>
            <CTA href="/contact" variant="ghost">LET&apos;S TALK</CTA>
          </div>
          <HeroStrip />
        </Reveal>
      </section>

      {/* ============ 2. SELECTED WORK ============ */}
      <section aria-labelledby="work-h" className={`${WRAP} border-t border-line py-16 md:py-24`}>
        <SectionHeading
          kicker="PORTFOLIO"
          title={<span id="work-h">Selected work.</span>}
          intro="Three systems, three stories — each one built around a real problem."
        />
        <SelectedWork />
      </section>

      {/* ============ 3. SERVICES ============ */}
      <section aria-labelledby="cap-h" className="border-t border-line bg-card">
        <div className={`${WRAP} py-16 md:py-24`}>
          <SectionHeading
            kicker="CAPABILITIES"
            title={<span id="cap-h">What I build.</span>}
          />
          <ol className="border-t border-line">
            {CAPABILITIES.map((c) => (
              <li key={c.n}>
                <Reveal>
                  <div className="group grid gap-1 border-b border-line py-5 transition-colors duration-300 hover:bg-paper md:grid-cols-[64px_1fr_1.2fr] md:items-baseline md:gap-6 md:px-3">
                    <span className="font-display text-sm font-bold text-golddeep">{c.n}</span>
                    <h3 className="font-display text-lg font-bold tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1 md:text-xl">
                      {c.title}
                    </h3>
                    <p className="font-body text-[14px] leading-relaxed text-gray">{c.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ 4. ABOUT ============ */}
      <section aria-labelledby="about-h" className={`${WRAP} border-t border-line py-16 md:py-24`}>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <Reveal>
            <SectionHeading kicker="PROFILE" title={<span id="about-h">About me.</span>} />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-display text-xl font-bold leading-snug text-ink md:text-2xl">
              I&apos;m Ojo Ezekiel O., an AI Automation &amp; Web Developer interested in the space where
              technology, automation and digital experiences meet.
            </p>
            <p className="mt-4 max-w-xl font-body text-[15px] leading-relaxed text-gray">
              I enjoy turning complicated processes into simple, useful systems — software that removes work
              instead of relocating it.
            </p>
            <Link href="/about" className="group mt-6 inline-flex min-h-[48px] items-center gap-2 font-body text-[13px] font-bold tracking-[0.1em] text-ink hover:text-pine">
              MORE ABOUT ME
              <ArrowRight size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ 5. CONTACT CTA ============ */}
      <section aria-labelledby="cta-h" className="on-dark bg-pine">
        <div className={`${WRAP} py-16 text-center md:py-24`}>
          <Reveal>
            <h2 id="cta-h" className="display-tight mx-auto max-w-2xl font-display text-4xl font-bold text-cream md:text-6xl">
              Have something to build?
            </h2>
            <p className="mx-auto mt-4 max-w-md font-body text-[15px] leading-relaxed text-cream/70">
              Let&apos;s turn the idea into a useful digital system.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <CTA href="/contact" variant="gold">LET&apos;S TALK</CTA>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[48px] items-center gap-2 rounded-ctrl border border-cream/30 px-7 py-3.5 font-body text-[13px] font-bold tracking-[0.08em] text-cream transition-colors hover:border-gold hover:text-gold"
              >
                WHATSAPP
                <ArrowUpRight size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
