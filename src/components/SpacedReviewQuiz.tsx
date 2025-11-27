import { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, XCircle, RefreshCw, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ReviewQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  relatedModule: number;
}

// Review questions pool organized by the module they reference
const reviewQuestionsPool: Record<number, ReviewQuestion[]> = {
  1: [
    {
      id: 'm1-r1',
      question: "What is NERC's primary function in North America?",
      options: ["Generate electricity", "Ensure bulk power system reliability", "Set retail rates", "Build infrastructure"],
      correctAnswer: 1,
      explanation: "NERC develops and enforces reliability standards for the bulk power system.",
      relatedModule: 1
    },
    {
      id: 'm1-r2',
      question: "Who enforces NERC CIP standards through audits?",
      options: ["FERC directly", "Regional Entities", "State commissions", "Local utilities"],
      correctAnswer: 1,
      explanation: "Regional Entities conduct compliance monitoring and enforcement on behalf of NERC.",
      relatedModule: 1
    },
    {
      id: 'm1-r3',
      question: "What is the maximum penalty per violation per day under NERC CIP?",
      options: ["$100,000", "$500,000", "$1,000,000", "$10,000,000"],
      correctAnswer: 2,
      explanation: "Violations can result in penalties up to $1 million per violation per day.",
      relatedModule: 1
    }
  ],
  2: [
    {
      id: 'm2-r1',
      question: "What defines a BES Cyber Asset?",
      options: ["Any networked device", "Device that could impact BES within 15 minutes if compromised", "Only control room computers", "Any device with an IP address"],
      correctAnswer: 1,
      explanation: "The 15-minute rule determines if an asset's compromise could adversely impact BES reliability.",
      relatedModule: 2
    },
    {
      id: 'm2-r2',
      question: "Which impact category requires the most stringent controls?",
      options: ["Low", "Medium", "High", "Critical"],
      correctAnswer: 2,
      explanation: "High impact BES Cyber Systems have the most stringent security requirements.",
      relatedModule: 2
    },
    {
      id: 'm2-r3',
      question: "What is a BES Cyber System?",
      options: ["A single computer", "A logical grouping of BES Cyber Assets", "The entire network", "Only servers"],
      correctAnswer: 1,
      explanation: "BES Cyber Systems are logical groupings of assets performing reliability functions.",
      relatedModule: 2
    }
  ],
  3: [
    {
      id: 'm3-r1',
      question: "How often must CIP policies be reviewed and approved?",
      options: ["6 months", "12 months", "15 months", "24 months"],
      correctAnswer: 2,
      explanation: "Policies must be reviewed at least once every 15 calendar months.",
      relatedModule: 3
    },
    {
      id: 'm3-r2',
      question: "Can the CIP Senior Manager delegate their overall accountability?",
      options: ["Yes, to any executive", "Yes, but only specific tasks", "No, accountability cannot be delegated", "Only during audits"],
      correctAnswer: 2,
      explanation: "Tasks can be delegated, but overall accountability remains with the CIP Senior Manager.",
      relatedModule: 3
    }
  ],
  4: [
    {
      id: 'm4-r1',
      question: "How quickly must access be revoked after termination notification?",
      options: ["Immediately", "24 hours", "7 days", "30 days"],
      correctAnswer: 1,
      explanation: "Access must be revoked within 24 hours of receiving notification.",
      relatedModule: 4
    },
    {
      id: 'm4-r2',
      question: "How far back must personnel risk assessments check criminal history?",
      options: ["3 years", "5 years", "7 years", "10 years"],
      correctAnswer: 2,
      explanation: "PRAs require a seven-year criminal history records check.",
      relatedModule: 4
    },
    {
      id: 'm4-r3',
      question: "How often must CIP training be completed after initial training?",
      options: ["Every 6 months", "Every 12 months", "Every 15 months", "Annually"],
      correctAnswer: 2,
      explanation: "Training must be completed at least once every 15 calendar months.",
      relatedModule: 4
    }
  ],
  5: [
    {
      id: 'm5-r1',
      question: "What is an ESP in NERC CIP terms?",
      options: ["Emergency Security Protocol", "Electronic Security Perimeter", "External System Protection", "Endpoint Security Program"],
      correctAnswer: 1,
      explanation: "ESP is the logical border surrounding networks with BES Cyber Systems.",
      relatedModule: 5
    },
    {
      id: 'm5-r2',
      question: "How must visitors be managed in a PSP?",
      options: ["Self-guided with badge", "Continuously escorted", "Sign in and roam", "No visitors allowed"],
      correctAnswer: 1,
      explanation: "Visitors must be continuously escorted by authorized personnel.",
      relatedModule: 5
    }
  ],
  6: [
    {
      id: 'm6-r1',
      question: "Within how many days must security patches be assessed?",
      options: ["15 days", "30 days", "35 days", "60 days"],
      correctAnswer: 2,
      explanation: "Patches must be assessed within 35 calendar days of availability.",
      relatedModule: 6
    },
    {
      id: 'm6-r2',
      question: "How long must security logs be retained?",
      options: ["30 days", "60 days", "90 days", "1 year"],
      correctAnswer: 2,
      explanation: "Logs must be retained for at least 90 calendar days.",
      relatedModule: 6
    }
  ],
  7: [
    {
      id: 'm7-r1',
      question: "How quickly must Reportable Cyber Security Incidents be reported?",
      options: ["15 minutes", "1 hour", "24 hours", "72 hours"],
      correctAnswer: 1,
      explanation: "Incidents must be reported to E-ISAC within one hour of identification.",
      relatedModule: 7
    },
    {
      id: 'm7-r2',
      question: "How often must incident response plans be tested?",
      options: ["6 months", "12 months", "15 months", "24 months"],
      correctAnswer: 2,
      explanation: "Plans must be tested at least once every 15 calendar months.",
      relatedModule: 7
    }
  ],
  8: [
    {
      id: 'm8-r1',
      question: "How quickly must baseline documentation be updated after a change?",
      options: ["7 days", "14 days", "30 days", "60 days"],
      correctAnswer: 2,
      explanation: "Baselines must be updated within 30 calendar days of completing a change.",
      relatedModule: 8
    },
    {
      id: 'm8-r2',
      question: "How often must vulnerability assessments be performed?",
      options: ["6 months", "12 months", "15 months", "24 months"],
      correctAnswer: 2,
      explanation: "Active vulnerability assessments must occur at least every 15 calendar months.",
      relatedModule: 8
    }
  ],
  9: [
    {
      id: 'm9-r1',
      question: "What is BCSI?",
      options: ["Bulk Control System Interface", "BES Cyber System Information", "Basic Compliance Security Index", "Backup Critical System Image"],
      correctAnswer: 1,
      explanation: "BCSI is information that could enable unauthorized access to BES Cyber Systems.",
      relatedModule: 9
    },
    {
      id: 'm9-r2',
      question: "What must supply chain risk management plans address?",
      options: ["Only pricing", "Only delivery", "Vendor incident notification and vulnerability coordination", "Only warranties"],
      correctAnswer: 2,
      explanation: "Plans must address vendor incidents, vulnerabilities, software integrity, and access.",
      relatedModule: 9
    }
  ]
};

