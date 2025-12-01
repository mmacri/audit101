import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Shield, 
  FileCheck, 
  Network, 
  BarChart3, 
  Users, 
  ArrowRight,
  BookOpen,
  Target,
  Layers
} from "lucide-react";

export default function Audit101() {
  const navigate = useNavigate();

  const academies = [
    {
      name: "NERC CIP Readiness Academy",
      path: "/",
      icon: Shield,
      color: "bg-blue-500",
      description: "Critical Infrastructure Protection for energy sector organizations",
      personas: ["Practitioners", "Tool Owners", "Leaders", "Auditors"]
    },
    {
      name: "NIST 800-53 Readiness Academy",
      path: "/nist-800-53",
      icon: FileCheck,
      color: "bg-purple-500",
      description: "Security and privacy controls for federal information systems",
      personas: ["Practitioners", "Tool Owners", "Leaders", "Auditors"]
    },
    {
      name: "CIS Controls Readiness Academy",
      path: "/cis-controls",
      icon: Network,
      color: "bg-teal-500",
      description: "Prioritized set of actions to protect organizations from cyber attacks",
      personas: ["Practitioners", "Tool Owners", "Leaders", "Auditors"]
    },
    {
      name: "NIST CSF Readiness Academy",
      path: "/nist-csf",
      icon: BarChart3,
      color: "bg-amber-500",
      description: "Cybersecurity Framework for managing and reducing cybersecurity risk",
      personas: ["Practitioners", "Tool Owners", "Leaders", "Auditors"]
    },
    {
      name: "SOX ITGC Readiness Academy",
      path: "/sox-itgc",
      icon: Users,
      color: "bg-rose-500",
      description: "IT General Controls for Sarbanes-Oxley compliance",
      personas: ["Practitioners", "Tool Owners", "Leaders", "Auditors"]
    }
  ];

  const roles = [
    {
      title: "Practitioners",
      description: "Hands-on security and compliance implementers",
      icon: Target,
      focus: "Implementation, testing, and day-to-day operations"
    },
    {
      title: "Tool Owners",
      description: "Technology platform administrators",
      icon: Layers,
      focus: "System configuration, automation, and technical controls"
    },
    {
      title: "Leaders",
      description: "Compliance program managers and executives",
      icon: Users,
      focus: "Strategy, oversight, and stakeholder communication"
    },
    {
      title: "Auditors",
      description: "Internal and external audit professionals",
      icon: FileCheck,
      focus: "Assessment, evidence review, and audit execution"
    }
  ];

  return (
    <AcademyLayout
      academyName="Audit 101"
      breadcrumbs={[
        { label: "Audit 101" }
      ]}
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container max-w-5xl text-center">
          <Badge className="mb-4 text-lg px-4 py-1">Central Training Hub</Badge>
          <h1 className="text-5xl font-bold text-navy mb-6">
            Audit 101: Your Compliance Training Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Navigate to the right training path for your role and framework. From NERC CIP to SOX ITGC, 
            we provide role-specific guidance for practitioners, tool owners, leaders, and auditors.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => {
              const element = document.getElementById('academies');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Academies
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/common-controls")}>
              <Network className="mr-2 h-5 w-5" />
              Common Controls Hub
            </Button>
          </div>
        </div>
      </section>

      {/* Role Overview */}
      <section className="py-16 bg-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Four Role-Based Learning Paths
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each academy is tailored to your specific role in the compliance process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <Card key={role.title} className="text-center hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{role.title}</CardTitle>
                    <CardDescription>{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      <strong>Focus:</strong> {role.focus}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academy Cards */}
      <section id="academies" className="py-16 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Choose Your Framework Academy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Select the compliance framework most relevant to your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {academies.map((academy) => {
              const Icon = academy.icon;
              return (
                <Card 
                  key={academy.path}
                  className="hover:shadow-xl transition-all cursor-pointer group"
                  onClick={() => navigate(academy.path)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-lg ${academy.color} flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {academy.name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {academy.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {academy.personas.map((persona) => (
                        <Badge key={persona} variant="secondary" className="text-xs">
                          {persona}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common Controls Hub CTA */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Network className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Common Controls Hub</CardTitle>
              <CardDescription className="text-base">
                See how your controls map across multiple frameworks to reduce duplication and improve audit readiness
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" onClick={() => navigate("/common-controls")}>
                Explore Control Mappings
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            How to Get Started
          </h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Identify Your Framework</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Determine which compliance framework(s) apply to your organization. Many organizations need to comply with multiple frameworks simultaneously.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Select Your Role Path</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Choose the learning path that matches your responsibilities: Practitioner, Tool Owner, Leader, or Auditor. Each path provides tailored guidance and scenarios.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Follow the Step-by-Step Modules</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Work through interactive modules covering pre-audit preparation, evidence collection, common pitfalls, and audit execution. Track your progress as you learn.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Leverage Common Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Use the Common Controls Hub to understand how controls map across frameworks, reducing duplicate work and centralizing your evidence repository.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AcademyLayout>
  );
}
