import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-16">
        <p className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">{SITE.fullName}</p>
        <p className="mt-1.5 font-body text-sm text-gray">{SITE.title}</p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {[
                { label: "Work", href: "/work" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="u-link inline-flex min-h-[44px] items-center font-body text-[13px] font-bold tracking-[0.14em] text-ink">
                    {l.label.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="sm:text-right">
            <a href={SITE.phoneHref} className="inline-flex min-h-[44px] items-center font-body text-[15px] font-bold text-ink hover:text-pine">
              {SITE.phone}
            </a>
            <div className="mt-1 flex gap-6 sm:justify-end">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-[44px] items-center gap-1 font-body text-sm font-semibold text-gray hover:text-pine">
                WhatsApp <ArrowUpRight size={14} aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-[44px] items-center gap-1 font-body text-sm font-semibold text-gray hover:text-pine">
                LinkedIn <ArrowUpRight size={14} aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-line pt-6 font-body text-[13px] text-gray">© 2026 {SITE.name}</p>
      </div>
    </footer>
  );
}
