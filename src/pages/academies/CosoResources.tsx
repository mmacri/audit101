import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Download, BookOpen, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CosoResources() {
  const navigate = useNavigate();

  return (
    <AcademyLayout
      academyName="COSO Framework Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "COSO", path: "/coso" },
        { label: "Resources" }
      ]}
      showBackButton
    >
      <div className="py-12 bg-gradient-to-br from-violet-500/5 to-background">
        <div className="container max-w-5xl">
          <h1 className="text-4xl font-bold mb-3">
            COSO Resources & Templates
          </h1>
          <p className="text-xl text-muted-foreground">
            Templates, guides, and official documentation to support your internal control and risk management programs
          </p>
        </div>
      </div>

      <div className="py-12 bg-background">
        <div className="container max-w-5xl">
          {/* Official Documentation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-violet-500" />
              Official COSO Frameworks
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Internal Control - Integrated Framework (2013)</CardTitle>
                  <CardDescription>The foundation for effective internal control</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.coso.org/guidance-on-internal-control', '_blank')}>
                    View Framework <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Enterprise Risk Management Framework</CardTitle>
                  <CardDescription>Integrating Strategy and Performance (2017)</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.coso.org/guidance-on-erm', '_blank')}>
                    View Framework <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Fraud Risk Management Guide</CardTitle>
                  <CardDescription>Practical guidance for fraud risk assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.coso.org/guidance-on-fraud-risk-management', '_blank')}>
                    View Guide <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Supply Chain Risk Management</CardTitle>
                  <CardDescription>Applying COSO ERM to supply chain</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.coso.org/guidance-on-supply-chain', '_blank')}>
                    View Guidance <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Downloadable Templates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-violet-500" />
              Downloadable Templates
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Control Matrix Template</CardTitle>
                  <CardDescription>Document controls mapped to principles and objectives</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Risk Assessment Workbook</CardTitle>
                  <CardDescription>Identify and assess risks to organizational objectives</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Control Testing Documentation</CardTitle>
                  <CardDescription>Document control design and operating effectiveness</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Deficiency Tracking Log</CardTitle>
                  <CardDescription>Track and remediate control deficiencies</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Management Assessment Report</CardTitle>
                  <CardDescription>Document management's assessment of internal control</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Segregation of Duties Matrix</CardTitle>
                  <CardDescription>Document incompatible duties and mitigating controls</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Principles Assessment Checklist</CardTitle>
                  <CardDescription>Assess presence and functioning of 17 principles</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">IT General Controls (ITGC) Pack</CardTitle>
                  <CardDescription>Templates for access, change, and operations controls</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Download Pack
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Additional Resources */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Building2 className="h-6 w-6 text-violet-500" />
              Additional Resources
            </h2>
            <div className="space-y-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">COSO Thought Papers</CardTitle>
                  <CardDescription>Practical guidance on emerging topics in internal control and ERM</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.coso.org/thought-leadership', '_blank')}>
                    View Papers <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Implementation Guides</CardTitle>
                  <CardDescription>Step-by-step guidance for implementing COSO frameworks</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.coso.org/guidance', '_blank')}>
                    View Guides <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Case Studies & Examples</CardTitle>
                  <CardDescription>Real-world applications of COSO principles</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.coso.org/resources', '_blank')}>
                    View Case Studies <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">SOX Compliance Resources</CardTitle>
                  <CardDescription>Applying COSO to Sarbanes-Oxley Section 404</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.coso.org/guidance-on-sox', '_blank')}>
                    View Resources <ExternalLink className="h-4 w-4" />
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
