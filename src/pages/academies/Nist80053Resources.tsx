import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Download, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Nist80053Resources() {
  const navigate = useNavigate();

  return (
    <AcademyLayout
      academyName="NIST 800-53 Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "NIST 800-53", path: "/nist-800-53" },
        { label: "Resources" }
      ]}
      showBackButton
    >
      <div className="py-12 bg-gradient-to-br from-primary/5 to-background">
        <div className="container max-w-5xl">
          <h1 className="text-4xl font-bold text-navy mb-3">
            NIST 800-53 Resources & Templates
          </h1>
          <p className="text-xl text-muted-foreground">
            Templates, guides, and official documentation to support your NIST 800-53 compliance journey
          </p>
        </div>
      </div>

      <div className="py-12 bg-background">
        <div className="container max-w-5xl">
          {/* Official Documentation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Official NIST Documentation
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">NIST SP 800-53 Rev. 5</CardTitle>
                  <CardDescription>Security and Privacy Controls for Information Systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf', '_blank')}>
                    View Official Publication <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">NIST SP 800-53A Rev. 5</CardTitle>
                  <CardDescription>Assessing Security and Privacy Controls</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://csrc.nist.gov/publications/detail/sp/800-53a/rev-5/final', '_blank')}>
                    View Assessment Procedures <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">NIST SP 800-53B</CardTitle>
                  <CardDescription>Control Baselines for Information Systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://csrc.nist.gov/publications/detail/sp/800-53b/final', '_blank')}>
                    View Baselines <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">NIST SP 800-137</CardTitle>
                  <CardDescription>Information Security Continuous Monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://csrc.nist.gov/publications/detail/sp/800-137/final', '_blank')}>
                    View Monitoring Guide <ExternalLink className="h-4 w-4" />
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
                "System Security Plan (SSP) Template",
                "Control Implementation Worksheet",
                "Control Mapping Matrix (800-53 to Systems)",
                "Evidence Collection Tracker",
                "POA&M (Plan of Action & Milestones) Tracker",
                "System Boundary Definition Template",
                "FIPS 199 Categorization Worksheet",
                "Control Assessment Checklist",
                "Continuous Monitoring Plan Template"
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
              <Button variant="outline" className="justify-start h-auto py-4" onClick={() => navigate('/nist-800-53')}>
                Back to NIST 800-53 Home
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
