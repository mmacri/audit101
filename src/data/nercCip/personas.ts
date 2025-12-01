import { Wrench, Shield, Users, ClipboardCheck } from "lucide-react";
import { Persona } from "@/components/shared/PersonaGrid";

export const personas: Persona[] = [
  {
    id: "practitioners",
    title: "Practitioners & Implementers",
    description: "IT and OT staff implementing CIP controls for BES Cyber Systems and operations.",
    icon: Wrench,
    path: "/nerc-cip/practitioners"
  },
  {
    id: "tool-owners",
    title: "Tool Owners & SMEs",
    description: "Owners of EACMS, PACS, and critical systems supporting CIP compliance programs.",
    icon: Shield,
    path: "/nerc-cip/tool-owners"
  },
  {
    id: "leaders",
    title: "Leaders & Executives",
    description: "CIP Senior Managers and executives responsible for program governance and oversight.",
    icon: Users,
    path: "/nerc-cip/leaders"
  },
  {
    id: "auditors",
    title: "Internal Auditors & Reviewers",
    description: "Internal audit teams preparing for NERC audits and validating CIP compliance.",
    icon: ClipboardCheck,
    path: "/nerc-cip/auditors"
  }
];
