# Ojo Ezekiel O. — Portfolio (Dark Editorial)

Premium dark-editorial portfolio for **Ojo Ezekiel O., AI Automation & Web Developer**.
Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Lucide.

Identity: bg `#0A0A0A` · surface `#111111` · text `#F4F1EA` · muted `#929292` ·
borders `#292929` · accent `#C8FF3D` (used sparingly).
Type: Space Grotesk (display) + Inter (body). Motion: opacity + ≤16px rise,
300–700ms ease-out, `prefers-reduced-motion` supported, no childish effects.

## Routes

| Route | Page |
|---|---|
| `/` | Hero → 01 About → 02 Services → 03 Selected Work → 04 Case studies → 05 Process → 06 Toolkit → 07 Philosophy → Feedback (empty state) → Contact |
| `/about` | Intro, approach, capabilities |
| `/work` | Index of the four real projects |
| `/work/flowfix` | Plumbing website case study (real screenshot) |
| `/work/voice-agent` | AI voice agent workflow case study (real screenshot) |
| `/work/content-automation` | Social content pipeline case study (real screenshot) |
| `/work/whatsapp-knowledge` | WhatsApp knowledge system case study (real screenshot) |
| `/contact` | Phone, WhatsApp, LinkedIn + WhatsApp-direct form |

## Real project screenshots (REQUIRED)

Drop the four supplied PNGs into `public/images/projects/` with exact names —
see `public/images/projects/README.md`. Slots render until files exist; no
fake mockups or stock images anywhere.

## Live facts (verified, do not change without asking)

- Phone `+234 704 563 4257` (`tel:+2347045634257`)
- WhatsApp `https://wa.me/2347045634257`
- LinkedIn `https://www.linkedin.com/in/ezekiel-ojo-2ba16133/` (`target="_blank" rel="noopener noreferrer"`, no params)
- No email published. No testimonials, metrics, clients or employers invented.
- Contact form opens WhatsApp prefilled (`components/ContactForm.tsx`).

## Run / deploy

```bash
npm install
npm run dev
npm run build   # static export to out/ (Cloudflare Pages ready)
```
