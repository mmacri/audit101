import { Users, Wrench, Briefcase, ClipboardCheck } from "lucide-react";

export const personas = [
  {
    id: "practitioners",
    icon: Users,
    title: "Practitioners & Implementers",
    description: "Control owners implementing COSO principles",
    path: "/coso/practitioners",
  },
  {
    id: "tool-owners",
    icon: Wrench,
    title: "Tool Owners & SMEs",
    description: "Process owners managing control activities",
    path: "/coso/tool-owners",
  },
  {
    id: "leaders",
    icon: Briefcase,
    title: "Leaders & Executives",
    description: "Executives setting the control environment and tone at top",
    path: "/coso/leaders",
  },
  {
    id: "auditors",
    icon: ClipboardCheck,
    title: "Internal Auditors",
    description: "Auditors evaluating internal control effectiveness",
    path: "/coso/auditors",
  },
];
