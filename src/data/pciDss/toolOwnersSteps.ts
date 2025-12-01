import { LearningStep } from "@/components/shared/StepSection";

export const pciDssToolOwnersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand PCI DSS Technical Requirements and System Scope",
    description: "Learn technical requirements applicable to systems you own and determine which systems are in-scope for PCI DSS.",
    actions: [
      "Identify which of your systems store, process, or transmit cardholder data",
      "Review PCI DSS Requirements 1-2 (network security), 4 (encryption), 5-6 (malware/vulnerabilities)",
      "Understand system components: servers, network devices, databases, applications",
      "Document system connections to/from the CDE",
      "Determine if systems can be segmented out of scope through network isolation"
    ],
    outputs: [
      "System inventory with CDE scope determination",
      "Network connectivity diagrams showing CDE boundaries",
      "Gap analysis of current vs. required configurations"
    ],
    resources: [
      { title: "System Scoping Worksheet", isTemplate: true },
      { title: "Technical Requirements Quick Reference", isTemplate: true }
    ]
  },
  {
    number: 2,
    title: "Implement and Configure Network Security Controls (Req 1-2)",
    description: "Deploy and configure firewalls, routers, and secure system configurations protecting the CDE.",
    actions: [
      "Configure firewalls/routers with deny-all, permit-by-exception rulesets",
      "Document all firewall rules and conduct bi-annual reviews",
      "Implement stateful inspection and restrict inbound/outbound traffic to necessary ports",
      "Remove vendor defaults: change default passwords, disable default accounts",
      "Harden system configurations: disable unnecessary services, protocols, daemons",
      "Document and maintain configuration standards for all owned systems"
    ],
    outputs: [
      "Firewall configuration documentation with justified rules",
      "System hardening baselines and applied configurations",
      "Configuration change management procedures",
      "Bi-annual firewall rule review evidence"
    ],
    resources: [
      { title: "Firewall Configuration Guide", isTemplate: true },
      { title: "System Hardening Checklist", isTemplate: true }
    ]
  },
  {
    number: 3,
    title: "Implement Data Protection and Encryption Controls (Req 3-4)",
    description: "Deploy encryption for stored and transmitted cardholder data on systems you manage.",
    actions: [
      "Implement encryption for cardholder data at rest (disk-level, database, or file-level)",
      "Configure systems to never store sensitive authentication data (CVV, PIN, track data) post-auth",
      "Implement PAN masking in applications and logs (show first 6, last 4 digits max)",
      "Configure TLS 1.2+ for all cardholder data transmission (web servers, APIs, databases)",
      "Disable weak protocols and ciphers (SSL, TLS 1.0/1.1, weak cipher suites)",
      "Secure cryptographic keys with strong access controls and rotation"
    ],
    outputs: [
      "Encryption implementation documentation (algorithms, key lengths, methods)",
      "TLS configuration on web servers and applications",
      "Key management procedures and access control documentation",
      "PAN masking verification in all interfaces and logs"
    ],
    resources: [
      { title: "Encryption Implementation Guide", isTemplate: true },
      { title: "TLS Configuration Best Practices", isTemplate: true }
    ]
  },
  {
    number: 4,
    title: "Deploy Malware Protection and Vulnerability Management (Req 5-6)",
    description: "Implement anti-malware solutions and vulnerability scanning on your systems.",
    actions: [
      "Deploy anti-malware on all systems commonly affected by malware",
      "Configure automatic definition updates and regular scans",
      "Enable malware detection, removal, and alerting",
      "Implement vulnerability scanning process for your systems",
      "Apply critical security patches within one month of release",
      "For web applications: deploy WAF or conduct code reviews",
      "Participate in change control process for all system changes"
    ],
    outputs: [
      "Anti-malware deployment evidence and scan logs",
      "Vulnerability scan results for owned systems",
      "Patch management records showing timely patching",
      "Change control documentation for system modifications"
    ],
    resources: [
      { title: "Anti-Malware Deployment Guide", isTemplate: true },
      { title: "Patch Management Procedures", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Implement Access Controls and Authentication (Req 7-8)",
    description: "Configure access controls, MFA, and authentication mechanisms on your systems.",
    actions: [
      "Configure role-based access control (RBAC) limiting access to cardholder data",
      "Implement deny-all, permit-by-exception access rules",
      "Deploy multi-factor authentication (MFA) for all administrative and remote access to CDE",
      "Configure strong password policies (12+ characters, complexity, account lockout)",
      "Disable accounts after 90 days of inactivity",
      "Configure session timeouts (15 minutes of inactivity)",
      "Secure authentication credentials in transit and storage (hashed, encrypted)"
    ],
    outputs: [
      "Access control matrix for systems showing role-based permissions",
      "MFA implementation documentation",
      "Password policy configurations on systems",
      "Session timeout and account lockout settings verification"
    ],
    resources: [
      { title: "Access Control Implementation Template", isTemplate: true },
      { title: "MFA Deployment Guide", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Implement Logging, Monitoring, and Security Testing (Req 10-11)",
    description: "Configure comprehensive logging, deploy monitoring tools, and support security testing activities.",
    actions: [
      "Enable audit logging on all systems for user actions, authentication, and system events",
      "Centralize logs to protected log management system",
      "Configure log protection to prevent tampering or deletion",
      "Support quarterly internal vulnerability scans of your systems",
      "Support annual penetration testing activities",
      "Deploy file integrity monitoring (FIM) on critical system files",
      "Deploy intrusion detection/prevention (IDS/IPS) if owning network security tools"
    ],
    outputs: [
      "Audit logging configuration on all systems",
      "Centralized logging architecture documentation",
      "Vulnerability scan reports for owned systems",
      "FIM configuration and alerting setup",
      "IDS/IPS deployment and tuning documentation (if applicable)"
    ],
    resources: [
      { title: "Logging Configuration Guide", isTemplate: true },
      { title: "FIM Implementation Template", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Support Compliance Validation and Maintain Secure Systems",
    description: "Provide evidence for assessments, participate in remediation, and maintain ongoing compliance.",
    actions: [
      "Organize technical evidence for SAQ or QSA assessment (configs, logs, scan results)",
      "Provide system demonstrations and answer technical questions during assessments",
      "Address findings from vulnerability scans and penetration tests",
      "Participate in remediation planning and track corrective actions",
      "Maintain system security through ongoing patching, configuration management, and monitoring",
      "Support quarterly ASV scans and annual compliance validation",
      "Document and justify any compensating controls for requirements not directly met"
    ],
    outputs: [
      "Technical evidence packages organized by requirement",
      "Vulnerability remediation tracking and completion evidence",
      "System maintenance logs (patching, configuration changes)",
      "Compensating control documentation (if applicable)",
      "Ongoing compliance evidence for auditors"
    ],
    resources: [
      { title: "Technical Evidence Collection Checklist", isTemplate: true },
      { title: "Compensating Controls Template", isTemplate: true }
    ]
  }
];