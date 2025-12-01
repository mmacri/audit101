import { LearningStep } from "@/components/shared/StepSection";

export const nist80053PractitionersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand NIST 800-53 and Your Role",
    description: "Learn the structure of NIST SP 800-53 Rev. 5, including control families (AC, AU, IR, RA, etc.), baselines (Low/Moderate/High), and how practitioners implement technical and operational controls.",
    actions: [
      "Review NIST SP 800-53 Rev. 5 overview and the 20 control families",
      "Understand the difference between Low, Moderate, and High baselines",
      "Identify which controls apply to your systems based on their FIPS 199 categorization",
      "Learn the control structure: Control → Enhancement → Implementation",
      "Connect with your security team to understand your organization's tailored baseline"
    ],
    outputs: [
      "Personal notes on NIST 800-53 structure and terminology",
      "List of control families most relevant to your role (e.g., AC, AU, CM, IA, SC, SI)",
      "Understanding of your system's baseline and categorization"
    ],
    resources: [
      { title: "NIST SP 800-53 Rev. 5", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf", isTemplate: false },
      { title: "Control Family Overview Template", isTemplate: true }
    ]
  },
  {
    number: 2,
    title: "System Categorization & Boundary Definition",
    description: "Work with your team to define system boundaries, identify information types, and determine the FIPS 199 impact level that drives your control baseline selection.",
    actions: [
      "Participate in system boundary definition workshops",
      "Document all system components: servers, databases, networks, applications, cloud services",
      "Identify information types processed by your system using NIST SP 800-60",
      "Determine Confidentiality, Integrity, and Availability impact levels",
      "Validate the resulting system categorization (Low/Moderate/High)"
    ],
    outputs: [
      "System boundary diagram showing all components and connections",
      "Information type inventory with impact ratings",
      "FIPS 199 categorization worksheet",
      "System identification and registration documentation"
    ],
    resources: [
      { title: "System Boundary Template", isTemplate: true },
      { title: "FIPS 199 Categorization Worksheet", isTemplate: true },
      { title: "NIST SP 800-60 Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-60/vol-1-rev-1/final" }
    ]
  },
  {
    number: 3,
    title: "Control Selection & Mapping",
    description: "Map your selected control baseline to your systems and understand which controls you're responsible for implementing at the technical level.",
    actions: [
      "Review your organization's selected baseline (Low/Moderate/High from NIST 800-53B)",
      "Identify controls relevant to your technical domain: access control (AC), audit & accountability (AU), configuration management (CM), identification & authentication (IA), system & communications protection (SC), system & information integrity (SI)",
      "Map controls to specific system components and technologies",
      "Understand control overlays and tailoring decisions made by your organization",
      "Identify common controls inherited from organizational programs"
    ],
    outputs: [
      "Control mapping matrix: Control ID → System Component → Implementation Responsibility",
      "List of system-specific controls you must implement",
      "List of common/inherited controls you can leverage",
      "Annotated baseline showing your technical responsibilities"
    ],
    resources: [
      { title: "Control Mapping Workbook", isTemplate: true },
      { title: "NIST 800-53B Baselines", url: "https://csrc.nist.gov/publications/detail/sp/800-53b/final" }
    ]
  },
  {
    number: 4,
    title: "Implement Technical & Operational Controls",
    description: "Configure systems, deploy security tools, and implement procedures to satisfy your assigned controls. Focus on AC, AU, CM, IA, SC, and SI families.",
    actions: [
      "Access Control (AC): Configure least privilege, role-based access, session controls, remote access protections",
      "Audit & Accountability (AU): Deploy logging infrastructure, configure audit policies, protect log integrity, set up log retention",
      "Configuration Management (CM): Establish baseline configurations, implement change control, track configuration items",
      "Identification & Authentication (IA): Deploy MFA, manage authenticators, enforce password policies, implement device authentication",
      "System & Communications Protection (SC): Implement encryption, boundary protection, network segmentation, secure communications",
      "System & Information Integrity (SI): Deploy vulnerability scanning, malware protection, security alerts, flaw remediation processes"
    ],
    outputs: [
      "System hardening documentation and configuration scripts",
      "Access control matrices and role definitions",
      "Audit logging configuration files and policies",
      "Baseline configuration documentation and change control procedures",
      "MFA implementation documentation",
      "Encryption key management procedures",
      "Vulnerability management process documentation"
    ],
    resources: [
      { title: "Control Implementation Checklist", isTemplate: true },
      { title: "Configuration Baseline Template", isTemplate: true },
      { title: "Access Control Matrix Template", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Document Controls & Collect Evidence",
    description: "Create control implementation statements and continuously collect evidence demonstrating that controls are operating effectively.",
    actions: [
      "Write clear control implementation descriptions for each assigned control",
      "Document configuration settings with screenshots and exports",
      "Collect log samples showing controls in operation",
      "Capture change tickets and approval workflows",
      "Gather vulnerability scan reports and patching records",
      "Save access review artifacts and user provisioning records",
      "Organize evidence in a structured folder/repository aligned to control families"
    ],
    outputs: [
      "Control implementation statements for your systems",
      "Evidence repository organized by control family",
      "Configuration exports and hardening documentation",
      "Log samples and monitoring dashboards",
      "Vulnerability and patch management reports",
      "Access control review artifacts"
    ],
    resources: [
      { title: "Control Description Template", isTemplate: true },
      { title: "Evidence Collection Tracker", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Participate in Internal Assessment",
    description: "Support your organization's internal control assessment by providing artifacts, demonstrating controls, and remediating findings.",
    actions: [
      "Respond to assessor information requests promptly",
      "Demonstrate technical controls during walkthroughs (logging, access controls, encryption, etc.)",
      "Provide configuration exports, log samples, and tool screenshots",
      "Explain implementation decisions and compensating controls",
      "Review draft assessment findings and provide technical context",
      "Collaborate on remediation plans for identified gaps"
    ],
    outputs: [
      "Assessment artifacts package for assessors",
      "Technical demonstration notes and screenshots",
      "Responses to assessor questions and clarifications",
      "Remediation plans for any identified control weaknesses"
    ],
    resources: [
      { title: "Assessment Artifact Checklist", isTemplate: true },
      { title: "Control Demonstration Script", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Continuous Monitoring & Improvement",
    description: "Maintain controls over time through continuous monitoring, ongoing evidence collection, configuration management, and tracking improvements via POA&Ms.",
    actions: [
      "Implement continuous monitoring processes: automated log analysis, vulnerability scanning, configuration drift detection",
      "Track control effectiveness metrics and report them regularly",
      "Maintain a Plan of Action & Milestones (POA&M) for any control weaknesses",
      "Update control descriptions as systems change",
      "Participate in annual control reassessments",
      "Stay current with NIST 800-53 updates and security advisories"
    ],
    outputs: [
      "Continuous monitoring dashboards and automated reports",
      "POA&M tracking spreadsheet with status updates",
      "Updated control implementation documentation",
      "Control effectiveness metrics and trend analysis",
      "Annual control self-assessment results"
    ],
    resources: [
      { title: "Continuous Monitoring Checklist", isTemplate: true },
      { title: "POA&M Tracker Template", isTemplate: true },
      { title: "NIST 800-137 Continuous Monitoring Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-137/final" }
    ]
  }
];
