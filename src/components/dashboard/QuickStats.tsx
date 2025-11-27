import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FileCheck, Clock, AlertTriangle, Server, TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string | number;
  subtext?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  iconColor?: string;
  delay?: number;
}

function StatCard({ icon: Icon, label, value, subtext, trend, iconColor, delay = 0 }: StatCardProps) {
  return (
    <Card
      variant="glass"
      className="animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className={cn("p-2 rounded-lg", iconColor || "bg-primary/20")}>
            <Icon className={cn("h-5 w-5", iconColor ? iconColor.replace("bg-", "text-").replace("/20", "") : "text-primary")} />
          </div>
          {trend && (
            <div
              className={cn(
                "flex items-center gap-1 text-xs font-medium",
                trend.isPositive ? "text-compliant" : "text-critical"
              )}
            >
              {trend.isPositive ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              {Math.abs(trend.value)}%
            </div>
          )}
        </div>
        <div className="mt-3">
          <div className="text-2xl font-bold tabular-nums text-foreground">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
          {subtext && (
            <div className="text-xs text-muted-foreground/70 mt-1">{subtext}</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function QuickStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        icon={FileCheck}
        label="Evidence Documents"
        value="1,847"
        subtext="98% indexed & tagged"
        trend={{ value: 12, isPositive: true }}
        iconColor="bg-compliant/20"
        delay={0}
      />
      <StatCard
        icon={Clock}
        label="Pending Tasks"
        value="23"
        subtext="5 due this week"
        trend={{ value: 8, isPositive: false }}
        iconColor="bg-at-risk/20"
        delay={100}
      />
      <StatCard
        icon={AlertTriangle}
        label="Open CAPs"
        value="4"
        subtext="2 high priority"
        trend={{ value: 2, isPositive: true }}
        iconColor="bg-critical/20"
        delay={200}
      />
      <StatCard
        icon={Server}
        label="Critical Assets"
        value="156"
        subtext="32 High / 89 Med / 35 Low"
        iconColor="bg-primary/20"
        delay={300}
      />
    </div>
  );
}
