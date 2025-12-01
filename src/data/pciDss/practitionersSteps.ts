import { LearningStep } from "@/components/shared/StepSection";

export const pciDssPractitionersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand PCI DSS Structure and Scope the Cardholder Data Environment",
    description: "Learn the 12 PCI DSS requirements, 6 control objectives, and accurately define your Cardholder Data Environment (CDE).",
    actions: [
      "Review PCI DSS v4.0 structure: 12 requirements across 6 control objectives",
      "Understand what constitutes cardholder data (PAN, cardholder name, expiration, service code)",
      "Identify all systems that store, process, or transmit cardholder data",
      "Define CDE boundaries: in-scope systems, connected systems, and out-of-scope systems",
      "Conduct data flow mapping to trace cardholder data through your environment"
    ],
    outputs: [
      "CDE scope documentation with network diagrams",
      "Data flow diagrams showing cardholder data movement",
      "Asset inventory of all in-scope systems and components"
    ],
    resources: [
      { title: "PCI DSS v4.0 Standard", url: "https://www.pcisecuritystandards.org", isTemplate: false },
      { title: "CDE Scoping Worksheet", isTemplate: true }
    ]
  },
  {
    number: 2,
    title: "Implement Network Security Controls (Requirements 1-2)",
    description: "Deploy firewalls, routers, and secure configurations to protect the CDE from unauthorized access.",
    actions: [
      "Install and configure firewalls to restrict traffic to/from CDE (Req 1)",
      "Document firewall rulesets and conduct bi-annual reviews",
      "Implement network segmentation separating CDE from other networks",
      "Change all vendor default passwords and remove unnecessary default accounts (Req 2)",
      "Develop and apply secure configuration standards for all system components",
      "Disable unnecessary services, protocols, and accounts on all systems"
    ],
    outputs: [
      "Firewall configuration standards and ruleset documentation",
      "Network segmentation architecture with DMZs defined",
      "Secure configuration baselines for servers, workstations, and network devices",
      "Vendor default removal verification checklist"
    ],
    resources: [
      { title: "Network Segmentation Guide", isTemplate: true },
      { title: "Secure Configuration Templates", isTemplate: true }
    ]
  },
  {
    number: 3,
    title: "Protect Stored and Transmitted Cardholder Data (Requirements 3-4)",
    description: "Implement encryption, tokenization, and data protection controls for cardholder data at rest and in transit.",
    actions: [
      "Minimize cardholder data storage (only store if business-necessary) (Req 3)",
      "Never store sensitive authentication data (SAD) after authorization (CVV, PIN, full track data)",
      "Mask PAN when displayed (show first 6 and last 4 digits maximum)",
      "Implement strong cryptography for stored PAN (disk/database/file-level encryption)",
      "Use TLS 1.2+ for all cardholder data transmission over public networks (Req 4)",
      "Secure cryptographic keys with access controls and rotation procedures"
    ],
    outputs: [
      "Data retention and disposal policy with implementation procedures",
      "Encryption implementation documentation (algorithms, key lengths)",
      "Key management procedures and access controls",
      "PAN masking implementation in all user interfaces and reports"
    ],
    resources: [
      { title: "Data Protection Implementation Guide", isTemplate: true },
      { title: "Encryption and Key Management Template", isTemplate: true }
    ]
  },
  {
    number: 4,
    title: "Maintain Vulnerability Management Program (Requirements 5-6)",
    description: "Deploy anti-malware solutions, manage vulnerabilities, and implement secure development practices.",
    actions: [
      "Deploy anti-malware software on all systems commonly affected by malware (Req 5)",
      "Keep anti-malware definitions current and conduct regular scans",
      "Identify security vulnerabilities through reputable sources (NVD, vendor advisories) (Req 6)",
      "Install critical security patches within one month of release",
      "Protect public-facing web applications with WAF or manual/automated code reviews",
      "Implement secure software development lifecycle if developing payment applications"
    ],
    outputs: [
      "Anti-malware deployment documentation and scan schedules",
      "Vulnerability management process with patch timelines",
      "Web application security controls (WAF rules or code review results)",
      "Secure development standards if applicable"
    ],
    resources: [
      { title: "Vulnerability Management Process Template", isTemplate: true },
      { title: "Patch Management Procedures", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Implement Strong Access Controls (Requirements 7-9)",
    description: "Restrict access to cardholder data through least privilege, authentication, and physical security controls.",
    actions: [
      "Restrict access to cardholder data by business need-to-know (Req 7)",
      "Assign unique IDs to each person with computer access (Req 8)",
      "Implement multi-factor authentication (MFA) for all access into CDE",
      "Enforce strong password policies (12+ character minimum, complexity, no forced periodic changes)",
      "Implement physical access controls to protect areas housing CDE systems (Req 9)",
      "Control and log visitor access with escorts required",
      "Securely destroy media containing cardholder data when no longer needed"
    ],
    outputs: [
      "Access control matrix documenting roles and data access needs",
      "MFA implementation documentation for all CDE access points",
      "Password policy and authentication standards",
      "Physical security controls documentation (badges, cameras, logs)",
      "Media destruction procedures and logs"
    ],
    resources: [
      { title: "Access Control Implementation Guide", isTemplate: true },
      { title: "Physical Security Checklist", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Implement Logging, Monitoring, and Testing (Requirements 10-11)",
    description: "Deploy comprehensive logging, conduct vulnerability scans, and perform penetration testing.",
    actions: [
      "Implement audit trails for all access to system components and cardholder data (Req 10)",
      "Log user access, actions taken, authentication attempts, and system events",
      "Protect logs from unauthorized modification and retain for 12+ months",
      "Review logs daily for anomalies and security events",
      "Conduct quarterly internal and external vulnerability scans (Req 11)",
      "Engage PCI SSC Approved Scanning Vendor (ASV) for quarterly external scans",
      "Conduct annual penetration testing and after significant infrastructure changes",
      "Deploy intrusion detection/prevention systems (IDS/IPS) and file integrity monitoring (FIM)"
    ],
    outputs: [
      "Logging architecture with centralized log collection",
      "Log review procedures and daily review evidence",
      "Quarterly ASV scan reports with passing results",
      "Internal vulnerability scan results",
      "Annual penetration test report",
      "IDS/IPS and FIM deployment documentation"
    ],
    resources: [
      { title: "Logging and Monitoring Guide", isTemplate: true },
      { title: "Vulnerability Scanning Procedures", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Establish Security Policies and Maintain Compliance (Requirement 12)",
    description: "Develop comprehensive security policies, conduct awareness training, and maintain ongoing PCI DSS compliance.",
    actions: [
      "Establish, publish, and maintain information security policy (Req 12)",
      "Conduct annual risk assessments identifying threats to cardholder data",
      "Implement security awareness training for all personnel annually and upon hire",
      "Conduct background checks for personnel with CDE access",
      "Establish and test incident response plan",
      "Manage third-party service providers with due diligence and ongoing monitoring",
      "Complete annual PCI DSS validation (SAQ or QSA assessment) and submit to acquirer",
      "Conduct quarterly ASV scans and address any vulnerabilities"
    ],
    outputs: [
      "Information security policy suite (12+ policies)",
      "Annual risk assessment report",
      "Security awareness training records and completion tracking",
      "Incident response plan with test results",
      "Service provider management program",
      "Completed SAQ or Report on Compliance (RoC) from QSA",
      "Attestation of Compliance (AoC) submitted to acquirer"
    ],
    resources: [
      { title: "PCI DSS Policy Templates", isTemplate: true },
      { title: "Security Awareness Training Program", isTemplate: true },
      { title: "Incident Response Plan Template", isTemplate: true },
      { title: "SAQ Completion Guide", isTemplate: true }
    ]
  }
];