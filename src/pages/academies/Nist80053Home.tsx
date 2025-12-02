import { useNavigate } from "react-router-dom";
import { AcademyHero } from "@/components/shared/AcademyHero";
import { PersonaGrid } from "@/components/shared/PersonaGrid";
import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { AcademyNav } from "@/components/shared/AcademyNav";
import { PersonaProgressCard } from "@/components/shared/PersonaProgressCard";
import { nist80053Personas } from "@/data/nist80053/personas";
import { nist80053PractitionersSteps } from "@/data/nist80053/practitionersSteps";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, BookOpen, FileText, Target } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { useFrameworkProgress } from "@/hooks/useFrameworkProgress";
import { FrameworkPersonalizedPath } from "@/components/FrameworkPersonalizedPath";
import { PersonaComparison } from "@/components/PersonaComparison";
import { Wrench, Shield, Users as UsersIcon, ClipboardCheck } from "lucide-react";
import { FrameworkRoleSelector } from "@/components/FrameworkRoleSelector";
import { useUserPreferences } from "@/hooks/useUserPreferences";

export default function Nist80053Home() {
  const navigate = useNavigate();
  const { getFrameworkRole } = useUserPreferences();
  const selectedRole = getFrameworkRole("nist-800-53");
  
  const practitionerProgress = useFrameworkProgress("nist-800-53", "practitioners");
  const toolOwnerProgress = useFrameworkProgress("nist-800-53", "tool-owners");
  const leaderProgress = useFrameworkProgress("nist-800-53", "leaders");
  const auditorProgress = useFrameworkProgress("nist-800-53", "auditors");
  
  const totalSteps = nist80053PractitionersSteps.length;

  const handleSelectPersona = (personaId: string) => {
    const persona = nist80053Personas.find(p => p.id === personaId);
    if (persona) {
      navigate(persona.path);
    }
  };

  const handleRoleSelected = (persona: string) => {
    const personaData = nist80053Personas.find(p => p.id === persona);
    if (personaData) {
      navigate(personaData.path);
    }
  };

  const personasWithDetails = [
    {
      ...nist80053Personas[0],
      keyResponsibilities: [
        "Implement NIST 800-53 controls across systems",
        "Configure security tools and infrastructure",
        "Document System Security Plans (SSPs)",
        "Execute continuous monitoring activities"
      ],
      typicalDay: [
        "Deploy AC, AU, CM, and IA controls",
        "Configure SIEM and vulnerability scanners",
        "Update control documentation",
        "Test security configurations"
      ],
      skills: ["Control Implementation", "System Hardening", "Documentation", "Technical Controls"],
      outcomes: [
        "Build compliant federal systems",
        "Maintain SSPs and POA&Ms",
        "Pass FedRAMP assessments",
        "Operate continuous monitoring"
      ],
      difficulty: "Intermediate" as const,
      timeCommitment: "6-8 weeks",
      focus: "Technical Implementation"
    },
    {
      ...nist80053Personas[1],
      keyResponsibilities: [
        "Manage security tools (SIEM, IAM, scanners)",
        "Map tool capabilities to controls",
        "Provide technical SME guidance",
        "Validate control effectiveness"
      ],
      typicalDay: [
        "Configure detection and response tools",
        "Review security tool outputs",
        "Support assessment activities",
        "Optimize tool configurations"
      ],
      skills: ["Tool Administration", "Control Mapping", "Technical Analysis", "Process Optimization"],
      outcomes: [
        "Operationalize security controls",
        "Automate compliance evidence",
        "Support assessments",
        "Improve security posture"
      ],
      difficulty: "Advanced" as const,
      timeCommitment: "7-9 weeks",
      focus: "Tools & Automation"
    },
    {
      ...nist80053Personas[2],
      keyResponsibilities: [
        "Oversee NIST 800-53 program",
        "Select and tailor control baselines",
        "Manage assessment and authorization",
        "Report to executives and auditors"
      ],
      typicalDay: [
        "Review compliance dashboards",
        "Make tailoring decisions",
        "Coordinate with assessors",
        "Present to leadership"
      ],
      skills: ["Program Management", "Risk Management", "Strategic Planning", "Stakeholder Management"],
      outcomes: [
        "Build enterprise programs",
        "Achieve ATO/FedRAMP",
        "Manage POA&Ms",
        "Drive improvements"
      ],
      difficulty: "Advanced" as const,
      timeCommitment: "5-7 weeks",
      focus: "Program Leadership"
    },
    {
      ...nist80053Personas[3],
      keyResponsibilities: [
        "Assess control implementations",
        "Test control effectiveness",
        "Document assessment findings",
        "Support external assessments"
      ],
      typicalDay: [
        "Review SSPs and evidence",
        "Test control samples",
        "Interview system owners",
        "Write assessment reports"
      ],
      skills: ["Assessment Planning", "Control Testing", "Report Writing", "Risk Analysis"],
      outcomes: [
        "Conduct 800-53 assessments",
        "Prepare for external reviews",
        "Document SAR findings",
        "Support ATO process"
      ],
      difficulty: "Intermediate" as const,
      timeCommitment: "6-8 weeks",
      focus: "Assessment & Validation"
    }
  ];

  return (
    <AcademyLayout
      academyName="NIST 800-53 Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "NIST 800-53" }
      ]}
    >
      <AcademyNav academyPath="/nist-800-53" academyName="NIST 800-53" />
      
      <AcademyHero
        title="NIST 800-53 Readiness Academy"
        subtitle="Role-based learning paths to build, assess, and document NIST 800-53 controls for your systems."
        primaryCta="View my progress"
        primaryAction={() => navigate('/progress')}
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

      {/* Role Selection */}
      {!selectedRole && (
        <section className="py-12 bg-muted/30">
          <div className="container max-w-4xl">
            <FrameworkRoleSelector 
              framework="nist-800-53"
              frameworkLabel="NIST 800-53"
              onRoleSelected={handleRoleSelected}
            />
          </div>
        </section>
      )}

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
            {nist80053Personas.map((persona, index) => {
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
        framework="nist-800-53"
        personas={personasWithDetails}
        totalSteps={totalSteps}
      />

      {/* Personalized Training Path */}
      <FrameworkPersonalizedPath 
        framework="nist-800-53" 
        personas={nist80053Personas}
      />

      {/* Persona Selection */}
      <div id="persona-selection">
        <PersonaGrid
          personas={nist80053Personas}
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
