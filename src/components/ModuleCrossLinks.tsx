import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  ClipboardCheck, 
  Target, 
  Lightbulb,
  ArrowRight,
  FolderSearch,
  BookOpen,
  Shield,
  Download,
  ExternalLink,
  ListChecks,
  Users,
  Lock,
  AlertTriangle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CrossLink {
  title: string;
  description: string;
  path: string;
  icon: React.ElementType;
  type: 'evidence' | 'task' | 'simulator' | 'resource' | 'module' | 'checklist' | 'template';
  highlight?: boolean;
}

// Module-specific cross-navigation links with contextual resources
const moduleCrossLinks: Record<number, CrossLink[]> = {
  1: [
    { title: 'Self-Assessment', description: 'Evaluate your baseline CIP knowledge', path: '/self-assessment', icon: ClipboardCheck, type: 'task', highlight: true },
    { title: 'Role-Based Training', description: 'Find your personalized learning path', path: '/role-training', icon: Users, type: 'task' },
    { title: 'CIP Standards Quick Reference', description: 'Downloadable standards overview', path: '/resources#downloads', icon: Download, type: 'template' },
  ],
  2: [
    { title: 'Scope & TCA Matrix', description: 'Interactive asset classification tool', path: '/scope-matrix', icon: FolderSearch, type: 'resource', highlight: true },
    { title: 'BES Cyber Asset Inventory Template', description: 'Excel template for asset tracking', path: '/resources#downloads', icon: Download, type: 'template' },
    { title: 'CIP-002 Audit Requests', description: 'Practice scope-related requests', path: '/audit-simulator', icon: ClipboardCheck, type: 'simulator' },
    { title: 'Evidence: Asset Inventory', description: 'Sample BES Cyber System documentation', path: '/evidence-lab', icon: FileText, type: 'evidence' },
  ],
  3: [
    { title: 'Low-Impact TCA Checklist', description: 'Transient Cyber Asset management guide', path: '/scope-matrix#tca', icon: ListChecks, type: 'checklist', highlight: true },
    { title: 'Policy Templates', description: 'CIP-003 policy frameworks', path: '/resources#downloads', icon: Download, type: 'template' },
    { title: 'CIP Senior Manager Delegation Form', description: 'Sample delegation documentation', path: '/evidence-lab', icon: FileText, type: 'evidence' },
    { title: 'CIP-003 Audit Requests', description: 'Governance audit practice', path: '/audit-simulator', icon: ClipboardCheck, type: 'simulator' },
    { title: 'Low-Impact Password Checklist', description: 'Authentication control verification', path: '/scope-matrix#low-impact', icon: Lock, type: 'checklist' },
  ],
  4: [
    { title: 'Training Matrix Template', description: 'Role-based training tracker (Excel)', path: '/resources#downloads', icon: Download, type: 'template', highlight: true },
    { title: 'Evidence: Training Records', description: 'Sample training documentation', path: '/evidence-lab', icon: FileText, type: 'evidence' },
    { title: 'PRA Checklist', description: 'Personnel Risk Assessment requirements', path: '/evidence-lab#checklists', icon: ListChecks, type: 'checklist' },
    { title: 'HR Role Training Path', description: 'HR-specific learning track', path: '/role-training/hr-training', icon: Target, type: 'task' },
    { title: 'Access Revocation Scenario', description: 'Practice 24-hour revocation', path: '/audit-simulator', icon: ClipboardCheck, type: 'simulator' },
  ],
  5: [
    { title: 'ESP/PSP Diagram Examples', description: 'Visual perimeter reference', path: '/evidence-lab#diagrams', icon: FileText, type: 'evidence', highlight: true },
    { title: 'Remote Access Checklist', description: 'CIP-005 R2 requirements', path: '/evidence-lab#checklists', icon: ListChecks, type: 'checklist' },
    { title: 'Physical Security Training', description: 'Role-specific learning path', path: '/role-training/physical-security', icon: Target, type: 'task' },
    { title: 'Visitor Log Template', description: 'PSP visitor management', path: '/resources#downloads', icon: Download, type: 'template' },
    { title: 'CIP-005/006 Audit Requests', description: 'Perimeter audit practice', path: '/audit-simulator', icon: ClipboardCheck, type: 'simulator' },
  ],
  6: [
    { title: 'Patch Tracker Template', description: 'CIP-007 R2 patch assessment tracking', path: '/resources#downloads', icon: Download, type: 'template', highlight: true },
    { title: 'Evidence: Patch Reports', description: 'Sample patch documentation', path: '/evidence-lab', icon: FileText, type: 'evidence' },
    { title: 'Ports & Services Baseline', description: 'CIP-007 R1 documentation guide', path: '/evidence-lab#baselines', icon: ListChecks, type: 'checklist' },
    { title: 'IT/OT Training Path', description: 'Technical role learning track', path: '/role-training/it-ot', icon: Target, type: 'task' },
    { title: 'CIP-007 Audit Requests', description: 'System security audit practice', path: '/audit-simulator', icon: ClipboardCheck, type: 'simulator' },
  ],
  7: [
    { title: 'Incident Response Checklist', description: 'Step-by-step IR guide with ES-ISAC timelines', path: '/evidence-lab#incident', icon: AlertTriangle, type: 'checklist', highlight: true },
    { title: 'Tabletop Exercise Template', description: 'Run your own IR drill', path: '/resources#downloads', icon: Download, type: 'template' },
    { title: 'Recovery Plan Template', description: 'CIP-009 backup and recovery', path: '/resources#downloads', icon: Download, type: 'template' },
    { title: 'CIP-008/009 Audit Requests', description: 'Incident/recovery audit practice', path: '/audit-simulator', icon: ClipboardCheck, type: 'simulator' },
  ],
  8: [
    { title: 'Baseline Configuration Template', description: 'Document system baselines', path: '/resources#downloads', icon: Download, type: 'template', highlight: true },
    { title: 'Change Control Checklist', description: 'CIP-010 R1 change management', path: '/evidence-lab#change', icon: ListChecks, type: 'checklist' },
    { title: 'Vulnerability Assessment Guide', description: 'CIP-010 R3 requirements', path: '/evidence-lab', icon: FileText, type: 'evidence' },
    { title: 'CIP-010 Audit Requests', description: 'Configuration audit practice', path: '/audit-simulator', icon: ClipboardCheck, type: 'simulator' },
  ],
  9: [
    { title: 'BCSI Handling Procedures', description: 'Information protection checklist', path: '/evidence-lab#bcsi', icon: Lock, type: 'checklist', highlight: true },
    { title: 'Vendor Risk Assessment Template', description: 'CIP-013 supply chain evaluation', path: '/resources#downloads', icon: Download, type: 'template' },
    { title: 'EACMS/PACS Inventory Guide', description: 'CIP-013-2 expanded scope', path: '/scope-matrix#eacms', icon: FolderSearch, type: 'resource' },
    { title: 'Software Integrity Checklist', description: 'Verify vendor software', path: '/evidence-lab#integrity', icon: ListChecks, type: 'checklist' },
    { title: 'CIP-011/013 Audit Requests', description: 'Info protection audit practice', path: '/audit-simulator', icon: ClipboardCheck, type: 'simulator' },
  ],
  10: [
    { title: 'RSAW Tutorial', description: 'Complete RSAWs effectively', path: '/rsaw-tutorial', icon: BookOpen, type: 'resource', highlight: true },
    { title: '90-Day Audit Checklist', description: 'Timeline from notice to closeout', path: '/evidence-lab#audit', icon: ListChecks, type: 'checklist' },
    { title: 'Readiness Plan Builder', description: 'Create your compliance plan', path: '/readiness-plan', icon: Target, type: 'task' },
    { title: 'Mock Audit Script', description: 'Run internal audit exercises', path: '/resources#downloads', icon: Download, type: 'template' },
    { title: 'Full Audit Simulator', description: 'Practice all standards', path: '/audit-simulator', icon: ClipboardCheck, type: 'simulator' },
    { title: 'Soft Skills Training', description: 'Interview best practices', path: '/soft-skills', icon: Users, type: 'task' },
  ],
  11: [
    { title: 'Control Center Communications Checklist', description: 'CIP-012 protection requirements', path: '/evidence-lab#cip012', icon: ListChecks, type: 'checklist', highlight: true },
    { title: 'Encryption Standards Guide', description: 'TLS/IPsec configuration', path: '/evidence-lab', icon: Lock, type: 'evidence' },
    { title: 'IT/OT Training Path', description: 'Technical implementation track', path: '/role-training/it-ot', icon: Target, type: 'task' },
    { title: 'CIP-012 Audit Requests', description: 'Communications audit practice', path: '/audit-simulator', icon: ClipboardCheck, type: 'simulator' },
  ],
  12: [
    { title: 'CIP-014 vs CIP-006 Comparison', description: 'Physical security distinctions', path: '/scope-matrix#cip014', icon: FolderSearch, type: 'resource', highlight: true },
    { title: 'Third-Party Assessment Checklist', description: 'CIP-014 R4/R5 requirements', path: '/evidence-lab#cip014', icon: ListChecks, type: 'checklist' },
    { title: 'Physical Security Training', description: 'Role-specific learning path', path: '/role-training/physical-security', icon: Target, type: 'task' },
    { title: 'Threat Assessment Template', description: 'CIP-014 R1 documentation', path: '/resources#downloads', icon: Download, type: 'template' },
    { title: 'CIP-014 Audit Requests', description: 'Transmission security practice', path: '/audit-simulator', icon: ClipboardCheck, type: 'simulator' },
  ],
};

