import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export type ComplianceStatus = "compliant" | "at-risk" | "critical";

interface CIPStandardCardProps {
  id: string;
  name: string;
  status: ComplianceStatus;
  score: number;
  evidenceCount: number;
  pendingTasks: number;
  expiringEvidence: number;
}

export function CIPStandardCard({
  id,
  name,
  status,
  score,
  evidenceCount,
  pendingTasks,
  expiringEvidence,
}: CIPStandardCardProps) {
  const statusConfig = {
    compliant: {
      badge: "compliant" as const,
      label: "Compliant",
      glow: "glow-compliant",
      border: "border-compliant/30",
      bg: "bg-compliant/5",
    },
    "at-risk": {
      badge: "at-risk" as const,
      label: "At Risk",
      glow: "glow-at-risk",
      border: "border-at-risk/30",
      bg: "bg-at-risk/5",
    },
    critical: {
      badge: "critical" as const,
      label: "Critical",
      glow: "glow-critical",
      border: "border-critical/30",
      bg: "bg-critical/5",
    },
  };

  const config = statusConfig[status];

  return (
    <Card
      className={cn(
        "group relative cursor-pointer transition-all duration-300 hover:scale-[1.02]",
        config.border,
        config.bg,
        status === "critical" && "animate-pulse-glow"
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-xs font-mono text-muted-foreground">{id}</span>
            <h4 className="text-sm font-semibold text-foreground line-clamp-1">{name}</h4>
          </div>
          <Badge variant={config.badge}>{config.label}</Badge>
        </div>

        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <div className="text-3xl font-bold tabular-nums text-foreground">{score}%</div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{evidenceCount} evidence</span>
              {pendingTasks > 0 && (
                <span className="text-at-risk">{pendingTasks} pending</span>
              )}
              {expiringEvidence > 0 && (
                <span className="text-critical">{expiringEvidence} expiring</span>
              )}
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
        </div>
      </CardContent>
    </Card>
  );
}
