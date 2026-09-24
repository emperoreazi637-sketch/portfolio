/** Minimal product mockups in HTML/CSS — neutral surfaces, no fabricated metrics. */

const shell = "rounded-ctrl border border-line bg-card p-5 md:p-7";
const head = "flex items-center justify-between font-body text-[11px] font-bold tracking-[0.16em] text-gray";

export function FlowcutVisual() {
  const steps = ["IDEA", "RESEARCH", "SCRIPT", "GENERATE", "FORMAT", "PUBLISH"];
  return (
    <div role="img" aria-label="Flowcut automation pipeline from idea to publish" className={shell}>
      <div className={head}>
        <span>FLOWCUT · PIPELINE</span>
        <span className="rounded-full bg-pine px-3 py-1 text-cream">RUNNING</span>
      </div>
      <div className="mt-5 space-y-2">
        {steps.map((s, i) => (
          <div key={s}>
            <div className="flex items-center gap-3 rounded-ctrl-sm bg-paper px-4 py-3">
              <span className="font-body text-[11px] font-bold text-golddeep">0{i + 1}</span>
              <span className="flex-1 font-display text-sm font-bold tracking-[0.1em] text-ink">{s}</span>
              <span className="h-1.5 w-16 overflow-hidden rounded-full bg-line" aria-hidden>
                <span className="block h-1.5 rounded-full bg-pine" style={{ width: `${100 - i * 12}%` }} />
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-0.5" aria-hidden><span className="block h-3 w-[2px] bg-line" /></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function FinlyVisual() {
  return (
    <div role="img" aria-label="Finly personal finance concept interface with fictional sample data" className={shell}>
      <div className={head}>
        <span className="font-display text-base font-bold tracking-normal text-ink">Finly</span>
        <span>CONCEPT · SAMPLE DATA</span>
      </div>
      <div className="mt-5 rounded-ctrl-sm bg-pine p-5 text-cream">
        <p className="font-body text-[10px] font-bold tracking-[0.16em] text-cream/60">TOTAL BALANCE</p>
        <p className="mt-1 font-display text-3xl font-bold">₦248,500</p>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="rounded-ctrl-sm bg-paper p-4">
          <p className="font-body text-[10px] font-bold tracking-[0.16em] text-gray">SPENT · OCT</p>
          <p className="mt-1 font-display text-xl font-bold text-ink">₦96,200</p>
        </div>
        <div className="rounded-ctrl-sm border border-golddeep/50 bg-gold/10 p-4">
          <p className="font-body text-[10px] font-bold tracking-[0.16em] text-gray">SAVINGS GOAL</p>
          <p className="mt-1 font-display text-xl font-bold text-ink">68%</p>
          <div className="mt-2 h-1.5 rounded-full bg-line" aria-hidden>
            <div className="h-1.5 w-[68%] rounded-full bg-golddeep" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContentOsVisual() {
  const mods = ["RESEARCH", "IDEATION", "WRITING", "ASSETS", "ORGANIZE", "PUBLISH"];
  return (
    <div role="img" aria-label="Content OS six-module workflow" className={shell}>
      <div className={head}>
        <span>CONTENT_OS</span>
        <span>6 MODULES</span>
      </div>
      <ol className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-3">
        {mods.map((m, i) => (
          <li key={m} className={`rounded-ctrl-sm border p-4 ${i === 0 ? "border-pine bg-pine text-cream" : "border-line bg-paper"}`}>
            <p className={`font-body text-[10px] font-bold tracking-[0.16em] ${i === 0 ? "text-gold" : "text-gray"}`}>0{i + 1}</p>
            <p className={`mt-0.5 font-display text-sm font-bold tracking-[0.08em] ${i === 0 ? "text-cream" : "text-ink"}`}>{m}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
