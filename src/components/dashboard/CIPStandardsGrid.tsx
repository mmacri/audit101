import { CIPStandardCard, ComplianceStatus } from "./CIPStandardCard";

interface CIPStandard {
  id: string;
  name: string;
  status: ComplianceStatus;
  score: number;
  evidenceCount: number;
  pendingTasks: number;
  expiringEvidence: number;
}

const cipStandards: CIPStandard[] = [
  {
    id: "CIP-002",
    name: "BES Cyber System Categorization",
    status: "compliant",
    score: 98,
    evidenceCount: 156,
    pendingTasks: 0,
    expiringEvidence: 0,
  },
  {
    id: "CIP-003",
    name: "Security Management Controls",
    status: "compliant",
    score: 95,
    evidenceCount: 89,
    pendingTasks: 1,
    expiringEvidence: 2,
  },
  {
    id: "CIP-004",
    name: "Personnel & Training",
    status: "at-risk",
    score: 87,
    evidenceCount: 234,
    pendingTasks: 3,
    expiringEvidence: 5,
  },
  {
    id: "CIP-005",
    name: "Electronic Security Perimeters",
    status: "compliant",
    score: 96,
    evidenceCount: 178,
    pendingTasks: 1,
    expiringEvidence: 1,
  },
  {
    id: "CIP-006",
    name: "Physical Security",
    status: "compliant",
    score: 94,
    evidenceCount: 145,
    pendingTasks: 0,
    expiringEvidence: 3,
  },
  {
    id: "CIP-007",
    name: "System Security Management",
    status: "critical",
    score: 68,
    evidenceCount: 312,
    pendingTasks: 8,
    expiringEvidence: 4,
  },
  {
    id: "CIP-008",
    name: "Incident Reporting & Response",
    status: "compliant",
    score: 92,
    evidenceCount: 67,
    pendingTasks: 1,
    expiringEvidence: 0,
  },
  {
    id: "CIP-009",
    name: "Recovery Plans",
    status: "compliant",
    score: 91,
    evidenceCount: 89,
    pendingTasks: 0,
    expiringEvidence: 2,
  },
  {
    id: "CIP-010",
    name: "Configuration Change Management",
    status: "at-risk",
    score: 78,
    evidenceCount: 256,
    pendingTasks: 4,
    expiringEvidence: 1,
  },
  {
    id: "CIP-011",
    name: "Information Protection",
    status: "compliant",
    score: 93,
    evidenceCount: 134,
    pendingTasks: 2,
    expiringEvidence: 0,
  },
  {
    id: "CIP-012",
    name: "Communications Between Control Centers",
    status: "compliant",
    score: 97,
    evidenceCount: 45,
    pendingTasks: 0,
    expiringEvidence: 0,
  },
  {
    id: "CIP-013",
    name: "Supply Chain Risk Management",
    status: "at-risk",
    score: 82,
    evidenceCount: 98,
    pendingTasks: 2,
    expiringEvidence: 3,
  },
  {
    id: "CIP-014",
    name: "Physical Security (Transmission)",
    status: "compliant",
    score: 94,
    evidenceCount: 78,
    pendingTasks: 0,
    expiringEvidence: 1,
  },
];

interface CIPStandardsGridProps {
  filter: "all" | "high" | "medium" | "low";
}

export function CIPStandardsGrid({ filter }: CIPStandardsGridProps) {
  // In a real app, filtering would be based on asset criticality
  // For now, we show all standards
  const filteredStandards = cipStandards;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filteredStandards.map((standard, index) => (
        <div
          key={standard.id}
          className="animate-fade-in-up"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <CIPStandardCard {...standard} />
        </div>
      ))}
    </div>
  );
}
