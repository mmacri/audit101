import { useNavigate } from "react-router-dom";
import { AcademyHero } from "@/components/shared/AcademyHero";
import { PersonaGrid } from "@/components/shared/PersonaGrid";
import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { personas } from "@/data/coso/personas";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Target, AlertTriangle, MessageSquare, TrendingUp } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

export default function CosoHome() {
  const navigate = useNavigate();

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
      <AcademyHero
        title="COSO Internal Control Framework Academy"
        subtitle="Build robust internal control and enterprise risk management programs with comprehensive role-based training."
        primaryCta="Choose your learning path"
        primaryAction={() => {
          const element = document.getElementById('persona-selection');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
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

      <div id="persona-selection">
        <PersonaGrid personas={personas} onSelectPersona={handleSelectPersona} />
      </div>
    </AcademyLayout>
  );
}
