import { Wrench, Shield, Users, ClipboardCheck } from "lucide-react";
import { Persona } from "@/components/shared/PersonaGrid";

export const nist80053Personas: Persona[] = [
  {
    id: "practitioners",
    title: "Practitioners & Implementers",
    description: "Engineers, analysts, and operations staff implementing and maintaining NIST 800-53 controls across systems and infrastructure.",
    icon: Wrench,
    path: "/nist-800-53/practitioners"
  },
  {
    id: "tool-owners",
    title: "Tool Owners & SMEs",
    description: "Owners of security tools (SIEM, IAM, vulnerability scanners) and subject matter experts who operationalize control requirements.",
    icon: Shield,
    path: "/nist-800-53/tool-owners"
  },
  {
    id: "leaders",
    title: "Leaders & Executives",
    description: "Directors, managers, and program owners who need visibility into NIST 800-53 compliance status and strategic decisions.",
    icon: Users,
    path: "/nist-800-53/leaders"
  },
  {
    id: "auditors",
    title: "Internal Auditors & Reviewers",
    description: "Internal audit staff and compliance reviewers who assess controls and prepare for external NIST 800-53 assessments.",
    icon: ClipboardCheck,
    path: "/nist-800-53/auditors"
  }
];
