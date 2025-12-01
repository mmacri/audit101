import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { 
  Shield, 
  Target, 
  Activity, 
  MessageSquare, 
  Eye,
  CheckCircle2,
  ArrowRight,
  Layers,
  Users,
  Network,
  TrendingUp,
  FileText
} from "lucide-react";
import { useState } from "react";

export default function CosoFramework() {
  const navigate = useNavigate();
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const cosoComponents = [
    {
      component: "Control Environment",
      icon: Shield,
      color: "bg-blue-500",
      description: "The foundation for all other components, setting the tone of the organization",
      principles: [
        "1. Demonstrates commitment to integrity and ethical values",
        "2. Exercises oversight responsibility",
        "3. Establishes structure, authority, and responsibility",
        "4. Demonstrates commitment to competence",
        "5. Enforces accountability"
      ],
      keyActivities: [
        "Establish code of conduct and ethical standards",
        "Board of directors provides oversight and challenges management",
        "Define organizational structure and reporting lines",
        "Attract, develop, and retain competent individuals",
        "Hold individuals accountable for internal control responsibilities"
      ]
    },
    {
      component: "Risk Assessment",
      icon: Target,
      color: "bg-purple-500",
      description: "Dynamic process for identifying and assessing risks to achieving objectives",
      principles: [
        "6. Specifies suitable objectives",
        "7. Identifies and analyzes risk",
        "8. Assesses fraud risk",
        "9. Identifies and analyzes significant change"
      ],
      keyActivities: [
        "Define clear objectives at entity, operational, reporting, and compliance levels",
        "Identify and analyze risks to achievement of objectives",
        "Assess likelihood and impact of identified risks",
        "Consider potential for fraud in risk assessment",
        "Identify and assess impact of significant changes (external and internal)"
      ]
    },
    {
      component: "Control Activities",
      icon: Activity,
      color: "bg-green-500",
      description: "Actions established through policies and procedures to help ensure management directives are carried out",
      principles: [
        "10. Selects and develops control activities",
        "11. Selects and develops general controls over technology",
        "12. Deploys through policies and procedures"
      ],
      keyActivities: [
        "Select control activities that contribute to mitigation of risks",
        "Implement segregation of duties, authorizations, verifications, reconciliations",
        "Develop IT general controls (access, change management, operations)",
        "Establish policies that define expectations",
        "Develop procedures that put policies into action"
      ]
    },
    {
      component: "Information & Communication",
      icon: MessageSquare,
      color: "bg-amber-500",
      description: "Pertinent information must be identified, captured, and communicated in a timely manner",
      principles: [
        "13. Uses relevant information",
        "14. Communicates internally",
        "15. Communicates externally"
      ],
      keyActivities: [
        "Identify and capture quality internal and external information",
        "Process information into actionable insights",
        "Communicate internal control responsibilities throughout organization",
        "Establish communication channels for reporting deficiencies",
        "Communicate relevant information to external parties (regulators, shareholders, etc.)"
      ]
    },
    {
      component: "Monitoring Activities",
      icon: Eye,
      color: "bg-red-500",
      description: "Ongoing evaluations, separate evaluations, or both to ascertain whether components are present and functioning",
      principles: [
        "16. Conducts ongoing and/or separate evaluations",
        "17. Evaluates and communicates deficiencies"
      ],
      keyActivities: [
        "Conduct ongoing monitoring activities embedded in business processes",
        "Perform separate evaluations (internal audits, management reviews)",
        "Evaluate and communicate control deficiencies to appropriate parties",
        "Take corrective action on identified deficiencies in a timely manner",
        "Track remediation of control deficiencies"
      ]
    }
  ];

  const sox404Connection = [
    {
      aspect: "Management Assessment",
      description: "SOX Section 404(a) requires management to assess and report on internal control over financial reporting (ICFR). COSO provides the framework management uses for this assessment.",
      cosoApplication: "Management evaluates whether all 5 COSO components and 17 principles are present and functioning for financial reporting objectives."
    },
    {
      aspect: "Auditor Attestation",
      description: "SOX Section 404(b) requires public company auditors to attest to management's assessment. Auditors use COSO to evaluate the design and operating effectiveness of ICFR.",
      cosoApplication: "Auditors test controls across all 5 components to opine on whether ICFR is effective as of year-end."
    },
    {
      aspect: "Control Documentation",
      description: "Organizations document their control environment, risk assessments, control activities, information systems, and monitoring using COSO structure.",
      cosoApplication: "Process narratives, risk-control matrices (RCMs), and flowcharts organized by COSO components."
    },
    {
      aspect: "Deficiency Evaluation",
      description: "Material weaknesses and significant deficiencies in ICFR are identified and evaluated using COSO criteria.",
      cosoApplication: "Deficiency is a material weakness if there is reasonable possibility it could result in material misstatement not being prevented or detected timely."
    }
  ];

  const quizQuestions = [
    {
      id: 1,
      question: "How many components does the COSO Internal Control Framework have?",
      options: ["3 components", "5 components", "7 components", "17 components"],
      correct: "5 components"
    },
    {
      id: 2,
      question: "How many principles support the 5 COSO components?",
      options: ["12 principles", "15 principles", "17 principles", "20 principles"],
      correct: "17 principles"
    },
    {
      id: 3,
      question: "Which COSO component is considered the foundation that sets the tone of the organization?",
      options: ["Risk Assessment", "Control Environment", "Control Activities", "Information & Communication"],
      correct: "Control Environment"
    },
    {
      id: 4,
      question: "What section of SOX requires management to assess internal control over financial reporting?",
      options: ["Section 302", "Section 404(a)", "Section 404(b)", "Section 906"],
      correct: "Section 404(a)"
    },
    {
      id: 5,
      question: "Which COSO principle addresses fraud risk?",
      options: ["Principle 5", "Principle 7", "Principle 8", "Principle 12"],
      correct: "Principle 8"
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
      academyName="COSO Framework Guide"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "COSO", path: "/coso" },
        { label: "Framework Guide" }
      ]}
    >
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container max-w-5xl text-center">
          <Badge className="mb-4 text-lg px-4 py-1">Committee of Sponsoring Organizations</Badge>
          <h1 className="text-5xl font-bold text-navy mb-6">
            COSO Internal Control Framework Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            The COSO Internal Control - Integrated Framework provides a comprehensive approach to internal control. 
            This guide covers all 5 components, 17 principles, and the critical connection to SOX Section 404 compliance.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => {
              const element = document.getElementById('components');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Layers className="mr-2 h-5 w-5" />
              Explore Components
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/coso")}>
              <Users className="mr-2 h-5 w-5" />
              Choose Learning Path
            </Button>
          </div>
        </div>
      </section>

      {/* What is COSO */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy mb-6">What is the COSO Framework?</h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground mb-8">
            <p>
              The <strong>COSO Internal Control - Integrated Framework</strong>, developed by the Committee of Sponsoring Organizations 
              of the Treadway Commission, is the most widely used framework for evaluating internal control over financial reporting (ICFR). 
              Originally published in 1992 and updated in 2013, COSO provides principles-based guidance that organizations of all sizes can use.
            </p>
            <p>
              COSO defines internal control as a process, effected by an entity's board of directors, management, and other personnel, 
              designed to provide reasonable assurance regarding the achievement of objectives in:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Effectiveness and efficiency of operations, including operational and financial performance goals 
                  and safeguarding assets.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reliability of reporting for internal and external use, including financial and non-financial information.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Compliance with applicable laws and regulations to which the entity is subject.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>5 Components and 17 Principles</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The framework consists of <strong>5 interrelated components</strong> supported by <strong>17 principles</strong>. 
                For internal control to be effective, each of the 5 components and all 17 principles must be present and functioning, 
                and the components must operate together in an integrated manner.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Five Components */}
      <section id="components" className="py-16 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              The Five Components of Internal Control
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each component contains principles that provide more granular guidance. All components must work together 
              to provide effective internal control.
            </p>
          </div>

          <div className="space-y-8">
            {cosoComponents.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <Card key={idx}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-lg ${comp.color} flex items-center justify-center shrink-0`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline">Component {idx + 1}</Badge>
                          <CardTitle className="text-2xl">{comp.component}</CardTitle>
                        </div>
                        <CardDescription className="text-base">{comp.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Principles:</h4>
                      <ul className="space-y-2">
                        {comp.principles.map((principle, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{principle}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold mb-3">Key Activities:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {comp.keyActivities.map((activity, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* COSO and SOX 404 */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-4">
            COSO and SOX Section 404
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            The Sarbanes-Oxley Act Section 404 requires management assessment and auditor attestation on internal control 
            over financial reporting. COSO is the predominant framework used for these assessments.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {sox404Connection.map((conn, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{conn.aspect}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{conn.description}</p>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-xs font-semibold text-primary mb-1">COSO Application:</p>
                    <p className="text-sm">{conn.cosoApplication}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>How Organizations Use COSO for SOX Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 list-decimal list-inside">
                <li><strong>Identify Significant Accounts and Disclosures:</strong> Determine which financial statement line items could materially impact investors</li>
                <li><strong>Identify Relevant Assertions:</strong> For each significant account, identify assertions (existence, completeness, valuation, etc.)</li>
                <li><strong>Identify Key Controls:</strong> Map controls to risks using COSO components (e.g., authorization controls under Control Activities)</li>
                <li><strong>Test Control Design:</strong> Evaluate whether controls, if operating as designed, would effectively prevent or detect material misstatements</li>
                <li><strong>Test Operating Effectiveness:</strong> Test controls throughout the year to ensure they operated consistently</li>
                <li><strong>Evaluate Deficiencies:</strong> Assess identified control gaps using COSO to determine severity (deficiency, significant deficiency, material weakness)</li>
                <li><strong>Management Certification:</strong> CEO and CFO certify effectiveness of ICFR based on COSO assessment (SOX 302 and 404(a))</li>
                <li><strong>Auditor Attestation:</strong> External auditors issue opinion on ICFR effectiveness (SOX 404(b) for accelerated filers)</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Knowledge Check */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Knowledge Check: COSO Framework
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Test Your Understanding</CardTitle>
              <CardDescription>
                Answer these questions to check your knowledge of the COSO Framework.
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
                          ? "Perfect! You have a strong understanding of COSO."
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
            <Card className="text-center hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate("/coso")}>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle>Choose Your Role Path</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Select your role for tailored 7-step learning path covering COSO implementation and SOX compliance.
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
                  See how COSO maps to other frameworks and build unified control libraries.
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
                  Learn about NERC CIP, NIST CSF, ISO 27001, PCI DSS, HIPAA, and SOX ITGC.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AcademyLayout>
  );
}