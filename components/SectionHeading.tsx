import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface Props {
  kicker: string;
  title: ReactNode;
  intro?: string;
  dark?: boolean;
}

export function SectionHeading({ kicker, title, intro, dark = false }: Props) {
  return (
    <Reveal>
      <div className="mb-10 md:mb-12">
        <p className={`font-body text-[11px] font-bold tracking-[0.22em] ${dark ? "text-gold" : "text-pine"}`}>
          {kicker}
        </p>
        <h2 className={`display-tight mt-3 font-display text-4xl font-bold md:text-5xl ${dark ? "text-cream" : "text-ink"}`}>
          {title}
        </h2>
        {intro && (
          <p className={`mt-3 max-w-xl font-body text-[15px] leading-relaxed ${dark ? "text-cream/70" : "text-gray"}`}>
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  );
}
