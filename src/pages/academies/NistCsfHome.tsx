import { useNavigate } from "react-router-dom";
import { AcademyHero } from "@/components/shared/AcademyHero";
import { PersonaGrid } from "@/components/shared/PersonaGrid";
import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { AcademyNav } from "@/components/shared/AcademyNav";
import { PersonaProgressCard } from "@/components/shared/PersonaProgressCard";
import { nistCsfPersonas } from "@/data/nistCsf/personas";
import { nistCsfPractitionersSteps } from "@/data/nistCsf/practitionersSteps";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Network, BarChart3, Shield } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { useFrameworkProgress } from "@/hooks/useFrameworkProgress";
import { FrameworkPersonalizedPath } from "@/components/FrameworkPersonalizedPath";

export default function NistCsfHome() {
  const navigate = useNavigate();
  
  const practitionerProgress = useFrameworkProgress("nist-csf", "practitioners");
  const toolOwnerProgress = useFrameworkProgress("nist-csf", "tool-owners");
  const leaderProgress = useFrameworkProgress("nist-csf", "leaders");
  const auditorProgress = useFrameworkProgress("nist-csf", "auditors");
  
  const totalSteps = nistCsfPractitionersSteps.length;

  const handleSelectPersona = (personaId: string) => {
    const persona = nistCsfPersonas.find(p => p.id === personaId);
    if (persona) {
      navigate(persona.path);
    }
  };

  return (
    <AcademyLayout
      academyName="NIST CSF Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "NIST CSF" }
      ]}
    >
      <AcademyNav academyPath="/nist-csf" academyName="NIST CSF" />
      
      <AcademyHero
        title="NIST Cybersecurity Framework Readiness Academy"
        subtitle="Use NIST CSF to align your cybersecurity activities with business risk and prepare for assessments and reviews."
        primaryCta="View my progress"
        primaryAction={() => navigate('/progress')}
        secondaryCta="View Framework Guide"
        secondaryAction={() => navigate('/nist-csf/framework')}
      />

      {/* Why It Matters */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <PageIntro>
            The NIST Cybersecurity Framework (CSF) 2.0 provides a flexible, risk-based approach to managing cybersecurity. It's organized around 6 core functions—Govern, Identify, Protect, Detect, Respond, Recover—that help organizations of all sizes improve their security posture.
          </PageIntro>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <Network className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Risk-Based Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Build CSF Profiles that align cybersecurity activities with your business priorities, risk tolerance, and resources.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>6 Core Functions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Organize your program around Govern, Identify, Protect, Detect, Respond, and Recover with clear outcomes for each.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Maturity & Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Use CSF Tiers to measure risk management maturity and communicate security posture to executives and boards.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Learning Progress</h2>
            <p className="text-muted-foreground text-lg">
              Track your progress across all persona learning paths
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {nistCsfPersonas.map((persona, index) => {
              const progress = [practitionerProgress, toolOwnerProgress, leaderProgress, auditorProgress][index];
              return (
                <PersonaProgressCard
                  key={persona.id}
                  title={persona.title}
                  description={persona.description}
                  icon={persona.icon}
                  path={persona.path}
                  completionPercentage={progress.getCompletionPercentage(totalSteps)}
                  completedSteps={progress.getCurrentProgress().stepsCompleted.length}
                  totalSteps={totalSteps}
                  isCompleted={progress.isPersonaComplete()}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Personalized Training Path */}
      <FrameworkPersonalizedPath 
        framework="nist-csf" 
        personas={nistCsfPersonas}
      />

      {/* Persona Selection */}
      <div id="persona-selection">
        <PersonaGrid
          personas={nistCsfPersonas}
          onSelectPersona={handleSelectPersona}
        />
      </div>

      {/* What You'll Learn */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            What You'll Learn
          </h2>

          <div className="space-y-4">
            {[
              "How to build current and target CSF Profiles aligned to business priorities",
              "How to implement the Govern function for organizational context and oversight",
              "How to achieve Identify function outcomes for asset and risk management",
              "How to implement Protect function controls for access, data, and infrastructure",
              "How to deploy Detect function capabilities for continuous monitoring",
              "How to establish Respond and Recover capabilities for incidents and disruptions",
              "How to measure and advance your CSF Tier maturity"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AcademyLayout>
  );
}
