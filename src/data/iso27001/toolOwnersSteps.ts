import { LearningStep } from "@/components/shared/StepSection";

export const iso27001ToolOwnersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand ISO 27001 Technical Control Requirements",
    description: "Learn Annex A Technological Controls (Domain 8) and how they map to security tools and systems you own.",
    actions: [
      "Review all 34 controls in Annex A Domain 8 (Technological Controls)",
      "Map your tools/systems to relevant ISO 27001 controls",
      "Understand evidence requirements for technical control audits",
      "Learn common audit questions for tool owners",
      "Identify gaps between current tool capabilities and ISO 27001 requirements"
    ],
    outputs: [
      "Tool-to-control mapping matrix",
      "Gap analysis of current vs. required capabilities",
      "Evidence collection plan for your tools"
    ],
    resources: [
      { title: "ISO 27001 Technological Controls Quick Reference", isTemplate: true },
      { title: "Tool Mapping Template", isTemplate: true }
    ]
  },
  {
    number: 2,
    title: "Configure Systems for Compliance and Evidence Generation",
    description: "Implement secure configurations, logging, and monitoring aligned with ISO 27001 controls and audit requirements.",
    actions: [
      "Deploy secure configuration baselines (8.9 Configuration management)",
      "Enable comprehensive logging and audit trails (8.15, 8.16 Monitoring)",
      "Implement access control mechanisms (8.2 Privileged access, 8.3 Access restrictions, 8.5 Authentication)",
      "Configure automated policy enforcement where possible",
      "Set up evidence collection and retention mechanisms"
    ],
    outputs: [
      "Secure configuration standards documented",
      "Logging and monitoring architecture",
      "Automated evidence collection workflows",
      "Access control implementation documentation"
    ],
    resources: [
      { title: "Secure Configuration Baseline Templates", isTemplate: true },
      { title: "Logging and Monitoring Guide", isTemplate: true }
    ]
  },
  {
    number: 3,
    title: "Support Risk Assessment with Technical Input",
    description: "Provide technical expertise during risk assessments, identifying vulnerabilities and proposing technical controls.",
    actions: [
      "Document technical assets, dependencies, and data flows for your systems",
      "Identify technical vulnerabilities and misconfigurations",
      "Assess technical threat landscape for your technology stack",
      "Propose technical controls to mitigate identified risks",
      "Estimate implementation effort and cost for technical controls"
    ],
    outputs: [
      "Technical asset inventory with architecture diagrams",
      "Vulnerability assessment for owned systems",
      "Technical risk treatment recommendations",
      "Implementation cost and timeline estimates"
    ],
    resources: [
      { title: "Technical Risk Assessment Template", isTemplate: true },
      { title: "Control Implementation Estimation Worksheet", isTemplate: true }
    ]
  },
  {
    number: 4,
    title: "Implement and Document Technological Controls",
    description: "Deploy technical controls from your SoA and maintain comprehensive implementation documentation and evidence.",
    actions: [
      "Implement controls assigned to your tools: encryption (8.24), malware protection (8.7), backups (8.13)",
      "Deploy network security controls (8.20-8.22)",
      "Configure secure development/deployment pipelines if applicable (8.25-8.32)",
      "Document technical control implementation with screenshots, configs, policies",
      "Create and maintain technical control runbooks"
    ],
    outputs: [
      "Technical control implementation documentation",
      "Configuration files and baselines",
      "Technical control runbooks and procedures",
      "Evidence repository (screenshots, logs, reports)"
    ],
    resources: [
      { title: "Technical Control Documentation Template", isTemplate: true },
      { title: "Evidence Collection Checklist", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Monitor Control Effectiveness and Generate Compliance Reports",
    description: "Track technical control performance, generate metrics, and provide evidence for audits and management reviews.",
    actions: [
      "Define and track technical control KPIs (patch compliance, access review completion, backup success rates)",
      "Set up dashboards and automated reporting",
      "Generate periodic compliance reports for owned controls",
      "Conduct control self-assessments and testing",
      "Provide technical metrics for management reviews"
    ],
    outputs: [
      "Technical control dashboards and KPI tracking",
      "Automated compliance reports",
      "Control testing and validation results",
      "Management review technical input"
    ],
    resources: [
      { title: "Technical KPI Dashboard Template", isTemplate: true },
      { title: "Control Testing Procedures", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Prepare for Technical Audit Evidence Requests",
    description: "Organize technical evidence, prepare for auditor demonstrations, and support certification audits from a technical perspective.",
    actions: [
      "Organize all technical documentation (configs, logs, reports, diagrams)",
      "Prepare system demonstrations for auditors",
      "Create evidence packages for each technical control you own",
      "Conduct pre-audit technical walkthroughs",
      "Prepare for technical questions and evidence requests during Stage 2"
    ],
    outputs: [
      "Technical evidence repository organized by control",
      "System demonstration scripts and sandboxes",
      "Pre-audit technical readiness assessment",
      "FAQ and expected auditor questions documented"
    ],
    resources: [
      { title: "Technical Audit Evidence Organization Guide", isTemplate: true },
      { title: "Auditor Demonstration Checklist", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Maintain Technical Controls and Support Continual Improvement",
    description: "Keep systems updated, address audit findings, and continuously improve technical control effectiveness.",
    actions: [
      "Address technical findings from audits (configuration gaps, missing logs, etc.)",
      "Maintain systems and controls (patching, updates, configuration reviews)",
      "Improve automation and evidence collection processes",
      "Stay current with security threats and technology changes",
      "Propose and implement technical control enhancements",
      "Support surveillance and recertification audits"
    ],
    outputs: [
      "Technical corrective action plans and completion evidence",
      "System maintenance and update logs",
      "Technical improvement initiatives tracked",
      "Ongoing compliance evidence for surveillance audits"
    ],
    resources: [
      { title: "Technical Maintenance Procedures", isTemplate: true },
      { title: "Continual Improvement Tracker", isTemplate: true }
    ]
  }
];