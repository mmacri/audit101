import { LearningStep } from "@/components/shared/StepSection";

export const nist80053AuditorsSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand NIST 800-53 Assessment Methodology",
    description: "Learn the NIST 800-53A assessment procedures, sampling approaches, and how to evaluate control implementation and effectiveness.",
    actions: [
      "Study NIST SP 800-53A Rev. 5 assessment procedures for each control family",
      "Understand the three assessment methods: examine, interview, test",
      "Learn sampling techniques for large control populations",
      "Review the control assessment lifecycle: preparation, execution, reporting",
      "Understand assessment depth levels: basic, focused, comprehensive"
    ],
    outputs: [
      "Personal notes on NIST 800-53A assessment methodology",
      "Assessment procedure quick reference for control families"
    ],
    resources: [
      { title: "NIST SP 800-53A Rev. 5", url: "https://csrc.nist.gov/publications/detail/sp/800-53a/rev-5/final", isTemplate: false },
      { title: "Assessment Procedure Checklist", isTemplate: true }
    ],
    contentTypes: ["reading", "documentation", "video"],
    duration: "4-5 hours",
    learningObjectives: [
      "Master NIST 800-53A assessment methodology",
      "Understand examine-interview-test approach",
      "Apply appropriate assessment depth"
    ],
    deliverables: [
      "Assessment methodology notes",
      "Control family reference guide",
      "Assessment depth decision matrix"
    ]
  },
  {
    number: 2,
    title: "Plan the Assessment Scope and Approach",
    description: "Define assessment scope, select controls for testing, determine sampling approach, and plan the assessment schedule.",
    actions: [
      "Review system categorization and selected control baseline",
      "Identify common controls vs. system-specific controls",
      "Select controls for testing based on risk, criticality, and prior findings",
      "Determine assessment depth (basic/focused/comprehensive) per control",
      "Plan assessment activities: document review, interviews, technical testing",
      "Coordinate schedule with system owners and control owners"
    ],
    outputs: [
      "Assessment plan with scope, approach, and schedule",
      "Control selection matrix with assessment depth per control",
      "Sampling plan for controls with large populations",
      "Assessment calendar and stakeholder coordination"
    ],
    resources: [
      { title: "Assessment Plan Template", isTemplate: true },
      { title: "Control Sampling Worksheet", isTemplate: true }
    ],
    contentTypes: ["exercise", "template", "documentation"],
    duration: "5-6 hours",
    learningObjectives: [
      "Define appropriate assessment scope",
      "Select controls based on risk",
      "Plan efficient assessment activities"
    ],
    deliverables: [
      "Complete assessment plan",
      "Control selection matrix",
      "Sampling methodology"
    ]
  },
  {
    number: 3,
    title: "Review System Security Plans and Documentation",
    description: "Examine System Security Plans (SSPs), control implementation statements, configuration documentation, and policies.",
    actions: [
      "Review SSP for completeness and accuracy of control descriptions",
      "Validate that control implementation statements address all control requirements",
      "Review supporting policies, procedures, and standards",
      "Examine configuration baselines and hardening documentation",
      "Review diagrams (network, data flow, system boundaries)",
      "Identify gaps, inconsistencies, and areas requiring clarification"
    ],
    outputs: [
      "Document review findings and gap analysis",
      "Information request list for system and control owners",
      "Initial risk observations based on documentation"
    ],
    resources: [
      { title: "Document Review Checklist", isTemplate: true }
    ],
    contentTypes: ["exercise", "documentation", "template"],
    duration: "6-7 hours",
    learningObjectives: [
      "Conduct thorough documentation review",
      "Identify gaps and inconsistencies",
      "Prepare focused interview questions"
    ],
    deliverables: [
      "Documentation review findings",
      "Gap analysis report",
      "Information request list"
    ]
  },
  {
    number: 4,
    title: "Conduct Interviews with Control Owners",
    description: "Interview system owners, control owners, and practitioners to validate control implementation and understand operational practices.",
    actions: [
      "Prepare interview guides tailored to each control family",
      "Interview system owners about boundary definitions, architecture, and risk management",
      "Interview control owners about implementation decisions, compensating controls, and challenges",
      "Interview practitioners about day-to-day control operations and evidence collection",
      "Validate consistency between documentation, interviews, and technical configurations",
      "Document interview responses and follow-up questions"
    ],
    outputs: [
      "Interview summaries with findings and observations",
      "Validation of control implementation claims",
      "List of controls requiring technical testing or additional evidence"
    ],
    resources: [
      { title: "Interview Guide Template", isTemplate: true }
    ],
    contentTypes: ["exercise", "documentation", "template"],
    duration: "5-6 hours",
    learningObjectives: [
      "Conduct effective control interviews",
      "Validate documentation accuracy",
      "Identify areas for technical testing"
    ],
    deliverables: [
      "Interview summaries and notes",
      "Control validation findings",
      "Technical testing requirements"
    ]
  },
  {
    number: 5,
    title: "Perform Technical Testing and Evidence Validation",
    description: "Conduct hands-on technical testing, validate evidence artifacts, and verify that controls are operating as described.",
    actions: [
      "Test access controls: attempt unauthorized access, verify least privilege, review access logs",
      "Test audit capabilities: review log configurations, retention, protection, and monitoring",
      "Test vulnerability management: review scan results, patch status, and remediation workflows",
      "Test configuration management: review baselines, change tickets, and configuration drift",
      "Validate evidence samples: access review artifacts, change records, vulnerability reports",
      "Use tool-based testing where appropriate (vulnerability scanners, config auditors)"
    ],
    outputs: [
      "Technical testing results and evidence validation findings",
      "Screenshots, tool outputs, and technical artifacts",
      "List of controls passing/failing technical tests"
    ],
    resources: [
      { title: "Technical Testing Checklist", isTemplate: true }
    ],
    contentTypes: ["exercise", "documentation", "interactive"],
    duration: "7-8 hours",
    learningObjectives: [
      "Execute hands-on technical testing",
      "Validate control effectiveness",
      "Document technical findings"
    ],
    deliverables: [
      "Technical testing results",
      "Evidence validation documentation",
      "Control effectiveness ratings"
    ]
  },
  {
    number: 6,
    title: "Document Findings and Risk Ratings",
    description: "Compile assessment findings, assign risk ratings, identify root causes, and draft the Security Assessment Report (SAR).",
    actions: [
      "Document findings for each assessed control with evidence references",
      "Classify findings: Not Satisfied, Partially Satisfied, Satisfied, Not Applicable",
      "Assign risk ratings based on likelihood and impact",
      "Identify root causes and contributing factors for control weaknesses",
      "Distinguish between control design issues and implementation/effectiveness issues",
      "Draft preliminary findings for discussion with system owners"
    ],
    outputs: [
      "Draft Security Assessment Report (SAR) with findings per control",
      "Risk ratings and root cause analysis",
      "Preliminary recommendations for remediation"
    ],
    resources: [
      { title: "Security Assessment Report Template", isTemplate: true }
    ],
    contentTypes: ["exercise", "template", "documentation"],
    duration: "5-6 hours",
    learningObjectives: [
      "Document clear, actionable findings",
      "Assign appropriate risk ratings",
      "Identify root causes"
    ],
    deliverables: [
      "Draft Security Assessment Report",
      "Risk-rated findings list",
      "Root cause analysis"
    ]
  },
  {
    number: 7,
    title: "Support Remediation and POA&M Management",
    description: "Work with system owners on remediation plans, validate POA&Ms, and track ongoing continuous monitoring.",
    actions: [
      "Review and validate proposed remediation approaches",
      "Ensure POA&Ms include clear milestones, resources, and completion dates",
      "Provide guidance on acceptable compensating controls",
      "Support prioritization of remediation activities based on risk",
      "Track POA&M progress and closure",
      "Plan for ongoing continuous monitoring and periodic reassessment"
    ],
    outputs: [
      "Validated POA&Ms with assessment team concurrence",
      "Continuous monitoring plan and reassessment schedule",
      "Final Security Assessment Report with accepted findings and remediation plans"
    ],
    resources: [
      { title: "POA&M Validation Checklist", isTemplate: true },
      { title: "Continuous Monitoring Plan Template", isTemplate: true }
    ],
    contentTypes: ["exercise", "template", "documentation"],
    duration: "4-5 hours",
    learningObjectives: [
      "Validate remediation plans",
      "Establish continuous monitoring",
      "Track POA&M completion"
    ],
    deliverables: [
      "Validated POA&Ms",
      "Continuous monitoring plan",
      "Final Security Assessment Report"
    ]
  }
];
