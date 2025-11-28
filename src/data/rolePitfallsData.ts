import { UserRole } from '@/hooks/useUserPreferences';

export interface RolePitfalls {
  commonPitfalls: string[];
  auditRedFlags: string[];
}

export const rolePitfalls: Record<UserRole, RolePitfalls> = {
  compliance: {
    commonPitfalls: [
      'Evidence scattered across personal drives, emails, and SharePoint sites with no central repository',
      'Policies updated but training materials not aligned with new requirements',
      'Compliance calendar deadlines missed because reminders were set too close to due dates',
      'Corrective action plans documented but no follow-up tracking to verify completion',
      'Relying on verbal confirmations instead of documented evidence for completed tasks',
      'Delegation letters not updated when personnel change roles or leave',
      'Evidence naming conventions inconsistent, making retrieval slow and error-prone',
      'Internal audit findings not formally tracked or closed with documented evidence',
    ],
    auditRedFlags: [
      'Evidence retrieval takes more than 5 minutes for any single request',
      'Dates on evidence don\'t align with claimed compliance periods',
      'Multiple versions of policies exist with unclear version control',
      'Compliance team cannot explain the relationship between evidence and requirements',
      'Gaps between policy statements and actual documented procedures',
      'Delegation of authority documentation is incomplete or outdated',
    ],
  },
  'it-ot': {
    commonPitfalls: [
      'Patch assessment documents exist but don\'t clearly show the 35-day timeline was met',
      'Baseline configurations documented but not updated after approved changes',
      'Firewall changes implemented but change tickets lack security impact assessment',
      'Log review documented but findings and follow-up actions not captured',
      'Network diagrams show conceptual architecture but not actual access points',
      'Mitigation plans for non-applied patches lack clear compensating controls',
      'Test environment changes not distinguished from production changes in documentation',
      'Ports and services baseline doesn\'t match actual system configuration',
    ],
    auditRedFlags: [
      'Patch assessment date is after the 35-day deadline',
      'Baseline documentation date doesn\'t match configuration export dates',
      'Network diagram shows components that no longer exist or missing current assets',
      'Log retention periods don\'t meet CIP requirements',
      'Change tickets closed without documented testing or verification',
      'System configurations have unknown or undocumented services running',
    ],
  },
  'physical-security': {
    commonPitfalls: [
      'Access lists include personnel who left months ago—24-hour revocation not enforced',
      'Visitor logs missing escort names or entry/exit times',
      'PACS testing documented but no evidence that alerts were actually monitored',
      'PSP boundary diagrams don\'t show all access points',
      'Badge audit trails don\'t include authorization source',
      'Maintenance records for PACS equipment missing or incomplete',
      'Visitor pre-authorization process undocumented even when followed',
      'Emergency access procedures exist but personnel don\'t know how to execute them',
    ],
    auditRedFlags: [
      'Access revocation timestamps show more than 24 hours elapsed',
      'Visitor log entries lack required fields (escort, purpose, times)',
      'PSP inspection records don\'t exist or have large gaps',
      'PACS alert response procedures not documented or tested',
      'Terminated employee badges not collected or deactivated',
      'Unauthorized access points discovered during walkthrough',
    ],
  },
  'hr-training': {
    commonPitfalls: [
      'Training completion tracked in spreadsheet but sign-in sheets filed separately and hard to correlate',
      'PRA completion dates not tracked—reverification deadlines missed',
      'Training content not reviewed against current CIP requirements',
      'Role changes not triggering reassessment of training requirements',
      'Contractor training tracked differently from employee training',
      'Annual refresher notifications sent but completion not enforced before deadline',
      'Training roster doesn\'t align with current authorized access list',
      'Job responsibility documentation doesn\'t clearly map to CIP access needs',
    ],
    auditRedFlags: [
      'Training completion date after access grant date',
      'PRA documentation older than seven years without reverification',
      'Training content doesn\'t cover role-specific CIP requirements',
      'Personnel have authorized access but no training records exist',
      'Terminated personnel still appear on authorized access lists',
      'Training sign-in sheets have inconsistent or missing signatures',
    ],
  },
  leadership: {
    commonPitfalls: [
      'CIP Senior Manager designated but not actively engaged in program oversight',
      'Policy approvals delegated without proper delegation documentation',
      'Compliance reports received but no documented review or response',
      'Resource constraints known but not escalated until audit findings occur',
      'Annual policy reviews rubber-stamped without meaningful examination',
      'Audit findings accepted without understanding root cause',
      'Compliance seen as "someone else\'s job" rather than organizational priority',
      'Risk decisions made without documented rationale',
    ],
    auditRedFlags: [
      'CIP Senior Manager cannot explain key elements of the compliance program',
      'Policy review signatures but no evidence of actual review activity',
      'No documented resource allocation for compliance activities',
      'Leadership unaware of current compliance status or open findings',
      'Delegation of authority doesn\'t match actual decision-making',
      'Repeated findings in the same area suggesting systemic neglect',
    ],
  },
  other: {
    commonPitfalls: [
      'Assuming CIP doesn\'t affect your role when it may through supply chain or support',
      'Handling BCSI without understanding protection requirements',
      'Procurement contracts lacking required security provisions',
      'Facility maintenance accessing PSPs without proper escort documentation',
      'Vendor management not coordinating with compliance on CIP-relevant purchases',
      'Supporting systems changes without change management awareness',
    ],
    auditRedFlags: [
      'Vendor contracts for BES Cyber System components lack security language',
      'Supporting personnel access PSPs without proper authorization',
      'BCSI shared externally without protection documentation',
      'Procurement decisions made without compliance consultation for CIP-related purchases',
    ],
  },
};

