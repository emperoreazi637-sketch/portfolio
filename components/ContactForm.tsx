"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";

const PROJECTS = ["Web Development", "AI Automation", "Workflow Integration", "AI Content System", "Other"];

type Status = "idle" | "sending" | "success" | "error";

/**
 * WhatsApp-direct inquiry form.
 *
 * There is no server involved: on submit the form validates, builds a
 * prefilled WhatsApp message and opens it in a new tab/app via wa.me.
 * The visitor sends the message themselves from their own WhatsApp —
 * nothing is faked, and nothing can silently fail server-side.
 */
function buildWhatsAppUrl(fields: Record<string, string>): string {
  const lines = [
    "New project inquiry (ojoezekiel.dev)",
    "",
    `Name: ${fields.name.trim()}`,
    `Email: ${fields.email.trim()}`,
    `Project: ${fields.project}`,
    "",
    "Message:",
    fields.message.trim(),
  ];
  return `${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", project: PROJECTS[0], message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [waUrl, setWaUrl] = useState("");

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

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;
    setStatus("sending");
    try {
      const url = buildWhatsAppUrl(fields);
      setWaUrl(url);
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const input =
    "w-full rounded-ctrl-sm border bg-card px-4 py-3.5 font-body text-[15px] text-ink placeholder:text-gray/60 outline-none transition-colors focus:border-pine";

  if (status === "success") {
    return (
      <div className="rounded-ctrl border border-line bg-card p-7" role="status">
        <CheckCircle2 className="text-pine" size={28} aria-hidden />
        <h2 className="mt-3 font-display text-xl font-bold text-ink">Opening WhatsApp…</h2>
        <p className="mt-2 font-body text-[15px] leading-relaxed text-gray">
          Your message was prepared{fields.name ? `, ${fields.name.split(" ")[0]}` : ""} — just press send in
          WhatsApp to deliver it. Nothing was sent yet; you stay in control.
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-[52px] items-center gap-2 rounded-ctrl bg-pine px-7 py-3.5 font-body text-[13px] font-bold tracking-[0.08em] text-cream transition-colors hover:bg-pinedeep"
        >
          <MessageCircle size={16} aria-hidden /> OPEN WHATSAPP AGAIN
        </a>
        <div>
          <button
            type="button"
            onClick={() => { setStatus("idle"); setWaUrl(""); setFields({ name: "", email: "", project: PROJECTS[0], message: "" }); }}
            className="mt-3 inline-flex min-h-[44px] items-center font-body text-[13px] font-bold tracking-[0.08em] text-gray hover:text-ink"
          >
            WRITE ANOTHER
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Contact form" className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-2 block font-body text-[11px] font-bold tracking-[0.14em] text-ink">NAME *</label>
          <input id="cf-name" name="name" autoComplete="name" value={fields.name} onChange={(e) => set("name", e.target.value)}
            placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-err" : undefined}
            className={`${input} ${errors.name ? "border-red-500" : "border-line"}`} />
          {errors.name && <p id="cf-name-err" role="alert" className="mt-1.5 font-body text-[13px] font-semibold text-red-700">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-2 block font-body text-[11px] font-bold tracking-[0.14em] text-ink">EMAIL *</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" value={fields.email} onChange={(e) => set("email", e.target.value)}
            placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "cf-email-err" : undefined}
            className={`${input} ${errors.email ? "border-red-500" : "border-line"}`} />
          {errors.email && <p id="cf-email-err" role="alert" className="mt-1.5 font-body text-[13px] font-semibold text-red-700">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="cf-project" className="mb-2 block font-body text-[11px] font-bold tracking-[0.14em] text-ink">PROJECT</label>
        <select id="cf-project" name="project" value={fields.project} onChange={(e) => set("project", e.target.value)} className={`${input} border-line`}>
          {PROJECTS.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-2 block font-body text-[11px] font-bold tracking-[0.14em] text-ink">MESSAGE *</label>
        <textarea id="cf-message" name="message" rows={5} value={fields.message} onChange={(e) => set("message", e.target.value)}
          placeholder="What do you want to build?" aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
          className={`${input} resize-y ${errors.message ? "border-red-500" : "border-line"}`} />
        {errors.message && <p id="cf-message-err" role="alert" className="mt-1.5 font-body text-[13px] font-semibold text-red-700">{errors.message}</p>}
      </div>
      {status === "error" && (
        <p role="alert" className="rounded-ctrl-sm border border-red-400 bg-red-50 px-4 py-3 font-body text-sm font-semibold text-red-800">
          WhatsApp didn&apos;t open. Please message +234 704 563 4257 directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex min-h-[52px] items-center gap-2 rounded-ctrl bg-pine px-8 py-4 font-body text-[13px] font-bold tracking-[0.08em] text-cream transition-colors hover:bg-pinedeep disabled:opacity-60"
      >
        {status === "sending" ? (<><Loader2 size={16} className="animate-spin" aria-hidden /> PREPARING…</>) : (<><MessageCircle size={16} aria-hidden /> SEND VIA WHATSAPP <ArrowRight size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" /></>)}
      </button>
      <p className="font-body text-[12px] text-gray">Opens WhatsApp with your message prefilled — you press send.</p>
    </form>
  );
}
