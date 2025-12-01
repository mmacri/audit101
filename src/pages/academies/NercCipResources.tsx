import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, BookOpen, Video, Download } from "lucide-react";

export default function NercCipResources() {
  const officialResources = [
    {
      title: "NERC Standards Library",
      description: "Official CIP standards and requirements",
      url: "https://www.nerc.com/pa/Stand/Pages/ReliabilityStandards.aspx",
      icon: FileText,
    },
    {
      title: "NERC Compliance",
      description: "Compliance guidance and FAQs",
      url: "https://www.nerc.com/pa/comp/Pages/default.aspx",
      icon: BookOpen,
    },
    {
      title: "Regional Entities",
      description: "Contact information for Regional Entities",
      url: "https://www.nerc.com/AboutNERC/keyplayers/Pages/Regional-Entities.aspx",
      icon: ExternalLink,
    },
    {
      title: "RSAWs (Audit Worksheets)",
      description: "Official audit worksheets for each standard",
      url: "https://www.nerc.com/pa/comp/Pages/Reliability-Standard-Audit-Worksheets-\(RSAWs\).aspx",
      icon: Download,
    },
  ];

  const trainingResources = [
    {
      title: "NERC CIP Training",
      description: "Official training materials and webinars",
      url: "https://www.nerc.com/pa/comp/Pages/Registration.aspx",
      icon: Video,
    },
  ];

  return (
    <AcademyLayout
      academyName="NERC CIP Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "NERC CIP", path: "/nerc-cip" },
        { label: "Resources" }
      ]}
    >
      <div className="py-12">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">NERC CIP Resources</h1>
            <p className="text-xl text-muted-foreground">
              Official standards, audit worksheets, and compliance guidance
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Official NERC Resources</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {officialResources.map((resource, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <resource.icon className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                      </div>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" asChild className="w-full">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          Visit Resource
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Training & Education</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {trainingResources.map((resource, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <resource.icon className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                      </div>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" asChild className="w-full">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          Visit Resource
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AcademyLayout>
  );
}
