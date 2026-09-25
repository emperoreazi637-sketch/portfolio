import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "FlowFix — Professional Plumbing Website",
  description: "FlowFix: a professional plumbing services website case study by Ojo Ezekiel O.",
};

export default function FlowfixPage() {
  const project = PROJECTS.find((p) => p.slug === "flowfix")!;
  return <CaseStudy project={project} />;
}
