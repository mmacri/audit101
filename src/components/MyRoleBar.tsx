import { Link, useLocation } from 'react-router-dom';
import { useUserPreferences, roleLabels } from '@/hooks/useUserPreferences';
import { Button } from '@/components/ui/button';
import { User, ArrowRight, Settings, Sparkles } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export function MyRoleBar() {
  const { preferences, isLoaded, resetPreferences } = useUserPreferences();
  const location = useLocation();

  if (!isLoaded) return null;

  // Show prompt to select role if none is chosen
  if (!preferences.onboardingComplete || !preferences.role) {
    // Don't show the prompt on the learning path page (they're already there)
    if (location.pathname === '/learning-path') return null;
    
    return (
      <div className="bg-accent/5 border-b border-accent/10">
        <div className="container py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">
                Get a personalized training path tailored to your NERC CIP responsibilities.
              </span>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link to="/learning-path">
                Select Your Role
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary/5 border-b border-primary/10">
      <div className="container py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm">
              <User className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Current role path:</span>
              <span className="font-semibold text-primary">{roleLabels[preferences.role]}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="default" size="sm" asChild>
              <Link to={`/role-training/${preferences.role}`}>
                View my training plan
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Settings className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-48">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={resetPreferences}
                >
                  Change Role
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
