import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Download, BookOpen, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HipaaResources() {
  const navigate = useNavigate();

  return (
    <AcademyLayout
      academyName="HIPAA Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "HIPAA", path: "/hipaa" },
        { label: "Resources" }
      ]}
      showBackButton
    >
      <div className="py-12 bg-gradient-to-br from-emerald-500/5 to-background">
        <div className="container max-w-5xl">
          <h1 className="text-4xl font-bold mb-3">
            HIPAA Resources & Templates
          </h1>
          <p className="text-xl text-muted-foreground">
            Templates, guides, and official documentation to support your HIPAA compliance journey
          </p>
        </div>
      </div>

      <div className="py-12 bg-background">
        <div className="container max-w-5xl">
          {/* Official Documentation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-emerald-500" />
              Official HHS Documentation
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">HIPAA Security Rule</CardTitle>
                  <CardDescription>45 CFR Part 164 Subpart C</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.hhs.gov/hipaa/for-professionals/security/index.html', '_blank')}>
                    View Official Rule <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">HIPAA Privacy Rule</CardTitle>
                  <CardDescription>45 CFR Part 164 Subpart E</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.hhs.gov/hipaa/for-professionals/privacy/index.html', '_blank')}>
                    View Official Rule <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Breach Notification Rule</CardTitle>
                  <CardDescription>45 CFR §§ 164.400-414</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.hhs.gov/hipaa/for-professionals/breach-notification/index.html', '_blank')}>
                    View Official Rule <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Security Risk Assessment Tool</CardTitle>
                  <CardDescription>HHS SRA Tool</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.healthit.gov/topic/privacy-security-and-hipaa/security-risk-assessment-tool', '_blank')}>
                    Download Tool <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Downloadable Templates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-emerald-500" />
              Downloadable Templates
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Security Risk Assessment Template</CardTitle>
                  <CardDescription>Document threats and vulnerabilities to ePHI</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Business Associate Agreement</CardTitle>
                  <CardDescription>BAA template with required HIPAA provisions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Breach Notification Templates</CardTitle>
                  <CardDescription>Individual, HHS, and media notification templates</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Templates
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Notice of Privacy Practices</CardTitle>
                  <CardDescription>HIPAA-compliant NPP template</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Security Policies Pack</CardTitle>
                  <CardDescription>Complete set of HIPAA Security Rule policies</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Pack
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Training Attendance Log</CardTitle>
                  <CardDescription>Track workforce security awareness training</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Additional Resources */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Shield className="h-6 w-6 text-emerald-500" />
              Additional Resources
            </h2>
            <div className="space-y-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">OCR HIPAA Audit Protocol</CardTitle>
                  <CardDescription>Understand what OCR auditors review during HIPAA audits</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.hhs.gov/hipaa/for-professionals/compliance-enforcement/audit/protocol/index.html', '_blank')}>
                    View Protocol <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">OCR Enforcement Results</CardTitle>
                  <CardDescription>Learn from real enforcement actions and settlement agreements</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.hhs.gov/hipaa/for-professionals/compliance-enforcement/agreements/index.html', '_blank')}>
                    View Enforcement Actions <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">HIPAA Security Guidance</CardTitle>
                  <CardDescription>HHS guidance documents and FAQs</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.hhs.gov/hipaa/for-professionals/security/guidance/index.html', '_blank')}>
                    View Guidance <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </AcademyLayout>
  );
}
