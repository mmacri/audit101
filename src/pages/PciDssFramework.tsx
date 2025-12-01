import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { 
  Shield, 
  Lock, 
  Network, 
  Eye, 
  UserCheck, 
  FileText,
  CheckCircle2,
  ArrowRight,
  Layers,
  CreditCard,
  AlertTriangle,
  Award,
  Users
} from "lucide-react";
import { useState } from "react";

export default function PciDssFramework() {
  const navigate = useNavigate();
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const controlObjectives = [
    {
      objective: "Build and Maintain a Secure Network and Systems",
      color: "bg-blue-500",
      icon: Network,
      requirements: [
        {
          req: "Requirement 1",
          title: "Install and maintain network security controls",
          description: "Deploy firewalls and routers to protect cardholder data. Restrict connections between untrusted networks and the CDE.",
          keyControls: [
            "Firewall and router configurations documented and reviewed",
            "Network segmentation isolating CDE from untrusted networks",
            "Inbound and outbound traffic restricted to necessary protocols",
            "Personal firewall software on mobile/employee devices",
            "Wireless network security with strong encryption and authentication"
          ]
        },
        {
          req: "Requirement 2",
          title: "Apply secure configurations to all system components",
          description: "Remove vendor defaults, harden systems, and maintain secure configuration standards.",
          keyControls: [
            "Vendor default passwords and settings changed before production",
            "Configuration standards for all system components",
            "Unnecessary services, protocols, and accounts disabled",
            "Security parameters configured to prevent misuse",
            "Inventory of system components maintained"
          ]
        }
      ]
    },
    {
      objective: "Protect Cardholder Data",
      color: "bg-purple-500",
      icon: Lock,
      requirements: [
        {
          req: "Requirement 3",
          title: "Protect stored cardholder data",
          description: "Minimize storage of cardholder data. Encrypt or render stored data unreadable.",
          keyControls: [
            "Data retention and disposal policies defined and enforced",
            "Sensitive authentication data (SAD) never stored after authorization",
            "PAN masked when displayed (first 6, last 4 digits max visible)",
            "Cryptographic keys secured with strong access controls",
            "Disk-level or file-level encryption for stored PAN"
          ]
        },
        {
          req: "Requirement 4",
          title: "Protect cardholder data with strong cryptography during transmission",
          description: "Encrypt cardholder data during transmission over public networks.",
          keyControls: [
            "Strong cryptography (TLS 1.2+) for PAN transmission over public networks",
            "End-user messaging technologies (email, IM) never used for PAN",
            "Trusted keys and certificates managed securely",
            "Wireless networks transmitting cardholder data encrypted with strong protocols",
            "Security policies prohibit unencrypted PAN transmission"
          ]
        }
      ]
    },
    {
      objective: "Maintain a Vulnerability Management Program",
      color: "bg-green-500",
      icon: Shield,
      requirements: [
        {
          req: "Requirement 5",
          title: "Protect all systems and networks from malicious software",
          description: "Deploy anti-malware solutions and keep them current.",
          keyControls: [
            "Anti-malware software deployed on all systems commonly affected by malware",
            "Anti-malware definitions kept current and scans conducted regularly",
            "Audit logs for anti-malware maintained and reviewed",
            "Systems protected from malicious software threats",
            "Anti-malware mechanisms cannot be disabled by users"
          ]
        },
        {
          req: "Requirement 6",
          title: "Develop and maintain secure systems and software",
          description: "Identify and address security vulnerabilities. Develop software securely.",
          keyControls: [
            "Security vulnerabilities identified through reputable sources",
            "Critical security patches installed within one month",
            "Public-facing web applications protected by automated tools or manual reviews",
            "Secure software development lifecycle with security testing",
            "Change control procedures for all system changes"
          ]
        }
      ]
    },
    {
      objective: "Implement Strong Access Control Measures",
      color: "bg-amber-500",
      icon: UserCheck,
      requirements: [
        {
          req: "Requirement 7",
          title: "Restrict access to cardholder data by business need to know",
          description: "Limit access to cardholder data to those with legitimate business need.",
          keyControls: [
            "Access rights assigned based on job function and need to know",
            "Access control systems in place with deny-all default",
            "Access rights reviewed and revalidated at least every 6 months",
            "Least privilege principle applied to all accounts",
            "Documentation of roles and access requirements maintained"
          ]
        },
        {
          req: "Requirement 8",
          title: "Identify users and authenticate access to system components",
          description: "Assign unique IDs and implement multi-factor authentication.",
          keyControls: [
            "Unique user IDs assigned to each person with access",
            "Multi-factor authentication (MFA) for all access to CDE",
            "Strong password policies (complexity, expiration, history)",
            "User authentication credentials secured and transmitted securely",
            "Account lockout after multiple failed login attempts",
            "Sessions terminated after period of inactivity"
          ]
        },
        {
          req: "Requirement 9",
          title: "Restrict physical access to cardholder data",
          description: "Control physical access to systems storing cardholder data.",
          keyControls: [
            "Facility entry controls to restrict physical access to CDE",
            "Visitor access controlled and logged with escort requirements",
            "Physical access logs reviewed periodically",
            "Media containing cardholder data physically secured",
            "Strict control over internal/external distribution of media",
            "Media destruction when no longer needed"
          ]
        }
      ]
    },
    {
      objective: "Regularly Monitor and Test Networks",
      color: "bg-red-500",
      icon: Eye,
      requirements: [
        {
          req: "Requirement 10",
          title: "Log and monitor all access to system components and cardholder data",
          description: "Maintain audit trails and monitor for security events.",
          keyControls: [
            "Audit trails implemented for all access to system components and cardholder data",
            "Automated audit trail mechanisms for all system components",
            "Logs protected from alteration and unauthorized access",
            "Logs reviewed daily for anomalies and suspicious activity",
            "Log retention for at least 12 months (3 months readily available)",
            "Time synchronization across all systems"
          ]
        },
        {
          req: "Requirement 11",
          title: "Test security of systems and networks regularly",
          description: "Conduct vulnerability scans, penetration tests, and security monitoring.",
          keyControls: [
            "Wireless access points detected quarterly",
            "Internal and external vulnerability scans at least quarterly",
            "Quarterly external scans by PCI SSC Approved Scanning Vendor (ASV)",
            "Penetration testing at least annually and after significant changes",
            "Intrusion detection/prevention systems (IDS/IPS) monitoring all CDE traffic",
            "File integrity monitoring (FIM) on critical files"
          ]
        }
      ]
    },
    {
      objective: "Maintain an Information Security Policy",
      color: "bg-teal-500",
      icon: FileText,
      requirements: [
        {
          req: "Requirement 12",
          title: "Support information security with organizational policies and programs",
          description: "Establish security policies, conduct risk assessments, and manage service providers.",
          keyControls: [
            "Information security policy established and maintained",
            "Risk assessment conducted at least annually",
            "Security awareness training for all personnel",
            "Background checks conducted for personnel with access to CDE",
            "Incident response plan established and tested",
            "Service provider relationships managed with due diligence",
            "PCI DSS compliance maintained and reviewed"
          ]
        }
      ]
    }
  ];

  const merchantLevels = [
    {
      level: "Level 1",
      criteria: "Merchants processing over 6 million transactions annually (across all channels)",
      validation: "Annual on-site assessment by QSA or internal audit if signed by ISA + Quarterly network scan by ASV",
      color: "bg-red-500"
    },
    {
      level: "Level 2",
      criteria: "Merchants processing 1-6 million transactions annually",
      validation: "Annual SAQ + Quarterly network scan by ASV (on-site assessment may be required)",
      color: "bg-orange-500"
    },
    {
      level: "Level 3",
      criteria: "Merchants processing 20,000-1 million e-commerce transactions annually",
      validation: "Annual SAQ + Quarterly network scan by ASV",
      color: "bg-amber-500"
    },
    {
      level: "Level 4",
      criteria: "Merchants processing fewer than 20,000 e-commerce transactions annually or up to 1 million transactions annually across all channels",
      validation: "Annual SAQ + Quarterly network scan by ASV (if applicable)",
      color: "bg-green-500"
    }
  ];

  const saqTypes = [
    {
      type: "SAQ A",
      description: "Card-not-present merchants who have fully outsourced payment processing to PCI DSS compliant third parties",
      requirements: "22 requirements",
      example: "E-commerce site using redirect/iframe to third-party payment processor"
    },
    {
      type: "SAQ A-EP",
      description: "E-commerce merchants who partially outsource payment processing (e.g., using JavaScript)",
      requirements: "~178 requirements",
      example: "Website using third-party hosted payment page with JavaScript"
    },
    {
      type: "SAQ B",
      description: "Merchants using imprint machines or standalone dial-out terminals",
      requirements: "~45 requirements",
      example: "Retail store with standalone terminal (not connected to POS system)"
    },
    {
      type: "SAQ B-IP",
      description: "Merchants using standalone, PTS-approved payment terminals connected to the internet",
      requirements: "~82 requirements",
      example: "Retail with internet-connected payment terminal"
    },
    {
      type: "SAQ C",
      description: "Merchants with payment application systems connected to the internet (no electronic storage of cardholder data)",
      requirements: "~160 requirements",
      example: "Retail with POS system connected to internet"
    },
    {
      type: "SAQ C-VT",
      description: "Merchants using virtual terminals only (browser-based access to service provider)",
      requirements: "~79 requirements",
      example: "Call center manually entering card numbers into web portal"
    },
    {
      type: "SAQ D (Merchant)",
      description: "All merchants not meeting criteria for other SAQ types",
      requirements: "All 12 requirements (full standard)",
      example: "Any environment not fitting above categories"
    },
    {
      type: "SAQ D (Service Provider)",
      description: "All service providers not meeting criteria for other SAQ types",
      requirements: "All 12 requirements (full standard)",
      example: "Payment gateway, processor, or hosted payment service provider"
    }
  ];

  const pciDss40Updates = [
    "Customized Implementation for targeted risk analysis on specific requirements",
    "Expanded multi-factor authentication (MFA) requirements across all CDE access",
    "Updated encryption and key management requirements (TLS 1.2+ mandatory)",
    "Enhanced password requirements (minimum 12 characters, no periodic changes without risk)",
    "Targeted risk analysis approach for sampling and validation",
    "New requirements for roles and responsibilities documentation",
    "Continuous vulnerability management and asset inventory maintenance",
    "Enhanced e-commerce and phishing protection controls"
  ];

  const quizQuestions = [
    {
      id: 1,
      question: "How many main requirements does PCI DSS have?",
      options: ["6", "12", "18", "24"],
      correct: "12"
    },
    {
      id: 2,
      question: "What is the minimum TLS version required under PCI DSS 4.0?",
      options: ["TLS 1.0", "TLS 1.1", "TLS 1.2", "TLS 1.3"],
      correct: "TLS 1.2"
    },
    {
      id: 3,
      question: "Which merchant level requires an annual on-site assessment by a QSA?",
      options: ["Level 4", "Level 3", "Level 2", "Level 1"],
      correct: "Level 1"
    },
    {
      id: 4,
      question: "What is ASV in PCI DSS context?",
      options: [
        "Approved Security Vendor",
        "Approved Scanning Vendor",
        "Advanced Security Validation",
        "Annual Security Verification"
      ],
      correct: "Approved Scanning Vendor"
    },
    {
      id: 5,
      question: "Which requirement covers logging and monitoring of access to cardholder data?",
      options: ["Requirement 8", "Requirement 9", "Requirement 10", "Requirement 11"],
      correct: "Requirement 10"
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
      academyName="PCI DSS Framework Guide"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "PCI DSS", path: "/pci-dss" },
        { label: "Framework Guide" }
      ]}
    >
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container max-w-5xl text-center">
          <Badge className="mb-4 text-lg px-4 py-1">PCI DSS v4.0</Badge>
          <h1 className="text-5xl font-bold text-navy mb-6">
            PCI DSS Complete Framework Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            The Payment Card Industry Data Security Standard (PCI DSS) is the global standard for protecting 
            cardholder data. This guide covers all 12 requirements, merchant levels, SAQ types, version 4.0 updates, 
            and validation methods.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => {
              const element = document.getElementById('requirements');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Layers className="mr-2 h-5 w-5" />
              Explore Requirements
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/pci-dss")}>
              <Users className="mr-2 h-5 w-5" />
              Choose Learning Path
            </Button>
          </div>
        </div>
      </section>

      {/* What is PCI DSS */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy mb-6">What is PCI DSS?</h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground mb-8">
            <p>
              The <strong>Payment Card Industry Data Security Standard (PCI DSS)</strong> is a comprehensive set of security 
              requirements designed to protect cardholder data. Developed by the PCI Security Standards Council (founded by 
              major card brands: Visa, Mastercard, American Express, Discover, and JCB), PCI DSS applies to any organization 
              that stores, processes, or transmits payment card data.
            </p>
            <p>
              <strong>Version 4.0</strong>, released in March 2022, introduces a more flexible, customized approach to security 
              while maintaining rigorous protection standards. Organizations had until March 2024 to transition from v3.2.1, 
              with certain new requirements phased in through March 2025.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CreditCard className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Cardholder Data Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  The CDE includes people, processes, and technologies that store, process, or transmit cardholder data 
                  or sensitive authentication data.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>12 Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Organized into 6 control objectives covering network security, data protection, vulnerability management, 
                  access controls, monitoring, and policy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Validation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Compliance validated through Self-Assessment Questionnaires (SAQs), on-site assessments by QSAs, 
                  and quarterly ASV scans.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 12 Requirements - 6 Control Objectives */}
      <section id="requirements" className="py-16 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              The 12 PCI DSS Requirements
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              PCI DSS organizes 12 requirements into 6 control objectives that provide a comprehensive approach 
              to cardholder data protection.
            </p>
          </div>

          <div className="space-y-8">
            {controlObjectives.map((objective, objIdx) => {
              const Icon = objective.icon;
              return (
                <Card key={objIdx}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-lg ${objective.color} flex items-center justify-center shrink-0`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2">Control Objective {objIdx + 1}</Badge>
                        <CardTitle className="text-2xl mb-2">{objective.objective}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {objective.requirements.map((req, reqIdx) => (
                      <div key={reqIdx}>
                        {reqIdx > 0 && <Separator className="my-6" />}
                        <div className="space-y-4">
                          <div>
                            <Badge className="mb-2">{req.req}</Badge>
                            <h4 className="font-semibold text-lg mb-2">{req.title}</h4>
                            <p className="text-muted-foreground mb-4">{req.description}</p>
                          </div>
                          <div>
                            <p className="font-semibold mb-3 text-sm text-muted-foreground">Key Controls:</p>
                            <ul className="space-y-2">
                              {req.keyControls.map((control, controlIdx) => (
                                <li key={controlIdx} className="flex items-start gap-2 text-sm">
                                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                  <span>{control}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Merchant Levels */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-4">
            Merchant Levels & Validation Requirements
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Card brands classify merchants into levels based on annual transaction volume. Each level has specific 
            validation requirements to demonstrate PCI DSS compliance.
          </p>

          <div className="space-y-4">
            {merchantLevels.map((level, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge className={`${level.color} text-white border-0 text-base px-3 py-1`}>
                      {level.level}
                    </Badge>
                    <CardTitle className="text-lg">{level.criteria}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Validation:</p>
                      <p className="text-sm">{level.validation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <CardTitle>Key Terminology</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>QSA (Qualified Security Assessor):</strong> PCI SSC-certified individual authorized to conduct on-site PCI DSS assessments</p>
              <p><strong>ISA (Internal Security Assessor):</strong> Organizational employee qualified to conduct internal assessments</p>
              <p><strong>ASV (Approved Scanning Vendor):</strong> PCI SSC-approved vendor authorized to conduct external vulnerability scans</p>
              <p><strong>SAQ (Self-Assessment Questionnaire):</strong> Validation tool for merchants to self-assess PCI DSS compliance</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SAQ Types */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-4">
            Self-Assessment Questionnaires (SAQs)
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            SAQs are validation tools that allow eligible merchants to self-assess their PCI DSS compliance. 
            The applicable SAQ type depends on how the merchant processes payment cards.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {saqTypes.map((saq, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">{saq.type}</Badge>
                  </CardTitle>
                  <CardDescription className="text-sm pt-2">{saq.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Applicable Requirements:</p>
                    <p className="text-sm">{saq.requirements}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Example:</p>
                    <p className="text-sm italic">{saq.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Selecting the Right SAQ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Choosing the correct SAQ is critical:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Start with how you accept payments (card-present vs. card-not-present)</li>
                <li>Determine if cardholder data is stored, processed, or transmitted by your systems</li>
                <li>Assess whether payment processing is fully outsourced or partially in-house</li>
                <li>Consult with your acquirer (merchant bank) to confirm SAQ eligibility</li>
                <li>When in doubt, SAQ D covers all scenarios but is the most comprehensive</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PCI DSS 4.0 Updates */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-4">
            What's New in PCI DSS v4.0?
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            Version 4.0 introduces significant changes focused on flexibility, continuous security, and modern threats.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Key Updates and Enhancements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {pciDss40Updates.map((update, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{update}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mt-6 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Transition Timeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p><strong>March 31, 2024:</strong> PCI DSS v3.2.1 retired; v4.0 is the only active version</p>
              <p><strong>March 31, 2025:</strong> All new v4.0 requirements become mandatory (previously marked "best practice")</p>
              <p>Organizations should have completed their transition to v4.0 and be working toward full compliance with all requirements by the 2025 deadline.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Knowledge Check */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Knowledge Check: PCI DSS Framework
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Test Your Understanding</CardTitle>
              <CardDescription>
                Answer these questions to check your knowledge of PCI DSS.
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
                          ? "Perfect! You have a strong understanding of PCI DSS."
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
            <Card className="text-center hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate("/pci-dss")}>
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
                  See how PCI DSS maps to other frameworks and build unified control libraries.
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
                  Learn about NERC CIP, NIST CSF, ISO 27001, HIPAA, COSO, and SOX ITGC.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AcademyLayout>
  );
}