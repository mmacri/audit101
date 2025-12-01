import { useNavigate } from "react-router-dom";
import { AcademyHero } from "@/components/shared/AcademyHero";
import { PersonaGrid } from "@/components/shared/PersonaGrid";
import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { personas } from "@/data/nercCip/personas";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, AlertTriangle, FileCheck } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

export default function NercCipHome() {
  const navigate = useNavigate();

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
      <AcademyHero
        title="NERC CIP Readiness Academy"
        subtitle="Master Critical Infrastructure Protection standards and prepare for NERC compliance audits with role-based training paths."
        primaryCta="Choose your learning path"
        primaryAction={() => {
          const element = document.getElementById('persona-selection');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
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

      <div id="persona-selection">
        <PersonaGrid personas={personas} onSelectPersona={handleSelectPersona} />
      </div>
    </AcademyLayout>
  );
}
