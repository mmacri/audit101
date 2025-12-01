import { Layout } from "@/components/layout/Layout";
import { GlobalNav } from "@/components/shared/GlobalNav";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Lightbulb,
  ArrowRight
} from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  scenario: string;
  whatHappened: string;
  whatWentWell: string[];
  whatWentWrong: string[];
  whatWedDoDifferently: string[];
  reflectionQuestions: string[];
  relatedModules: number[];
  cipStandards: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "scope-surprise",
    title: "The Scope Surprise: A CIP-002 Wake-Up Call",
    scenario: "A mid-sized utility had been operating their CIP compliance program for three years with what they believed was a complete BES Cyber System inventory. During a routine internal review six weeks before their scheduled audit, an engineer mentioned that a new data historian had been installed at a key substation 18 months earlier.",
    whatHappened: "The historian was capturing real-time operational data from protective relays and was connected to the control network. It had never been included in the CIP-002 asset inventory because the project was managed as an 'IT upgrade' rather than an OT change. The system clearly met the 15-minute impact test and should have been categorized as a Medium impact BES Cyber Asset.",
    whatWentWell: [
      "The internal review process caught the gap before the official audit",
      "Engineering staff felt comfortable raising the concern",
      "Leadership immediately allocated resources to address the issue"
    ],
    whatWentWrong: [
      "The asset acquisition process didn't include a CIP scope review",
      "IT and OT teams weren't communicating about new system deployments",
      "The 18-month gap meant 18 months of missing evidence for that asset"
    ],
    whatWedDoDifferently: [
      "Implement a mandatory CIP scope review for all system acquisitions and changes",
      "Create a cross-functional change advisory board including compliance",
      "Conduct quarterly asset inventory reconciliation with engineering teams",
      "Add CIP scope questions to the project intake process"
    ],
    reflectionQuestions: [
      "How would you discover a similar untracked system in your environment?",
      "What process changes would prevent this gap at your organization?",
      "How would you handle the missing 18 months of compliance evidence?"
    ],
    relatedModules: [2, 3, 8],
    cipStandards: ["CIP-002", "CIP-010"]
  },
  {
    id: "badge-blind-spot",
    title: "The Badge Blind Spot: A Physical Access Finding",
    scenario: "During an audit, the Regional Entity requested physical access logs for a key control center PSP. The utility provided comprehensive entry/exit records showing all badge swipes. However, the auditor noticed something in the visitor logs: a contractor's name appeared three times over two months, but there was no record of their escort or their purpose for each visit.",
    whatHappened: "Investigation revealed that the contractor—an HVAC technician—had been issued a temporary badge that was never properly revoked after his initial authorized visit. Building security had let him in for subsequent visits because he had a valid badge and 'everyone knew him.' The escort requirement had been bypassed because staff assumed someone else was handling it.",
    whatWentWell: [
      "Entry logs were accurate and complete for the PSP access points",
      "The utility had a visitor management policy in place",
      "Staff cooperated fully during the audit investigation"
    ],
    whatWentWrong: [
      "Temporary badge revocation process wasn't followed",
      "Continuous escort requirement was informally waived",
      "No mechanism to flag repeated contractor visits for review",
      "Building security training didn't emphasize CIP escort requirements"
    ],
    whatWedDoDifferently: [
      "Implement automatic badge expiration for all temporary access",
      "Require documented escort assignment before any visitor entry",
      "Train all security personnel specifically on CIP PSP requirements",
      "Create weekly reports of all non-employee PSP access for compliance review"
    ],
    reflectionQuestions: [
      "How would this situation unfold at your facility?",
      "What controls prevent informal 'everyone knows them' access bypasses?",
      "How do you track and review contractor access patterns?"
    ],
    relatedModules: [5, 4],
    cipStandards: ["CIP-006", "CIP-004"]
  },
  {
    id: "emergency-patch",
    title: "The Emergency Patch Predicament",
    scenario: "A critical vulnerability was disclosed affecting the SCADA system used at multiple substations. The vendor released a patch rated as critical, and security news outlets were reporting active exploitation in the wild. The OT team felt pressure to deploy immediately.",
    whatHappened: "The team deployed the patch to production systems within 48 hours, skipping the normal test environment validation and change control approval process. The patch worked correctly and no operational issues occurred. However, three months later during an audit, the auditor asked for change control documentation for that deployment and found none.",
    whatWentWell: [
      "The team responded quickly to a genuine security threat",
      "The patch deployment was technically successful",
      "No operational disruptions occurred",
      "The vulnerability was mitigated before any exploitation"
    ],
    whatWentWrong: [
      "Change control process was completely bypassed",
      "No documentation of the emergency decision rationale",
      "Baseline configurations weren't updated post-change",
      "No after-action review was conducted to document lessons learned"
    ],
    whatWedDoDifferently: [
      "Create a documented emergency change procedure that maintains audit trail",
      "Require verbal authorization from CIP Senior Manager with documented confirmation",
      "Mandate post-emergency documentation within 72 hours",
      "Update baselines immediately after any emergency change",
      "Conduct after-action review and capture in lessons learned"
    ],
    reflectionQuestions: [
      "Does your organization have an emergency change procedure?",
      "How would you document a verbal authorization during a crisis?",
      "What artifacts would you preserve to demonstrate compliance during an emergency?"
    ],
    relatedModules: [6, 8, 10],
    cipStandards: ["CIP-007", "CIP-010"]
  },
  {
    id: "mock-audit-success",
    title: "The Mock Audit That Changed Everything",
    scenario: "A utility scheduled their first-ever internal mock audit six months before their Regional Entity audit. The compliance manager hired a retired auditor as a consultant and treated the exercise as if it were the real thing.",
    whatHappened: "The mock audit revealed 23 potential findings across multiple CIP standards. Evidence was scattered across SharePoint, shared drives, and individual computers. Response times for evidence requests averaged 45 minutes. Interview subjects were nervous and gave inconsistent answers. The experience was eye-opening but provided a clear improvement roadmap.",
    whatWentWell: [
      "Leadership committed to the full mock audit exercise",
      "An experienced external perspective identified blind spots",
      "The team gained realistic experience with audit pressure",
      "Six months provided adequate time to address findings"
    ],
    whatWentWrong: [
      "Evidence organization was poor and retrieval was slow",
      "Staff weren't prepared for auditor interview techniques",
      "Some evidence simply didn't exist and had to be recreated",
      "Inconsistent naming conventions made searches difficult"
    ],
    whatWedDoDifferently: [
      "Conduct mock audits annually, not just before official audits",
      "Organize evidence by CIP standard using consistent naming",
      "Create pre-staged evidence packages for common requests",
      "Practice interview scenarios with all potential subjects",
      "Set a target of 5-minute evidence retrieval time"
    ],
    reflectionQuestions: [
      "When did your organization last conduct an internal mock audit?",
      "How quickly can you retrieve evidence for any CIP requirement?",
      "Are your staff prepared to be interviewed by an auditor?"
    ],
    relatedModules: [10, 3],
    cipStandards: ["All CIP Standards"]
  },
  {
    id: "training-gap",
    title: "The Training Records Gap",
    scenario: "An auditor requested training completion records for all personnel with authorized access to BES Cyber Systems at a medium-impact control center. The compliance team confidently pulled the records from their learning management system.",
    whatHappened: "The records showed that 47 of 52 personnel had completed required CIP training. However, the auditor cross-referenced these against the access list and found that 3 of the 5 individuals without completed training had been granted system access 6 months earlier. Training was supposed to be completed BEFORE access was granted, not after.",
    whatWentWell: [
      "Training records existed and were well-organized",
      "The LMS tracked completion dates accurately",
      "HR cooperated fully during the investigation",
      "The utility had a documented training program"
    ],
    whatWentWrong: [
      "Access provisioning process didn't verify training completion",
      "No automated check blocking access until training was complete",
      "Supervisors could request access without compliance validation",
      "The gap wasn't caught during quarterly access reviews"
    ],
    whatWedDoDifferently: [
      "Implement automated training verification before access provisioning",
      "Create a compliance checkpoint in the access request workflow",
      "Require compliance team sign-off on all new access requests",
      "Add training status to quarterly access review reports",
      "Train supervisors on CIP requirements before granting access"
    ],
    reflectionQuestions: [
      "How does your organization verify training completion before granting access?",
      "Could someone receive access before completing required training at your utility?",
      "What automated controls could prevent this gap?"
    ],
    relatedModules: [4, 3],
    cipStandards: ["CIP-004"]
  }
];

