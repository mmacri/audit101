import { LearningStep } from "@/components/shared/StepSection";

export const pciDssLeadersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Establish PCI DSS Program Strategy and Governance",
    description: "Define program scope, secure executive sponsorship, and establish governance structure for PCI DSS compliance.",
    actions: [
      "Secure executive and board-level support for PCI DSS compliance program",
      "Define cardholder data environment (CDE) scope with business stakeholders",
      "Identify merchant level and validation requirements based on transaction volume",
      "Establish PCI DSS steering committee with representatives from IT, security, finance, legal",
      "Allocate budget for compliance activities: assessments, tools, remediation, training",
      "Define roles and responsibilities (PCI DSS Compliance Manager, QSA liaison, etc.)"
    ],
    outputs: [
      "Executive sponsorship charter and board presentation",
      "PCI DSS program charter defining scope, objectives, and governance",
      "Budget allocation for compliance program",
      "Roles and responsibilities matrix (RACI)",
      "Merchant level determination documentation"
    ],
    resources: [
      { title: "PCI DSS Program Charter Template", isTemplate: true },
      { title: "Executive Presentation Template", isTemplate: true }
    ]
  },
  {
    number: 2,
    title: "Conduct Gap Assessment and Develop Remediation Plan",
    description: "Assess current state compliance, identify gaps, and create prioritized remediation roadmap.",
    actions: [
      "Conduct initial gap assessment against all 12 PCI DSS requirements",
      "Engage qualified assessor (QSA) or use internal resources for assessment",
      "Document current compliance status by requirement",
      "Prioritize remediation activities based on risk and effort",
      "Develop multi-phase remediation plan with timelines and resource needs",
      "Assign owners for each remediation activity"
    ],
    outputs: [
      "Gap assessment report with findings by requirement",
      "Prioritized remediation roadmap with phases",
      "Project plans for major remediation initiatives",
      "Resource allocation and timeline for remediation"
    ],
    resources: [
      { title: "Gap Assessment Template", isTemplate: true },
      { title: "Remediation Plan Template", isTemplate: true }
    ]
  },
  {
    number: 3,
    title: "Implement PCI DSS Controls and Oversee Remediation",
    description: "Lead implementation of PCI DSS requirements across all 6 control objectives.",
    actions: [
      "Oversee network security controls implementation (Req 1-2)",
      "Ensure data protection controls are deployed (Req 3-4: encryption, data minimization)",
      "Lead vulnerability management program establishment (Req 5-6)",
      "Implement access control program (Req 7-9: least privilege, MFA, physical security)",
      "Establish logging and monitoring capabilities (Req 10-11)",
      "Develop and publish information security policies (Req 12)",
      "Track remediation progress and remove blockers"
    ],
    outputs: [
      "Implementation status dashboard by requirement",
      "Policy suite covering all 12 requirements",
      "Technical control implementation evidence",
      "Regular progress reports to steering committee and executives"
    ],
    resources: [
      { title: "PCI DSS Policy Templates", isTemplate: true },
      { title: "Implementation Tracking Dashboard", isTemplate: true }
    ]
  },
  {
    number: 4,
    title: "Establish Risk Management and Service Provider Oversight",
    description: "Conduct risk assessments, manage third-party service providers, and implement incident response.",
    actions: [
      "Conduct annual risk assessment identifying threats to cardholder data",
      "Develop risk treatment plans for identified risks",
      "Inventory all service providers handling cardholder data",
      "Ensure service providers maintain PCI DSS compliance (obtain AoCs)",
      "Implement contracts requiring service provider compliance",
      "Establish incident response plan for cardholder data breaches",
      "Conduct tabletop exercises testing incident response procedures"
    ],
    outputs: [
      "Annual risk assessment report",
      "Service provider inventory with compliance status",
      "Service provider agreements with security requirements",
      "Incident response plan with test results",
      "Service provider AoCs (Attestations of Compliance) collected"
    ],
    resources: [
      { title: "Risk Assessment Template", isTemplate: true },
      { title: "Service Provider Management Program", isTemplate: true },
      { title: "Incident Response Plan Template", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Implement Training, Awareness, and Background Checks",
    description: "Establish security awareness program and personnel security controls.",
    actions: [
      "Develop and deliver annual security awareness training to all personnel",
      "Create role-specific training for personnel with CDE access",
      "Implement training upon hire and acknowledge acceptable use policies",
      "Conduct background checks for personnel with access to cardholder data",
      "Establish process for revoking access upon termination",
      "Track training completion and maintain records"
    ],
    outputs: [
      "Security awareness training program and materials",
      "Training completion tracking by employee",
      "Background check policy and verification records",
      "Acceptable use policy with employee acknowledgments"
    ],
    resources: [
      { title: "Security Awareness Training Program", isTemplate: true },
      { title: "Background Check Policy Template", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Coordinate Compliance Validation and Assessments",
    description: "Complete SAQ or engage QSA for assessment, manage ASV scans, and submit compliance documentation.",
    actions: [
      "Determine applicable SAQ type or engage Qualified Security Assessor (QSA)",
      "Coordinate evidence collection for all 12 requirements",
      "Complete Self-Assessment Questionnaire with supporting documentation",
      "Engage Approved Scanning Vendor (ASV) for quarterly external vulnerability scans",
      "Address any scan vulnerabilities to achieve passing results",
      "Obtain Attestation of Compliance (AoC) and submit to acquirer",
      "Coordinate penetration testing (annual requirement)",
      "Participate in QSA on-site assessment if Level 1 merchant"
    ],
    outputs: [
      "Completed SAQ or Report on Compliance (RoC) from QSA",
      "Quarterly ASV scan reports with passing results",
      "Annual penetration test report",
      "Attestation of Compliance (AoC) signed by officer",
      "Submission confirmation from acquirer/payment brands"
    ],
    resources: [
      { title: "SAQ Completion Guide by Type", isTemplate: true },
      { title: "QSA Assessment Coordination Checklist", isTemplate: true },
      { title: "Evidence Organization Guide", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Maintain Ongoing Compliance and Continuous Improvement",
    description: "Establish processes for ongoing compliance, quarterly validation, and program improvement.",
    actions: [
      "Implement continuous monitoring of PCI DSS controls",
      "Conduct quarterly ASV scans and address findings promptly",
      "Perform annual internal PCI DSS compliance reviews",
      "Update risk assessments and scope documentation as environment changes",
      "Manage service provider compliance verification annually",
      "Track and report compliance metrics to executives and board",
      "Continuously improve program based on findings, incidents, and industry trends",
      "Prepare for annual revalidation (SAQ or QSA assessment)"
    ],
    outputs: [
      "Ongoing compliance monitoring program",
      "Quarterly ASV scan coordination and remediation tracking",
      "Annual internal review reports",
      "Updated scope and risk assessments reflecting changes",
      "Executive dashboards and board reports on compliance status",
      "Continuous improvement initiatives tracked and implemented"
    ],
    resources: [
      { title: "Ongoing Compliance Monitoring Framework", isTemplate: true },
      { title: "PCI DSS Metrics Dashboard", isTemplate: true },
      { title: "Annual Review Checklist", isTemplate: true }
    ]
  }
];