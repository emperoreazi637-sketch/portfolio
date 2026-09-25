import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface Props {
  index: string;
  kicker: string;
  title: ReactNode;
  intro?: string;
}

/** Editorial section header: lime number, eyebrow, large display heading. */
export function SectionHeading({ index, kicker, title, intro }: Props) {
  return (
    <Reveal>
      <div className="mb-10 md:mb-14">
        <p className="flex items-center gap-3 font-body text-[11px] tracking-[0.24em] text-muted">
          <span className="font-display text-sm font-bold text-lime">{index}</span>
          <span className="h-px w-10 bg-line" aria-hidden />
          {kicker}
        </p>
        <h2 className="display-tight mt-4 font-display text-4xl font-bold text-cream md:text-6xl">{title}</h2>
        {intro && <p className="mt-4 max-w-xl font-body text-[15px] leading-relaxed text-muted">{intro}</p>}
      </div>
    </Reveal>
  );
}
