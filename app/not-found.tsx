import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-24 pt-[160px] md:px-10">
      <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-1.5 font-body text-[11px] font-bold tracking-[0.2em] text-pine">
        404 — OFF THE MAP
      </p>
      <h1 className="display-tight mt-5 font-display text-6xl font-bold text-ink md:text-8xl">Lost<br />signal.</h1>
      <p className="mt-4 max-w-md font-body text-[15px] text-stone">That page doesn&apos;t exist. The system reroutes — pick a working path.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/" className="rounded-ctrl bg-gold px-7 py-3.5 font-body text-[13px] font-bold tracking-[0.1em] text-ink hover:bg-goldeep">GO HOME</Link>
        <Link href="/work" className="rounded-ctrl border border-ink/20 px-7 py-3.5 font-body text-[13px] font-bold tracking-[0.1em] text-ink hover:border-pine">VIEW WORK</Link>
      </div>
    </div>
  );
}
