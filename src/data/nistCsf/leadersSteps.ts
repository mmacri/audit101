import { LearningStep } from "@/components/shared/StepSection";

export const nistCsfLeadersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand CSF as a Risk Management Framework",
    description: "Learn how the NIST Cybersecurity Framework provides a strategic approach to managing cybersecurity risk aligned with business objectives.",
    actions: [
      "Review NIST CSF 2.0 structure: 6 Functions (Govern, Identify, Protect, Detect, Respond, Recover)",
      "Understand the new Govern function's emphasis on organizational context and leadership",
      "Learn how CSF Profiles align cybersecurity activities with business requirements and risk tolerance",
      "Understand CSF Tiers as a measure of risk management process maturity",
      "Learn the business value: risk communication, resource prioritization, stakeholder coordination"
    ],
    outputs: [
      "Executive understanding of CSF framework and strategic value",
      "Awareness of CSF Tiers and Profile concepts"
    ],
    resources: [
      { title: "Executive CSF Overview", isTemplate: true }
    ]
  },
  {
    number: 2,
    title: "Establish Organizational Context (Govern Function)",
    description: "Define organizational cybersecurity strategy, roles, policy, and oversight structures.",
    actions: [
      "Establish cybersecurity strategy aligned with business objectives (GV.OC)",
      "Define roles, responsibilities, and authorities (GV.OC)",
      "Approve cybersecurity policies and communicate them across the organization (GV.PO)",
      "Establish risk management strategy and risk tolerance (GV.RM)",
      "Define cybersecurity supply chain risk management approach (GV.SC)",
      "Ensure adequate cybersecurity resources and budget (GV.OC)"
    ],
    outputs: [
      "Cybersecurity strategy and governance charter",
      "Approved policies and procedures",
      "Risk management strategy and risk appetite statement",
      "Resource allocation and budget approval"
    ],
    resources: [
      { title: "Govern Function Implementation Guide", isTemplate: true }
    ]
  },
  {
    number: 3,
    title: "Build Current and Target CSF Profiles",
    description: "Assess current cybersecurity posture and define target state aligned with business priorities and risk tolerance.",
    actions: [
      "Conduct current profile assessment: which CSF outcomes are currently achieved?",
      "Define target profile based on business priorities, risk, regulatory requirements",
      "Identify gaps between current and target profiles",
      "Prioritize gaps based on risk and business impact",
      "Approve the target profile and gap remediation roadmap"
    ],
    outputs: [
      "Current CSF profile assessment",
      "Target CSF profile aligned to business risk",
      "Gap analysis and prioritized roadmap",
      "Executive approval of profile and investment plan"
    ],
    resources: [
      { title: "CSF Profile Development Worksheet", isTemplate: true }
    ]
  },
  {
    number: 4,
    title: "Allocate Resources and Prioritize Investments",
    description: "Fund cybersecurity initiatives to close profile gaps and advance organizational maturity.",
    actions: [
      "Review resource requirements for target profile achievement",
      "Approve budgets for tools, staff, training, and assessments",
      "Prioritize investments based on risk reduction and business value",
      "Balance cybersecurity investments with other business priorities",
      "Ensure adequate staffing and expertise for CSF implementation"
    ],
    outputs: [
      "Approved cybersecurity budget aligned to CSF profile",
      "Investment prioritization and multi-year funding plan",
      "Staffing and capability development plan"
    ],
    resources: [
      { title: "CSF Investment Planning Template", isTemplate: true }
    ]
  },
  {
    number: 5,
    title: "Monitor Progress and CSF Metrics",
    description: "Track profile achievement, review metrics, and ensure continuous progress toward target state.",
    actions: [
      "Establish KPIs for CSF profile achievement and gap closure",
      "Receive regular status reports on profile implementation progress",
      "Review dashboards showing outcome achievement by Function and Category",
      "Monitor risk metrics and trends",
      "Track program maturity advancement (CSF Tier progression)",
      "Address roadblocks and resource constraints"
    ],
    outputs: [
      "Executive CSF dashboard with profile metrics",
      "Monthly/quarterly status reports",
      "Risk trending and profile achievement tracking"
    ],
    resources: [
      { title: "Executive CSF Metrics Dashboard", isTemplate: true }
    ]
  },
  {
    number: 6,
    title: "Coordinate Across Stakeholders",
    description: "Facilitate coordination between IT, security, business units, and external partners on cybersecurity activities.",
    actions: [
      "Sponsor cross-functional CSF governance committees",
      "Facilitate business unit engagement in profile development",
      "Coordinate with third parties and suppliers on cybersecurity requirements",
      "Engage with board and senior leadership on cybersecurity posture",
      "Support communication of cybersecurity risks and priorities to stakeholders"
    ],
    outputs: [
      "Stakeholder engagement and communication plan",
      "Cross-functional governance structure",
      "Board and executive reporting on CSF progress"
    ],
    resources: [
      { title: "Stakeholder Engagement Plan Template", isTemplate: true }
    ]
  },
  {
    number: 7,
    title: "Drive Continuous Improvement and Maturity",
    description: "Champion culture of continuous improvement, advance CSF Tier maturity, and communicate value to leadership.",
    actions: [
      "Promote continuous improvement of cybersecurity practices",
      "Advance organizational CSF Tier (from Tier 1 to Tier 2 to Tier 3)",
      "Integrate CSF with enterprise risk management and compliance programs",
      "Communicate CSF program achievements to board and executives",
      "Stay informed on CSF updates and evolving threats",
      "Celebrate successes and recognize high-performing teams"
    ],
    outputs: [
      "Continuous improvement roadmap",
      "CSF Tier advancement plan and metrics",
      "Board-level reporting on cybersecurity posture and value",
      "Program maturity assessment"
    ],
    resources: [
      { title: "CSF Maturity Assessment Template", isTemplate: true },
      { title: "Board Reporting Template", isTemplate: true }
    ]
  }
];
