import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Download, BookOpen, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PciDssResources() {
  const navigate = useNavigate();

  return (
    <AcademyLayout
      academyName="PCI DSS Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "PCI DSS", path: "/pci-dss" },
        { label: "Resources" }
      ]}
      showBackButton
    >
      <div className="py-12 bg-gradient-to-br from-cyan-500/5 to-background">
        <div className="container max-w-5xl">
          <h1 className="text-4xl font-bold mb-3">
            PCI DSS Resources & Templates
          </h1>
          <p className="text-xl text-muted-foreground">
            Templates, guides, and official documentation to support your PCI DSS v4.0 compliance and validation
          </p>
        </div>
      </div>

      <div className="py-12 bg-background">
        <div className="container max-w-5xl">
          {/* Official Documentation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-cyan-500" />
              Official PCI SSC Documentation
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">PCI DSS v4.0.1</CardTitle>
                  <CardDescription>Payment Card Industry Data Security Standard</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.pcisecuritystandards.org/document_library/', '_blank')}>
                    View Standard <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">SAQ (Self-Assessment Questionnaires)</CardTitle>
                  <CardDescription>All SAQ types A through D with instructions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.pcisecuritystandards.org/document_library/', '_blank')}>
                    Download SAQs <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">PCI DSS v4.0 Summary of Changes</CardTitle>
                  <CardDescription>Understand what changed from v3.2.1 to v4.0</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.pcisecuritystandards.org/document_library/', '_blank')}>
                    View Summary <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Attestation of Compliance (AoC)</CardTitle>
                  <CardDescription>Forms for merchants and service providers</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.pcisecuritystandards.org/document_library/', '_blank')}>
                    Download AoCs <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Downloadable Templates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-cyan-500" />
              Downloadable Templates
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Gap Analysis Template</CardTitle>
                  <CardDescription>Assess current state vs. PCI DSS requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Cardholder Data Flow Diagram</CardTitle>
                  <CardDescription>Document CHD flow through your environment</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Network Segmentation Testing</CardTitle>
                  <CardDescription>Validate CDE isolation from other networks</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Quarterly Network Scans</CardTitle>
                  <CardDescription>Track ASV scan results and remediation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Compensating Controls Worksheet</CardTitle>
                  <CardDescription>Document compensating controls per PCI DSS Appendix B & C</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Customized Approach Worksheet</CardTitle>
                  <CardDescription>Document customized approach controls (v4.0)</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Policy and Procedure Templates</CardTitle>
                  <CardDescription>PCI DSS-compliant policies for all 12 requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Pack
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Security Awareness Training Log</CardTitle>
                  <CardDescription>Track annual security awareness training (Req 12.6)</CardDescription>
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
              <CreditCard className="h-6 w-6 text-cyan-500" />
              Additional Resources
            </h2>
            <div className="space-y-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">PCI DSS v4.0 Scoping and Segmentation</CardTitle>
                  <CardDescription>Guidance on defining CDE scope and network segmentation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.pcisecuritystandards.org/document_library/', '_blank')}>
                    View Guidance <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Prioritized Approach to PCI DSS</CardTitle>
                  <CardDescription>Risk-based approach to prioritize implementation efforts</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.pcisecuritystandards.org/document_library/', '_blank')}>
                    View Prioritized Approach <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Qualified Security Assessor (QSA) List</CardTitle>
                  <CardDescription>Find approved QSAs for your compliance validation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.pcisecuritystandards.org/assessors_and_solutions/qualified_security_assessors', '_blank')}>
                    Search QSAs <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Payment Brand Compliance Programs</CardTitle>
                  <CardDescription>Visa, Mastercard, Amex, Discover compliance program details</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.pcisecuritystandards.org/get_involved/participating_organizations', '_blank')}>
                    View Programs <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">PCI DSS v3.2.1 to v4.0 Transition</CardTitle>
                  <CardDescription>Understand sunset dates and transition requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.pcisecuritystandards.org/standards/pci-dss/pci-dss-v3-2-1-to-v4-0-transition/', '_blank')}>
                    View Transition Guide <ExternalLink className="h-4 w-4" />
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
