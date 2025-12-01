import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle2, 
  Clock, 
  Target, 
  BookOpen, 
  FileText, 
  Users, 
  BarChart3,
  Shield,
  Wrench,
  ClipboardCheck,
  ArrowRight,
  Zap,
  TrendingUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useFrameworkProgress } from '@/hooks/useFrameworkProgress';
import { Framework } from '@/types/frameworkTypes';

interface PersonaData {
  id: string;
  title: string;
  description: string;
  icon: any;
  path: string;
  keyResponsibilities: string[];
  typicalDay: string[];
  skills: string[];
  outcomes: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeCommitment: string;
  focus: string;
}

interface PersonaComparisonProps {
  framework: Framework;
  personas: PersonaData[];
  totalSteps: number;
}

export function PersonaComparison({ framework, personas, totalSteps }: PersonaComparisonProps) {
  const [selectedView, setSelectedView] = useState<'overview' | 'detailed'>('overview');
  const navigate = useNavigate();

  const difficultyColors = {
    'Beginner': 'bg-green-500/10 text-green-700 border-green-500/20',
    'Intermediate': 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20',
    'Advanced': 'bg-red-500/10 text-red-700 border-red-500/20',
  };

  const getProgressForPersona = (personaId: string) => {
    const progress = useFrameworkProgress(framework, personaId as any);
    return {
      completed: progress.getCurrentProgress().stepsCompleted.length,
      percentage: progress.getCompletionPercentage(totalSteps),
      isComplete: progress.isPersonaComplete()
    };
  };

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Compare Learning Paths</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Understand the unique focus and responsibilities of each role to choose the path that best matches your goals
          </p>
        </div>

        <Tabs value={selectedView} onValueChange={(v) => setSelectedView(v as any)} className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="overview">Quick Overview</TabsTrigger>
            <TabsTrigger value="detailed">Detailed Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {personas.map((persona) => {
                const progress = getProgressForPersona(persona.id);
                const Icon = persona.icon;
                
                return (
                  <Card 
                    key={persona.id} 
                    className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary/50"
                    onClick={() => navigate(persona.path)}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{persona.title}</CardTitle>
                      <CardDescription className="text-sm line-clamp-2">
                        {persona.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Difficulty</span>
                          <Badge variant="outline" className={difficultyColors[persona.difficulty]}>
                            {persona.difficulty}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{persona.timeCommitment}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Target className="h-4 w-4" />
                          <span>{persona.focus}</span>
                        </div>
                      </div>

                      {progress.completed > 0 && (
                        <div className="space-y-2 pt-3 border-t border-border">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Your Progress</span>
                            <span className="font-medium">{progress.percentage}%</span>
                          </div>
                          <Progress value={progress.percentage} className="h-1.5" />
                        </div>
                      )}

                      <Button 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        variant="outline"
                      >
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="detailed" className="mt-8">
            <div className="overflow-x-auto">
              <div className="min-w-[900px] grid grid-cols-4 gap-6">
                {personas.map((persona) => {
                  const progress = getProgressForPersona(persona.id);
                  const Icon = persona.icon;
                  
                  return (
                    <Card key={persona.id} className="animate-fade-in">
                      <CardHeader className="pb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">{persona.title}</CardTitle>
                        <div className="space-y-2 pt-2">
                          <Badge variant="outline" className={difficultyColors[persona.difficulty]}>
                            {persona.difficulty}
                          </Badge>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{persona.timeCommitment}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6 text-sm">
                        {/* Key Responsibilities */}
                        <div>
                          <div className="flex items-center gap-2 mb-3 text-foreground font-semibold">
                            <Shield className="h-4 w-4 text-primary" />
                            <span>Key Responsibilities</span>
                          </div>
                          <ul className="space-y-2">
                            {persona.keyResponsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                                <span className="text-xs leading-relaxed">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills Focus */}
                        <div>
                          <div className="flex items-center gap-2 mb-3 text-foreground font-semibold">
                            <Zap className="h-4 w-4 text-primary" />
                            <span>Skills You'll Build</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {persona.skills.map((skill, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Learning Outcomes */}
                        <div>
                          <div className="flex items-center gap-2 mb-3 text-foreground font-semibold">
                            <TrendingUp className="h-4 w-4 text-primary" />
                            <span>What You'll Achieve</span>
                          </div>
                          <ul className="space-y-2">
                            {persona.outcomes.slice(0, 3).map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                <Target className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                                <span className="text-xs leading-relaxed">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Typical Day */}
                        <div>
                          <div className="flex items-center gap-2 mb-3 text-foreground font-semibold">
                            <BookOpen className="h-4 w-4 text-primary" />
                            <span>Typical Activities</span>
                          </div>
                          <ul className="space-y-2">
                            {persona.typicalDay.slice(0, 3).map((activity, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground leading-relaxed">
                                • {activity}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Progress */}
                        {progress.completed > 0 && (
                          <div className="pt-3 border-t border-border">
                            <div className="flex items-center justify-between text-xs mb-2">
                              <span className="text-muted-foreground">Your Progress</span>
                              <span className="font-medium">{progress.completed}/{totalSteps} steps</span>
                            </div>
                            <Progress value={progress.percentage} className="h-1.5 mb-2" />
                            {progress.isComplete && (
                              <Badge variant="outline" className="bg-green-500/10 text-green-700 border-green-500/20 w-full justify-center">
                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                Completed
                              </Badge>
                            )}
                          </div>
                        )}

                        <Button 
                          className="w-full"
                          onClick={() => navigate(persona.path)}
                        >
                          Start This Path
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 p-6 bg-muted/50 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Not Sure Which Path to Choose?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Most learners benefit from exploring multiple paths. You can complete paths in any order and 
                    track progress independently for each role. Many compliance professionals complete 2-3 paths 
                    to build comprehensive knowledge.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Take Role Assessment
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => navigate('/progress')}>
                      <BarChart3 className="mr-2 h-4 w-4" />
                      View My Progress
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
