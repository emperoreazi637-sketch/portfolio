"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site";

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

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

  const isActive = (href: string) => {
    if (href === "/work" || href === "/contact") return pathname.startsWith(href);
    return false;
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
          scrolled ? "border-b border-line bg-ink/90 backdrop-blur-md" : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav aria-label="Primary" className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-5 md:px-10">
          <Link href="/" className="font-display text-sm font-bold tracking-[0.14em] text-cream" aria-label="Ojo Ezekiel O. — home">
            OJO EZEKIEL O.
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href + l.label}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`u-link font-body text-[12px] font-semibold tracking-[0.18em] transition-colors duration-200 ${
                    isActive(l.href) ? "text-lime" : "text-cream/70 hover:text-cream"
                  }`}
                >
                  {l.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="group hidden min-h-[44px] items-center gap-2 bg-lime px-5 py-2.5 font-body text-[12px] font-bold tracking-[0.12em] text-ink transition hover:brightness-110 md:inline-flex"
          >
            WORK WITH ME
            <ArrowRight size={15} aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex min-h-[44px] min-w-[44px] items-center justify-end gap-2 font-body text-[13px] font-bold tracking-[0.16em] text-cream md:hidden"
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
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-6 pb-10 pt-[104px] md:hidden"
          >
            <nav aria-label="Mobile">
              <ul>
                {[
                  { label: "About", href: "/#about" },
                  { label: "Services", href: "/#services" },
                  { label: "Work", href: "/work" },
                  { label: "Process", href: "/#process" },
                  { label: "Contact", href: "/contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="flex min-h-[60px] items-center justify-between border-b border-line py-2 font-display text-3xl font-bold tracking-tight text-cream"
                    >
                      {l.label}
                      <ArrowRight size={22} aria-hidden className="text-lime" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="mb-3 font-body text-[11px] tracking-[0.2em] text-muted">{SITE.availability.toUpperCase()}</p>
              <Link
                href="/contact"
                className="flex min-h-[52px] items-center justify-center gap-2 bg-lime font-body text-sm font-bold tracking-[0.12em] text-ink"
              >
                WORK WITH ME <ArrowRight size={17} aria-hidden />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
