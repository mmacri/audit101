import { Wrench, Shield, Users, ClipboardCheck } from "lucide-react";
import { Persona } from "@/components/shared/PersonaGrid";

export const iso27001Personas: Persona[] = [
  {
    id: "practitioners",
    title: "Practitioners & Implementers",
    description: "Security practitioners implementing ISMS controls and maintaining compliance with ISO 27001 requirements.",
    icon: Wrench,
    path: "/iso-27001/practitioners"
  },
  {
    id: "tool-owners",
    title: "Tool Owners & SMEs",
    description: "System owners and technical SMEs managing security tools and technical control implementation.",
    icon: Shield,
    path: "/iso-27001/tool-owners"
  },
  {
    id: "leaders",
    title: "Leaders & Executives",
    description: "ISMS managers and executives overseeing ISO 27001 program strategy and certification maintenance.",
    icon: Users,
    path: "/iso-27001/leaders"
  },
  {
    id: "auditors",
    title: "Internal Auditors & Reviewers",
    description: "Internal auditors assessing ISMS effectiveness and preparing for external certification audits.",
    icon: ClipboardCheck,
    path: "/iso-27001/auditors"
  }
];