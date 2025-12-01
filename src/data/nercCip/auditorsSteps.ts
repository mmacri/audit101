import { LearningStep } from "@/components/shared/StepSection";

export const auditorsSteps: LearningStep[] = [
  {
    number: 1,
    title: "CIP Audit Fundamentals and RSAWs",
    description: "Understand the NERC audit approach, Reliability Standard Audit Worksheets (RSAWs), and evidence expectations.",
    actions: [
      "Study NERC audit methodology and RSAW structure",
      "Review evidence requirements for each CIP standard",
      "Understand Regional Entity expectations",
      "Learn sampling and testing approaches",
    ],
    outputs: [
      "RSAW review documentation",
      "Internal audit methodology aligned with NERC approach",
      "Evidence requirement checklists",
    ],
  },
  {
    number: 2,
    title: "CIP-002 to CIP-004 Audit Procedures",
    description: "Develop audit procedures for CIP-002 (Categorization), CIP-003 (Security Management), and CIP-004 (Personnel & Training).",
    actions: [
      "Review BES Cyber System categorization methodology and documentation",
      "Audit cyber security policies and CIP Senior Manager accountability",
      "Validate personnel risk assessments and training records",
      "Test access revocation upon termination or transfer",
    ],
    outputs: [
      "Audit work programs for CIP-002, CIP-003, and CIP-004",
      "Sampling plans and test procedures",
      "Testing documentation and results",
    ],
  },
  {
    number: 3,
    title: "CIP-005 to CIP-007 Audit Procedures",
    description: "Develop audit procedures for CIP-005 (ESPs), CIP-006 (PSPs), and CIP-007 (System Security).",
    actions: [
      "Validate ESP and PSP boundaries and access controls",
      "Test remote access and multi-factor authentication",
      "Review ports and services, patch management, and malware protection",
      "Audit security event logging and monitoring",
    ],
    outputs: [
      "Audit work programs for CIP-005, CIP-006, and CIP-007",
      "Technical testing procedures and checklists",
      "Network and system testing results",
    ],
  },
  {
    number: 4,
    title: "CIP-008 to CIP-010 Audit Procedures",
    description: "Develop audit procedures for CIP-008 (Incident Response), CIP-009 (Recovery), and CIP-010 (Configuration Management).",
    actions: [
      "Review incident response plans and test documentation",
      "Validate recovery plans and backup testing",
      "Audit baseline configurations and change management",
      "Review vulnerability assessment reports and remediation",
    ],
    outputs: [
      "Audit work programs for CIP-008, CIP-009, and CIP-010",
      "Plan review and testing procedures",
      "Change management audit results",
    ],
  },
  {
    number: 5,
    title: "CIP-011 and CIP-013 Audit Procedures",
    description: "Develop audit procedures for CIP-011 (BCSI Protection) and CIP-013 (Supply Chain).",
    actions: [
      "Audit BCSI identification, classification, and protection",
      "Review BCSI disposal and reuse procedures",
      "Validate supply chain risk management plans",
      "Test vendor risk assessments and procurement controls",
    ],
    outputs: [
      "Audit work programs for CIP-011 and CIP-013",
      "BCSI and vendor audit procedures",
      "Supply chain risk assessment documentation",
    ],
  },
  {
    number: 6,
    title: "Evidence Collection and Documentation",
    description: "Gather comprehensive evidence to support audit conclusions and prepare for external audits.",
    actions: [
      "Collect policies, procedures, and work instructions",
      "Gather system configurations, logs, and reports",
      "Document interviews and walkthroughs",
      "Organize evidence in audit work papers",
    ],
    outputs: [
      "Complete audit evidence repository",
      "Organized audit work papers and references",
      "Interview notes and walkthrough documentation",
    ],
  },
  {
    number: 7,
    title: "Findings, Remediation, and Continuous Monitoring",
    description: "Document findings, track remediation, and establish continuous monitoring processes.",
    actions: [
      "Document audit findings and recommendations",
      "Develop remediation plans with management",
      "Track remediation progress and validation",
      "Implement continuous monitoring and control testing",
    ],
    outputs: [
      "Audit reports with findings and recommendations",
      "Remediation tracking and continuous monitoring plan",
      "Follow-up audit procedures",
    ],
  },
];
