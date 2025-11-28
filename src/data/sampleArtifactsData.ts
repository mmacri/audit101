export interface SampleArtifact {
  id: string;
  title: string;
  cipStandard: string;
  context: string;
  type: 'table' | 'snippet' | 'comparison';
  content: {
    headers?: string[];
    rows?: string[][];
    text?: string;
    before?: { headers?: string[]; rows?: string[][]; text?: string };
    after?: { headers?: string[]; rows?: string[][]; text?: string };
    annotations?: string[];
  };
  strengths: string[];
  relevantModules: number[];
}

export const sampleArtifacts: SampleArtifact[] = [
  {
    id: 'training-matrix',
    title: 'Training Matrix',
    cipStandard: 'CIP-004',
    context: 'A training matrix documents who needs what training, when it\'s due, and current completion status. Auditors use this to verify that all personnel with authorized access have completed required training within required timeframes.',
    type: 'table',
    content: {
      headers: ['Name', 'Role', 'Access Type', 'Required Training', 'Last Completed', 'Next Due', 'Status'],
      rows: [
        ['John Smith', 'Control Room Operator', 'Cyber + Physical', 'CIP Awareness, Role-Based', '2024-03-15', '2025-03-15', 'Current'],
        ['Sarah Johnson', 'Network Engineer', 'Cyber', 'CIP Awareness, Technical', '2024-06-22', '2025-06-22', 'Current'],
        ['Mike Chen', 'Physical Security', 'Physical', 'CIP Awareness, PSP Escort', '2024-01-10', '2025-01-10', 'Due in 60 days'],
        ['Lisa Williams', 'Contractor - Relay Tech', 'Cyber', 'CIP Awareness, Vendor Access', '2024-09-01', '2025-09-01', 'Current'],
      ],
    },
    strengths: [
      'Clearly identifies access type driving training requirements',
      'Shows both completion date and next due date for proactive management',
      'Includes status column for at-a-glance compliance monitoring',
      'Distinguishes role-specific training from general awareness',
    ],
    relevantModules: [4],
  },
  {
    id: 'patch-report',
    title: 'Patch Assessment Report',
    cipStandard: 'CIP-007',
    context: 'CIP-007 requires assessment of security patches within 35 days of release. This report demonstrates timely assessment and clear documentation of patch disposition for each affected BES Cyber System.',
    type: 'table',
    content: {
      headers: ['Patch ID', 'Vendor', 'Release Date', 'Assessment Date', 'Days to Assess', 'BCS Applicable', 'Disposition', 'Implementation Date'],
      rows: [
        ['MS-KB5034441', 'Microsoft', '2024-01-09', '2024-01-25', '16', 'EMS Server 1, 2', 'Apply', '2024-02-10'],
        ['CVE-2024-21887', 'Ivanti', '2024-01-10', '2024-01-31', '21', 'VPN Gateway', 'Apply - Emergency', '2024-02-01'],
        ['RHSA-2024:0897', 'Red Hat', '2024-02-20', '2024-03-15', '24', 'Historian DB', 'Not Applicable', 'N/A'],
        ['SEL-FW-2024-02', 'SEL', '2024-02-28', '2024-03-28', '29', 'Relay Firmware', 'Mitigation Plan', 'See MP-2024-003'],
      ],
    },
    strengths: [
      'Documents release date AND assessment date with day count for audit verification',
      'Clearly identifies which BES Cyber Systems are affected',
      'Shows different disposition types (Apply, Not Applicable, Mitigation Plan)',
      'References mitigation plan document when applicable',
    ],
    relevantModules: [6, 8],
  },
  {
    id: 'incident-report',
    title: 'Cyber Security Incident Summary',
    cipStandard: 'CIP-008',
    context: 'CIP-008 requires documented incident response including detection, classification, response actions, and lessons learned. This summary shows the key elements auditors expect in incident documentation.',
    type: 'snippet',
    content: {
      text: `INCIDENT REPORT: IR-2024-003

DETECTION
- Date/Time: 2024-02-15 14:32 EST
- Detected By: Security monitoring alert (failed auth threshold)
- Initial Indicator: 47 failed authentication attempts on EMS Workstation 3 within 5 minutes

CLASSIFICATION
- Incident Type: Unauthorized Access Attempt
- Severity: Medium (no successful compromise)
- BCS Affected: EMS Workstation 3 (Medium Impact)
- Reportable: No (attempt only, no compromise)

RESPONSE ACTIONS
- 14:35 - Security analyst began investigation
- 14:42 - Source IP identified (external contractor VPN)
- 14:55 - Contractor account disabled pending investigation
- 15:30 - Contractor contacted; confirmed they forgot password
- 16:00 - PRA and training status verified; account re-enabled with password reset

RESOLUTION
- Root Cause: User error (forgotten password after vacation)
- Duration: 1 hour 28 minutes
- Systems Recovered: N/A (no compromise occurred)

LESSONS LEARNED
- Password expiry notification should occur before remote work periods
- Authentication lockout threshold appropriately triggered alerting
- Consider MFA enrollment notification improvements`,
    },
    strengths: [
      'Clear timeline with specific dates and times',
      'Documents classification decision and reasoning',
      'Shows systematic response actions',
      'Includes lessons learned for continuous improvement',
      'Addresses reportability determination',
    ],
    relevantModules: [7],
  },
  {
    id: 'evidence-inventory',
    title: 'Evidence Inventory Matrix',
    cipStandard: 'Multiple',
    context: 'An evidence inventory maps compliance requirements to specific evidence locations, owners, and review frequencies. This enables rapid evidence retrieval during audits and ensures nothing falls through the cracks.',
    type: 'table',
    content: {
      headers: ['CIP Standard', 'Requirement', 'Evidence Type', 'Location', 'Owner', 'Review Frequency'],
      rows: [
        ['CIP-002 R1', 'Asset Categorization', 'BCS Inventory Spreadsheet', 'SharePoint/CIP/Assets/', 'J. Smith', 'Annual'],
        ['CIP-004 R2', 'Training Completion', 'LMS Reports + Sign-in Sheets', 'LMS + SharePoint/CIP/Training/', 'HR - Training', 'Quarterly'],
        ['CIP-005 R1', 'ESP Documentation', 'Network Diagrams', 'SharePoint/CIP/Network/', 'Network Team', 'Per Change'],
        ['CIP-007 R2', 'Patch Management', 'Patch Tracking Database', 'ServiceNow/Patch Module', 'IT Security', 'Weekly'],
        ['CIP-010 R1', 'Baseline Configs', 'Config Exports + CMDBSync', 'CMDB + SharePoint/CIP/Baselines/', 'IT/OT Leads', 'Per Change'],
      ],
    },
    strengths: [
      'Maps directly to CIP requirements for easy auditor navigation',
      'Identifies specific evidence locations, not just types',
      'Assigns clear ownership for accountability',
      'Includes review frequency to ensure evidence stays current',
    ],
    relevantModules: [9, 10],
  },
  {
    id: 'access-list-comparison',
    title: 'Access List: Before vs After Improvement',
    cipStandard: 'CIP-004 / CIP-006',
    context: 'Access authorization lists must document who has access and why. This before/after comparison shows how proper formatting transforms a compliance liability into audit-ready evidence.',
    type: 'comparison',
    content: {
      before: {
        headers: ['Name', 'Badge #', 'Status'],
        rows: [
          ['J. Smith', '1234', 'Active'],
          ['S. Johnson', '1235', 'Active'],
          ['M. Chen', '1236', 'Active'],
          ['Old Contractor', '9001', '???'],
          ['Temp', '9002', 'Maybe'],
        ],
      },
      after: {
        headers: ['Name', 'Badge #', 'Job Title', 'Access Type', 'Auth Date', 'Authorized By', 'Review Date', 'Status'],
        rows: [
          ['John Smith', '1234', 'Control Room Operator', 'Cyber + Physical', '2023-01-15', 'CIP Sr Mgr', '2024-01-15', 'Active'],
          ['Sarah Johnson', '1235', 'Network Engineer', 'Cyber Only', '2023-06-01', 'IT Director', '2024-06-01', 'Active'],
          ['Mike Chen', '1236', 'Security Officer', 'Physical Only', '2022-08-10', 'Security Mgr', '2024-08-10', 'Active'],
        ],
      },
      annotations: [
        'Before: Missing authorization dates, unclear status, incomplete data',
        'After: Complete authorization chain, documented need, annual review dates',
        'Removed: Stale entries cleaned up during reconciliation',
      ],
    },
    strengths: [
      'Authorization date and authorized-by fields create accountability chain',
      'Access type distinguishes cyber vs physical requirements',
      'Review date enables proactive annual verification',
      'Removing stale/unclear entries demonstrates active list management',
    ],
    relevantModules: [4, 5],
  },
  {
    id: 'change-ticket',
    title: 'Configuration Change Request',
    cipStandard: 'CIP-010',
    context: 'CIP-010 requires documented change management for BES Cyber Systems. A complete change ticket captures the full lifecycle from request through verification, creating audit-ready evidence.',
    type: 'snippet',
    content: {
      text: `CHANGE REQUEST: CHG-2024-0156

REQUESTER: Network Team / K. Davis
DATE SUBMITTED: 2024-03-10
BCS AFFECTED: EMS Firewall FW-EMS-01 (Medium Impact)

CHANGE DESCRIPTION
Add firewall rule to permit authenticated ICMP from new monitoring server (MON-SRV-02) to ESP systems for availability monitoring.

SECURITY IMPACT ASSESSMENT
- New inbound rule to ESP: Yes
- Risk: Low (ICMP only, source IP restricted)
- Testing Required: Yes (lab environment)
- Baseline Update Required: Yes (firewall rule export)

APPROVALS
- Technical Review: M. Thompson, 2024-03-11 ✓
- Security Review: J. Martinez, 2024-03-12 ✓
- Change Advisory Board: Approved 2024-03-13 ✓

IMPLEMENTATION
- Maintenance Window: 2024-03-16 02:00-04:00 EST
- Implemented By: K. Davis
- Implementation Time: 02:15-02:45 EST
- Testing Performed: Ping tests successful from MON-SRV-02

VERIFICATION
- Baseline Updated: 2024-03-16 by K. Davis ✓
- Documentation Updated: 2024-03-17 by K. Davis ✓
- Post-Change Monitoring: No issues reported

CLOSURE: Change successful, closed 2024-03-18`,
    },
    strengths: [
      'Documents full approval chain before implementation',
      'Includes security impact assessment for the BES Cyber System',
      'Shows testing was performed',
      'Confirms baseline documentation was updated post-change',
      'Provides complete audit trail from request to closure',
    ],
    relevantModules: [8],
  },
];

export function getArtifactsByModule(moduleId: number): SampleArtifact[] {
  return sampleArtifacts.filter(artifact => artifact.relevantModules.includes(moduleId));
}

export function getArtifactById(id: string): SampleArtifact | undefined {
  return sampleArtifacts.find(artifact => artifact.id === id);
}
