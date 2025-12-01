import { AcademyHero } from "@/components/shared/AcademyHero";
import { PersonaGrid } from "@/components/shared/PersonaGrid";
import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { personas } from "@/data/coso/personas";
import { Building2, Target, AlertTriangle, MessageSquare, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CosoHome = () => {
  const components = [
    {
      icon: Building2,
      title: "Control Environment",
      description: "Foundation of internal control system",
    },
    {
      icon: Target,
      title: "Risk Assessment",
      description: "Identify and analyze relevant risks",
    },
    {
      icon: AlertTriangle,
      title: "Control Activities",
      description: "Policies and procedures to mitigate risks",
    },
    {
      icon: MessageSquare,
      title: "Information & Communication",
      description: "Share information to support internal control",
    },
    {
      icon: TrendingUp,
      title: "Monitoring Activities",
      description: "Evaluate quality of internal control over time",
    },
  ];

  return (
    <AcademyLayout
      title="COSO Framework Academy"
      description="Master internal controls and enterprise risk management"
    >
      <AcademyHero
        title="COSO Internal Control Framework Academy"
        subtitle="Build robust internal control and enterprise risk management programs"
        description="Master the COSO Internal Control - Integrated Framework with comprehensive training on the five components and seventeen principles of effective internal control."
        frameworkName="COSO"
        accentColor="violet"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            COSO Framework Components
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            The COSO framework provides a comprehensive approach to internal control,
            helping organizations achieve objectives related to operations, reporting, and compliance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {components.map((component, index) => (
              <Card key={index} className="border-violet-500/20 hover:border-violet-500/40 transition-colors">
                <CardContent className="pt-6">
                  <component.icon className="w-12 h-12 text-violet-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{component.title}</h3>
                  <p className="text-sm text-muted-foreground">{component.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <PersonaGrid personas={personas} frameworkPath="coso" />
        </div>
      </section>
    </AcademyLayout>
  );
};

export default CosoHome;
