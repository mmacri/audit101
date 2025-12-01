import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { GlobalNav } from "@/components/shared/GlobalNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ClipboardList, 
  ArrowRight, 
  Copy, 
  CheckCircle2,
  Printer,
  RotateCcw
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BESSystem {
  name: string;
  impactRating: string;
  location: string;
}

interface RoleResponsibility {
  role: string;
  responsibilities: string;
}

interface Gap {
  description: string;
  remediation: string;
  targetDate: string;
}

export default function ReadinessPlan() {
  const { toast } = useToast();
  const [showPlan, setShowPlan] = useState(false);
  
  // Form state
  const [scopeSummary, setScopeSummary] = useState('');
  const [besSystems, setBesSystems] = useState<BESSystem[]>([
    { name: '', impactRating: 'Medium', location: '' },
    { name: '', impactRating: 'Medium', location: '' },
    { name: '', impactRating: 'Medium', location: '' },
    { name: '', impactRating: 'Medium', location: '' },
    { name: '', impactRating: 'Medium', location: '' }
  ]);
  const [roles, setRoles] = useState<RoleResponsibility[]>([
    { role: 'Compliance Manager', responsibilities: '' },
    { role: 'IT/OT Lead', responsibilities: '' },
    { role: 'Physical Security', responsibilities: '' },
    { role: 'HR/Training', responsibilities: '' },
    { role: 'Leadership Sponsor', responsibilities: '' }
  ]);
  const [evidenceLocations, setEvidenceLocations] = useState({
    training: '',
    patches: '',
    access: '',
    incidents: ''
  });
  const [gaps, setGaps] = useState<Gap[]>([
    { description: '', remediation: '', targetDate: '' },
    { description: '', remediation: '', targetDate: '' },
    { description: '', remediation: '', targetDate: '' }
  ]);

  const updateBESSystem = (index: number, field: keyof BESSystem, value: string) => {
    const updated = [...besSystems];
    updated[index] = { ...updated[index], [field]: value };
    setBesSystems(updated);
  };

  const updateRole = (index: number, field: keyof RoleResponsibility, value: string) => {
    const updated = [...roles];
    updated[index] = { ...updated[index], [field]: value };
    setRoles(updated);
  };

  const updateGap = (index: number, field: keyof Gap, value: string) => {
    const updated = [...gaps];
    updated[index] = { ...updated[index], [field]: value };
    setGaps(updated);
  };

  const generatePlan = () => {
    setShowPlan(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setScopeSummary('');
    setBesSystems([
      { name: '', impactRating: 'Medium', location: '' },
      { name: '', impactRating: 'Medium', location: '' },
      { name: '', impactRating: 'Medium', location: '' },
      { name: '', impactRating: 'Medium', location: '' },
      { name: '', impactRating: 'Medium', location: '' }
    ]);
    setRoles([
      { role: 'Compliance Manager', responsibilities: '' },
      { role: 'IT/OT Lead', responsibilities: '' },
      { role: 'Physical Security', responsibilities: '' },
      { role: 'HR/Training', responsibilities: '' },
      { role: 'Leadership Sponsor', responsibilities: '' }
    ]);
    setEvidenceLocations({
      training: '',
      patches: '',
      access: '',
      incidents: ''
    });
    setGaps([
      { description: '', remediation: '', targetDate: '' },
      { description: '', remediation: '', targetDate: '' },
      { description: '', remediation: '', targetDate: '' }
    ]);
    setShowPlan(false);
  };

  const getPlanText = () => {
    const filledSystems = besSystems.filter(s => s.name.trim());
    const filledGaps = gaps.filter(g => g.description.trim());
    
    return `
CIP READINESS PLAN
Generated: ${new Date().toLocaleDateString()}

================================================================================
SCOPE SUMMARY
================================================================================
${scopeSummary || 'Not provided'}

================================================================================
TOP BES CYBER SYSTEMS
================================================================================
${filledSystems.map((s, i) => `${i + 1}. ${s.name}
   Impact Rating: ${s.impactRating}
   Location: ${s.location || 'Not specified'}`).join('\n\n')}

================================================================================
KEY ROLES & RESPONSIBILITIES
================================================================================
${roles.filter(r => r.responsibilities.trim()).map(r => `${r.role}:
   ${r.responsibilities}`).join('\n\n')}

================================================================================
EVIDENCE REPOSITORIES
================================================================================
Training Records: ${evidenceLocations.training || 'Not specified'}
Patch Records: ${evidenceLocations.patches || 'Not specified'}
Access Records: ${evidenceLocations.access || 'Not specified'}
Incident Records: ${evidenceLocations.incidents || 'Not specified'}

================================================================================
TOP GAPS & REMEDIATION PLANS
================================================================================
${filledGaps.map((g, i) => `Gap ${i + 1}: ${g.description}
   Remediation: ${g.remediation || 'Not specified'}
   Target Date: ${g.targetDate || 'Not specified'}`).join('\n\n')}

================================================================================
This is an informal readiness planning document. It is not a substitute for
a formal CIP compliance program or official audit preparation.
================================================================================
    `.trim();
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getPlanText());
      toast({
        title: "Copied to clipboard",
        description: "Your readiness plan has been copied."
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please select and copy the text manually.",
        variant: "destructive"
      });
    }
  };

  const printPlan = () => {
    window.print();
  };

  return (
    <Layout>
      <GlobalNav />
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-20 print:hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <ClipboardList className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              CIP Readiness Plan Builder
            </h1>
            <p className="text-lg text-muted-foreground">
              Create a simple, actionable readiness plan by documenting your scope, 
              responsibilities, evidence locations, and gaps. This capstone exercise 
              helps you convert learning into action.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {!showPlan ? (
              <div className="space-y-8">
                {/* Section 1: Scope Summary */}
                <div className="bg-card rounded-xl border border-border/50 p-6">
                  <h2 className="font-semibold text-navy mb-2">1. Scope Summary</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Describe your CIP in-scope environment in 3-4 sentences.
                  </p>
                  <Textarea
                    value={scopeSummary}
                    onChange={(e) => setScopeSummary(e.target.value)}
                    placeholder="Example: Our organization operates two control centers and 15 substations with Medium impact BES Cyber Systems. We have approximately 50 personnel with authorized access to CIP-protected assets. Our primary SCADA system controls generation dispatch for 1,200 MW of capacity..."
                    rows={4}
                  />
                </div>

                {/* Section 2: Top 5 BES Cyber Systems */}
                <div className="bg-card rounded-xl border border-border/50 p-6">
                  <h2 className="font-semibold text-navy mb-2">2. Top 5 BES Cyber Systems</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    List your most critical BES Cyber Systems with their impact ratings.
                  </p>
                  <div className="space-y-3">
                    {besSystems.map((sys, index) => (
                      <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <Input
                          value={sys.name}
                          onChange={(e) => updateBESSystem(index, 'name', e.target.value)}
                          placeholder={`System ${index + 1} name`}
                        />
                        <select
                          value={sys.impactRating}
                          onChange={(e) => updateBESSystem(index, 'impactRating', e.target.value)}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="High">High Impact</option>
                          <option value="Medium">Medium Impact</option>
                          <option value="Low">Low Impact</option>
                        </select>
                        <Input
                          value={sys.location}
                          onChange={(e) => updateBESSystem(index, 'location', e.target.value)}
                          placeholder="Location"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3: Key Roles */}
                <div className="bg-card rounded-xl border border-border/50 p-6">
                  <h2 className="font-semibold text-navy mb-2">3. Key Roles & Responsibilities</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Briefly describe the high-level responsibilities for each role.
                  </p>
                  <div className="space-y-4">
                    {roles.map((role, index) => (
                      <div key={index}>
                        <label className="text-sm font-medium text-navy block mb-1">
                          {role.role}
                        </label>
                        <Input
                          value={role.responsibilities}
                          onChange={(e) => updateRole(index, 'responsibilities', e.target.value)}
                          placeholder={`Key responsibilities for ${role.role}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 4: Evidence Repositories */}
                <div className="bg-card rounded-xl border border-border/50 p-6">
                  <h2 className="font-semibold text-navy mb-2">4. Evidence Repositories</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Where is your compliance evidence stored?
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-navy block mb-1">Training Records</label>
                      <Input
                        value={evidenceLocations.training}
                        onChange={(e) => setEvidenceLocations(prev => ({ ...prev, training: e.target.value }))}
                        placeholder="e.g., LMS System, SharePoint/Training"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-navy block mb-1">Patch Records</label>
                      <Input
                        value={evidenceLocations.patches}
                        onChange={(e) => setEvidenceLocations(prev => ({ ...prev, patches: e.target.value }))}
                        placeholder="e.g., ServiceNow, Patch Database"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-navy block mb-1">Access Records</label>
                      <Input
                        value={evidenceLocations.access}
                        onChange={(e) => setEvidenceLocations(prev => ({ ...prev, access: e.target.value }))}
                        placeholder="e.g., Active Directory, PACS System"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-navy block mb-1">Incident Records</label>
                      <Input
                        value={evidenceLocations.incidents}
                        onChange={(e) => setEvidenceLocations(prev => ({ ...prev, incidents: e.target.value }))}
                        placeholder="e.g., Incident Tracking System, SIEM"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 5: Top Gaps */}
                <div className="bg-card rounded-xl border border-border/50 p-6">
                  <h2 className="font-semibold text-navy mb-2">5. Top 3 Gaps & Remediation Plans</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Identify your most significant compliance gaps and how you plan to address them.
                  </p>
                  <div className="space-y-4">
                    {gaps.map((gap, index) => (
                      <div key={index} className="bg-muted/30 rounded-lg p-4 space-y-3">
                        <label className="text-sm font-medium text-navy block">Gap {index + 1}</label>
                        <Input
                          value={gap.description}
                          onChange={(e) => updateGap(index, 'description', e.target.value)}
                          placeholder="Describe the gap"
                        />
                        <Input
                          value={gap.remediation}
                          onChange={(e) => updateGap(index, 'remediation', e.target.value)}
                          placeholder="Planned remediation steps"
                        />
                        <Input
                          type="date"
                          value={gap.targetDate}
                          onChange={(e) => updateGap(index, 'targetDate', e.target.value)}
                          className="max-w-xs"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <Button onClick={generatePlan} size="lg" className="w-full">
                  Generate My Readiness Plan <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Actions */}
                <div className="flex flex-wrap gap-3 print:hidden">
                  <Button onClick={copyToClipboard} variant="outline">
                    <Copy className="mr-2 h-4 w-4" /> Copy to Clipboard
                  </Button>
                  <Button onClick={printPlan} variant="outline">
                    <Printer className="mr-2 h-4 w-4" /> Print / Save as PDF
                  </Button>
                  <Button onClick={resetForm} variant="ghost">
                    <RotateCcw className="mr-2 h-4 w-4" /> Start Over
                  </Button>
                </div>

                {/* Generated Plan */}
                <div className="bg-card rounded-xl border border-border/50 p-8 print:border-none print:p-0">
                  <div className="border-b-2 border-primary pb-4 mb-6">
                    <h1 className="text-2xl font-bold text-navy">CIP Readiness Plan</h1>
                    <p className="text-sm text-muted-foreground">Generated: {new Date().toLocaleDateString()}</p>
                  </div>

                  {/* Scope */}
                  <section className="mb-8">
                    <h2 className="text-lg font-semibold text-navy mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Scope Summary
                    </h2>
                    <p className="text-muted-foreground bg-muted/30 p-4 rounded-lg">
                      {scopeSummary || 'Not provided'}
                    </p>
                  </section>

                  {/* BES Systems */}
                  <section className="mb-8">
                    <h2 className="text-lg font-semibold text-navy mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Top BES Cyber Systems
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 px-3 font-medium text-navy">System</th>
                            <th className="text-left py-2 px-3 font-medium text-navy">Impact</th>
                            <th className="text-left py-2 px-3 font-medium text-navy">Location</th>
                          </tr>
                        </thead>
                        <tbody>
                          {besSystems.filter(s => s.name.trim()).map((sys, i) => (
                            <tr key={i} className="border-b border-border/50">
                              <td className="py-2 px-3">{sys.name}</td>
                              <td className="py-2 px-3">
                                <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                                  sys.impactRating === 'High' ? 'bg-destructive/20 text-destructive' :
                                  sys.impactRating === 'Medium' ? 'bg-warning/20 text-warning-foreground' :
                                  'bg-muted text-muted-foreground'
                                }`}>
                                  {sys.impactRating}
                                </span>
                              </td>
                              <td className="py-2 px-3 text-muted-foreground">{sys.location || '—'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Roles */}
                  <section className="mb-8">
                    <h2 className="text-lg font-semibold text-navy mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Key Roles & Responsibilities
                    </h2>
                    <div className="space-y-3">
                      {roles.filter(r => r.responsibilities.trim()).map((role, i) => (
                        <div key={i} className="bg-muted/30 p-3 rounded-lg">
                          <span className="font-medium text-navy">{role.role}:</span>
                          <span className="text-muted-foreground ml-2">{role.responsibilities}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Evidence */}
                  <section className="mb-8">
                    <h2 className="text-lg font-semibold text-navy mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Evidence Repositories
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {Object.entries(evidenceLocations).map(([key, value]) => (
                        <div key={key} className="bg-muted/30 p-3 rounded-lg">
                          <span className="font-medium text-navy capitalize">{key} Records:</span>
                          <span className="text-muted-foreground ml-2">{value || 'Not specified'}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Gaps */}
                  <section className="mb-8">
                    <h2 className="text-lg font-semibold text-navy mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Top Gaps & Remediation Plans
                    </h2>
                    <div className="space-y-4">
                      {gaps.filter(g => g.description.trim()).map((gap, i) => (
                        <div key={i} className="bg-warning/5 border border-warning/20 p-4 rounded-lg">
                          <p className="font-medium text-navy mb-2">Gap {i + 1}: {gap.description}</p>
                          <p className="text-sm text-muted-foreground mb-1">
                            <strong>Remediation:</strong> {gap.remediation || 'Not specified'}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Target Date:</strong> {gap.targetDate ? new Date(gap.targetDate).toLocaleDateString() : 'Not specified'}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Disclaimer */}
                  <div className="bg-muted/50 p-4 rounded-lg text-xs text-muted-foreground">
                    <strong>Disclaimer:</strong> This is an informal readiness planning document generated 
                    by CIP Readiness Academy. It is not a substitute for a formal CIP compliance program 
                    or official audit preparation materials.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Print styles */}
      <style>{`
        @media print {
          .print\\:hidden { display: none !important; }
          .print\\:border-none { border: none !important; }
          .print\\:p-0 { padding: 0 !important; }
          body { font-size: 12px; }
        }
      `}</style>
    </Layout>
  );
}
