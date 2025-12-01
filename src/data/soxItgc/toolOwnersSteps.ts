import { LearningStep } from "@/components/shared/StepSection";

export const soxItgcToolOwnersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand Your Tool's Role in SOX ITGC",
    description: "Learn how your system supports SOX ITGC requirements for logical access, change management, or computer operations.",
    actions: [
      "For IAM tools: understand role in logical access controls (provisioning, access reviews, MFA)",
      "For ticketing/ITSM: understand role in change management (approvals, testing, deployment tracking)",
      "For backup/monitoring: understand role in computer operations (backup, batch jobs, availability)",
      "For financial systems: understand in-scope designation and ITGC coverage requirements",
      "Map your tool's capabilities to specific ITGC control objectives"
    ],
    outputs: [
      "Tool-to-ITGC control mapping",
      "Understanding of your tool's role in SOX compliance"
    ],
    resources: [
      { title: "Tool ITGC Mapping Template", isTemplate: true }
    ]
  },
  {
    number: 2,
    title: "Ensure Complete Coverage of In-Scope Systems",
    description: "Validate that your tool covers all in-scope financial systems and supporting infrastructure.",
    actions: [
      "Document all financial applications supported by your tool",
      "Identify any in-scope systems not currently covered",
      "Validate integration with all relevant financial systems and platforms",
      "Ensure no gaps in coverage (orphaned accounts, unmonitored changes, missing backups)",
      "Coordinate with finance and audit teams to validate scope"
    ],
    outputs: [
      "Tool coverage inventory for in-scope systems",
      "Gap analysis and remediation plan",
      "Integration validation documentation"
    ],
    resources: [
      { title: "SOX Coverage Assessment Template", isTemplate: true }
    ]
  },
  {
    number: 3,
    title: "Configure Tool to Support ITGC Controls",
    description: "Optimize tool configuration to generate required ITGC evidence and enforce control activities.",
    actions: [
      "For IAM: configure provisioning workflows, access review schedules, privilege monitoring, password policies",
      "For ITSM: configure change approval workflows, testing requirements, environment controls, emergency change procedures",
      "For backup systems: configure backup schedules, retention policies, restoration testing, monitoring",
      "For monitoring tools: configure batch job tracking, error alerting, availability monitoring",
      "Document how configuration settings support specific ITGC controls"
    ],
    outputs: [
      "Tool configuration documentation aligned to ITGC controls",
      "Workflow and automation configuration",
      "Control enforcement mechanisms"
    ],
    resources: [
      { title: "ITGC Configuration Guide", isTemplate: true }
    ]
  },
  {
    number: 4,
    title: "Establish Evidence Collection Workflows",
    description: "Automate and standardize evidence collection for SOX ITGC testing.",
    actions: [
      "Configure quarterly access review reports and attestations",
      "Set up change ticket reports showing approvals, testing, deployment",
      "Automate backup success/failure reporting and restoration test documentation",
      "Configure batch job monitoring logs and error reports",
      "Establish evidence retention aligned to SOX audit periods",
      "Create evidence extraction procedures for auditors"
    ],
    outputs: [
      "Automated evidence collection workflows",
      "Quarterly evidence packages ready for auditors",
      "Evidence retention and archival procedures"
    ],
    resources: [
      { title: "ITGC Evidence Automation Guide", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Maintain Audit Trails and Logging",
    description: "Ensure your tool captures complete, protected audit trails for all ITGC-relevant activities.",
    actions: [
      "Enable comprehensive logging for access changes, privilege grants, account modifications",
      "Log all change approvals, deployments, and rollbacks",
      "Capture backup operations, restoration tests, and batch job executions",
      "Protect log integrity (prevent deletion or modification)",
      "Retain logs for the full SOX audit period (typically 7+ years)",
      "Provide auditor access to logs and audit trails"
    ],
    outputs: [
      "Audit trail configuration and protection documentation",
      "Log retention policies aligned to SOX requirements",
      "Auditor log access procedures"
    ],
    resources: [
      { title: "ITGC Audit Trail Requirements", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Support SOX Testing and Audits",
    description: "Provide tool access, reports, and evidence to internal and external SOX auditors.",
    actions: [
      "Grant auditor read-only access to relevant tool interfaces",
      "Provide pre-packaged evidence for each ITGC control",
      "Demonstrate tool capabilities during control walkthroughs",
      "Respond to auditor questions about configuration, coverage, limitations",
      "Address auditor findings and implement control improvements",
      "Document compensating controls for any tool limitations"
    ],
    outputs: [
      "Auditor evidence packages by ITGC control",
      "Tool demonstration materials",
      "Auditor response documentation",
      "Remediation plans for control deficiencies"
    ],
    resources: [
      { title: "SOX Auditor Evidence Package", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Maintain Continuous ITGC Compliance",
    description: "Ensure tool operates effectively throughout the fiscal year and support continuous SOX compliance.",
    actions: [
      "Monitor tool performance and control effectiveness metrics",
      "Track quarterly access review completion rates",
      "Monitor change management compliance rates (approvals, testing)",
      "Track backup success rates and restoration test results",
      "Generate executive reporting on ITGC control health",
      "Plan tool upgrades and enhancements with SOX impact analysis"
    ],
    outputs: [
      "ITGC control effectiveness dashboards",
      "Quarterly metrics and compliance reporting",
      "Tool health and performance monitoring",
      "Continuous improvement roadmap"
    ],
    resources: [
      { title: "ITGC Metrics Dashboard Template", isTemplate: true }
    ]
  }
];
