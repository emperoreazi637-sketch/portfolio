"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Expand, X, ImagePlus } from "lucide-react";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  filename: string;
  wide?: boolean;
}

/**
 * Editorial project artifact frame.
 * - Renders the real screenshot via next/image (correct aspect, lazy).
 * - Click/Enter opens an accessible lightbox for closer inspection.
 * - If the file is missing (user hasn't dropped it in yet), renders a
 *   clearly-marked slot — never a fake mockup or stock image.
 */
export function ProjectImage({ src, alt, caption, filename, wide = false }: Props) {
  const [missing, setMissing] = useState(false);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close ]);

  if (missing) {
    return (
      <figure className="overflow-hidden border border-line bg-surface">
        <div className="flex min-h-[280px] flex-col items-center justify-center gap-3 p-8 text-center md:min-h-[360px]">
          <ImagePlus size={28} aria-hidden className="text-lime" />
          <p className="font-display text-lg font-bold text-cream">Screenshot slot</p>
          <p className="max-w-sm font-body text-sm leading-relaxed text-muted">
            Place the real project file at{" "}
            <code className="text-cream">/public/images/projects/{filename}</code> and rebuild —
            it appears here with no code changes.
          </p>
        </div>
        {caption && (
          <figcaption className="border-t border-line px-5 py-3 font-body text-[12px] tracking-[0.06em] text-muted">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <>
      <figure className="overflow-hidden border border-line bg-surface">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Enlarge screenshot: ${alt}`}
          className="group block w-full cursor-zoom-in"
        >
          <span className="block overflow-hidden">
            <Image
              src={src}
              alt={alt}
              width={1600}
              height={1000}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 1200px"
              onError={() => setMissing(true)}
              className="h-auto w-full transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            />
          </span>
          <span className="flex items-center justify-between border-t border-line px-5 py-3">
            <span className="font-body text-[12px] tracking-[0.06em] text-muted">{caption ?? "Click to enlarge"}</span>
            <Expand size={15} aria-hidden className="text-muted transition-colors group-hover:text-lime" />
          </span>
        </button>
      </figure>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged screenshot: ${alt}`}
          onClick={close}
          className="fixed inset-0 z-[80] flex cursor-zoom-out items-center justify-center bg-ink/95 p-4 md:p-10"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close enlarged image"
            className="absolute right-4 top-4 flex min-h-[44px] min-w-[44px] items-center justify-center border border-line bg-surface text-cream transition-colors hover:border-lime hover:text-lime"
          >
            <X size={20} aria-hidden />
          </button>
          <div className="max-h-full max-w-6xl overflow-auto border border-line bg-surface" onClick={(e) => e.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              width={2000}
              height={1250}
              className="h-auto w-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
