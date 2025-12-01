import { LearningStep } from "@/components/shared/StepSection";

export const cisControlsToolOwnersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand CIS Controls and Tool Alignment",
    description: "Learn how your security tools map to the 18 CIS Controls and which safeguards your systems directly enable.",
    actions: [
      "Review the 18 CIS Controls and identify which ones your tool supports",
      "For asset management tools: map to Controls 1 & 2",
      "For vulnerability/patch tools: map to Control 7",
      "For SIEM/logging: map to Control 8",
      "For EDR/malware: map to Controls 10 & 13",
      "For IAM: map to Controls 5 & 6",
      "Document your tool's role in the organization's CIS Controls implementation"
    ],
    outputs: [
      "Tool-to-CIS-Controls mapping matrix",
      "Understanding of which safeguards your tool enables"
    ],
    resources: [
      { title: "Tool Capability Mapping to CIS Controls", isTemplate: true }
    ]
  },
  {
    number: 2,
    title: "Assess Current Tool Coverage and Gaps",
    description: "Evaluate your tool's current deployment, configuration, and coverage against CIS Controls requirements.",
    actions: [
      "Inventory all assets/systems currently managed by your tool",
      "Identify gaps in coverage (systems not monitored, users not protected, data not scanned)",
      "Assess configuration against CIS benchmarks and best practices",
      "Review integration points with other security tools",
      "Document current capabilities vs. desired CIS Controls state"
    ],
    outputs: [
      "Tool coverage assessment report",
      "Gap analysis identifying deployment and configuration needs",
      "Integration architecture documentation"
    ],
    resources: [
      { title: "Tool Coverage Assessment Template", isTemplate: true }
    ]
  },
  {
    number: 3,
    title: "Configure Tool to Implement CIS Safeguards",
    description: "Optimize tool configuration to fully implement relevant CIS Controls safeguards and integrate with other security tools.",
    actions: [
      "For asset discovery: configure automated scanning and inventory updates",
      "For vulnerability tools: set scan schedules, prioritization rules, and SLA-based workflows",
      "For SIEM: configure log sources, retention, alerting, and correlation rules",
      "For IAM: configure MFA, least privilege policies, and access review workflows",
      "For EDR: configure detection rules, response automation, and containment policies",
      "Integrate your tool with ticketing, orchestration, and reporting platforms"
    ],
    outputs: [
      "Tool configuration documentation mapped to CIS safeguards",
      "Integration playbooks and automation workflows",
      "Baseline configurations and change control procedures"
    ],
    resources: [
      { title: "CIS Controls Configuration Guide", isTemplate: true }
    ]
  },
  {
    number: 4,
    title: "Operationalize Continuous Monitoring",
    description: "Establish workflows, dashboards, and procedures for ongoing CIS Controls monitoring and evidence collection.",
    actions: [
      "Create dashboards showing CIS Controls coverage and compliance",
      "Establish alert thresholds and escalation procedures",
      "Configure automated reporting for CIS Controls safeguards",
      "Set up data feeds to GRC platforms or compliance tools",
      "Document operational runbooks for tool-supported controls",
      "Train team members on tool operations and procedures"
    ],
    outputs: [
      "CIS Controls monitoring dashboards",
      "Automated compliance reporting",
      "Operational runbooks and procedures",
      "Team training documentation"
    ],
    resources: [
      { title: "Monitoring Dashboard Template", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Collect and Organize Evidence",
    description: "Extract reports and artifacts from your tool that demonstrate CIS Controls implementation and organize them for assessments.",
    actions: [
      "Configure scheduled reports for asset inventories, vulnerabilities, access reviews, logs, etc.",
      "Extract evidence artifacts organized by CIS Control and safeguard",
      "Create evidence retention and archival procedures",
      "Document how to generate on-demand reports for auditors",
      "Maintain evidence repository with version control"
    ],
    outputs: [
      "Automated evidence collection workflows",
      "Evidence repository organized by CIS Controls",
      "Report generation procedures and templates"
    ],
    resources: [
      { title: "Evidence Collection Playbook", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Support Assessments and Demonstrate Controls",
    description: "Provide tool access, reports, and demonstrations during CIS Controls assessments and audits.",
    actions: [
      "Grant assessor access to dashboards and reporting interfaces",
      "Prepare evidence packages showing CIS Controls implementation",
      "Demonstrate tool capabilities during assessment walkthroughs",
      "Explain how tool configuration satisfies specific safeguards",
      "Address assessor questions about coverage, limitations, and compensating controls"
    ],
    outputs: [
      "Assessor evidence packages",
      "Tool demonstration materials and recorded walkthroughs",
      "Responses to assessor questions"
    ],
    resources: [
      { title: "Assessment Evidence Package Template", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Optimize and Advance Maturity",
    description: "Continuously improve tool effectiveness, expand coverage, and advance Implementation Group maturity.",
    actions: [
      "Track tool performance metrics and KPIs",
      "Tune detection rules, policies, and alerts",
      "Expand tool coverage to additional assets and safeguards",
      "Plan tool upgrades and capability enhancements",
      "Advance from IG1 to IG2 to IG3 safeguard implementation",
      "Stay current with CIS Controls updates and best practices"
    ],
    outputs: [
      "Tool optimization roadmap",
      "Implementation Group advancement plan",
      "Tool metrics and effectiveness reporting"
    ],
    resources: [
      { title: "Tool Optimization Roadmap Template", isTemplate: true }
    ]
  }
];
