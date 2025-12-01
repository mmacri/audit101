import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Download, BookOpen, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Iso27001Resources() {
  const navigate = useNavigate();

  return (
    <AcademyLayout
      academyName="ISO 27001 Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "ISO 27001", path: "/iso-27001" },
        { label: "Resources" }
      ]}
      showBackButton
    >
      <div className="py-12 bg-gradient-to-br from-indigo-500/5 to-background">
        <div className="container max-w-5xl">
          <h1 className="text-4xl font-bold mb-3">
            ISO 27001 Resources & Templates
          </h1>
          <p className="text-xl text-muted-foreground">
            Templates, guides, and official documentation to support your ISO 27001 ISMS implementation and certification
          </p>
        </div>
      </div>

      <div className="py-12 bg-background">
        <div className="container max-w-5xl">
          {/* Official Documentation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-indigo-500" />
              Official ISO Documentation
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">ISO/IEC 27001:2022</CardTitle>
                  <CardDescription>Information Security Management Systems - Requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.iso.org/standard/27001', '_blank')}>
                    View Standard <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">ISO/IEC 27002:2022</CardTitle>
                  <CardDescription>Information Security Controls - Code of Practice</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.iso.org/standard/75652.html', '_blank')}>
                    View Standard <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">ISO/IEC 27005:2022</CardTitle>
                  <CardDescription>Information Security Risk Management Guidance</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.iso.org/standard/80585.html', '_blank')}>
                    View Standard <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">ISO/IEC 27701:2019</CardTitle>
                  <CardDescription>Privacy Information Management - Extension to ISO 27001</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.iso.org/standard/71670.html', '_blank')}>
                    View Standard <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Downloadable Templates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-indigo-500" />
              Downloadable Templates
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Statement of Applicability (SoA)</CardTitle>
                  <CardDescription>Document applicable controls from Annex A</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Risk Assessment Template</CardTitle>
                  <CardDescription>Identify and assess information security risks</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Risk Treatment Plan</CardTitle>
                  <CardDescription>Document risk treatment decisions and actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">ISMS Policy Pack</CardTitle>
                  <CardDescription>Complete set of ISO 27001 required policies</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Pack
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Asset Inventory Template</CardTitle>
                  <CardDescription>Maintain register of information assets</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Internal Audit Checklist</CardTitle>
                  <CardDescription>Conduct internal ISMS audits per ISO 27001</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Incident Response Plan</CardTitle>
                  <CardDescription>Security incident management procedures</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Business Continuity Plan</CardTitle>
                  <CardDescription>ICT readiness for business continuity (A.5.29-5.30)</CardDescription>
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
              <Shield className="h-6 w-6 text-indigo-500" />
              Additional Resources
            </h2>
            <div className="space-y-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">ISO 27001 Transition Guide (2013 to 2022)</CardTitle>
                  <CardDescription>Understand changes in the 2022 revision including new Annex A controls</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.iso.org/standard/27001', '_blank')}>
                    View Transition Guide <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Certification Body Requirements</CardTitle>
                  <CardDescription>ISO/IEC 27006 requirements for ISMS certification bodies</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.iso.org/standard/80800.html', '_blank')}>
                    View Standard <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">NIST-ISO 27001 Mapping</CardTitle>
                  <CardDescription>Crosswalk between NIST Cybersecurity Framework and ISO 27001</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => navigate('/common-controls')}>
                    View Mappings <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Sample ISMS Documentation</CardTitle>
                  <CardDescription>Example documents from successful ISO 27001 implementations</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    View Examples <ExternalLink className="h-4 w-4" />
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
