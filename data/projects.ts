export interface Project {
  slug: string;
  index: string;
  total: string;
  name: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
  imageAlt: string;
  architecture: string[];
  problem: string;
  process: string[];
  solution: string;
  outcome: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "flowfix",
    index: "01",
    total: "04",
    name: "FLOWFIX",
    category: "WEB DEVELOPMENT",
    year: "2026",
    description:
      "A professional plumbing services website designed to communicate trust, services and clear conversion paths through a structured responsive experience.",
    tags: ["Web Design", "Responsive Development", "UI/UX", "Conversion-focused Layout"],
    href: "/work/flowfix",
    image: "/images/projects/flowfix-website.jpg",
    imageAlt:
      "FlowFix Plumbing Services website screenshot showing the hero section with navigation, headline, call-to-action buttons and plumbing service cards",
    architecture: ["SERVICES", "TRUST SIGNALS", "QUOTE CTA", "EMERGENCY CONTACT"],
    problem:
      "The website needed to clearly communicate plumbing services, trust and contact options.",
    process: [
      "Audited the service offering and the actions a visitor should take.",
      "Structured the experience around clear navigation and service presentation.",
      "Placed strong calls to action and emergency contact where they convert.",
      "Built a fully responsive layout that holds up on small screens.",
    ],
    solution:
      "A clean professional plumbing services website with clear service categories, emergency contact information and quote CTA.",
    outcome:
      "A completed responsive website experience designed around clarity, trust and conversion.",
  },
  {
    slug: "voice-agent",
    index: "02",
    total: "04",
    name: "AI CUSTOMER SUPPORT VOICE AGENT",
    category: "AI AUTOMATION",
    year: "2026",
    description:
      "An AI-powered customer support voice workflow connecting an AI agent with voice interaction, reasoning, email, calendar availability and knowledge retrieval.",
    tags: ["n8n", "OpenAI", "ElevenLabs", "Google Calendar", "Gmail", "Knowledge Base", "Webhooks"],
    href: "/work/voice-agent",
    image: "/images/projects/voice-agent-workflow.png",
    imageAlt:
      "n8n workflow screenshot of the AI customer support voice agent showing webhook nodes, an AI agent with GPT-5 model, reasoning tool, Gmail, calendar and knowledge base nodes",
    architecture: ["USER REQUEST", "WEBHOOK", "AI AGENT", "GPT-5", "REASONING", "KNOWLEDGE / TOOLS", "CALENDAR / EMAIL", "ELEVENLABS", "RESPONSE"],
    problem:
      "Customer support needed a voice-driven workflow that could reason, check real availability and act — not just answer from a script.",
    process: [
      "Mapped the support journey: request in, verified answer out.",
      "Gave the agent a reasoning model plus grounded tools instead of raw chat.",
      "Connected calendar availability, appointment creation, Gmail and a knowledge base.",
      "Routed voice in and out through webhooks with ElevenLabs speech.",
    ],
    solution:
      "An orchestrated voice agent: webhook receives the request, the AI agent reasons with GPT-5, pulls knowledge and availability, acts through Gmail and Calendar, and responds by voice.",
    outcome:
      "A delivered voice automation system where every capability traces to a visible workflow node.",
  },
  {
    slug: "content-automation",
    index: "03",
    total: "04",
    name: "AI SOCIAL CONTENT AUTOMATION",
    category: "AI AUTOMATION",
    year: "2026",
    description:
      "An automated content pipeline that generates social content, creates visual assets, stores content data and distributes posts across social platforms.",
    tags: ["n8n", "OpenAI", "Google Sheets", "Image Generation", "LinkedIn", "X", "Facebook"],
    href: "/work/content-automation",
    image: "/images/projects/content-automation-workflow.png",
    imageAlt:
      "n8n workflow screenshot of the social content automation showing schedule trigger, AI content generation, Google Sheets storage, image generation and LinkedIn, X and Facebook distribution nodes",
    architecture: ["SCHEDULE", "CONTENT GENERATION", "IMAGE GENERATION", "DATA STORAGE", "SOCIAL DISTRIBUTION"],
    problem:
      "Publishing consistently across platforms meant repeating the same manual loop: write, design, store, post — every time.",
    process: [
      "Broke publishing into stages: trigger, generate, store, distribute.",
      "Separated text generation from image generation so each can improve independently.",
      "Made Google Sheets the source of truth for everything produced.",
      "Fanned stored content out to LinkedIn, X and Facebook from one flow.",
    ],
    solution:
      "A scheduled pipeline that generates content and visuals, records every asset, and distributes across three social platforms automatically.",
    outcome:
      "A delivered distribution system with a full content record — no invented publishing volumes or engagement claims.",
  },
  {
    slug: "whatsapp-knowledge",
    index: "04",
    total: "04",
    name: "WHATSAPP KNOWLEDGE SYSTEM",
    category: "AI AUTOMATION",
    year: "2026",
    description:
      "A workflow for receiving information through WhatsApp, processing documents and images, extracting relevant information, structuring the data and returning intelligent responses.",
    tags: ["n8n", "WhatsApp", "OpenAI", "Document Processing", "Knowledge Base", "APIs", "Webhooks"],
    href: "/work/whatsapp-knowledge",
    image: "/images/projects/whatsapp-knowledge-workflow.png",
    imageAlt:
      "Large n8n workflow screenshot of the WhatsApp knowledge system showing WhatsApp trigger, routing, document and image processing, OpenAI extraction, knowledge base and response nodes",
    architecture: ["WHATSAPP INPUT", "ROUTING", "DOCUMENT / IMAGE PROCESSING", "AI EXTRACTION", "KNOWLEDGE SYSTEM", "RESPONSE"],
    problem:
      "Useful information arrives over WhatsApp as documents and images — unstructured, unsearchable and hard to act on.",
    process: [
      "Separated the intake problem (many message types) from the intelligence problem (what does it mean).",
      "Built routing that sends documents, images and text down the right processing path.",
      "Added download and extraction stages so files become structured data.",
      "Grounded responses in a knowledge system instead of free-form generation.",
    ],
    solution:
      "A technical workflow: WhatsApp input is routed by type, documents and images are downloaded and processed, OpenAI extracts structured information, and answers return through WhatsApp.",
    outcome:
      "A delivered document-intelligence workflow scoped to what the visible system supports — no enterprise-deployment claims.",
  },
];

