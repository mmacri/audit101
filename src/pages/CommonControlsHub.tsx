import { useState } from "react";
import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { AcademyHero } from "@/components/shared/AcademyHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { controlMappings, ControlMapping } from "@/data/commonControls/mappingData";
import { Input } from "@/components/ui/input";
import { Search, Filter, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CommonControlsHub() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFramework, setSelectedFramework] = useState<string | null>(null);

  const frameworks = [
    { id: "cip", label: "NERC CIP", color: "bg-blue-500" },
    { id: "nist80053", label: "NIST 800-53", color: "bg-purple-500" },
    { id: "cisControls", label: "CIS Controls", color: "bg-teal-500" },
    { id: "nistCsf", label: "NIST CSF", color: "bg-amber-500" },
    { id: "soxItgc", label: "SOX ITGC", color: "bg-rose-500" }
  ];

  const filteredMappings = controlMappings.filter(mapping => {
    const matchesSearch = !searchTerm || 
      mapping.family.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mapping.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mapping.cip.some(item => item.toLowerCase().includes(searchTerm.toLowerCase())) ||
      mapping.nist80053.some(item => item.toLowerCase().includes(searchTerm.toLowerCase())) ||
      mapping.cisControls.some(item => item.toLowerCase().includes(searchTerm.toLowerCase())) ||
      mapping.nistCsf.some(item => item.toLowerCase().includes(searchTerm.toLowerCase())) ||
      mapping.soxItgc.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFramework = !selectedFramework ||
      (mapping[selectedFramework as keyof ControlMapping] as string[]).length > 0;
    
    return matchesSearch && matchesFramework;
  });

  return (
    <AcademyLayout
      academyName="Common Controls Hub"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "Common Controls Hub" }
      ]}
    >
      <AcademyHero
        title="Common Controls Hub"
        subtitle="See how your security and compliance controls map across CIP, NIST 800-53, CIS Controls, NIST CSF, and SOX ITGC to reduce duplication and improve audit readiness."
        primaryCta="Explore control mappings"
        primaryAction={() => {
          const element = document.getElementById('mapping-section');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Why Common Controls Matter */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Why Common Controls Matter
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Many frameworks share the same underlying security intent. A well-designed common control library reduces duplicate work, scattered evidence, and allows you to satisfy multiple frameworks with a single control implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Reduce Redundancy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Implement access controls once and map them to CIP-004, NIST 800-53 AC family, CIS Control 5, CSF PR.AC, and SOX logical access requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Centralize Evidence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Collect log samples, configuration exports, and access reviews once, then tag them to multiple frameworks for streamlined audit prep.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Multi-Framework Audits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Prepare for assessments across multiple standards simultaneously by understanding where controls overlap and where unique requirements exist.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Control Family Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Cross-Framework Control Families
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We've organized security controls into 10 canonical families that span all major frameworks. Each family represents a core security discipline that appears across CIP, NIST, CIS, CSF, and SOX.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {controlMappings.map((mapping, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{mapping.family}</CardTitle>
                  <CardDescription>{mapping.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Mapping Table */}
      <section id="mapping-section" className="py-16 bg-background">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Interactive Control Mapping
          </h2>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search controls across all frameworks (e.g., 'CIP-004', 'access control', 'AC-2')..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2 flex-wrap items-center">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Button
                variant={selectedFramework === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFramework(null)}
              >
                All
              </Button>
              {frameworks.map(fw => (
                <Button
                  key={fw.id}
                  variant={selectedFramework === fw.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFramework(fw.id === selectedFramework ? null : fw.id)}
                >
                  {fw.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Mapping Cards */}
          <div className="space-y-6">
            {filteredMappings.map((mapping, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle>{mapping.family}</CardTitle>
                  <CardDescription>{mapping.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {/* NERC CIP */}
                    {mapping.cip.length > 0 && (
                      <div>
                        <Badge className="mb-2 bg-blue-500">NERC CIP</Badge>
                        <ul className="space-y-1 ml-4">
                          {mapping.cip.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* NIST 800-53 */}
                    {mapping.nist80053.length > 0 && (
                      <div>
                        <Badge className="mb-2 bg-purple-500">NIST 800-53</Badge>
                        <ul className="space-y-1 ml-4">
                          {mapping.nist80053.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CIS Controls */}
                    {mapping.cisControls.length > 0 && (
                      <div>
                        <Badge className="mb-2 bg-teal-500">CIS Controls</Badge>
                        <ul className="space-y-1 ml-4">
                          {mapping.cisControls.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* NIST CSF */}
                    {mapping.nistCsf.length > 0 && (
                      <div>
                        <Badge className="mb-2 bg-amber-500">NIST CSF</Badge>
                        <ul className="space-y-1 ml-4">
                          {mapping.nistCsf.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* SOX ITGC */}
                    {mapping.soxItgc.length > 0 && (
                      <div>
                        <Badge className="mb-2 bg-rose-500">SOX ITGC</Badge>
                        <ul className="space-y-1 ml-4">
                          {mapping.soxItgc.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Build a Common Control Library */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            How to Build a Common Control Library
          </h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Define Canonical Control Statements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Write control descriptions that capture the security intent shared across frameworks. Example: "Access Control - User Provisioning: New user accounts are created only upon authorized request, granted least privilege access, and documented in the access control system."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Map Framework-Specific Citations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For each canonical control, document which specific framework requirements it satisfies. Use this mapping table as your starting point, then customize based on your organization's tailoring.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Collect Evidence Once, Tag to Multiple Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Organize your evidence repository by canonical control family. Tag each artifact (screenshots, logs, access reviews, change tickets) to the relevant framework citations. One piece of evidence can satisfy multiple requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Design Multi-Framework Audits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  When preparing for assessments, group controls by canonical family rather than by framework. This allows you to conduct walkthroughs and testing once while addressing requirements from CIP, NIST, CIS, CSF, and SOX simultaneously.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Links to Academies */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Explore Framework-Specific Academies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "NERC CIP Readiness Academy", path: "/nerc-cip" },
              { name: "NIST 800-53 Readiness Academy", path: "/nist-800-53" },
              { name: "CIS Controls Readiness Academy", path: "/cis-controls" },
              { name: "NIST CSF Readiness Academy", path: "/nist-csf" },
              { name: "SOX ITGC Readiness Academy", path: "/sox-itgc" }
            ].map((academy) => (
              <Card
                key={academy.path}
                className="hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => navigate(academy.path)}
              >
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors flex items-center justify-between">
                    {academy.name}
                    <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AcademyLayout>
  );
}
