import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Magnetic } from "./Magnetic";

interface CTAProps {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "dark" | "outline" | "outline-light";
  className?: string;
  external?: boolean;
}

export function CTA({ href, children, variant = "gold", className = "", external = false }: CTAProps) {
  const base =
    "group inline-flex min-h-[48px] items-center gap-2.5 rounded-ctrl px-7 py-3.5 font-body text-[13px] font-bold tracking-[0.1em] transition-all duration-300";
  const styles =
    variant === "gold"
      ? "bg-gold text-ink shadow-[0_8px_24px_-8px_rgba(244,180,0,0.6)] hover:bg-goldeep"
      : variant === "dark"
        ? "bg-pine text-cream hover:bg-pinedeep"
        : variant === "outline-light"
          ? "border border-cream/30 text-cream hover:border-gold hover:text-gold"
          : "border border-ink/20 text-ink hover:border-pine hover:text-pine";
  const Icon = variant === "gold" || variant === "dark" ? ArrowRight : ArrowUpRight;
  const inner = (
    <>
      <span>{children}</span>
      <Icon
        size={16}
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </>
  );
  const cls = `${base} ${styles} ${className}`;
  if (external) {
    return (
      <Magnetic strength={0.15}>
        <a href={href} className={cls}>
          {inner}
        </a>
      </Magnetic>
    );
  }
  return (
    <Magnetic strength={0.15}>
      <Link href={href} className={cls}>
        {inner}
      </Link>
    </Magnetic>
  );
}
