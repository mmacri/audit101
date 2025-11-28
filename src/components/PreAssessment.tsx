import { useState } from 'react';
import { UserRole } from '@/hooks/useUserPreferences';
import { usePreAssessment } from '@/hooks/usePreAssessment';
import { getAssessmentQuestionsForRole, AssessmentDomain, domainLabels } from '@/data/preAssessmentData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle2, RotateCcw, Target } from 'lucide-react';

interface PreAssessmentProps {
  role: UserRole;
  onComplete?: () => void;
}

export function PreAssessment({ role, onComplete }: PreAssessmentProps) {
  const { submitAssessment, clearAssessment, hasCompletedAssessment } = usePreAssessment();
  const questions = getAssessmentQuestionsForRole(role);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [domainScores, setDomainScores] = useState<Record<AssessmentDomain, number> | null>(null);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleAnswer = (optionId: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: optionId });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const domainCorrect: Record<AssessmentDomain, number> = {
      scope_assets: 0, training_people: 0, technical_controls: 0,
      incidents_recovery: 0, evidence_audit: 0,
    };
    const domainTotal: Record<AssessmentDomain, number> = {
      scope_assets: 0, training_people: 0, technical_controls: 0,
      incidents_recovery: 0, evidence_audit: 0,
    };

    questions.forEach(q => {
      domainTotal[q.domain]++;
      const selectedOption = q.options.find(o => o.id === answers[q.id]);
      if (selectedOption?.isCorrect) {
        domainCorrect[q.domain]++;
      }
    });

    const scores: Record<AssessmentDomain, number> = {} as Record<AssessmentDomain, number>;
    Object.keys(domainTotal).forEach(domain => {
      const d = domain as AssessmentDomain;
      scores[d] = domainTotal[d] > 0 ? Math.round((domainCorrect[d] / domainTotal[d]) * 100) : 0;
    });

    setDomainScores(scores);
    submitAssessment(role, scores);
    setShowResults(true);
    onComplete?.();
  };

  const handleRetake = () => {
    clearAssessment(role);
    setCurrentIndex(0);
    setAnswers({});
    setShowResults(false);
    setDomainScores(null);
  };

  if (showResults && domainScores) {
    const avgScore = Math.round(Object.values(domainScores).reduce((a, b) => a + b, 0) / 5);
    const weakest = Object.entries(domainScores).sort(([,a], [,b]) => a - b).slice(0, 2);

    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-success" />
            Assessment Complete
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{avgScore}%</div>
            <p className="text-muted-foreground">Overall Score</p>
          </div>
          <div className="space-y-3">
            {Object.entries(domainScores).map(([domain, score]) => (
              <div key={domain}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{domainLabels[domain as AssessmentDomain]}</span>
                  <span className={score < 60 ? 'text-destructive' : 'text-success'}>{score}%</span>
                </div>
                <Progress value={score} className="h-2" />
              </div>
            ))}
          </div>
          {weakest[0][1] < 70 && (
            <div className="bg-amber/10 border border-amber/30 rounded-lg p-4">
              <p className="text-sm font-medium text-navy mb-1">Focus Areas:</p>
              <p className="text-sm text-muted-foreground">
                Consider starting with {domainLabels[weakest[0][0] as AssessmentDomain]}
                {weakest[1][1] < 70 && ` and ${domainLabels[weakest[1][0] as AssessmentDomain]}`}.
              </p>
            </div>
          )}
          <Button variant="outline" onClick={handleRetake} className="w-full">
            <RotateCcw className="h-4 w-4 mr-2" /> Retake Assessment
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Pre-Assessment
          </CardTitle>
          <span className="text-sm text-muted-foreground">{currentIndex + 1} / {questions.length}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="font-medium text-navy">{currentQuestion.question}</p>
        <RadioGroup value={answers[currentQuestion.id] || ''} onValueChange={handleAnswer}>
          {currentQuestion.options.map(option => (
            <div key={option.id} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted/50">
              <RadioGroupItem value={option.id} id={option.id} />
              <Label htmlFor={option.id} className="flex-1 cursor-pointer">{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
        <Button onClick={handleNext} disabled={!answers[currentQuestion.id]} className="w-full">
          {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
        </Button>
      </CardContent>
    </Card>
  );
}
