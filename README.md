# Ojo Ezekiel O. — Portfolio

Premium light-editorial portfolio for **Ojo Ezekiel O., AI Automation & Web Developer**.
Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

Design system: cream `#F7F5EF` · pine `#173F2B` · gold `#F4B400` · ink `#151515`.
Type: Space Grotesk (display) + Inter (body) via `next/font/google`.

## Routes

| Route | Page |
|---|---|
| `/` | Long-form home: hero system, trust strip, services, featured work, process, about, capabilities, journey, engagement, principles, standards, insights, FAQ, final CTA |
| `/about` | Introduction, philosophy, what I build, capabilities, journey |
| `/work` | Portfolio index — problem → process → solution → result storytelling |
| `/work/flowcut` | Case study — AI content automation (interactive workflow) |
| `/work/finly` | Case study — finance product concept (fictional sample data) |
| `/work/content-os` | Case study — modular AI content system |
| `/insights` | Notes in progress (honest “coming soon” cards, no fake articles) |
| `/contact` | Phone + LinkedIn + inquiry form |

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm start
```

## Before launch — replace placeholders

1. **LinkedIn URL** — `data/site.ts` → `SITE.linkedin`. The brief requires the exact
   profile URL, which was not supplied — it currently points at
   `https://www.linkedin.com/in/your-profile` and is marked TODO in code.
2. **Canonical domain** — `data/site.ts` → `SITE.url` (used for metadata/canonical URLs).

Phone (`+234 704 563 4257`, `tel:+2347045634257`) is live in the nav, contact page and footer.
No email address is published anywhere on the site, per the brief.

## Contact form → backend

`components/ContactForm.tsx` validates client-side (name, email, message required;
loading / error / honest “demo mode” success states). It does **not** send anything —
the success panel says so and points visitors to the phone number.

Connect a service by replacing `submitInquiry`, e.g.:

```ts
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});
if (!res.ok) throw new Error("form service error");
```

Alternatives: Resend, Web3Forms, or a Next.js route handler.
