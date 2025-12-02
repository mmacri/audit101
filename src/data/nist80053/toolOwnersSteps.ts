import { LearningStep } from "@/components/shared/StepSection";

export const nist80053ToolOwnersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand NIST 800-53 and Your Tool's Role",
    description: "Learn how your security tools (SIEM, IAM, vulnerability scanners, EDR, etc.) map to NIST 800-53 control families and support control implementation across systems.",
    actions: [
      "Review NIST 800-53 control families relevant to your tools: AU (audit), IA (identity), SI (integrity), SC (communications protection), AC (access control)",
      "Identify which controls your tool directly satisfies vs. supports",
      "Understand how your tool's data feeds into System Security Plans (SSPs) and assessment artifacts",
      "Map your tool's capabilities to specific control requirements"
    ],
    outputs: [
      "Tool-to-control mapping showing which NIST 800-53 controls your system supports",
      "Understanding of your role in control implementation and evidence collection"
    ],
    resources: [
      { title: "Tool Capability Mapping Template", isTemplate: true }
    ],
    contentTypes: ["reading", "documentation", "exercise"],
    duration: "3-4 hours",
    learningObjectives: [
      "Map tool capabilities to NIST 800-53 controls",
      "Understand tool role in control implementation",
      "Identify evidence collection responsibilities"
    ],
    deliverables: [
      "Tool-to-control mapping matrix",
      "Control support documentation",
      "Evidence collection inventory"
    ]
  },
  {
    number: 2,
    title: "Define Tool Scope and System Boundaries",
    description: "Document which systems your tool monitors/protects and ensure alignment with organizational system categorization and boundary definitions.",
    actions: [
      "Document all systems and assets covered by your tool",
      "Identify any systems that should be in scope but aren't currently covered",
      "Validate that your tool's configuration aligns with system boundary definitions",
      "Coordinate with system owners to ensure complete coverage"
    ],
    outputs: [
      "Tool coverage inventory showing all monitored systems",
      "Gap analysis identifying systems requiring tool deployment or configuration updates",
      "Integration architecture diagram"
    ],
    resources: [
      { title: "Tool Coverage Matrix", isTemplate: true }
    ],
    contentTypes: ["exercise", "documentation", "template"],
    duration: "3-4 hours",
    learningObjectives: [
      "Document complete tool coverage",
      "Identify and remediate coverage gaps",
      "Align with system boundary definitions"
    ],
    deliverables: [
      "Complete coverage inventory",
      "Gap analysis with remediation plan",
      "Integration architecture documentation"
    ]
  },
  {
    number: 3,
    title: "Map Tool Capabilities to Control Requirements",
    description: "Create detailed mappings between your tool's features and NIST 800-53 control requirements, identifying which controls you fully satisfy, partially support, or don't address.",
    actions: [
      "For SIEM owners: map to AU-2, AU-3, AU-6, SI-4, IR-4, IR-5",
      "For IAM owners: map to AC-2, AC-3, AC-6, IA-2, IA-4, IA-5",
      "For vulnerability management: map to RA-5, SI-2, CM-6",
      "For EDR/endpoint tools: map to SI-3, SI-4, SI-7, CM-3",
      "Document configuration settings that satisfy specific control requirements",
      "Identify control enhancements your tool can support"
    ],
    outputs: [
      "Detailed control mapping matrix with implementation notes",
      "Configuration documentation showing how settings satisfy controls",
      "List of controls requiring additional tools or manual processes"
    ],
    resources: [
      { title: "Tool-to-Control Detailed Mapping", isTemplate: true }
    ],
    contentTypes: ["exercise", "documentation", "template"],
    duration: "5-6 hours",
    learningObjectives: [
      "Create detailed control mappings",
      "Document configuration-to-control relationships",
      "Identify control gaps and compensating measures"
    ],
    deliverables: [
      "Detailed control mapping matrix",
      "Configuration documentation with control references",
      "Gap analysis with recommendations"
    ]
  },
  {
    number: 4,
    title: "Implement and Configure Controls",
    description: "Configure your tool to meet control requirements, establish workflows, integrate with other systems, and operationalize control activities.",
    actions: [
      "Configure audit logging, retention, and alerting per AU family requirements",
      "Set up access control policies, MFA, and privilege management per AC/IA requirements",
      "Configure vulnerability scanning schedules and remediation workflows per RA-5, SI-2",
      "Establish incident detection rules and response playbooks per IR requirements",
      "Integrate your tool with ticketing, orchestration, and reporting systems",
      "Document all configuration decisions and deviations from defaults"
    ],
    outputs: [
      "Tool configuration documentation with control mappings",
      "Integration architecture and data flow diagrams",
      "Operational runbooks for tool-supported controls",
      "Configuration baselines and change control procedures"
    ],
    resources: [
      { title: "Tool Configuration Checklist", isTemplate: true },
      { title: "Integration Documentation Template", isTemplate: true }
    ],
    contentTypes: ["exercise", "documentation", "template"],
    duration: "6-8 hours",
    learningObjectives: [
      "Configure tools to meet control requirements",
      "Integrate with enterprise systems",
      "Establish operational procedures"
    ],
    deliverables: [
      "Complete configuration documentation",
      "Integration architecture diagrams",
      "Operational runbooks and procedures"
    ]
  },
  {
    number: 5,
    title: "Collect and Organize Evidence",
    description: "Extract reports, logs, and artifacts from your tool that demonstrate control effectiveness and organize them for assessors.",
    actions: [
      "Configure automated report generation for control evidence",
      "Extract access review reports, audit logs, vulnerability scan results, incident records",
      "Create dashboard views showing control metrics and KPIs",
      "Organize evidence by control family and specific control IDs",
      "Establish evidence retention and archival procedures"
    ],
    outputs: [
      "Automated evidence collection workflows",
      "Evidence repository organized by NIST 800-53 control families",
      "Dashboard templates showing control effectiveness metrics",
      "Evidence retention schedule aligned to AU-11 and organizational requirements"
    ],
    resources: [
      { title: "Evidence Collection Automation Guide", isTemplate: true }
    ],
    contentTypes: ["exercise", "documentation", "template"],
    duration: "4-5 hours",
    learningObjectives: [
      "Automate evidence collection",
      "Organize evidence by control family",
      "Establish retention procedures"
    ],
    deliverables: [
      "Automated evidence workflows",
      "Organized evidence repository",
      "Evidence retention schedule"
    ]
  },
  {
    number: 6,
    title: "Support Internal and External Assessments",
    description: "Provide tool access, reports, and demonstrations to assessors and respond to questions about tool capabilities and configurations.",
    actions: [
      "Grant assessor read-only access to relevant tool interfaces and reports",
      "Prepare pre-packaged evidence reports for common control testing scenarios",
      "Demonstrate tool capabilities during control walkthroughs",
      "Provide technical explanations of how the tool satisfies control requirements",
      "Respond to assessor questions about configurations, integrations, and limitations",
      "Document any compensating controls where tool capabilities have gaps"
    ],
    outputs: [
      "Assessor evidence packages with tool reports and screenshots",
      "Tool demonstration scripts and recorded walkthroughs",
      "Technical response documentation addressing assessor questions",
      "Gap and compensating control documentation"
    ],
    resources: [
      { title: "Assessor Evidence Package Template", isTemplate: true }
    ],
    contentTypes: ["exercise", "documentation", "template"],
    duration: "4-5 hours",
    learningObjectives: [
      "Prepare for assessor interactions",
      "Create effective evidence packages",
      "Document compensating controls"
    ],
    deliverables: [
      "Assessor evidence packages",
      "Demonstration materials",
      "Compensating control documentation"
    ]
  },
  {
    number: 7,
    title: "Continuous Monitoring and Tool Optimization",
    description: "Maintain tool effectiveness through continuous monitoring, tuning, upgrades, and alignment with evolving control requirements.",
    actions: [
      "Establish tool health monitoring and performance metrics",
      "Tune detection rules, policies, and alerts to reduce false positives",
      "Track and remediate tool coverage gaps",
      "Plan and execute tool upgrades aligned to control requirements",
      "Stay current with vendor best practices and NIST 800-53 updates",
      "Report tool metrics and control effectiveness to leadership"
    ],
    outputs: [
      "Tool health dashboards and performance metrics",
      "Continuous improvement roadmap for tool capabilities",
      "Tool metrics reporting aligned to control objectives",
      "Upgrade and enhancement plans with control impact analysis"
    ],
    resources: [
      { title: "Tool Performance Metrics Template", isTemplate: true }
    ],
    contentTypes: ["exercise", "documentation", "interactive"],
    duration: "4-5 hours",
    learningObjectives: [
      "Monitor tool health and effectiveness",
      "Optimize tool performance",
      "Plan strategic enhancements"
    ],
    deliverables: [
      "Tool health monitoring dashboards",
      "Optimization and tuning documentation",
      "Strategic enhancement roadmap"
    ]
  }
];
