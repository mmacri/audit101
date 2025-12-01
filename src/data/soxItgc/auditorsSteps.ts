import { LearningStep } from "@/components/shared/StepSection";

export const soxItgcAuditorsSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand SOX ITGC Testing Methodology",
    description: "Learn the framework for testing IT General Controls under SOX 404 and how ITGCs support application controls.",
    actions: [
      "Understand PCAOB and COSO frameworks for ITGC testing",
      "Learn the three ITGC domains: Logical Access, Change Management, Computer Operations",
      "Understand how ITGC deficiencies impact application controls and financial reporting",
      "Learn sampling approaches for ITGC testing (e.g., 25 samples per control per year)",
      "Understand distinction between design effectiveness and operating effectiveness"
    ],
    outputs: [
      "Understanding of SOX ITGC testing framework",
      "Testing approach and sampling methodology"
    ],
    resources: [
      { title: "SOX ITGC Testing Guide", isTemplate: true }
    ]
  },
  {
    number: 2,
    title: "Plan ITGC Testing Scope and Approach",
    description: "Define in-scope financial systems, select controls for testing, and plan the testing schedule.",
    actions: [
      "Review and validate in-scope financial applications",
      "Identify supporting IT infrastructure (databases, servers, networks, cloud)",
      "Select ITGC controls for testing based on risk and system criticality",
      "Determine sample size and selection criteria for each control",
      "Plan testing timeline aligned to fiscal year and external audit schedule",
      "Coordinate with system owners and control owners on testing schedule"
    ],
    outputs: [
      "ITGC testing scope and control selection",
      "Sampling plan with size and criteria",
      "Testing schedule and coordination plan"
    ],
    resources: [
      { title: "ITGC Testing Plan Template", isTemplate: true }
    ]
  },
  {
    number: 3,
    title: "Test Logical Access Controls",
    description: "Test user provisioning, access reviews, privileged access, and password/MFA controls for in-scope systems.",
    actions: [
      "Test user provisioning: select samples of new user accounts and validate authorization, approval, least privilege",
      "Test access reviews: validate quarterly reviews were performed, documented, and exceptions remediated",
      "Test privileged access: validate separate admin accounts, additional approval, enhanced logging",
      "Test terminations: select samples of terminated users and validate timely access removal",
      "Test password policies and MFA enforcement",
      "Identify and document any control deviations or exceptions"
    ],
    outputs: [
      "Logical access testing results with sample documentation",
      "Control deficiencies and exceptions identified",
      "Testing workpapers and evidence"
    ],
    resources: [
      { title: "Logical Access Testing Checklist", isTemplate: true }
    ]
  },
  {
    number: 4,
    title: "Test Change Management Controls",
    description: "Test change request, approval, testing, and deployment controls for in-scope financial systems.",
    actions: [
      "Select change samples: production changes to in-scope systems during the audit period",
      "Test change authorization: validate business and IT approval before deployment",
      "Test change testing: validate evidence of QA/UAT testing before production",
      "Test environment separation: validate changes deployed to dev/test before production",
      "Test emergency changes: validate post-implementation review and approval",
      "Document any unauthorized or untested changes"
    ],
    outputs: [
      "Change management testing results with change ticket samples",
      "Control deviations and exceptions",
      "Testing workpapers and evidence"
    ],
    resources: [
      { title: "Change Management Testing Checklist", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Test Computer Operations Controls",
    description: "Test backup, batch job monitoring, incident management, and system availability controls.",
    actions: [
      "Test backup procedures: validate daily/weekly backups performed, stored offsite, encrypted",
      "Test backup restoration: validate restoration tests performed and documented",
      "Test batch job monitoring: select samples and validate monitoring, error handling, reruns",
      "Test incident management: review incidents affecting financial systems and validate resolution",
      "Test system availability: validate monitoring and uptime for critical financial systems",
      "Document any backup failures, batch errors, or unresolved incidents"
    ],
    outputs: [
      "Computer operations testing results with samples",
      "Control deviations and exceptions",
      "Testing workpapers and evidence"
    ],
    resources: [
      { title: "Computer Operations Testing Checklist", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Evaluate Deficiencies and Risk Ratings",
    description: "Assess identified control deviations, classify deficiency severity, and determine impact on financial reporting.",
    actions: [
      "Classify deficiencies: Control Deficiency, Significant Deficiency, Material Weakness",
      "Assess likelihood and magnitude of financial statement misstatement",
      "Evaluate compensating controls that may mitigate deficiencies",
      "Aggregate deficiencies across ITGC domains to assess overall control environment",
      "Document root causes and contributing factors",
      "Draft preliminary findings for discussion with management"
    ],
    outputs: [
      "Deficiency classification and risk ratings",
      "Impact assessment on financial reporting controls",
      "Root cause analysis",
      "Draft audit findings and recommendations"
    ],
    resources: [
      { title: "Deficiency Classification Guide", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Report Findings and Support Remediation",
    description: "Issue formal ITGC testing report, work with management on remediation, and plan for follow-up testing.",
    actions: [
      "Issue ITGC testing report with findings, risk ratings, and recommendations",
      "Discuss findings with management and obtain management responses",
      "Review and validate proposed remediation plans",
      "Track remediation progress and perform follow-up testing as needed",
      "Report significant deficiencies and material weaknesses to audit committee",
      "Support external auditor coordination and reporting",
      "Plan for next year's ITGC testing based on findings"
    ],
    outputs: [
      "Final ITGC testing report",
      "Management responses and remediation plans",
      "Follow-up testing results",
      "Audit committee communication",
      "Next year's testing plan"
    ],
    resources: [
      { title: "ITGC Testing Report Template", isTemplate: true }
    ]
  }
];
