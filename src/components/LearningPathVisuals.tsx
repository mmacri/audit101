import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  FileText, 
  Video, 
  CheckSquare, 
  Code, 
  HelpCircle,
  Clock,
  PlayCircle,
  Download,
  Lightbulb,
  Target,
  CheckCircle2
} from 'lucide-react';

export type ContentType = 'reading' | 'video' | 'exercise' | 'quiz' | 'documentation' | 'interactive' | 'template' | 'case-study';

interface StepContent {
  stepNumber: number;
  title: string;
  description: string;
  duration: string;
  contentTypes: ContentType[];
  learningObjectives: string[];
  deliverables: string[];
}

interface InteractiveLearningPathProps {
  steps: StepContent[];
  completedSteps: number[];
}

export function InteractiveLearningPath({ steps, completedSteps }: InteractiveLearningPathProps) {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const contentIcons: Record<ContentType, { icon: any; label: string; color: string; bgColor: string }> = {
    'reading': { icon: BookOpen, label: 'Reading Material', color: 'text-blue-600', bgColor: 'bg-blue-500/10' },
    'video': { icon: Video, label: 'Video Tutorial', color: 'text-purple-600', bgColor: 'bg-purple-500/10' },
    'exercise': { icon: CheckSquare, label: 'Hands-on Exercise', color: 'text-green-600', bgColor: 'bg-green-500/10' },
    'quiz': { icon: HelpCircle, label: 'Knowledge Check', color: 'text-orange-600', bgColor: 'bg-orange-500/10' },
    'documentation': { icon: FileText, label: 'Documentation', color: 'text-gray-600', bgColor: 'bg-gray-500/10' },
    'interactive': { icon: Code, label: 'Interactive Lab', color: 'text-pink-600', bgColor: 'bg-pink-500/10' },
    'template': { icon: Download, label: 'Template Download', color: 'text-indigo-600', bgColor: 'bg-indigo-500/10' },
    'case-study': { icon: Lightbulb, label: 'Case Study', color: 'text-amber-600', bgColor: 'bg-amber-500/10' }
  };

  const completedCount = completedSteps.length;
  const totalSteps = steps.length;
  const completionPercentage = totalSteps > 0 ? (completedCount / totalSteps) * 100 : 0;

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Your Interactive Learning Journey</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Explore each step to see the learning materials, exercises, and assessments you'll complete
          </p>
          
          {/* Quick Progress Summary */}
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-muted/50 rounded-full border border-border">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="font-semibold">{completedCount}/{totalSteps} Steps</span>
            </div>
            <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {Math.round(completionPercentage)}% Complete
            </span>
          </div>
        </div>

        <Tabs defaultValue="timeline" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="timeline">Timeline View</TabsTrigger>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
          </TabsList>

          <TabsContent value="timeline" className="space-y-6">
            <div className="relative">
              {steps.map((step, index) => {
                const isCompleted = completedSteps.includes(step.stepNumber);
                const isSelected = selectedStep === step.stepNumber;
                
                return (
                  <div key={step.stepNumber} className="relative pb-8 last:pb-0">
                    {/* Connecting line */}
                    {index < steps.length - 1 && (
                      <div className={`absolute left-6 top-12 bottom-0 w-0.5 ${
                        completedSteps.includes(step.stepNumber) && completedSteps.includes(steps[index + 1].stepNumber)
                          ? 'bg-primary'
                          : 'bg-border'
                      }`} />
                    )}
                    
                    <Card 
                      className={`transition-all duration-300 cursor-pointer hover:shadow-lg relative overflow-hidden ${
                        isSelected ? 'ring-2 ring-primary shadow-lg' : ''
                      } ${isCompleted ? 'border-primary/50 bg-primary/5' : ''}`}
                      onClick={() => setSelectedStep(isSelected ? null : step.stepNumber)}
                    >
                      {/* Completion overlay indicator */}
                      {isCompleted && (
                        <div className="absolute top-0 right-0">
                          <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-bl-lg flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3" />
                            Completed
                          </div>
                        </div>
                      )}
                      
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          {/* Step number badge with enhanced styling */}
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-2 transition-all duration-300 ${
                            isCompleted 
                              ? 'bg-primary border-primary shadow-lg shadow-primary/20' 
                              : 'bg-muted border-border'
                          }`}>
                            {isCompleted ? (
                              <CheckCircle2 className="h-6 w-6 text-primary-foreground animate-in zoom-in duration-300" />
                            ) : (
                              <span className={`text-lg font-bold ${isCompleted ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                                {step.stepNumber}
                              </span>
                            )}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <CardTitle className="text-xl">{step.title}</CardTitle>
                              <Badge variant="secondary" className="gap-1.5">
                                <Clock className="h-3 w-3" />
                                {step.duration}
                              </Badge>
                            </div>
                            <CardDescription className="text-base">
                              {step.description}
                            </CardDescription>
                          </div>
                        </div>

                        {/* Content type badges */}
                        <div className="flex flex-wrap gap-2 mt-4 ml-16">
                          {step.contentTypes.map((type) => {
                            const { icon: Icon, label, color, bgColor } = contentIcons[type];
                            return (
                              <Badge 
                                key={type} 
                                variant="outline" 
                                className={`gap-1.5 ${bgColor} border-0`}
                              >
                                <Icon className={`h-3.5 w-3.5 ${color}`} />
                                <span className="text-xs font-medium">{label}</span>
                              </Badge>
                            );
                          })}
                        </div>
                      </CardHeader>

                      {/* Expanded content */}
                      {isSelected && (
                        <CardContent className="pt-0 ml-16 animate-fade-in">
                          <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-border">
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <Target className="h-4 w-4 text-primary" />
                                <h4 className="font-semibold">Learning Objectives</h4>
                              </div>
                              <ul className="space-y-2">
                                {step.learningObjectives.map((objective, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                    <span>{objective}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <FileText className="h-4 w-4 text-primary" />
                                <h4 className="font-semibold">What You'll Create</h4>
                              </div>
                              <ul className="space-y-2">
                                {step.deliverables.map((deliverable, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <Download className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                    <span>{deliverable}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <Button className="mt-6" variant={isCompleted ? "outline" : "default"}>
                            <PlayCircle className="mr-2 h-4 w-4" />
                            {isCompleted ? 'Review Step' : 'Start Step'}
                          </Button>
                        </CardContent>
                      )}
                    </Card>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="grid">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step) => {
                const isCompleted = completedSteps.includes(step.stepNumber);
                
                return (
                  <Card 
                    key={step.stepNumber}
                    className={`hover:shadow-lg transition-all duration-300 cursor-pointer ${
                      isCompleted ? 'border-primary/50' : ''
                    }`}
                    onClick={() => setSelectedStep(selectedStep === step.stepNumber ? null : step.stepNumber)}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 ${
                          isCompleted 
                            ? 'bg-primary border-primary' 
                            : 'bg-muted border-border'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                          ) : (
                            <span className={`font-bold ${isCompleted ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                              {step.stepNumber}
                            </span>
                          )}
                        </div>
                        <Badge variant="secondary" className="gap-1.5 text-xs">
                          <Clock className="h-3 w-3" />
                          {step.duration}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription className="text-sm line-clamp-2">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5">
                        {step.contentTypes.map((type) => {
                          const { icon: Icon, color, bgColor } = contentIcons[type];
                          return (
                            <div 
                              key={type}
                              className={`p-1.5 rounded ${bgColor}`}
                              title={contentIcons[type].label}
                            >
                              <Icon className={`h-3.5 w-3.5 ${color}`} />
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-4 text-xs text-muted-foreground">
                        {step.learningObjectives.length} objectives • {step.deliverables.length} deliverables
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Content Legend */}
        <Card className="mt-12 bg-muted/30">
          <CardHeader>
            <CardTitle className="text-base">Content Types Legend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(contentIcons).map(([type, { icon: Icon, label, color, bgColor }]) => (
                <div key={type} className="flex items-center gap-2">
                  <div className={`p-2 rounded ${bgColor}`}>
                    <Icon className={`h-4 w-4 ${color}`} />
                  </div>
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
