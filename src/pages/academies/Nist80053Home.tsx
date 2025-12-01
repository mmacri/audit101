import { useNavigate } from "react-router-dom";
import { AcademyHero } from "@/components/shared/AcademyHero";
import { PersonaGrid } from "@/components/shared/PersonaGrid";
import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { nist80053Personas } from "@/data/nist80053/personas";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, BookOpen, FileText, Target } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

export default function Nist80053Home() {
  const navigate = useNavigate();

  const handleSelectPersona = (personaId: string) => {
    const persona = nist80053Personas.find(p => p.id === personaId);
    if (persona) {
      navigate(persona.path);
    }
  };

  return (
    <AcademyLayout
      academyName="NIST 800-53 Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "NIST 800-53" }
      ]}
    >
      <AcademyHero
        title="NIST 800-53 Readiness Academy"
        subtitle="Role-based learning paths to build, assess, and document NIST 800-53 controls for your systems."
        primaryCta="Choose your learning path"
        primaryAction={() => {
          const element = document.getElementById('persona-selection');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
        secondaryCta="View all resources"
        secondaryAction={() => navigate('/nist-800-53/resources')}
      />

      {/* Why It Matters */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <PageIntro>
            NIST SP 800-53 provides a comprehensive catalog of security and privacy controls for federal information systems and organizations. It's widely adopted as a baseline for security programs across government, critical infrastructure, and regulated industries.
          </PageIntro>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Control-Based Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Organized into 20 control families covering every aspect of security from Access Control to System & Information Integrity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Flexible Baselines</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Low, Moderate, and High baselines provide starting points that can be tailored to your organization's specific needs and risk profile.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Assessment Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Build System Security Plans (SSPs) and organize evidence that's ready for FedRAMP, FISMA, and other compliance assessments.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Persona Selection */}
      <div id="persona-selection">
        <PersonaGrid
          personas={nist80053Personas}
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
              "How to define system boundaries and conduct FIPS 199 categorization",
              "How to select and tailor control baselines for your systems",
              "How to implement technical controls across the AC, AU, CM, IA, SC, and SI families",
              "How to document controls and organize assessment artifacts",
              "How to conduct internal assessments and prepare for external reviews",
              "How to maintain continuous monitoring and manage POA&Ms"
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
