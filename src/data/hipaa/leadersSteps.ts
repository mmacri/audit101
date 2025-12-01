import { LearningStep } from "@/components/shared/StepSection";

export const leadersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Establish HIPAA Governance Structure",
    description: "Create organizational structure for HIPAA compliance including Privacy Officer, Security Officer, and compliance committee. Define roles, responsibilities, and reporting relationships.",
    actions: [
      "Designate Privacy Officer and Security Officer (required)",
      "Establish HIPAA compliance committee with executive sponsorship",
      "Define escalation paths for privacy and security incidents",
      "Allocate budget for compliance program and security controls",
    ],
    outputs: [
      "HIPAA governance charter",
      "Officer designation letters",
      "Compliance committee charter",
      "Annual compliance budget",
    ],
  },
  {
    number: 2,
    title: "Develop Comprehensive Privacy Program",
    description: "Implement HIPAA Privacy Rule requirements including policies, procedures, notice of privacy practices, patient rights, and minimum necessary standards.",
    actions: [
      "Create and distribute Notice of Privacy Practices to all patients",
      "Establish policies for minimum necessary use and disclosure",
      "Implement procedures for patient rights (access, amendment, accounting)",
      "Develop authorization forms and consent procedures",
      "Create privacy complaint and violation response procedures",
    ],
    outputs: [
      "Notice of Privacy Practices",
      "Privacy policies and procedures manual",
      "Patient rights request forms and procedures",
      "Privacy complaint handling procedures",
    ],
  },
  {
    number: 3,
    title: "Conduct Enterprise Risk Assessment",
    description: "Perform comprehensive risk assessment across all systems, facilities, and business processes that involve ePHI. Document risks, vulnerabilities, and mitigation strategies.",
    actions: [
      "Identify all threats and vulnerabilities to ePHI confidentiality, integrity, availability",
      "Assess likelihood and impact of potential security incidents",
      "Document current security controls and identify gaps",
      "Prioritize risks and create risk mitigation roadmap",
      "Update risk assessment annually and when environment changes",
    ],
    outputs: [
      "Enterprise risk assessment report",
      "Risk register and heat map",
      "Risk mitigation roadmap",
      "Annual risk assessment schedule",
    ],
  },
  {
    number: 4,
    title: "Implement Security Management Process",
    description: "Establish ongoing security management including policy development, risk management, sanctions, and information system activity review.",
    actions: [
      "Develop comprehensive security policies and procedures",
      "Implement risk management program with regular assessments",
      "Establish sanctions policy for workforce violations",
      "Create information system activity review procedures",
      "Deploy security awareness training for all workforce members",
    ],
    outputs: [
      "Security policies and procedures manual",
      "Risk management program documentation",
      "Sanctions policy and enforcement records",
      "Security awareness training program and records",
    ],
  },
  {
    number: 5,
    title: "Manage Business Associate Compliance",
    description: "Establish program for identifying, contracting, and monitoring business associates. Ensure proper BAAs are in place and conduct vendor risk assessments.",
    actions: [
      "Create inventory of all business associates",
      "Develop standard BAA templates meeting HIPAA requirements",
      "Implement vendor risk assessment procedures",
      "Monitor business associate compliance and security incidents",
      "Establish termination procedures for non-compliant vendors",
    ],
    outputs: [
      "Business associate inventory and tracking system",
      "Standard BAA templates",
      "Vendor risk assessment framework",
      "Business associate monitoring reports",
    ],
  },
  {
    number: 6,
    title: "Establish Breach Management Program",
    description: "Develop comprehensive breach notification and response program per HIPAA Breach Notification Rule. Create procedures for breach assessment, notification, and mitigation.",
    actions: [
      "Create breach assessment methodology (harm threshold analysis)",
      "Establish notification procedures (individuals, HHS, media if >500)",
      "Develop breach notification templates and communication protocols",
      "Implement breach documentation and tracking system",
      "Create breach prevention and mitigation strategies",
    ],
    outputs: [
      "Breach response plan",
      "Breach notification templates",
      "Breach tracking and documentation system",
      "Breach prevention program",
    ],
  },
  {
    number: 7,
    title: "Maintain Ongoing Compliance Program",
    description: "Sustain HIPAA compliance through continuous monitoring, training, auditing, and program improvement. Stay current with OCR guidance and enforcement trends.",
    actions: [
      "Conduct annual HIPAA training for all workforce members",
      "Perform regular internal audits and compliance assessments",
      "Monitor OCR enforcement actions and update program accordingly",
      "Review and update policies annually or when regulations change",
      "Maintain compliance documentation for six years minimum",
    ],
    outputs: [
      "Annual training completion reports",
      "Internal audit reports and findings",
      "Compliance monitoring dashboard",
      "Policy review and update log",
    ],
  },
];
