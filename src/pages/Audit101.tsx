import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { GlobalNav } from "@/components/shared/GlobalNav";
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
  Layers,
  CreditCard,
  HeartPulse,
  Building2,
  Award,
  TrendingUp
} from "lucide-react";

export default function Audit101() {
  const navigate = useNavigate();

  const academies = [
    {
      name: "NERC CIP Readiness Academy",
      path: "/nerc-cip",
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
      name: "ISO 27001 Readiness Academy",
      path: "/iso-27001",
      icon: Shield,
      color: "bg-indigo-500",
      description: "Information Security Management System (ISMS) certification and compliance",
      personas: ["Practitioners", "Tool Owners", "Leaders", "Auditors"]
    },
    {
      name: "PCI DSS Readiness Academy",
      path: "/pci-dss",
      icon: CreditCard,
      color: "bg-cyan-500",
      description: "Payment Card Industry Data Security Standard for cardholder data protection",
      personas: ["Practitioners", "Tool Owners", "Leaders", "Auditors"]
    },
    {
      name: "SOX ITGC Readiness Academy",
      path: "/sox-itgc",
      icon: Users,
      color: "bg-rose-500",
      description: "IT General Controls for Sarbanes-Oxley compliance",
      personas: ["Practitioners", "Tool Owners", "Leaders", "Auditors"]
    },
    {
      name: "HIPAA Readiness Academy",
      path: "/hipaa",
      icon: HeartPulse,
      color: "bg-emerald-500",
      description: "Healthcare data protection and privacy compliance",
      personas: ["Practitioners", "Tool Owners", "Leaders", "Auditors"]
    },
    {
      name: "COSO Framework Academy",
      path: "/coso",
      icon: Building2,
      color: "bg-violet-500",
      description: "Internal controls and enterprise risk management",
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
        { label: "Audit 101 Dashboard" }
      ]}
    >
      <GlobalNav />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container max-w-6xl text-center">
          <Badge className="mb-4 text-lg px-4 py-1">Your Path to Audit Readiness</Badge>
          <h1 className="text-5xl font-bold text-navy mb-6">
            Audit101 – Guided Training for Compliance Success
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Master compliance frameworks and audit readiness with structured, role-specific learning paths. 
            Choose your framework or role, follow 7 proven steps, and build real-world expertise.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => {
              const element = document.getElementById('start-here');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Target className="mr-2 h-5 w-5" />
              Start Here
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/how-it-works")}>
              <BookOpen className="mr-2 h-5 w-5" />
              How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Start Here Section */}
      <section id="start-here" className="py-16 bg-background">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Start Here</Badge>
            <h2 className="text-3xl font-bold text-navy mb-4">
              How Audit101 Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A simple 3-step process to master any compliance framework
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">1</span>
                </div>
                <CardTitle className="text-xl">Choose Your Path</CardTitle>
                <CardDescription className="text-base">
                  Select a framework (NERC CIP, ISO 27001, etc.) or choose your role (Auditor, Practitioner, etc.)
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">2</span>
                </div>
                <CardTitle className="text-xl">Follow 7 Steps</CardTitle>
                <CardDescription className="text-base">
                  Complete structured learning steps with clear actions, outputs, and knowledge checks
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">3</span>
                </div>
                <CardTitle className="text-xl">Track & Certify</CardTitle>
                <CardDescription className="text-base">
                  Monitor progress, earn badges, and download completion certificates
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => navigate("/how-it-works")}>
              Learn More About How It Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Two Learning Modes */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Choose Your Learning Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Learn by framework for deep expertise, or by role for cross-framework skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all border-2 border-primary/20">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">Learn by Framework</CardTitle>
                <CardDescription className="text-base">
                  Deep dive into a specific compliance framework
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Perfect when you need comprehensive knowledge of NERC CIP, NIST CSF, ISO 27001, PCI DSS, HIPAA, COSO, or SOX ITGC. 
                  Each framework offers 4 role-specific paths (Practitioners, Tool Owners, Leaders, Auditors).
                </p>
                <Button 
                  className="w-full"
                  onClick={() => {
                    const element = document.getElementById('academies');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Browse Frameworks <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-2 border-secondary/20">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Learn by Role</CardTitle>
                <CardDescription className="text-base">
                  Build expertise specific to your job function
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Ideal for developing skills as an internal auditor, IT/cyber auditor, compliance officer, or risk manager 
                  across all frameworks. Learn once, apply everywhere.
                </p>
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    const element = document.getElementById('personas');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View All Roles <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Role Overview */}
      <section id="personas" className="py-16 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Role-Based Paths</Badge>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Four Role-Based Learning Paths
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each path provides comprehensive training tailored to your specific responsibilities in audit, compliance, and risk management
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
      <section id="academies" className="py-16 bg-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Framework Learning Paths</Badge>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Choose Your Compliance Framework
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Select the framework(s) most relevant to your organization. Each provides complete training with role-specific 7-step learning paths.
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

      {/* Progress Tracking & Achievements */}
      <section className="py-16 bg-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Track Your Progress</Badge>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Measure Your Learning Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Track progress across frameworks, earn achievements, and download certificates as you complete learning paths
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate("/progress")}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                  <TrendingUp className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle>Progress Dashboard</CardTitle>
                <CardDescription>
                  Track completion across all frameworks and learning paths
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between">
                  View Progress
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate("/achievements")}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3">
                  <Award className="h-6 w-6 text-amber-500" />
                </div>
                <CardTitle>Achievements & Badges</CardTitle>
                <CardDescription>
                  Earn badges as you complete milestones and modules
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between">
                  View Achievements
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate("/certificate")}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
                  <FileCheck className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle>Certificates</CardTitle>
                <CardDescription>
                  Download completion certificates for your training records
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between">
                  View Certificates
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
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

            <Card>
              <CardHeader>
                <CardTitle>5. Track Progress & Earn Certificates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Monitor your completion across all learning paths, earn achievement badges, and download certificates to validate your training.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AcademyLayout>
  );
}
