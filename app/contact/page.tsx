import type { Metadata } from "next";
import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ojo Ezekiel O. — phone, WhatsApp, LinkedIn or the inquiry form.",
};

const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8";

export default function ContactPage() {
  return (
    <div className={`${WRAP} pb-20 pt-[120px] md:pt-[160px]`}>
      <Reveal>
        <p className="font-body text-[12px] font-bold tracking-[0.2em] text-pine">CONTACT</p>
        <h1 className="display-tight mt-4 max-w-2xl font-display text-5xl font-bold text-ink md:text-6xl">
          Let&apos;s build something useful.
        </h1>
        <p className="mt-4 max-w-md font-body text-[15px] leading-relaxed text-gray">
          Have a website, automation workflow or digital product in mind? Let&apos;s talk.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        <Reveal>
          <a href={SITE.phoneHref} className="group flex h-full min-h-[96px] flex-col justify-between rounded-ctrl bg-pine p-5 transition-colors hover:bg-pinedeep on-dark">
            <span className="flex items-center gap-2 font-body text-[11px] font-bold tracking-[0.16em] text-gold">
              <Phone size={14} aria-hidden /> PHONE
            </span>
            <span className="mt-2 font-display text-lg font-bold text-cream">{SITE.phone}</span>
          </a>
        </Reveal>
        <Reveal delay={0.05}>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex h-full min-h-[96px] flex-col justify-between rounded-ctrl border border-line bg-card p-5 transition-colors hover:border-pine">
            <span className="flex items-center gap-2 font-body text-[11px] font-bold tracking-[0.16em] text-pine">
              <MessageCircle size={14} aria-hidden /> WHATSAPP
            </span>
            <span className="mt-2 flex items-center gap-1.5 font-display text-lg font-bold text-ink">
              Chat on WhatsApp
              <ArrowUpRight size={17} aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="group flex h-full min-h-[96px] flex-col justify-between rounded-ctrl border border-line bg-card p-5 transition-colors hover:border-pine">
            <span className="font-body text-[11px] font-bold tracking-[0.16em] text-pine">LINKEDIN</span>
            <span className="mt-2 flex items-center gap-1.5 font-display text-lg font-bold text-ink">
              LinkedIn
              <ArrowUpRight size={17} aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-ink">Send a message</h2>
          <div className="mt-5">
            <ContactForm />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
