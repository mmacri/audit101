import { LearningStep } from "@/components/shared/StepSection";

export const soxItgcLeadersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand SOX ITGC Requirements and Leadership Role",
    description: "Learn SOX Section 404 requirements, the role of IT General Controls, and your responsibilities as a finance or IT leader.",
    actions: [
      "Understand SOX 404 internal control requirements over financial reporting",
      "Learn the three ITGC domains: Logical Access, Change Management, Computer Operations",
      "Understand how ITGC deficiencies can lead to material weaknesses in financial reporting",
      "Identify your role in ITGC program governance and external audit coordination",
      "Learn the SOX audit timeline and key milestones"
    ],
    outputs: [
      "Executive understanding of SOX ITGC requirements",
      "Awareness of ITGC risks and material weakness implications"
    ],
    resources: [
      { title: "Executive SOX ITGC Overview", isTemplate: true }
    ]
  },
  {
    number: 2,
    title: "Establish ITGC Governance and Accountability",
    description: "Create governance structure, assign control ownership, and establish accountability for SOX ITGC compliance.",
    actions: [
      "Designate ITGC program owner (typically IT leadership)",
      "Assign control ownership for each ITGC domain to specific teams",
      "Establish SOX steering committee with finance and IT representation",
      "Define roles and responsibilities (control owners, testers, coordinators)",
      "Create escalation paths for control deficiencies",
      "Establish regular reporting cadence to executive leadership and audit committee"
    ],
    outputs: [
      "ITGC governance charter",
      "Control ownership matrix with accountable parties",
      "Steering committee structure and meeting schedule"
    ],
    resources: [
      { title: "ITGC Governance Charter Template", isTemplate: true }
    ]
  },
  {
    number: 3,
    title: "Define Scope and Risk Assessment",
    description: "Approve in-scope financial systems and conduct risk assessment to prioritize ITGC focus areas.",
    actions: [
      "Review and approve list of in-scope financial applications",
      "Assess ITGC risks based on system criticality, complexity, change frequency",
      "Prioritize ITGC focus areas based on prior audit findings and known weaknesses",
      "Approve scoping decisions and communicate scope to all stakeholders",
      "Coordinate scoping with external auditors to ensure alignment"
    ],
    outputs: [
      "Approved in-scope system inventory",
      "ITGC risk assessment and prioritization",
      "Scope documentation and stakeholder communication"
    ],
    resources: [
      { title: "SOX Scoping Template", isTemplate: true }
    ]
  },
  {
    number: 4,
    title: "Allocate Resources and Budget",
    description: "Fund ITGC program activities including tools, staff, training, testing, and remediation.",
    actions: [
      "Review resource requirements for ITGC control implementation and testing",
      "Approve budgets for access management tools, change management systems, backup infrastructure",
      "Allocate staff for control ownership, testing, and coordination",
      "Fund external audit fees and internal audit support",
      "Ensure adequate resources for remediation of control deficiencies"
    ],
    outputs: [
      "Approved ITGC program budget",
      "Staffing and resource allocation plan",
      "External audit budget approval"
    ],
    resources: [
      { title: "ITGC Budget Template", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Monitor ITGC Control Health and Metrics",
    description: "Track control effectiveness, review metrics, and ensure timely identification and remediation of deficiencies.",
    actions: [
      "Receive regular status reports on ITGC control performance",
      "Review dashboards showing control metrics: access review completion, change approval rates, backup success",
      "Monitor control testing results and deficiency identification",
      "Track remediation progress for identified control gaps",
      "Escalate significant deficiencies to audit committee",
      "Review audit readiness status prior to external testing"
    ],
    outputs: [
      "Executive ITGC dashboard with control metrics",
      "Monthly/quarterly status reports",
      "Deficiency tracking and remediation oversight"
    ],
    resources: [
      { title: "Executive ITGC Dashboard", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Coordinate with External Auditors",
    description: "Facilitate external SOX audit activities, address auditor findings, and ensure timely responses.",
    actions: [
      "Approve external audit engagement and scope",
      "Facilitate auditor access to systems, documentation, and personnel",
      "Review preliminary audit findings and coordinate responses",
      "Approve management responses and remediation plans",
      "Ensure timely remediation of control deficiencies",
      "Participate in audit close-out and lessons learned"
    ],
    outputs: [
      "External audit coordination and support",
      "Management responses to audit findings",
      "Remediation plans and timelines",
      "Lessons learned and process improvements"
    ],
    resources: [
      { title: "External Audit Coordination Template", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Drive Continuous Compliance and Improvement",
    description: "Foster culture of continuous compliance, invest in automation, and mature ITGC program over time.",
    actions: [
      "Champion continuous control monitoring and automation",
      "Invest in tools and technologies to improve control efficiency",
      "Support integration of ITGC with broader IT governance and risk programs",
      "Promote training and awareness on SOX ITGC requirements",
      "Celebrate successes and recognize teams for clean audit results",
      "Report SOX compliance status to board and audit committee"
    ],
    outputs: [
      "Continuous improvement roadmap for ITGC program",
      "Automation and efficiency initiatives",
      "Board and audit committee reporting",
      "Program maturity and culture enhancement"
    ],
    resources: [
      { title: "ITGC Continuous Improvement Plan", isTemplate: true }
    ]
  }
];
