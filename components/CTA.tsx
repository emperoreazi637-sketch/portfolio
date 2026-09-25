import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  href: string;
  children: React.ReactNode;
  variant?: "lime" | "ghost";
  className?: string;
}

export function CTA({ href, children, variant = "lime", className = "" }: CTAProps) {
  const base =
    "group inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 font-body text-[13px] font-bold tracking-[0.1em] transition-colors duration-200";
  const styles =
    variant === "lime"
      ? "bg-lime text-ink hover:brightness-110"
      : "border border-line text-cream hover:border-lime hover:text-lime";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      <ArrowRight size={16} aria-hidden className="transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}
