# Project screenshots — REQUIRED

Drop the four real project screenshots supplied by Ojo into this folder
with these **exact filenames** (lowercase, hyphens, `.png`):

| File | Content |
|---|---|
| `flowfix-website.png` | FlowFix Plumbing Services website screenshot (hero, nav, service cards, CTA) |
| `voice-agent-workflow.png` | n8n voice agent workflow (webhook, AI agent, GPT-5, Gmail, Calendar, ElevenLabs) |
| `content-automation-workflow.png` | n8n content pipeline (schedule trigger, AI generation, Sheets, LinkedIn/X/Facebook) |
| `whatsapp-knowledge-workflow.png` | Large n8n WhatsApp knowledge workflow |

How it works:

- The site references these exact paths. Once the files are here, every
  project visual appears with **zero code changes**.
- Until a file exists, that slot renders a clearly-marked placeholder panel
  (see `components/ProjectImage.tsx`) — never a fake mockup or stock image.
- Keep original aspect ratios; the layout never distorts images.
- After adding files: `npm run build` and redeploy.

Do NOT commit AI-generated or stock substitute screenshots here.
