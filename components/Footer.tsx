import Link from "next/link";
import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-16">
        <p className="font-display text-2xl font-bold tracking-tight text-cream md:text-3xl">{SITE.fullName}</p>
        <p className="mt-1.5 font-body text-[11px] tracking-[0.22em] text-lime">{SITE.role}</p>
        <p className="mt-3 font-body text-sm text-muted">{SITE.location}</p>

        <nav aria-label="Footer" className="mt-8">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            <li><Link href="/about" className="u-link inline-flex min-h-[44px] items-center font-body text-sm text-cream/80 hover:text-cream">About</Link></li>
            <li><Link href="/work" className="u-link inline-flex min-h-[44px] items-center font-body text-sm text-cream/80 hover:text-cream">Work</Link></li>
            <li><Link href="/contact" className="u-link inline-flex min-h-[44px] items-center font-body text-sm text-cream/80 hover:text-cream">Contact</Link></li>
            <li><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="u-link inline-flex min-h-[44px] items-center font-body text-sm text-cream/80 hover:text-cream">LinkedIn</a></li>
            <li><a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="u-link inline-flex min-h-[44px] items-center font-body text-sm text-cream/80 hover:text-cream">WhatsApp</a></li>
          </ul>
        </nav>

        <p className="mt-10 border-t border-line pt-6 font-body text-[13px] text-muted">© 2026 {SITE.name}</p>
      </div>
    </footer>
  );
}
