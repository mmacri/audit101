import { ReactNode } from 'react';
import { AcademyLayout } from './AcademyLayout';
import { StepSection, LearningStep } from './StepSection';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Award } from 'lucide-react';
import { useFrameworkProgress } from '@/hooks/useFrameworkProgress';
import { Framework, Persona } from '@/types/frameworkTypes';
import { useToast } from '@/hooks/use-toast';

interface PersonaPageWrapperProps {
  framework: Framework;
  persona: Persona;
  title: string;
  description: string;
  breadcrumbs: Array<{ label: string; path?: string }>;
  steps: LearningStep[];
  children?: ReactNode;
}

export function PersonaPageWrapper({
  framework,
  persona,
  title,
  description,
  breadcrumbs,
  steps,
  children,
}: PersonaPageWrapperProps) {
  const { 
    isStepComplete, 
    markStepComplete, 
    markStepIncomplete,
    getCompletionPercentage,
    markPersonaComplete,
    isPersonaComplete,
  } = useFrameworkProgress(framework, persona);
  
  const { toast } = useToast();
  const completionPercentage = getCompletionPercentage(steps.length);
  const allStepsComplete = steps.every(step => isStepComplete(step.number));
  const personaComplete = isPersonaComplete();

  const handleMarkStepComplete = (stepNumber: number) => {
    const isComplete = isStepComplete(stepNumber);
    
    if (isComplete) {
      markStepIncomplete(stepNumber);
      toast({
        title: "Step marked incomplete",
        description: `Step ${stepNumber} has been unmarked`,
      });
    } else {
      markStepComplete(stepNumber);
      toast({
        title: "Step completed! 🎉",
        description: `Step ${stepNumber} marked as complete`,
      });
      
      // Check if all steps are now complete
      const nowComplete = steps.every(s => 
        s.number === stepNumber || isStepComplete(s.number)
      );
      
      if (nowComplete && !personaComplete) {
        setTimeout(() => {
          toast({
            title: "Persona path completed! 🏆",
            description: "You've finished all steps in this learning path!",
            duration: 5000,
          });
        }, 500);
      }
    }
  };

  const handleCompletePersona = () => {
    markPersonaComplete();
    toast({
      title: "Achievement unlocked! 🎖️",
      description: `${title} path completed!`,
      duration: 5000,
    });
  };

  return (
    <AcademyLayout academyName={title} breadcrumbs={breadcrumbs}>
      {/* Breadcrumb navigation */}
      <div className="bg-muted/30 py-3 border-b">
        <div className="container max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>/</span>
            {breadcrumbs.slice(0, -1).map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {crumb.path ? (
                  <a href={crumb.path} className="hover:text-primary transition-colors">{crumb.label}</a>
                ) : (
                  <span>{crumb.label}</span>
                )}
                <span>/</span>
              </span>
            ))}
            <span className="text-foreground font-medium">{breadcrumbs[breadcrumbs.length - 1].label}</span>
          </nav>
        </div>
      </div>
      
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>

          {/* Progress Card */}
          <Card className="p-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Your Progress</h3>
                  <p className="text-sm text-muted-foreground">
                    {steps.filter(s => isStepComplete(s.number)).length} of {steps.length} steps completed
                  </p>
                </div>
                {personaComplete && (
                  <div className="flex items-center gap-2 text-success">
                    <Award className="h-6 w-6" />
                    <span className="font-semibold">Completed!</span>
                  </div>
                )}
              </div>
              
              <Progress value={completionPercentage} className="h-3" />
              
              {allStepsComplete && !personaComplete && (
                <div className="pt-2 border-t">
                  <Button 
                    onClick={handleCompletePersona}
                    className="w-full gap-2"
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    Mark Persona Path as Complete
                  </Button>
                </div>
              )}
            </div>
          </Card>

          {/* Children (if any) */}
          {children}

          {/* Steps */}
          {steps.map((step) => (
            <StepSection
              key={step.number}
              step={step}
              isCompleted={isStepComplete(step.number)}
              onMarkComplete={() => handleMarkStepComplete(step.number)}
            />
          ))}
        </div>
      </section>
    </AcademyLayout>
  );
}
