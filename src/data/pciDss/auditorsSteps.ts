import { LearningStep } from "@/components/shared/StepSection";

export const pciDssAuditorsSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand PCI DSS Audit Methodology and Requirements",
    description: "Learn PCI DSS audit approach, validation methods, and how to assess compliance against all 12 requirements.",
    actions: [
      "Review PCI DSS v4.0: all 12 requirements and sub-requirements",
      "Understand validation methods: SAQs, QSA assessments, ASV scans",
      "Learn merchant levels and applicable validation requirements",
      "Study PCI DSS testing procedures for each requirement",
      "Understand compensating controls and when they're acceptable",
      "Review Report on Compliance (RoC) reporting template"
    ],
    outputs: [
      "PCI DSS requirements checklist with testing procedures",
      "SAQ types comparison and applicability guide",
      "Audit methodology documented",
      "Compensating controls evaluation criteria"
    ],
    resources: [
      { title: "PCI DSS v4.0 Standard and Testing Procedures", url: "https://www.pcisecuritystandards.org", isTemplate: false },
      { title: "Internal PCI Audit Program Template", isTemplate: true }
    ]
  },
  {
    number: 2,
    title: "Plan and Scope PCI DSS Internal Audits",
    description: "Define audit scope, identify cardholder data flows, and develop risk-based audit plans.",
    actions: [
      "Validate CDE scope definition and boundaries",
      "Conduct data flow analysis to trace cardholder data",
      "Identify all system components in scope (servers, applications, network devices)",
      "Determine connected and security-impacting systems",
      "Assess network segmentation effectiveness",
      "Develop audit plan covering all 12 requirements with sampling strategy"
    ],
    outputs: [
      "CDE scope validation with network diagrams",
      "Data flow maps showing cardholder data paths",
      "System inventory with scope determinations",
      "Risk-based internal audit plan",
      "Sampling methodology for testing"
    ],
    resources: [
      { title: "CDE Scoping and Validation Guide", isTemplate: true },
      { title: "PCI DSS Audit Plan Template", isTemplate: true }
    ]
  },
  {
    number: 3,
    title: "Audit Network Security and System Configuration (Req 1-2)",
    description: "Assess firewall configurations, network segmentation, and secure system configurations.",
    actions: [
      "Review firewall and router configurations against PCI DSS requirements",
      "Test firewall rulesets: verify deny-all, permit-by-exception approach",
      "Validate network segmentation isolating CDE from untrusted networks",
      "Verify vendor defaults removed (passwords, accounts, configurations)",
      "Review secure configuration standards for all system components",
      "Test sample of systems for hardening (disabled services, unnecessary accounts removed)"
    ],
    outputs: [
      "Firewall configuration review findings",
      "Network segmentation testing results",
      "System hardening verification sample results",
      "Vendor default removal verification evidence"
    ],
    resources: [
      { title: "Firewall Review Checklist", isTemplate: true },
      { title: "System Hardening Audit Procedures", isTemplate: true }
    ]
  },
  {
    number: 4,
    title: "Audit Data Protection and Encryption Controls (Req 3-4)",
    description: "Verify cardholder data protection, encryption implementation, and data handling practices.",
    actions: [
      "Review data retention policies and verify minimal data storage",
      "Verify sensitive authentication data (SAD) is never stored post-authorization",
      "Test PAN masking in applications, logs, and user interfaces",
      "Verify strong cryptography for stored cardholder data",
      "Test TLS 1.2+ usage for transmission over public networks",
      "Review cryptographic key management procedures and access controls",
      "Validate no cardholder data sent via end-user messaging (email, IM)"
    ],
    outputs: [
      "Data storage validation findings",
      "SAD storage prohibition verification",
      "Encryption implementation assessment",
      "TLS configuration testing results",
      "Key management audit findings"
    ],
    resources: [
      { title: "Data Protection Audit Checklist", isTemplate: true },
      { title: "Encryption Testing Procedures", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Audit Vulnerability Management and Access Controls (Req 5-9)",
    description: "Assess malware protection, vulnerability management, access controls, authentication, and physical security.",
    actions: [
      "Verify anti-malware deployed on applicable systems with current definitions",
      "Review vulnerability management: scan frequency, patching timelines, remediation tracking",
      "Verify quarterly internal/external vulnerability scans and passing ASV results",
      "Audit access controls: need-to-know restrictions, role-based access, bi-annual reviews",
      "Test authentication: unique IDs, MFA implementation, password policies",
      "Validate account management: disable inactive accounts, lockout policies, session timeouts",
      "Inspect physical security: facility entry controls, visitor logs, media security"
    ],
    outputs: [
      "Anti-malware deployment verification",
      "Vulnerability management process assessment",
      "Access control testing results (samples)",
      "Authentication mechanisms verification",
      "Physical security controls inspection findings"
    ],
    resources: [
      { title: "Vulnerability Management Audit Guide", isTemplate: true },
      { title: "Access Control Testing Procedures", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Audit Logging, Monitoring, and Testing Controls (Req 10-11)",
    description: "Verify audit logging, log monitoring, security testing, and intrusion detection.",
    actions: [
      "Review audit trail implementation for all system components",
      "Test log content: user access, actions, authentication, system events captured",
      "Verify logs protected from tampering and retained for 12+ months",
      "Validate daily log review process and evidence",
      "Review time synchronization across all systems",
      "Verify quarterly internal/external vulnerability scans conducted and passed",
      "Review annual penetration test scope, findings, and remediation",
      "Validate IDS/IPS deployment and alerting",
      "Verify file integrity monitoring (FIM) on critical files"
    ],
    outputs: [
      "Logging implementation assessment",
      "Log review process verification",
      "Vulnerability scan validation (quarterly)",
      "Penetration test review",
      "IDS/IPS and FIM deployment verification"
    ],
    resources: [
      { title: "Logging and Monitoring Audit Checklist", isTemplate: true },
      { title: "Security Testing Validation Guide", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Audit Policies, Training, and Prepare Compliance Reports (Req 12)",
    description: "Review security policies, risk assessments, training, service providers, and compile audit findings.",
    actions: [
      "Review information security policy suite for completeness",
      "Verify annual risk assessment conducted and documented",
      "Validate security awareness training delivered to all personnel annually",
      "Verify background checks conducted for personnel with CDE access",
      "Review incident response plan and test results",
      "Audit service provider management: inventory, PCI DSS compliance verification, contracts",
      "Compile audit findings into internal report or support QSA assessment",
      "Classify findings by severity and provide remediation recommendations",
      "Track corrective actions and verify implementation"
    ],
    outputs: [
      "Policy review findings",
      "Risk assessment validation",
      "Training and background check verification",
      "Service provider compliance audit results",
      "Comprehensive internal audit report with findings",
      "Remediation tracking and verification",
      "SAQ completion support or QSA coordination assistance"
    ],
    resources: [
      { title: "Policy Review Checklist", isTemplate: true },
      { title: "Service Provider Audit Procedures", isTemplate: true },
      { title: "Internal Audit Report Template", isTemplate: true },
      { title: "SAQ Support Guidance", isTemplate: true }
    ]
  }
];