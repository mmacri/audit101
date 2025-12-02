import { useNavigate } from "react-router-dom";
import { AcademyHero } from "@/components/shared/AcademyHero";
import { PersonaGrid } from "@/components/shared/PersonaGrid";
import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { AcademyNav } from "@/components/shared/AcademyNav";
import { PersonaProgressCard } from "@/components/shared/PersonaProgressCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, CreditCard, Shield, Award } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { Wrench, Users as UsersIcon, ClipboardCheck } from "lucide-react";
import { Persona } from "@/components/shared/PersonaGrid";
import { useFrameworkProgress } from "@/hooks/useFrameworkProgress";
import { pciDssPractitionersSteps } from "@/data/pciDss/practitionersSteps";
import { FrameworkPersonalizedPath } from "@/components/FrameworkPersonalizedPath";
import { PersonaComparison } from "@/components/PersonaComparison";
import { FrameworkRoleSelector } from "@/components/FrameworkRoleSelector";
import { useUserPreferences } from "@/hooks/useUserPreferences";

const pciDssPersonas: Persona[] = [
  {
    id: "practitioners",
    title: "Practitioners & Implementers",
    description: "Security practitioners implementing PCI DSS controls and managing the Cardholder Data Environment (CDE).",
    icon: Wrench,
    path: "/pci-dss/practitioners"
  },
  {
    id: "tool-owners",
    title: "Tool Owners & SMEs",
    description: "System owners managing payment systems, firewalls, and technical controls within the CDE.",
    icon: Shield,
    path: "/pci-dss/tool-owners"
  },
  {
    id: "leaders",
    title: "Leaders & Executives",
    description: "PCI DSS program managers and executives overseeing compliance strategy and validation.",
    icon: UsersIcon,
    path: "/pci-dss/leaders"
  },
  {
    id: "auditors",
    title: "Internal Auditors & Reviewers",
    description: "Internal auditors assessing PCI DSS compliance and preparing for QSA assessments or SAQ completion.",
    icon: ClipboardCheck,
    path: "/pci-dss/auditors"
  }
];

