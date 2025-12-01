import { useNavigate } from "react-router-dom";
import { AcademyHero } from "@/components/shared/AcademyHero";
import { PersonaGrid } from "@/components/shared/PersonaGrid";
import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { AcademyNav } from "@/components/shared/AcademyNav";
import { PersonaProgressCard } from "@/components/shared/PersonaProgressCard";
import { soxItgcPersonas } from "@/data/soxItgc/personas";
import { soxItgcPractitionersSteps } from "@/data/soxItgc/practitionersSteps";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Lock, GitBranch, Server } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { useFrameworkProgress } from "@/hooks/useFrameworkProgress";
import { FrameworkPersonalizedPath } from "@/components/FrameworkPersonalizedPath";
import { PersonaComparison } from "@/components/PersonaComparison";
import { Wrench, Shield, Users as UsersIcon, ClipboardCheck } from "lucide-react";

export default function SoxItgcHome() {
  const navigate = useNavigate();
  
  const practitionerProgress = useFrameworkProgress("sox-itgc", "practitioners");
  const toolOwnerProgress = useFrameworkProgress("sox-itgc", "tool-owners");
  const leaderProgress = useFrameworkProgress("sox-itgc", "leaders");
  const auditorProgress = useFrameworkProgress("sox-itgc", "auditors");
  
  const totalSteps = soxItgcPractitionersSteps.length;

  const handleSelectPersona = (personaId: string) => {
    const persona = soxItgcPersonas.find(p => p.id === personaId);
    if (persona) {
      navigate(persona.path);
    }
  };

  const personasWithDetails = [
    {
      ...soxItgcPersonas[0],
      keyResponsibilities: [
        "Implement ITGC controls for financial systems",
        "Execute access provisioning and reviews",
        "Document change management procedures",
        "Maintain backup and recovery controls"
      ],
      typicalDay: [
        "Process user access requests",
        "Execute quarterly access reviews",
        "Document system changes",
        "Test backup procedures"
      ],
      skills: ["ITGC Implementation", "Access Management", "Change Control", "Documentation"],
      outcomes: [
        "Maintain SOX-compliant IT controls",
        "Pass external SOX audits",
        "Support financial reporting",
        "Demonstrate control effectiveness"
      ],
      difficulty: "Beginner" as const,
      timeCommitment: "5-7 weeks",
      focus: "ITGC Operations"
    },
    {
      ...soxItgcPersonas[1],
      keyResponsibilities: [
        "Own financial systems and infrastructure",
        "Manage IAM and ticketing platforms",
        "Support ITGC control design",
        "Coordinate with external auditors"
      ],
      typicalDay: [
        "Monitor critical financial systems",
        "Review access control configurations",
        "Support SOX testing activities",
        "Manage system availability"
      ],
      skills: ["System Ownership", "IAM Management", "SDLC Controls", "Audit Coordination"],
      outcomes: [
        "Maintain compliant financial systems",
        "Support SOX control testing",
        "Provide evidence to auditors",
        "Enable reliable financial reporting"
      ],
      difficulty: "Intermediate" as const,
      timeCommitment: "6-8 weeks",
      focus: "System & Tool Management"
    },
    {
      ...soxItgcPersonas[2],
      keyResponsibilities: [
        "Oversee SOX ITGC program",
        "Coordinate IT and Finance teams",
        "Manage external auditor relationships",
        "Report control status to leadership"
      ],
      typicalDay: [
        "Review SOX compliance dashboards",
        "Meet with external auditors",
        "Coordinate control testing",
        "Present to audit committee"
      ],
      skills: ["Program Management", "Cross-Functional Leadership", "Auditor Relations", "SOX Compliance"],
      outcomes: [
        "Achieve clean SOX audits",
        "Coordinate IT/Finance teams",
        "Manage audit timelines",
        "Support financial reporting"
      ],
      difficulty: "Advanced" as const,
      timeCommitment: "4-6 weeks",
      focus: "Program Leadership"
    },
    {
      ...soxItgcPersonas[3],
      keyResponsibilities: [
        "Test ITGC control effectiveness",
        "Prepare for external SOX audits",
        "Document control testing results",
        "Track remediation activities"
      ],
      typicalDay: [
        "Test access control samples",
        "Review change management tickets",
        "Validate backup procedures",
        "Document testing results"
      ],
      skills: ["SOX Testing", "Control Sampling", "Evidence Review", "Audit Preparation"],
      outcomes: [
        "Conduct effective ITGC testing",
        "Prepare for external audits",
        "Identify control deficiencies",
        "Support clean audit opinions"
      ],
      difficulty: "Intermediate" as const,
      timeCommitment: "5-7 weeks",
      focus: "Testing & Audit Support"
    }
  ];

  return (
    <AcademyLayout
      academyName="SOX ITGC Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "SOX ITGC" }
      ]}
    >
      <AcademyNav academyPath="/sox-itgc" academyName="SOX ITGC" />
      
      <AcademyHero
        title="SOX ITGC Readiness Academy"
        subtitle="Help IT, finance, and audit teams prepare for SOX ITGC testing with clear controls, evidence, and responsibilities."
        primaryCta="View my progress"
        primaryAction={() => navigate('/progress')}
        secondaryCta="View all resources"
        secondaryAction={() => navigate('/sox-itgc/resources')}
      />

      {/* Why It Matters */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <PageIntro>
            SOX Section 404 requires companies to maintain internal controls over financial reporting. IT General Controls (ITGCs) are the foundation that supports application controls for financial systems. Effective ITGCs are essential for clean SOX audits and accurate financial reporting.
          </PageIntro>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <Lock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Logical Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Controls for user provisioning, access reviews, privileged access management, and authentication to financial systems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <GitBranch className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Change Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  SDLC controls for requesting, approving, testing, and deploying changes to in-scope financial applications and infrastructure.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Server className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Computer Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Controls for backups, batch job monitoring, incident management, and system availability for financial systems.
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
            {soxItgcPersonas.map((persona, index) => {
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
        framework="sox-itgc"
        personas={personasWithDetails}
        totalSteps={totalSteps}
      />

      {/* Personalized Training Path */}
      <FrameworkPersonalizedPath 
        framework="sox-itgc" 
        personas={soxItgcPersonas}
      />

      {/* Persona Selection */}
      <div id="persona-selection">
        <PersonaGrid
          personas={soxItgcPersonas}
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
              "How to identify in-scope financial systems and supporting IT infrastructure",
              "How to implement logical access controls: provisioning, reviews, privilege management",
              "How to establish change management controls: approvals, testing, deployment tracking",
              "How to implement computer operations controls: backups, batch jobs, incident response",
              "How to collect and organize ITGC evidence for SOX auditors",
              "How to support SOX testing and address audit findings",
              "How to maintain continuous ITGC compliance throughout the fiscal year"
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
