import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";

const FOOT_NAV = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="on-dark bg-pine text-cream">
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-16 md:px-10 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              OJO EZEKIEL O.
            </p>
            <p className="mt-3 inline-block rounded-full bg-gold px-4 py-1.5 font-body text-[11px] font-bold tracking-[0.16em] text-ink">
              {SITE.title.toUpperCase()}
            </p>
            <p className="mt-5 max-w-sm font-body text-[15px] leading-relaxed text-cream/75">
              Intelligent systems and digital experiences — designed, built and refined around real problems.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="font-body text-[11px] font-bold tracking-[0.22em] text-gold">NAVIGATE</p>
            <ul className="mt-4 space-y-1">
              {FOOT_NAV.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="inline-flex min-h-[40px] items-center font-body text-[15px] text-cream/85 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-body text-[11px] font-bold tracking-[0.22em] text-gold">CONTACT</p>
            <a
              href={SITE.phoneHref}
              className="mt-4 inline-block min-h-[44px] font-display text-xl font-bold text-cream hover:text-gold md:text-2xl"
            >
              {SITE.phone}
            </a>
            <div>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 inline-flex min-h-[44px] items-center gap-1.5 font-body text-[15px] font-semibold text-cream/85 hover:text-gold"
              >
                LinkedIn
                <ArrowUpRight size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
            <p className="mt-3 font-body text-sm text-cream/60">
              {SITE.location} · Working globally
            </p>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-pineline pt-6 font-body text-[13px] text-cream/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {SITE.name}</p>
          <p className="tracking-[0.18em]">IDEA → SYSTEM → RESULT</p>
        </div>
      </div>
    </footer>
  );
}