const typeColors: Record<string, string> = {
  evidence: 'bg-teal/10 text-teal border-teal/30',
  task: 'bg-primary/10 text-primary border-primary/30',
  simulator: 'bg-warning/10 text-warning border-warning/30',
  resource: 'bg-accent/10 text-accent border-accent/30',
  module: 'bg-navy/10 text-navy border-navy/30',
  checklist: 'bg-success/10 text-success border-success/30',
  template: 'bg-sky/10 text-sky border-sky/30',
};

const typeLabels: Record<string, string> = {
  evidence: 'Evidence',
  task: 'Task',
  simulator: 'Practice',
  resource: 'Resource',
  module: 'Related',
  checklist: 'Checklist',
  template: 'Template',
};

interface ModuleCrossLinksProps {
  moduleId: number;
  className?: string;
  compact?: boolean;
  showHighlighted?: boolean;
}

export function ModuleCrossLinks({ moduleId, className, compact = false, showHighlighted = false }: ModuleCrossLinksProps) {
  const links = moduleCrossLinks[moduleId] || [];
  
  if (links.length === 0) return null;

  // If showHighlighted, filter to only highlighted items
  const displayLinks = showHighlighted ? links.filter(l => l.highlight) : links;
  
  if (displayLinks.length === 0) return null;

  if (compact) {
    return (
      <div className={cn("flex flex-wrap gap-2", className)}>
        {displayLinks.slice(0, 4).map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.path + link.title}
              to={link.path}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all hover:shadow-sm",
                typeColors[link.type]
              )}
            >
              <Icon className="h-3 w-3" />
              {link.title}
            </Link>
          );
        })}
      </div>
    );
  }

  // Separate highlighted resources for sidebar display
  const highlightedLinks = links.filter(l => l.highlight);
  const otherLinks = links.filter(l => !l.highlight);

  return (
    <div className={cn("space-y-4", className)}>
      {/* Highlighted Resources Sidebar */}
      {highlightedLinks.length > 0 && (
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-4 border border-primary/20">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-primary" />
            <h4 className="font-semibold text-navy">Key Resources for This Module</h4>
          </div>
          
          <div className="space-y-2">
            {highlightedLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path + link.title}
                  to={link.path}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all group"
                >
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                    typeColors[link.type].replace('text-', 'bg-').replace('/10', '/20')
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-medium text-sm text-navy group-hover:text-primary transition-colors">
                        {link.title}
                      </span>
                      <Badge variant="outline" className={cn("text-[10px] px-1.5", typeColors[link.type])}>
                        {typeLabels[link.type]}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Other Related Resources */}
      {otherLinks.length > 0 && (
        <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="h-5 w-5 text-accent" />
            <h4 className="font-semibold text-navy">Related Resources & Practice</h4>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-3">
            {otherLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path + link.title}
                  to={link.path}
                  className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-sm transition-all group"
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                    typeColors[link.type].replace('text-', 'bg-').replace('/10', '/20')
                  )}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-medium text-sm text-navy group-hover:text-primary transition-colors">
                        {link.title}
                      </span>
                      <Badge variant="outline" className={cn("text-[10px] px-1.5 hidden sm:inline-flex", typeColors[link.type])}>
                        {typeLabels[link.type]}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {link.description}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 hidden sm:block" />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
