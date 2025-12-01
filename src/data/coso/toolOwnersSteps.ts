import { LearningStep } from "@/components/shared/StepSection";

export const toolOwnersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Inventory Systems Supporting Internal Control",
    description: "Identify all applications, databases, and IT systems that support or execute internal control activities. Document system boundaries, interfaces, and control dependencies.",
    actions: [
      "Create comprehensive inventory of control-relevant systems",
      "Document automated controls within each system",
      "Map system interfaces and data flows",
      "Identify system owners and control responsibilities",
    ],
    outputs: [
      "System inventory with control mappings",
      "System interface documentation",
      "Control responsibility matrix",
    ],
  },
  {
    number: 2,
    title: "Design and Implement IT General Controls",
    description: "Establish IT General Controls (ITGCs) supporting application controls: access management, change management, computer operations, and system development.",
    actions: [
      "Implement logical access controls and segregation of duties",
      "Establish change management procedures with testing and approvals",
      "Deploy data backup and recovery procedures",
      "Implement job scheduling and batch processing controls",
      "Establish system monitoring and incident response",
    ],
    outputs: [
      "ITGC policies and procedures",
      "Change management documentation",
      "Backup and recovery procedures",
      "Access control matrices",
    ],
  },
  {
    number: 3,
    title: "Configure Application-Level Controls",
    description: "Implement automated controls within applications including validations, calculations, interfaces, and reports supporting business processes.",
    actions: [
      "Configure input validation and edit checks",
      "Implement automated calculations and processing logic",
      "Establish interface controls for data transmission",
      "Deploy automated reconciliations and exception reporting",
      "Document system-enforced segregation of duties",
    ],
    outputs: [
      "Application control configuration documentation",
      "Validation rules and edit check specifications",
      "Interface control documentation",
    ],
  },
  {
    number: 4,
    title: "Manage System Access and Authorization",
    description: "Implement role-based access controls aligned with segregation of duties requirements. Conduct regular access reviews and certifications.",
    actions: [
      "Define roles and access matrices based on job functions",
      "Implement least privilege and need-to-know principles",
      "Conduct quarterly access reviews and recertification",
      "Monitor privileged access and administrative activities",
      "Establish timely provisioning and deprovisioning procedures",
    ],
    outputs: [
      "Role-based access control matrices",
      "Quarterly access review reports",
      "Provisioning and deprovisioning procedures",
    ],
  },
  {
    number: 5,
    title: "Monitor System Controls and Performance",
    description: "Implement continuous monitoring of automated controls. Establish alerting for control failures and performance degradation.",
    actions: [
      "Deploy automated control monitoring and alerting",
      "Monitor system availability and performance metrics",
      "Review system logs and access patterns",
      "Investigate and resolve control exceptions",
      "Report control failures and incidents to management",
    ],
    outputs: [
      "Control monitoring dashboards",
      "Exception reports and resolution documentation",
      "Incident reports for control failures",
    ],
  },
  {
    number: 6,
    title: "Maintain Control Documentation",
    description: "Document system controls, configurations, and procedures. Maintain evidence supporting control design and operating effectiveness.",
    actions: [
      "Create and maintain system control matrices",
      "Document control configurations and parameters",
      "Maintain change logs and version control",
      "Establish standard operating procedures for system controls",
      "Organize audit evidence and control testing documentation",
    ],
    outputs: [
      "System control matrices",
      "Configuration documentation",
      "Standard operating procedures",
      "Audit evidence repository",
    ],
  },
  {
    number: 7,
    title: "Support Control Testing and Audits",
    description: "Facilitate internal control testing and external audits. Provide system access, documentation, and evidence of control effectiveness.",
    actions: [
      "Participate in control walkthroughs and testing",
      "Generate audit reports and control evidence",
      "Provide system access to auditors as appropriate",
      "Address audit findings and implement system control enhancements",
      "Maintain audit trail and testing documentation",
    ],
    outputs: [
      "Control walkthrough documentation",
      "Audit reports and evidence packages",
      "Remediation plans for audit findings",
    ],
  },
];
