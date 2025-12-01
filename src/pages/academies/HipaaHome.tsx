import { useNavigate } from "react-router-dom";
import { AcademyHero } from "@/components/shared/AcademyHero";
import { PersonaGrid } from "@/components/shared/PersonaGrid";
import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { personas } from "@/data/hipaa/personas";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileText, Users, Scale } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

export default function HipaaHome() {
  const navigate = useNavigate();

  const handleSelectPersona = (personaId: string) => {
    const persona = personas.find(p => p.id === personaId);
    if (persona) {
      navigate(persona.path);
    }
  };

  const frameworks = [
    {
      icon: Shield,
      title: "Privacy Rule",
      description: "Protects all individually identifiable health information",
    },
    {
      icon: FileText,
      title: "Security Rule",
      description: "Administrative, physical, and technical safeguards",
    },
    {
      icon: Users,
      title: "Breach Notification",
      description: "Requirements for breach discovery and notification",
    },
    {
      icon: Scale,
      title: "Enforcement Rule",
      description: "Procedures for investigations and penalties",
    },
  ];

  return (
    <AcademyLayout
      academyName="HIPAA Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "HIPAA" }
      ]}
    >
      <AcademyHero
        title="HIPAA Security & Privacy Readiness Academy"
        subtitle="Build comprehensive healthcare data protection and compliance programs with role-specific training paths."
        primaryCta="Choose your learning path"
        primaryAction={() => {
          const element = document.getElementById('persona-selection');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
        secondaryCta="View resources"
        secondaryAction={() => navigate('/hipaa/resources')}
      />

      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <PageIntro>
            HIPAA establishes national standards to protect sensitive patient health information
            from being disclosed without patient consent or knowledge. Master Privacy Rule, Security Rule,
            Breach Notification, and enforcement requirements.
          </PageIntro>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {frameworks.map((framework, index) => (
              <Card key={index} className="border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
                <CardContent className="pt-6">
                  <framework.icon className="w-12 h-12 text-emerald-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{framework.title}</h3>
                  <p className="text-muted-foreground">{framework.description}</p>
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
