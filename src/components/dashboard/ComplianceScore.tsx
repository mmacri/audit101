import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ComplianceScoreProps {
  score: number;
  change: number;
}

export function ComplianceScore({ score, change }: ComplianceScoreProps) {
  const [displayScore, setDisplayScore] = useState(0);
  const circumference = 2 * Math.PI * 120;
  const strokeDashoffset = circumference - (displayScore / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayScore(score);
    }, 300);
    return () => clearTimeout(timer);
  }, [score]);

  const getScoreColor = (value: number) => {
    if (value >= 90) return "text-compliant";
    if (value >= 70) return "text-at-risk";
    return "text-critical";
  };

  const getStrokeColor = (value: number) => {
    if (value >= 90) return "stroke-compliant";
    if (value >= 70) return "stroke-at-risk";
    return "stroke-critical";
  };

  return (
    <Card variant="glow" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      <CardContent className="p-8 flex flex-col items-center relative">
        <h3 className="text-lg font-medium text-muted-foreground mb-6">
          Compliance Readiness Score
        </h3>
        
        <div className="relative w-64 h-64">
          {/* Background glow */}
          <div 
            className={cn(
              "absolute inset-4 rounded-full blur-2xl opacity-30 transition-all duration-1000",
              score >= 90 ? "bg-compliant" : score >= 70 ? "bg-at-risk" : "bg-critical"
            )} 
          />
          
          {/* SVG Circle */}
          <svg className="w-full h-full -rotate-90" viewBox="0 0 260 260">
            {/* Background track */}
            <circle
              cx="130"
              cy="130"
              r="120"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              className="text-muted/30"
            />
            {/* Progress arc */}
            <circle
              cx="130"
              cy="130"
              r="120"
              fill="none"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (displayScore / 100) * circumference}
              className={cn(
                "transition-all duration-1000 ease-out",
                getStrokeColor(displayScore)
              )}
              style={{
                filter: "drop-shadow(0 0 8px currentColor)",
              }}
            />
          </svg>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className={cn(
                "text-6xl font-bold tabular-nums transition-colors duration-500",
                getScoreColor(displayScore)
              )}
            >
              {Math.round(displayScore)}
            </span>
            <span className="text-2xl text-muted-foreground">%</span>
            <div
              className={cn(
                "flex items-center gap-1 mt-2 text-sm font-medium",
                change >= 0 ? "text-compliant" : "text-critical"
              )}
            >
              <span>{change >= 0 ? "↑" : "↓"}</span>
              <span>{Math.abs(change)}% from last month</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 mt-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-compliant" />
            <span className="text-muted-foreground">Compliant (≥90%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-at-risk" />
            <span className="text-muted-foreground">At Risk (70-89%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-critical" />
            <span className="text-muted-foreground">Critical (&lt;70%)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
