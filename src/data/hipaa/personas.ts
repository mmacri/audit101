import { Users, Wrench, Briefcase, ClipboardCheck } from "lucide-react";

export const personas = [
  {
    id: "practitioners",
    icon: Users,
    title: "Practitioners & Implementers",
    description: "Healthcare IT staff implementing HIPAA technical safeguards",
    path: "/hipaa/practitioners",
  },
  {
    id: "tool-owners",
    icon: Wrench,
    title: "Tool Owners & SMEs",
    description: "System owners managing PHI processing systems",
    path: "/hipaa/tool-owners",
  },
  {
    id: "leaders",
    icon: Briefcase,
    title: "Leaders & Executives",
    description: "Privacy officers and executives overseeing compliance",
    path: "/hipaa/leaders",
  },
  {
    id: "auditors",
    icon: ClipboardCheck,
    title: "Internal Auditors",
    description: "Auditors assessing HIPAA compliance programs",
    path: "/hipaa/auditors",
  },
];
