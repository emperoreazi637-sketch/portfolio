import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowDown, Check, Phone } from "lucide-react";
import { HeroSystem } from "@/components/HeroSystem";
import { FeaturedWork } from "@/components/FeaturedWork";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { CapabilityTabs } from "@/components/CapabilityTabs";
import { Faq } from "@/components/Faq";
import { IdentityVisual } from "@/components/visuals";
import {
  SERVICES,
  PROCESS_STEPS,
  JOURNEY,
  ENGAGEMENTS,
  PRINCIPLES,
  STANDARDS,
  INSIGHTS,
  TOOL_STACK,
} from "@/data/projects";
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
      {/* ============ 1. HERO ============ */}
      <section aria-labelledby="hero-heading" className={`${WRAP} grid gap-10 pb-14 pt-[120px] md:pt-[150px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-14`}>
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 font-body text-[11px] font-bold tracking-[0.18em] text-pine">
              <span className="h-2 w-2 rounded-full bg-goldeep" aria-hidden />
              AI AUTOMATION × WEB DEVELOPMENT
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 id="hero-heading" className="display-tight mt-6 font-display text-[12.5vw] font-bold text-ink sm:text-6xl md:text-7xl lg:text-[4.9rem]">
              I BUILD<br />INTELLIGENT<br />SYSTEMS <span className="text-pine">&amp;</span> DIGITAL<br />EXPERIENCES.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-stone md:text-lg">
              <strong className="font-bold text-ink">AI Automation &amp; Web Developer</strong> helping turn
              complex ideas, repetitive processes and digital products into simple, useful systems.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTA href="/contact">START A PROJECT</CTA>
              <CTA href="/work" variant="outline">VIEW MY WORK</CTA>
            </div>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-5">
              <p className="font-body text-[12px] font-bold tracking-[0.14em] text-stone">
                LAGOS, NIGERIA · WORKING GLOBALLY
              </p>
              <a href={SITE.phoneHref} className="flex min-h-[44px] items-center gap-2 font-body text-[12px] font-bold tracking-[0.14em] text-pine hover:text-ink">
                <Phone size={14} aria-hidden /> {SITE.phone.toUpperCase()}
              </a>
              <p className="flex items-center gap-2 font-body text-[12px] font-bold tracking-[0.14em] text-pine">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-goldeep opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-goldeep" />
                </span>
                AVAILABLE FOR SELECT PROJECTS
              </p>
            </div>
          </Reveal>
        </div>
        <div className="lg:pt-8">
          <Reveal delay={0.2}>
            <HeroSystem />
            <p className="mt-3 flex items-center gap-2 font-body text-[11px] font-bold tracking-[0.18em] text-stone">
              <ArrowDown size={13} aria-hidden /> SCROLL — IDEA → SYSTEM → RESULT
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 2. TRUST / INTRO STRIP ============ */}
      <section aria-label="Positioning" className="border-y border-line bg-card">
        <div className={`${WRAP} py-12 md:py-16`}>
          <Reveal>
            <h2 className="display-tight max-w-4xl font-display text-3xl font-bold text-ink md:text-5xl">
              I build digital systems that <span className="rounded-ctrl-sm bg-gold px-2">do more</span> with less.
            </h2>
            <p className="mt-4 max-w-2xl font-body text-[15px] leading-relaxed text-stone md:text-base">
              My work sits at the intersection of AI, automation, web development, APIs, digital products and
              workflow design — connected into systems that are easier to run than the processes they replace.
            </p>
          </Reveal>
        </div>
        <div className="overflow-hidden border-t border-line py-4" aria-label="Tools and technologies">
          <div className="flex w-max animate-marquee gap-3 whitespace-nowrap">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center gap-3" aria-hidden={dup === 1}>
                {TOOL_STACK.map((t) => (
                  <span key={t + dup} className="rounded-full border border-line bg-cream px-5 py-2 font-body text-[13px] font-bold tracking-[0.06em] text-ink">
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3. SERVICES ============ */}
      <section id="services" aria-labelledby="services-h" className={`${WRAP} scroll-mt-24 py-16 md:py-24`}>
        <SectionHeading
          kicker="SERVICES"
          title={<span id="services-h">What I can build for you.</span>}
          intro="Six focused offerings — each one a complete path from problem to working system."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 0.06}>
              <article className="group flex h-full flex-col rounded-ctrl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-pine hover:shadow-[0_24px_50px_-24px_rgba(23,63,43,0.4)] md:p-7">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-ctrl-sm bg-pine text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink" aria-hidden>
                    <s.icon size={22} />
                  </span>
                  <span className="font-display text-sm font-bold text-stone/60">{s.n}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 font-body text-[14px] leading-relaxed text-stone">{s.body}</p>
                <Link href="/contact" aria-label={`Start a ${s.title.toLowerCase()} project`} className="mt-5 inline-flex min-h-[44px] items-center gap-2 font-body text-[13px] font-bold tracking-[0.1em] text-pine">
                  LET&apos;S DISCUSS
                  <ArrowRight size={15} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ 4. FEATURED WORK ============ */}
      <section aria-labelledby="work-h" className="border-y border-line bg-card/60">
        <div className={`${WRAP} py-16 md:py-24`}>
          <SectionHeading
            kicker="PORTFOLIO"
            title={<span id="work-h">Selected work.</span>}
            intro="Large builds, not thumbnails — each project is a system with a story behind it."
          />
          <FeaturedWork />
          <Reveal className="mt-10 text-center">
            <CTA href="/work" variant="dark">ALL PROJECTS</CTA>
          </Reveal>
        </div>
      </section>

      {/* ============ 5. HOW I WORK ============ */}
      <section aria-labelledby="process-h" className="on-dark bg-pine">
        <div className={`${WRAP} py-16 md:py-24`}>
          <SectionHeading
            dark
            kicker="PROCESS"
            title={<span id="process-h">From idea to system.</span>}
            intro="A simple, repeatable path — whether the output is a website, a workflow, or both."
          />
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((s, i) => (
              <li key={s.n}>
                <Reveal delay={i * 0.07}>
                  <div className="h-full rounded-ctrl border border-cream/15 bg-cream/[0.05] p-6 transition-colors duration-300 hover:border-gold/60 md:p-7">
                    <p className="font-display text-5xl font-bold text-gold/90">{s.n}</p>
                    <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-cream">{s.title}</h3>
                    <p className="mt-2 font-body text-[14px] leading-relaxed text-cream/70">{s.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ 6. ABOUT ============ */}
      <section aria-labelledby="about-h" className={`${WRAP} grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2`}>
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-1.5 font-body text-[11px] font-bold tracking-[0.2em] text-pine">
              <span className="h-1.5 w-1.5 rounded-full bg-goldeep" aria-hidden /> A LITTLE ABOUT ME
            </p>
            <h2 id="about-h" className="display-tight mt-5 font-display text-4xl font-bold text-ink md:text-5xl">
              Systems thinking, human interfaces.
            </h2>
            <p className="mt-5 font-body text-[15px] leading-relaxed text-stone md:text-base">
              <strong className="text-ink">I&apos;m Ojo Ezekiel O., an AI Automation &amp; Web Developer</strong>{" "}
              interested in the space where technology, automation and digital experiences meet.
            </p>
            <p className="mt-4 font-body text-[15px] leading-relaxed text-stone md:text-base">
              I enjoy taking complicated processes and turning them into systems that are easier to understand,
              easier to use and easier to scale.
            </p>
            <div className="mt-7">
              <CTA href="/about" variant="dark">MORE ABOUT ME</CTA>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <IdentityVisual />
        </Reveal>
      </section>

      {/* ============ 7. CAPABILITIES ============ */}
      <section aria-labelledby="cap-h" className="border-y border-line bg-card/60">
        <div className={`${WRAP} py-16 md:py-24`}>
          <SectionHeading
            kicker="CAPABILITIES"
            title={<span id="cap-h">Tools of the trade.</span>}
            intro="Pick a discipline — hover or tap to see what's inside."
          />
          <Reveal>
            <CapabilityTabs />
          </Reveal>
        </div>
      </section>

      {/* ============ 8. JOURNEY ============ */}
      <section aria-labelledby="journey-h" className={`${WRAP} py-16 md:py-24`}>
        <SectionHeading
          kicker="EXPERIENCE"
          title={<span id="journey-h">The journey so far.</span>}
          intro="Framed around craft, not invented credentials — what I actually do, every week."
        />
        <ol className="relative ml-2 space-y-0 border-l-2 border-line pl-0">
          {JOURNEY.map((j, i) => (
            <li key={j.title} className="relative pb-10 pl-8 last:pb-0 md:pl-12">
              <Reveal delay={i * 0.05}>
                <span aria-hidden className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-pine bg-gold" />
                <p className="font-body text-[11px] font-bold tracking-[0.2em] text-stone">PHASE_0{i + 1}</p>
                <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">{j.title}</h3>
                <p className="mt-2 max-w-xl font-body text-[15px] leading-relaxed text-stone">{j.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ============ 9. ENGAGEMENT ============ */}
      <section aria-labelledby="engage-h" className="border-y border-line bg-card/60">
        <div className={`${WRAP} py-16 md:py-24`}>
          <SectionHeading
            align="center"
            kicker="ENGAGEMENT"
            title={<span id="engage-h">Ways we can work together.</span>}
            intro="No fake pricing tiers — three honest starting points, scoped around your actual project."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {ENGAGEMENTS.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.07}>
                <article className={`flex h-full flex-col rounded-ctrl border p-7 md:p-8 ${i === 1 ? "on-dark border-pine bg-pine" : "border-line bg-cream"}`}>
                  <p className={`font-body text-[11px] font-bold tracking-[0.2em] ${i === 1 ? "text-gold" : "text-pine"}`}>OPTION_0{i + 1}</p>
                  <h3 className={`mt-3 font-display text-2xl font-bold tracking-tight ${i === 1 ? "text-cream" : "text-ink"}`}>{e.title}</h3>
                  <p className={`mt-2 font-body text-[14px] leading-relaxed ${i === 1 ? "text-cream/70" : "text-stone"}`}>{e.body}</p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {e.points.map((pt) => (
                      <li key={pt} className={`flex items-center gap-2.5 font-body text-[14px] font-semibold ${i === 1 ? "text-cream" : "text-ink"}`}>
                        <span className={`flex h-5 w-5 items-center justify-center rounded-full ${i === 1 ? "bg-gold" : "bg-pine"}`} aria-hidden>
                          <Check size={12} strokeWidth={3.5} className={i === 1 ? "text-ink" : "text-gold"} />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-7 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-ctrl-sm font-body text-[13px] font-bold tracking-[0.1em] transition ${
                      i === 1 ? "bg-gold text-ink hover:bg-goldeep" : "bg-ink text-cream hover:bg-pine"
                    }`}
                  >
                    LET&apos;S DISCUSS <ArrowRight size={15} aria-hidden />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 10. WHY WORK WITH ME ============ */}
      <section aria-labelledby="why-h" className={`${WRAP} py-16 md:py-24`}>
        <SectionHeading
          kicker="PRINCIPLES"
          title={<span id="why-h">Why work with me.</span>}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <div className="h-full rounded-ctrl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pine md:p-7">
                <p className="font-display text-sm font-bold tracking-[0.14em] text-goldeep">0{i + 1}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{t}</h3>
                <p className="mt-2 font-body text-[14px] leading-relaxed text-stone">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ 11. STANDARD ============ */}
      <section aria-labelledby="std-h" className="on-dark bg-pinedeep">
        <div className={`${WRAP} grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2`}>
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-cream/20 px-4 py-1.5 font-body text-[11px] font-bold tracking-[0.2em] text-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden /> NO FAKE REVIEWS — JUST STANDARDS
              </p>
              <h2 id="std-h" className="display-tight mt-5 font-display text-4xl font-bold text-cream md:text-5xl">
                The standard I build to.
              </h2>
              <p className="mt-4 max-w-md font-body text-[15px] leading-relaxed text-cream/70">
                Rather than invented testimonials, here is the bar every project is held to — agreed upfront,
                checked at delivery.
              </p>
              <div className="mt-7">
                <CTA href="/contact" variant="gold">HOLD ME TO IT</CTA>
              </div>
            </Reveal>
          </div>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {STANDARDS.map((s, i) => (
              <li key={s}>
                <Reveal delay={i * 0.05}>
                  <p className="flex items-center gap-3 rounded-ctrl-sm border border-cream/15 bg-cream/[0.06] px-4 py-4 font-body text-[14px] font-semibold text-cream">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold" aria-hidden>
                      <Check size={15} strokeWidth={3.5} className="text-ink" />
                    </span>
                    {s}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ 12. INSIGHTS ============ */}
      <section aria-labelledby="ins-h" className={`${WRAP} py-16 md:py-24`}>
        <SectionHeading
          kicker="INSIGHTS"
          title={<span id="ins-h">Notes from the workbench.</span>}
          intro="Short pieces on automation and workflow design — topics in progress, published as they're finished."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {INSIGHTS.map((n, i) => (
            <Reveal key={n.n} delay={i * 0.06}>
              <article className="group flex h-full flex-col rounded-ctrl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pine md:p-7">
                <p className="font-display text-sm font-bold text-goldeep">{n.n}</p>
                <h3 className="mt-3 flex-1 font-display text-xl font-bold leading-snug text-ink">{n.title}</h3>
                <p className="mt-2 font-body text-[14px] leading-relaxed text-stone">{n.body}</p>
                <Link href="/insights" className="mt-5 inline-flex min-h-[44px] items-center gap-2 font-body text-[13px] font-bold tracking-[0.1em] text-pine">
                  READ NOTE
                  <ArrowRight size={15} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <CTA href="/insights" variant="dark">EXPLORE INSIGHTS</CTA>
        </Reveal>
      </section>

      {/* ============ 13. FAQ ============ */}
      <section aria-labelledby="faq-h" className="border-t border-line bg-card/60">
        <div className={`${WRAP} grid gap-10 py-16 md:py-24 lg:grid-cols-[0.8fr_1.2fr]`}>
          <div>
            <SectionHeading
              kicker="FAQ"
              title={<span id="faq-h">Questions, answered.</span>}
              intro="Anything else on your mind? Bring it to the first call — or send it through the contact page."
            />
            <Reveal>
              <a href={SITE.phoneHref} className="inline-flex min-h-[48px] items-center gap-2.5 rounded-ctrl bg-pine px-6 py-3 font-body text-[13px] font-bold tracking-[0.08em] text-cream hover:bg-pinedeep">
                <Phone size={15} aria-hidden className="text-gold" /> {SITE.phone}
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Faq />
          </Reveal>
        </div>
      </section>

      {/* ============ 14. FINAL CTA ============ */}
      <section aria-labelledby="cta-h" className="on-dark relative overflow-hidden bg-pine">
        <div aria-hidden className="animate-float-slow absolute -left-16 top-10 h-64 w-64 rounded-full bg-gold/15" />
        <div aria-hidden className="absolute -bottom-24 right-10 h-80 w-80 rounded-full border-[14px] border-gold/20" />
        <div aria-hidden className="absolute right-1/4 top-8 h-16 w-16 rounded-ctrl-sm bg-gold/25" />
        <div className={`${WRAP} relative py-20 text-center md:py-28`}>
          <Reveal>
            <p className="font-body text-[11px] font-bold tracking-[0.24em] text-gold">FINAL STEP</p>
            <h2 id="cta-h" className="display-tight mx-auto mt-4 max-w-3xl font-display text-5xl font-bold text-cream md:text-7xl">
              Have an idea worth building?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-[15px] leading-relaxed text-cream/75 md:text-base">
              Let&apos;s turn it into a system, product or experience that actually works.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <CTA href="/contact" variant="gold">LET&apos;S TALK</CTA>
              <a href={SITE.phoneHref} className="inline-flex min-h-[48px] items-center gap-2 font-body text-[14px] font-bold tracking-[0.06em] text-cream/85 hover:text-gold">
                <Phone size={15} aria-hidden /> {SITE.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
