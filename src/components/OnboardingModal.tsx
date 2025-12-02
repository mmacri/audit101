import { Framework, Persona, frameworkLabels } from '@/types/frameworkTypes';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';
import { FrameworkRoleSelector } from '@/components/FrameworkRoleSelector';

interface OnboardingModalProps {
  framework: Framework;
  open: boolean;
  onComplete: (selectedRole?: Persona) => void;
}

export function OnboardingModal({ framework, open, onComplete }: OnboardingModalProps) {
  const frameworkLabel = frameworkLabels[framework];

  const handleRoleSelected = (persona: Persona) => {
    onComplete(persona);
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-3xl" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <GraduationCap className="h-6 w-6 text-primary" />
            Welcome to {frameworkLabel} Readiness Academy
          </DialogTitle>
          <DialogDescription>
            Let's personalize your learning experience. Select your role to see a tailored learning path.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <FrameworkRoleSelector 
            framework={framework} 
            frameworkLabel={frameworkLabel}
            onRoleSelected={handleRoleSelected}
          />
        </div>

        <div className="flex justify-end pt-4 border-t">
          <Button variant="ghost" onClick={handleSkip}>
            I'll choose later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
