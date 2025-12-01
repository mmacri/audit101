import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  FileText, 
  Video, 
  CheckSquare, 
  Code, 
  Layers,
  HelpCircle
} from 'lucide-react';

interface LearningPathVisualsProps {
  stepNumber: number;
  title: string;
  contentTypes: Array<'reading' | 'video' | 'exercise' | 'quiz' | 'documentation' | 'interactive'>;
}

export function LearningPathVisuals({ stepNumber, title, contentTypes }: LearningPathVisualsProps) {
  const contentIcons = {
    'reading': { icon: BookOpen, label: 'Reading', color: 'text-blue-500' },
    'video': { icon: Video, label: 'Video', color: 'text-purple-500' },
    'exercise': { icon: CheckSquare, label: 'Exercise', color: 'text-green-500' },
    'quiz': { icon: HelpCircle, label: 'Quiz', color: 'text-orange-500' },
    'documentation': { icon: FileText, label: 'Documentation', color: 'text-gray-500' },
    'interactive': { icon: Code, label: 'Interactive', color: 'text-pink-500' },
  };

  return (
    <Card className="border-l-4 border-l-primary">
      <CardContent className="pt-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <span className="text-primary font-bold">{stepNumber}</span>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-3">{title}</h4>
            <div className="flex flex-wrap gap-2">
              {contentTypes.map((type) => {
                const { icon: Icon, label, color } = contentIcons[type];
                return (
                  <Badge key={type} variant="outline" className="gap-1.5">
                    <Icon className={`h-3 w-3 ${color}`} />
                    <span className="text-xs">{label}</span>
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Component to show overall learning journey
export function LearningJourneyMap({ steps }: { steps: Array<{ title: string; description: string }> }) {
  return (
    <div className="relative">
      {steps.map((step, index) => (
        <div key={index} className="relative pl-8 pb-8 last:pb-0">
          {index < steps.length - 1 && (
            <div className="absolute left-[15px] top-6 bottom-0 w-0.5 bg-border" />
          )}
          <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
            <span className="text-sm font-semibold text-primary">{index + 1}</span>
          </div>
          <div className="ml-4">
            <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
