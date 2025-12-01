import { Wrench, Shield, Users, ClipboardCheck } from "lucide-react";
import { Persona } from "@/components/shared/PersonaGrid";

export const cisControlsPersonas: Persona[] = [
  {
    id: "practitioners",
    title: "Practitioners & Implementers",
    description: "IT and security staff implementing the 18 CIS Controls across endpoints, networks, and data protection.",
    icon: Wrench,
    path: "/cis-controls/practitioners"
  },
  {
    id: "tool-owners",
    title: "Tool Owners & SMEs",
    description: "Owners of asset management, vulnerability scanning, EDR, SIEM, and backup systems who operationalize CIS safeguards.",
    icon: Shield,
    path: "/cis-controls/tool-owners"
  },
  {
    id: "leaders",
    title: "Leaders & Executives",
    description: "Security leaders and executives using CIS Controls as a prioritized roadmap for cyber defense programs.",
    icon: Users,
    path: "/cis-controls/leaders"
  },
  {
    id: "auditors",
    title: "Internal Auditors & Reviewers",
    description: "Auditors and compliance professionals assessing CIS Controls implementation and safeguard maturity.",
    icon: ClipboardCheck,
    path: "/cis-controls/auditors"
  }
];
