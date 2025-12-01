import { Wrench, Shield, Users, ClipboardCheck } from "lucide-react";
import { Persona } from "@/components/shared/PersonaGrid";

export const pciDssPersonas: Persona[] = [
  {
    id: "practitioners",
    title: "Practitioners & Implementers",
    description: "Security practitioners implementing PCI DSS controls and managing the Cardholder Data Environment (CDE).",
    icon: Wrench,
    path: "/pci-dss/practitioners"
  },
  {
    id: "tool-owners",
    title: "Tool Owners & SMEs",
    description: "System owners managing payment systems, firewalls, and technical controls within the CDE.",
    icon: Shield,
    path: "/pci-dss/tool-owners"
  },
  {
    id: "leaders",
    title: "Leaders & Executives",
    description: "PCI DSS program managers and executives overseeing compliance strategy and validation.",
    icon: Users,
    path: "/pci-dss/leaders"
  },
  {
    id: "auditors",
    title: "Internal Auditors & Reviewers",
    description: "Internal auditors assessing PCI DSS compliance and preparing for QSA assessments or SAQ completion.",
    icon: ClipboardCheck,
    path: "/pci-dss/auditors"
  }
];