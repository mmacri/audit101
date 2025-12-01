import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { 
  Shield, 
  Search, 
  Lock, 
  Eye, 
  AlertCircle, 
  RefreshCw,
  Network,
  CheckCircle2,
  ArrowRight,
  Layers,
  BarChart3,
  FileText,
  Target
} from "lucide-react";
import { useState } from "react";

export default function NistCsfFramework() {
  const navigate = useNavigate();
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const coreFunctions = [
    {
      name: "Govern",
      icon: Shield,
      color: "bg-blue-500",
      description: "Establish and monitor organizational cybersecurity risk management strategy, expectations, and policy",
      categories: [
        "GV.OC: Organizational Context",
        "GV.RM: Risk Management Strategy",
        "GV.RR: Roles, Responsibilities & Authorities",
        "GV.PO: Policy",
        "GV.OV: Oversight",
        "GV.SC: Cybersecurity Supply Chain Risk Management"
      ],
      keyOutcomes: [
        "Senior leadership understands cybersecurity risks and priorities",
        "Roles and responsibilities are clearly defined and communicated",
        "Risk management strategy aligns with business objectives",
        "Cybersecurity policies are established and maintained",
        "Supply chain risks are identified and managed"
      ]
    },
    {
      name: "Identify",
      icon: Search,
      color: "bg-purple-500",
      description: "Develop organizational understanding to manage cybersecurity risk to systems, people, assets, data, and capabilities",
      categories: [
        "ID.AM: Asset Management",
        "ID.RA: Risk Assessment",
        "ID.IM: Improvement"
      ],
      keyOutcomes: [
        "Critical assets, systems, and data are inventoried and prioritized",
        "Business context and criticality are understood",
        "Cybersecurity risks are identified and documented",
        "Threats, vulnerabilities, and impacts are assessed",
        "Risk assessment results inform decision-making"
      ]
    },
    {
      name: "Protect",
      icon: Lock,
      color: "bg-green-500",
      description: "Use safeguards to manage cybersecurity risk and enable delivery of critical services",
      categories: [
        "PR.AA: Identity Management, Authentication & Access Control",
        "PR.AT: Awareness and Training",
        "PR.DS: Data Security",
        "PR.PS: Platform Security",
        "PR.IR: Technology Infrastructure Resilience"
      ],
      keyOutcomes: [
        "Access to assets is limited to authorized users and processes",
        "Data is protected at rest, in transit, and during processing",
        "Security awareness training is provided to all personnel",
        "Systems are configured securely and maintained",
        "Infrastructure is designed for resilience and availability"
      ]
    },
    {
      name: "Detect",
      icon: Eye,
      color: "bg-amber-500",
      description: "Find and analyze possible cybersecurity attacks and compromises",
      categories: [
        "DE.CM: Continuous Monitoring",
        "DE.AE: Adverse Event Analysis"
      ],
      keyOutcomes: [
        "Networks, systems, and user activities are monitored continuously",
        "Security events are detected and analyzed",
        "Anomalous activity is identified",
        "Detection processes are tested and improved",
        "Detection capabilities provide timely awareness of events"
      ]
    },
    {
      name: "Respond",
      icon: AlertCircle,
      color: "bg-red-500",
      description: "Take action regarding a detected cybersecurity incident",
      categories: [
        "RS.MA: Incident Management",
        "RS.AN: Incident Analysis",
        "RS.RP: Incident Response Reporting and Communication",
        "RS.MI: Incident Mitigation"
      ],
      keyOutcomes: [
        "Incidents are managed using a defined process",
        "Incident analysis determines scope and impact",
        "Response activities are coordinated with stakeholders",
        "Incidents are contained and mitigated",
        "Lessons learned are incorporated into improvements"
      ]
    },
    {
      name: "Recover",
      icon: RefreshCw,
      color: "bg-teal-500",
      description: "Restore assets and operations affected by a cybersecurity incident",
      categories: [
        "RC.RP: Incident Recovery Plan Execution",
        "RC.CO: Incident Recovery Communication"
      ],
      keyOutcomes: [
        "Recovery plans are executed during and after incidents",
        "Assets and operations are restored to normal",
        "Recovery activities are coordinated and communicated",
        "Lessons learned inform recovery plan improvements",
        "Recovery timeframes meet business requirements"
      ]
    }
  ];

  const implementationTiers = [
    {
      tier: "Tier 1 - Partial",
      characteristics: [
        "Risk management is ad hoc and reactive",
        "Limited awareness of cybersecurity risk",
        "No organization-wide approach",
        "Cybersecurity practices are not repeatable"
      ]
    },
    {
      tier: "Tier 2 - Risk Informed",
      characteristics: [
        "Risk management practices are approved but not organization-wide",
        "Awareness of cybersecurity risk exists but not established as policy",
        "Priorities informed by threat intelligence and risk assessment",
        "Inconsistent methods and procedures across the organization"
      ]
    },
    {
      tier: "Tier 3 - Repeatable",
      characteristics: [
        "Organization-wide policies express risk management practices",
        "Consistent methods and procedures implemented",
        "Regular updates to practices based on risk assessments",
        "Collaboration and communication across the organization"
      ]
    },
    {
      tier: "Tier 4 - Adaptive",
      characteristics: [
        "Organization adapts based on lessons learned and predictive indicators",
        "Continuous improvement culture",
        "Advanced cybersecurity practices",
        "Risk management integrated into organizational culture"
      ]
    }
  ];

  const quizQuestions = [
    {
      id: 1,
      question: "Which NIST CSF 2.0 function was added/expanded to emphasize governance and oversight?",
      options: ["Identify", "Govern", "Protect", "Manage"],
      correct: "Govern"
    },
    {
      id: 2,
      question: "What is the primary purpose of a CSF Profile?",
      options: [
        "To document employee security training",
        "To describe current or target cybersecurity outcomes",
        "To generate audit reports automatically",
        "To replace security policies"
      ],
      correct: "To describe current or target cybersecurity outcomes"
    },
    {
      id: 3,
      question: "Which Implementation Tier indicates that cybersecurity risk management is integrated into organizational culture?",
      options: ["Tier 1 - Partial", "Tier 2 - Risk Informed", "Tier 3 - Repeatable", "Tier 4 - Adaptive"],
      correct: "Tier 4 - Adaptive"
    },
    {
      id: 4,
      question: "The Detect function primarily focuses on:",
      options: [
        "Implementing access controls",
        "Finding and analyzing possible cybersecurity attacks",
        "Recovering from incidents",
        "Establishing security policies"
      ],
      correct: "Finding and analyzing possible cybersecurity attacks"
    },
    {
      id: 5,
      question: "Which of the following is NOT one of the 6 core functions in NIST CSF 2.0?",
      options: ["Govern", "Monitor", "Respond", "Recover"],
      correct: "Monitor"
    }
  ];

  const handleQuizSubmit = () => {
    setShowQuizResults(true);
  };

  const getQuizScore = () => {
    let correct = 0;
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correct) correct++;
    });
    return correct;
  };

  return (
    <AcademyLayout
      academyName="NIST CSF Framework Guide"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "NIST CSF", path: "/nist-csf" },
        { label: "Framework Guide" }
      ]}
    >
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container max-w-5xl text-center">
          <Badge className="mb-4 text-lg px-4 py-1">NIST Cybersecurity Framework 2.0</Badge>
          <h1 className="text-5xl font-bold text-navy mb-6">
            NIST CSF Complete Framework Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            The NIST Cybersecurity Framework (CSF) 2.0 provides a flexible, risk-based approach to managing cybersecurity risk. 
            This guide covers all 6 core functions, Implementation Tiers, Profiles, and practical application strategies.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => {
              const element = document.getElementById('core-functions');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Layers className="mr-2 h-5 w-5" />
              Explore Functions
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/nist-csf")}>
              <Users className="mr-2 h-5 w-5" />
              Choose Learning Path
            </Button>
          </div>
        </div>
      </section>

      {/* What is NIST CSF */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy mb-6">What is the NIST Cybersecurity Framework?</h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground mb-8">
            <p>
              The <strong>NIST Cybersecurity Framework (CSF)</strong> is a voluntary framework developed by the National Institute of Standards and Technology 
              to help organizations understand, assess, prioritize, and communicate their cybersecurity activities and outcomes.
            </p>
            <p>
              Originally released in 2014 and updated to version 2.0 in 2024, the CSF provides a flexible, risk-based approach suitable for 
              organizations of all sizes and sectors. It's built on three core components:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Layers className="h-8 w-8 text-primary mb-2" />
                <CardTitle>CSF Core</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Six functions (Govern, Identify, Protect, Detect, Respond, Recover) organized into Categories and Subcategories 
                  that describe specific cybersecurity outcomes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Implementation Tiers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Four tiers (Partial, Risk Informed, Repeatable, Adaptive) that characterize the rigor and sophistication 
                  of cybersecurity risk management practices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>CSF Profiles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Alignment of Functions, Categories, and Subcategories with business requirements, risk tolerance, and resources. 
                  Organizations create Current and Target Profiles to plan improvements.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Functions Deep Dive */}
      <section id="core-functions" className="py-16 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              The Six Core Functions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              NIST CSF 2.0 organizes cybersecurity outcomes into six high-level functions. Each function contains categories 
              and subcategories that provide increasingly specific guidance.
            </p>
          </div>

          <Tabs defaultValue="govern" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              {coreFunctions.map((func) => (
                <TabsTrigger key={func.name.toLowerCase()} value={func.name.toLowerCase()}>
                  {func.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {coreFunctions.map((func) => {
              const Icon = func.icon;
              return (
                <TabsContent key={func.name} value={func.name.toLowerCase()} className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-lg ${func.color} flex items-center justify-center shrink-0`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">{func.name}</CardTitle>
                          <CardDescription className="text-base">
                            {func.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Categories</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {func.categories.map((cat, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-sm">{cat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-semibold text-lg mb-3">Key Outcomes</h4>
                        <ul className="space-y-2">
                          {func.keyOutcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Target className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Implementation Tiers */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-4">
            Implementation Tiers
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Tiers describe the degree to which cybersecurity risk management practices exhibit characteristics 
            defined in the Framework. They range from Partial (Tier 1) to Adaptive (Tier 4).
          </p>

          <div className="space-y-4">
            {implementationTiers.map((tier, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Badge variant={idx === 3 ? "default" : "secondary"} className="text-base px-3 py-1">
                      {tier.tier}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tier.characteristics.map((char, charIdx) => (
                      <li key={charIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Tiers Are Not Maturity Levels</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Important: Tiers do not represent maturity levels. Organizations should select a tier based on current risk 
                management practices, threat environment, legal and regulatory requirements, business objectives, and organizational 
                constraints. Tier 4 is not always the goal—Tier 2 or 3 may be appropriate for many organizations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CSF Profiles */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-6">
            CSF Profiles: Current State vs. Target State
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            A Profile is an organization's alignment of Functions, Categories, and Subcategories with business requirements, 
            risk tolerance, and resources. Organizations typically create both Current and Target Profiles to plan improvements.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Current Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Describes the current cybersecurity outcomes the organization is achieving. It represents "where we are today" 
                  across all CSF Categories and Subcategories relevant to the organization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Target Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Describes the desired cybersecurity outcomes. It represents "where we want to be" based on business drivers, 
                  risk appetite, and resources. The gap between Current and Target informs the roadmap.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>How to Build a CSF Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 list-decimal list-inside">
                <li><strong>Identify business objectives and priorities</strong> — Understand what matters most to the organization</li>
                <li><strong>Determine scope</strong> — Define which systems, assets, and business functions the Profile covers</li>
                <li><strong>Select relevant Categories and Subcategories</strong> — Not all may apply to your organization</li>
                <li><strong>Assess current state</strong> — For each selected Subcategory, document what you're doing today</li>
                <li><strong>Define target state</strong> — Based on risk tolerance and resources, define desired outcomes</li>
                <li><strong>Identify gaps and prioritize</strong> — Compare Current and Target to create an improvement roadmap</li>
                <li><strong>Implement and measure</strong> — Execute improvements and track progress toward the Target Profile</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Framework Mapping */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-6">
            How NIST CSF Relates to Other Frameworks
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            NIST CSF is designed to complement and integrate with other frameworks and standards. Organizations can map CSF 
            Subcategories to controls in other frameworks to demonstrate compliance and reduce duplication.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Common Framework Mappings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge>NIST 800-53</Badge>
                  <p className="text-sm text-muted-foreground">
                    CSF Subcategories map directly to NIST 800-53 security and privacy controls, providing implementation detail for federal systems.
                  </p>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Badge>ISO 27001</Badge>
                  <p className="text-sm text-muted-foreground">
                    CSF functions align with ISO 27001 Annex A controls. Organizations can use CSF as a risk assessment tool and map to ISO controls.
                  </p>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Badge>CIS Controls</Badge>
                  <p className="text-sm text-muted-foreground">
                    CIS Controls provide prescriptive safeguards that map to CSF Protect and Detect functions, offering concrete implementation steps.
                  </p>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Badge>NERC CIP</Badge>
                  <p className="text-sm text-muted-foreground">
                    Energy sector organizations map NERC CIP requirements to CSF to build comprehensive cybersecurity programs beyond compliance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button size="lg" onClick={() => navigate("/common-controls")}>
              <Network className="mr-2 h-5 w-5" />
              View Common Controls Hub
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Knowledge Check */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Knowledge Check: NIST CSF Framework
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Test Your Understanding</CardTitle>
              <CardDescription>
                Answer these questions to check your knowledge of the NIST Cybersecurity Framework.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {quizQuestions.map((q, idx) => (
                <div key={q.id} className="space-y-3">
                  <p className="font-semibold">{idx + 1}. {q.question}</p>
                  <div className="space-y-2 pl-4">
                    {q.options.map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`question-${q.id}`}
                          value={option}
                          checked={quizAnswers[q.id] === option}
                          onChange={(e) => setQuizAnswers({...quizAnswers, [q.id]: e.target.value})}
                          className="w-4 h-4"
                        />
                        <span className={showQuizResults && option === q.correct ? "font-semibold text-primary" : ""}>
                          {option}
                          {showQuizResults && option === q.correct && " ✓"}
                        </span>
                      </label>
                    ))}
                  </div>
                  {showQuizResults && (
                    <p className={`text-sm pl-4 ${quizAnswers[q.id] === q.correct ? "text-green-600" : "text-red-600"}`}>
                      {quizAnswers[q.id] === q.correct ? "Correct!" : `Incorrect. The correct answer is: ${q.correct}`}
                    </p>
                  )}
                </div>
              ))}

              <div className="pt-4 space-y-4">
                <Button onClick={handleQuizSubmit} disabled={Object.keys(quizAnswers).length < quizQuestions.length}>
                  Submit Answers
                </Button>

                {showQuizResults && (
                  <Card className="bg-primary/5">
                    <CardContent className="pt-6">
                      <p className="text-lg font-semibold">
                        Your Score: {getQuizScore()} out of {quizQuestions.length}
                      </p>
                      <p className="text-muted-foreground mt-2">
                        {getQuizScore() === quizQuestions.length 
                          ? "Perfect! You have a strong understanding of NIST CSF."
                          : getQuizScore() >= 3
                          ? "Good work! Review the sections above for areas you missed."
                          : "Review the framework guide above and try again."}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Ready to Dive Deeper?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate("/nist-csf")}>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle>Choose Your Role Path</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Select your role (Practitioner, Tool Owner, Leader, or Auditor) for a tailored 7-step learning path.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate("/common-controls")}>
              <CardHeader>
                <Network className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle>Common Controls Hub</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  See how NIST CSF maps to other frameworks and build unified control libraries.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate("/")}>
              <CardHeader>
                <Layers className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle>Explore Other Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn about NERC CIP, ISO 27001, PCI DSS, HIPAA, COSO, and SOX ITGC.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AcademyLayout>
  );
}

// Missing import
import { Users } from "lucide-react";