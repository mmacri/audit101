import { useNavigate } from "react-router-dom";
import { AcademyHero } from "@/components/shared/AcademyHero";
import { PersonaGrid } from "@/components/shared/PersonaGrid";
import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { cisControlsPersonas } from "@/data/cisControls/personas";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Target, Layers, TrendingUp } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

export default function CisControlsHome() {
  const navigate = useNavigate();

  const handleSelectPersona = (personaId: string) => {
    const persona = cisControlsPersonas.find(p => p.id === personaId);
    if (persona) {
      navigate(persona.path);
    }
  };

  return (
    <AcademyLayout
      academyName="CIS Controls Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "CIS Controls" }
      ]}
    >
      <AcademyHero
        title="CIS Controls Readiness Academy"
        subtitle="Turn the 18 CIS Controls into a practical, role-based action plan for your cyber defense program."
        primaryCta="Choose your learning path"
        primaryAction={() => {
          const element = document.getElementById('persona-selection');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
        secondaryCta="View all resources"
        secondaryAction={() => navigate('/cis-controls/resources')}
      />

      {/* Why It Matters */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <PageIntro>
            CIS Controls v8 provides a prioritized set of 18 cybersecurity safeguards to defend against the most common attacks. The Implementation Group structure helps organizations of any size focus on the controls that matter most for their maturity level.
          </PageIntro>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Prioritized Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Focus on high-impact safeguards first with Implementation Groups (IG1, IG2, IG3) that scale with organizational complexity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Layers className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Comprehensive Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  18 controls span asset management, data protection, vulnerability management, logging, incident response, and more.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Measurable Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track implementation maturity and advance from IG1 to IG2 to IG3 as your security program grows.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Persona Selection */}
      <div id="persona-selection">
        <PersonaGrid
          personas={cisControlsPersonas}
          onSelectPersona={handleSelectPersona}
        />
      </div>

      {/* What You'll Learn */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            What You'll Learn
          </h2>

          <div className="space-y-4">
            {[
              "How to inventory and manage hardware and software assets (Controls 1 & 2)",
              "How to protect data and implement secure configurations (Controls 3 & 4)",
              "How to manage accounts, access, and privileges (Controls 5 & 6)",
              "How to scan vulnerabilities and manage patches (Control 7)",
              "How to collect, protect, and analyze audit logs (Control 8)",
              "How to deploy detection, response, and recovery capabilities (Controls 9-18)",
              "How to determine your Implementation Group and build a roadmap"
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
