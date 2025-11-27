import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, FileWarning, ChevronRight, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert {
  id: string;
  type: "expiring" | "overdue" | "critical";
  title: string;
  description: string;
  daysUntil?: number;
  daysOverdue?: number;
  requirement: string;
}

const alerts: Alert[] = [
  {
    id: "1",
    type: "critical",
    title: "CIP-007 R2 Access Review Overdue",
    description: "Quarterly access review for ESP-001 is 12 days overdue",
    daysOverdue: 12,
    requirement: "CIP-007 R2",
  },
  {
    id: "2",
    type: "expiring",
    title: "Network Diagram Expiring",
    description: "CIP-005 network topology documentation expires in 7 days",
    daysUntil: 7,
    requirement: "CIP-005 R1",
  },
  {
    id: "3",
    type: "overdue",
    title: "Patch Assessment Pending",
    description: "35-day patch assessment for BES Cyber System A is overdue",
    daysOverdue: 5,
    requirement: "CIP-007 R2",
  },
  {
    id: "4",
    type: "expiring",
    title: "Security Policy Review Due",
    description: "Annual security policy CIP-003-8 review required",
    daysUntil: 14,
    requirement: "CIP-003 R1",
  },
];

const getAlertIcon = (type: Alert["type"]) => {
  switch (type) {
    case "critical":
      return <AlertTriangle className="h-4 w-4" />;
    case "overdue":
      return <Clock className="h-4 w-4" />;
    case "expiring":
      return <FileWarning className="h-4 w-4" />;
  }
};

const getAlertConfig = (type: Alert["type"]) => {
  switch (type) {
    case "critical":
      return {
        variant: "critical" as const,
        label: "Critical",
        iconBg: "bg-critical/20 text-critical",
      };
    case "overdue":
      return {
        variant: "at-risk" as const,
        label: "Overdue",
        iconBg: "bg-at-risk/20 text-at-risk",
      };
    case "expiring":
      return {
        variant: "at-risk" as const,
        label: "Expiring Soon",
        iconBg: "bg-at-risk/20 text-at-risk",
      };
  }
};

export function AlertsPanel() {
  return (
    <Card variant="glass" className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-critical/20">
              <Bell className="h-4 w-4 text-critical" />
            </div>
            <CardTitle className="text-lg font-semibold">Active Alerts</CardTitle>
            <Badge variant="critical" className="ml-2">{alerts.length}</Badge>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            View All
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert, index) => {
          const config = getAlertConfig(alert.type);
          return (
            <div
              key={alert.id}
              className={cn(
                "group p-3 rounded-lg border border-border/50 bg-card/50 hover:bg-card hover:border-border cursor-pointer transition-all duration-200",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className={cn("p-2 rounded-lg shrink-0", config.iconBg)}>
                  {getAlertIcon(alert.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant={config.variant} className="text-[10px]">
                      {config.label}
                    </Badge>
                    <span className="text-xs font-mono text-muted-foreground">
                      {alert.requirement}
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-foreground truncate">
                    {alert.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                    {alert.description}
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