// Map of which prior modules each module should review
const moduleReviewMap: Record<number, number[]> = {
  2: [1],
  3: [1, 2],
  4: [1, 3],
  5: [2, 4],
  6: [2, 5],
  7: [5, 6],
  8: [6, 7],
  9: [3, 8],
  10: [7, 8, 9]
};

interface SpacedReviewQuizProps {
  currentModule: number;
}

export function SpacedReviewQuiz({ currentModule }: SpacedReviewQuizProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  // Get review questions for this module
  const reviewQuestions = useMemo(() => {
    const priorModules = moduleReviewMap[currentModule] || [];
    const questions: ReviewQuestion[] = [];
    
    priorModules.forEach(moduleNum => {
      const pool = reviewQuestionsPool[moduleNum] || [];
      // Pick 1 random question from each prior module
      if (pool.length > 0) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        questions.push(pool[randomIndex]);
      }
    });
    
    return questions.slice(0, 3); // Max 3 review questions
  }, [currentModule]);

  if (reviewQuestions.length === 0) return null;

  const handleAnswer = (questionId: string, answerIndex: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const allAnswered = Object.keys(answers).length === reviewQuestions.length;
  const correctCount = reviewQuestions.filter(q => answers[q.id] === q.correctAnswer).length;

  return (
    <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl border border-accent/20 p-6 mt-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Brain className="h-5 w-5 text-accent" />
        </div>
        <div>
          <h4 className="font-semibold text-navy">Spaced Review</h4>
          <p className="text-sm text-muted-foreground">
            Reinforce concepts from earlier modules
          </p>
        </div>
      </div>

      {submitted && (
        <div className={cn(
          "mb-4 p-3 rounded-lg text-sm",
          correctCount === reviewQuestions.length
            ? "bg-success/10 text-success"
            : "bg-warning/10 text-warning-foreground"
        )}>
          You got {correctCount} of {reviewQuestions.length} correct.
          {correctCount < reviewQuestions.length && " Review the explanations below."}
        </div>
      )}

      <div className="space-y-4">
        {reviewQuestions.map((q, qIndex) => {
          const isCorrect = submitted && answers[q.id] === q.correctAnswer;
          const isWrong = submitted && answers[q.id] !== undefined && !isCorrect;

          return (
            <div key={q.id} className="bg-card rounded-lg p-4 border border-border/50">
              <p className="text-sm font-medium text-foreground mb-3">
                <span className="text-muted-foreground">From Module {q.relatedModule}: </span>
                {q.question}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((option, optIndex) => {
                  const isSelected = answers[q.id] === optIndex;
                  const isCorrectOption = optIndex === q.correctAnswer;

                  return (
                    <button
                      key={optIndex}
                      onClick={() => handleAnswer(q.id, optIndex)}
                      disabled={submitted}
                      className={cn(
                        "text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2",
                        submitted ? (
                          isCorrectOption
                            ? "bg-success/20 border border-success text-success"
                            : isSelected
                              ? "bg-destructive/20 border border-destructive text-destructive"
                              : "bg-muted/50 border border-transparent text-muted-foreground"
                        ) : (
                          isSelected
                            ? "bg-primary/10 border border-primary text-primary"
                            : "bg-muted/50 border border-transparent hover:bg-muted text-muted-foreground"
                        )
                      )}
                    >
                      {submitted && isCorrectOption && <CheckCircle2 className="h-4 w-4 shrink-0" />}
                      {submitted && isSelected && !isCorrectOption && <XCircle className="h-4 w-4 shrink-0" />}
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <p className="text-xs text-muted-foreground mt-2 bg-muted/50 p-2 rounded">
                  {q.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex gap-3 mt-4">
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={!allAnswered} size="sm" variant="outline">
            Check Answers
          </Button>
        ) : (
          <Button onClick={handleReset} size="sm" variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try New Questions
          </Button>
        )}
      </div>
    </div>
  );
}
