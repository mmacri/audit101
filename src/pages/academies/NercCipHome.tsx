import { useNavigate } from "react-router-dom";
import { AcademyHero } from "@/components/shared/AcademyHero";
import { PersonaGrid } from "@/components/shared/PersonaGrid";
import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { AcademyNav } from "@/components/shared/AcademyNav";
import { PersonaProgressCard } from "@/components/shared/PersonaProgressCard";
import { personas } from "@/data/nercCip/personas";
import { practitionersSteps } from "@/data/nercCip/practitionersSteps";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, AlertTriangle, FileCheck } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { useFrameworkProgress } from "@/hooks/useFrameworkProgress";

export default function NercCipHome() {
  const navigate = useNavigate();
  
  // Get progress for all personas
  const practitionerProgress = useFrameworkProgress("nerc-cip", "practitioners");
  const toolOwnerProgress = useFrameworkProgress("nerc-cip", "tool-owners");
  const leaderProgress = useFrameworkProgress("nerc-cip", "leaders");
  const auditorProgress = useFrameworkProgress("nerc-cip", "auditors");
  
  const totalSteps = practitionersSteps.length;

  const handleSelectPersona = (personaId: string) => {
    const persona = personas.find(p => p.id === personaId);
    if (persona) {
      navigate(persona.path);
    }
  };

  const standards = [
    {
      icon: Shield,
      title: "13 CIP Standards",
      description: "Comprehensive cyber security requirements",
    },
    {
      icon: Zap,
      title: "BES Reliability",
      description: "Protect critical bulk electric system operations",
    },
    {
      icon: AlertTriangle,
      title: "Compliance Enforcement",
      description: "Mandatory standards with significant penalties",
    },
    {
      icon: FileCheck,
      title: "Regional Audits",
      description: "Periodic audits by NERC Regional Entities",
    },
  ];

  return (
    <AcademyLayout
      academyName="NERC CIP Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "NERC CIP" }
      ]}
    >
      <AcademyNav academyPath="/nerc-cip" academyName="NERC CIP" />
      
      <AcademyHero
        title="NERC CIP Readiness Academy"
        subtitle="Master Critical Infrastructure Protection standards and prepare for NERC compliance audits with role-based training paths."
        primaryCta="View my progress"
        primaryAction={() => navigate('/progress')}
        secondaryCta="View resources"
        secondaryAction={() => navigate('/nerc-cip/resources')}
      />

      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <PageIntro>
            NERC CIP standards establish mandatory cyber security requirements for the North American
            bulk electric system. Master asset categorization, access controls, incident response,
            and all 13 CIP standards through role-specific training paths.
          </PageIntro>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {standards.map((standard, index) => (
              <Card key={index} className="border-blue-500/20 hover:border-blue-500/40 transition-colors">
                <CardContent className="pt-6">
                  <standard.icon className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{standard.title}</h3>
                  <p className="text-muted-foreground">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Overview Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Learning Progress</h2>
            <p className="text-muted-foreground text-lg">
              Track your progress across all persona learning paths
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <PersonaProgressCard
              title="Practitioners & Implementers"
              description="IT and OT staff implementing CIP controls"
              icon={personas[0].icon}
              path={personas[0].path}
              completionPercentage={practitionerProgress.getCompletionPercentage(totalSteps)}
              completedSteps={practitionerProgress.getCurrentProgress().stepsCompleted.length}
              totalSteps={totalSteps}
              isCompleted={practitionerProgress.isPersonaComplete()}
            />
            <PersonaProgressCard
              title="Tool Owners & SMEs"
              description="Owners of EACMS, PACS, and critical systems"
              icon={personas[1].icon}
              path={personas[1].path}
              completionPercentage={toolOwnerProgress.getCompletionPercentage(totalSteps)}
              completedSteps={toolOwnerProgress.getCurrentProgress().stepsCompleted.length}
              totalSteps={totalSteps}
              isCompleted={toolOwnerProgress.isPersonaComplete()}
            />
            <PersonaProgressCard
              title="Leaders & Executives"
              description="CIP Senior Managers and program executives"
              icon={personas[2].icon}
              path={personas[2].path}
              completionPercentage={leaderProgress.getCompletionPercentage(totalSteps)}
              completedSteps={leaderProgress.getCurrentProgress().stepsCompleted.length}
              totalSteps={totalSteps}
              isCompleted={leaderProgress.isPersonaComplete()}
            />
            <PersonaProgressCard
              title="Internal Auditors & Reviewers"
              description="Teams preparing for NERC audits"
              icon={personas[3].icon}
              path={personas[3].path}
              completionPercentage={auditorProgress.getCompletionPercentage(totalSteps)}
              completedSteps={auditorProgress.getCurrentProgress().stepsCompleted.length}
              totalSteps={totalSteps}
              isCompleted={auditorProgress.isPersonaComplete()}
            />
          </div>
        </div>
      </section>

      <div id="persona-selection">
        <PersonaGrid personas={personas} onSelectPersona={handleSelectPersona} />
      </div>
    </AcademyLayout>
  );
}
