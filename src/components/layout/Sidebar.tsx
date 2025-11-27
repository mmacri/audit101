import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  CheckSquare,
  BarChart3,
  Server,
  Settings,
  ChevronLeft,
  ChevronRight,
  Shield,
  AlertTriangle,
  Users,
  BookOpen,
} from "lucide-react";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
  badge?: number;
  badgeVariant?: "default" | "critical" | "at-risk";
}

const mainNavItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: FileText, label: "Evidence Repository", href: "/evidence" },
  { icon: CheckSquare, label: "Tasks", href: "/tasks", badge: 5, badgeVariant: "at-risk" },
  { icon: AlertTriangle, label: "Corrective Actions", href: "/caps", badge: 2, badgeVariant: "critical" },
  { icon: BarChart3, label: "Reports", href: "/reports" },
  { icon: Server, label: "Critical Assets", href: "/assets" },
  { icon: Users, label: "Access Reviews", href: "/access" },
];

const secondaryNavItems: NavItem[] = [
  { icon: BookOpen, label: "Knowledge Base", href: "/knowledge" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col",
        collapsed ? "w-[72px]" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-sidebar-foreground">NERC CIP</span>
              <span className="text-xs text-muted-foreground">Audit Ready</span>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setCollapsed(!collapsed)}
          className="text-muted-foreground hover:text-sidebar-foreground"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {mainNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.href;

          return (
            <button
              key={item.href}
              onClick={() => setActiveItem(item.href)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
                isActive
                  ? "bg-sidebar-accent text-sidebar-foreground"
                  : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
              )}
              <Icon className={cn("h-5 w-5 shrink-0", isActive && "text-primary")} />
              {!collapsed && (
                <>
                  <span className="text-sm font-medium truncate">{item.label}</span>
                  {item.badge && (
                    <span
                      className={cn(
                        "ml-auto text-xs px-2 py-0.5 rounded-full",
                        item.badgeVariant === "critical"
                          ? "bg-critical/20 text-critical"
                          : item.badgeVariant === "at-risk"
                          ? "bg-at-risk/20 text-at-risk"
                          : "bg-primary/20 text-primary"
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                </>
              )}
              {collapsed && item.badge && (
                <span
                  className={cn(
                    "absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-[10px] rounded-full",
                    item.badgeVariant === "critical"
                      ? "bg-critical text-critical-foreground"
                      : item.badgeVariant === "at-risk"
                      ? "bg-at-risk text-at-risk-foreground"
                      : "bg-primary text-primary-foreground"
                  )}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Secondary Navigation */}
      <div className="px-3 py-4 border-t border-sidebar-border space-y-1">
        {secondaryNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.href;

          return (
            <button
              key={item.href}
              onClick={() => setActiveItem(item.href)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-sidebar-accent text-sidebar-foreground"
                  : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          );
        })}
      </div>

      {/* User Profile */}
      <div className="p-3 border-t border-sidebar-border">
        <div
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg bg-sidebar-accent/50",
            collapsed && "justify-center px-2"
          )}
        >
          <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-sm font-medium text-primary">
            CM
          </div>
          {!collapsed && (
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-medium text-sidebar-foreground truncate">
                Jane Smith
              </span>
              <span className="text-xs text-muted-foreground truncate">
                Compliance Manager
              </span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
