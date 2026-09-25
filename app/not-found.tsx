import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-24 pt-[160px] md:px-10">
      <p className="font-body text-[11px] tracking-[0.24em] text-muted">404 — OFF THE MAP</p>
      <h1 className="display-tight mt-4 font-display text-6xl font-bold text-cream md:text-8xl">Lost<br />signal.</h1>
      <p className="mt-4 max-w-md font-body text-[15px] text-muted">That page doesn&apos;t exist. The system reroutes — pick a working path.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/" className="bg-lime px-6 py-3 font-body text-[13px] font-bold tracking-[0.1em] text-ink transition hover:brightness-110">GO HOME</Link>
        <Link href="/work" className="border border-line px-6 py-3 font-body text-[13px] font-bold tracking-[0.1em] text-cream transition-colors hover:border-lime hover:text-lime">VIEW WORK</Link>
      </div>
    </div>
  );
}
