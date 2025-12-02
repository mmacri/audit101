import { LearningStep } from "@/components/shared/StepSection";

export const cisControlsAuditorsSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand CIS Controls Assessment Approach",
    description: "Learn how to assess CIS Controls implementation using the CIS Controls Assessment Specification and evaluation methods.",
    actions: [
      "Review CIS Controls v8 and the Assessment Specification (CIS-CAT)",
      "Understand the two assessment approaches: manual and automated",
      "Learn safeguard assessment methods: examine, interview, test",
      "Understand Implementation Group scoping and how it affects assessment",
      "Review CIS benchmarks and hardening standards for technical testing"
    ],
    outputs: [
      "Understanding of CIS Controls assessment methodology",
      "Assessment planning framework"
    ],
    resources: [
      { title: "CIS Controls Assessment Specification", url: "https://www.cisecurity.org/controls/cis-controls-assessment-specification", isTemplate: false },
      { title: "Assessment Planning Checklist", isTemplate: true }
    ],
    contentTypes: ["reading", "documentation", "video"],
    duration: "4-5 hours",
    learningObjectives: [
      "Master CIS Controls assessment methodology",
      "Understand Implementation Group scoping",
      "Learn manual and automated assessment approaches"
    ],
    deliverables: [
      "Assessment methodology notes",
      "IG-specific assessment framework",
      "Technical testing approach"
    ]
  },
  {
    number: 2,
    title: "Plan Assessment Scope and Sampling",
    description: "Define assessment scope, determine Implementation Group to assess against, and plan sampling for large control populations.",
    actions: [
      "Determine target Implementation Group (IG1, IG2, or IG3) for the assessment",
      "Select controls and safeguards for assessment based on risk and maturity",
      "Define assessment boundaries (in-scope systems, business units, locations)",
      "Plan sampling approach for asset inventories, access reviews, vulnerability scans",
      "Schedule assessment activities and coordinate with stakeholders"
    ],
    outputs: [
      "Assessment scope statement and Implementation Group designation",
      "Sampling plan for controls with large populations",
      "Assessment schedule and stakeholder coordination"
    ],
    resources: [
      { title: "Scope and Sampling Worksheet", isTemplate: true }
    ],
    contentTypes: ["exercise", "template", "documentation"],
    duration: "5-6 hours",
    learningObjectives: [
      "Define appropriate assessment scope",
      "Select Implementation Group target",
      "Plan effective sampling approach"
    ],
    deliverables: [
      "Assessment scope document",
      "Sampling methodology",
      "Assessment schedule"
    ]
  },
  {
    number: 3,
    title: "Review Documentation and Policies",
    description: "Examine policies, procedures, configuration standards, and supporting documentation for CIS Controls implementation.",
    actions: [
      "Review asset management policies and procedures (Controls 1 & 2)",
      "Examine data protection and secure configuration standards (Controls 3 & 4)",
      "Review access control policies and MFA implementation (Controls 5 & 6)",
      "Examine vulnerability and log management procedures (Controls 7 & 8)",
      "Review incident response and security awareness programs (Controls 17 & 14)",
      "Validate that documentation addresses applicable safeguards"
    ],
    outputs: [
      "Document review findings per control",
      "List of controls with adequate vs. inadequate documentation",
      "Information requests for missing evidence"
    ],
    resources: [
      { title: "Documentation Review Checklist", isTemplate: true }
    ],
    contentTypes: ["exercise", "documentation", "template"],
    duration: "6-7 hours",
    learningObjectives: [
      "Review documentation comprehensively",
      "Identify documentation gaps",
      "Prepare for technical validation"
    ],
    deliverables: [
      "Documentation review findings",
      "Gap analysis by control",
      "Information request list"
    ]
  },
  {
    number: 4,
    title: "Conduct Interviews and Walkthroughs",
    description: "Interview control owners and practitioners to validate implementation and understand operational practices.",
    actions: [
      "Interview asset management owners about inventory processes",
      "Interview IAM owners about access control and MFA implementation",
      "Interview vulnerability management teams about scanning and patching",
      "Interview SIEM/logging teams about log collection and monitoring",
      "Interview security awareness coordinators about training programs",
      "Validate consistency between documentation and operational reality"
    ],
    outputs: [
      "Interview summaries with validation findings",
      "Confirmation of control implementation claims",
      "List of controls requiring technical testing"
    ],
    resources: [
      { title: "Interview Guide per CIS Control", isTemplate: true }
    ],
    contentTypes: ["exercise", "documentation", "template"],
    duration: "5-6 hours",
    learningObjectives: [
      "Conduct effective control interviews",
      "Validate implementation claims",
      "Identify technical testing needs"
    ],
    deliverables: [
      "Interview summaries",
      "Control validation findings",
      "Technical testing requirements"
    ]
  },
  {
    number: 5,
    title: "Perform Technical Testing",
    description: "Conduct hands-on technical testing using CIS-CAT, configuration scanners, and manual validation methods.",
    actions: [
      "Run CIS-CAT Pro assessments against systems for automated configuration validation",
      "Manually test asset inventory completeness and accuracy",
      "Test access controls: MFA enforcement, least privilege, privileged account management",
      "Validate vulnerability scanning coverage and patch compliance",
      "Test log collection, retention, and protection controls",
      "Review EDR deployment and malware defense coverage"
    ],
    outputs: [
      "CIS-CAT Pro assessment results",
      "Technical testing findings per control",
      "Evidence samples and screenshots"
    ],
    resources: [
      { title: "Technical Testing Checklist", isTemplate: true },
      { title: "CIS-CAT Pro", url: "https://www.cisecurity.org/cybersecurity-tools/cis-cat-pro", isTemplate: false }
    ],
    contentTypes: ["exercise", "interactive", "documentation"],
    duration: "7-8 hours",
    learningObjectives: [
      "Execute automated and manual testing",
      "Validate control effectiveness",
      "Document technical findings"
    ],
    deliverables: [
      "CIS-CAT Pro results",
      "Technical testing documentation",
      "Control effectiveness evidence"
    ]
  },
  {
    number: 6,
    title: "Document Findings and Maturity Ratings",
    description: "Compile assessment findings, assign maturity ratings per control, and draft the assessment report.",
    actions: [
      "Evaluate implementation for each assessed safeguard",
      "Assign maturity levels: Not Implemented, Partially Implemented, Largely Implemented, Fully Implemented",
      "Calculate overall Implementation Group achievement scores",
      "Identify root causes and patterns in control weaknesses",
      "Provide specific, actionable recommendations for improvement",
      "Draft assessment report with findings, ratings, and recommendations"
    ],
    outputs: [
      "CIS Controls assessment report with maturity ratings per control",
      "Implementation Group achievement scorecard",
      "Prioritized recommendations for remediation"
    ],
    resources: [
      { title: "Assessment Report Template", isTemplate: true },
      { title: "Maturity Rating Guide", isTemplate: true }
    ],
    contentTypes: ["exercise", "template", "documentation"],
    duration: "5-6 hours",
    learningObjectives: [
      "Assign appropriate maturity ratings",
      "Calculate IG achievement scores",
      "Draft comprehensive assessment report"
    ],
    deliverables: [
      "Assessment report with maturity ratings",
      "IG achievement scorecard",
      "Prioritized recommendations"
    ]
  },
  {
    number: 7,
    title: "Support Remediation and Continuous Assessment",
    description: "Work with teams on remediation plans, validate improvements, and establish continuous CIS Controls monitoring.",
    actions: [
      "Review and validate proposed remediation plans",
      "Prioritize remediation based on risk and Implementation Group goals",
      "Track remediation progress and retest improved controls",
      "Establish continuous monitoring using CIS-CAT and automated tools",
      "Plan for periodic reassessment (annual or bi-annual)",
      "Support advancement to higher Implementation Groups"
    ],
    outputs: [
      "Validated remediation plans",
      "Continuous monitoring framework",
      "Reassessment schedule and roadmap to higher Implementation Groups"
    ],
    resources: [
      { title: "Remediation Tracking Template", isTemplate: true }
    ],
    contentTypes: ["exercise", "template", "documentation"],
    duration: "4-5 hours",
    learningObjectives: [
      "Validate remediation approaches",
      "Establish continuous monitoring",
      "Plan maturity advancement"
    ],
    deliverables: [
      "Validated remediation plans",
      "Continuous monitoring procedures",
      "IG advancement roadmap"
    ]
  }
];
