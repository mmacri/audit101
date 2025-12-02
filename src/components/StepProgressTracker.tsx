import { Card } from '@/components/ui/card';
import { CheckCircle2, Circle, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  number: number;
  title: string;
  isCompleted: boolean;
}

interface StepProgressTrackerProps {
  steps: Step[];
  currentStep?: number;
  className?: string;
}

export function StepProgressTracker({ steps, currentStep, className }: StepProgressTrackerProps) {
  return (
    <Card className={cn("p-6", className)}>
      <h3 className="font-semibold text-lg mb-4">Step-by-Step Progress</h3>
      <div className="space-y-3">
        {steps.map((step, index) => {
          const isNext = !step.isCompleted && steps.slice(0, index).every(s => s.isCompleted);
          const isLocked = !step.isCompleted && !steps.slice(0, index).every(s => s.isCompleted) && index > 0;
          
          return (
            <div key={step.number} className="relative">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div 
                  className={cn(
                    "absolute left-3 top-8 w-0.5 h-6 transition-colors duration-300",
                    step.isCompleted ? "bg-primary" : "bg-border"
                  )}
                />
              )}
              
              <a
                href={`#step-${step.number}`}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg transition-all duration-300 group",
                  step.isCompleted && "bg-primary/5 hover:bg-primary/10",
                  isNext && "bg-accent/50 hover:bg-accent/70 ring-2 ring-primary/30",
                  !step.isCompleted && !isNext && "hover:bg-muted/50",
                  currentStep === step.number && "ring-2 ring-primary"
                )}
              >
                {/* Status icon */}
                <div className={cn(
                  "relative flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300",
                  step.isCompleted && "bg-primary text-primary-foreground shadow-md",
                  isNext && "bg-primary/20 text-primary ring-2 ring-primary/50 animate-pulse",
                  !step.isCompleted && !isNext && "bg-muted text-muted-foreground"
                )}>
                  {step.isCompleted ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : isLocked ? (
                    <Lock className="h-3 w-3" />
                  ) : isNext ? (
                    <Circle className="h-4 w-4 fill-primary" />
                  ) : (
                    <span className="text-xs font-semibold">{step.number}</span>
                  )}
                </div>

                {/* Step info */}
                <div className="flex-1 min-w-0">
                  <div className={cn(
                    "text-sm font-medium transition-colors duration-300 truncate",
                    step.isCompleted && "text-primary",
                    isNext && "text-primary font-semibold",
                    !step.isCompleted && !isNext && "text-muted-foreground"
                  )}>
                    {step.title}
                  </div>
                  {isNext && (
                    <div className="text-xs text-primary mt-0.5">
                      Start this step next →
                    </div>
                  )}
                  {step.isCompleted && (
                    <div className="text-xs text-success mt-0.5 flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      Completed
                    </div>
                  )}
                </div>

                {/* Completion indicator */}
                {step.isCompleted && (
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-success" />
                  </div>
                )}
              </a>
            </div>
          );
        })}
      </div>
      
      {/* Summary */}
      <div className="mt-6 pt-4 border-t">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Overall Progress</span>
          <span className="font-semibold">
            {steps.filter(s => s.isCompleted).length} / {steps.length} steps
          </span>
        </div>
        <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500"
            style={{ 
              width: `${(steps.filter(s => s.isCompleted).length / steps.length) * 100}%` 
            }}
          />
        </div>
      </div>
    </Card>
  );
}
