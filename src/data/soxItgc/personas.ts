import { Wrench, Shield, Users, ClipboardCheck } from "lucide-react";
import { Persona } from "@/components/shared/PersonaGrid";

export const soxItgcPersonas: Persona[] = [
  {
    id: "practitioners",
    title: "IT Practitioners & Admins",
    description: "IT administrators and engineers implementing and documenting ITGC controls for logical access, change management, and operations.",
    icon: Wrench,
    path: "/sox-itgc/practitioners"
  },
  {
    id: "tool-owners",
    title: "System & Tool Owners",
    description: "Owners of financial systems, IAM platforms, ticketing systems, and backup tools that support ITGC controls.",
    icon: Shield,
    path: "/sox-itgc/tool-owners"
  },
  {
    id: "leaders",
    title: "Finance & IT Leadership",
    description: "Finance directors, IT managers, and control owners who oversee SOX ITGC programs and external audit coordination.",
    icon: Users,
    path: "/sox-itgc/leaders"
  },
  {
    id: "auditors",
    title: "Internal Auditors & Control Owners",
    description: "Internal audit and SOX compliance staff who test ITGC controls and prepare for external SOX audits.",
    icon: ClipboardCheck,
    path: "/sox-itgc/auditors"
  }
];
