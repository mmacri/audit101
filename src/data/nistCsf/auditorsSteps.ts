import { LearningStep } from "@/components/shared/StepSection";

export const nistCsfAuditorsSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand CSF Assessment Methodology",
    description: "Learn how to assess CSF implementation, evaluate profile achievement, and measure organizational maturity using CSF Tiers.",
    actions: [
      "Study NIST CSF 2.0 structure: Functions, Categories, Subcategories",
      "Understand CSF Profiles (current vs. target) and how to assess achievement",
      "Learn CSF Tiers (1-4) as measures of risk management process maturity",
      "Review assessment approaches: self-assessment, independent assessment, continuous monitoring",
      "Understand relationship between CSF and other frameworks (800-53, CIS, ISO)"
    ],
    outputs: [
      "Understanding of CSF assessment methodology",
      "Assessment planning framework"
    ],
    resources: [
      { title: "CSF Assessment Guide", url: "https://www.nist.gov/cyberframework/assessment-auditing-resources", isTemplate: false }
    ]
  },
  {
    number: 2,
    title: "Plan CSF Assessment Scope",
    description: "Define assessment scope, determine which CSF Functions and Categories to assess, and plan the assessment approach.",
    actions: [
      "Review the organization's current and target CSF profiles",
      "Determine assessment scope: all Functions or prioritized subset",
      "Select specific Subcategories for detailed assessment based on risk",
      "Define assessment boundaries (business units, systems, locations)",
      "Plan assessment activities: document review, interviews, technical testing",
      "Schedule assessment and coordinate with stakeholders"
    ],
    outputs: [
      "Assessment scope statement and approach",
      "Selected Subcategories for assessment",
      "Assessment schedule and coordination plan"
    ],
    resources: [
      { title: "CSF Assessment Scope Template", isTemplate: true }
    ]
  },
  {
    number: 3,
    title: "Review Governance and Policies (Govern Function)",
    description: "Assess organizational cybersecurity governance, strategy, policies, and risk management processes.",
    actions: [
      "Review cybersecurity strategy and alignment with business objectives (GV.OC)",
      "Examine roles, responsibilities, and authorities documentation (GV.OC)",
      "Review cybersecurity policies and procedures (GV.PO)",
      "Assess risk management strategy and practices (GV.RM)",
      "Evaluate supply chain risk management approach (GV.SC)",
      "Interview leadership on governance and oversight"
    ],
    outputs: [
      "Govern function assessment findings",
      "Policy and governance gap analysis"
    ],
    resources: [
      { title: "Govern Function Assessment Checklist", isTemplate: true }
    ]
  },
  {
    number: 4,
    title: "Assess Identify, Protect, and Detect Functions",
    description: "Evaluate asset management, risk assessment, protective controls, and detection capabilities.",
    actions: [
      "Identify: Review asset inventories, risk assessments, vulnerability management (ID.AM, ID.RA)",
      "Protect: Test access controls, data protection, configurations, awareness programs (PR.AC, PR.DS, PR.IP)",
      "Detect: Evaluate monitoring capabilities, detection processes, event analysis (DE.CM, DE.AE, DE.DP)",
      "Interview control owners and review supporting documentation",
      "Conduct technical testing of controls and capabilities",
      "Validate evidence for selected Subcategories"
    ],
    outputs: [
      "Assessment findings for Identify, Protect, Detect Functions",
      "Technical testing results and evidence validation",
      "Control effectiveness ratings per Subcategory"
    ],
    resources: [
      { title: "CSF Technical Testing Checklist", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Assess Respond and Recover Functions",
    description: "Evaluate incident response and recovery capabilities.",
    actions: [
      "Respond: Review incident response plans, analysis capabilities, mitigation procedures, communications (RS.MA, RS.AN, RS.MI, RS.CO)",
      "Recover: Assess recovery planning, improvements, communications (RC.RP, RC.RP, RC.CO)",
      "Review incident response exercises and actual incident handling",
      "Test backup and recovery procedures",
      "Interview incident response and business continuity teams",
      "Validate incident documentation and lessons learned"
    ],
    outputs: [
      "Assessment findings for Respond and Recover Functions",
      "Incident response and recovery capability evaluation",
      "Recovery testing validation"
    ],
    resources: [
      { title: "Respond/Recover Assessment Template", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Evaluate Profile Achievement and Tier Maturity",
    description: "Assess current profile achievement, compare to target profile, and evaluate organizational CSF Tier maturity.",
    actions: [
      "Calculate current profile achievement: which Subcategories are fully/partially/not achieved",
      "Compare current profile to target profile and identify gaps",
      "Assess CSF Tier characteristics: risk management process, integrated risk approach, external participation",
      "Evaluate whether the organization operates at Tier 1, 2, 3, or 4",
      "Identify maturity gaps and improvement opportunities",
      "Document strengths and areas for advancement"
    ],
    outputs: [
      "Current profile achievement scorecard",
      "Gap analysis vs. target profile",
      "CSF Tier assessment and maturity rating",
      "Profile and Tier improvement recommendations"
    ],
    resources: [
      { title: "CSF Profile Scorecard Template", isTemplate: true },
      { title: "CSF Tier Assessment Worksheet", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Report Findings and Support Improvement",
    description: "Document assessment findings, provide recommendations, and support the organization's CSF improvement roadmap.",
    actions: [
      "Compile assessment findings by Function and Category",
      "Provide specific, actionable recommendations for profile gap closure",
      "Suggest priority improvements based on risk and business impact",
      "Support development of remediation roadmap and timelines",
      "Recommend approaches for advancing CSF Tier maturity",
      "Plan for continuous CSF assessment and monitoring"
    ],
    outputs: [
      "CSF assessment report with findings and recommendations",
      "Profile gap closure roadmap",
      "Tier advancement recommendations",
      "Continuous assessment and monitoring plan"
    ],
    resources: [
      { title: "CSF Assessment Report Template", isTemplate: true }
    ]
  }
];