export const SERVICES = [
  {
    n: "01",
    title: "AI AUTOMATION",
    body: "Designing intelligent workflows that connect AI models, APIs, tools and business processes.",
  },
  {
    n: "02",
    title: "WEB DEVELOPMENT",
    body: "Building modern responsive websites and web experiences with strong UX and clean architecture.",
  },
  {
    n: "03",
    title: "WORKFLOW ENGINEERING",
    body: "Mapping manual processes and turning them into reliable automated systems.",
  },
  {
    n: "04",
    title: "AI CONTENT SYSTEMS",
    body: "Building content workflows for research, writing, asset generation, formatting and publishing.",
  },
  {
    n: "05",
    title: "API INTEGRATION",
    body: "Connecting platforms, services and APIs into useful automated systems.",
  },
  {
    n: "06",
    title: "DIGITAL EXPERIENCES",
    body: "Designing practical interfaces and digital experiences around real user needs.",
  },
];

export const PROCESS_STEPS = [
  { n: "01", title: "DISCOVER", body: "Understand the problem, users and desired outcome." },
  { n: "02", title: "MAP", body: "Break the workflow or experience into clear systems and steps." },
  { n: "03", title: "DESIGN", body: "Create the structure, interface and interaction model." },
  { n: "04", title: "BUILD", body: "Develop the website, automation or integrated system." },
  { n: "05", title: "REFINE", body: "Test, improve and simplify." },
  { n: "06", title: "DELIVER", body: "Ship a polished and usable final system." },
];

export const TOOLKIT = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "n8n",
  "OpenAI",
  "Supabase",
  "Figma",
  "GitHub",
  "Vercel",
  "Notion",
  "REST APIs",
  "Google Workspace",
  "ElevenLabs",
  "WhatsApp",
];

export const PHILOSOPHY = [
  { n: "01", title: "CLARITY", body: "Complex systems should become easier to understand." },
  { n: "02", title: "AUTOMATION", body: "Remove repetitive work where systems can handle it reliably." },
  { n: "03", title: "SIMPLICITY", body: "Technology should solve problems without creating unnecessary complexity." },
  { n: "04", title: "EXPERIENCE", body: "A technically strong system still needs to be intuitive and usable." },
];