const moduleNames: Record<number, string> = {
  1: "Foundations of NERC and CIP",
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

export default function CaseStudies() {
  return (
    <Layout>
      <GlobalNav />
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Case Studies & War Stories
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn from real-world CIP compliance challenges. These scenarios illustrate common 
              pitfalls and success stories that can help you avoid similar issues in your environment.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {caseStudies.map((study, index) => (
              <article 
                key={study.id} 
                id={study.id}
                className="bg-card rounded-xl border border-border/50 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-4 border-b border-border/50">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Case Study {index + 1}</span>
                      <h2 className="text-xl font-bold text-navy">{study.title}</h2>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {study.cipStandards.map(std => (
                        <span key={std} className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Scenario */}
                  <div>
                    <h3 className="font-semibold text-navy mb-2">The Scenario</h3>
                    <p className="text-muted-foreground">{study.scenario}</p>
                  </div>

                  {/* What Happened */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h3 className="font-semibold text-navy mb-2">What Happened</h3>
                    <p className="text-muted-foreground">{study.whatHappened}</p>
                  </div>

                  {/* Well / Wrong Grid */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="h-5 w-5 text-success" />
                        <h4 className="font-semibold text-navy">What Went Well</h4>
                      </div>
                      <ul className="space-y-2">
                        {study.whatWentWell.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-success mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <XCircle className="h-5 w-5 text-destructive" />
                        <h4 className="font-semibold text-navy">What Went Wrong</h4>
                      </div>
                      <ul className="space-y-2">
                        {study.whatWentWrong.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-destructive mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* What We'd Do Differently */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-navy">What We'd Do Differently</h4>
                    </div>
                    <ul className="space-y-2">
                      {study.whatWedDoDifferently.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Reflection Questions */}
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="h-5 w-5 text-accent" />
                      <h4 className="font-semibold text-navy">Reflection Questions</h4>
                    </div>
                    <ol className="space-y-2">
                      {study.reflectionQuestions.map((q, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          <span className="font-medium text-accent">{i + 1}.</span> {q}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Related Modules */}
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Revisit these modules for deeper learning:</strong>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.relatedModules.map(m => (
                        <Link
                          key={m}
                          to={`/modules#module-${m}`}
                          className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 px-3 py-1.5 rounded-lg text-sm transition-colors"
                        >
                          <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                            {m}
                          </span>
                          <span className="text-muted-foreground">{moduleNames[m]}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-navy mb-4">
              Ready to Apply These Lessons?
            </h3>
            <p className="text-muted-foreground mb-6">
              Try the Audit Request Simulator to practice responding to common audit scenarios, 
              or build your own Readiness Plan to address potential gaps in your environment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/audit-simulator"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Try Audit Simulator <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/readiness-plan"
                className="inline-flex items-center justify-center gap-2 bg-card border border-border px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Build Readiness Plan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
