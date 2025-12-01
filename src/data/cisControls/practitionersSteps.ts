import { LearningStep } from "@/components/shared/StepSection";

export const cisControlsPractitionersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand CIS Controls v8 and Your Role",
    description: "Learn the 18 CIS Controls, their prioritization (Implementation Groups), and how practitioners implement safeguards across assets, data, and infrastructure.",
    actions: [
      "Review the 18 CIS Controls and their focus areas (asset management, data protection, secure configuration, vulnerability management, etc.)",
      "Understand Implementation Groups (IG1, IG2, IG3) and how they prioritize safeguards",
      "Identify which controls and safeguards are most relevant to your technical responsibilities",
      "Learn the relationship between CIS Controls and other frameworks (NIST, ISO, etc.)"
    ],
    outputs: [
      "Personal notes on CIS Controls structure and prioritization",
      "List of controls most relevant to your role"
    ],
    resources: [
      { title: "CIS Controls v8 Overview", url: "https://www.cisecurity.org/controls/cis-controls-list", isTemplate: false },
      { title: "Implementation Group Quick Reference", isTemplate: true }
    ]
  },
  {
    number: 2,
    title: "Inventory and Manage Assets",
    description: "Implement CIS Controls 1 & 2 by creating and maintaining accurate inventories of enterprise hardware and software assets.",
    actions: [
      "Deploy asset discovery tools to identify all hardware (desktops, laptops, servers, network devices, IoT)",
      "Inventory all software applications and track versions",
      "Implement automated asset inventory maintenance",
      "Tag assets with ownership, business function, and criticality",
      "Remove or quarantine unauthorized hardware and software",
      "Establish asset management procedures for adds/moves/changes"
    ],
    outputs: [
      "Complete hardware asset inventory with owners and locations",
      "Complete software inventory with versions and licenses",
      "Unauthorized asset reports and remediation tracking",
      "Asset management procedures and runbooks"
    ],
    resources: [
      { title: "Asset Inventory Template", isTemplate: true },
      { title: "CIS Control 1 & 2 Checklist", isTemplate: true }
    ]
  },
  {
    number: 3,
    title: "Protect Data and Implement Secure Configurations",
    description: "Implement CIS Controls 3 & 4 by classifying data, implementing encryption, and establishing secure configuration baselines.",
    actions: [
      "Classify data based on sensitivity (public, internal, confidential, restricted)",
      "Implement encryption for data at rest and in transit",
      "Deploy data loss prevention (DLP) and access controls",
      "Create secure configuration baselines for servers, workstations, network devices",
      "Harden systems by disabling unnecessary services and closing unused ports",
      "Document and enforce configuration standards"
    ],
    outputs: [
      "Data classification policy and inventory",
      "Encryption implementation documentation",
      "Secure configuration baselines for all asset types",
      "Hardening checklists and validation reports"
    ],
    resources: [
      { title: "Secure Configuration Baseline Template", isTemplate: true },
      { title: "CIS Benchmarks", url: "https://www.cisecurity.org/cis-benchmarks", isTemplate: false }
    ]
  },
  {
    number: 4,
    title: "Manage Access and Accounts",
    description: "Implement CIS Controls 5 & 6 by managing account lifecycle, enforcing least privilege, and controlling access to assets and data.",
    actions: [
      "Implement account provisioning and deprovisioning procedures",
      "Enforce multi-factor authentication (MFA) for all users",
      "Implement least privilege and role-based access control",
      "Conduct quarterly access reviews and remove unnecessary privileges",
      "Manage privileged accounts with enhanced controls",
      "Monitor and log all authentication events"
    ],
    outputs: [
      "Account management procedures and workflows",
      "MFA implementation documentation",
      "Access control matrix with role definitions",
      "Quarterly access review artifacts"
    ],
    resources: [
      { title: "Access Control Matrix Template", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Manage Vulnerabilities and Logs",
    description: "Implement CIS Controls 7 & 8 by scanning for vulnerabilities, patching systems, and collecting audit logs.",
    actions: [
      "Deploy vulnerability scanning tools and run regular scans",
      "Establish patch management procedures with SLA-based remediation",
      "Prioritize vulnerabilities based on risk and exploitability",
      "Deploy centralized logging infrastructure (SIEM or log aggregator)",
      "Configure systems to generate and forward security logs",
      "Implement log retention and protection controls"
    ],
    outputs: [
      "Vulnerability scan reports and remediation tracking",
      "Patch management procedures and compliance reports",
      "Centralized logging architecture documentation",
      "Log collection and retention procedures"
    ],
    resources: [
      { title: "Vulnerability Management Workflow", isTemplate: true },
      { title: "Logging Configuration Guide", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Implement Detection and Response Capabilities",
    description: "Implement CIS Controls 9-13 for email/web security, malware defense, data recovery, network monitoring, and security awareness.",
    actions: [
      "Deploy email security controls (spam filters, anti-phishing, DMARC/SPF/DKIM)",
      "Implement web browser protections and content filtering",
      "Deploy endpoint detection and response (EDR) and malware defenses",
      "Establish backup and recovery procedures with regular testing",
      "Implement network monitoring and intrusion detection",
      "Deploy security awareness training for all personnel"
    ],
    outputs: [
      "Email and web security implementation documentation",
      "Malware defense and EDR deployment documentation",
      "Backup and recovery procedures with test results",
      "Network monitoring architecture and rule sets",
      "Security awareness training records"
    ],
    resources: [
      { title: "Incident Detection Playbook", isTemplate: true },
      { title: "Backup and Recovery Checklist", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Maintain and Continuously Improve",
    description: "Implement remaining CIS Controls (14-18) and establish continuous improvement processes for your CIS Controls program.",
    actions: [
      "Maintain security awareness training programs (Control 14)",
      "Assess and monitor service provider security (Control 15)",
      "Implement application software security practices (Control 16)",
      "Establish incident response capabilities (Control 17)",
      "Conduct penetration testing and red team exercises (Control 18)",
      "Track implementation progress across all 18 controls",
      "Generate metrics and dashboards showing control maturity",
      "Continuously assess, improve, and advance Implementation Group maturity"
    ],
    outputs: [
      "Full implementation documentation for all 18 CIS Controls",
      "CIS Controls maturity dashboard and metrics",
      "Penetration test reports and remediation plans",
      "Continuous improvement roadmap for advancing Implementation Group maturity"
    ],
    resources: [
      { title: "CIS Controls Assessment Workbook", isTemplate: true },
      { title: "Maturity Scorecard Template", isTemplate: true }
    ]
  }
];
