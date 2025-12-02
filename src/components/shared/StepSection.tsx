import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, ExternalLink } from "lucide-react";

export interface LearningStep {
  number: number;
  title: string;
  description: string;
  actions: string[];
  outputs: string[];
  resources?: Array<{
    title: string;
    url?: string;
    isTemplate?: boolean;
  }>;
  contentTypes?: Array<'reading' | 'video' | 'exercise' | 'quiz' | 'documentation' | 'interactive' | 'template' | 'case-study'>;
  duration?: string;
  learningObjectives?: string[];
  deliverables?: string[];
}

interface StepSectionProps {
  step: LearningStep;
  isCompleted?: boolean;
  onMarkComplete?: () => void;
}

export function StepSection({ step, isCompleted, onMarkComplete }: StepSectionProps) {
  return (
    <Card className="mb-6" id={`step-${step.number}`}>
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
            isCompleted ? 'bg-success text-success-foreground' : 'bg-primary text-primary-foreground'
          }`}>
            {isCompleted ? <CheckCircle2 className="h-6 w-6" /> : step.number}
          </div>
          <div className="flex-1">
            <CardTitle className="text-2xl mb-2 flex items-center gap-2">
              {step.title}
              {isCompleted && (
                <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                  Complete
                </Badge>
              )}
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {step.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Actions */}
        <div>
          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <span className="text-primary">→</span> Key Actions
          </h4>
          <ul className="space-y-2 ml-6">
            {step.actions.map((action, idx) => (
              <li key={idx} className="text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Outputs */}
        <div>
          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Deliverables & Evidence
          </h4>
          <ul className="space-y-2 ml-6">
            {step.outputs.map((output, idx) => (
              <li key={idx} className="text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{output}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        {step.resources && step.resources.length > 0 && (
          <div>
            <h4 className="font-semibold text-lg mb-3">Templates & Resources</h4>
            <div className="flex flex-wrap gap-2">
              {step.resources.map((resource, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => resource.url && window.open(resource.url, '_blank')}
                >
                  {resource.isTemplate && <FileText className="h-4 w-4" />}
                  {resource.title}
                  {resource.url && <ExternalLink className="h-3 w-3" />}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Mark Complete */}
        {onMarkComplete && !isCompleted && (
          <div className="pt-4 border-t">
            <Button onClick={onMarkComplete} variant="outline" className="gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Mark as Complete
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
