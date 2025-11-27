import { Lightbulb } from 'lucide-react';

// Recap points summarizing key outputs from each module
const moduleRecaps: Record<number, string[]> = {
  1: [], // First module has no prior content to recap
  2: [
    "NERC ensures bulk power system reliability through enforceable standards",
    "CIP standards protect critical cyber assets essential to grid operations",
    "Regional Entities conduct audits with penalties up to $1M per violation per day"
  ],
  3: [
    "BES Cyber Assets are identified using the 15-minute reliability impact test",
    "Impact ratings (High, Medium, Low) determine the level of required protection",
    "Accurate scoping is the foundation of your entire CIP compliance program"
  ],
  4: [
    "The CIP Senior Manager has overall accountability that cannot be delegated",
    "Policies must be reviewed and approved at least every 15 months",
    "Clear delegation documentation is essential for audit evidence"
  ],
  5: [
    "Personnel risk assessments require a 7-year criminal history check",
    "Access must be revoked within 24 hours of termination notification",
    "Training must be completed before granting access and every 15 months thereafter"
  ],
  6: [
    "ESPs are logical borders protecting networks with BES Cyber Systems",
    "PSPs provide physical protection requiring continuous visitor escort",
    "All access points must be documented, monitored, and logged"
  ],
  7: [
    "Only necessary ports and services should be enabled on BES Cyber Systems",
    "Patches must be assessed within 35 days with documented disposition",
    "Security logs must be retained for 90 days and reviewed regularly"
  ],
  8: [
    "Reportable incidents must be reported to E-ISAC within 1 hour",
    "Both incident response and recovery plans must be tested every 15 months",
    "Plans must include roles, procedures, and communication protocols"
  ],
  9: [
    "Baseline configurations must be documented and updated within 30 days of changes",
    "Vulnerability assessments are required at least every 15 months",
    "Change management requires testing, documentation, and approval before implementation"
  ],
  10: [
    "BCSI must be protected in storage and encrypted when transmitted publicly",
    "Supply chain plans must address vendor incidents and software integrity",
    "Vendor access must be managed throughout the relationship lifecycle"
  ]
};

interface ModuleRecapProps {
  moduleId: number;
}

export function ModuleRecap({ moduleId }: ModuleRecapProps) {
  const recap = moduleRecaps[moduleId];
  
  if (!recap || recap.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20 p-4 mb-6">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Lightbulb className="h-4 w-4 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-navy text-sm mb-2">
            Previously on CIP Readiness Academy...
          </h4>
          <ul className="space-y-1">
            {recap.map((point, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
