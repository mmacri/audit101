import { LearningStep } from "@/components/shared/StepSection";

export const nistCsfToolOwnersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Map Your Tool to CSF Outcomes",
    description: "Understand how your security tools map to NIST CSF Functions, Categories, and Subcategories.",
    actions: [
      "For SIEM/logging tools: map to DE.CM (continuous monitoring), DE.AE (anomalies/events), DE.DP (detection processes)",
      "For IAM tools: map to PR.AC (identity management and access control)",
      "For vulnerability management: map to ID.RA (risk assessment), PR.IP (protective technology)",
      "For backup/DR tools: map to PR.IP (information protection processes), RC.RP (recovery planning)",
      "For EDR/endpoint: map to PR.PT (protective technology), DE.CM (continuous monitoring)",
      "Create detailed tool-to-CSF mapping showing which outcomes your system supports"
    ],
    outputs: [
      "Tool capability mapping to CSF Functions and Subcategories",
      "Understanding of your tool's role in CSF profile achievement"
    ],
    resources: [
      { title: "Tool-to-CSF Mapping Template", isTemplate: true }
    ]
  },
  {
    number: 2,
    title: "Assess Tool Coverage Against CSF Profile",
    description: "Evaluate your tool's current deployment and configuration against your organization's target CSF profile.",
    actions: [
      "Review your organization's current and target CSF profiles",
      "Identify which profile outcomes your tool should support",
      "Assess current tool coverage and identify gaps",
      "Document tool limitations and need for complementary controls",
      "Plan tool enhancements to better support CSF outcomes"
    ],
    outputs: [
      "Tool coverage assessment against CSF profile",
      "Gap analysis and enhancement roadmap"
    ],
    resources: [
      { title: "CSF Profile Gap Analysis Template", isTemplate: true }
    ]
  },
  {
    number: 3,
    title: "Configure Tool to Achieve CSF Outcomes",
    description: "Optimize tool configuration to fully implement CSF subcategory outcomes.",
    actions: [
      "Configure monitoring and detection capabilities (Detect function)",
      "Set up access controls and identity management (Protect function)",
      "Configure asset discovery and inventory (Identify function)",
      "Establish alerting and incident integration (Respond function)",
      "Configure backup and recovery capabilities (Recover function)",
      "Document how configuration settings achieve specific CSF outcomes"
    ],
    outputs: [
      "Tool configuration documentation mapped to CSF outcomes",
      "Configuration baselines supporting CSF profile",
      "Integration architecture with other CSF-supporting tools"
    ],
    resources: [
      { title: "CSF Configuration Checklist", isTemplate: true }
    ]
  },
  {
    number: 4,
    title: "Operationalize CSF Continuous Monitoring",
    description: "Establish workflows and dashboards showing CSF outcome achievement and tool contribution.",
    actions: [
      "Create dashboards mapping tool metrics to CSF outcomes",
      "Configure automated reporting showing profile achievement",
      "Establish workflows for CSF-related activities (detection, response, recovery)",
      "Set up data feeds to GRC or risk management platforms",
      "Document operational runbooks tied to CSF categories"
    ],
    outputs: [
      "CSF outcome dashboards",
      "Automated CSF profile reporting",
      "Operational procedures aligned to CSF"
    ],
    resources: [
      { title: "CSF Dashboard Template", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Collect Evidence for CSF Assessment",
    description: "Extract reports and artifacts demonstrating CSF outcome achievement from your tool.",
    actions: [
      "Configure reports showing asset inventories, vulnerabilities, risks (Identify)",
      "Extract access control reports, configuration baselines (Protect)",
      "Collect detection logs, monitoring reports, alerts (Detect)",
      "Gather incident response records and timelines (Respond)",
      "Collect backup and recovery test results (Recover)",
      "Organize evidence by CSF Function and Category"
    ],
    outputs: [
      "Evidence repository organized by CSF Function",
      "Automated evidence collection workflows"
    ],
    resources: [
      { title: "CSF Evidence Collection Guide", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Support CSF Assessments and Profile Reviews",
    description: "Provide tool data and demonstrations during CSF profile assessments.",
    actions: [
      "Grant assessors access to CSF-related dashboards and reports",
      "Demonstrate tool capabilities supporting CSF outcomes",
      "Provide evidence packages for each assessed CSF subcategory",
      "Explain tool contribution to current and target profile achievement",
      "Address questions about tool limitations and compensating controls"
    ],
    outputs: [
      "Assessor evidence packages by CSF Function",
      "Tool demonstration materials",
      "Assessment support documentation"
    ],
    resources: [
      { title: "CSF Assessment Evidence Package", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Advance CSF Profile Achievement",
    description: "Continuously improve tool effectiveness and support advancement from current to target CSF profile.",
    actions: [
      "Track tool metrics tied to CSF profile gaps",
      "Plan tool enhancements supporting target profile outcomes",
      "Optimize tool performance and coverage",
      "Stay current with CSF 2.0 updates and implementation examples",
      "Report tool contribution to CSF profile progress to leadership"
    ],
    outputs: [
      "Tool optimization roadmap aligned to CSF profile",
      "CSF profile advancement metrics",
      "Tool contribution reporting"
    ],
    resources: [
      { title: "CSF Profile Advancement Tracker", isTemplate: true }
    ]
  }
];
