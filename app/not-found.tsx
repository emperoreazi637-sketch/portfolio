import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 pb-24 pt-[160px] md:px-8">
      <p className="font-body text-[12px] font-bold tracking-[0.2em] text-pine">404 — OFF THE MAP</p>
      <h1 className="display-tight mt-4 font-display text-6xl font-bold text-ink md:text-8xl">Lost<br />signal.</h1>
      <p className="mt-4 max-w-md font-body text-[15px] text-gray">That page doesn&apos;t exist. Pick a working path.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="rounded-ctrl bg-ink px-7 py-3.5 font-body text-[13px] font-bold tracking-[0.08em] text-cream hover:bg-pine">GO HOME</Link>
        <Link href="/work" className="rounded-ctrl border border-ink/20 px-7 py-3.5 font-body text-[13px] font-bold tracking-[0.08em] text-ink hover:border-pine">VIEW WORK</Link>
      </div>
    </div>
  );
}
