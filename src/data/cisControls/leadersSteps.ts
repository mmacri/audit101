import { LearningStep } from "@/components/shared/StepSection";

export const cisControlsLeadersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand CIS Controls as a Strategic Framework",
    description: "Learn how CIS Controls provide a prioritized roadmap for cyber defense and how to use Implementation Groups to guide your program.",
    actions: [
      "Review the 18 CIS Controls and their focus on common attack vectors",
      "Understand Implementation Groups (IG1 for basic, IG2 for intermediate, IG3 for advanced)",
      "Learn how CIS Controls align to your risk profile and organizational maturity",
      "Understand the business value: reducing risk, improving efficiency, enabling compliance"
    ],
    outputs: [
      "Executive understanding of CIS Controls strategic value",
      "Assessment of current Implementation Group vs. target state"
    ],
    resources: [
      { title: "Executive CIS Controls Overview", isTemplate: true }
    ],
    contentTypes: ["reading", "video", "documentation"],
    duration: "2-3 hours",
    learningObjectives: [
      "Understand CIS Controls framework and Implementation Groups",
      "Align controls with organizational risk profile",
      "Articulate business value of CIS Controls program"
    ],
    deliverables: [
      "Executive CIS Controls overview document",
      "Implementation Group assessment",
      "Business value summary"
    ]
  },
  {
    number: 2,
    title: "Assess Current Posture and Define Target State",
    description: "Conduct a gap assessment against CIS Controls and define your target Implementation Group based on organizational size, complexity, and risk.",
    actions: [
      "Conduct initial CIS Controls self-assessment",
      "Determine appropriate Implementation Group (IG1, IG2, or IG3) for your organization",
      "Identify current implementation gaps and weaknesses",
      "Define target state and multi-year roadmap",
      "Prioritize controls based on risk, compliance requirements, and quick wins"
    ],
    outputs: [
      "Current state assessment results",
      "Target Implementation Group designation",
      "Gap analysis and prioritized roadmap",
      "Executive summary with business case for investments"
    ],
    resources: [
      { title: "CIS Controls Self-Assessment Tool", url: "https://www.cisecurity.org/controls/cis-controls-assessment-tool", isTemplate: false },
      { title: "Implementation Roadmap Template", isTemplate: true }
    ],
    contentTypes: ["reading", "exercise", "template"],
    duration: "4-5 hours",
    learningObjectives: [
      "Assess current CIS Controls posture",
      "Define appropriate Implementation Group target",
      "Develop prioritized implementation roadmap"
    ],
    deliverables: [
      "Current state assessment report",
      "Implementation Group designation",
      "3-year implementation roadmap"
    ]
  },
  {
    number: 3,
    title: "Establish Governance and Assign Ownership",
    description: "Create governance structure, assign control ownership, and establish accountability for CIS Controls implementation.",
    actions: [
      "Designate a CIS Controls program owner or security leader",
      "Assign ownership for each of the 18 controls to specific teams or individuals",
      "Create governance charter and steering committee",
      "Establish reporting cadence and KPIs",
      "Define escalation paths and decision-making authorities"
    ],
    outputs: [
      "Governance charter and committee structure",
      "Control ownership matrix with accountable parties",
      "Program KPIs and reporting schedule"
    ],
    resources: [
      { title: "CIS Controls Governance Charter", isTemplate: true },
      { title: "Control Ownership Matrix", isTemplate: true }
    ],
    contentTypes: ["reading", "template", "exercise"],
    duration: "3-4 hours",
    learningObjectives: [
      "Design effective governance structure",
      "Assign clear control ownership",
      "Establish accountability mechanisms"
    ],
    deliverables: [
      "Governance charter with committee structure",
      "18-control ownership matrix",
      "KPI framework and reporting schedule"
    ]
  },
  {
    number: 4,
    title: "Allocate Resources and Budget",
    description: "Fund tool procurement, staffing, training, and implementation activities needed to achieve target Implementation Group.",
    actions: [
      "Review resource requirements for each prioritized control",
      "Approve budgets for security tools (asset management, SIEM, EDR, vulnerability management, IAM)",
      "Allocate staff and contractor resources",
      "Fund training and awareness programs",
      "Prioritize investments based on risk reduction and Implementation Group roadmap"
    ],
    outputs: [
      "Approved program budget with control-specific allocations",
      "Staffing and resource plan",
      "Tool procurement and implementation schedule"
    ],
    resources: [
      { title: "CIS Controls Budget Template", isTemplate: true }
    ],
    contentTypes: ["reading", "template", "exercise"],
    duration: "4-5 hours",
    learningObjectives: [
      "Develop comprehensive program budget",
      "Allocate resources aligned to roadmap",
      "Prioritize investments by risk and IG target"
    ],
    deliverables: [
      "Approved multi-year budget",
      "Resource allocation plan",
      "Tool procurement schedule"
    ]
  },
  {
    number: 5,
    title: "Monitor Progress and Metrics",
    description: "Track implementation progress, review metrics, and ensure the program is advancing toward target maturity.",
    actions: [
      "Receive regular status reports on control implementation progress",
      "Review dashboards showing safeguard coverage and compliance",
      "Monitor key metrics: asset visibility, vulnerability remediation time, incident detection rate",
      "Track progress toward Implementation Group advancement",
      "Review and address roadblocks and resource constraints"
    ],
    outputs: [
      "Executive dashboard with CIS Controls metrics",
      "Monthly/quarterly status reports",
      "Implementation Group maturity tracking"
    ],
    resources: [
      { title: "Executive CIS Dashboard Template", isTemplate: true }
    ],
    contentTypes: ["reading", "interactive", "template"],
    duration: "3-4 hours",
    learningObjectives: [
      "Design effective executive dashboards",
      "Track Implementation Group progress",
      "Monitor program effectiveness"
    ],
    deliverables: [
      "Executive dashboard with KPIs",
      "Monthly/quarterly reports",
      "Maturity tracking system"
    ]
  },
  {
    number: 6,
    title: "Support Assessments and Continuous Improvement",
    description: "Sponsor internal and external CIS Controls assessments, review findings, and drive continuous improvement.",
    actions: [
      "Approve scope for CIS Controls assessments and audits",
      "Review assessment findings and maturity ratings",
      "Approve remediation plans and resource allocations",
      "Champion continuous improvement culture",
      "Celebrate successes and recognize high-performing teams"
    ],
    outputs: [
      "Assessment results and maturity ratings",
      "Remediation plans and resource commitments",
      "Recognition programs for implementation milestones"
    ],
    resources: [
      { title: "Assessment Review Template", isTemplate: true }
    ],
    contentTypes: ["reading", "template", "case-study"],
    duration: "3-4 hours",
    learningObjectives: [
      "Oversee assessment activities",
      "Drive continuous improvement",
      "Foster culture of security excellence"
    ],
    deliverables: [
      "Assessment review and approvals",
      "Remediation commitments",
      "Recognition program"
    ]
  },
  {
    number: 7,
    title: "Communicate Value and Advance Maturity",
    description: "Communicate CIS Controls program value to executives and board, and advance organizational maturity over time.",
    actions: [
      "Report CIS Controls program achievements to board and executives",
      "Demonstrate risk reduction and security posture improvements",
      "Advocate for ongoing investments in security controls",
      "Plan advancement from IG1 to IG2 to IG3 over multi-year roadmap",
      "Integrate CIS Controls with enterprise risk management and compliance programs"
    ],
    outputs: [
      "Board-level reporting on CIS Controls program",
      "Business case for continued investments",
      "Multi-year maturity advancement roadmap"
    ],
    resources: [
      { title: "Board Reporting Template", isTemplate: true }
    ],
    contentTypes: ["reading", "template", "case-study"],
    duration: "3-4 hours",
    learningObjectives: [
      "Communicate program value to leadership",
      "Plan maturity advancement",
      "Integrate with enterprise risk programs"
    ],
    deliverables: [
      "Board reporting package",
      "Maturity advancement plan",
      "Integration strategy"
    ]
  }
];
