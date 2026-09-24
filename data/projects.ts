import {
  Bot,
  Code2,
  GitBranch,
  Newspaper,
  Plug,
  Package,
  type LucideIcon,
} from "lucide-react";

export type ProjectCategory = "AI AUTOMATION" | "WEB DEVELOPMENT" | "PRODUCT";

export interface Project {
  slug: string;
  index: string;
  total: string;
  name: string;
  category: string;
  categories: ProjectCategory[];
  year: string;
  tagline: string;
  description: string;
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
    tagline: "From one idea to a complete content production workflow.",
    description:
      "An automated short-form content pipeline that turns an idea into structured, generated and publish-ready content.",
    role: "AI Automation / Workflow Architecture / Development",
    stack: ["n8n", "OpenAI", "Veo", "APIs", "JavaScript"],
    href: "/work/flowcut",
  },
  {
    slug: "finly",
    index: "02",
    total: "03",
    name: "FINLY",
    category: "WEB PRODUCT / DIGITAL EXPERIENCE",
    categories: ["WEB DEVELOPMENT", "PRODUCT"],
    year: "2025",
    tagline: "A simpler way to understand personal finances.",
    description:
      "A modern personal finance web application concept focused on clear information architecture, useful dashboards and a clean product experience.",
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
    tagline: "A modular AI system for content production.",
    description:
      "A structured content operating system connecting research, ideation, writing, asset generation and publishing.",
    role: "Automation / AI Integration / Development",
    stack: ["n8n", "OpenAI", "Notion", "APIs", "JavaScript"],
    href: "/work/content-os",
  },
];

export interface Service {
  n: string;
  title: string;
  body: string;
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  {
    n: "01",
    title: "AI AUTOMATION",
    body: "Design automated workflows that connect tools, APIs and AI models to remove repetitive manual work.",
    icon: Bot,
  },
  {
    n: "02",
    title: "WEB DEVELOPMENT",
    body: "Build modern, responsive websites and web applications with strong UX and maintainable code.",
    icon: Code2,
  },
  {
    n: "03",
    title: "WORKFLOW ENGINEERING",
    body: "Turn messy manual processes into structured automated systems.",
    icon: GitBranch,
  },
  {
    n: "04",
    title: "AI CONTENT SYSTEMS",
    body: "Build systems for research, ideation, writing, content generation, organization and publishing.",
    icon: Newspaper,
  },
  {
    n: "05",
    title: "API INTEGRATION",
    body: "Connect services and platforms into one reliable workflow.",
    icon: Plug,
  },
  {
    n: "06",
    title: "DIGITAL PRODUCTS",
    body: "Design and develop useful interfaces and product experiences from idea to implementation.",
    icon: Package,
  },
];

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "DISCOVER",
    body: "Understand the problem, workflow or product idea.",
  },
  {
    n: "02",
    title: "DESIGN",
    body: "Map the experience, architecture and automation logic.",
  },
  {
    n: "03",
    title: "BUILD",
    body: "Develop the website, workflow, integrations and interfaces.",
  },
  {
    n: "04",
    title: "REFINE",
    body: "Test, improve, simplify and prepare the final system.",
  },
];

export const CAPABILITY_GROUPS = [
  {
    title: "AUTOMATION",
    items: ["n8n", "Workflow Architecture", "API Integration", "Automation Design"],
  },
  {
    title: "AI",
    items: ["OpenAI", "AI APIs", "Prompt Engineering", "AI Content Systems"],
  },
  {
    title: "DEVELOPMENT",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "DESIGN",
    items: ["Figma", "UI/UX", "Prototyping", "Motion"],
  },
  {
    title: "TOOLS",
    items: ["Git", "GitHub", "Vercel", "Notion", "REST APIs"],
  },
];

export const JOURNEY = [
  {
    title: "AI AUTOMATION",
    body: "Building intelligent workflows and connected systems.",
  },
  {
    title: "WEB DEVELOPMENT",
    body: "Creating modern websites and web applications.",
  },
  {
    title: "DIGITAL PRODUCTS",
    body: "Exploring interfaces, product thinking and user experience.",
  },
  {
    title: "CONTINUOUS BUILDING",
    body: "Learning through real projects and experimentation.",
  },
];

export const ENGAGEMENTS = [
  {
    title: "AUTOMATION BUILD",
    body: "For businesses that want a specific workflow automated.",
    points: ["Workflow mapping", "AI + API integration", "Testing & handover"],
  },
  {
    title: "WEB PROJECT",
    body: "For websites, landing pages and web applications.",
    points: ["Design & development", "Responsive & performant", "Launch-ready delivery"],
  },
  {
    title: "SYSTEM BUILD",
    body: "For larger projects combining automation, AI, APIs and web experiences.",
    points: ["End-to-end architecture", "Connected workflows", "Product experience"],
  },
];

export const PRINCIPLES = [
  ["CLARITY", "Complex systems should be easy to understand."],
  ["AUTOMATION", "Repetitive work should not consume unnecessary human time."],
  ["EXPERIENCE", "A technically powerful system still needs to be easy to use."],
  ["SIMPLICITY", "Good technology should remove complexity, not create more of it."],
];

export const STANDARDS = [
  "Clear communication",
  "Thoughtful architecture",
  "Responsive interfaces",
  "Maintainable systems",
  "Practical automation",
  "Continuous refinement",
];

export const INSIGHTS = [
  {
    n: "01",
    title: "How AI Automation Changes Repetitive Work",
    body: "Why the real win isn't speed — it's removing handoffs between tools, people and steps.",
  },
  {
    n: "02",
    title: "Designing Better n8n Workflows",
    body: "Structure, naming and error paths: the unglamorous decisions that keep automations alive.",
  },
  {
    n: "03",
    title: "What Makes an AI Workflow Actually Useful?",
    body: "A practical filter — defined inputs, defined outputs, and a human checkpoint where it matters.",
  },
];

export const FAQS = [
  {
    q: "What do you build?",
    a: "AI automation systems, websites, web applications and connected digital workflows.",
  },
  {
    q: "Can you connect different tools together?",
    a: "Yes. Workflows can connect APIs, AI services, databases, productivity tools and other platforms.",
  },
  {
    q: "Do you build custom websites?",
    a: "Yes. Websites can be designed and developed around the project's actual goals rather than a generic template.",
  },
  {
    q: "Can you automate an existing workflow?",
    a: "Yes. Existing manual processes can be mapped and evaluated for automation opportunities.",
  },
  {
    q: "How do we start?",
    a: "Use the contact page to describe the project, problem or idea.",
  },
];

export const TOOL_STACK = [
  "n8n",
  "OpenAI",
  "Next.js",
  "React",
  "TypeScript",
  "APIs",
  "Supabase",
  "Figma",
];
