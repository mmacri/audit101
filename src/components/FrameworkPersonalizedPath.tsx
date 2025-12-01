import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Sparkles, Copy, User, CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Framework, Persona, frameworkLabels, personaLabels } from '@/types/frameworkTypes';
import { useFrameworkProgress } from '@/hooks/useFrameworkProgress';

interface FrameworkPersonalizedPathProps {
  framework: Framework;
  personas: Array<{ id: string; title: string; description: string }>;
}

export function FrameworkPersonalizedPath({ framework, personas }: FrameworkPersonalizedPathProps) {
  const [selectedPersona, setSelectedPersona] = useState<string>('');
  const [timeHorizon, setTimeHorizon] = useState<string>('');
  const [generatedPlan, setGeneratedPlan] = useState<string>('');
  
  // Get progress for the selected persona
  const progress = useFrameworkProgress(
    framework, 
    selectedPersona as any // Cast to match Persona type
  );
  
  const completedSteps = progress.getCurrentProgress().stepsCompleted;
  const totalSteps = 7; // All frameworks have 7 steps
  const completionPercentage = Math.round((completedSteps.length / totalSteps) * 100);

  const generatePlan = () => {
    if (!selectedPersona || !timeHorizon) {
      toast({
        title: 'Missing selections',
        description: 'Please select both a role and time horizon.',
        variant: 'destructive',
      });
      return;
    }

    const days = parseInt(timeHorizon);
    const persona = personas.find(p => p.id === selectedPersona);
    const frameworkName = frameworkLabels[framework];
    const today = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    // Get step completion status
    const stepStatus = (stepNum: number) => completedSteps.includes(stepNum) ? '✓' : '○';
    
    // Build the plan text with progress indicators
    const plan = `
═══════════════════════════════════════════════════════════════
${frameworkName.toUpperCase()} READINESS TRAINING PLAN
═══════════════════════════════════════════════════════════════

Generated: ${today}
Role: ${persona?.title}
Time Horizon: ${days} Days
Framework: ${frameworkName}
Progress: ${completedSteps.length}/${totalSteps} steps completed (${completionPercentage}%)

───────────────────────────────────────────────────────────────
YOUR LEARNING PATH
───────────────────────────────────────────────────────────────

As a ${persona?.title}, your ${days}-day training plan focuses on:

${persona?.description}

───────────────────────────────────────────────────────────────
7-STEP LEARNING JOURNEY
───────────────────────────────────────────────────────────────

Complete these steps in order for comprehensive ${frameworkName} readiness:

${stepStatus(1)} Step 1: Understand Framework Fundamentals ${completedSteps.includes(1) ? '[COMPLETED]' : ''}
  → Learn the structure and requirements of ${frameworkName}
  → Identify how it applies to your organization
  → Review official documentation and guidance

${stepStatus(2)} Step 2: Define Your Scope ${completedSteps.includes(2) ? '[COMPLETED]' : ''}
  → Identify systems, processes, and data in scope
  → Document boundaries and dependencies
  → Establish roles and responsibilities

${stepStatus(3)} Step 3: Assess Current State ${completedSteps.includes(3) ? '[COMPLETED]' : ''}
  → Evaluate existing controls and processes
  → Identify gaps against ${frameworkName} requirements
  → Document evidence and artifacts

${stepStatus(4)} Step 4: Build Implementation Plan ${completedSteps.includes(4) ? '[COMPLETED]' : ''}
  → Prioritize remediation activities
  → Assign ownership and timelines
  → Develop documentation templates

${stepStatus(5)} Step 5: Implement Controls ${completedSteps.includes(5) ? '[COMPLETED]' : ''}
  → Deploy technical and administrative controls
  → Train staff on procedures and requirements
  → Test and validate effectiveness

${stepStatus(6)} Step 6: Organize Evidence ${completedSteps.includes(6) ? '[COMPLETED]' : ''}
  → Collect and organize compliance evidence
  → Create control documentation
  → Prepare for assessment or audit

${stepStatus(7)} Step 7: Prepare for Validation ${completedSteps.includes(7) ? '[COMPLETED]' : ''}
  → Conduct internal reviews
  → Address findings and gaps
  → Practice audit response procedures

───────────────────────────────────────────────────────────────
${days}-DAY MILESTONES
───────────────────────────────────────────────────────────────

${days >= 30 ? `Week 1-2: Complete Steps 1-2 (Framework fundamentals and scope)
Week 3-4: Complete Step 3 (Current state assessment)` : ''}
${days >= 60 ? `
Week 5-6: Complete Step 4 (Implementation planning)
Week 7-8: Begin Step 5 (Control implementation)` : ''}
${days >= 90 ? `
Week 9-10: Complete Step 5 and begin Step 6 (Evidence organization)
Week 11-12: Complete Steps 6-7 (Final validation and audit prep)` : ''}

───────────────────────────────────────────────────────────────
NEXT ACTIONS THIS WEEK
───────────────────────────────────────────────────────────────

1. ${completedSteps.includes(1) ? 'Continue to Step 2' : 'Begin Step 1: Review ' + frameworkName + ' framework overview'}
2. Identify key stakeholders in your organization
3. Schedule a kickoff meeting with relevant teams
4. Review available resources and documentation templates

───────────────────────────────────────────────────────────────
SUCCESS TIPS
───────────────────────────────────────────────────────────────

• Focus on progress over perfection
• Complete one step before moving to the next
• Engage stakeholders early and often
• Document everything as you go
• Use practice tools and templates provided
• Review your progress weekly

───────────────────────────────────────────────────────────────

${completedSteps.length === totalSteps ? 
  '🎉 CONGRATULATIONS! You have completed all 7 steps!\n\nYou are now ready for audit validation. Review your evidence\nand schedule your assessment.' :
  'Start your journey today by selecting your role path and\nfollowing the 7-step structured learning path.\n\nYour current progress: ' + completedSteps.length + '/' + totalSteps + ' steps completed'
}

Generated by Audit101 ${frameworkName} Academy
═══════════════════════════════════════════════════════════════
`.trim();

    setGeneratedPlan(plan);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedPlan);
      toast({
        title: 'Copied!',
        description: 'Training plan copied to clipboard.',
      });
    } catch (err) {
      toast({
        title: 'Copy failed',
        description: 'Please select and copy the text manually.',
        variant: 'destructive',
      });
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container max-w-4xl">
        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl">Get Your Personalized Training Path</CardTitle>
                <CardDescription className="text-base mt-1">
                  Tailored to your {frameworkLabels[framework]} responsibilities
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  Select Your Role
                </label>
                <Select value={selectedPersona} onValueChange={setSelectedPersona}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your role" />
                  </SelectTrigger>
                  <SelectContent>
                    {personas.map((persona) => (
                      <SelectItem key={persona.id} value={persona.id}>
                        {persona.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Time Horizon
                </label>
                <Select value={timeHorizon} onValueChange={setTimeHorizon}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 Days - Quick Start</SelectItem>
                    <SelectItem value="60">60 Days - Foundation</SelectItem>
                    <SelectItem value="90">90 Days - Comprehensive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {selectedPersona && (
              <div className="space-y-3 p-4 bg-muted/50 rounded-lg border border-border/50">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">Your Current Progress</span>
                  <span className="text-muted-foreground">
                    {completedSteps.length} of {totalSteps} steps completed
                  </span>
                </div>
                <Progress value={completionPercentage} className="h-2" />
                
                <div className="grid grid-cols-7 gap-2 mt-3">
                  {[1, 2, 3, 4, 5, 6, 7].map((step) => (
                    <div
                      key={step}
                      className="flex flex-col items-center gap-1.5"
                    >
                      {completedSteps.includes(step) ? (
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground/40" />
                      )}
                      <span className="text-xs font-medium text-muted-foreground">
                        Step {step}
                      </span>
                    </div>
                  ))}
                </div>
                
                {completedSteps.length < totalSteps && (
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50 text-sm text-primary">
                    <ArrowRight className="h-4 w-4" />
                    <span className="font-medium">Next: Complete Step {completedSteps.length + 1}</span>
                  </div>
                )}
                
                {completedSteps.length === totalSteps && (
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50 text-sm text-green-600">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="font-medium">All steps completed! 🎉</span>
                  </div>
                )}
              </div>
            )}

            <Button onClick={generatePlan} className="w-full" size="lg">
              <Sparkles className="mr-2 h-5 w-5" />
              {generatedPlan ? 'Regenerate Plan' : 'Generate My Personalized Plan'}
            </Button>

            {generatedPlan && (
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-foreground">Your Personalized Training Plan</span>
                  <Button variant="outline" size="sm" onClick={copyToClipboard}>
                    <Copy className="mr-2 h-3 w-3" />
                    Copy to Clipboard
                  </Button>
                </div>
                <pre className="bg-background rounded-lg p-4 text-xs font-mono overflow-x-auto whitespace-pre-wrap max-h-96 overflow-y-auto border border-border">
                  {generatedPlan}
                </pre>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
