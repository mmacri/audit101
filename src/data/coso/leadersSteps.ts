import { LearningStep } from "@/components/shared/StepSection";

export const leadersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Establish Control Environment and Tone at Top",
    description: "Set the foundation for internal control through organizational values, ethics, and commitment to integrity. Demonstrate oversight and accountability at all levels.",
    actions: [
      "Demonstrate commitment to integrity and ethical values",
      "Establish board independence and oversight responsibilities",
      "Define organizational structure and reporting relationships",
      "Demonstrate commitment to competence and human capital",
      "Hold individuals accountable for internal control responsibilities",
    ],
    outputs: [
      "Code of conduct and ethics policies",
      "Board governance charter",
      "Organizational structure documentation",
      "Accountability framework",
    ],
  },
  {
    number: 2,
    title: "Define Objectives and Risk Appetite",
    description: "Establish clear organizational objectives aligned with mission and strategy. Define risk appetite and tolerance levels to guide risk assessment and control design.",
    actions: [
      "Define strategic, operations, reporting, and compliance objectives",
      "Establish risk appetite statement and tolerance levels",
      "Cascade objectives throughout organizational levels",
      "Align objectives with resource allocation and priorities",
      "Communicate objectives clearly across the organization",
    ],
    outputs: [
      "Strategic plan with defined objectives",
      "Risk appetite statement",
      "Cascading objectives documentation",
    ],
  },
  {
    number: 3,
    title: "Oversee Enterprise Risk Assessment",
    description: "Establish risk assessment process identifying and analyzing risks to organizational objectives. Ensure comprehensive risk identification and assessment.",
    actions: [
      "Implement enterprise risk assessment methodology",
      "Identify internal and external risks to objectives",
      "Assess significance of risks (likelihood and impact)",
      "Determine risk responses (accept, avoid, reduce, share)",
      "Assess risk of fraud and consider potential for override",
    ],
    outputs: [
      "Enterprise risk assessment methodology",
      "Risk register and assessment",
      "Risk response strategies",
      "Fraud risk assessment",
    ],
  },
  {
    number: 4,
    title: "Design and Implement Control System",
    description: "Establish control activities across the organization to mitigate risks to acceptable levels. Ensure control system supports all five COSO components.",
    actions: [
      "Design control activities addressing identified risks",
      "Deploy general controls over technology supporting control activities",
      "Establish policies and procedures across the organization",
      "Implement segregation of duties and authorization frameworks",
      "Allocate resources to support control implementation",
    ],
    outputs: [
      "Control design documentation",
      "Policies and procedures manual",
      "Segregation of duties framework",
      "Resource allocation for controls",
    ],
  },
  {
    number: 5,
    title: "Establish Information and Communication Systems",
    description: "Ensure quality information flows throughout organization to support internal control. Establish internal and external communication channels.",
    actions: [
      "Implement systems providing relevant, quality information",
      "Establish internal communication channels for control information",
      "Create external communication mechanisms for stakeholders",
      "Develop reporting systems for control performance and deficiencies",
      "Ensure timely communication of control issues to appropriate parties",
    ],
    outputs: [
      "Information systems supporting control",
      "Communication protocols and channels",
      "Control reporting framework",
    ],
  },
  {
    number: 6,
    title: "Implement Monitoring and Oversight",
    description: "Establish ongoing and separate evaluations to assess control effectiveness. Ensure control deficiencies are identified and remediated timely.",
    actions: [
      "Conduct ongoing monitoring of control effectiveness",
      "Perform periodic separate evaluations (internal audits)",
      "Establish deficiency evaluation and escalation procedures",
      "Remediate identified control deficiencies timely",
      "Communicate control deficiencies to board and management",
    ],
    outputs: [
      "Monitoring program documentation",
      "Internal audit plan",
      "Deficiency tracking and remediation system",
    ],
  },
  {
    number: 7,
    title: "Report on Internal Control Effectiveness",
    description: "Assess and report on internal control over financial reporting and operations. Provide management assertions on control effectiveness to stakeholders.",
    actions: [
      "Conduct management assessment of internal control effectiveness",
      "Document assessment methodology and results",
      "Identify material weaknesses and significant deficiencies",
      "Provide management assertion on control effectiveness",
      "Coordinate with external auditors on control reporting requirements",
    ],
    outputs: [
      "Management assessment report",
      "Material weakness and significant deficiency documentation",
      "Management assertion on internal control effectiveness",
    ],
  },
];
