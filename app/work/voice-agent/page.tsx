import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "AI Customer Support Voice Agent",
  description: "AI customer support voice agent workflow case study by Ojo Ezekiel O.",
};

export default function VoiceAgentPage() {
  const project = PROJECTS.find((p) => p.slug === "voice-agent")!;
  return <CaseStudy project={project} />;
}
