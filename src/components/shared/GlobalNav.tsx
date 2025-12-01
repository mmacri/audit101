import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, TrendingUp, BookOpen, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export function GlobalNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      label: "Home",
      path: "/",
      icon: Home,
    },
    {
      label: "Academies",
      path: "#academies",
      icon: BookOpen,
    },
    {
      label: "Progress",
      path: "/progress",
      icon: TrendingUp,
    },
    {
      label: "Achievements",
      path: "/achievements",
      icon: Award,
    },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('#')) return false;
    return location.pathname === path;
  };

  const handleClick = (path: string) => {
    if (path.startsWith('#')) {
      const element = document.getElementById(path.substring(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  return (
    <div className="border-b bg-muted/30">
      <div className="container">
        <div className="flex items-center gap-1 py-2 overflow-x-auto">
          <span className="text-sm font-medium text-muted-foreground mr-4 whitespace-nowrap">
            Quick Nav:
          </span>
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              size="sm"
              onClick={() => handleClick(item.path)}
              className={cn(
                "gap-2 whitespace-nowrap",
                isActive(item.path) && "bg-primary/10 text-primary font-medium"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
