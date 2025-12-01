import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { GlobalNav } from "@/components/shared/GlobalNav";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  FileSearch, 
  ArrowRight, 
  RefreshCw,
  BookOpen,
  FolderSearch,
  AlertCircle
} from "lucide-react";

type CIPStandard = 'CIP-002' | 'CIP-004' | 'CIP-005' | 'CIP-006' | 'CIP-007' | 'CIP-010' | 'CIP-011' | 'CIP-013';
type Role = 'compliance' | 'it-ot' | 'physical-security' | 'hr-training' | 'leadership';
type SystemType = 'control-center' | 'relay' | 'firewall' | 'rtu' | 'workstation' | 'server';

interface AuditRequest {
  request: string;
  standard: CIPStandard;
  relevantModule: number;
  evidenceLabSection?: string;
}

const standardRequests: Record<CIPStandard, AuditRequest[]> = {
  'CIP-002': [
    { request: "Provide your complete BES Cyber System inventory with impact ratings and justifications for each categorization.", standard: 'CIP-002', relevantModule: 2 },
    { request: "Show documentation of your most recent annual review of BES Cyber System categorizations.", standard: 'CIP-002', relevantModule: 2 },
    { request: "Provide evidence of the methodology used to identify BES Cyber Assets, including the 15-minute impact assessment.", standard: 'CIP-002', relevantModule: 2 },
    { request: "List all assets removed from or added to scope in the past 12 months with supporting rationale.", standard: 'CIP-002', relevantModule: 2 }
  ],
  'CIP-004': [
    { request: "Provide training completion records for all personnel with authorized electronic access to BES Cyber Systems.", standard: 'CIP-004', relevantModule: 4 },
    { request: "Show personnel risk assessment (PRA) completion dates and 7-year update schedules for current personnel.", standard: 'CIP-004', relevantModule: 4 },
    { request: "Provide evidence of quarterly security awareness communications sent to all personnel with CIP access.", standard: 'CIP-004', relevantModule: 4 },
    { request: "Show access revocation records for the past 6 months, demonstrating compliance with 24-hour revocation requirements.", standard: 'CIP-004', relevantModule: 4 },
    { request: "Provide documentation showing that training was completed BEFORE authorized access was granted for recent new hires.", standard: 'CIP-004', relevantModule: 4 }
  ],
  'CIP-005': [
    { request: "Provide network diagrams showing all Electronic Security Perimeter boundaries and access points.", standard: 'CIP-005', relevantModule: 5 },
    { request: "Show documentation of all inbound and outbound access permissions at ESP access points with business justification.", standard: 'CIP-005', relevantModule: 5 },
    { request: "Provide evidence of remote access session logging and monitoring procedures.", standard: 'CIP-005', relevantModule: 5 },
    { request: "Show firewall rule review documentation from the past 15 months.", standard: 'CIP-005', relevantModule: 5 }
  ],
  'CIP-006': [
    { request: "Provide Physical Security Perimeter access logs for all entry points for the past 90 days.", standard: 'CIP-006', relevantModule: 5 },
    { request: "Show visitor logs including entry/exit times, escort names, and visit purposes.", standard: 'CIP-006', relevantModule: 5 },
    { request: "Provide evidence of physical access revocation within 24 hours for terminated personnel.", standard: 'CIP-006', relevantModule: 5 },
    { request: "Show documentation of your physical access control system testing and maintenance.", standard: 'CIP-006', relevantModule: 5 }
  ],
  'CIP-007': [
    { request: "Provide patch assessment records for the past 6 months showing all patches were assessed within 35 days.", standard: 'CIP-007', relevantModule: 6 },
    { request: "Show security log review documentation demonstrating reviews at required intervals.", standard: 'CIP-007', relevantModule: 6 },
    { request: "Provide documentation of enabled ports and services on BES Cyber Systems with business justification.", standard: 'CIP-007', relevantModule: 6 },
    { request: "Show evidence of malicious code prevention methods and signature update processes.", standard: 'CIP-007', relevantModule: 6 },
    { request: "Provide mitigation plans for any patches that were assessed but not implemented.", standard: 'CIP-007', relevantModule: 6 }
  ],
  'CIP-010': [
    { request: "Provide baseline configuration documentation for a sample of BES Cyber Systems.", standard: 'CIP-010', relevantModule: 8 },
    { request: "Show change control records demonstrating approval, testing, and verification for recent configuration changes.", standard: 'CIP-010', relevantModule: 8 },
    { request: "Provide vulnerability assessment reports from the past 15 months with remediation action plans.", standard: 'CIP-010', relevantModule: 8 },
    { request: "Show evidence that baselines were updated within 30 days of completing configuration changes.", standard: 'CIP-010', relevantModule: 8 },
    { request: "Provide Transient Cyber Asset management documentation and protection records.", standard: 'CIP-010', relevantModule: 8 }
  ],
  'CIP-011': [
    { request: "Provide your BES Cyber System Information (BCSI) inventory identifying where sensitive information is stored.", standard: 'CIP-011', relevantModule: 9 },
    { request: "Show access authorization records for personnel with access to BCSI.", standard: 'CIP-011', relevantModule: 9 },
    { request: "Provide evidence of BCSI disposal methods and records.", standard: 'CIP-011', relevantModule: 9 }
  ],
  'CIP-013': [
    { request: "Provide your supply chain cyber security risk management plan.", standard: 'CIP-013', relevantModule: 9 },
    { request: "Show evidence of vendor risk assessments for critical suppliers.", standard: 'CIP-013', relevantModule: 9 },
    { request: "Provide documentation of software integrity verification processes for vendor-supplied software.", standard: 'CIP-013', relevantModule: 9 },
    { request: "Show vendor notification procedures for security incidents affecting your products.", standard: 'CIP-013', relevantModule: 9 }
  ]
};

