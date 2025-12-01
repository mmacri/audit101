import { Layout } from "@/components/layout/Layout";
import { GlobalNav } from "@/components/shared/GlobalNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Target,
  CheckSquare,
  TrendingUp,
  Users,
  Building2,
  Shield,
  Layers,
  ArrowRight,
  Lightbulb,
  MapPin,
  Trophy
} from "lucide-react";

export default function HowItWorks() {
  const navigate = useNavigate();

  const learningSteps = [
    {
      number: 1,
      icon: MapPin,
      title: "Choose Your Path",
      description: "Select either a specific compliance framework (NERC CIP, ISO 27001, etc.) or choose your role (Internal Auditor, Practitioner, etc.) to get personalized learning.",
      action: "Both approaches are valid—choose what makes most sense for your needs"
    },
    {
      number: 2,
      icon: BookOpen,
      title: "Follow 7 Learning Steps",
      description: "Each path contains 7 structured steps that guide you from fundamentals through implementation to audit readiness.",
      action: "Complete steps at your own pace, marking progress as you go"
    },
    {
      number: 3,
      icon: CheckSquare,
      title: "Check Your Knowledge",
      description: "Test your understanding with knowledge checks and quizzes designed to reinforce key concepts and identify areas for review.",
      action: "Interactive assessments help solidify your learning"
    },
    {
      number: 4,
      icon: Trophy,
      title: "Track & Certify",
      description: "Monitor your progress across all frameworks, earn achievement badges, and download completion certificates for your training records.",
      action: "Your learning journey is tracked and recognized"
    }
  ];

  const frameworks = [
    { name: "NERC CIP", description: "Critical Infrastructure Protection for energy sector", color: "bg-blue-500" },
    { name: "NIST 800-53", description: "Security controls for federal systems", color: "bg-purple-500" },
    { name: "ISO 27001", description: "Information Security Management System", color: "bg-indigo-500" },
    { name: "CIS Controls", description: "Prioritized cybersecurity safeguards", color: "bg-teal-500" },
    { name: "NIST CSF", description: "Cybersecurity Framework", color: "bg-amber-500" },
    { name: "PCI DSS", description: "Payment card data security", color: "bg-cyan-500" },
    { name: "HIPAA", description: "Healthcare data protection", color: "bg-emerald-500" },
    { name: "SOX ITGC", description: "IT General Controls", color: "bg-rose-500" },
    { name: "COSO", description: "Internal control framework", color: "bg-violet-500" }
  ];

  const personas = [
    { 
      title: "Practitioners & Implementers", 
      icon: Target, 
      description: "Hands-on security and compliance implementers who build and maintain controls"
    },
    { 
      title: "Tool Owners & SMEs", 
      icon: Layers, 
      description: "Technology platform administrators who configure systems and automation"
    },
    { 
      title: "Leaders & Executives", 
      icon: Building2, 
      description: "Program managers and executives who provide oversight and strategy"
    },
    { 
      title: "Internal Auditors", 
      icon: Shield, 
      description: "Audit professionals who assess compliance and prepare for external audits"
    }
  ];

  return (
    <Layout>
      <GlobalNav />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container max-w-5xl text-center">
          <Badge className="mb-4 text-lg px-4 py-1">How It Works</Badge>
          <h1 className="text-5xl font-bold mb-6">
            Your Guided Path to Audit Readiness
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Audit101 is a comprehensive training academy designed to help you master compliance frameworks 
            and audit readiness—whether you're learning by framework or by role.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We believe audit readiness shouldn't be overwhelming. Our mission is to provide <strong>clear, structured, 
              role-specific training</strong> that helps organizations build confidence and competence across multiple 
              compliance frameworks—from NERC CIP to ISO 27001, HIPAA to PCI DSS, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - 4 Steps */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How the Learning System Works</h2>
            <p className="text-lg text-muted-foreground">
              A simple, repeatable process that works across all frameworks and roles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {learningSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.number} className="relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                  <CardHeader className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground italic">
                      → {step.action}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Two Learning Modes */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Two Ways to Learn</h2>
            <p className="text-lg text-muted-foreground">
              Choose the approach that fits your needs—or use both!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Framework-Based Learning */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">Learn by Framework</CardTitle>
                <CardDescription className="text-base">
                  Deep dive into a specific compliance framework with role-specific paths
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>Best when:</strong> You need comprehensive knowledge of one specific framework (e.g., NERC CIP, ISO 27001)
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground">Available Frameworks:</p>
                  <div className="flex flex-wrap gap-2">
                    {frameworks.slice(0, 5).map((fw) => (
                      <Badge key={fw.name} variant="outline" className={fw.color + " text-white"}>
                        {fw.name}
                      </Badge>
                    ))}
                    <Badge variant="outline">+4 more</Badge>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground pt-2">
                  Each framework offers 4 persona paths (Practitioners, Tool Owners, Leaders, Auditors) 
                  with 7 structured learning steps.
                </p>

                <Button onClick={() => navigate("/#academies")} className="w-full">
                  Browse Frameworks
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Role-Based Learning */}
            <Card className="border-2 border-secondary/20">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Learn by Role (Persona)</CardTitle>
                <CardDescription className="text-base">
                  Build expertise specific to your job function across all frameworks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>Best when:</strong> You want to develop role-specific skills that apply across multiple frameworks
                </p>
                
                <div className="space-y-3">
                  {personas.map((persona) => {
                    const Icon = persona.icon;
                    return (
                      <div key={persona.title} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                          <Icon className="h-4 w-4 text-secondary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{persona.title}</p>
                          <p className="text-xs text-muted-foreground">{persona.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Button onClick={() => navigate("/#personas")} variant="outline" className="w-full">
                  View All Roles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The 7-Step Structure */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The 7-Step Learning Structure</h2>
            <p className="text-lg text-muted-foreground">
              Every path—whether framework or persona—follows a proven 7-step methodology
            </p>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="text-xl">What Each Step Includes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">📖 What You'll Learn</h4>
                  <p className="text-sm text-muted-foreground">Clear learning objectives and key concepts</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">✅ Actions to Take</h4>
                  <p className="text-sm text-muted-foreground">Specific tasks and implementation guidance</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">📋 Outputs & Artifacts</h4>
                  <p className="text-sm text-muted-foreground">Deliverables and evidence you'll produce</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  <strong>Example 7-Step Path for ISO 27001 Auditors:</strong> 
                  Understanding ISMS → Risk Assessment → Control Implementation → Evidence Collection → 
                  Internal Audits → Pre-Certification Review → Certification Audit Support
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Progress Tracking */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Track Your Progress</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your learning journey is saved automatically. View completion status, earn achievement badges, 
              and download certificates as you master each framework and role.
            </p>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" onClick={() => navigate("/progress")}>
              <TrendingUp className="mr-2 h-5 w-5" />
              View My Progress
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/achievements")}>
              <Trophy className="mr-2 h-5 w-5" />
              View Achievements
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose your path and begin your guided journey to audit readiness
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => navigate("/")}>
              <Shield className="mr-2 h-5 w-5" />
              Browse Frameworks
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/#personas")}>
              <Users className="mr-2 h-5 w-5" />
              View Roles
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
