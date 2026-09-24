# Ojo Ezekiel O. — Portfolio (Minimal)

Minimal, premium portfolio for **Ojo Ezekiel O., AI Automation & Web Developer**.
Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Lucide.

Palette: paper `#F7F6F2` · ink `#111111` · gray `#686868` · pine `#123C29` · gold `#F2B705`.
Type: Space Grotesk (display) + Inter (body).

## Routes

| Route | Page |
|---|---|
| `/` | Hero → Selected Work → What I Build → About → dark CTA |
| `/about` | Intro, approach, capabilities, tools |
| `/work` | Problem → process → solution → outcome per project |
| `/work/flowcut` · `/work/finly` · `/work/content-os` | Case studies |
| `/contact` | Phone, WhatsApp, LinkedIn + minimal form |

## Run

```bash
npm install
npm run dev
npm run build   # static export to out/ (Cloudflare Pages ready)
```

## Live facts (verified, do not change without asking)

- Phone: `+234 704 563 4257` (`tel:+2347045634257`)
- WhatsApp: `https://wa.me/2347045634257` (cards, footer, floating button, final CTA)
- LinkedIn: `https://www.linkedin.com/in/ezekiel-ojo-2ba16133/` (always `target="_blank" rel="noopener noreferrer"`, no params)
- Canonical domain placeholder: `data/site.ts` → `SITE.url`

## Contact form

`components/ContactForm.tsx` — Name / Email / Project / Message, validated,
honest demo-mode success state. Connect `submitInquiry()` to Formspree/Resend/Web3Forms to go live.
