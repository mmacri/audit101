import { AcademyHero } from "@/components/shared/AcademyHero";
import { PersonaGrid } from "@/components/shared/PersonaGrid";
import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { personas } from "@/data/hipaa/personas";
import { Shield, FileText, Users, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HipaaHome = () => {
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
      title="HIPAA Readiness Academy"
      description="Master HIPAA compliance with comprehensive training for all roles"
    >
      <AcademyHero
        title="HIPAA Security & Privacy Readiness Academy"
        subtitle="Build comprehensive healthcare data protection and compliance programs"
        description="Navigate HIPAA Privacy Rule, Security Rule, Breach Notification, and enforcement requirements with role-specific training paths designed for healthcare organizations and business associates."
        frameworkName="HIPAA"
        accentColor="emerald"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            HIPAA Framework Overview
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            HIPAA establishes national standards to protect sensitive patient health information
            from being disclosed without patient consent or knowledge.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

          <PersonaGrid personas={personas} frameworkPath="hipaa" />
        </div>
      </section>
    </AcademyLayout>
  );
};

export default HipaaHome;
