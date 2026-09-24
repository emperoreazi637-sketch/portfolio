/** Product mockups built in HTML/CSS — no stock imagery, no fabricated metrics. */

export function FlowcutVisual() {
  const steps = ["IDEA", "RESEARCH", "SCRIPT", "GENERATE", "FORMAT", "PUBLISH"];
  return (
    <div
      role="img"
      aria-label="Flowcut automation pipeline visualization from idea to publish"
      className="rounded-ctrl border border-line bg-card p-5 md:p-7"
    >
      <div className="flex items-center justify-between font-body text-[11px] font-bold tracking-[0.18em] text-stone">
        <span>FLOWCUT · PIPELINE</span>
        <span className="flex items-center gap-2 rounded-full bg-pine px-3 py-1 text-cream">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden /> RUNNING
        </span>
      </div>
      {/* Flow path */}
      <div className="mt-5 flex items-center gap-1 overflow-x-auto pb-1" aria-hidden>
        {steps.map((s, i) => (
          <div key={s} className="flex shrink-0 items-center gap-1">
            <span
              className={`rounded-full px-3 py-1.5 font-body text-[10px] font-bold tracking-[0.1em] ${
                i === 0 ? "bg-ink text-cream" : i === steps.length - 1 ? "bg-pine text-cream" : "bg-cream text-ink"
              }`}
            >
              {s}
            </span>
            {i < steps.length - 1 && <span className="px-0.5 font-bold text-goldeep">→</span>}
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={s}
            className={`rounded-ctrl-sm border p-4 ${i === 3 ? "border-goldeep bg-gold/15" : "border-line bg-cream"}`}
          >
            <p className="font-body text-[10px] font-bold tracking-[0.16em] text-stone">STEP_0{i + 1}</p>
            <p className="mt-0.5 font-display text-sm font-bold tracking-[0.08em] text-ink">{s}</p>
            <div className="mt-2.5 h-1.5 w-full rounded-full bg-line" aria-hidden>
              <div className="h-1.5 rounded-full bg-pine" style={{ width: `${100 - i * 12}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-ctrl-sm bg-pine px-4 py-3 font-body text-[11px] font-bold tracking-[0.12em] text-cream">
        <span>QUEUE: 12 ASSETS</span>
        <span className="text-gold">9:16 · CAPTIONS · READY</span>
      </div>
    </div>
  );
}

export function FinlyVisual() {
  return (
    <div
      role="img"
      aria-label="Finly personal finance dashboard concept interface with fictional sample data"
      className="rounded-ctrl border border-line bg-card p-5 md:p-7"
    >
      <div className="flex items-center justify-between">
        <p className="font-display text-xl font-bold text-ink">Finly</p>
        <p className="rounded-full border border-line px-3 py-1 font-body text-[10px] font-bold tracking-[0.16em] text-stone">
          CONCEPT · SAMPLE DATA
        </p>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <div className="rounded-ctrl-sm bg-pine p-4 text-cream">
          <p className="font-body text-[10px] font-bold tracking-[0.16em] text-cream/70">TOTAL BALANCE</p>
          <p className="mt-1 font-display text-2xl font-bold">₦248,500</p>
          <p className="mt-1 font-body text-[11px] font-bold text-gold">▲ Sample figure</p>
        </div>
        <div className="rounded-ctrl-sm bg-cream p-4">
          <p className="font-body text-[10px] font-bold tracking-[0.16em] text-stone">SPENT · OCT</p>
          <p className="mt-1 font-display text-2xl font-bold text-ink">₦96,200</p>
          <div className="mt-2 h-1.5 w-full rounded-full bg-line" aria-hidden>
            <div className="h-1.5 w-2/3 rounded-full bg-ink" />
          </div>
        </div>
        <div className="rounded-ctrl-sm border-2 border-gold bg-gold/10 p-4">
          <p className="font-body text-[10px] font-bold tracking-[0.16em] text-stone">SAVINGS GOAL</p>
          <p className="mt-1 font-display text-2xl font-bold text-ink">68%</p>
          <div className="mt-2 h-1.5 w-full rounded-full bg-line" aria-hidden>
            <div className="h-1.5 w-[68%] rounded-full bg-goldeep" />
          </div>
        </div>
      </div>
      <div className="mt-3 rounded-ctrl-sm border border-line p-4">
        {[
          ["Food & Groceries", "₦32,400", "w-3/5"],
          ["Transport", "₦18,900", "w-2/5"],
          ["Subscriptions", "₦9,600", "w-1/4"],
        ].map(([label, amt, w]) => (
          <div key={label} className="flex items-center gap-4 border-b border-line py-2.5 last:border-0">
            <p className="w-36 shrink-0 font-body text-xs font-semibold text-ink">{label}</p>
            <div className="h-1.5 flex-1 rounded-full bg-line" aria-hidden>
              <div className={`h-1.5 rounded-full bg-pine ${w}`} />
            </div>
            <p className="font-body text-xs text-stone">{amt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContentOsVisual() {
  const mods = [
    ["RESEARCH", "Sources → briefs"],
    ["IDEATION", "Angles → drafts"],
    ["WRITING", "Drafts → edits"],
    ["ASSETS", "Text → media"],
    ["ORGANIZE", "Files → library"],
    ["PUBLISH", "Ready → shipped"],
  ];
  return (
    <div
      role="img"
      aria-label="Content OS modular workflow visualization with six connected modules"
      className="rounded-ctrl border border-line bg-card p-5 md:p-7"
    >
      <div className="flex items-center justify-between font-body text-[11px] font-bold tracking-[0.18em] text-stone">
        <span>CONTENT_OS · v2.1</span>
        <span className="rounded-full bg-gold px-3 py-1 text-ink">6 MODULES</span>
      </div>
      <div className="mt-5 space-y-2">
        {mods.map(([t, d], i) => (
          <div key={t} className="flex items-center gap-4 rounded-ctrl-sm border border-line bg-cream px-4 py-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pine font-body text-[11px] font-bold text-gold">
              {i + 1}
            </span>
            <div className="flex-1">
              <p className="font-display text-sm font-bold tracking-[0.1em] text-ink">{t}</p>
              <p className="font-body text-[11px] text-stone">{d}</p>
            </div>
            <span className="rounded-full border border-line px-2.5 py-1 font-body text-[10px] font-bold tracking-[0.1em] text-stone">
              SYNCED
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Abstract typographic identity composition used in place of a portrait. */
export function IdentityVisual() {
  return (
    <div
      role="img"
      aria-label="Typographic identity composition: Ojo Ezekiel, idea to system to result"
      className="on-dark relative overflow-hidden rounded-ctrl bg-pine p-8 md:p-10"
    >
      <div aria-hidden className="animate-float-slow absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gold/20" />
      <div aria-hidden className="absolute -bottom-12 -left-12 h-52 w-52 rounded-full border-[10px] border-gold/25" />
      <p className="font-body text-[11px] font-bold tracking-[0.24em] text-gold">OJO EZEKIEL O.</p>
      <p className="display-tight mt-3 font-display text-5xl font-bold text-cream md:text-6xl">
        IDEA
        <br />
        <span className="text-gold">→ SYSTEM</span>
        <br />→ RESULT
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {["AI", "AUTOMATION", "WEB", "SYSTEMS"].map((t) => (
          <span key={t} className="rounded-full border border-cream/25 px-3 py-1 font-body text-[11px] font-bold tracking-[0.14em] text-cream/85">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
