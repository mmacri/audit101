import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Home } from "lucide-react";

interface AcademyLayoutProps {
  children: ReactNode;
  academyName: string;
  breadcrumbs?: Array<{ label: string; path?: string }>;
  showBackButton?: boolean;
}

export function AcademyLayout({ 
  children, 
  academyName, 
  breadcrumbs,
  showBackButton = false 
}: AcademyLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs / Navigation */}
      {(breadcrumbs || showBackButton) && (
        <div className="border-b bg-muted/30">
          <div className="container py-3">
            <div className="flex items-center gap-2 text-sm">
              {showBackButton && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(-1)}
                  className="gap-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Button>
              )}
              {breadcrumbs && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => navigate('/')}
                    className="hover:text-primary transition-colors"
                  >
                    <Home className="h-4 w-4" />
                  </button>
                  {breadcrumbs.map((crumb, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-muted-foreground">/</span>
                      {crumb.path ? (
                        <button
                          onClick={() => navigate(crumb.path!)}
                          className="hover:text-primary transition-colors"
                        >
                          {crumb.label}
                        </button>
                      ) : (
                        <span className="text-muted-foreground">{crumb.label}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}
