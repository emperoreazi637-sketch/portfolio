"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";

const PROJECTS = ["Web Development", "AI Automation", "Workflow Integration", "AI Content System", "Other"];

type Status = "idle" | "sending" | "success" | "error";

/**
 * WhatsApp-direct inquiry form (Name, Email, Project, Message).
 * No server: validates, builds a prefilled wa.me message, opens WhatsApp.
 * The visitor presses send themselves — nothing is faked.
 */
function buildWhatsAppUrl(fields: Record<string, string>): string {
  const lines = [
    "New project inquiry (portfolio)",
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
    "w-full border bg-ink px-4 py-3.5 font-body text-[15px] text-cream placeholder:text-muted/60 outline-none transition-colors focus:border-lime";

  if (status === "success") {
    return (
      <div className="border border-line bg-surface p-7" role="status">
        <CheckCircle2 className="text-lime" size={28} aria-hidden />
        <h2 className="mt-3 font-display text-xl font-bold text-cream">Opening WhatsApp…</h2>
        <p className="mt-2 font-body text-[15px] leading-relaxed text-muted">
          Your message was prepared — just press send in WhatsApp to deliver it. Nothing was sent yet;
          you stay in control.
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-[48px] items-center gap-2 bg-lime px-6 py-3 font-body text-[13px] font-bold tracking-[0.1em] text-ink transition hover:brightness-110"
        >
          <MessageCircle size={16} aria-hidden /> OPEN WHATSAPP AGAIN
        </a>
        <div>
          <button
            type="button"
            onClick={() => { setStatus("idle"); setWaUrl(""); setFields({ name: "", email: "", project: PROJECTS[0], message: "" }); }}
            className="mt-3 inline-flex min-h-[44px] items-center font-body text-[13px] font-bold tracking-[0.08em] text-muted hover:text-cream"
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
          <label htmlFor="cf-name" className="mb-2 block font-body text-[11px] font-bold tracking-[0.16em] text-cream/80">NAME *</label>
          <input id="cf-name" name="name" autoComplete="name" value={fields.name} onChange={(e) => set("name", e.target.value)}
            placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-err" : undefined}
            className={`${input} ${errors.name ? "border-red-400" : "border-line"}`} />
          {errors.name && <p id="cf-name-err" role="alert" className="mt-1.5 font-body text-[13px] text-red-300">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-2 block font-body text-[11px] font-bold tracking-[0.16em] text-cream/80">EMAIL *</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" value={fields.email} onChange={(e) => set("email", e.target.value)}
            placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "cf-email-err" : undefined}
            className={`${input} ${errors.email ? "border-red-400" : "border-line"}`} />
          {errors.email && <p id="cf-email-err" role="alert" className="mt-1.5 font-body text-[13px] text-red-300">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="cf-project" className="mb-2 block font-body text-[11px] font-bold tracking-[0.16em] text-cream/80">PROJECT</label>
        <select id="cf-project" name="project" value={fields.project} onChange={(e) => set("project", e.target.value)} className={`${input} border-line`}>
          {PROJECTS.map((t) => <option key={t} value={t} className="bg-ink">{t}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-2 block font-body text-[11px] font-bold tracking-[0.16em] text-cream/80">MESSAGE *</label>
        <textarea id="cf-message" name="message" rows={5} value={fields.message} onChange={(e) => set("message", e.target.value)}
          placeholder="What do you want to build?" aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
          className={`${input} resize-y ${errors.message ? "border-red-400" : "border-line"}`} />
        {errors.message && <p id="cf-message-err" role="alert" className="mt-1.5 font-body text-[13px] text-red-300">{errors.message}</p>}
      </div>
      {status === "error" && (
        <p role="alert" className="border border-red-400/40 bg-red-400/10 px-4 py-3 font-body text-sm text-red-200">
          WhatsApp didn&apos;t open. Please message +234 704 563 4257 directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex min-h-[52px] items-center gap-2 bg-lime px-8 py-4 font-body text-[13px] font-bold tracking-[0.1em] text-ink transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "sending" ? (<><Loader2 size={16} className="animate-spin" aria-hidden /> PREPARING…</>) : (<><MessageCircle size={16} aria-hidden /> SEND VIA WHATSAPP <ArrowRight size={16} aria-hidden className="transition-transform duration-200 group-hover:translate-x-1" /></>)}
      </button>
      <p className="font-body text-[12px] text-muted">Opens WhatsApp with your message prefilled — you press send.</p>
    </form>
  );
}
