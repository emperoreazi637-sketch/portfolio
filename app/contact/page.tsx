import type { Metadata } from "next";
import { ArrowUpRight, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a website, workflow or repetitive process that could work better? Tell Ojo Ezekiel O. what you're working on.",
};

const WRAP = "mx-auto max-w-[1400px] px-5 md:px-10";

export default function ContactPage() {
  return (
    <div className={`${WRAP} pb-20 pt-[120px] md:pt-[150px]`}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-1.5 font-body text-[11px] font-bold tracking-[0.2em] text-pine">
              <span className="h-1.5 w-1.5 rounded-full bg-goldeep" aria-hidden /> CONTACT
            </p>
            <h1 className="display-tight mt-5 font-display text-5xl font-bold text-ink md:text-6xl">
              Let&apos;s build something useful.
            </h1>
            <p className="mt-5 max-w-md font-body text-[15px] leading-relaxed text-stone md:text-base">
              Have a website, workflow or repetitive process that could work better? Tell me what you&apos;re
              working on — or skip the form and call directly.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 space-y-4">
              <a
                href={SITE.phoneHref}
                className="group flex items-center justify-between rounded-ctrl bg-pine p-6 transition-colors hover:bg-pinedeep on-dark"
              >
                <span>
                  <span className="block font-body text-[11px] font-bold tracking-[0.2em] text-gold">PHONE — FASTEST</span>
                  <span className="mt-1 block font-display text-2xl font-bold text-cream md:text-3xl">{SITE.phone}</span>
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink transition-transform duration-300 group-hover:scale-110" aria-hidden>
                  <Phone size={20} />
                </span>
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-ctrl border border-line bg-card p-6 transition-all hover:border-pine"
              >
                <span>
                  <span className="block font-body text-[11px] font-bold tracking-[0.2em] text-pine">LINKEDIN</span>
                  <span className="mt-1 block font-display text-xl font-bold text-ink">Connect &amp; message</span>
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-ink transition-all duration-300 group-hover:bg-gold" aria-hidden>
                  <ArrowUpRight size={20} />
                </span>
              </a>
              <p className="font-body text-sm text-stone">{SITE.location} · Working globally · {SITE.availability}</p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.12}>
          <div className="rounded-ctrl border border-line bg-card p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-ink">Send an inquiry</h2>
            <p className="mb-6 mt-1 font-body text-sm text-stone">Replies within 1–2 business days once the form backend is connected.</p>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
