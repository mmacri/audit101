import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PersonaProgressCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  completionPercentage: number;
  completedSteps: number;
  totalSteps: number;
  isCompleted: boolean;
}

export function PersonaProgressCard({
  title,
  description,
  icon: Icon,
  path,
  completionPercentage,
  completedSteps,
  totalSteps,
  isCompleted,
}: PersonaProgressCardProps) {
  const navigate = useNavigate();

  return (
    <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
      {isCompleted && (
        <div className="absolute top-4 right-4">
          <Badge className="bg-success text-success-foreground gap-1">
            <CheckCircle2 className="h-3 w-3" />
            Completed
          </Badge>
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg mb-2">{title}</CardTitle>
            <CardDescription className="text-sm">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-semibold text-primary">{completionPercentage}%</span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
          <div className="text-xs text-muted-foreground">
            {completedSteps} of {totalSteps} steps completed
          </div>
        </div>

        {/* Action Button */}
        <Button 
          onClick={() => navigate(path)} 
          className="w-full gap-2"
          variant={completionPercentage === 0 ? "default" : "outline"}
        >
          {completionPercentage === 0 ? "Start Learning" : completionPercentage === 100 ? "Review Path" : "Continue Learning"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