export interface ModulePitfalls {
  moduleName: string;
  pitfalls: string[];
  auditorQuestions: string[];
}

export const modulePitfalls: Record<number, ModulePitfalls> = {
  1: {
    moduleName: 'Foundations of NERC and CIP',
    pitfalls: [
      'Misunderstanding which NERC functional registration applies to your organization',
      'Assuming CIP requirements are static—missing regulatory updates',
      'Not understanding the difference between Requirements and Implementation Guidance',
    ],
    auditorQuestions: [
      'Can you walk me through your organization\'s NERC registration and which CIP standards apply?',
      'How do you stay current with CIP modifications and implementation guidance?',
    ],
  },
  2: {
    moduleName: 'Asset Identification & Scope',
    pitfalls: [
      'BES Cyber System inventory incomplete or not aligned with actual deployed assets',
      'Impact ratings not documented with clear rationale',
      'Associated Protected Cyber Assets not identified',
      'Scope changes (new systems, decommissions) not reflected in inventory promptly',
    ],
    auditorQuestions: [
      'Show me how you determined the impact rating for this BES Cyber System.',
      'How do you ensure new assets are identified and categorized appropriately?',
      'Walk me through a recent scope change and how it was documented.',
    ],
  },
  3: {
    moduleName: 'Governance & Program Management',
    pitfalls: [
      'CIP Senior Manager delegation exists but delegated authority unclear or outdated',
      'Policies reviewed but not updated to reflect current practices',
      'Documentation review cycle of 15 months not tracked accurately',
    ],
    auditorQuestions: [
      'Who is your CIP Senior Manager and how is authority delegated?',
      'Show me evidence of your policy review process and when policies were last reviewed.',
      'How do you ensure procedures reflect actual practices?',
    ],
  },
  4: {
    moduleName: 'People & Training',
    pitfalls: [
      'Training records not clearly linked to specific access authorizations',
      'PRA seven-year reverification timeline not tracked',
      'Training content not role-appropriate for personnel responsibilities',
      'Access revocation timelines (calendar day for cyber, 24 hours for physical) not met',
    ],
    auditorQuestions: [
      'Show me training records for this individual with authorized access.',
      'How do you verify PRA completion before granting access?',
      'Walk me through your access revocation process—when was this person\'s access revoked?',
    ],
  },
  5: {
    moduleName: 'Electronic & Physical Perimeters',
    pitfalls: [
      'ESP diagrams don\'t show all Electronic Access Points',
      'PSP boundaries unclear or not properly enclosed (six-wall)',
      'Interactive Remote Access sessions not monitored or encrypted',
      'PACS testing undocumented or infrequent',
    ],
    auditorQuestions: [
      'Show me your ESP diagram. Walk me through each access point.',
      'How do you ensure the PSP maintains six-wall integrity?',
      'Demonstrate your remote access monitoring capability.',
    ],
  },
  6: {
    moduleName: 'System Security & Patching',
    pitfalls: [
      'Patch assessment timeline calculation errors (using business days instead of calendar days)',
      'Mitigation plans lack specific compensating controls',
      'Malicious code prevention not documented for all BES Cyber Systems',
      'Security event logs retained but not reviewed at required intervals',
    ],
    auditorQuestions: [
      'Show me a patch that was released on this date. When was it assessed?',
      'This patch wasn\'t applied—show me the mitigation plan.',
      'How often do you review security logs and where is that documented?',
    ],
  },
  7: {
    moduleName: 'Incident Response & Recovery',
    pitfalls: [
      'Incident response plan not tested within 15-month requirement',
      'Incident reports lack required fields (detection time, classification, actions)',
      'Recovery plans exist but backup testing not documented',
      'Lessons learned not incorporated into plan updates',
    ],
    auditorQuestions: [
      'When was your incident response plan last tested? Show me the test results.',
      'Walk me through your last security incident. Show me the documentation.',
      'How do you verify that backups can be restored successfully?',
    ],
  },
  8: {
    moduleName: 'Configuration & Vulnerability Management',
    pitfalls: [
      'Baseline configurations don\'t include all required elements (ports, services, patches)',
      'Baselines not updated within 30 days after changes',
      'Vulnerability assessments don\'t cover all BES Cyber Systems',
      'Change management bypassed for "emergency" changes without proper documentation',
    ],
    auditorQuestions: [
      'Show me the baseline configuration for this system. When was it last updated?',
      'This change ticket is from last month—show me the updated baseline.',
      'What was your last vulnerability assessment and what did you find?',
    ],
  },
  9: {
    moduleName: 'Information Protection & Supply Chain',
    pitfalls: [
      'BCSI not identified or labeled consistently',
      'Vendor contracts for BES Cyber System components lack security provisions',
      'BCSI disposal not documented',
      'Supply chain risk assessment not performed for critical vendors',
    ],
    auditorQuestions: [
      'How do you identify and protect BES Cyber System Information?',
      'Show me the contract for this vendor—what security provisions are included?',
      'How do you verify vendors notify you of security events affecting your systems?',
    ],
  },
  10: {
    moduleName: 'Audit Simulation & Continuous Improvement',
    pitfalls: [
      'Internal audits conducted but findings not formally tracked',
      'Corrective action plans created but completion not verified',
      'Evidence organized for audit but not maintained year-round',
      'Mock audits too "friendly"—don\'t simulate real auditor scrutiny',
    ],
    auditorQuestions: [
      'Show me your internal audit results from the past year.',
      'This finding was identified six months ago—what\'s the status?',
      'How do you ensure continuous compliance versus audit-time compliance?',
    ],
  },
};
