import { LearningStep } from "@/components/shared/StepSection";

export const iso27001PractitionersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand ISO 27001 Structure and ISMS Fundamentals",
    description: "Learn the ISO 27001 standard structure (Clauses 4-10 + Annex A), ISMS principles, and the risk-based approach to information security management.",
    actions: [
      "Review ISO 27001:2022 structure: Clauses 4-10 (management system) + Annex A (93 controls)",
      "Understand Plan-Do-Check-Act (PDCA) cycle applied to ISMS",
      "Learn the four control domains: Organizational, People, Physical, Technological",
      "Understand relationship between risk assessment and control selection",
      "Review differences between ISO 27001:2013 and ISO 27001:2022"
    ],
    outputs: [
      "Personal notes on ISO 27001 structure",
      "PDCA cycle mapped to ISMS processes",
      "List of key terms and definitions"
    ],
    resources: [
      { title: "ISO 27001:2022 Standard Document", url: "https://www.iso.org/standard/27001", isTemplate: false },
      { title: "ISO 27001 Quick Reference Guide", isTemplate: true }
    ]
  },
  {
    number: 2,
    title: "Support ISMS Scope Definition and Context Establishment (Clause 4)",
    description: "Contribute to defining the ISMS scope, understanding organizational context, and identifying interested parties' requirements.",
    actions: [
      "Help identify internal and external issues affecting information security",
      "Document interested parties (customers, regulators, partners) and their security expectations",
      "Contribute technical input to ISMS scope definition (systems, locations, data types)",
      "Identify boundaries and interfaces of the ISMS",
      "Document dependencies between in-scope and out-of-scope systems"
    ],
    outputs: [
      "Organizational context analysis (SWOT, PESTLE)",
      "Interested parties register with security requirements",
      "ISMS scope statement with technical boundaries documented"
    ],
    resources: [
      { title: "ISMS Scope Definition Template", isTemplate: true },
      { title: "Context Analysis Worksheet", isTemplate: true }
    ]
  },
  {
    number: 3,
    title: "Conduct Risk Assessments and Create Statement of Applicability",
    description: "Participate in information security risk assessments, identify assets/threats/vulnerabilities, and help develop the Statement of Applicability (SoA).",
    actions: [
      "Inventory information assets (data, systems, applications, infrastructure)",
      "Identify threats (cyberattacks, insider threats, natural disasters) and vulnerabilities",
      "Assess risk likelihood and impact using organizational risk criteria",
      "Propose risk treatment options (mitigate, accept, avoid, transfer)",
      "For each Annex A control, document applicability and implementation status in SoA"
    ],
    outputs: [
      "Information asset inventory with criticality ratings",
      "Risk assessment report with risk register",
      "Statement of Applicability documenting all 93 Annex A controls",
      "Risk treatment plan with control implementation roadmap"
    ],
    resources: [
      { title: "Risk Assessment Template", isTemplate: true },
      { title: "Statement of Applicability Template", isTemplate: true },
      { title: "Asset Inventory Spreadsheet", isTemplate: true }
    ]
  },
  {
    number: 4,
    title: "Implement Annex A Controls Across All Four Domains",
    description: "Deploy selected Annex A controls covering Organizational, People, Physical, and Technological domains based on risk treatment decisions.",
    actions: [
      "Organizational Controls: Implement policies, procedures, asset management, supplier security",
      "People Controls: Support screening, training, access reviews, and termination procedures",
      "Physical Controls: Deploy physical security measures (access control, monitoring, clear desk)",
      "Technological Controls: Implement access controls, encryption, logging, secure configurations",
      "Document control implementation evidence and maintain control logs"
    ],
    outputs: [
      "Implemented controls with evidence documentation",
      "Security policies and procedures library",
      "Technical configuration standards and baselines",
      "Control implementation and testing reports"
    ],
    resources: [
      { title: "Annex A Controls Implementation Checklist", isTemplate: true },
      { title: "Control Evidence Collection Guide", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Operate the ISMS and Monitor Control Effectiveness (Clause 8-9)",
    description: "Execute operational processes, monitor control performance, track security metrics, and support internal audits.",
    actions: [
      "Execute day-to-day ISMS operations (access provisioning, incident response, change management)",
      "Monitor control effectiveness through KPIs and security metrics",
      "Track and investigate security events and incidents",
      "Participate in internal ISMS audits as auditee",
      "Support management reviews with performance data"
    ],
    outputs: [
      "ISMS operational procedures and runbooks",
      "Security metrics dashboard and KPI tracking",
      "Incident logs and response documentation",
      "Internal audit evidence and findings responses"
    ],
    resources: [
      { title: "ISMS Operational Procedures Template", isTemplate: true },
      { title: "Security Metrics Template", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Prepare for Certification Audits (Stage 1 and Stage 2)",
    description: "Support preparation for external certification audits by organizing evidence, conducting readiness assessments, and addressing gaps.",
    actions: [
      "Organize all ISMS documentation (policies, procedures, SoA, risk assessment)",
      "Conduct pre-audit readiness assessment and gap analysis",
      "Address identified gaps and strengthen control evidence",
      "Prepare staff for auditor interviews and evidence requests",
      "Support Stage 1 documentation review and Stage 2 implementation assessment"
    ],
    outputs: [
      "Audit readiness assessment report",
      "Organized evidence repository for auditors",
      "Pre-audit gap remediation plan and completion tracking",
      "Staff interview preparation materials"
    ],
    resources: [
      { title: "Certification Audit Preparation Checklist", isTemplate: true },
      { title: "Evidence Organization Guide", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Maintain Certification and Drive Continual Improvement (Clause 10)",
    description: "Support ongoing certification maintenance through surveillance audits, continual improvement initiatives, and ISMS updates.",
    actions: [
      "Address findings from certification and surveillance audits",
      "Conduct periodic risk assessment reviews and SoA updates",
      "Track and close nonconformities with root cause analysis",
      "Participate in continual improvement initiatives",
      "Stay current with ISO 27001 updates and emerging threats",
      "Support recertification audit preparation (every 3 years)"
    ],
    outputs: [
      "Corrective action tracking and closure evidence",
      "Updated risk assessments and SoA reflecting changes",
      "Continual improvement register with implemented enhancements",
      "Recertification readiness documentation"
    ],
    resources: [
      { title: "Surveillance Audit Preparation Guide", isTemplate: true },
      { title: "Continual Improvement Tracker", isTemplate: true },
      { title: "Nonconformity Management Template", isTemplate: true }
    ]
  }
];