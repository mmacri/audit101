import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Book, ArrowRight, Network } from "lucide-react";

export default function AcademyPortfolio() {
  const navigate = useNavigate();

  const academies = [
    {
      id: "cip",
      name: "CIP Readiness Academy",
      description: "Role-based learning paths to help utilities and critical infrastructure teams prepare for NERC CIP audits with confidence.",
      path: "/",
      icon: Shield,
      color: "text-blue-600"
    },
    {
      id: "nist-800-53",
      name: "NIST 800-53 Readiness Academy",
      description: "Build, assess, and document NIST 800-53 controls for federal systems and high-security environments.",
      path: "/nist-800-53",
      icon: Book,
      color: "text-purple-600"
    },
    {
      id: "cis",
      name: "CIS Controls Readiness Academy",
      description: "Turn the 18 CIS Controls into a practical, role-based action plan for your cyber defense program.",
      path: "/cis-controls",
      icon: Shield,
      color: "text-teal-600"
    },
    {
      id: "csf",
      name: "NIST CSF Readiness Academy",
      description: "Use NIST Cybersecurity Framework to align your security activities with business risk and prepare for assessments.",
      path: "/nist-csf",
      icon: Network,
      color: "text-amber-600"
    },
    {
      id: "sox",
      name: "SOX ITGC Readiness Academy",
      description: "Help IT, finance, and audit teams prepare for SOX ITGC testing with clear controls, evidence, and responsibilities.",
      path: "/sox-itgc",
      icon: Book,
      color: "text-rose-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container max-w-5xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
              Audit Readiness Academy Portfolio
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Role-based learning paths and practical resources to prepare your organization for audits across multiple frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Academy Grid */}
      <section className="py-16 bg-background">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {academies.map((academy) => {
              const Icon = academy.icon;
              return (
                <Card
                  key={academy.id}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                  onClick={() => navigate(academy.path)}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-muted ${academy.color}`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                          {academy.name}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {academy.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full group-hover:bg-primary/10 gap-2">
                      Explore this academy
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common Controls CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Network className="h-10 w-10 text-primary" />
                <div>
                  <CardTitle className="text-2xl mb-2">Common Controls Hub</CardTitle>
                  <CardDescription className="text-base">
                    See how controls map across CIP, NIST 800-53, CIS, CSF, and SOX to reduce duplication and improve audit readiness.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button onClick={() => navigate('/common-controls')} className="gap-2">
                Explore Control Mappings
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">
            Not sure where to start?
          </h2>
          <p className="text-muted-foreground mb-6">
            Begin with the framework most relevant to your industry or compliance requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/')}>
              Start with CIP (Power Utilities)
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/nist-800-53')}>
              Start with NIST 800-53 (Federal/DoD)
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
