import { LearningStep } from "@/components/shared/StepSection";

export const auditorsSteps: LearningStep[] = [
  {
    number: 1,
    title: "Plan Internal Control Audit",
    description: "Develop risk-based audit plan covering the five COSO components and 17 principles. Identify high-risk areas and prioritize audit scope based on materiality and risk.",
    actions: [
      "Assess organizational risk environment and prior audit results",
      "Define audit scope covering material business processes and controls",
      "Develop audit program testing control design and operating effectiveness",
      "Establish materiality thresholds for control deficiencies",
    ],
    outputs: [
      "Internal control audit plan",
      "Risk assessment for audit scope",
      "Audit program with test procedures",
    ],
  },
  {
    number: 2,
    title: "Assess Control Environment",
    description: "Evaluate the control environment including tone at top, organizational structure, commitment to competence, and accountability mechanisms.",
    actions: [
      "Evaluate board independence and oversight effectiveness",
      "Assess management's commitment to integrity and ethical values",
      "Review organizational structure and reporting relationships",
      "Evaluate human capital policies and competency frameworks",
      "Assess accountability mechanisms and performance evaluation",
    ],
    outputs: [
      "Control environment assessment",
      "Board oversight evaluation",
      "Tone at top assessment documentation",
    ],
  },
  {
    number: 3,
    title: "Evaluate Risk Assessment Process",
    description: "Test the organization's risk assessment process including risk identification, analysis, and response. Verify risks to objectives are comprehensively assessed.",
    actions: [
      "Review risk assessment methodology and procedures",
      "Test completeness of risk identification across objectives",
      "Evaluate risk analysis for likelihood and impact assessment",
      "Assess risk response decisions and control design linkage",
      "Verify fraud risk assessment and override considerations",
    ],
    outputs: [
      "Risk assessment process evaluation",
      "Risk identification completeness testing",
      "Risk response assessment documentation",
    ],
  },
  {
    number: 4,
    title: "Test Control Activities Design and Effectiveness",
    description: "Evaluate design adequacy and test operating effectiveness of control activities. Assess whether controls effectively mitigate risks to acceptable levels.",
    actions: [
      "Perform control walkthroughs to understand design",
      "Test control operating effectiveness through sampling",
      "Evaluate IT general controls supporting application controls",
      "Assess segregation of duties and authorization controls",
      "Test automated controls and their IT dependencies",
    ],
    outputs: [
      "Control design evaluation",
      "Control testing results and documentation",
      "IT general controls assessment",
    ],
  },
  {
    number: 5,
    title: "Assess Information and Communication",
    description: "Evaluate quality and flow of information supporting internal control. Test internal and external communication channels for control-related information.",
    actions: [
      "Assess quality and relevance of information supporting controls",
      "Test communication channels for control deficiencies and issues",
      "Evaluate reporting systems for completeness and accuracy",
      "Review external communication mechanisms for stakeholders",
      "Verify timely escalation of control issues to appropriate levels",
    ],
    outputs: [
      "Information quality assessment",
      "Communication channels evaluation",
      "Reporting system testing results",
    ],
  },
  {
    number: 6,
    title: "Evaluate Monitoring Activities",
    description: "Assess the organization's ongoing and separate evaluations of control effectiveness. Verify control deficiencies are identified, evaluated, and remediated.",
    actions: [
      "Review ongoing monitoring procedures and key indicators",
      "Assess separate evaluation procedures (internal audit program)",
      "Test deficiency identification and evaluation processes",
      "Verify timely remediation of identified control deficiencies",
      "Review communication of deficiencies to board and management",
    ],
    outputs: [
      "Monitoring activities assessment",
      "Deficiency management evaluation",
      "Remediation tracking review",
    ],
  },
  {
    number: 7,
    title: "Report Control Deficiencies and Recommendations",
    description: "Document audit findings with severity classifications. Provide risk-based recommendations for control improvements and track remediation.",
    actions: [
      "Classify deficiencies (material weakness, significant deficiency, deficiency)",
      "Document root causes and control design/operating issues",
      "Provide specific recommendations for control improvements",
      "Communicate findings to appropriate management levels",
      "Conduct follow-up testing to validate remediation effectiveness",
    ],
    outputs: [
      "Internal control audit report",
      "Deficiency classification and root cause analysis",
      "Remediation recommendations and follow-up plan",
    ],
  },
];
