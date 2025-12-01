import { useNavigate } from "react-router-dom";
import { AcademyHero } from "@/components/shared/AcademyHero";
import { PersonaGrid } from "@/components/shared/PersonaGrid";
import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { AcademyNav } from "@/components/shared/AcademyNav";
import { PersonaProgressCard } from "@/components/shared/PersonaProgressCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Shield, FileText, Award } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { Wrench, Users as UsersIcon, ClipboardCheck } from "lucide-react";
import { Persona } from "@/components/shared/PersonaGrid";
import { useFrameworkProgress } from "@/hooks/useFrameworkProgress";
import { iso27001PractitionersSteps } from "@/data/iso27001/practitionersSteps";
import { FrameworkPersonalizedPath } from "@/components/FrameworkPersonalizedPath";

const iso27001Personas: Persona[] = [
  {
    id: "practitioners",
    title: "Practitioners & Implementers",
    description: "Security practitioners implementing ISMS controls and maintaining compliance with ISO 27001 requirements.",
    icon: Wrench,
    path: "/iso-27001/practitioners"
  },
  {
    id: "tool-owners",
    title: "Tool Owners & SMEs",
    description: "System owners and technical SMEs managing security tools and technical control implementation.",
    icon: Shield,
    path: "/iso-27001/tool-owners"
  },
  {
    id: "leaders",
    title: "Leaders & Executives",
    description: "ISMS managers and executives overseeing ISO 27001 program strategy and certification maintenance.",
    icon: UsersIcon,
    path: "/iso-27001/leaders"
  },
  {
    id: "auditors",
    title: "Internal Auditors & Reviewers",
    description: "Internal auditors assessing ISMS effectiveness and preparing for external certification audits.",
    icon: ClipboardCheck,
    path: "/iso-27001/auditors"
  }
];

export default function Iso27001Home() {
  const navigate = useNavigate();
  
  const practitionerProgress = useFrameworkProgress("iso-27001", "practitioners");
  const toolOwnerProgress = useFrameworkProgress("iso-27001", "tool-owners");
  const leaderProgress = useFrameworkProgress("iso-27001", "leaders");
  const auditorProgress = useFrameworkProgress("iso-27001", "auditors");
  
  const totalSteps = iso27001PractitionersSteps.length;

  const handleSelectPersona = (personaId: string) => {
    const persona = iso27001Personas.find(p => p.id === personaId);
    if (persona) {
      navigate(persona.path);
    }
  };

  return (
    <AcademyLayout
      academyName="ISO 27001 Readiness Academy"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "ISO 27001" }
      ]}
    >
      <AcademyNav academyPath="/iso-27001" academyName="ISO 27001" />
      
      <AcademyHero
        title="ISO 27001 Information Security Management System Academy"
        subtitle="Build, implement, and certify your ISMS following ISO/IEC 27001 requirements. Master risk-based security management and prepare for successful certification audits."
        primaryCta="View my progress"
        primaryAction={() => navigate('/progress')}
        secondaryCta="View Resources"
        secondaryAction={() => navigate('/iso-27001/resources')}
      />

      {/* Why It Matters */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <PageIntro>
            ISO/IEC 27001 is the international standard for Information Security Management Systems (ISMS). 
            It provides a systematic, risk-based approach to protecting sensitive information and achieving 
            third-party certification recognized globally.
          </PageIntro>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Risk-Based ISMS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Build a comprehensive management system covering all aspects of information security through 
                  risk assessment and treatment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>93 Annex A Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Select and implement controls from four domains: Organizational, People, Physical, and Technological 
                  based on your risk assessment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Global Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Achieve internationally recognized certification demonstrating your commitment to information 
                  security to customers and partners.
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
            {iso27001Personas.map((persona, index) => {
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
        framework="iso-27001" 
        personas={iso27001Personas}
      />

      {/* Persona Selection */}
      <div id="persona-selection">
        <PersonaGrid
          personas={iso27001Personas}
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
              "How to establish ISMS context and scope (Clause 4)",
              "How to secure leadership commitment and define roles (Clause 5)",
              "How to conduct risk assessments and create Statement of Applicability",
              "How to implement Annex A controls across 4 domains",
              "How to operate and monitor the ISMS (Clauses 8-9)",
              "How to prepare for Stage 1 and Stage 2 certification audits",
              "How to maintain certification through surveillance and recertification"
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
