import { useUserPreferences, roleLabels, experienceLabels } from '@/hooks/useUserPreferences';
import { User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface UserRoleBadgeProps {
  onResetPreferences?: () => void;
}

export function UserRoleBadge({ onResetPreferences }: UserRoleBadgeProps) {
  const { preferences, resetPreferences, isLoaded } = useUserPreferences();

  if (!isLoaded || !preferences.onboardingComplete || !preferences.role) {
    return null;
  }

  const handleReset = () => {
    resetPreferences();
    onResetPreferences?.();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors">
          <User className="h-3 w-3" />
          <span className="hidden sm:inline">Viewing as:</span>
          <span className="font-semibold">{roleLabels[preferences.role]}</span>
          {preferences.experience && (
            <span className="hidden md:inline text-primary/70">
              ({experienceLabels[preferences.experience]})
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="end">
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-foreground">Your Profile</p>
            <p className="text-xs text-muted-foreground mt-1">
              Role: {roleLabels[preferences.role]}
            </p>
            {preferences.experience && (
              <p className="text-xs text-muted-foreground">
                Experience: {experienceLabels[preferences.experience]}
              </p>
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            Content is personalized based on your role. Recommended modules are highlighted throughout the site.
          </p>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full" 
            onClick={handleReset}
          >
            <Settings className="mr-2 h-3 w-3" />
            Change Role
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
