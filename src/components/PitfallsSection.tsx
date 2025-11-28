import { UserRole } from '@/hooks/useUserPreferences';
import { rolePitfalls } from '@/data/rolePitfallsData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Search } from 'lucide-react';

interface PitfallsSectionProps {
  role: UserRole;
}

export function PitfallsSection({ role }: PitfallsSectionProps) {
  const pitfalls = rolePitfalls[role];
  if (!pitfalls) return null;

  return (
    <div className="space-y-6">
      <Card className="border-amber/30">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <AlertTriangle className="h-4 w-4 text-amber" />
            Common Pitfalls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {pitfalls.commonPitfalls.map((pitfall, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-amber shrink-0">•</span>
                {pitfall}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Search className="h-4 w-4 text-destructive" />
            Audit Red Flags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground mb-3">
            Patterns that make auditors dig deeper:
          </p>
          <ul className="space-y-2">
            {pitfalls.auditRedFlags.map((flag, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-destructive shrink-0">⚠</span>
                {flag}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
