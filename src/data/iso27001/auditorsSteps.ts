import { LearningStep } from "@/components/shared/StepSection";

export const iso27001AuditorsSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand ISO 27001 Audit Requirements and Methodology",
    description: "Learn ISO 27001 audit principles, certification audit stages, and how to assess ISMS compliance against the standard.",
    actions: [
      "Review ISO 27001:2022 requirements (Clauses 4-10 and Annex A)",
      "Understand ISO 19011 auditing guidelines for management systems",
      "Learn certification audit stages (Stage 1, Stage 2, surveillance, recertification)",
      "Understand difference between compliance audits and risk-based audits",
      "Learn common audit findings and nonconformity categories"
    ],
    outputs: [
      "ISO 27001 audit methodology documented",
      "Audit stages and objectives reference guide",
      "Common findings and nonconformities checklist"
    ],
    resources: [
      { title: "ISO 27001 Auditing Guide", isTemplate: true },
      { title: "ISO 19011 Overview", url: "https://www.iso.org/standard/70017.html", isTemplate: false }
    ]
  },
  {
    number: 2,
    title: "Plan and Scope Internal ISMS Audits",
    description: "Develop risk-based internal audit programs, define audit scope and objectives, and allocate resources.",
    actions: [
      "Create annual internal audit program covering all ISMS processes",
      "Conduct risk assessment to prioritize audit areas",
      "Define audit scope, objectives, and criteria for each audit",
      "Assign audit team members and ensure auditor independence",
      "Develop audit schedules and communicate to auditees"
    ],
    outputs: [
      "Annual ISMS internal audit program",
      "Individual audit plans with scope and objectives",
      "Audit team assignments and schedules",
      "Auditee notification letters"
    ],
    resources: [
      { title: "Internal Audit Program Template", isTemplate: true },
      { title: "Audit Plan Template", isTemplate: true }
    ]
  },
  {
    number: 3,
    title: "Audit ISMS Management System Requirements (Clauses 4-10)",
    description: "Assess compliance with ISO 27001 management system clauses through document review, interviews, and evidence examination.",
    actions: [
      "Audit Clause 4: Verify ISMS scope, context analysis, and interested parties documentation",
      "Audit Clause 5: Assess leadership commitment, policy, and roles/responsibilities",
      "Audit Clause 6: Review risk assessment, risk treatment, and SoA",
      "Audit Clause 7: Verify resources, competence, awareness, and communication",
      "Audit Clauses 8-10: Assess operations, performance evaluation, and continual improvement",
      "Interview personnel at all levels to verify understanding and implementation"
    ],
    outputs: [
      "Audit checklists for each clause",
      "Interview notes and observations",
      "Document review findings",
      "Evidence sampling results"
    ],
    resources: [
      { title: "Clauses 4-10 Audit Checklist", isTemplate: true },
      { title: "Auditor Interview Guide", isTemplate: true }
    ]
  },
  {
    number: 4,
    title: "Audit Annex A Control Implementation and Effectiveness",
    description: "Verify implementation and effectiveness of selected Annex A controls documented in the Statement of Applicability.",
    actions: [
      "Review Statement of Applicability and control selection rationale",
      "Sample controls across all four domains (Organizational, People, Physical, Technological)",
      "Test control implementation through observation, document review, and technical testing",
      "Assess control effectiveness in addressing identified risks",
      "Interview control owners about implementation challenges and improvements",
      "Verify control evidence and documentation"
    ],
    outputs: [
      "Annex A controls sampling matrix",
      "Control testing procedures and results",
      "Control effectiveness assessment",
      "Evidence review findings"
    ],
    resources: [
      { title: "Annex A Controls Audit Checklist", isTemplate: true },
      { title: "Control Testing Procedures", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Assess Risk Management Process and Risk Treatment Effectiveness",
    description: "Evaluate the risk assessment methodology, verify risk treatment plan execution, and assess residual risk acceptability.",
    actions: [
      "Review risk assessment methodology for completeness and consistency",
      "Verify all relevant assets, threats, and vulnerabilities are identified",
      "Assess risk evaluation criteria and risk acceptance decisions",
      "Audit risk treatment plan implementation and completion",
      "Verify SoA controls map to identified risks appropriately",
      "Review residual risk acceptance and management approval"
    ],
    outputs: [
      "Risk management process audit findings",
      "Risk-to-control mapping verification",
      "Risk treatment plan execution assessment",
      "Residual risk review documentation"
    ],
    resources: [
      { title: "Risk Management Audit Checklist", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Document Findings, Report Results, and Track Corrective Actions",
    description: "Document audit findings, classify nonconformities, report to management, and verify corrective actions.",
    actions: [
      "Document all findings (nonconformities, observations, opportunities for improvement)",
      "Classify findings: major nonconformities, minor nonconformities, observations",
      "Write clear, evidence-based audit reports",
      "Present findings to management in closing meetings",
      "Work with auditees to develop corrective action plans",
      "Verify implementation and effectiveness of corrective actions"
    ],
    outputs: [
      "Audit findings register with classifications",
      "Formal audit reports with executive summaries",
      "Corrective action plans with owners and timelines",
      "Corrective action verification evidence"
    ],
    resources: [
      { title: "Audit Report Template", isTemplate: true },
      { title: "Corrective Action Tracking Template", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Support External Certification Audits and Continual Improvement",
    description: "Coordinate with external auditors, support certification audit preparation, and drive ISMS continual improvement.",
    actions: [
      "Conduct pre-certification internal audits to identify gaps",
      "Coordinate logistics and evidence for external certification audits",
      "Participate in external audit observations and evidence provision",
      "Review and validate external auditor findings",
      "Track ISMS performance trends across audit cycles",
      "Provide insights for continual improvement based on audit patterns",
      "Support surveillance and recertification audit preparation"
    ],
    outputs: [
      "Pre-certification internal audit report",
      "External audit coordination and evidence packages",
      "External audit findings validation",
      "Multi-year audit trend analysis",
      "Continual improvement recommendations"
    ],
    resources: [
      { title: "Pre-Certification Audit Guide", isTemplate: true },
      { title: "External Audit Coordination Checklist", isTemplate: true },
      { title: "Audit Trend Analysis Template", isTemplate: true }
    ]
  }
];