import { useNavigate } from "react-router-dom";
import { AcademyHero } from "@/components/shared/AcademyHero";
import { PersonaGrid } from "@/components/shared/PersonaGrid";
import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { AcademyNav } from "@/components/shared/AcademyNav";
import { PersonaProgressCard } from "@/components/shared/PersonaProgressCard";
import { personas } from "@/data/coso/personas";
import { practitionersSteps } from "@/data/coso/practitionersSteps";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Target, AlertTriangle, MessageSquare, TrendingUp } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { useFrameworkProgress } from "@/hooks/useFrameworkProgress";
import { FrameworkPersonalizedPath } from "@/components/FrameworkPersonalizedPath";

export default function CosoHome() {
  const navigate = useNavigate();
  
  const practitionerProgress = useFrameworkProgress("coso", "practitioners");
  const toolOwnerProgress = useFrameworkProgress("coso", "tool-owners");
  const leaderProgress = useFrameworkProgress("coso", "leaders");
  const auditorProgress = useFrameworkProgress("coso", "auditors");
  
  const totalSteps = practitionersSteps.length;

  const handleSelectPersona = (personaId: string) => {
    const persona = personas.find(p => p.id === personaId);
    if (persona) {
      navigate(persona.path);
    }
  };

  const components = [
    {
      icon: Building2,
      title: "Control Environment",
      description: "Foundation of internal control system",
    },
    {
      icon: Target,
      title: "Risk Assessment",
      description: "Identify and analyze relevant risks",
    },
    {
      icon: AlertTriangle,
      title: "Control Activities",
      description: "Policies and procedures to mitigate risks",
    },
    {
      icon: MessageSquare,
      title: "Information & Communication",
      description: "Share information to support internal control",
    },
    {
      icon: TrendingUp,
      title: "Monitoring Activities",
      description: "Evaluate quality of internal control over time",
    },
  ];

  return (
    <AcademyLayout
      academyName="COSO Framework Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "COSO" }
      ]}
    >
      <AcademyNav academyPath="/coso" academyName="COSO" />
      
      <AcademyHero
        title="COSO Internal Control Framework Academy"
        subtitle="Build robust internal control and enterprise risk management programs with comprehensive role-based training."
        primaryCta="View my progress"
        primaryAction={() => navigate('/progress')}
        secondaryCta="View resources"
        secondaryAction={() => navigate('/coso/resources')}
      />

      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <PageIntro>
            The COSO framework provides a comprehensive approach to internal control,
            helping organizations achieve objectives related to operations, reporting, and compliance.
            Master the five components and seventeen principles of effective internal control.
          </PageIntro>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
            {components.map((component, index) => (
              <Card key={index} className="border-violet-500/20 hover:border-violet-500/40 transition-colors">
                <CardContent className="pt-6">
                  <component.icon className="w-12 h-12 text-violet-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{component.title}</h3>
                  <p className="text-sm text-muted-foreground">{component.description}</p>
                </CardContent>
              </Card>
            ))}
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
            <PersonaProgressCard
              title={personas[0].title}
              description={personas[0].description}
              icon={personas[0].icon}
              path={personas[0].path}
              completionPercentage={practitionerProgress.getCompletionPercentage(totalSteps)}
              completedSteps={practitionerProgress.getCurrentProgress().stepsCompleted.length}
              totalSteps={totalSteps}
              isCompleted={practitionerProgress.isPersonaComplete()}
            />
            <PersonaProgressCard
              title={personas[1].title}
              description={personas[1].description}
              icon={personas[1].icon}
              path={personas[1].path}
              completionPercentage={toolOwnerProgress.getCompletionPercentage(totalSteps)}
              completedSteps={toolOwnerProgress.getCurrentProgress().stepsCompleted.length}
              totalSteps={totalSteps}
              isCompleted={toolOwnerProgress.isPersonaComplete()}
            />
            <PersonaProgressCard
              title={personas[2].title}
              description={personas[2].description}
              icon={personas[2].icon}
              path={personas[2].path}
              completionPercentage={leaderProgress.getCompletionPercentage(totalSteps)}
              completedSteps={leaderProgress.getCurrentProgress().stepsCompleted.length}
              totalSteps={totalSteps}
              isCompleted={leaderProgress.isPersonaComplete()}
            />
            <PersonaProgressCard
              title={personas[3].title}
              description={personas[3].description}
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

      {/* Personalized Training Path */}
      <FrameworkPersonalizedPath 
        framework="coso" 
        personas={personas}
      />

      <div id="persona-selection">
        <PersonaGrid personas={personas} onSelectPersona={handleSelectPersona} />
      </div>
    </AcademyLayout>
  );
}
