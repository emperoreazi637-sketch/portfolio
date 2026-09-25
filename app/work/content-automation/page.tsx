import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "AI Social Content Automation",
  description: "AI social content automation workflow case study by Ojo Ezekiel O.",
};

export default function ContentAutomationPage() {
  const project = PROJECTS.find((p) => p.slug === "content-automation")!;
  return <CaseStudy project={project} />;
}