export default function PciDssHome() {
  const navigate = useNavigate();
  const { getFrameworkRole } = useUserPreferences();
  const selectedRole = getFrameworkRole("pci-dss");
  
  const practitionerProgress = useFrameworkProgress("pci-dss", "practitioners");
  const toolOwnerProgress = useFrameworkProgress("pci-dss", "tool-owners");
  const leaderProgress = useFrameworkProgress("pci-dss", "leaders");
  const auditorProgress = useFrameworkProgress("pci-dss", "auditors");
  
  const totalSteps = pciDssPractitionersSteps.length;

  const handleSelectPersona = (personaId: string) => {
    const persona = pciDssPersonas.find(p => p.id === personaId);
    if (persona) {
      navigate(persona.path);
    }
  };

  const handleRoleSelected = (persona: string) => {
    const personaData = pciDssPersonas.find(p => p.id === persona);
    if (personaData) {
      navigate(personaData.path);
    }
  };

  const personasWithDetails = [
    {
      ...pciDssPersonas[0],
      keyResponsibilities: [
        "Implement PCI DSS controls in CDE",
        "Manage cardholder data encryption",
        "Configure network segmentation",
        "Monitor security systems and alerts"
      ],
      typicalDay: [
        "Review firewall configurations",
        "Apply security patches to payment systems",
        "Monitor IDS/IPS alerts",
        "Document control implementations"
      ],
      skills: ["Payment Security", "Encryption", "Network Security", "Compliance Controls"],
      outcomes: [
        "Secure cardholder data environment",
        "Pass QSA assessments",
        "Complete SAQ requirements",
        "Maintain PCI DSS compliance"
      ],
      difficulty: "Intermediate" as const,
      timeCommitment: "5-7 weeks",
      focus: "CDE Protection"
    },
    {
      ...pciDssPersonas[1],
      keyResponsibilities: [
        "Own payment systems and infrastructure",
        "Manage encryption key lifecycles",
        "Coordinate vendor compliance",
        "Validate technical controls"
      ],
      typicalDay: [
        "Monitor payment processing systems",
        "Review vendor attestations",
        "Test backup and recovery",
        "Support quarterly scans"
      ],
      skills: ["System Management", "Vendor Relations", "Key Management", "Technical Controls"],
      outcomes: [
        "Maintain compliant payment systems",
        "Manage vendor relationships",
        "Pass ASV scans",
        "Support validation activities"
      ],
      difficulty: "Advanced" as const,
      timeCommitment: "6-8 weeks",
      focus: "System & Vendor Management"
    },
    {
      ...pciDssPersonas[2],
      keyResponsibilities: [
        "Oversee PCI DSS compliance program",
        "Select appropriate SAQ type",
        "Manage QSA relationships",
        "Report compliance status"
      ],
      typicalDay: [
        "Review compliance dashboards",
        "Coordinate with QSAs",
        "Approve remediation plans",
        "Present to executives"
      ],
      skills: ["Program Leadership", "Risk Management", "Vendor Management", "Executive Communication"],
      outcomes: [
        "Achieve annual compliance",
        "Manage validation process",
        "Reduce compliance scope",
        "Drive program improvements"
      ],
      difficulty: "Advanced" as const,
      timeCommitment: "4-6 weeks",
      focus: "Program Oversight"
    },
    {
      ...pciDssPersonas[3],
      keyResponsibilities: [
        "Conduct internal PCI audits",
        "Test control effectiveness",
        "Prepare for QSA assessments",
        "Track remediation activities"
      ],
      typicalDay: [
        "Review cardholder data flows",
        "Test access controls",
        "Document evidence",
        "Write audit findings"
      ],
      skills: ["Audit Planning", "Control Testing", "Evidence Management", "Risk Assessment"],
      outcomes: [
        "Conduct pre-QSA assessments",
        "Identify compliance gaps",
        "Prepare validation evidence",
        "Support external audits"
      ],
      difficulty: "Intermediate" as const,
      timeCommitment: "5-7 weeks",
      focus: "Audit & Validation"
    }
  ];

  return (
    <AcademyLayout
      academyName="PCI DSS Readiness Academy"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "PCI DSS" }
      ]}
    >
      <AcademyNav academyPath="/pci-dss" academyName="PCI DSS" />
      
      <AcademyHero
        title="PCI DSS Payment Card Data Security Academy"
        subtitle="Protect cardholder data and achieve PCI DSS compliance. Master all 12 requirements and prepare for validation through QSA assessments or SAQs."
        primaryCta="View my progress"
        primaryAction={() => navigate('/progress')}
        secondaryCta="View Resources"
        secondaryAction={() => navigate('/pci-dss/resources')}
      />

      {/* Why It Matters */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <PageIntro>
            The Payment Card Industry Data Security Standard (PCI DSS) is the global standard for protecting payment 
            card data. Any organization that stores, processes, or transmits cardholder data must comply with PCI DSS 
            to safeguard sensitive information and maintain customer trust.
          </PageIntro>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CreditCard className="h-8 w-8 text-primary mb-2" />
                <CardTitle>12 Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive security requirements organized into 6 control objectives covering network security, 
                  data protection, and monitoring.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Cardholder Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Protect Primary Account Numbers (PAN), cardholder names, expiration dates, and service codes 
                  throughout storage and transmission.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Flexible Validation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Validate compliance through Self-Assessment Questionnaires (SAQs), QSA on-site assessments, 
                  or Internal Security Assessor (ISA) reviews.
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
              framework="pci-dss"
              frameworkLabel="PCI DSS"
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
            {pciDssPersonas.map((persona, index) => {
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
        framework="pci-dss"
        personas={personasWithDetails}
        totalSteps={totalSteps}
      />

      {/* Personalized Training Path */}
      <FrameworkPersonalizedPath 
        framework="pci-dss" 
        personas={pciDssPersonas}
      />

      {/* Persona Selection */}
      <div id="persona-selection">
        <PersonaGrid
          personas={pciDssPersonas}
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
              "How to scope and define your Cardholder Data Environment (CDE)",
              "How to implement all 12 PCI DSS requirements across 6 control objectives",
              "How to select and complete the appropriate Self-Assessment Questionnaire (SAQ)",
              "How to prepare for QSA on-site assessments and ASV quarterly scans",
              "How to manage encryption, access controls, and logging for cardholder data",
              "How to implement network segmentation and secure system configurations",
              "How to maintain ongoing compliance and prepare for annual validation"
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
