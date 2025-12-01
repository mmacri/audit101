import { LearningStep } from "@/components/shared/StepSection";

export const practitionersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand COSO Framework Components",
    description: "Learn the five components of the COSO Internal Control - Integrated Framework: Control Environment, Risk Assessment, Control Activities, Information & Communication, and Monitoring Activities.",
    actions: [
      "Study the 17 principles across five components",
      "Understand how principles support control objectives",
      "Learn the relationship between components and organizational levels",
      "Review COSO points of focus for each principle",
    ],
    outputs: [
      "Personal notes on COSO framework structure",
      "Mapping of principles to your role responsibilities",
      "Understanding of control objectives",
    ],
  },
  {
    number: 2,
    title: "Implement Control Activities",
    description: "Design and implement control activities aligned to identified risks. Establish policies, procedures, and automated controls to mitigate risks to acceptable levels.",
    actions: [
      "Design controls addressing specific risks to objectives",
      "Implement preventive and detective control activities",
      "Deploy technology controls including automated validations",
      "Establish segregation of duties and authorization matrices",
      "Document control procedures and responsibilities",
    ],
    outputs: [
      "Control design documentation",
      "Control procedures and work instructions",
      "Segregation of duties matrix",
      "Control implementation evidence",
    ],
  },
  {
    number: 3,
    title: "Execute Monitoring Activities",
    description: "Perform ongoing evaluations and separate evaluations to assess control effectiveness. Identify and report control deficiencies to appropriate parties.",
    actions: [
      "Conduct control self-assessments and testing",
      "Monitor key control indicators and performance metrics",
      "Execute periodic control effectiveness reviews",
      "Document control test results and evidence",
      "Report control deficiencies and remediation status",
    ],
    outputs: [
      "Control testing documentation and results",
      "Deficiency reports and action plans",
      "Monitoring metrics and dashboards",
    ],
  },
  {
    number: 4,
    title: "Maintain Documentation and Evidence",
    description: "Document control designs, operating procedures, and evidence of control execution. Maintain audit trails supporting control effectiveness.",
    actions: [
      "Create and maintain control narratives and process flows",
      "Document control testing procedures and results",
      "Maintain evidence of control execution (approvals, logs, reviews)",
      "Establish document retention policies aligned to requirements",
      "Organize evidence to support internal/external audits",
    ],
    outputs: [
      "Control narratives and process documentation",
      "Evidence repository organized by control",
      "Audit-ready documentation packages",
    ],
  },
  {
    number: 5,
    title: "Support Risk Assessment Activities",
    description: "Participate in risk identification and assessment processes. Provide operational insights to inform risk analysis and control design.",
    actions: [
      "Identify operational risks within your processes",
      "Assess likelihood and impact of identified risks",
      "Evaluate effectiveness of existing controls",
      "Recommend control enhancements to address gaps",
      "Monitor risk environment for changes requiring control updates",
    ],
    outputs: [
      "Risk identification documentation",
      "Control effectiveness assessments",
      "Recommendations for control improvements",
    ],
  },
  {
    number: 6,
    title: "Facilitate Information Flow",
    description: "Ensure accurate and timely information flows to support internal control. Communicate control-related information across the organization.",
    actions: [
      "Report control performance metrics to management",
      "Communicate control deficiencies and incidents",
      "Share control best practices across teams",
      "Provide feedback on control design effectiveness",
      "Escalate control failures and risk events appropriately",
    ],
    outputs: [
      "Control performance reports",
      "Deficiency escalation documentation",
      "Best practice sharing documentation",
    ],
  },
  {
    number: 7,
    title: "Respond to Audit Findings",
    description: "Address internal control deficiencies identified through audits and assessments. Implement corrective actions and monitor remediation effectiveness.",
    actions: [
      "Analyze root causes of control deficiencies",
      "Develop corrective action plans with timelines",
      "Implement control enhancements and remediation",
      "Validate corrective action effectiveness through testing",
      "Report remediation progress to stakeholders",
    ],
    outputs: [
      "Root cause analysis documentation",
      "Corrective action plans",
      "Remediation evidence and validation testing",
    ],
  },
];
