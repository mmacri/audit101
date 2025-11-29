import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  GraduationCap, 
  CheckCircle2, 
  XCircle,
  ArrowRight,
  Trophy,
  AlertTriangle,
  RotateCcw
} from "lucide-react";

interface ExamQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

const examQuestions: ExamQuestion[] = [
  // Module 1: Foundations (1-2)
  {
    id: 1,
    question: "What is NERC's primary responsibility?",
    options: ["Generating electricity", "Ensuring bulk power system reliability", "Setting electricity prices", "Building transmission lines"],
    correctAnswer: 1,
    explanation: "NERC is responsible for ensuring the reliability of the bulk power system through standards development and enforcement.",
    category: "Foundations"
  },
  {
    id: 2,
    question: "Who conducts compliance audits for NERC CIP standards?",
    options: ["NERC directly", "Regional Entities", "State commissions", "FERC"],
    correctAnswer: 1,
    explanation: "Regional Entities conduct compliance monitoring and enforcement on behalf of NERC.",
    category: "Foundations"
  },
  // Module 2: Scope (3-4)
  {
    id: 3,
    question: "What timeframe defines whether an asset is a BES Cyber Asset?",
    options: ["1 hour", "15 minutes", "24 hours", "1 week"],
    correctAnswer: 1,
    explanation: "The 15-minute rule determines if an asset's compromise could adversely impact BES reliability.",
    category: "Scope"
  },
  {
    id: 4,
    question: "Which impact level requires the most extensive CIP controls?",
    options: ["Low Impact", "Medium Impact", "High Impact", "All require the same controls"],
    correctAnswer: 2,
    explanation: "High Impact BES Cyber Systems require the most comprehensive set of CIP controls.",
    category: "Scope"
  },
  // Module 3: Governance (5-6)
  {
    id: 5,
    question: "How often must CIP policies be reviewed and approved?",
    options: ["Every 6 months", "Every 12 months", "Every 15 months", "Every 24 months"],
    correctAnswer: 2,
    explanation: "CIP-003 requires policies to be reviewed at least once every 15 calendar months.",
    category: "Governance"
  },
  {
    id: 6,
    question: "Can the CIP Senior Manager delegate their overall accountability?",
    options: ["Yes, to any executive", "Yes, but only tasks not accountability", "No, accountability cannot be delegated", "Only during audits"],
    correctAnswer: 1,
    explanation: "Specific tasks can be delegated, but overall accountability remains with the CIP Senior Manager.",
    category: "Governance"
  },
  // Module 4: Personnel & Training (7-8)
  {
    id: 7,
    question: "How quickly must access be revoked after termination notification?",
    options: ["Immediately", "24 hours", "7 days", "30 days"],
    correctAnswer: 1,
    explanation: "Access must be revoked within 24 hours of receiving notification of termination.",
    category: "Personnel"
  },
  {
    id: 8,
    question: "How far back must personnel risk assessments check criminal history?",
    options: ["3 years", "5 years", "7 years", "10 years"],
    correctAnswer: 2,
    explanation: "PRAs require a seven-year criminal history records check.",
    category: "Personnel"
  },
  // Module 5: Perimeters (9-10)
  {
    id: 9,
    question: "What is an Electronic Security Perimeter (ESP)?",
    options: ["A firewall device", "The logical border surrounding networks with BES Cyber Systems", "A physical fence", "Antivirus software"],
    correctAnswer: 1,
    explanation: "An ESP is the logical border surrounding a network to which BES Cyber Systems are connected.",
    category: "Perimeters"
  },
  {
    id: 10,
    question: "How must visitors be managed within a PSP?",
    options: ["They can roam freely", "They must be continuously escorted", "They only sign in", "Visitors are not allowed"],
    correctAnswer: 1,
    explanation: "Visitors must be continuously escorted by authorized personnel when in a PSP.",
    category: "Perimeters"
  },
  // Module 6: System Security (11-12)
  {
    id: 11,
    question: "Within how many days must security patches be assessed?",
    options: ["15 days", "30 days", "35 days", "60 days"],
    correctAnswer: 2,
    explanation: "Security patches must be assessed within 35 calendar days of availability.",
    category: "System Security"
  },
  {
    id: 12,
    question: "How long must security logs be retained?",
    options: ["30 days", "60 days", "90 days", "1 year"],
    correctAnswer: 2,
    explanation: "Security logs must be retained for at least 90 calendar days.",
    category: "System Security"
  },
  // Module 7: Incident Response (13-14)
  {
    id: 13,
    question: "How quickly must Reportable Cyber Security Incidents be reported to E-ISAC?",
    options: ["15 minutes", "1 hour", "24 hours", "72 hours"],
    correctAnswer: 1,
    explanation: "Reportable incidents must be reported within one hour of identification.",
    category: "Incidents"
  },
  {
    id: 14,
    question: "How often must incident response plans be tested?",
    options: ["Every 6 months", "Every 12 months", "Every 15 months", "Every 24 months"],
    correctAnswer: 2,
    explanation: "Plans must be tested at least once every 15 calendar months.",
    category: "Incidents"
  },
  // Module 8: Configuration Management (15-16)
  {
    id: 15,
    question: "How quickly must baseline documentation be updated after a change?",
    options: ["7 days", "14 days", "30 days", "60 days"],
    correctAnswer: 2,
    explanation: "Baseline documentation must be updated within 30 calendar days of completing a change.",
    category: "Configuration"
  },
  {
    id: 16,
    question: "How often must vulnerability assessments be performed?",
    options: ["6 months", "12 months", "15 months", "24 months"],
    correctAnswer: 2,
    explanation: "Active vulnerability assessments must occur at least every 15 calendar months.",
    category: "Configuration"
  },
  // Module 9: Information Protection & Supply Chain (17-18)
  {
    id: 17,
    question: "What is BES Cyber System Information (BCSI)?",
    options: ["Public grid information", "Information enabling unauthorized access to BES Cyber Systems", "Marketing materials", "Employee data"],
    correctAnswer: 1,
    explanation: "BCSI is information that could enable unauthorized access to BES Cyber Systems.",
    category: "Information Protection"
  },
  {
    id: 18,
    question: "What must supply chain risk management plans address?",
    options: ["Only pricing", "Only delivery", "Vendor incident notification and vulnerability coordination", "Only warranties"],
    correctAnswer: 2,
    explanation: "Plans must address vendor incidents, vulnerabilities, software integrity, and vendor access.",
    category: "Supply Chain"
  },
  // Module 10: Audit Preparation (19-20)
  {
    id: 19,
    question: "What is an RSAW?",
    options: ["Remote System Access Workflow", "Reliability Standard Audit Worksheet", "Required Security Assessment Work", "Regional System Analysis Window"],
    correctAnswer: 1,
    explanation: "RSAW stands for Reliability Standard Audit Worksheet, used to structure compliance audits.",
    category: "Audit"
  },
  {
    id: 20,
    question: "What makes evidence effective for auditors?",
    options: ["Large file sizes", "Proper dates, responsible parties, and clear demonstration of compliance", "Complex formatting", "Verbal explanations"],
    correctAnswer: 1,
    explanation: "Effective evidence is dated, shows who performed actions, and clearly demonstrates compliance.",
    category: "Audit"
  },
  // Module 11: CIP-012 Control Center Communications (21-22)
  {
    id: 21,
    question: "What does CIP-012 primarily protect?",
    options: ["Physical access to substations", "Real-time data transmitted between Control Centers", "Employee training records", "Vendor contracts"],
    correctAnswer: 1,
    explanation: "CIP-012 requires protection of real-time Assessment and monitoring data transmitted between Control Centers.",
    category: "CIP-012"
  },
  {
    id: 22,
    question: "Which communication paths require CIP-012 protections?",
    options: ["All internal LAN traffic", "Only email systems", "Data communication links between applicable Control Centers", "Only wireless communications"],
    correctAnswer: 2,
    explanation: "CIP-012 applies to communication links used for real-time data exchange between Control Centers.",
    category: "CIP-012"
  },
  // Module 12: CIP-014 Physical Security (23-24)
  {
    id: 23,
    question: "What type of assessment does CIP-014 require for applicable transmission stations?",
    options: ["Financial audit", "Risk assessment including threats and vulnerabilities", "Software vulnerability scan", "Training effectiveness review"],
    correctAnswer: 1,
    explanation: "CIP-014 requires a risk assessment that evaluates potential threats and vulnerabilities to applicable transmission assets.",
    category: "CIP-014"
  },
  {
    id: 24,
    question: "How does CIP-014 differ from CIP-006 PSP requirements?",
    options: ["They are identical requirements", "CIP-014 focuses on transmission substations that could impact grid stability if damaged", "CIP-014 only applies to Control Centers", "CIP-006 is more stringent than CIP-014"],
    correctAnswer: 1,
    explanation: "CIP-014 specifically addresses physical security of critical transmission substations whose loss could destabilize the grid, while CIP-006 covers PSPs for BES Cyber Systems.",
    category: "CIP-014"
  }
];

