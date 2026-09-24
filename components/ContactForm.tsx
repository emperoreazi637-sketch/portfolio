"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const PROJECT_TYPES = ["Web Development", "AI Automation", "Workflow Integration", "AI Content System", "Other"];

type Status = "idle" | "sending" | "success" | "error";

/**
 * Contact form with client-side validation (name, email, message required).
 *
 * No backend is wired: submitting validates, then resolves through the
 * placeholder `submitInquiry()` below — it does NOT send anything anywhere.
 * The success panel says exactly that. To go live, replace `submitInquiry`
 * with a call to Formspree / Resend / Web3Forms or a Next.js route handler.
 */
async function submitInquiry(_data: Record<string, string>): Promise<void> {
  // TODO: replace with a real form service, e.g.:
  //   const res = await fetch("https://formspree.io/f/YOUR_ID", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });
  //   if (!res.ok) throw new Error("form service error");
  await new Promise((r) => setTimeout(r, 1200));
}

export function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", type: PROJECT_TYPES[0], budget: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  function set(name: string, value: string) {
    setFields((f) => ({ ...f, [name]: value }));
    setErrors((e) => ({ ...e, [name]: "" }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (fields.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) e.email = "Please enter a valid email address.";
    if (fields.message.trim().length < 10) e.message = "Tell me a little more (10+ characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;
    setStatus("sending");
    try {
      await submitInquiry(fields);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const input =
    "w-full rounded-ctrl-sm border bg-cream px-4 py-3.5 font-body text-[15px] text-ink placeholder:text-stone/50 outline-none transition-colors focus:border-pine";

  if (status === "success") {
    return (
      <div className="rounded-ctrl border-2 border-pine bg-pine/[0.05] p-8" role="status">
        <CheckCircle2 className="text-pine" size={30} aria-hidden />
        <h2 className="mt-4 font-display text-2xl font-bold text-ink">Details recorded — demo mode.</h2>
        <p className="mt-2 font-body text-[15px] leading-relaxed text-stone">
          Thanks, {fields.name.split(" ")[0] || "there"}. This form has <strong>no backend connected yet</strong>,
          so nothing was sent anywhere. To reach Ojo right now, please call{" "}
          <strong className="text-ink">+234 704 563 4257</strong> or use LinkedIn on this page.
        </p>
        <button
          type="button"
          onClick={() => { setStatus("idle"); setFields({ name: "", email: "", type: PROJECT_TYPES[0], budget: "", message: "" }); }}
          className="mt-6 min-h-[48px] rounded-ctrl-sm border border-ink/20 px-6 py-3 font-body text-[12px] font-bold tracking-[0.12em] text-ink hover:border-pine"
        >
          WRITE ANOTHER
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Project inquiry form" className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-2 block font-body text-[11px] font-bold tracking-[0.16em] text-ink">NAME *</label>
          <input id="cf-name" name="name" autoComplete="name" value={fields.name} onChange={(e) => set("name", e.target.value)}
            placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-err" : undefined}
            className={`${input} ${errors.name ? "border-red-500" : "border-line"}`} />
          {errors.name && <p id="cf-name-err" role="alert" className="mt-1.5 font-body text-[13px] font-semibold text-red-700">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-2 block font-body text-[11px] font-bold tracking-[0.16em] text-ink">EMAIL *</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" value={fields.email} onChange={(e) => set("email", e.target.value)}
            placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "cf-email-err" : undefined}
            className={`${input} ${errors.email ? "border-red-500" : "border-line"}`} />
          {errors.email && <p id="cf-email-err" role="alert" className="mt-1.5 font-body text-[13px] font-semibold text-red-700">{errors.email}</p>}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="cf-type" className="mb-2 block font-body text-[11px] font-bold tracking-[0.16em] text-ink">PROJECT TYPE</label>
          <select id="cf-type" name="type" value={fields.type} onChange={(e) => set("type", e.target.value)}
            className={`${input} border-line`}>
            {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="cf-budget" className="mb-2 block font-body text-[11px] font-bold tracking-[0.16em] text-ink">BUDGET <span className="text-stone">(OPTIONAL)</span></label>
          <input id="cf-budget" name="budget" value={fields.budget} onChange={(e) => set("budget", e.target.value)}
            placeholder="e.g. $1k – $3k" className={`${input} border-line`} />
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-2 block font-body text-[11px] font-bold tracking-[0.16em] text-ink">MESSAGE *</label>
        <textarea id="cf-message" name="message" rows={6} value={fields.message} onChange={(e) => set("message", e.target.value)}
          placeholder="What are you working on? What should work better?" aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
          className={`${input} resize-y ${errors.message ? "border-red-500" : "border-line"}`} />
        {errors.message && <p id="cf-message-err" role="alert" className="mt-1.5 font-body text-[13px] font-semibold text-red-700">{errors.message}</p>}
      </div>
      {status === "error" && (
        <p role="alert" className="rounded-ctrl-sm border border-red-400 bg-red-50 px-4 py-3 font-body text-sm font-semibold text-red-800">
          Something went wrong. Please try again — or call +234 704 563 4257 directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex min-h-[52px] items-center gap-2 rounded-ctrl bg-gold px-8 py-4 font-body text-[13px] font-bold tracking-[0.12em] text-ink transition hover:bg-goldeep disabled:opacity-60"
      >
        {status === "sending" ? (<><Loader2 size={16} className="animate-spin" aria-hidden /> SENDING…</>) : (<>SEND INQUIRY <ArrowRight size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" /></>)}
      </button>
      <p className="font-body text-[12px] text-stone">Demo mode — no backend connected. For an immediate response, call the number on this page.</p>
    </form>
  );
}
