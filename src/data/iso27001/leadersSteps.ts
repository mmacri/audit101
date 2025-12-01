import { LearningStep } from "@/components/shared/StepSection";

export const iso27001LeadersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Secure Leadership Commitment and Define ISMS Strategy (Clause 5)",
    description: "Establish executive sponsorship, define information security policy, and align ISMS with business objectives.",
    actions: [
      "Secure top management commitment and board-level sponsorship",
      "Define information security policy approved by senior leadership",
      "Align ISMS objectives with business strategy and risk appetite",
      "Allocate budget and resources for ISMS implementation and certification",
      "Establish governance structure (steering committee, working groups)"
    ],
    outputs: [
      "Executive sponsorship charter",
      "Information security policy approved by board/executives",
      "ISMS business case with budget approval",
      "Governance structure and roles defined"
    ],
    resources: [
      { title: "Executive Sponsorship Template", isTemplate: true },
      { title: "Information Security Policy Template", isTemplate: true },
      { title: "ISMS Business Case Template", isTemplate: true }
    ]
  },
  {
    number: 2,
    title: "Define ISMS Scope, Context, and Organizational Roles (Clause 4-5)",
    description: "Establish ISMS boundaries, understand stakeholder expectations, and assign roles and responsibilities.",
    actions: [
      "Define ISMS scope (business units, locations, systems, data)",
      "Conduct organizational context analysis (internal/external issues)",
      "Identify interested parties and their information security requirements",
      "Assign ISMS roles: Information Security Manager, process owners, control owners",
      "Document roles, responsibilities, and authorities in org charts and job descriptions"
    ],
    outputs: [
      "ISMS scope statement approved by management",
      "Organizational context and interested parties analysis",
      "ISMS roles and responsibilities matrix (RACI)",
      "Updated job descriptions reflecting information security responsibilities"
    ],
    resources: [
      { title: "ISMS Scope Definition Template", isTemplate: true },
      { title: "RACI Matrix Template", isTemplate: true }
    ]
  },
  {
    number: 3,
    title: "Oversee Risk Management Strategy and Risk Treatment Plans (Clause 6)",
    description: "Define risk management approach, approve risk assessments, and ensure appropriate risk treatment decisions.",
    actions: [
      "Establish risk management methodology and risk criteria",
      "Define risk appetite and acceptance thresholds",
      "Review and approve risk assessment results",
      "Make risk treatment decisions (mitigate, accept, transfer, avoid)",
      "Approve Statement of Applicability and control selection rationale",
      "Allocate resources for risk treatment implementation"
    ],
    outputs: [
      "Risk management policy and methodology",
      "Risk appetite statement",
      "Approved risk assessment report and risk register",
      "Approved Statement of Applicability (SoA)",
      "Risk treatment plan with budget and timeline"
    ],
    resources: [
      { title: "Risk Management Policy Template", isTemplate: true },
      { title: "Risk Appetite Statement Template", isTemplate: true }
    ]
  },
  {
    number: 4,
    title: "Ensure Resources, Competence, and Awareness (Clause 7)",
    description: "Provide necessary resources, establish training programs, and drive organization-wide security awareness.",
    actions: [
      "Allocate budget for ISMS operations, tools, training, and audits",
      "Ensure adequate staffing for information security functions",
      "Establish role-based training and competency requirements",
      "Implement organization-wide security awareness program",
      "Establish internal and external communication channels"
    ],
    outputs: [
      "ISMS budget with allocated resources",
      "Staffing plan for information security roles",
      "Training and awareness program with delivery schedule",
      "Communication plan for ISMS stakeholders"
    ],
    resources: [
      { title: "ISMS Budget Template", isTemplate: true },
      { title: "Training and Awareness Program Plan", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Monitor ISMS Performance and Conduct Management Reviews (Clause 9)",
    description: "Establish ISMS metrics, review performance data, and ensure continual improvement through management reviews.",
    actions: [
      "Define ISMS performance metrics (KPIs/KRIs)",
      "Review security metrics, incident trends, and control effectiveness",
      "Conduct periodic management reviews (at least annually)",
      "Assess ISMS suitability, adequacy, and effectiveness",
      "Review audit results, incidents, and corrective actions",
      "Make decisions on ISMS changes and improvements"
    ],
    outputs: [
      "ISMS metrics dashboard with KPIs/KRIs",
      "Management review agendas and meeting minutes",
      "Management review decisions and action items",
      "ISMS performance reports for board/executives"
    ],
    resources: [
      { title: "ISMS Metrics and KPI Template", isTemplate: true },
      { title: "Management Review Template", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Lead Certification Preparation and External Audit Coordination",
    description: "Oversee certification readiness, select certification body, and coordinate external audit activities.",
    actions: [
      "Conduct pre-certification readiness assessment",
      "Select accredited certification body and negotiate audit scope",
      "Coordinate Stage 1 and Stage 2 audit logistics",
      "Participate in opening and closing meetings with auditors",
      "Review and approve responses to audit findings",
      "Ensure corrective actions are implemented and verified"
    ],
    outputs: [
      "Certification readiness assessment report",
      "Certification body selection and contract",
      "Audit coordination plan and logistics",
      "Audit findings response and corrective action plan",
      "ISO 27001 certificate upon successful completion"
    ],
    resources: [
      { title: "Certification Readiness Checklist", isTemplate: true },
      { title: "Audit Coordination Guide", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Drive Continual Improvement and Certification Maintenance (Clause 10)",
    description: "Lead ongoing ISMS improvements, maintain certification through surveillance audits, and prepare for recertification.",
    actions: [
      "Establish continual improvement culture and processes",
      "Track and approve ISMS improvement initiatives",
      "Coordinate annual surveillance audits",
      "Review and update ISMS based on business changes, threats, and lessons learned",
      "Ensure ongoing compliance with ISO 27001",
      "Plan and execute recertification audit (every 3 years)",
      "Communicate ISMS value and certification status to stakeholders"
    ],
    outputs: [
      "Continual improvement program with initiatives tracked",
      "Updated ISMS documentation reflecting changes",
      "Surveillance audit coordination and results",
      "Recertification preparation and successful renewal",
      "Executive communications on ISMS and certification status"
    ],
    resources: [
      { title: "Continual Improvement Framework", isTemplate: true },
      { title: "Surveillance Audit Preparation Guide", isTemplate: true },
      { title: "Executive ISMS Dashboard Template", isTemplate: true }
    ]
  }
];