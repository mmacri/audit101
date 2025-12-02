import { LearningStep } from "@/components/shared/StepSection";

export const nist80053LeadersSteps: LearningStep[] = [
  {
    number: 1,
    title: "Understand NIST 800-53 Program Requirements",
    description: "Learn your leadership role in establishing and overseeing a NIST 800-53 compliance program, including governance, resource allocation, and risk management.",
    actions: [
      "Understand the PM (Program Management) family and your responsibilities",
      "Review NIST 800-53 Rev. 5 structure and the risk management framework (RMF)",
      "Learn the relationship between NIST 800-53 and other standards (FISMA, FedRAMP, DoD)",
      "Understand Low/Moderate/High baselines and how they drive resource needs",
      "Identify your role in policy approval, risk acceptance, and program oversight"
    ],
    outputs: [
      "Executive summary of NIST 800-53 program scope and requirements",
      "Understanding of your decision-making authorities and accountabilities"
    ],
    resources: [
      { title: "Executive NIST 800-53 Overview", isTemplate: true }
    ],
    contentTypes: ["reading", "video", "documentation"],
    duration: "2-3 hours",
    learningObjectives: [
      "Understand NIST 800-53 and RMF framework structure",
      "Define leadership accountability in compliance program",
      "Align requirements with organizational risk tolerance"
    ],
    deliverables: [
      "Executive summary with program scope",
      "Leadership accountability matrix",
      "Risk management approach document"
    ]
  },
  {
    number: 2,
    title: "Establish Program Governance and Accountability",
    description: "Define roles, assign control ownership, establish governance bodies, and create accountability structures for your NIST 800-53 program.",
    actions: [
      "Assign an Information System Security Officer (ISSO) or equivalent",
      "Establish a security steering committee or governance board",
      "Define control ownership and assign responsibilities across teams",
      "Create RACI matrices for control implementation and assessment activities",
      "Establish escalation paths and decision-making authorities",
      "Approve program policies and charters"
    ],
    outputs: [
      "Governance charter and committee structure",
      "Control ownership matrix with named accountable parties",
      "RACI matrices for program activities",
      "Approved program policies (PM-1, PL-1 requirement)"
    ],
    resources: [
      { title: "Governance Charter Template", isTemplate: true },
      { title: "Control Ownership Matrix", isTemplate: true }
    ],
    contentTypes: ["reading", "template", "exercise"],
    duration: "4-5 hours",
    learningObjectives: [
      "Design effective governance structures",
      "Assign control ownership with clear accountability",
      "Establish decision-making and escalation processes"
    ],
    deliverables: [
      "Governance charter with committee structure",
      "Control ownership assignments",
      "RACI matrices and approved policies"
    ]
  },
  {
    number: 3,
    title: "Oversee Control Selection and Tailoring",
    description: "Approve the selection of control baselines, tailoring decisions, and common control designations that balance security requirements with operational needs.",
    actions: [
      "Review proposed control baseline (Low/Moderate/High) for each system",
      "Approve control tailoring decisions and compensating controls",
      "Designate common controls that can be inherited across systems",
      "Review and approve control overlays for specific environments (cloud, OT, etc.)",
      "Make risk-based decisions on control applicability and implementation approaches"
    ],
    outputs: [
      "Approved control baselines and tailoring documentation",
      "Common control library and inheritance documentation",
      "Approved control overlays and risk-based decisions",
      "Executive tailoring summary and rationale"
    ],
    resources: [
      { title: "Control Baseline Approval Template", isTemplate: true }
    ],
    contentTypes: ["reading", "template", "exercise"],
    duration: "3-4 hours",
    learningObjectives: [
      "Select appropriate control baselines by system",
      "Make risk-informed tailoring decisions",
      "Optimize through common control designation"
    ],
    deliverables: [
      "Control baseline approvals per system",
      "Tailoring documentation with rationale",
      "Common control library definition"
    ]
  },
  {
    number: 4,
    title: "Allocate Resources and Prioritize Investments",
    description: "Budget for control implementation, tool procurement, staffing, and assessment activities to ensure adequate program resourcing.",
    actions: [
      "Review resource requirements for control implementation and maintenance",
      "Approve budgets for security tools (SIEM, IAM, vulnerability management, etc.)",
      "Allocate staff and contractor resources for implementation and assessment",
      "Prioritize control implementation roadmap based on risk and compliance timelines",
      "Approve funding for training, assessments, and continuous monitoring",
      "Balance compliance investments with other organizational priorities"
    ],
    outputs: [
      "Approved program budget with control-specific allocations",
      "Staffing plan and resource allocation matrix",
      "Multi-year implementation roadmap with milestones",
      "Investment prioritization aligned to risk and compliance deadlines"
    ],
    resources: [
      { title: "Program Budget Template", isTemplate: true },
      { title: "Implementation Roadmap Template", isTemplate: true }
    ],
    contentTypes: ["reading", "template", "exercise"],
    duration: "4-5 hours",
    learningObjectives: [
      "Develop comprehensive program budget",
      "Prioritize investments based on risk",
      "Balance compliance with business objectives"
    ],
    deliverables: [
      "Approved multi-year program budget",
      "Resource allocation plan",
      "Prioritized implementation roadmap"
    ]
  },
  {
    number: 5,
    title: "Monitor Progress and Control Effectiveness",
    description: "Establish metrics, receive regular status reports, review dashboards, and ensure the program stays on track.",
    actions: [
      "Define key performance indicators (KPIs) for control implementation and effectiveness",
      "Establish regular reporting cadence (monthly/quarterly) from control owners",
      "Review control status dashboards and implementation progress",
      "Monitor POA&M (Plan of Action & Milestones) remediation progress",
      "Track assessment findings and remediation timelines",
      "Receive briefings on significant risks and control failures"
    ],
    outputs: [
      "Program metrics and KPI dashboard",
      "Regular status reports from program leadership",
      "POA&M tracking and remediation oversight",
      "Executive risk register and decision log"
    ],
    resources: [
      { title: "Executive Dashboard Template", isTemplate: true },
      { title: "Monthly Status Report Template", isTemplate: true }
    ],
    contentTypes: ["reading", "template", "interactive"],
    duration: "3-4 hours",
    learningObjectives: [
      "Design meaningful program metrics",
      "Establish executive oversight processes",
      "Monitor program health and effectiveness"
    ],
    deliverables: [
      "KPI dashboard with targets",
      "Monthly/quarterly reporting templates",
      "POA&M tracking system"
    ]
  },
  {
    number: 6,
    title: "Oversee Assessments and Accept Risk",
    description: "Coordinate internal and external assessments, review findings, make risk acceptance decisions, and ensure timely remediation.",
    actions: [
      "Approve assessment scope and assessor selection",
      "Receive and review assessment findings and risk ratings",
      "Make formal risk acceptance decisions for control gaps and weaknesses",
      "Approve POA&Ms with remediation plans and timelines",
      "Ensure coordination with external auditors and oversight bodies",
      "Participate in post-assessment briefings and lessons learned"
    ],
    outputs: [
      "Assessment approval documentation",
      "Risk acceptance decisions and formal risk register",
      "Approved POA&Ms with executive endorsement",
      "Lessons learned and program improvement plans"
    ],
    resources: [
      { title: "Risk Acceptance Template", isTemplate: true }
    ],
    contentTypes: ["reading", "template", "exercise"],
    duration: "4-5 hours",
    learningObjectives: [
      "Oversee assessment activities effectively",
      "Make informed risk acceptance decisions",
      "Ensure timely remediation of findings"
    ],
    deliverables: [
      "Assessment approvals and coordination plans",
      "Risk acceptance documentation",
      "Approved POA&Ms with timelines"
    ]
  },
  {
    number: 7,
    title: "Drive Continuous Improvement and Program Maturity",
    description: "Champion a culture of continuous improvement, stay current with evolving requirements, and mature the program over time.",
    actions: [
      "Sponsor continuous monitoring initiatives and automation investments",
      "Support security awareness and training programs",
      "Stay informed on NIST 800-53 updates and emerging compliance requirements",
      "Promote integration between security, IT, and business processes",
      "Celebrate successes and recognize high-performing teams",
      "Advocate for security at the executive and board level"
    ],
    outputs: [
      "Continuous improvement roadmap and maturity goals",
      "Executive communications on program achievements and value",
      "Board-level reporting on security posture and compliance status",
      "Program maturity assessment and advancement plan"
    ],
    resources: [
      { title: "Program Maturity Assessment", isTemplate: true },
      { title: "Board Reporting Template", isTemplate: true }
    ],
    contentTypes: ["reading", "case-study", "template"],
    duration: "3-4 hours",
    learningObjectives: [
      "Drive continuous program improvement",
      "Advance program maturity over time",
      "Champion security culture and awareness"
    ],
    deliverables: [
      "Continuous improvement roadmap",
      "Board-level reporting package",
      "Program maturity advancement plan"
    ]
  }
];
