import { useUserPreferences } from '@/hooks/useUserPreferences';
import { Framework, Persona, frameworkLabels, personaLabels } from '@/types/frameworkTypes';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UserCheck, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MyRoleBarProps {
  framework: Framework;
  showChangeButton?: boolean;
}

export function MyRoleBar({ framework, showChangeButton = true }: MyRoleBarProps) {
  const { getFrameworkRole } = useUserPreferences();
  const currentRole = getFrameworkRole(framework);

  if (!currentRole) {
    return null;
  }

  return (
    <div className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <UserCheck className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-medium">
            Your role for {frameworkLabels[framework]}
          </p>
          <Badge variant="default" className="mt-1">
            {personaLabels[currentRole]}
          </Badge>
        </div>
      </div>
      {showChangeButton && (
        <Button variant="ghost" size="sm" asChild>
          <Link to={`/${framework}`} className="gap-2">
            <Settings className="h-4 w-4" />
            Change Role
          </Link>
        </Button>
      )}
    </div>
  );
}
