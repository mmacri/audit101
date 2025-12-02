import { ReactNode, useState } from 'react';
import { AcademyLayout } from './AcademyLayout';
import { StepSection, LearningStep } from './StepSection';
import { InteractiveLearningPath, ContentType } from '@/components/LearningPathVisuals';
import { StepProgressTracker } from '@/components/StepProgressTracker';
import { CompletionCelebration } from '@/components/CompletionCelebration';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Award } from 'lucide-react';
import { useFrameworkProgress } from '@/hooks/useFrameworkProgress';
import { Framework, Persona } from '@/types/frameworkTypes';
import { useToast } from '@/hooks/use-toast';

// Extended step interface with content metadata
export interface EnhancedLearningStep extends LearningStep {
  contentTypes?: ContentType[];
  duration?: string;
  learningObjectives?: string[];
  deliverables?: string[];
}

interface PersonaPageWrapperProps {
  framework: Framework;
  persona: Persona;
  title: string;
  description: string;
  breadcrumbs: Array<{ label: string; path?: string }>;
  steps: EnhancedLearningStep[];
  children?: ReactNode;
  showInteractivePath?: boolean;
}

export function PersonaPageWrapper({
  framework,
  persona,
  title,
  description,
  breadcrumbs,
  steps,
  children,
  showInteractivePath = true,
}: PersonaPageWrapperProps) {
  const { 
    isStepComplete, 
    markStepComplete, 
    markStepIncomplete,
    getCompletionPercentage,
    markPersonaComplete,
    isPersonaComplete,
    getCurrentProgress
  } = useFrameworkProgress(framework, persona);
  
  const { toast } = useToast();
  const completionPercentage = getCompletionPercentage(steps.length);
  const allStepsComplete = steps.every(step => isStepComplete(step.number));
  const personaComplete = isPersonaComplete();
  const completedSteps = getCurrentProgress().stepsCompleted;
  
  const [showCelebration, setShowCelebration] = useState(false);

  // Convert steps to interactive format
  const interactiveSteps = steps.map(step => ({
    stepNumber: step.number,
    title: step.title,
    description: step.description,
    duration: step.duration || '1-2 hours',
    contentTypes: step.contentTypes || ['reading', 'documentation', 'exercise'] as ContentType[],
    learningObjectives: step.learningObjectives || [
      'Understand key concepts and requirements',
      'Apply knowledge to real-world scenarios',
      'Build practical skills through exercises'
    ],
    deliverables: step.deliverables || [
      'Documentation templates',
      'Implementation checklist',
      'Evidence samples'
    ]
  }));

  const handleMarkStepComplete = (stepNumber: number) => {
    const isComplete = isStepComplete(stepNumber);
    
    if (isComplete) {
      markStepIncomplete(stepNumber);
      toast({
        title: "Step marked incomplete",
        description: `Step ${stepNumber}: ${steps.find(s => s.number === stepNumber)?.title}`,
        variant: "default",
      });
    } else {
      markStepComplete(stepNumber);
      
      // Scroll to top to show updated progress
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Show completion toast with confetti effect
      toast({
        title: "🎉 Step completed!",
        description: `Great job completing "${steps.find(s => s.number === stepNumber)?.title}"`,
        duration: 5000,
      });
      
      // Check if all steps are now complete
      const nowComplete = steps.every(s => 
        s.number === stepNumber || isStepComplete(s.number)
      );
      
      if (nowComplete && !personaComplete) {
        setTimeout(() => {
          toast({
            title: "🏆 All steps completed!",
            description: "You've finished all steps in this learning path! Click below to complete the persona path and earn your badge.",
            duration: 8000,
          });
        }, 1000);
      }
    }
  };

  const handleCompletePersona = () => {
    markPersonaComplete();
    
    // Show celebration
    setShowCelebration(true);
    
    // Scroll to top to show badge
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    toast({
      title: "🎖️ Achievement unlocked!",
      description: `Congratulations on completing the ${title} learning path! Your badge has been awarded.`,
      duration: 8000,
    });
  };

  return (
    <AcademyLayout academyName={title} breadcrumbs={breadcrumbs}>
      {/* Celebration overlay */}
      <CompletionCelebration 
        show={showCelebration}
        title="🏆 Path Completed!"
        message={`You've mastered the ${title} learning path!`}
      />
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

          {/* Enhanced Progress Card */}
          <Card className="p-6 mb-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-xl flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    Learning Path Progress
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Track your journey through all {steps.length} steps
                  </p>
                </div>
                {personaComplete && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-success/10 border border-success/20 rounded-lg">
                    <Award className="h-6 w-6 text-success" />
                    <span className="font-semibold text-success">Path Completed!</span>
                  </div>
                )}
              </div>
              
              {/* Progress statistics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <div className="text-3xl font-bold text-primary">
                    {steps.filter(s => isStepComplete(s.number)).length}
                  </div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <div className="text-3xl font-bold text-muted-foreground">
                    {steps.length - steps.filter(s => isStepComplete(s.number)).length}
                  </div>
                  <div className="text-sm text-muted-foreground">Remaining</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <div className="text-3xl font-bold text-primary">
                    {Math.round(completionPercentage)}%
                  </div>
                  <div className="text-sm text-muted-foreground">Complete</div>
                </div>
              </div>
              
              {/* Progress bar with step indicators */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Overall Completion</span>
                  <span className="text-muted-foreground">
                    Step {steps.filter(s => isStepComplete(s.number)).length} of {steps.length}
                  </span>
                </div>
                <Progress value={completionPercentage} className="h-4" />
                
                {/* Step indicators */}
                <div className="flex items-center gap-1 pt-2">
                  {steps.map((step) => (
                    <div
                      key={step.number}
                      className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                        isStepComplete(step.number)
                          ? 'bg-primary'
                          : 'bg-muted'
                      }`}
                      title={`Step ${step.number}: ${step.title}`}
                    />
                  ))}
                </div>
              </div>
              
              {allStepsComplete && !personaComplete && (
                <div className="pt-4 border-t border-primary/20">
                  <Button 
                    onClick={handleCompletePersona}
                    className="w-full gap-2 h-12 text-base"
                    size="lg"
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    Complete Learning Path & Earn Badge
                  </Button>
                </div>
              )}
            </div>
          </Card>

          {/* Children (if any) */}
          {children}

          {/* Step Progress Tracker - Sidebar-style */}
          <div className="grid lg:grid-cols-[1fr,300px] gap-8 mb-8">
            <div className="lg:order-2">
              <div className="lg:sticky lg:top-24">
                <StepProgressTracker 
                  steps={steps.map(s => ({
                    number: s.number,
                    title: s.title,
                    isCompleted: isStepComplete(s.number)
                  }))}
                />
              </div>
            </div>
            
            <div className="lg:order-1">
              {/* Interactive Learning Path */}
              {showInteractivePath && interactiveSteps.length > 0 && (
                <InteractiveLearningPath 
                  steps={interactiveSteps}
                  completedSteps={completedSteps}
                />
              )}
            </div>
          </div>

          {/* Traditional Steps View */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Detailed Step-by-Step Guide</h2>
            {steps.map((step) => (
              <StepSection
                key={step.number}
                step={step}
                isCompleted={isStepComplete(step.number)}
                onMarkComplete={() => handleMarkStepComplete(step.number)}
              />
            ))}
          </div>
        </div>
      </section>
    </AcademyLayout>
  );
}
