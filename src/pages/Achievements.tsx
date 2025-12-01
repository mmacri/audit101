import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PageIntro } from '@/components/PageIntro';
import { GlobalNav } from '@/components/shared/GlobalNav';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useFrameworkProgress } from '@/hooks/useFrameworkProgress';
import { useAchievements } from '@/hooks/useAchievements';
import { Framework, Persona, frameworkLabels, personaLabels } from '@/types/frameworkTypes';
import { 
  Trophy, 
  Award,
  Crown,
  Sparkles,
  BookOpen,
  GraduationCap,
  Shield,
  Lock,
  ArrowRight
} from 'lucide-react';

const badgeIconMap: Record<string, React.ElementType> = {
  Award: Award,
  Crown: Crown,
  Sparkles: Sparkles,
  BookOpen: BookOpen,
  GraduationCap: GraduationCap,
  Trophy: Trophy,
  Shield: Shield,
};

const rarityColors = {
  common: 'bg-slate-500/10 text-slate-700 dark:text-slate-300',
  rare: 'bg-blue-500/10 text-blue-700 dark:text-blue-300',
  epic: 'bg-purple-500/10 text-purple-700 dark:text-purple-300',
  legendary: 'bg-amber-500/10 text-amber-700 dark:text-amber-300',
};

export default function Achievements() {
  const { getAllProgress } = useFrameworkProgress('nerc-cip' as Framework, 'practitioners' as Persona);
  const allProgress = getAllProgress();
  const { achievements, stats } = useAchievements(allProgress);

  const frameworks: Framework[] = [
    'nerc-cip', 'nist-800-53', 'cis-controls', 'nist-csf', 
    'sox-itgc', 'pci-dss', 'hipaa', 'coso', 'iso-27001'
  ];

  const frameworkCompletions = useMemo(() => {
    return frameworks.map(framework => {
      const personas: Persona[] = ['practitioners', 'tool-owners', 'leaders', 'auditors'];
      const completed = personas.filter(persona => {
        const key = `${framework}-${persona}`;
        return allProgress[key]?.completedAt;
      }).length;
      
      return {
        framework,
        completed,
        total: personas.length,
        percentage: Math.round((completed / personas.length) * 100),
      };
    });
  }, [allProgress]);

  return (
    <Layout>
      <GlobalNav />
      <section className="py-12 md:py-16">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Achievements & Badges
            </h1>
          </div>

          {/* Page Intro */}
          <div className="max-w-2xl mx-auto mb-10">
            <PageIntro>
              Track your learning journey across all audit frameworks. Earn badges by completing persona paths,
              mastering entire frameworks, and reaching special milestones.
            </PageIntro>
          </div>

          {/* Summary Stats */}
          <div className="grid sm:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-primary">{stats.earned}</p>
                <p className="text-sm text-muted-foreground">Badges Earned</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-primary">{stats.total}</p>
                <p className="text-sm text-muted-foreground">Total Badges</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-primary">{stats.percentage}%</p>
                <p className="text-sm text-muted-foreground">Complete</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-primary">{stats.byRarity.legendary + stats.byRarity.epic}</p>
                <p className="text-sm text-muted-foreground">Rare Badges</p>
              </CardContent>
            </Card>
          </div>

          {/* Framework Progress Overview */}
          <div className="max-w-5xl mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-6">Framework Completion</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {frameworkCompletions.map(({ framework, completed, total, percentage }) => (
                <Card key={framework}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{frameworkLabels[framework]}</CardTitle>
                    <CardDescription>
                      {completed} of {total} personas complete
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Progress value={percentage} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Badges by Category */}
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Milestone Badges */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Milestone Achievements</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements
                  .filter(a => a.category === 'milestone')
                  .map(achievement => {
                    const Icon = badgeIconMap[achievement.icon] || Award;
                    return (
                      <Card 
                        key={achievement.id} 
                        className={achievement.earned ? 'border-primary/50' : 'opacity-60'}
                      >
                        <CardHeader>
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${achievement.earned ? 'bg-primary/10' : 'bg-muted'}`}>
                              {achievement.earned ? (
                                <Icon className="h-6 w-6 text-primary" />
                              ) : (
                                <Lock className="h-6 w-6 text-muted-foreground" />
                              )}
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-base flex items-center gap-2">
                                {achievement.title}
                                <Badge variant="outline" className={rarityColors[achievement.rarity]}>
                                  {achievement.rarity}
                                </Badge>
                              </CardTitle>
                              <CardDescription className="mt-1">
                                {achievement.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    );
                  })}
              </div>
            </div>

            {/* Framework Mastery Badges */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Framework Mastery</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements
                  .filter(a => a.category === 'framework')
                  .map(achievement => {
                    const Icon = badgeIconMap[achievement.icon] || Crown;
                    return (
                      <Card 
                        key={achievement.id} 
                        className={achievement.earned ? 'border-primary/50' : 'opacity-60'}
                      >
                        <CardHeader>
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${achievement.earned ? 'bg-primary/10' : 'bg-muted'}`}>
                              {achievement.earned ? (
                                <Icon className="h-6 w-6 text-primary" />
                              ) : (
                                <Lock className="h-6 w-6 text-muted-foreground" />
                              )}
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-base flex items-center gap-2">
                                {achievement.title}
                                <Badge variant="outline" className={rarityColors[achievement.rarity]}>
                                  {achievement.rarity}
                                </Badge>
                              </CardTitle>
                              <CardDescription className="mt-1">
                                {achievement.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    );
                  })}
              </div>
            </div>

            {/* Special Badges */}
            {achievements.some(a => a.category === 'special' && a.earned) && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Special Achievements</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievements
                    .filter(a => a.category === 'special' && a.earned)
                    .map(achievement => {
                      const Icon = badgeIconMap[achievement.icon] || Shield;
                      return (
                        <Card key={achievement.id} className="border-primary/50">
                          <CardHeader>
                            <div className="flex items-start gap-3">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                              <div className="flex-1">
                                <CardTitle className="text-base flex items-center gap-2">
                                  {achievement.title}
                                  <Badge variant="outline" className={rarityColors[achievement.rarity]}>
                                    {achievement.rarity}
                                  </Badge>
                                </CardTitle>
                                <CardDescription className="mt-1">
                                  {achievement.description}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                        </Card>
                      );
                    })}
                </div>
              </div>
            )}

            {/* Persona Completion Badges - Show only a few earned ones */}
            {achievements.filter(a => a.category === 'persona' && a.earned).length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Completed Learning Paths</h2>
                  <Badge variant="secondary">
                    {achievements.filter(a => a.category === 'persona' && a.earned).length} earned
                  </Badge>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievements
                    .filter(a => a.category === 'persona' && a.earned)
                    .slice(0, 9)
                    .map(achievement => {
                      const Icon = Award;
                      return (
                        <Card key={achievement.id} className="border-primary/50">
                          <CardHeader>
                            <div className="flex items-start gap-3">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <Icon className="h-5 w-5 text-primary" />
                              </div>
                              <div className="flex-1">
                                <CardTitle className="text-sm">
                                  {achievement.title}
                                </CardTitle>
                              </div>
                            </div>
                          </CardHeader>
                        </Card>
                      );
                    })}
                </div>
                {achievements.filter(a => a.category === 'persona' && a.earned).length > 9 && (
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    And {achievements.filter(a => a.category === 'persona' && a.earned).length - 9} more completed paths...
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <Card className="bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="pt-6">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Keep Learning!</h3>
                <p className="text-muted-foreground mb-6">
                  Continue your journey to earn more badges and master audit frameworks
                </p>
                <Button asChild>
                  <Link to="/" className="gap-2">
                    Back to Frameworks
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
