import { useNavigate } from "react-router-dom";
import { AcademyHero } from "@/components/shared/AcademyHero";
import { PersonaGrid } from "@/components/shared/PersonaGrid";
import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { AcademyNav } from "@/components/shared/AcademyNav";
import { PersonaProgressCard } from "@/components/shared/PersonaProgressCard";
import { cisControlsPersonas } from "@/data/cisControls/personas";
import { cisControlsPractitionersSteps } from "@/data/cisControls/practitionersSteps";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Target, Layers, TrendingUp } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { useFrameworkProgress } from "@/hooks/useFrameworkProgress";
import { FrameworkPersonalizedPath } from "@/components/FrameworkPersonalizedPath";
import { PersonaComparison } from "@/components/PersonaComparison";
import { Wrench, Shield, Users as UsersIcon, ClipboardCheck } from "lucide-react";

export default function CisControlsHome() {
  const navigate = useNavigate();
  
  const practitionerProgress = useFrameworkProgress("cis-controls", "practitioners");
  const toolOwnerProgress = useFrameworkProgress("cis-controls", "tool-owners");
  const leaderProgress = useFrameworkProgress("cis-controls", "leaders");
  const auditorProgress = useFrameworkProgress("cis-controls", "auditors");
  
  const totalSteps = cisControlsPractitionersSteps.length;

  const handleSelectPersona = (personaId: string) => {
    const persona = cisControlsPersonas.find(p => p.id === personaId);
    if (persona) {
      navigate(persona.path);
    }
  };

  const personasWithDetails = [
    {
      ...cisControlsPersonas[0],
      keyResponsibilities: [
        "Implement 18 CIS Controls across enterprise",
        "Execute IG1, IG2, or IG3 safeguards",
        "Deploy asset and vulnerability management",
        "Configure logging and monitoring"
      ],
      typicalDay: [
        "Inventory assets and software",
        "Deploy security configurations",
        "Scan for vulnerabilities",
        "Collect and analyze logs"
      ],
      skills: ["CIS Controls Implementation", "Asset Management", "Vulnerability Management", "Security Monitoring"],
      outcomes: [
        "Achieve Implementation Group targets",
        "Secure critical assets",
        "Improve security posture",
        "Advance CIS maturity"
      ],
      difficulty: "Intermediate" as const,
      timeCommitment: "6-8 weeks",
      focus: "Control Implementation"
    },
    {
      ...cisControlsPersonas[1],
      keyResponsibilities: [
        "Manage security tools supporting CIS Controls",
        "Map tool capabilities to safeguards",
        "Provide technical SME guidance",
        "Support IG progression"
      ],
      typicalDay: [
        "Configure asset discovery tools",
        "Optimize vulnerability scanners",
        "Review log management systems",
        "Support control assessments"
      ],
      skills: ["Tool Administration", "CIS Mapping", "Technical Expertise", "Capability Optimization"],
      outcomes: [
        "Operationalize CIS Controls",
        "Automate safeguard evidence",
        "Progress Implementation Groups",
        "Improve tool effectiveness"
      ],
      difficulty: "Advanced" as const,
      timeCommitment: "6-8 weeks",
      focus: "Tool & Technology Management"
    },
    {
      ...cisControlsPersonas[2],
      keyResponsibilities: [
        "Oversee CIS Controls program",
        "Select appropriate Implementation Group",
        "Align controls with business risk",
        "Drive continuous improvement"
      ],
      typicalDay: [
        "Review CIS maturity dashboards",
        "Approve IG roadmap priorities",
        "Present to executive leadership",
        "Plan strategic initiatives"
      ],
      skills: ["Program Leadership", "Risk-Based Prioritization", "Executive Communication", "Strategic Planning"],
      outcomes: [
        "Build enterprise CIS program",
        "Progress through IGs",
        "Demonstrate security maturity",
        "Align with business priorities"
      ],
      difficulty: "Advanced" as const,
      timeCommitment: "4-6 weeks",
      focus: "Program Strategy"
    },
    {
      ...cisControlsPersonas[3],
      keyResponsibilities: [
        "Assess CIS Controls implementation",
        "Evaluate safeguard effectiveness",
        "Determine Implementation Group readiness",
        "Track improvement initiatives"
      ],
      typicalDay: [
        "Test safeguard implementations",
        "Review control documentation",
        "Assess IG maturity",
        "Write assessment reports"
      ],
      skills: ["CIS Assessment", "Control Testing", "Maturity Evaluation", "Gap Analysis"],
      outcomes: [
        "Assess CIS maturity",
        "Validate IG achievement",
        "Identify control gaps",
        "Support IG progression"
      ],
      difficulty: "Intermediate" as const,
      timeCommitment: "5-7 weeks",
      focus: "Assessment & Validation"
    }
  ];

  return (
    <AcademyLayout
      academyName="CIS Controls Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "CIS Controls" }
      ]}
    >
      <AcademyNav academyPath="/cis-controls" academyName="CIS Controls" />
      
      <AcademyHero
        title="CIS Controls Readiness Academy"
        subtitle="Turn the 18 CIS Controls into a practical, role-based action plan for your cyber defense program."
        primaryCta="View my progress"
        primaryAction={() => navigate('/progress')}
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
            {cisControlsPersonas.map((persona, index) => {
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
        framework="cis-controls"
        personas={personasWithDetails}
        totalSteps={totalSteps}
      />

      {/* Personalized Training Path */}
      <FrameworkPersonalizedPath 
        framework="cis-controls" 
        personas={cisControlsPersonas}
      />

      {/* Persona Selection */}
      <div id="persona-selection">
        <PersonaGrid
          personas={cisControlsPersonas}
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