const roleSpecificRequests: Record<Role, AuditRequest[]> = {
  'compliance': [
    { request: "Provide evidence of the CIP Senior Manager's policy approval within the 15-month review cycle.", standard: 'CIP-002', relevantModule: 3 },
    { request: "Show delegation of authority documentation for all CIP-related responsibilities.", standard: 'CIP-002', relevantModule: 3 }
  ],
  'it-ot': [
    { request: "Walk me through your patch deployment process for a recent critical patch.", standard: 'CIP-007', relevantModule: 6 },
    { request: "Demonstrate how you verify baseline configuration after a system change.", standard: 'CIP-010', relevantModule: 8 }
  ],
  'physical-security': [
    { request: "Show me how a visitor is processed through the PSP entry procedure.", standard: 'CIP-006', relevantModule: 5 },
    { request: "Provide physical access control system alarm response documentation.", standard: 'CIP-006', relevantModule: 5 }
  ],
  'hr-training': [
    { request: "Show how you track and report on training completion status for the CIP Senior Manager.", standard: 'CIP-004', relevantModule: 4 },
    { request: "Provide your personnel risk assessment process documentation.", standard: 'CIP-004', relevantModule: 4 }
  ],
  'leadership': [
    { request: "Describe how compliance status is communicated to executive leadership.", standard: 'CIP-002', relevantModule: 10 },
    { request: "Show evidence of resource allocation for CIP program improvements.", standard: 'CIP-002', relevantModule: 3 }
  ]
};

