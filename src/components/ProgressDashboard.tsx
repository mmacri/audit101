import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useFrameworkProgress } from '@/hooks/useFrameworkProgress';
import { useAchievements } from '@/hooks/useAchievements';
import { Framework, Persona, frameworkLabels, personaLabels, createFrameworkPersonaKey } from '@/types/frameworkTypes';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Trophy, 
  BookOpen, 
  Target, 
  CheckCircle2,
  Clock,
  TrendingUp,
  Award,
  ArrowRight,
  Sparkles,
  Calendar
} from 'lucide-react';
import { cn } from '@/lib/utils';

const frameworks: Framework[] = [
  'nerc-cip', 'nist-800-53', 'cis-controls', 'nist-csf', 
  'sox-itgc', 'pci-dss', 'hipaa', 'coso', 'iso-27001'
];

interface RecentActivity {
  framework: Framework;
  persona: Persona;
  key: string;
  lastAccessedAt: string;
  stepsCompleted: number;
  totalSteps: number;
  percentage: number;
}

interface Recommendation {
  framework: Framework;
  persona: Persona;
  key: string;
  reason: string;
  priority: 'high' | 'medium' | 'low';
  stepsCompleted: number;
  totalSteps: number;
}

export function ProgressDashboard() {
  const { getAllProgress } = useFrameworkProgress('nerc-cip' as Framework, 'practitioners' as Persona);
  const allProgress = getAllProgress();
  const { stats } = useAchievements(allProgress);

  // Calculate framework completion
  const frameworkStats = useMemo(() => {
    return frameworks.map(framework => {
      const personas: Persona[] = ['practitioners', 'tool-owners', 'leaders', 'auditors'];
      const personaProgress = personas.map(persona => {
        const key = createFrameworkPersonaKey(framework, persona);
        const progress = allProgress[key];
        return {
          persona,
          completed: !!progress?.completedAt,
          stepsCompleted: progress?.stepsCompleted.length || 0,
          inProgress: (progress?.stepsCompleted.length || 0) > 0 && !progress?.completedAt,
        };
      });

      const completedPersonas = personaProgress.filter(p => p.completed).length;
      const inProgressPersonas = personaProgress.filter(p => p.inProgress).length;
      const totalSteps = personaProgress.reduce((sum, p) => sum + p.stepsCompleted, 0);
      
      return {
        framework,
        completedPersonas,
        inProgressPersonas,
        totalPersonas: personas.length,
        totalSteps,
        percentage: Math.round((completedPersonas / personas.length) * 100),
        personaProgress,
      };
    });
  }, [allProgress]);

  // Get recently accessed personas
  const recentActivity = useMemo((): RecentActivity[] => {
    const activities: RecentActivity[] = [];
    
    Object.entries(allProgress).forEach(([key, progress]) => {
      if (progress.lastAccessedAt && progress.stepsCompleted.length > 0) {
        const parts = key.split('-');
        const persona = parts[parts.length - 1] as Persona;
        const framework = parts.slice(0, -1).join('-') as Framework;
        
        activities.push({
          framework,
          persona,
          key,
          lastAccessedAt: progress.lastAccessedAt,
          stepsCompleted: progress.stepsCompleted.length,
          totalSteps: 7, // All personas have 7 steps
          percentage: Math.round((progress.stepsCompleted.length / 7) * 100),
        });
      }
    });

    return activities
      .sort((a, b) => new Date(b.lastAccessedAt).getTime() - new Date(a.lastAccessedAt).getTime())
      .slice(0, 4);
  }, [allProgress]);

  // Generate recommendations
  const recommendations = useMemo((): Recommendation[] => {
    const recs: Recommendation[] = [];
    const personas: Persona[] = ['practitioners', 'tool-owners', 'leaders', 'auditors'];

    // Priority 1: In-progress personas (high priority to finish)
    frameworks.forEach(framework => {
      personas.forEach(persona => {
        const key = createFrameworkPersonaKey(framework, persona);
        const progress = allProgress[key];
        
        if (progress && progress.stepsCompleted.length > 0 && !progress.completedAt) {
          recs.push({
            framework,
            persona,
            key,
            reason: 'Continue where you left off',
            priority: 'high',
            stepsCompleted: progress.stepsCompleted.length,
            totalSteps: 7,
          });
        }
      });
    });

    // Priority 2: Next persona in frameworks with some progress
    const frameworksInProgress = frameworkStats
      .filter(f => f.inProgressPersonas > 0 || f.completedPersonas > 0)
      .filter(f => f.completedPersonas < f.totalPersonas);

    frameworksInProgress.forEach(({ framework, personaProgress }) => {
      const nextPersona = personaProgress.find(p => p.stepsCompleted === 0);
      if (nextPersona) {
        const key = createFrameworkPersonaKey(framework, nextPersona.persona);
        if (!recs.some(r => r.key === key)) {
          recs.push({
            framework,
            persona: nextPersona.persona,
            key,
            reason: `Complete ${frameworkLabels[framework]} mastery`,
            priority: 'medium',
            stepsCompleted: 0,
            totalSteps: 7,
          });
        }
      }
    });

    // Priority 3: Popular starting points for new frameworks
    const untouchedFrameworks = frameworkStats.filter(f => f.totalSteps === 0);
    untouchedFrameworks.slice(0, 3).forEach(({ framework }) => {
      const key = createFrameworkPersonaKey(framework, 'practitioners');
      if (!recs.some(r => r.key === key)) {
        recs.push({
          framework,
          persona: 'practitioners',
          key,
          reason: 'Great starting point for this framework',
          priority: 'low',
          stepsCompleted: 0,
          totalSteps: 7,
        });
      }
    });

    return recs.slice(0, 6);
  }, [allProgress, frameworkStats]);

  const totalPersonasCompleted = frameworkStats.reduce((sum, f) => sum + f.completedPersonas, 0);
  const totalPersonasInProgress = frameworkStats.reduce((sum, f) => sum + f.inProgressPersonas, 0);
  const activeFrameworks = frameworkStats.filter(f => f.totalSteps > 0).length;

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-amber-500" />
              Achievements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-amber-500">{stats.earned}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.total - stats.earned} more to unlock
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              Completed Paths
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success">{totalPersonasCompleted}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Across {activeFrameworks} frameworks
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              In Progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{totalPersonasInProgress}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Learning paths started
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2">
              <Target className="h-4 w-4 text-teal-500" />
              Frameworks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-teal-500">{activeFrameworks}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Out of {frameworks.length} available
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      {recentActivity.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
            <CardDescription>Pick up where you left off</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map(activity => (
                <Link
                  key={activity.key}
                  to={`/${activity.framework}/${activity.persona}`}
                  className="block group"
                >
                  <div className="flex items-center gap-4 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/50 transition-all">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm truncate">
                          {frameworkLabels[activity.framework]}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {personaLabels[activity.persona]}
                        </Badge>
                      </div>
                      <Progress value={activity.percentage} className="h-1.5 mb-1" />
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{activity.stepsCompleted} of {activity.totalSteps} steps</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(activity.lastAccessedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-500" />
              Recommended Next Steps
            </CardTitle>
            <CardDescription>Personalized learning paths based on your progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recommendations.map(rec => (
                <Link
                  key={rec.key}
                  to={`/${rec.framework}/${rec.persona}`}
                  className="block group"
                >
                  <div className={cn(
                    "flex items-center gap-4 p-3 rounded-lg border transition-all",
                    rec.priority === 'high' && "border-amber-500/50 bg-amber-500/5 hover:bg-amber-500/10",
                    rec.priority === 'medium' && "border-primary/50 bg-primary/5 hover:bg-primary/10",
                    rec.priority === 'low' && "border-border hover:border-primary/50 hover:bg-accent/50"
                  )}>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm truncate">
                          {frameworkLabels[rec.framework]} - {personaLabels[rec.persona]}
                        </span>
                        {rec.priority === 'high' && (
                          <Badge variant="default" className="text-xs bg-amber-500">Priority</Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{rec.reason}</p>
                      {rec.stepsCompleted > 0 && (
                        <div className="flex items-center gap-2">
                          <Progress value={(rec.stepsCompleted / rec.totalSteps) * 100} className="h-1 flex-1" />
                          <span className="text-xs text-muted-foreground">
                            {rec.stepsCompleted}/{rec.totalSteps}
                          </span>
                        </div>
                      )}
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Framework Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Framework Progress
          </CardTitle>
          <CardDescription>Your completion status across all frameworks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {frameworkStats
              .filter(f => f.totalSteps > 0) // Show active frameworks first
              .concat(frameworkStats.filter(f => f.totalSteps === 0))
              .map(({ framework, completedPersonas, inProgressPersonas, totalPersonas, percentage }) => (
                <div key={framework} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{frameworkLabels[framework]}</span>
                      <Badge variant="outline" className="text-xs">
                        {completedPersonas}/{totalPersonas} personas
                      </Badge>
                    </div>
                    {inProgressPersonas > 0 && (
                      <Badge variant="secondary" className="text-xs">
                        {inProgressPersonas} in progress
                      </Badge>
                    )}
                  </div>
                  <Progress value={percentage} className="h-2" />
                </div>
              ))}
          </div>

          <div className="mt-6 pt-6 border-t">
            <Button asChild className="w-full gap-2">
              <Link to="/achievements">
                <Award className="h-4 w-4" />
                View All Achievements
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Empty State */}
      {recentActivity.length === 0 && totalPersonasCompleted === 0 && (
        <Card className="bg-gradient-to-br from-primary/5 to-background">
          <CardContent className="pt-6 text-center">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Start Your Learning Journey</h3>
            <p className="text-muted-foreground mb-6">
              Choose a framework and persona to begin tracking your progress
            </p>
            <Button asChild>
              <Link to="/" className="gap-2">
                Explore Frameworks
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
