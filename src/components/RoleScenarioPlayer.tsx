import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserRole } from '@/hooks/useUserPreferences';
import { useScenarioProgress } from '@/hooks/useScenarioProgress';
import { roleScenarios, ScenarioNode } from '@/data/roleScenariosData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, CheckCircle2, RotateCcw, Play, ArrowRight } from 'lucide-react';

interface RoleScenarioPlayerProps {
  role: UserRole;
}

export function RoleScenarioPlayer({ role }: RoleScenarioPlayerProps) {
  const scenario = roleScenarios[role];
  const { isScenarioComplete, completeScenario, resetScenario, getScenarioProgress } = useScenarioProgress();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [pathTaken, setPathTaken] = useState<string[]>([]);

  if (!scenario) return null;

  const currentNode = scenario.nodes.find(n => n.id === currentNodeId);
  const completed = isScenarioComplete(role);
  const previousProgress = getScenarioProgress(role);

  const handleChoice = (nextNodeId: string) => {
    const newPath = [...pathTaken, currentNodeId];
    setPathTaken(newPath);
    setCurrentNodeId(nextNodeId);

    const nextNode = scenario.nodes.find(n => n.id === nextNodeId);
    if (nextNode?.isEnding) {
      completeScenario(role, [...newPath, nextNodeId], nextNode.outcomeType || 'neutral');
    }
  };

  const handleRestart = () => {
    resetScenario(role);
    setCurrentNodeId('start');
    setPathTaken([]);
    setIsPlaying(true);
  };

  const handleStart = () => {
    setIsPlaying(true);
    setCurrentNodeId('start');
    setPathTaken([]);
  };

  // Show completion card if completed and not replaying
  if (completed && !isPlaying) {
    return (
      <Card className="border-success/30 bg-success/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-success">
            <CheckCircle2 className="h-5 w-5" />
            Scenario Completed
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            You completed "{scenario.name}" with a{' '}
            <Badge variant={previousProgress?.outcomeType === 'good' ? 'default' : previousProgress?.outcomeType === 'poor' ? 'destructive' : 'secondary'}>
              {previousProgress?.outcomeType || 'neutral'} outcome
            </Badge>
          </p>
          <Button variant="outline" onClick={handleRestart}>
            <RotateCcw className="h-4 w-4 mr-2" /> Play Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Show intro card if not started
  if (!isPlaying) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-accent" />
            Interactive Scenario
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3 className="font-semibold text-navy">{scenario.name}</h3>
          <p className="text-sm text-muted-foreground">{scenario.intro}</p>
          <div className="flex flex-wrap gap-2">
            {scenario.relevantModules.map(m => (
              <Badge key={m} variant="outline">Module {m}</Badge>
            ))}
          </div>
          <Button onClick={handleStart} className="w-full">
            <Play className="h-4 w-4 mr-2" /> Start Scenario
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Show current node
  if (!currentNode) return null;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{currentNode.title}</CardTitle>
          <Badge variant="outline">{pathTaken.length + 1} / ~{scenario.nodes.filter(n => !n.isEnding).length}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {currentNode.isEnding ? (
          <>
            <div className={`p-4 rounded-lg ${
              currentNode.outcomeType === 'good' ? 'bg-success/10 border border-success/30' :
              currentNode.outcomeType === 'poor' ? 'bg-destructive/10 border border-destructive/30' :
              'bg-muted'
            }`}>
              <p className="text-sm whitespace-pre-line">{currentNode.endingSummary}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">Related modules:</span>
              {scenario.relevantModules.map(m => (
                <Link key={m} to={`/modules#module-${m}`}>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Module {m}
                  </Badge>
                </Link>
              ))}
            </div>
            <Button variant="outline" onClick={handleRestart} className="w-full">
              <RotateCcw className="h-4 w-4 mr-2" /> Try Different Choices
            </Button>
          </>
        ) : (
          <>
            <p className="text-sm text-muted-foreground">{currentNode.description}</p>
            <div className="space-y-2">
              {currentNode.choices.map(choice => (
                <Button
                  key={choice.id}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3 px-4"
                  onClick={() => handleChoice(choice.nextNodeId)}
                >
                  <ArrowRight className="h-4 w-4 mr-2 shrink-0" />
                  <span>{choice.label}</span>
                </Button>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
