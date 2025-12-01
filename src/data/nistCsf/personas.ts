import { Wrench, Shield, Users, ClipboardCheck } from "lucide-react";
import { Persona } from "@/components/shared/PersonaGrid";

export const nistCsfPersonas: Persona[] = [
  {
    id: "practitioners",
    title: "Practitioners & Implementers",
    description: "Security practitioners implementing CSF outcomes across the Identify, Protect, Detect, Respond, and Recover functions.",
    icon: Wrench,
    path: "/nist-csf/practitioners"
  },
  {
    id: "tool-owners",
    title: "Tool Owners & SMEs",
    description: "Owners of security tools and processes who map capabilities to CSF categories and subcategories.",
    icon: Shield,
    path: "/nist-csf/tool-owners"
  },
  {
    id: "leaders",
    title: "Leaders & Executives",
    description: "Executives and program managers using CSF to align cybersecurity activities with business risk and communicate progress.",
    icon: Users,
    path: "/nist-csf/leaders"
  },
  {
    id: "auditors",
    title: "Internal Auditors & Reviewers",
    description: "Risk and audit professionals assessing CSF implementation maturity and profile achievement.",
    icon: ClipboardCheck,
    path: "/nist-csf/auditors"
  }
];
