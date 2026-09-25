import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "WhatsApp Knowledge System",
  description: "WhatsApp knowledge system workflow case study by Ojo Ezekiel O.",
};

export default function WhatsappKnowledgePage() {
  const project = PROJECTS.find((p) => p.slug === "whatsapp-knowledge")!;
  return <CaseStudy project={project} />;
}
