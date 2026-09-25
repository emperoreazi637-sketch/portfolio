import type { Metadata } from "next";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ojo Ezekiel O. — phone, WhatsApp, LinkedIn or the project inquiry form.",
};

const WRAP = "mx-auto max-w-[1400px] px-5 md:px-10";

export default function ContactPage() {
  return (
    <div className={`${WRAP} pb-20 pt-[120px] md:pt-[160px]`}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <Reveal>
            <p className="font-body text-[11px] tracking-[0.24em] text-muted">CONTACT — 2026</p>
            <h1 className="display-tight mt-4 font-display text-5xl font-bold text-cream md:text-6xl">
              Have a system<br />that needs building?
            </h1>
            <p className="mt-5 max-w-md font-body text-[15px] leading-relaxed text-muted">
              Let&apos;s turn the idea into something practical.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10 space-y-3">
              <a href={SITE.phoneHref} className="group flex items-center justify-between border border-line bg-surface p-5 transition-colors duration-200 hover:border-lime">
                <span>
                  <span className="block font-body text-[11px] tracking-[0.22em] text-muted">PHONE</span>
                  <span className="mt-1 flex items-center gap-2 font-display text-xl font-bold text-cream">
                    <Phone size={17} aria-hidden className="text-lime" /> {SITE.phone}
                  </span>
                </span>
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border border-line bg-surface p-5 transition-colors duration-200 hover:border-lime">
                <span>
                  <span className="block font-body text-[11px] tracking-[0.22em] text-muted">WHATSAPP</span>
                  <span className="mt-1 flex items-center gap-2 font-display text-xl font-bold text-cream">
                    <MessageCircle size={17} aria-hidden className="text-lime" /> Chat directly
                  </span>
                </span>
                <ArrowUpRight size={18} aria-hidden className="text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime" />
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border border-line bg-surface p-5 transition-colors duration-200 hover:border-lime">
                <span>
                  <span className="block font-body text-[11px] tracking-[0.22em] text-muted">LINKEDIN</span>
                  <span className="mt-1 font-display text-xl font-bold text-cream">Profile</span>
                </span>
                <ArrowUpRight size={18} aria-hidden className="text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime" />
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-cream">Send an inquiry</h2>
            <p className="mb-6 mt-1 font-body text-sm text-muted">Opens WhatsApp with your message prefilled — you press send.</p>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
