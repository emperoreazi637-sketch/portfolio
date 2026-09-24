"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site";

const MOBILE_LINKS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "WhatsApp", href: SITE.whatsapp, external: true },
  { label: "LinkedIn", href: SITE.linkedin, external: true },
];

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-line bg-paper/90 backdrop-blur-md" : "border-b border-transparent bg-paper/60 backdrop-blur-sm"
        }`}
      >
        <nav aria-label="Primary" className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-5 md:px-8">
          <Link href="/" className="font-display text-[15px] font-bold tracking-[0.08em] text-ink" aria-label="Ojo Ezekiel O. — home">
            OJO EZEKIEL O.
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`u-link font-body text-[12px] font-bold tracking-[0.18em] transition-colors ${
                    isActive(l.href) ? "text-pine" : "text-ink/65 hover:text-ink"
                  }`}
                >
                  {l.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="group hidden min-h-[44px] items-center gap-1.5 rounded-ctrl bg-ink px-5 py-2.5 font-body text-[12px] font-bold tracking-[0.12em] text-cream transition-colors hover:bg-pine md:inline-flex"
          >
            LET&apos;S TALK
            <ArrowUpRight size={15} aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex min-h-[44px] min-w-[44px] items-center justify-end gap-2 font-body text-[13px] font-bold tracking-[0.18em] text-ink md:hidden"
          >
            {open ? "CLOSE" : "MENU"}
            {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="on-dark fixed inset-0 z-40 flex flex-col justify-between bg-pine px-6 pb-10 pt-[104px] md:hidden"
          >
            <nav aria-label="Mobile">
              <ul>
                {MOBILE_LINKS.map((l, i) => (
                  <motion.li
                    key={l.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.35 }}
                  >
                    {l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-[64px] items-center justify-between border-b border-pineline py-3 font-display text-4xl font-bold tracking-tight text-cream"
                      >
                        {l.label}
                        <ArrowUpRight size={26} aria-hidden className="text-gold" />
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="flex min-h-[64px] items-center justify-between border-b border-pineline py-3 font-display text-4xl font-bold tracking-tight text-cream"
                      >
                        {l.label}
                        <ArrowUpRight size={26} aria-hidden className="text-gold" />
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div>
              <a href={SITE.phoneHref} className="mb-4 inline-block min-h-[44px] font-body text-lg font-bold text-cream">
                {SITE.phone}
              </a>
              <Link
                href="/contact"
                className="flex min-h-[54px] items-center justify-center gap-2 rounded-ctrl bg-gold font-body text-sm font-bold tracking-[0.12em] text-ink"
              >
                LET&apos;S TALK <ArrowUpRight size={18} aria-hidden />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
