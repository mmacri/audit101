import { LearningStep } from "@/components/shared/StepSection";

export const toolOwnersSteps: LearningStep[] = [
  {
    number: 1,
    title: "EACMS and PACS System Overview",
    description: "Learn how EACMS (Electronic Access Control or Monitoring Systems) and PACS (Physical Access Control Systems) support BES Cyber Systems.",
    actions: [
      "Identify systems classified as EACMS or PACS",
      "Understand applicable CIP requirements for your systems",
      "Document system architecture and dependencies",
      "Establish ownership and accountability for compliance",
    ],
    outputs: [
      "EACMS/PACS inventory and classification",
      "System architecture diagrams",
      "Ownership and responsibility documentation",
    ],
  },
  {
    number: 2,
    title: "Access Control System Configuration",
    description: "Implement access controls, authentication mechanisms, and logging for EACMS and PACS.",
    actions: [
      "Configure role-based access controls",
      "Implement multi-factor authentication where required",
      "Enable comprehensive logging and alerting",
      "Document access control configurations",
    ],
    outputs: [
      "Access control configuration documentation",
      "Authentication and logging setup records",
      "Role definitions and permission matrices",
    ],
  },
  {
    number: 3,
    title: "Change Management Integration",
    description: "Implement change management processes that meet CIP-010 requirements for your systems.",
    actions: [
      "Integrate with organizational change management workflows",
      "Document baseline configurations for EACMS/PACS",
      "Test changes before deployment to production",
      "Maintain change records and approval documentation",
    ],
    outputs: [
      "Baseline configuration documentation",
      "Change management procedure for your systems",
      "Change approval and testing records",
    ],
  },
  {
    number: 4,
    title: "Security Monitoring and Logging",
    description: "Configure logging, monitoring, and alerting to detect and respond to security events.",
    actions: [
      "Enable security event logging per CIP-007",
      "Configure log retention for at least 90 days",
      "Implement alerting for critical security events",
      "Integrate with SIEM or security monitoring tools",
    ],
    outputs: [
      "Logging and monitoring configuration",
      "Security event alerting procedures",
      "Log retention and review documentation",
    ],
  },
  {
    number: 5,
    title: "Patch Management and Vulnerability Assessment",
    description: "Implement patch management and vulnerability assessment processes for your systems.",
    actions: [
      "Track security patches and updates from vendors",
      "Apply patches within 35 days or document compensating measures",
      "Participate in vulnerability assessments",
      "Remediate identified vulnerabilities",
    ],
    outputs: [
      "Patch management records",
      "Vulnerability assessment and remediation documentation",
      "Compensating measures documentation",
    ],
  },
  {
    number: 6,
    title: "Incident Response Support",
    description: "Prepare your systems to support incident response and recovery activities.",
    actions: [
      "Understand your role in incident response plans",
      "Configure systems for rapid incident detection",
      "Document system recovery procedures",
      "Participate in incident response drills",
    ],
    outputs: [
      "System-specific incident response procedures",
      "Recovery and restoration documentation",
      "Drill participation records",
    ],
  },
  {
    number: 7,
    title: "Audit Preparation and Evidence Management",
    description: "Collect and organize evidence demonstrating compliance of your systems.",
    actions: [
      "Identify evidence requirements for your systems",
      "Collect configuration exports and screenshots",
      "Organize access logs and change records",
      "Prepare system demonstrations for auditors",
    ],
    outputs: [
      "System evidence repository",
      "Audit preparation checklist for your systems",
      "Configuration and log exports",
    ],
  },
];
