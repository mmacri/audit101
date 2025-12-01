import { LearningStep } from "@/components/shared/StepSection";

export const auditorsSteps: LearningStep[] = [
  {
    number: 1,
    title: "Plan HIPAA Compliance Audit",
    description: "Develop risk-based audit plan covering Privacy Rule, Security Rule, and Breach Notification Rule requirements. Identify high-risk areas and prioritize audit scope.",
    actions: [
      "Review previous audit findings and OCR enforcement trends",
      "Assess organizational risk factors (size, PHI volume, complexity)",
      "Define audit scope covering administrative, physical, technical safeguards",
      "Develop audit program with testable control objectives",
    ],
    outputs: [
      "HIPAA audit plan and scope document",
      "Risk assessment for audit prioritization",
      "Audit program with test procedures",
    ],
  },
  {
    number: 2,
    title: "Assess Privacy Rule Compliance",
    description: "Evaluate compliance with HIPAA Privacy Rule requirements including Notice of Privacy Practices, minimum necessary standard, patient rights, and use/disclosure policies.",
    actions: [
      "Review Notice of Privacy Practices distribution and acknowledgment",
      "Test minimum necessary policies and implementation",
      "Evaluate patient rights procedures (access, amendment, accounting)",
      "Assess uses and disclosures authorization and documentation",
      "Review privacy complaint handling and resolution",
    ],
    outputs: [
      "Privacy Rule compliance assessment",
      "Patient rights testing results",
      "Use and disclosure review documentation",
    ],
  },
  {
    number: 3,
    title: "Evaluate Security Rule Implementation",
    description: "Test implementation of administrative, physical, and technical safeguards required by HIPAA Security Rule. Verify risk assessment, policies, and security controls.",
    actions: [
      "Review security risk assessment methodology and completeness",
      "Test access controls (unique user ID, emergency access, automatic logoff)",
      "Evaluate audit controls and log review procedures",
      "Assess encryption implementation for ePHI at rest and in transit",
      "Verify integrity controls and transmission security",
    ],
    outputs: [
      "Security Rule compliance assessment",
      "Technical safeguards testing results",
      "Access control review documentation",
    ],
  },
  {
    number: 4,
    title: "Test Administrative Safeguards",
    description: "Assess security management process, workforce security, information access management, security training, and contingency planning.",
    actions: [
      "Verify security management process including risk management",
      "Test workforce clearance, authorization, and termination procedures",
      "Evaluate information access management and minimum necessary implementation",
      "Review security awareness training program and records",
      "Assess contingency planning including backups and disaster recovery",
    ],
    outputs: [
      "Administrative safeguards assessment",
      "Workforce security testing results",
      "Training program evaluation",
    ],
  },
  {
    number: 5,
    title: "Review Business Associate Management",
    description: "Evaluate business associate identification, contracting, and oversight. Verify BAAs contain required elements and assess vendor risk management.",
    actions: [
      "Review business associate inventory completeness",
      "Assess BAAs for required HIPAA provisions",
      "Evaluate vendor risk assessment procedures",
      "Test business associate breach notification procedures",
      "Review monitoring and termination procedures for non-compliant vendors",
    ],
    outputs: [
      "Business associate compliance assessment",
      "BAA review and testing results",
      "Vendor risk management evaluation",
    ],
  },
  {
    number: 6,
    title: "Assess Breach Notification Compliance",
    description: "Evaluate breach identification, assessment, notification, and documentation procedures. Verify compliance with notification timelines and requirements.",
    actions: [
      "Review breach assessment methodology and harm analysis",
      "Test breach notification procedures and timeline compliance",
      "Assess breach documentation completeness and accuracy",
      "Evaluate breach prevention and mitigation strategies",
      "Review HHS breach portal submissions for accuracy",
    ],
    outputs: [
      "Breach notification compliance assessment",
      "Breach response testing results",
      "Breach documentation review",
    ],
  },
  {
    number: 7,
    title: "Report Findings and Validate Remediation",
    description: "Document audit findings with specific citations to HIPAA requirements. Provide risk-based recommendations and track remediation of identified deficiencies.",
    actions: [
      "Issue audit report with findings mapped to HIPAA sections",
      "Classify findings by severity and compliance risk",
      "Provide specific, actionable remediation recommendations",
      "Establish remediation timelines based on risk",
      "Conduct follow-up testing to validate corrective actions",
    ],
    outputs: [
      "Final audit report with findings and recommendations",
      "Remediation action plan",
      "Follow-up testing results",
    ],
  },
];
