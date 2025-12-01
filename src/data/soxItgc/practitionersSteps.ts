import { LearningStep } from "@/components/shared/StepSection";

export const soxItgcPractitionersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand SOX ITGC and Your Role",
    description: "Learn what SOX 404 requires, understand the three ITGC domains (Logical Access, Change Management, Computer Operations), and identify your responsibilities.",
    actions: [
      "Understand SOX Section 404 and the role of IT General Controls",
      "Learn the three ITGC domains: Logical Access, Change Management, Computer Operations",
      "Identify in-scope financial systems and supporting IT infrastructure",
      "Understand how ITGCs support application controls and financial reporting",
      "Learn the SOX audit lifecycle and timeline"
    ],
    outputs: [
      "Understanding of SOX ITGC requirements and structure",
      "List of in-scope systems you support",
      "Personal ITGC responsibilities documentation"
    ],
    resources: [
      { title: "SOX ITGC Overview", isTemplate: true }
    ]
  },
  {
    number: 2,
    title: "Identify In-Scope Systems and Infrastructure",
    description: "Define system boundaries for financial applications and all supporting infrastructure, databases, and platforms.",
    actions: [
      "Document all financial applications in scope (ERP, GL, AP, AR, payroll, etc.)",
      "Identify supporting infrastructure: databases, servers, networks, cloud platforms",
      "Map data flows between financial systems",
      "Document interfaces and integrations affecting financial data",
      "Validate scope with finance and internal audit teams"
    ],
    outputs: [
      "In-scope system inventory",
      "System architecture and data flow diagrams",
      "Boundary definition documentation"
    ],
    resources: [
      { title: "SOX Scoping Worksheet", isTemplate: true }
    ]
  },
  {
    number: 3,
    title: "Implement Logical Access Controls",
    description: "Establish controls for user provisioning, access reviews, privileged access, and password management.",
    actions: [
      "Implement user provisioning: authorized requests, approval workflows, least privilege",
      "Conduct quarterly access reviews and remove unnecessary access",
      "Manage privileged access: separate admin accounts, additional logging, approval for privilege grants",
      "Enforce password policies and multi-factor authentication",
      "Monitor and log all access to in-scope systems",
      "Maintain audit trails of access changes"
    ],
    outputs: [
      "User provisioning procedures and workflows",
      "Quarterly access review artifacts (review logs, attestations, remediation)",
      "Privileged access management documentation",
      "Password policy and MFA implementation documentation",
      "Access control audit logs"
    ],
    resources: [
      { title: "Logical Access Control Matrix", isTemplate: true },
      { title: "Access Review Template", isTemplate: true }
    ]
  },
  {
    number: 4,
    title: "Implement Change Management Controls",
    description: "Establish SDLC controls for changes to in-scope financial systems, including change requests, testing, approvals, and deployment.",
    actions: [
      "Implement change request and approval processes",
      "Require testing and quality assurance before production deployment",
      "Separate development, test, and production environments",
      "Enforce change approval by business and IT stakeholders",
      "Maintain change audit trails with approver names and dates",
      "Establish emergency change procedures with post-implementation review"
    ],
    outputs: [
      "Change management procedures and workflows",
      "Change tickets showing approvals, testing, and deployment",
      "Environment separation documentation",
      "Emergency change procedures and post-implementation review records"
    ],
    resources: [
      { title: "Change Management Process Document", isTemplate: true },
      { title: "Change Ticket Template", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Implement Computer Operations Controls",
    description: "Establish controls for backups, batch job monitoring, incident management, and system availability.",
    actions: [
      "Implement backup procedures: daily/weekly backups, offsite storage, encryption",
      "Test backup restoration regularly and document results",
      "Monitor batch jobs and automated processes affecting financial data",
      "Establish incident response procedures for system outages and data issues",
      "Monitor system availability and performance",
      "Maintain operational logs and audit trails"
    ],
    outputs: [
      "Backup and recovery procedures",
      "Backup test results and restoration documentation",
      "Batch job monitoring logs and error handling procedures",
      "Incident response logs for financial system issues",
      "System availability reports"
    ],
    resources: [
      { title: "Backup and Recovery Checklist", isTemplate: true },
      { title: "Batch Job Monitoring Template", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Collect and Organize ITGC Evidence",
    description: "Extract reports, logs, and artifacts demonstrating ITGC control operation throughout the audit period.",
    actions: [
      "Extract access review artifacts for each quarter",
      "Collect user provisioning and termination tickets",
      "Gather change management documentation: change tickets, approvals, test results",
      "Collect backup logs and restoration test results",
      "Extract batch job logs and monitoring reports",
      "Organize evidence by control and audit period",
      "Maintain evidence repository with version control"
    ],
    outputs: [
      "Evidence repository organized by ITGC domain",
      "Quarterly access review packages",
      "Change management artifact packages",
      "Computer operations evidence packages",
      "Evidence index and retention schedule"
    ],
    resources: [
      { title: "ITGC Evidence Collection Checklist", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Support SOX Testing and Continuous Compliance",
    description: "Support internal and external SOX auditors during control testing and maintain continuous ITGC compliance.",
    actions: [
      "Provide auditors with access to systems and evidence",
      "Respond to auditor information requests and walkthroughs",
      "Demonstrate control operation during testing",
      "Address auditor findings and implement remediation",
      "Maintain controls throughout the fiscal year",
      "Track metrics: access review timeliness, change approval rates, backup success rates"
    ],
    outputs: [
      "Auditor evidence packages and walkthrough documentation",
      "Responses to auditor questions",
      "Remediation plans for control deficiencies",
      "ITGC metrics and dashboards",
      "Continuous compliance documentation"
    ],
    resources: [
      { title: "SOX Auditor Response Template", isTemplate: true },
      { title: "ITGC Metrics Dashboard", isTemplate: true }
    ]
  }
];
