import { Framework, Persona, personaLabels } from '@/types/frameworkTypes';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User } from 'lucide-react';
import { useUserPreferences } from '@/hooks/useUserPreferences';

interface RoleSelectorProps {
  framework: Framework;
  className?: string;
  showLabel?: boolean;
}

const personas: Persona[] = ['practitioners', 'tool-owners', 'leaders', 'auditors'];

export function RoleSelector({ framework, className, showLabel = true }: RoleSelectorProps) {
  const { getFrameworkRole, setFrameworkRole } = useUserPreferences();
  const currentRole = getFrameworkRole(framework);

  const handleRoleChange = (value: string) => {
    setFrameworkRole(framework, value as Persona);
  };

  return (
    <div className={className}>
      {showLabel && (
        <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
          <User className="h-4 w-4 text-primary" />
          Select Your Role
        </label>
      )}
      <Select value={currentRole || ''} onValueChange={handleRoleChange}>
        <SelectTrigger className="w-full sm:w-[280px]">
          <SelectValue placeholder="Choose your role path" />
        </SelectTrigger>
        <SelectContent>
          {personas.map((persona) => (
            <SelectItem key={persona} value={persona}>
              {personaLabels[persona]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
