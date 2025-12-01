import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Download, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NistCsfResources() {
  const navigate = useNavigate();

  return (
    <AcademyLayout
      academyName="NIST CSF Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "NIST CSF", path: "/nist-csf" },
        { label: "Resources" }
      ]}
      showBackButton
    >
      <div className="py-12 bg-gradient-to-br from-primary/5 to-background">
        <div className="container max-w-5xl">
          <h1 className="text-4xl font-bold text-navy mb-3">
            NIST CSF Resources & Templates
          </h1>
          <p className="text-xl text-muted-foreground">
            Templates, guides, and official resources to build and assess NIST Cybersecurity Framework profiles
          </p>
        </div>
      </div>

      <div className="py-12 bg-background">
        <div className="container max-w-5xl">
          {/* Official NIST CSF Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Official NIST CSF Documentation
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">NIST CSF 2.0</CardTitle>
                  <CardDescription>The Cybersecurity Framework Core and Implementation Resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf', '_blank')}>
                    View CSF 2.0 Publication <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">CSF Quick Start Guide</CardTitle>
                  <CardDescription>Getting started with the Framework</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.nist.gov/cyberframework/getting-started', '_blank')}>
                    View Quick Start Guide <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">CSF Online Learning</CardTitle>
                  <CardDescription>Interactive modules on the 6 Functions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.nist.gov/cyberframework/getting-started/online-learning', '_blank')}>
                    Access Online Learning <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">CSF Assessment Resources</CardTitle>
                  <CardDescription>Tools and guidance for self-assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.nist.gov/cyberframework/assessment-auditing-resources', '_blank')}>
                    View Assessment Resources <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Templates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Downloadable Templates
            </h2>
            <div className="space-y-3">
              {[
                "CSF Profile Workbook (Current & Target State)",
                "CSF Implementation Tracker by Function",
                "CSF Gap Analysis Template",
                "CSF Tier Assessment Worksheet",
                "Function-by-Function Implementation Checklist",
                "CSF Governance Charter Template",
                "CSF Metrics Dashboard Template",
                "Profile Gap Roadmap Template",
                "Stakeholder Engagement Plan"
              ].map((template, idx) => (
                <Card key={idx} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <Download className="h-5 w-5 text-primary" />
                      <span className="font-medium">{template}</span>
                    </div>
                    <Button size="sm" variant="ghost">Download</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Quick Links */}
          <section>
            <h2 className="text-2xl font-bold text-navy mb-6">Quick Links</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto py-4" onClick={() => navigate('/nist-csf')}>
                Back to NIST CSF Home
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4" onClick={() => navigate('/common-controls')}>
                View Common Controls Hub
              </Button>
            </div>
          </section>
        </div>
      </div>
    </AcademyLayout>
  );
}
