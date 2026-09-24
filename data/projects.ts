export type ProjectCategory = "AI AUTOMATION" | "WEB DEVELOPMENT" | "PRODUCT";

export interface Project {
  slug: string;
  index: string;
  total: string;
  name: string;
  category: string;
  categories: ProjectCategory[];
  year: string;
  description: string;
  workflow?: string[];
  role: string;
  stack: string[];
  href: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "flowcut",
    index: "01",
    total: "03",
    name: "FLOWCUT",
    category: "AI CONTENT AUTOMATION",
    categories: ["AI AUTOMATION"],
    year: "2026",
    description:
      "An automated content pipeline that transforms ideas into structured, generated and publish-ready content.",
    workflow: ["IDEA", "RESEARCH", "SCRIPT", "GENERATE", "FORMAT", "PUBLISH"],
    role: "AI Automation / Workflow Architecture / Development",
    stack: ["n8n", "OpenAI", "Veo", "APIs", "JavaScript"],
    href: "/work/flowcut",
  },
  {
    slug: "finly",
    index: "02",
    total: "03",
    name: "FINLY",
    category: "WEB PRODUCT",
    categories: ["WEB DEVELOPMENT", "PRODUCT"],
    year: "2025",
    description:
      "A modern personal finance web application concept focused on simple information architecture and a clean digital product experience.",
    role: "UI/UX / Frontend Development",
    stack: ["React", "TypeScript", "Supabase", "Figma"],
    href: "/work/finly",
  },
  {
    slug: "content-os",
    index: "03",
    total: "03",
    name: "CONTENT OS",
    category: "AI WORKFLOW SYSTEM",
    categories: ["AI AUTOMATION", "PRODUCT"],
    year: "2026",
    description:
      "A structured system connecting research, ideation, writing, asset generation and publishing.",
    role: "Automation / AI Integration / Development",
    stack: ["n8n", "OpenAI", "Notion", "APIs", "JavaScript"],
    href: "/work/content-os",
  },
];

export const CAPABILITIES = [
  {
    n: "01",
    title: "AI AUTOMATION",
    body: "Intelligent workflows connecting tools, APIs and AI.",
  },
  {
    n: "02",
    title: "WEB DEVELOPMENT",
    body: "Modern websites and web applications.",
  },
  {
    n: "03",
    title: "WORKFLOW ENGINEERING",
    body: "Turning repetitive processes into automated systems.",
  },
  {
    n: "04",
    title: "AI CONTENT SYSTEMS",
    body: "Systems for research, writing, generation and publishing.",
  },
  {
    n: "05",
    title: "API INTEGRATION",
    body: "Connecting different platforms into useful workflows.",
  },
];

export const APPROACH = ["Understand", "Design", "Build", "Refine"];

export const ABOUT_CAPABILITIES = [
  "AI Automation",
  "Web Development",
  "Workflow Engineering",
  "API Integration",
  "AI Content Systems",
  "Digital Experiences",
];

export const TOOLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "n8n",
  "OpenAI",
  "Supabase",
  "Figma",
  "Git",
  "GitHub",
  "Vercel",
  "Notion",
  "REST APIs",
];
