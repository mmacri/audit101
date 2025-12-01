import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Download, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CisControlsResources() {
  const navigate = useNavigate();

  return (
    <AcademyLayout
      academyName="CIS Controls Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "CIS Controls", path: "/cis-controls" },
        { label: "Resources" }
      ]}
      showBackButton
    >
      <div className="py-12 bg-gradient-to-br from-primary/5 to-background">
        <div className="container max-w-5xl">
          <h1 className="text-4xl font-bold text-navy mb-3">
            CIS Controls Resources & Templates
          </h1>
          <p className="text-xl text-muted-foreground">
            Templates, tools, and official resources to implement and assess the 18 CIS Controls
          </p>
        </div>
      </div>

      <div className="py-12 bg-background">
        <div className="container max-w-5xl">
          {/* Official CIS Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Official CIS Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">CIS Controls v8</CardTitle>
                  <CardDescription>The 18 CIS Controls and Implementation Groups</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.cisecurity.org/controls/cis-controls-list', '_blank')}>
                    View CIS Controls List <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">CIS-CAT Pro</CardTitle>
                  <CardDescription>Automated configuration assessment tool</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.cisecurity.org/cybersecurity-tools/cis-cat-pro', '_blank')}>
                    Learn About CIS-CAT <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">CIS Benchmarks</CardTitle>
                  <CardDescription>Secure configuration guidelines for systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.cisecurity.org/cis-benchmarks', '_blank')}>
                    Browse Benchmarks <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">CIS Controls Navigator</CardTitle>
                  <CardDescription>Interactive tool to explore controls and safeguards</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.cisecurity.org/controls/cis-controls-navigator', '_blank')}>
                    Open Navigator <ExternalLink className="h-4 w-4" />
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
                "CIS Controls Self-Assessment Workbook",
                "Implementation Group Determination Worksheet",
                "Control Mapping Matrix (18 Controls vs. Assets)",
                "Asset Inventory Template (Hardware & Software)",
                "Secure Configuration Baseline Template",
                "Access Control Matrix Template",
                "Vulnerability Management Workflow",
                "Logging Configuration Guide",
                "CIS Controls Maturity Scorecard"
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
              <Button variant="outline" className="justify-start h-auto py-4" onClick={() => navigate('/cis-controls')}>
                Back to CIS Controls Home
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
