import { LearningStep } from "@/components/shared/StepSection";

export const toolOwnersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Inventory PHI Processing Systems",
    description: "Identify all systems, applications, and databases that create, receive, maintain, or transmit Protected Health Information. Document system boundaries and data flows.",
    actions: [
      "Create comprehensive inventory of all systems with PHI access",
      "Document ePHI data flows between systems and external entities",
      "Identify cloud services and third-party applications handling PHI",
      "Map business associate relationships and data sharing agreements",
    ],
    outputs: [
      "System inventory with PHI classification",
      "Data flow diagrams showing ePHI movement",
      "Business associate mapping document",
    ],
  },
  {
    number: 2,
    title: "Assess System Security Controls",
    description: "Evaluate existing security controls within your systems against HIPAA Security Rule requirements. Identify gaps in technical, administrative, and physical safeguards.",
    actions: [
      "Review access controls and user authentication mechanisms",
      "Assess audit logging and monitoring capabilities",
      "Evaluate encryption for data at rest and in transit",
      "Analyze integrity controls and backup/recovery procedures",
      "Document addressable specifications implementation decisions",
    ],
    outputs: [
      "Security controls assessment report",
      "Gap analysis against HIPAA requirements",
      "Addressable specifications decisions document",
    ],
  },
  {
    number: 3,
    title: "Implement System-Level Safeguards",
    description: "Deploy and configure HIPAA-required security controls within your systems. Ensure proper authentication, authorization, audit logging, and encryption capabilities.",
    actions: [
      "Configure role-based access controls aligned with minimum necessary principle",
      "Enable comprehensive audit logging for all PHI access and changes",
      "Implement encryption for ePHI at rest and in transit",
      "Deploy automatic session timeout and lockout mechanisms",
      "Establish system integrity monitoring and validation",
    ],
    outputs: [
      "System configuration documentation",
      "Access control matrix and role definitions",
      "Audit logging configuration and test results",
      "Encryption implementation documentation",
    ],
  },
  {
    number: 4,
    title: "Manage User Access and Privileges",
    description: "Establish processes for granting, reviewing, and revoking access to systems containing ePHI. Implement workforce clearance procedures and access recertification.",
    actions: [
      "Create access request and approval workflows",
      "Conduct quarterly access reviews and recertification",
      "Implement immediate termination procedures for departing staff",
      "Document emergency access procedures and monitoring",
      "Maintain audit trails of all access provisioning activities",
    ],
    outputs: [
      "Access management procedures",
      "Quarterly access review reports",
      "Emergency access procedures and logs",
    ],
  },
  {
    number: 5,
    title: "Monitor and Respond to Security Events",
    description: "Implement continuous monitoring of systems for security events and potential breaches. Establish incident detection and response procedures for your systems.",
    actions: [
      "Deploy security information and event management (SIEM) capabilities",
      "Configure alerts for suspicious access patterns and anomalies",
      "Establish incident response procedures for system-level events",
      "Conduct regular log reviews and security event analysis",
      "Document and report security incidents per organizational procedures",
    ],
    outputs: [
      "Security monitoring plan",
      "Alert configuration documentation",
      "Incident response playbooks",
      "Security event reports",
    ],
  },
  {
    number: 6,
    title: "Maintain System Documentation",
    description: "Document system configurations, security controls, access procedures, and maintenance activities. Ensure documentation supports compliance validation and audit readiness.",
    actions: [
      "Maintain current system security documentation",
      "Document all configuration changes and security updates",
      "Create and maintain system security plans",
      "Document business associate integrations and data flows",
      "Maintain evidence of security control implementation and testing",
    ],
    outputs: [
      "System security plan",
      "Configuration management documentation",
      "Change control records",
      "Compliance evidence repository",
    ],
  },
  {
    number: 7,
    title: "Support Audit and Assessment Activities",
    description: "Facilitate internal audits, risk assessments, and regulatory inspections. Provide evidence of security controls and respond to audit findings.",
    actions: [
      "Participate in annual HIPAA security risk assessments",
      "Provide system access and documentation to auditors",
      "Generate audit reports and access logs as requested",
      "Address audit findings and implement corrective actions",
      "Maintain audit evidence and compliance documentation",
    ],
    outputs: [
      "Audit support documentation",
      "System access logs and reports",
      "Corrective action plans",
      "Audit evidence packages",
    ],
  },
];
