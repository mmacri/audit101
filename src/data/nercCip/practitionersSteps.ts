import { LearningStep } from "@/components/shared/StepSection";

export const practitionersSteps: LearningStep[] = [
  {
    number: 1,
    title: "CIP Fundamentals & Asset Categorization",
    description: "Learn how to identify and categorize BES Cyber Assets according to CIP-002 impact ratings.",
    actions: [
      "Understand BES Cyber Asset vs. BES Cyber System definitions",
      "Apply High, Medium, and Low impact categorization methodology",
      "Document asset inventories and maintain categorization records",
      "Identify EACMS and PACS supporting BES Cyber Systems",
    ],
    outputs: [
      "Updated asset inventory with impact ratings",
      "CIP-002 categorization documentation",
      "EACMS and PACS identification records",
    ],
    contentTypes: ["reading", "video", "exercise"],
    duration: "3-4 hours",
    learningObjectives: [
      "Master BES Cyber Asset definitions and impact categorization",
      "Apply CIP-002 methodology to real-world asset inventories",
      "Identify supporting systems (EACMS, PACS) accurately"
    ],
    deliverables: [
      "Complete asset inventory with High/Medium/Low ratings",
      "CIP-002 documentation package",
      "Supporting system identification report"
    ]
  },
  {
    number: 2,
    title: "Security Management Controls (CIP-003)",
    description: "Establish security management controls and implement requirements for low-impact BES Cyber Systems.",
    actions: [
      "Develop and maintain cyber security policies",
      "Implement CIP Senior Manager accountability processes",
      "Deploy low-impact BES Cyber System protections",
      "Document exceptions and delegations of authority",
    ],
    outputs: [
      "Cyber security policy suite",
      "Low-impact BES Cyber System plans",
      "CIP Senior Manager designation documentation",
    ],
    contentTypes: ["reading", "template", "exercise"],
    duration: "4-5 hours",
    learningObjectives: [
      "Develop comprehensive CIP-003 security policies",
      "Implement low-impact system protection plans",
      "Establish accountability and governance structures"
    ],
    deliverables: [
      "Complete cyber security policy suite",
      "Low-impact BES protection plans",
      "Senior manager accountability documentation"
    ]
  },
  {
    number: 3,
    title: "Personnel & Training (CIP-004)",
    description: "Implement personnel risk assessments, training programs, and access management for CIP compliance.",
    actions: [
      "Conduct personnel risk assessments (PRAs)",
      "Deliver annual CIP training and awareness programs",
      "Maintain training records and completion tracking",
      "Revoke access within 24 hours of termination or transfer",
    ],
    outputs: [
      "Training curriculum and attendance records",
      "Personnel risk assessment documentation",
      "Access revocation procedures and logs",
    ],
    contentTypes: ["reading", "video", "exercise", "quiz"],
    duration: "3-4 hours",
    learningObjectives: [
      "Conduct effective personnel risk assessments",
      "Develop and deliver CIP training programs",
      "Manage access lifecycle within compliance timelines"
    ],
    deliverables: [
      "Personnel risk assessment reports",
      "Training curriculum with completion tracking",
      "Access management procedures with audit logs"
    ]
  },
  {
    number: 4,
    title: "Electronic & Physical Security Perimeters (CIP-005/006)",
    description: "Establish and maintain ESPs and PSPs with appropriate access controls and monitoring.",
    actions: [
      "Define and document Electronic Security Perimeters (ESPs)",
      "Implement Physical Security Perimeters (PSPs) and access controls",
      "Deploy remote access controls and multi-factor authentication",
      "Monitor and log all electronic and physical access",
    ],
    outputs: [
      "ESP and PSP documentation and diagrams",
      "Access control procedures and logs",
      "Remote access configuration documentation",
    ],
    contentTypes: ["reading", "exercise", "template"],
    duration: "5-6 hours",
    learningObjectives: [
      "Design and document ESP boundaries and protections",
      "Implement PSP controls with monitoring capabilities",
      "Deploy secure remote access with MFA"
    ],
    deliverables: [
      "ESP/PSP architecture diagrams and documentation",
      "Access control implementation with logging",
      "Remote access security configuration"
    ]
  },
  {
    number: 5,
    title: "System Security Management (CIP-007)",
    description: "Implement technical controls for ports/services, patch management, malware protection, and logging.",
    actions: [
      "Disable unnecessary ports and services",
      "Deploy patch management within 35 days of availability",
      "Implement malicious code prevention tools",
      "Configure security event logging and monitoring",
    ],
    outputs: [
      "Ports and services baseline documentation",
      "Patch management records and security event logs",
      "Malware protection configuration evidence",
    ],
    contentTypes: ["reading", "exercise", "template"],
    duration: "6-7 hours",
    learningObjectives: [
      "Establish secure system baselines and hardening",
      "Implement compliant patch management processes",
      "Deploy malware protection and security logging"
    ],
    deliverables: [
      "System baseline documentation with ports/services inventory",
      "Patch management tracking with 35-day compliance",
      "Malware protection and logging configuration"
    ]
  },
  {
    number: 6,
    title: "Incident Response & Recovery (CIP-008/009)",
    description: "Develop incident response and recovery plans, conduct drills, and report to ES-ISAC.",
    actions: [
      "Create and maintain cyber security incident response plans",
      "Test incident response plans annually",
      "Establish recovery plans for BES Cyber Systems",
      "Conduct recovery plan testing and backup restoration",
    ],
    outputs: [
      "Incident response and recovery plans",
      "Test and drill documentation",
      "ES-ISAC reporting procedures",
    ],
    contentTypes: ["reading", "exercise", "template"],
    duration: "5-6 hours",
    learningObjectives: [
      "Develop CIP-compliant incident response plans",
      "Execute and document incident response drills",
      "Establish and test recovery capabilities"
    ],
    deliverables: [
      "Incident response plan with ES-ISAC reporting",
      "Annual drill documentation and lessons learned",
      "Recovery plan with test results"
    ]
  },
  {
    number: 7,
    title: "Configuration, Vulnerability & Supply Chain (CIP-010/011/013)",
    description: "Implement configuration management, protect BCSI, and manage vendor supply chain risks.",
    actions: [
      "Establish baseline configurations and change management",
      "Conduct vulnerability assessments at least every 15 months",
      "Classify and protect BES Cyber System Information (BCSI)",
      "Implement supply chain risk management plans",
    ],
    outputs: [
      "Configuration baselines and change records",
      "Vulnerability assessment reports",
      "BCSI protection procedures and supply chain plans",
    ],
    contentTypes: ["reading", "exercise", "template", "quiz"],
    duration: "6-8 hours",
    learningObjectives: [
      "Establish configuration management and change control",
      "Conduct vulnerability assessments within compliance timelines",
      "Protect BCSI and manage supply chain risks"
    ],
    deliverables: [
      "Configuration baselines with change management process",
      "15-month vulnerability assessment schedule and reports",
      "BCSI classification and supply chain risk management plan"
    ]
  },
];
