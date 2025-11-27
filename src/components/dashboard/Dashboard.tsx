import { useState } from "react";
import { ComplianceScore } from "./ComplianceScore";
import { QuickStats } from "./QuickStats";
import { CIPStandardsGrid } from "./CIPStandardsGrid";
import { ComplianceTrendChart } from "./ComplianceTrendChart";
import { AlertsPanel } from "./AlertsPanel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CriticalityFilter = "all" | "high" | "medium" | "low";

export function Dashboard() {
  const [criticalityFilter, setCriticalityFilter] = useState<CriticalityFilter>("all");

  const filters: { value: CriticalityFilter; label: string }[] = [
    { value: "all", label: "All Standards" },
    { value: "high", label: "High Impact" },
    { value: "medium", label: "Medium Impact" },
    { value: "low", label: "Low Impact" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Compliance Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Real-time NERC CIP compliance status and audit readiness
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          Last updated: <span className="text-foreground font-medium">2 minutes ago</span>
        </div>
      </div>

      {/* Quick Stats */}
      <QuickStats />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Compliance Score - Takes up 1 column */}
        <div className="lg:col-span-1">
          <ComplianceScore score={94} change={2.3} />
        </div>

        {/* Trend Chart - Takes up 2 columns */}
        <div className="lg:col-span-2">
          <ComplianceTrendChart />
        </div>
      </div>

      {/* CIP Standards Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-foreground">CIP Standards Overview</h2>
            <p className="text-sm text-muted-foreground">
              RAG status for all 13 NERC CIP reliability standards
            </p>
          </div>
          <div className="flex items-center gap-2 p-1 bg-muted/50 rounded-lg">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={criticalityFilter === filter.value ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setCriticalityFilter(filter.value)}
                className={cn(
                  "text-sm",
                  criticalityFilter === filter.value && "bg-secondary shadow-sm"
                )}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <CIPStandardsGrid filter={criticalityFilter} />
      </div>

      {/* Alerts Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AlertsPanel />
        <div className="space-y-4">
          {/* Placeholder for additional panels */}
          <div className="h-full rounded-xl border border-dashed border-border/50 bg-muted/20 flex items-center justify-center p-8">
            <div className="text-center">
              <p className="text-muted-foreground text-sm">
                Additional panels coming soon
              </p>
              <p className="text-muted-foreground/60 text-xs mt-1">
                Evidence expiration report, upcoming tasks, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