const systemTypeRequests: Record<SystemType, AuditRequest[]> = {
  'control-center': [
    { request: "Provide the baseline configuration for this control center server including installed software and enabled services.", standard: 'CIP-010', relevantModule: 8 },
    { request: "Show the ESP boundary documentation for this control center network.", standard: 'CIP-005', relevantModule: 5 }
  ],
  'relay': [
    { request: "Provide firmware version documentation and patch assessment records for this protective relay.", standard: 'CIP-007', relevantModule: 6 }
  ],
  'firewall': [
    { request: "Provide the current firewall ruleset with business justification for each rule.", standard: 'CIP-005', relevantModule: 5 },
    { request: "Show firewall rule review documentation from the past 15 months.", standard: 'CIP-005', relevantModule: 5 }
  ],
  'rtu': [
    { request: "Provide baseline configuration documentation for this RTU including communication settings.", standard: 'CIP-010', relevantModule: 8 }
  ],
  'workstation': [
    { request: "Provide patch status report for this workstation showing current patch level.", standard: 'CIP-007', relevantModule: 6 },
    { request: "Show documentation of enabled ports and services with business justification.", standard: 'CIP-007', relevantModule: 6 }
  ],
  'server': [
    { request: "Provide security log retention evidence demonstrating 90-day retention compliance.", standard: 'CIP-007', relevantModule: 6 },
    { request: "Show backup verification records for this server.", standard: 'CIP-010', relevantModule: 7 }
  ]
};

const roleLabels: Record<Role, string> = {
  'compliance': 'Compliance / Risk Manager',
  'it-ot': 'IT / OT Engineer',
  'physical-security': 'Physical Security',
  'hr-training': 'HR / Training',
  'leadership': 'Leadership'
};

const systemLabels: Record<SystemType, string> = {
  'control-center': 'Control Center Server',
  'relay': 'Protective Relay',
  'firewall': 'Firewall / EAP',
  'rtu': 'RTU / Data Concentrator',
  'workstation': 'HMI Workstation',
  'server': 'Application Server'
};

const moduleNames: Record<number, string> = {
  2: "Asset Identification & Scope",
  3: "Governance & Program Management",
  4: "People & Training",
  5: "Electronic & Physical Perimeters",
  6: "System Security & Patching",
  7: "Incident Response & Recovery",
  8: "Configuration & Vulnerability Management",
  9: "Information Protection & Supply Chain",
  10: "Audit Simulation & Continuous Improvement"
};

