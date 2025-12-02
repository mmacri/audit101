import { useUserPreferences } from '@/hooks/useUserPreferences';
import { Framework, Persona, personaLabels } from '@/types/frameworkTypes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UserCheck, Users, Crown, ShieldCheck, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const personaIcons: Record<Persona, React.ElementType> = {
  'practitioners': UserCheck,
  'tool-owners': ShieldCheck,
  'leaders': Crown,
  'auditors': Users,
};

const personaDescriptions: Record<Persona, string> = {
  'practitioners': 'Hands-on implementers responsible for day-to-day compliance activities',
  'tool-owners': 'System owners and SMEs managing technical controls and configurations',
  'leaders': 'Executives and managers overseeing program governance and strategy',
  'auditors': 'Internal auditors and reviewers assessing compliance and controls',
};

interface FrameworkRoleSelectorProps {
  framework: Framework;
  frameworkLabel: string;
  onRoleSelected?: (persona: Persona) => void;
}

export function FrameworkRoleSelector({ framework, frameworkLabel, onRoleSelected }: FrameworkRoleSelectorProps) {
  const { getFrameworkRole, setFrameworkRole } = useUserPreferences();
  const currentRole = getFrameworkRole(framework);

  const personas: Persona[] = ['practitioners', 'tool-owners', 'leaders', 'auditors'];

  const handleSelectRole = (persona: Persona) => {
    setFrameworkRole(framework, persona);
    if (onRoleSelected) {
      onRoleSelected(persona);
    }
  };

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          Select Your Role for {frameworkLabel}
        </CardTitle>
        <CardDescription>
          Choose the role that best matches your responsibilities in this framework
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-2 gap-3">
          {personas.map((persona) => {
            const Icon = personaIcons[persona];
            const isSelected = currentRole === persona;
            
            return (
              <button
                key={persona}
                onClick={() => handleSelectRole(persona)}
                className={cn(
                  "flex flex-col items-start gap-3 p-4 rounded-xl border-2 transition-all text-left",
                  isSelected
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50 hover:bg-muted/50"
                )}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Icon className={cn("h-5 w-5", isSelected ? "text-primary" : "text-muted-foreground")} />
                    <span className="font-medium">{personaLabels[persona]}</span>
                  </div>
                  {isSelected && (
                    <Badge variant="default" className="gap-1">
                      <Check className="h-3 w-3" />
                      Selected
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {personaDescriptions[persona]}
                </p>
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
