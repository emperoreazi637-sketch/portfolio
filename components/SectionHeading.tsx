import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface Props {
  kicker: string;
  title: ReactNode;
  intro?: string;
  dark?: boolean;
  align?: "left" | "center";
}

export function SectionHeading({ kicker, title, intro, dark = false, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <Reveal>
      <div className={`mb-10 md:mb-14 ${centered ? "text-center" : ""}`}>
        <p
          className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 font-body text-[11px] font-bold tracking-[0.2em] ${
            dark ? "border-cream/20 text-gold" : "border-line bg-card text-pine"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-gold" : "bg-goldeep"}`} aria-hidden />
          {kicker}
        </p>
        <h2 className={`display-tight mt-5 font-display text-4xl font-bold md:text-6xl ${dark ? "text-cream" : "text-ink"} ${centered ? "mx-auto max-w-3xl" : ""}`}>
          {title}
        </h2>
        {intro && (
          <p className={`mt-4 max-w-xl font-body text-[15px] leading-relaxed md:text-base ${dark ? "text-cream/70" : "text-stone"} ${centered ? "mx-auto" : ""}`}>
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  );
}
