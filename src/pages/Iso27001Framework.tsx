import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { 
  Shield, 
  FileText, 
  Target, 
  Users, 
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Layers,
  Network,
  AlertTriangle,
  ClipboardCheck,
  BookOpen,
  Award
} from "lucide-react";
import { useState } from "react";

export default function Iso27001Framework() {
  const navigate = useNavigate();
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const ismsStructure = [
    {
      clause: "Clause 4",
      title: "Context of the Organization",
      icon: Network,
      color: "bg-blue-500",
      requirements: [
        "Understanding the organization and its context",
        "Understanding the needs and expectations of interested parties",
        "Determining the scope of the ISMS",
        "Establishing the information security management system"
      ],
      practicalApplication: "Define organizational boundaries, identify internal/external issues affecting information security, map stakeholders and their security expectations, and document the ISMS scope including physical locations, assets, and technologies covered."
    },
    {
      clause: "Clause 5",
      title: "Leadership",
      icon: Users,
      color: "bg-purple-500",
      requirements: [
        "Leadership and commitment from top management",
        "Establishing the information security policy",
        "Organizational roles, responsibilities, and authorities",
        "Top management accountability for ISMS effectiveness"
      ],
      practicalApplication: "Secure executive sponsorship, define information security policy approved by top management, assign ISMS roles (e.g., Information Security Manager, process owners), and ensure management demonstrates commitment through resource allocation and active participation."
    },
    {
      clause: "Clause 6",
      title: "Planning",
      icon: Target,
      color: "bg-green-500",
      requirements: [
        "Actions to address risks and opportunities",
        "Information security risk assessment process",
        "Information security risk treatment process",
        "Information security objectives and planning to achieve them"
      ],
      practicalApplication: "Conduct comprehensive risk assessments identifying assets, threats, vulnerabilities, and impacts. Develop risk treatment plans selecting controls from Annex A. Set measurable security objectives aligned with business goals and create action plans with timelines and responsibilities."
    },
    {
      clause: "Clause 7",
      title: "Support",
      icon: Shield,
      color: "bg-amber-500",
      requirements: [
        "Providing necessary resources for the ISMS",
        "Ensuring competence of personnel",
        "Awareness and training programs",
        "Communication processes",
        "Documented information management"
      ],
      practicalApplication: "Allocate budget and personnel for information security, implement role-based training programs, conduct regular security awareness campaigns, establish internal/external communication channels, and maintain document control systems for policies, procedures, and records."
    },
    {
      clause: "Clause 8",
      title: "Operation",
      icon: TrendingUp,
      color: "bg-red-500",
      requirements: [
        "Operational planning and control",
        "Information security risk assessment (execution)",
        "Information security risk treatment (implementation)",
        "Implementing selected Annex A controls"
      ],
      practicalApplication: "Execute risk treatment plans, implement technical and organizational controls, integrate security into business processes, manage changes to the ISMS, and monitor control effectiveness through regular assessments and testing."
    },
    {
      clause: "Clause 9",
      title: "Performance Evaluation",
      icon: ClipboardCheck,
      color: "bg-teal-500",
      requirements: [
        "Monitoring, measurement, analysis, and evaluation",
        "Internal audit program",
        "Management review of the ISMS"
      ],
      practicalApplication: "Define and track security metrics (KPIs/KRIs), conduct periodic internal audits of ISMS processes and controls, perform management reviews at planned intervals to assess ISMS suitability and effectiveness, and document findings and improvement actions."
    },
    {
      clause: "Clause 10",
      title: "Improvement",
      icon: TrendingUp,
      color: "bg-indigo-500",
      requirements: [
        "Addressing nonconformities and corrective actions",
        "Continual improvement of the ISMS",
        "Learning from incidents and audit findings"
      ],
      practicalApplication: "Establish processes for identifying nonconformities, conduct root cause analysis, implement corrective actions, track action item closure, and continuously improve ISMS effectiveness based on changing threats, business needs, and lessons learned."
    }
  ];

  const annexADomains = [
    {
      domain: "Organizational Controls (37 controls)",
      description: "Policies, organizational structure, information security roles, responsibilities, and management processes",
      exampleControls: [
        "5.1 Policies for information security",
        "5.7 Threat intelligence",
        "5.9 Inventory of information and other associated assets",
        "5.10 Acceptable use of information and other associated assets",
        "5.19 Information security in supplier relationships"
      ]
    },
    {
      domain: "People Controls (8 controls)",
      description: "Security controls related to personnel before, during, and after employment",
      exampleControls: [
        "6.1 Screening",
        "6.2 Terms and conditions of employment",
        "6.3 Information security awareness, education and training",
        "6.4 Disciplinary process",
        "6.5 Responsibilities after termination or change of employment"
      ]
    },
    {
      domain: "Physical Controls (14 controls)",
      description: "Protection of physical areas, equipment, and assets",
      exampleControls: [
        "7.1 Physical security perimeters",
        "7.2 Physical entry",
        "7.4 Physical security monitoring",
        "7.7 Clear desk and clear screen",
        "7.14 Secure disposal or re-use of equipment"
      ]
    },
    {
      domain: "Technological Controls (34 controls)",
      description: "Technical security measures for systems, networks, and data",
      exampleControls: [
        "8.1 User endpoint devices",
        "8.2 Privileged access rights",
        "8.5 Secure authentication",
        "8.9 Configuration management",
        "8.10 Information deletion",
        "8.16 Monitoring activities",
        "8.23 Web filtering",
        "8.24 Use of cryptography"
      ]
    }
  ];

  const certificationStages = [
    {
      stage: "Stage 1 Audit",
      description: "Documentation Review & Readiness Assessment",
      activities: [
        "Review ISMS documentation (scope, policies, risk assessment, SoA)",
        "Verify ISMS structure aligns with ISO 27001 requirements",
        "Assess organization's readiness for Stage 2",
        "Identify gaps or areas requiring improvement",
        "Typically conducted remotely or with brief on-site visit"
      ],
      duration: "1-3 days depending on organization size",
      outcome: "Stage 1 report identifying any major gaps; proceed to Stage 2 if ready"
    },
    {
      stage: "Stage 2 Audit",
      description: "Implementation Assessment & Certification Decision",
      activities: [
        "On-site assessment of control implementation",
        "Interview personnel across the organization",
        "Review evidence of control effectiveness",
        "Test selected controls through sampling",
        "Assess PDCA cycle and continual improvement"
      ],
      duration: "3-10 days depending on scope and complexity",
      outcome: "Certification decision: Certificate issued if compliant, or corrective actions required"
    },
    {
      stage: "Surveillance Audits",
      description: "Ongoing Compliance Verification",
      activities: [
        "Annual or semi-annual audits (Year 1 and Year 2)",
        "Review changes to ISMS scope or risk assessment",
        "Sample different controls from previous audits",
        "Verify corrective actions from previous findings",
        "Monitor continual improvement activities"
      ],
      duration: "1-3 days per surveillance audit",
      outcome: "Certificate maintained if compliant; potential for certificate suspension if major nonconformities found"
    },
    {
      stage: "Recertification Audit",
      description: "Full Re-assessment Every 3 Years",
      activities: [
        "Comprehensive audit similar to Stage 2",
        "Review entire ISMS over the 3-year period",
        "Assess effectiveness of management review and continual improvement",
        "Verify ongoing alignment with ISO 27001 requirements",
        "Review any organizational changes impacting ISMS"
      ],
      duration: "Similar to Stage 2 (3-10 days)",
      outcome: "Certificate renewed for another 3 years if compliant"
    }
  ];

  const quizQuestions = [
    {
      id: 1,
      question: "Which ISO 27001 clause requires organizations to conduct information security risk assessments?",
      options: ["Clause 4 - Context", "Clause 6 - Planning", "Clause 8 - Operation", "Clause 9 - Performance Evaluation"],
      correct: "Clause 6 - Planning"
    },
    {
      id: 2,
      question: "How many controls are in ISO 27001:2022 Annex A?",
      options: ["93 controls", "114 controls", "133 controls", "150 controls"],
      correct: "93 controls"
    },
    {
      id: 3,
      question: "What is the primary purpose of the Statement of Applicability (SoA)?",
      options: [
        "To list all security incidents",
        "To document which Annex A controls are applicable and their implementation status",
        "To define the ISMS scope",
        "To record audit findings"
      ],
      correct: "To document which Annex A controls are applicable and their implementation status"
    },
    {
      id: 4,
      question: "How often must management review the ISMS according to ISO 27001?",
      options: ["Monthly", "Quarterly", "At planned intervals (typically annually)", "Only when incidents occur"],
      correct: "At planned intervals (typically annually)"
    },
    {
      id: 5,
      question: "What is the duration of an ISO 27001 certificate before recertification is required?",
      options: ["1 year", "2 years", "3 years", "5 years"],
      correct: "3 years"
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
      academyName="ISO 27001 Framework Guide"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "ISO 27001", path: "/iso-27001" },
        { label: "Framework Guide" }
      ]}
    >
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container max-w-5xl text-center">
          <Badge className="mb-4 text-lg px-4 py-1">ISO/IEC 27001:2022</Badge>
          <h1 className="text-5xl font-bold text-navy mb-6">
            ISO 27001 Complete Framework Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            ISO/IEC 27001 is the international standard for Information Security Management Systems (ISMS). 
            This guide covers the complete structure: Clauses 4-10, Annex A controls, risk assessment methodology, 
            and the certification journey from planning to recertification.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => {
              const element = document.getElementById('isms-structure');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Layers className="mr-2 h-5 w-5" />
              Explore ISMS Structure
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/iso-27001")}>
              <Users className="mr-2 h-5 w-5" />
              Choose Learning Path
            </Button>
          </div>
        </div>
      </section>

      {/* What is ISO 27001 */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy mb-6">What is ISO 27001?</h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground mb-8">
            <p>
              <strong>ISO/IEC 27001</strong> is the international standard that specifies requirements for establishing, implementing, 
              maintaining, and continually improving an <strong>Information Security Management System (ISMS)</strong>.
            </p>
            <p>
              Published by the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC), 
              ISO 27001 provides a systematic approach to managing sensitive company information, ensuring its confidentiality, 
              integrity, and availability.
            </p>
            <p>
              The standard follows a <strong>Plan-Do-Check-Act (PDCA)</strong> model and includes:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Clauses 4-10</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Management system requirements covering context, leadership, planning, support, operation, 
                  performance evaluation, and improvement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Layers className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Annex A (93 Controls)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reference library of security controls across Organizational, People, Physical, and Technological domains 
                  that organizations select based on risk assessment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Organizations can achieve third-party certification demonstrating compliance with ISO 27001, 
                  providing assurance to customers, partners, and regulators.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ISMS Structure - Clauses 4-10 */}
      <section id="isms-structure" className="py-16 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              ISMS Structure: Clauses 4-10
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ISO 27001 Clauses 4-10 define the management system structure. These are mandatory requirements 
              that apply to all organizations seeking certification.
            </p>
          </div>

          <div className="space-y-6">
            {ismsStructure.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.clause}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-lg ${item.color} flex items-center justify-center shrink-0`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="text-sm">{item.clause}</Badge>
                          <CardTitle className="text-2xl">{item.title}</CardTitle>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Requirements:</h4>
                      <ul className="space-y-2">
                        {item.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Separator />
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Practical Application:
                      </h4>
                      <p className="text-sm text-muted-foreground">{item.practicalApplication}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Annex A Controls */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-4">
            Annex A: Security Controls
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            ISO 27001:2022 Annex A contains 93 security controls organized into four domains. Organizations select applicable 
            controls based on risk assessment results and document decisions in the Statement of Applicability (SoA).
          </p>

          <Card className="mb-8 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Understanding Annex A Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                <strong>Not all controls are mandatory.</strong> Organizations must:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Conduct a risk assessment to identify which controls are necessary</li>
                <li>Document selections and justifications in the Statement of Applicability (SoA)</li>
                <li>For controls selected: describe implementation status and evidence</li>
                <li>For controls excluded: provide clear justification why they're not applicable</li>
                <li>Organizations may also implement additional controls not in Annex A if risk assessment requires them</li>
              </ol>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {annexADomains.map((domain, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-xl">{domain.domain}</CardTitle>
                  <CardDescription className="text-base">{domain.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Example Controls:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {domain.exampleControls.map((control, controlIdx) => (
                      <div key={controlIdx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{control}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>2013 vs 2022 Revision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                <strong>ISO 27001:2022</strong> significantly restructured Annex A:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Control count:</strong> Reduced from 114 controls (2013) to 93 controls (2022)</li>
                <li><strong>Structure:</strong> Reorganized into 4 thematic domains (vs. 14 domains in 2013)</li>
                <li><strong>New controls:</strong> Added 11 new controls addressing modern threats (threat intelligence, cloud security, etc.)</li>
                <li><strong>Merged controls:</strong> Consolidated similar controls for simplicity</li>
                <li><strong>Transition period:</strong> Organizations certified to 2013 version have until October 2025 to transition</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Risk Assessment Process */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-6">
            Risk Assessment & Treatment Process
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            ISO 27001 is fundamentally risk-based. The risk assessment process determines which controls are needed, 
            and the Statement of Applicability (SoA) documents control selection decisions.
          </p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">1</div>
                  <CardTitle>Establish Risk Criteria</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Define risk acceptance criteria, impact levels (e.g., confidentiality, integrity, availability), 
                  and likelihood scales aligned with business context.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Example: "High impact = Revenue loss &gt;$1M OR regulatory fine OR significant reputational damage"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">2</div>
                  <CardTitle>Identify Assets, Threats, and Vulnerabilities</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Inventory information assets (data, systems, processes), identify threats (cyberattacks, natural disasters, human error), 
                  and assess vulnerabilities (misconfigurations, unpatched systems, weak access controls).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">3</div>
                  <CardTitle>Analyze and Evaluate Risk</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  For each identified risk, assess likelihood and impact. Calculate risk level (e.g., Low, Medium, High, Critical). 
                  Prioritize risks exceeding acceptance criteria.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">4</div>
                  <CardTitle>Select Risk Treatment Options</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  For each risk, choose a treatment option:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Mitigate:</strong> Implement controls to reduce risk (most common)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Accept:</strong> Acknowledge risk if within acceptance criteria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Avoid:</strong> Eliminate the activity causing the risk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Transfer:</strong> Shift risk to third party (insurance, outsourcing)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">5</div>
                  <CardTitle>Create Statement of Applicability (SoA)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Document which Annex A controls are applicable and why. For each of the 93 controls:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Applicable:</strong> Describe implementation status, evidence, and how it addresses identified risks</li>
                  <li><strong>Not Applicable:</strong> Provide clear justification (e.g., "No cloud services in scope")</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3 italic">
                  The SoA is a living document reviewed and updated during management reviews and when risks change.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">6</div>
                  <CardTitle>Implement Risk Treatment Plan</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Execute the risk treatment plan by implementing selected controls, assigning ownership, setting timelines, 
                  and tracking completion. Monitor residual risk levels post-treatment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certification Journey */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-4">
            ISO 27001 Certification Journey
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Achieving and maintaining ISO 27001 certification involves a multi-stage audit process conducted by 
            accredited certification bodies. The certificate is valid for 3 years with annual surveillance audits.
          </p>

          <div className="space-y-6">
            {certificationStages.map((stage, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center font-bold shrink-0">
                      {idx === 2 ? "↻" : idx + 1}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{stage.stage}</CardTitle>
                      <CardDescription className="text-base">{stage.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">Key Activities:</h4>
                    <ul className="space-y-2">
                      {stage.activities.map((activity, actIdx) => (
                        <li key={actIdx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 pt-2">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-muted-foreground mb-1">Duration</p>
                      <p className="text-sm">{stage.duration}</p>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-muted-foreground mb-1">Outcome</p>
                      <p className="text-sm">{stage.outcome}</p>
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
                <CardTitle>Preparation Timeline</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                Organizations should expect <strong>6-12 months</strong> to prepare for initial certification, depending on:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Current security maturity and existing controls</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Scope complexity and number of sites</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Resources dedicated to ISMS implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Executive commitment and organizational readiness</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Knowledge Check */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Knowledge Check: ISO 27001 Framework
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Test Your Understanding</CardTitle>
              <CardDescription>
                Answer these questions to check your knowledge of ISO 27001.
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
                          ? "Perfect! You have a strong understanding of ISO 27001."
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
            <Card className="text-center hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate("/iso-27001")}>
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
                  See how ISO 27001 maps to other frameworks and build unified control libraries.
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
                  Learn about NERC CIP, NIST CSF, PCI DSS, HIPAA, COSO, and SOX ITGC.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AcademyLayout>
  );
}