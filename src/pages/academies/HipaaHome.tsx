import { useNavigate } from "react-router-dom";
import { AcademyHero } from "@/components/shared/AcademyHero";
import { PersonaGrid } from "@/components/shared/PersonaGrid";
import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { AcademyNav } from "@/components/shared/AcademyNav";
import { PersonaProgressCard } from "@/components/shared/PersonaProgressCard";
import { personas } from "@/data/hipaa/personas";
import { practitionersSteps } from "@/data/hipaa/practitionersSteps";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, Scale, Wrench, Shield, Users as UsersIcon, ClipboardCheck } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { useFrameworkProgress } from "@/hooks/useFrameworkProgress";
import { FrameworkPersonalizedPath } from "@/components/FrameworkPersonalizedPath";
import { PersonaComparison } from "@/components/PersonaComparison";

export default function HipaaHome() {
  const navigate = useNavigate();

  const practitionerProgress = useFrameworkProgress("hipaa", "practitioners");
  const toolOwnerProgress = useFrameworkProgress("hipaa", "tool-owners");
  const leaderProgress = useFrameworkProgress("hipaa", "leaders");
  const auditorProgress = useFrameworkProgress("hipaa", "auditors");
  
  const totalSteps = practitionersSteps.length;

  const handleSelectPersona = (personaId: string) => {
    const persona = personas.find(p => p.id === personaId);
    if (persona) {
      navigate(persona.path);
    }
  };

  const personasWithDetails = [
    {
      ...personas[0],
      keyResponsibilities: [
        "Implement HIPAA Security Rule safeguards",
        "Protect PHI in systems and applications",
        "Execute administrative and technical controls",
        "Maintain physical security measures"
      ],
      typicalDay: [
        "Configure access controls for PHI",
        "Implement encryption solutions",
        "Test security systems",
        "Document safeguard implementations"
      ],
      skills: ["Healthcare Security", "PHI Protection", "Safeguard Implementation", "HIPAA Compliance"],
      outcomes: [
        "Secure protected health information",
        "Pass HIPAA assessments",
        "Prevent data breaches",
        "Maintain patient trust"
      ],
      difficulty: "Intermediate" as const,
      timeCommitment: "6-8 weeks",
      focus: "PHI Security Implementation"
    },
    {
      ...personas[1],
      keyResponsibilities: [
        "Manage healthcare IT systems",
        "Own EHR and clinical applications",
        "Support Business Associate agreements",
        "Validate technical safeguards"
      ],
      typicalDay: [
        "Monitor healthcare systems",
        "Review vendor security attestations",
        "Test disaster recovery",
        "Support risk assessments"
      ],
      skills: ["Healthcare IT", "EHR Management", "Vendor Management", "Technical Safeguards"],
      outcomes: [
        "Maintain compliant healthcare systems",
        "Manage Business Associate risks",
        "Support breach prevention",
        "Enable clinical operations"
      ],
      difficulty: "Advanced" as const,
      timeCommitment: "7-9 weeks",
      focus: "Healthcare Systems Management"
    },
    {
      ...personas[2],
      keyResponsibilities: [
        "Oversee HIPAA compliance program",
        "Manage Privacy and Security Officers",
        "Coordinate breach response",
        "Report to healthcare executives"
      ],
      typicalDay: [
        "Review compliance dashboards",
        "Coordinate with Privacy Officer",
        "Meet with Business Associates",
        "Present to leadership"
      ],
      skills: ["Program Leadership", "Privacy Management", "Breach Response", "Healthcare Compliance"],
      outcomes: [
        "Build enterprise HIPAA program",
        "Prevent and manage breaches",
        "Coordinate Privacy/Security",
        "Maintain patient trust"
      ],
      difficulty: "Advanced" as const,
      timeCommitment: "5-7 weeks",
      focus: "Program Leadership"
    },
    {
      ...personas[3],
      keyResponsibilities: [
        "Conduct HIPAA compliance audits",
        "Assess Privacy and Security Rules",
        "Test safeguard effectiveness",
        "Prepare for HHS audits"
      ],
      typicalDay: [
        "Review risk assessments",
        "Test PHI access controls",
        "Interview healthcare staff",
        "Document audit findings"
      ],
      skills: ["HIPAA Auditing", "Privacy Assessment", "Security Testing", "Breach Investigation"],
      outcomes: [
        "Conduct effective HIPAA audits",
        "Identify compliance gaps",
        "Prepare for HHS reviews",
        "Support breach prevention"
      ],
      difficulty: "Intermediate" as const,
      timeCommitment: "6-8 weeks",
      focus: "HIPAA Audit & Assessment"
    }
  ];

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
      <AcademyNav academyPath="/hipaa" academyName="HIPAA" />
      
      <AcademyHero
        title="HIPAA Security & Privacy Readiness Academy"
        subtitle="Build comprehensive healthcare data protection and compliance programs with role-specific training paths."
        primaryCta="View my progress"
        primaryAction={() => navigate('/progress')}
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
            {personas.map((persona, index) => {
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

      {/* Persona Comparison */}
      <PersonaComparison 
        framework="hipaa"
        personas={personasWithDetails}
        totalSteps={totalSteps}
      />

      {/* Personalized Training Path */}
      <FrameworkPersonalizedPath 
        framework="hipaa" 
        personas={personas}
      />

      <div id="persona-selection">
        <PersonaGrid personas={personas} onSelectPersona={handleSelectPersona} />
      </div>
    </AcademyLayout>
  );
}
