import { LearningStep } from "@/components/shared/StepSection";

export const nistCsfPractitionersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand the NIST Cybersecurity Framework",
    description: "Learn the CSF 2.0 structure: the 6 core functions (Govern, Identify, Protect, Detect, Respond, Recover) and how practitioners implement CSF outcomes.",
    actions: [
      "Review NIST CSF 2.0 and the expanded Govern function",
      "Understand the relationship between Functions → Categories → Subcategories → Implementation Examples",
      "Learn how CSF outcomes map to your technical responsibilities",
      "Understand CSF Profiles (current state vs. target state)",
      "Learn how CSF aligns with other frameworks (NIST 800-53, CIS Controls, ISO 27001)"
    ],
    outputs: [
      "Personal notes on CSF structure and core functions",
      "List of subcategories most relevant to your role"
    ],
    resources: [
      { title: "NIST CSF 2.0 Overview", url: "https://www.nist.gov/cyberframework", isTemplate: false },
      { title: "CSF Quick Reference Guide", isTemplate: true }
    ]
  },
  {
    number: 2,
    title: "Support Organizational Context (Govern Function)",
    description: "Contribute to the Govern function by supporting policy implementation, risk management, and supply chain security.",
    actions: [
      "Participate in cybersecurity policy and procedure development",
      "Support risk assessment activities by providing technical input",
      "Help identify and assess supply chain cybersecurity risks",
      "Contribute to roles and responsibilities documentation",
      "Support cybersecurity resource allocation decisions with technical requirements"
    ],
    outputs: [
      "Technical input to organizational policies and risk assessments",
      "Supply chain risk documentation for technical dependencies"
    ],
    resources: [
      { title: "Govern Function Checklist", isTemplate: true }
    ]
  },
  {
    number: 3,
    title: "Implement Identify Function Outcomes",
    description: "Build and maintain asset inventories, understand business context, assess risks, and identify vulnerabilities.",
    actions: [
      "Maintain accurate inventories of hardware, software, data, and services (ID.AM)",
      "Document system boundaries, data flows, and dependencies (ID.AM)",
      "Support business impact analysis for critical systems",
      "Conduct vulnerability assessments and identify threats (ID.RA)",
      "Assess and document supply chain risks (ID.SC)"
    ],
    outputs: [
      "Complete asset and data inventory",
      "System architecture and data flow diagrams",
      "Vulnerability assessment reports",
      "Risk register with technical risks"
    ],
    resources: [
      { title: "Identify Function Implementation Guide", isTemplate: true }
    ]
  },
  {
    number: 4,
    title: "Implement Protect Function Outcomes",
    description: "Deploy technical controls for access control, awareness, data security, and protective technology.",
    actions: [
      "Implement identity and access management (PR.AC): MFA, least privilege, access reviews",
      "Deploy data protection controls (PR.DS): encryption, DLP, backup",
      "Maintain secure configurations and conduct maintenance (PR.MA, PR.IP)",
      "Deploy protective technology (PR.PT): logging, monitoring, malware defenses",
      "Support awareness and training initiatives (PR.AT)"
    ],
    outputs: [
      "Access control implementation documentation",
      "Data protection and encryption documentation",
      "Secure configuration baselines",
      "Protective technology deployment documentation"
    ],
    resources: [
      { title: "Protect Function Implementation Checklist", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Implement Detect Function Outcomes",
    description: "Deploy monitoring and detection capabilities to identify cybersecurity events.",
    actions: [
      "Establish continuous monitoring processes (DE.CM): network, system, user activity",
      "Deploy security event detection tools (SIEM, IDS/IPS, EDR)",
      "Configure alerting and anomaly detection (DE.AE)",
      "Test detection capabilities regularly",
      "Integrate detection with incident response workflows"
    ],
    outputs: [
      "Monitoring architecture and coverage documentation",
      "Detection rule sets and alert configurations",
      "Detection testing and validation reports"
    ],
    resources: [
      { title: "Detect Function Implementation Guide", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Implement Respond Function Outcomes",
    description: "Establish incident response capabilities, containment procedures, and communications protocols.",
    actions: [
      "Contribute to incident response planning (RS.MA)",
      "Implement incident analysis and detection tools (RS.AN)",
      "Establish containment and eradication procedures (RS.MI)",
      "Support incident communications and coordination (RS.CO)",
      "Conduct incident response exercises and tabletops"
    ],
    outputs: [
      "Incident response playbooks and runbooks",
      "Technical containment procedures",
      "Incident response exercise results"
    ],
    resources: [
      { title: "Respond Function Playbook", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Implement Recover Function and Continuous Improvement",
    description: "Establish recovery capabilities, test restoration procedures, and support continuous CSF program improvement.",
    actions: [
      "Implement backup and recovery procedures (RC.RP, RC.CO)",
      "Test recovery capabilities regularly",
      "Support lessons learned activities after incidents",
      "Track CSF profile achievement and gaps",
      "Contribute to continuous improvement of cybersecurity practices",
      "Stay current with CSF updates and emerging threats"
    ],
    outputs: [
      "Backup and recovery documentation and test results",
      "CSF implementation progress tracking",
      "Lessons learned documentation",
      "Continuous improvement recommendations"
    ],
    resources: [
      { title: "Recover Function Implementation Guide", isTemplate: true },
      { title: "CSF Implementation Tracker", isTemplate: true }
    ]
  }
];