export default function AuditSimulator() {
  const [selectedStandards, setSelectedStandards] = useState<CIPStandard[]>([]);
  const [selectedRole, setSelectedRole] = useState<Role | ''>('');
  const [selectedSystem, setSelectedSystem] = useState<SystemType | ''>('');
  const [generatedRequests, setGeneratedRequests] = useState<AuditRequest[]>([]);
  const [hasGenerated, setHasGenerated] = useState(false);

  const standards: CIPStandard[] = ['CIP-002', 'CIP-004', 'CIP-005', 'CIP-006', 'CIP-007', 'CIP-010', 'CIP-011', 'CIP-013'];
  const roles: Role[] = ['compliance', 'it-ot', 'physical-security', 'hr-training', 'leadership'];
  const systems: SystemType[] = ['control-center', 'relay', 'firewall', 'rtu', 'workstation', 'server'];

  const toggleStandard = (standard: CIPStandard) => {
    setSelectedStandards(prev => 
      prev.includes(standard) 
        ? prev.filter(s => s !== standard)
        : [...prev, standard]
    );
  };

  const generateRequests = () => {
    const requests: AuditRequest[] = [];

    // Add standard-specific requests
    selectedStandards.forEach(std => {
      const stdRequests = standardRequests[std];
      // Pick 2-3 random requests per standard
      const shuffled = [...stdRequests].sort(() => 0.5 - Math.random());
      requests.push(...shuffled.slice(0, Math.min(3, shuffled.length)));
    });

    // Add role-specific requests
    if (selectedRole && roleSpecificRequests[selectedRole]) {
      requests.push(...roleSpecificRequests[selectedRole]);
    }

    // Add system-specific requests
    if (selectedSystem && systemTypeRequests[selectedSystem]) {
      requests.push(...systemTypeRequests[selectedSystem]);
    }

    // Shuffle and limit
    const shuffled = [...requests].sort(() => 0.5 - Math.random());
    setGeneratedRequests(shuffled.slice(0, 10));
    setHasGenerated(true);
  };

  const reset = () => {
    setSelectedStandards([]);
    setSelectedRole('');
    setSelectedSystem('');
    setGeneratedRequests([]);
    setHasGenerated(false);
  };

  return (
    <Layout>
      <GlobalNav />
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <FileSearch className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Audit Request Simulator
            </h1>
            <p className="text-lg text-muted-foreground">
              Practice responding to realistic audit evidence requests. Select your scope 
              and see what an auditor might ask for during your next CIP audit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {!hasGenerated ? (
              <div className="space-y-8">
                {/* Standards Selection */}
                <div className="bg-card rounded-xl border border-border/50 p-6">
                  <h2 className="font-semibold text-navy mb-4">1. Select CIP Standards in Scope</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {standards.map(std => (
                      <button
                        key={std}
                        onClick={() => toggleStandard(std)}
                        className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                          selectedStandards.includes(std)
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <Checkbox checked={selectedStandards.includes(std)} />
                        <span className="font-medium">{std}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Role Selection */}
                <div className="bg-card rounded-xl border border-border/50 p-6">
                  <h2 className="font-semibold text-navy mb-4">2. Select Your Role (Optional)</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {roles.map(role => (
                      <button
                        key={role}
                        onClick={() => setSelectedRole(selectedRole === role ? '' : role)}
                        className={`px-4 py-3 rounded-lg border-2 transition-all text-sm ${
                          selectedRole === role
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        {roleLabels[role]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* System Type Selection */}
                <div className="bg-card rounded-xl border border-border/50 p-6">
                  <h2 className="font-semibold text-navy mb-4">3. Select System Type (Optional)</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {systems.map(sys => (
                      <button
                        key={sys}
                        onClick={() => setSelectedSystem(selectedSystem === sys ? '' : sys)}
                        className={`px-4 py-3 rounded-lg border-2 transition-all text-sm ${
                          selectedSystem === sys
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        {systemLabels[sys]}
                      </button>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={generateRequests} 
                  disabled={selectedStandards.length === 0}
                  size="lg"
                  className="w-full"
                >
                  Generate Likely Audit Requests <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Generated Requests */}
                <div className="bg-card rounded-xl border border-border/50 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="font-semibold text-navy">Simulated Audit Requests</h2>
                      <p className="text-sm text-muted-foreground">
                        Based on your selections, here are typical evidence requests you might receive:
                      </p>
                    </div>
                    <Button variant="outline" onClick={reset}>
                      <RefreshCw className="mr-2 h-4 w-4" /> Start Over
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {generatedRequests.map((req, index) => (
                      <div 
                        key={index}
                        className="bg-muted/50 rounded-lg p-4 border border-border/30"
                      >
                        <div className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                            {index + 1}
                          </span>
                          <div className="flex-1">
                            <p className="text-foreground mb-3">{req.request}</p>
                            <div className="flex flex-wrap items-center gap-2 text-xs">
                              <span className="bg-primary/10 text-primary px-2 py-1 rounded font-medium">
                                {req.standard}
                              </span>
                              <Link 
                                to={`/modules#module-${req.relevantModule}`}
                                className="inline-flex items-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded hover:bg-accent/20 transition-colors"
                              >
                                <BookOpen className="h-3 w-3" />
                                Module {req.relevantModule}: {moduleNames[req.relevantModule]}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Preparation Tips</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Practice locating each piece of evidence before the audit</li>
                        <li>• Aim to retrieve any evidence in under 5 minutes</li>
                        <li>• Ensure evidence includes dates, responsible parties, and clear context</li>
                        <li>• Pre-stage evidence packages for common request types</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Related Links */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/evidence-lab"
                    className="flex-1 flex items-center justify-center gap-2 bg-card border border-border px-6 py-4 rounded-xl hover:bg-muted transition-colors"
                  >
                    <FolderSearch className="h-5 w-5 text-accent" />
                    <span className="font-medium">Visit Evidence Lab</span>
                  </Link>
                  <Link
                    to="/readiness-plan"
                    className="flex-1 flex items-center justify-center gap-2 bg-card border border-border px-6 py-4 rounded-xl hover:bg-muted transition-colors"
                  >
                    <FileSearch className="h-5 w-5 text-primary" />
                    <span className="font-medium">Build Readiness Plan</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