const categories = [
  "Foundations", "Scope", "Governance", "Personnel", "Perimeters", 
  "System Security", "Incidents", "Configuration", "Information Protection", 
  "Supply Chain", "Audit", "CIP-012", "CIP-014"
];

export default function FinalExam() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showExam, setShowExam] = useState(false);

  const handleAnswer = (questionId: number, answerIndex: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const calculateScore = () => {
    let correct = 0;
    examQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    return correct;
  };

  const getCategoryScores = () => {
    const scores: Record<string, { correct: number; total: number }> = {};
    categories.forEach(cat => {
      scores[cat] = { correct: 0, total: 0 };
    });
    
    examQuestions.forEach(q => {
      scores[q.category].total++;
      if (answers[q.id] === q.correctAnswer) {
        scores[q.category].correct++;
      }
    });
    
    return scores;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const score = calculateScore();
    const percentage = (score / examQuestions.length) * 100;
    
    if (percentage >= 80) {
      localStorage.setItem('finalExamPassed', 'true');
      localStorage.setItem('finalExamScore', String(score));
      localStorage.setItem('finalExamDate', new Date().toISOString());
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();
  const percentage = Math.round((score / examQuestions.length) * 100);
  const passed = percentage >= 80;
  const allAnswered = Object.keys(answers).length === examQuestions.length;
  const categoryScores = getCategoryScores();

  if (!showExam) {
    return (
      <Layout>
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <GraduationCap className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                CIP Readiness Academy Final Exam
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                This comprehensive exam covers all 12 modules of the CIP Readiness Academy, 
                including CIP-012 (Control Center Communications) and CIP-014 (Physical Security of Transmission Assets).
                You'll need to score 80% or higher to earn your completion certificate.
              </p>
              
              <div className="bg-card rounded-xl border border-border/50 p-6 mb-8 text-left">
                <h3 className="font-semibold text-navy mb-4">Exam Details:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    24 multiple-choice questions covering all 12 modules
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    Includes CIP-012 and CIP-014 standards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    80% passing score required (20/24 correct)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    Detailed feedback provided for each question
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    Unlimited retakes allowed
                  </li>
                </ul>
              </div>

              <Button onClick={() => setShowExam(true)} size="lg">
                Begin Final Exam <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Results Header */}
            {submitted && (
              <div className={cn(
                "rounded-xl border-2 p-8 mb-8 text-center",
                passed ? "bg-success/10 border-success" : "bg-warning/10 border-warning"
              )}>
                {passed ? (
                  <Trophy className="h-16 w-16 text-success mx-auto mb-4" />
                ) : (
                  <AlertTriangle className="h-16 w-16 text-warning mx-auto mb-4" />
                )}
                <div className="text-5xl font-bold text-navy mb-2">{score}/{examQuestions.length}</div>
                <p className="text-lg font-medium mb-2">
                  {passed ? "Congratulations! You passed!" : "Not quite there yet"}
                </p>
                <p className="text-muted-foreground mb-4">
                  {passed 
                    ? "You've demonstrated strong knowledge of NERC CIP concepts. You can now claim your certificate!"
                    : `You need 80% (20 correct) to pass. Review the feedback below and try again.`
                  }
                </p>
                
                {passed ? (
                  <Link
                    to="/certificate"
                    className="inline-flex items-center justify-center gap-2 bg-success text-success-foreground px-6 py-3 rounded-lg font-medium hover:bg-success/90"
                  >
                    <GraduationCap className="h-5 w-5" />
                    Get Your Certificate
                  </Link>
                ) : (
                  <Button onClick={handleReset} variant="outline">
                    <RotateCcw className="mr-2 h-4 w-4" /> Try Again
                  </Button>
                )}

                {/* Category Breakdown */}
                <div className="mt-6 pt-6 border-t border-border text-left">
                  <h4 className="font-semibold text-navy mb-3 text-center">Performance by Category:</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {Object.entries(categoryScores).filter(([_, v]) => v.total > 0).map(([cat, scores]) => (
                      <div key={cat} className={cn(
                        "text-center p-2 rounded-lg text-xs",
                        scores.correct === scores.total ? "bg-success/20" : 
                        scores.correct >= scores.total / 2 ? "bg-warning/20" : "bg-destructive/20"
                      )}>
                        <p className="font-medium text-navy">{cat}</p>
                        <p className="text-muted-foreground">{scores.correct}/{scores.total}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Questions */}
            <div className="space-y-6">
              {examQuestions.map((q, qIndex) => {
                const isCorrect = submitted && answers[q.id] === q.correctAnswer;
                const isWrong = submitted && answers[q.id] !== undefined && !isCorrect;

                return (
                  <div 
                    key={q.id}
                    className={cn(
                      "bg-card rounded-xl border p-6",
                      submitted && isCorrect && "border-success/50",
                      submitted && isWrong && "border-destructive/50",
                      !submitted && "border-border/50"
                    )}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <span className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0",
                        submitted && isCorrect && "bg-success text-success-foreground",
                        submitted && isWrong && "bg-destructive text-destructive-foreground",
                        !submitted && "bg-muted text-muted-foreground"
                      )}>
                        {qIndex + 1}
                      </span>
                      <div>
                        <span className="text-xs text-muted-foreground">{q.category}</span>
                        <p className="font-medium text-foreground">{q.question}</p>
                      </div>
                    </div>

                    <div className="space-y-2 ml-11">
                      {q.options.map((option, optIndex) => {
                        const isSelected = answers[q.id] === optIndex;
                        const isCorrectOption = optIndex === q.correctAnswer;

                        return (
                          <button
                            key={optIndex}
                            onClick={() => handleAnswer(q.id, optIndex)}
                            disabled={submitted}
                            className={cn(
                              "w-full text-left px-4 py-3 rounded-lg border transition-all text-sm flex items-center gap-3",
                              submitted ? (
                                isCorrectOption
                                  ? "bg-success/10 border-success text-success"
                                  : isSelected
                                    ? "bg-destructive/10 border-destructive text-destructive"
                                    : "bg-muted/50 border-border text-muted-foreground"
                              ) : (
                                isSelected
                                  ? "bg-primary/10 border-primary text-primary"
                                  : "bg-muted/50 border-border hover:border-border hover:bg-muted"
                              )
                            )}
                          >
                            <span className={cn(
                              "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
                              submitted ? (
                                isCorrectOption
                                  ? "bg-success text-success-foreground"
                                  : isSelected
                                    ? "bg-destructive text-destructive-foreground"
                                    : "bg-muted-foreground/20 text-muted-foreground"
                              ) : (
                                isSelected
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted-foreground/20 text-muted-foreground"
                              )
                            )}>
                              {submitted && isCorrectOption ? <CheckCircle2 className="h-4 w-4" /> 
                               : submitted && isSelected && !isCorrectOption ? <XCircle className="h-4 w-4" />
                               : String.fromCharCode(65 + optIndex)}
                            </span>
                            {option}
                          </button>
                        );
                      })}

                      {/* Explanation after submit */}
                      {submitted && (
                        <div className={cn(
                          "mt-3 p-3 rounded-lg text-sm",
                          isCorrect ? "bg-success/5 border border-success/20" : "bg-muted"
                        )}>
                          <p className="text-muted-foreground">
                            <span className="font-medium text-foreground">Explanation: </span>
                            {q.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Submit Button */}
            {!submitted && (
              <div className="mt-8 flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  {Object.keys(answers).length} of {examQuestions.length} questions answered
                </p>
                <Button 
                  onClick={handleSubmit} 
                  disabled={!allAnswered}
                  size="lg"
                >
                  Submit Exam <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}

            {/* Reset Button after submission */}
            {submitted && !passed && (
              <div className="mt-8 text-center">
                <Button onClick={handleReset} variant="outline" size="lg">
                  <RotateCcw className="mr-2 h-4 w-4" /> Retake Exam
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}