import { LearningStep } from "@/components/shared/StepSection";

export const practitionersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand HIPAA Security Rule Requirements",
    description: "Learn the administrative, physical, and technical safeguards required to protect electronic Protected Health Information (ePHI). Understand the difference between required and addressable implementation specifications.",
    actions: [
      "Review 18 HIPAA Security Rule standards across three safeguard categories",
      "Understand risk assessment requirements (§164.308(a)(1)(ii)(A))",
      "Learn access control requirements (§164.312(a)(1))",
      "Study audit controls and integrity controls",
    ],
    outputs: [
      "Personal notes on HIPAA Security Rule structure",
      "Checklist of required vs. addressable specifications",
      "Understanding of ePHI protection requirements",
    ],
  },
  {
    number: 2,
    title: "Implement Technical Safeguards",
    description: "Deploy access controls, audit controls, integrity controls, transmission security, and encryption for ePHI. Configure systems to enforce authentication, authorization, and accountability.",
    actions: [
      "Implement unique user identification and emergency access procedures",
      "Configure automatic logoff and encryption/decryption mechanisms",
      "Deploy audit logging for all ePHI access and modifications",
      "Establish integrity controls to protect ePHI from improper alteration",
      "Implement transmission security for ePHI sent over networks",
    ],
    outputs: [
      "Technical safeguards implementation documentation",
      "Access control configuration records",
      "Audit logging reports and test results",
      "Encryption and transmission security documentation",
    ],
  },
  {
    number: 3,
    title: "Configure Administrative Controls",
    description: "Establish policies for workforce security, information access management, security awareness training, and incident response. Document security management processes.",
    actions: [
      "Conduct and document HIPAA security risk assessments",
      "Implement workforce clearance procedures and termination protocols",
      "Establish security awareness and training programs",
      "Create incident response and contingency plans",
      "Document all security policies and procedures",
    ],
    outputs: [
      "Security risk assessment report",
      "Workforce security policies and procedures",
      "Security awareness training materials and attendance records",
      "Incident response plan and contingency procedures",
    ],
  },
  {
    number: 4,
    title: "Deploy Physical Safeguards",
    description: "Implement facility access controls, workstation security, and device/media controls to protect physical access to ePHI and healthcare facilities.",
    actions: [
      "Establish facility access controls and visitor logs",
      "Implement workstation use and security policies",
      "Deploy device and media controls for hardware containing ePHI",
      "Create procedures for disposal and media re-use",
      "Document physical security measures",
    ],
    outputs: [
      "Facility access control procedures and visitor logs",
      "Workstation security policies",
      "Device and media control procedures",
      "Physical security documentation",
    ],
  },
  {
    number: 5,
    title: "Manage Business Associate Agreements",
    description: "Ensure proper Business Associate Agreements (BAAs) are in place with all vendors and partners who handle ePHI. Monitor compliance and conduct vendor risk assessments.",
    actions: [
      "Identify all business associates requiring BAAs",
      "Review and execute compliant BAA contracts",
      "Conduct vendor security assessments",
      "Monitor business associate compliance",
      "Maintain BAA inventory and renewal tracking",
    ],
    outputs: [
      "Business associate inventory",
      "Executed BAA contracts",
      "Vendor risk assessment reports",
      "BAA compliance monitoring documentation",
    ],
  },
  {
    number: 6,
    title: "Establish Breach Response Procedures",
    description: "Develop and test breach notification procedures per HIPAA Breach Notification Rule. Establish incident detection, assessment, and response capabilities.",
    actions: [
      "Create breach assessment and documentation procedures",
      "Establish notification timelines (60 days for individuals, immediate for HHS)",
      "Develop breach notification templates and communication plans",
      "Implement breach detection and monitoring tools",
      "Conduct breach response tabletop exercises",
    ],
    outputs: [
      "Breach notification procedures",
      "Breach notification templates",
      "Breach detection and monitoring plan",
      "Tabletop exercise documentation",
    ],
  },
  {
    number: 7,
    title: "Maintain Continuous Compliance",
    description: "Conduct ongoing risk assessments, security testing, and compliance monitoring. Update policies and controls as healthcare environment and regulations evolve.",
    actions: [
      "Perform annual HIPAA security risk assessments",
      "Conduct regular security testing and vulnerability scanning",
      "Review and update policies at least annually",
      "Monitor OCR enforcement actions and guidance updates",
      "Maintain compliance documentation for six years",
    ],
    outputs: [
      "Annual security risk assessment reports",
      "Security testing and vulnerability scan results",
      "Updated policies and procedures",
      "Compliance monitoring reports",
    ],
  },
];
