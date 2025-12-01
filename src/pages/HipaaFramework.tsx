import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText, 
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Layers,
  Users,
  Network,
  Bell
} from "lucide-react";
import { useState } from "react";

export default function HipaaFramework() {
  const navigate = useNavigate();
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const hipaaRules = [
    {
      rule: "Privacy Rule",
      icon: FileText,
      color: "bg-blue-500",
      description: "Establishes national standards to protect individuals' medical records and other protected health information (PHI)",
      keyRequirements: [
        "Notice of Privacy Practices (NPP) provided to patients",
        "Patient rights: access, amendment, accounting of disclosures, restrictions",
        "Minimum Necessary standard for PHI use and disclosure",
        "Permitted uses and disclosures (treatment, payment, healthcare operations)",
        "Individual authorization required for non-permitted uses",
        "Business Associate Agreements (BAAs) for third-party PHI handling",
        "Policies and procedures for PHI protection",
        "Designated Privacy Officer required"
      ],
      scope: "Applies to covered entities (healthcare providers, health plans, healthcare clearinghouses) and their business associates"
    },
    {
      rule: "Security Rule",
      icon: Shield,
      color: "bg-purple-500",
      description: "Establishes national standards to protect electronic protected health information (ePHI) that is created, received, used, or maintained",
      keyRequirements: [
        "Administrative Safeguards (9 standards including risk analysis, workforce training)",
        "Physical Safeguards (4 standards including facility access, workstation security)",
        "Technical Safeguards (5 standards including access control, audit controls, encryption)",
        "Required vs. Addressable Implementation Specifications",
        "Risk Analysis and Risk Management process",
        "Security Incident Procedures and Response",
        "Disaster Recovery and Business Continuity Plans",
        "Designated Security Officer required"
      ],
      scope: "Applies to all ePHI, focusing on confidentiality, integrity, and availability"
    },
    {
      rule: "Breach Notification Rule",
      icon: Bell,
      color: "bg-red-500",
      description: "Requires covered entities and business associates to provide notification following a breach of unsecured PHI",
      keyRequirements: [
        "Breach defined as unauthorized acquisition, access, use, or disclosure compromising security/privacy",
        "Individual notification within 60 days for breaches affecting <500 individuals",
        "Media notification required for breaches affecting 500+ individuals in same jurisdiction",
        "HHS notification within 60 days (500+ individuals) or annually (fewer)",
        "Business associates must notify covered entities within 60 days",
        "Breach risk assessment to determine notification requirements",
        "Documentation of breaches and notification efforts",
        "Content requirements for notifications (what happened, what's at risk, steps taken)"
      ],
      scope: "Applies to unsecured PHI breaches (PHI not rendered unusable/unreadable via encryption/destruction)"
    }
  ];

  const securitySafeguards = [
    {
      category: "Administrative Safeguards",
      standards: [
        {
          name: "Security Management Process (Required)",
          specs: [
            "Risk Analysis (R): Conduct accurate assessment of potential risks to ePHI",
            "Risk Management (R): Implement security measures to reduce risks to reasonable level",
            "Sanction Policy (R): Apply appropriate sanctions against workforce members who violate policies",
            "Information System Activity Review (R): Review logs and activity reports"
          ]
        },
        {
          name: "Assigned Security Responsibility (Required)",
          specs: ["Identify Security Official responsible for developing and implementing security policies"]
        },
        {
          name: "Workforce Security (Required)",
          specs: [
            "Authorization/Supervision (A): Implement procedures for authorizing access",
            "Workforce Clearance (A): Determine appropriate access based on role",
            "Termination Procedures (A): Implement procedures for terminating access"
          ]
        },
        {
          name: "Information Access Management (Required)",
          specs: [
            "Isolating Healthcare Clearinghouse Functions (R): If applicable",
            "Access Authorization (A): Implement policies for granting access",
            "Access Establishment/Modification (A): Procedures for access changes"
          ]
        },
        {
          name: "Security Awareness and Training (Required)",
          specs: [
            "Security Reminders (A): Periodic security updates",
            "Protection from Malicious Software (A): Procedures for detecting/reporting malware",
            "Log-in Monitoring (A): Monitor login attempts",
            "Password Management (A): Procedures for creating/changing/safeguarding passwords"
          ]
        },
        {
          name: "Security Incident Procedures (Required)",
          specs: ["Response and Reporting (R): Identify and respond to suspected/known security incidents"]
        },
        {
          name: "Contingency Plan (Required)",
          specs: [
            "Data Backup Plan (R): Procedures to create/maintain retrievable copies of ePHI",
            "Disaster Recovery Plan (R): Procedures to restore lost data",
            "Emergency Mode Operation Plan (R): Enable continuation of critical processes",
            "Testing and Revision Procedures (A): Test and revise contingency plans",
            "Applications and Data Criticality Analysis (A): Assess criticality of applications/data"
          ]
        },
        {
          name: "Evaluation (Required)",
          specs: ["Periodic technical and non-technical evaluation of security measures"]
        },
        {
          name: "Business Associate Contracts (Required)",
          specs: ["Written contracts with business associates ensuring appropriate ePHI safeguards"]
        }
      ]
    },
    {
      category: "Physical Safeguards",
      standards: [
        {
          name: "Facility Access Controls (Required)",
          specs: [
            "Contingency Operations (A): Facility access during emergencies",
            "Facility Security Plan (A): Safeguard facility and equipment from unauthorized access",
            "Access Control/Validation Procedures (A): Control and validate person's access",
            "Maintenance Records (A): Document repairs and modifications to physical components"
          ]
        },
        {
          name: "Workstation Use (Required)",
          specs: ["Specify proper functions and physical attributes of workstation use"]
        },
        {
          name: "Workstation Security (Required)",
          specs: ["Physical safeguards for workstations limiting access to authorized users"]
        },
        {
          name: "Device and Media Controls (Required)",
          specs: [
            "Disposal (R): Policies for final disposition of ePHI and hardware/media",
            "Media Re-use (R): Procedures for removing ePHI before re-use",
            "Accountability (A): Maintain record of movements of hardware/media",
            "Data Backup and Storage (A): Create retrievable copy before equipment movement"
          ]
        }
      ]
    },
    {
      category: "Technical Safeguards",
      standards: [
        {
          name: "Access Control (Required)",
          specs: [
            "Unique User Identification (R): Assign unique name/number for tracking",
            "Emergency Access Procedure (R): Obtain ePHI during emergency",
            "Automatic Logoff (A): Terminate session after predetermined inactivity",
            "Encryption and Decryption (A): Encrypt/decrypt ePHI"
          ]
        },
        {
          name: "Audit Controls (Required)",
          specs: ["Hardware, software, and procedural mechanisms to record and examine ePHI access"]
        },
        {
          name: "Integrity (Required)",
          specs: [
            "Mechanism to Authenticate ePHI (A): Corroborate that ePHI has not been altered/destroyed"
          ]
        },
        {
          name: "Person or Entity Authentication (Required)",
          specs: ["Verify person/entity seeking access is who they claim to be"]
        },
        {
          name: "Transmission Security (Required)",
          specs: [
            "Integrity Controls (A): Ensure ePHI not improperly modified during transmission",
            "Encryption (A): Encrypt ePHI when appropriate"
          ]
        }
      ]
    }
  ];

  const quizQuestions = [
    {
      id: 1,
      question: "What are the three main HIPAA rules?",
      options: [
        "Privacy, Security, Breach Notification",
        "Privacy, Security, Enforcement",
        "Security, Compliance, Breach Notification",
        "Privacy, Compliance, Audit"
      ],
      correct: "Privacy, Security, Breach Notification"
    },
    {
      id: 2,
      question: "How soon must individuals be notified of a breach affecting fewer than 500 people?",
      options: ["Within 30 days", "Within 60 days", "Within 90 days", "Within 120 days"],
      correct: "Within 60 days"
    },
    {
      id: 3,
      question: "Which safeguard category includes Risk Analysis as a requirement?",
      options: ["Physical Safeguards", "Technical Safeguards", "Administrative Safeguards", "Organizational Safeguards"],
      correct: "Administrative Safeguards"
    },
    {
      id: 4,
      question: "What does 'R' stand for in HIPAA Security Rule specifications?",
      options: ["Recommended", "Required", "Regulatory", "Restricted"],
      correct: "Required"
    },
    {
      id: 5,
      question: "What is the Minimum Necessary standard?",
      options: [
        "Minimum security controls required",
        "Use and disclose only minimum PHI necessary to accomplish intended purpose",
        "Minimum training hours required",
        "Minimum encryption strength"
      ],
      correct: "Use and disclose only minimum PHI necessary to accomplish intended purpose"
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
      academyName="HIPAA Framework Guide"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "HIPAA", path: "/hipaa" },
        { label: "Framework Guide" }
      ]}
    >
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container max-w-5xl text-center">
          <Badge className="mb-4 text-lg px-4 py-1">Health Insurance Portability and Accountability Act</Badge>
          <h1 className="text-5xl font-bold text-navy mb-6">
            HIPAA Complete Framework Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            HIPAA establishes national standards for protecting patient health information. This guide covers the Privacy Rule, 
            Security Rule (Administrative, Physical, Technical Safeguards), and Breach Notification requirements.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => {
              const element = document.getElementById('rules');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Layers className="mr-2 h-5 w-5" />
              Explore HIPAA Rules
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/hipaa")}>
              <Users className="mr-2 h-5 w-5" />
              Choose Learning Path
            </Button>
          </div>
        </div>
      </section>

      {/* What is HIPAA */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy mb-6">What is HIPAA?</h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground mb-8">
            <p>
              The <strong>Health Insurance Portability and Accountability Act (HIPAA)</strong> was enacted in 1996 to protect 
              sensitive patient health information from being disclosed without consent or knowledge. HIPAA applies to covered entities 
              (healthcare providers, health plans, healthcare clearinghouses) and their business associates.
            </p>
            <p>
              HIPAA consists of three main rules that work together to protect patient privacy and secure health information:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Privacy Rule</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  National standards for protecting protected health information (PHI), establishing patient rights 
                  and covered entity obligations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Security Rule</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Standards for protecting electronic PHI (ePHI) through Administrative, Physical, and Technical safeguards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Bell className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Breach Notification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Requirements for notifying individuals, HHS, and media following breaches of unsecured PHI.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three HIPAA Rules */}
      <section id="rules" className="py-16 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              The Three HIPAA Rules
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Understanding and implementing all three HIPAA rules is essential for protecting patient privacy 
              and securing health information.
            </p>
          </div>

          <div className="space-y-8">
            {hipaaRules.map((rule, idx) => {
              const Icon = rule.icon;
              return (
                <Card key={idx}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-lg ${rule.color} flex items-center justify-center shrink-0`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{rule.rule}</CardTitle>
                        <CardDescription className="text-base mb-4">{rule.description}</CardDescription>
                        <Badge variant="outline" className="text-sm">{rule.scope}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {rule.keyRequirements.map((req, reqIdx) => (
                        <li key={reqIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Rule Safeguards */}
      <section className="py-16 bg-background">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-4">
            Security Rule: Administrative, Physical, and Technical Safeguards
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            The Security Rule defines 18 standards across three safeguard categories. Each standard contains implementation 
            specifications marked as Required (R) or Addressable (A).
          </p>

          <Card className="mb-8 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                Required vs. Addressable
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><strong>Required (R):</strong> Must be implemented as specified</p>
              <p><strong>Addressable (A):</strong> Assess whether reasonable and appropriate. If not, document why and implement equivalent alternative measures or justify why not applicable</p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {securitySafeguards.map((safeguard, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-2xl">{safeguard.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {safeguard.standards.map((standard, stdIdx) => (
                    <div key={stdIdx}>
                      {stdIdx > 0 && <Separator className="my-4" />}
                      <div>
                        <h4 className="font-semibold mb-3">{standard.name}</h4>
                        <ul className="space-y-2 text-sm">
                          {standard.specs.map((spec, specIdx) => (
                            <li key={specIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Program */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Building a HIPAA Compliance Program
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Step 1: Risk Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Conduct comprehensive risk analysis identifying threats and vulnerabilities to ePHI across all systems.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Identify where ePHI is stored, processed, transmitted</li>
                  <li>• Assess threats (human, environmental, technical)</li>
                  <li>• Evaluate vulnerabilities and current safeguards</li>
                  <li>• Determine likelihood and impact of threats</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Step 2: Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Implement security measures to reduce identified risks to reasonable and appropriate levels.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Select appropriate safeguards (required + addressable)</li>
                  <li>• Implement policies, procedures, and technical controls</li>
                  <li>• Document implementation decisions and rationales</li>
                  <li>• Track residual risk after mitigation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Step 3: Policies & Procedures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Develop comprehensive policies and procedures covering all HIPAA requirements.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Privacy policies (NPP, uses/disclosures, patient rights)</li>
                  <li>• Security policies for all safeguards</li>
                  <li>• Breach notification procedures</li>
                  <li>• Business Associate Agreement templates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Step 4: Training & Awareness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Train workforce on HIPAA requirements, policies, and security practices.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Initial training for new workforce members</li>
                  <li>• Annual refresher training</li>
                  <li>• Role-specific training (access to ePHI)</li>
                  <li>• Document training completion</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Step 5: Monitoring & Auditing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Continuously monitor compliance through audits, log reviews, and incident tracking.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Regular internal audits of HIPAA compliance</li>
                  <li>• Review audit logs and system activity</li>
                  <li>• Track and investigate security incidents</li>
                  <li>• Conduct periodic risk assessments</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Step 6: Ongoing Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Maintain and improve compliance program through regular reviews and updates.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Update policies when regulations or practices change</li>
                  <li>• Review and update BAAs with business associates</li>
                  <li>• Respond to and document security incidents</li>
                  <li>• Continuous improvement based on findings</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Knowledge Check */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Knowledge Check: HIPAA Framework
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Test Your Understanding</CardTitle>
              <CardDescription>
                Answer these questions to check your knowledge of HIPAA.
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
                          ? "Perfect! You have a strong understanding of HIPAA."
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
      <section className="py-16 bg-muted/30">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Ready to Dive Deeper?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate("/hipaa")}>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle>Choose Your Role Path</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Select your role for tailored 7-step learning path covering HIPAA compliance implementation.
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
                  See how HIPAA maps to other frameworks and build unified control libraries.
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
                  Learn about NERC CIP, NIST CSF, ISO 27001, PCI DSS, COSO, and SOX ITGC.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AcademyLayout>
  );
}