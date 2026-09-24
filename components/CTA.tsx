import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface CTAProps {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "gold" | "ghost" | "light";
  className?: string;
  external?: boolean;
}

export function CTA({ href, children, variant = "dark", className = "", external = false }: CTAProps) {
  const base =
    "group inline-flex min-h-[48px] items-center gap-2 rounded-ctrl px-7 py-3.5 font-body text-[13px] font-bold tracking-[0.08em] transition-all duration-300";
  const styles =
    variant === "gold"
      ? "bg-gold text-ink hover:bg-golddeep"
      : variant === "ghost"
        ? "border border-ink/20 text-ink hover:border-pine hover:text-pine"
        : variant === "light"
          ? "border border-cream/30 text-cream hover:border-gold hover:text-gold"
          : "bg-ink text-cream hover:bg-pine";
  const Icon = external ? ArrowUpRight : ArrowRight;
  const inner = (
    <>
      <span>{children}</span>
      <Icon size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );
  const cls = `${base} ${styles} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
