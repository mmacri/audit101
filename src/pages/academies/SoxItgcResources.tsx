import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Download, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SoxItgcResources() {
  const navigate = useNavigate();

  return (
    <AcademyLayout
      academyName="SOX ITGC Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "SOX ITGC", path: "/sox-itgc" },
        { label: "Resources" }
      ]}
      showBackButton
    >
      <div className="py-12 bg-gradient-to-br from-primary/5 to-background">
        <div className="container max-w-5xl">
          <h1 className="text-4xl font-bold text-navy mb-3">
            SOX ITGC Resources & Templates
          </h1>
          <p className="text-xl text-muted-foreground">
            Templates, guides, and frameworks to prepare for SOX ITGC testing and maintain compliance
          </p>
        </div>
      </div>

      <div className="py-12 bg-background">
        <div className="container max-w-5xl">
          {/* Framework Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              SOX & ITGC Framework Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">COSO Internal Control Framework</CardTitle>
                  <CardDescription>Foundation for SOX internal controls</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.coso.org/guidance-on-internal-control', '_blank')}>
                    Learn About COSO <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">PCAOB Auditing Standards</CardTitle>
                  <CardDescription>Public Company Accounting Oversight Board standards</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://pcaobus.org/oversight/standards', '_blank')}>
                    View PCAOB Standards <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">SOX 404 Overview</CardTitle>
                  <CardDescription>Understanding internal control requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://www.sec.gov/spotlight/sarbanes-oxley.htm', '_blank')}>
                    View SEC Resources <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">ITGC Best Practices</CardTitle>
                  <CardDescription>Industry guidance on ITGC implementation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://secureframe.com/blog/sox-itgc', '_blank')}>
                    Read ITGC Guide <ExternalLink className="h-4 w-4" />
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
                "SOX Scoping Worksheet (In-Scope Systems)",
                "ITGC Control Matrix (Logical Access, Change, Operations)",
                "Logical Access Review Template",
                "User Provisioning Checklist",
                "Change Management Process Document",
                "Change Ticket Template with Approvals",
                "Backup and Recovery Checklist",
                "Batch Job Monitoring Template",
                "ITGC Evidence Collection Tracker",
                "SOX Auditor Response Template",
                "ITGC Testing Plan and Workpapers",
                "ITGC Metrics Dashboard"
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
              <Button variant="outline" className="justify-start h-auto py-4" onClick={() => navigate('/sox-itgc')}>
                Back to SOX ITGC Home
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
