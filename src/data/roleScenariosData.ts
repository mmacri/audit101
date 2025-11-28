import { UserRole } from '@/hooks/useUserPreferences';

export interface ScenarioChoice {
  id: string;
  label: string;
  nextNodeId: string;
}

export interface ScenarioNode {
  id: string;
  title: string;
  description: string;
  choices: ScenarioChoice[];
  isEnding?: boolean;
  endingSummary?: string;
  outcomeType?: 'good' | 'neutral' | 'poor';
}

export interface RoleScenario {
  roleKey: UserRole;
  name: string;
  intro: string;
  nodes: ScenarioNode[];
  relevantModules: number[];
}

export const roleScenarios: Record<UserRole, RoleScenario> = {
  compliance: {
    roleKey: 'compliance',
    name: 'Surprise CIP Audit Request Week',
    intro: 'It\'s Monday morning and you\'ve just received an email from your Regional Entity: a spot-check audit has been scheduled for three weeks from today. The audit will cover CIP-004, CIP-007, and CIP-010 for your Medium Impact BES Cyber Systems. Your CIP Senior Manager is asking for a readiness assessment by end of day.',
    relevantModules: [4, 6, 8, 10],
    nodes: [
      {
        id: 'start',
        title: 'The Clock is Ticking',
        description: 'You have three weeks to prepare. Your evidence repository hasn\'t been reviewed in several months, and you\'re not sure if all patch assessments are up to date. The IT team is in the middle of a major project, and your HR coordinator who handles training records is on vacation this week.',
        choices: [
          { id: 'a', label: 'Call an emergency meeting with all stakeholders immediately', nextNodeId: 'emergency-meeting' },
          { id: 'b', label: 'Start pulling evidence samples yourself to assess the situation', nextNodeId: 'solo-review' },
          { id: 'c', label: 'Email stakeholders asking for status updates by end of week', nextNodeId: 'email-approach' },
        ],
      },
      {
        id: 'emergency-meeting',
        title: 'Emergency Stakeholder Meeting',
        description: 'You\'ve gathered IT, OT, HR, and Physical Security leads within two hours. Tensions are high—the IT lead mentions they have three patch assessments overdue. HR cannot access training records without the coordinator. Physical Security seems confident in their documentation.',
        choices: [
          { id: 'a', label: 'Prioritize the overdue patches and assign IT to complete assessments today', nextNodeId: 'patches-first' },
          { id: 'b', label: 'Create a shared tracking spreadsheet and assign evidence owners for each requirement', nextNodeId: 'systematic-approach' },
          { id: 'c', label: 'Ask everyone to send you their evidence by Friday and you\'ll sort it out', nextNodeId: 'passive-collection' },
        ],
      },
      {
        id: 'solo-review',
        title: 'Initial Evidence Assessment',
        description: 'You spend four hours reviewing the evidence repository. You find multiple naming convention inconsistencies, several documents with outdated dates, and realize the CIP-010 baseline configurations haven\'t been updated after last month\'s changes. The scope is bigger than expected.',
        choices: [
          { id: 'a', label: 'Document all gaps and schedule a meeting for tomorrow', nextNodeId: 'systematic-approach' },
          { id: 'b', label: 'Start fixing the naming conventions yourself to save time', nextNodeId: 'fixing-alone' },
        ],
      },
      {
        id: 'email-approach',
        title: 'Waiting for Responses',
        description: 'By Wednesday, you\'ve received partial responses from half the team. IT says "everything should be fine." HR hasn\'t replied. Physical Security sent a comprehensive status report. You\'ve lost two days.',
        choices: [
          { id: 'a', label: 'Escalate to leadership and call the emergency meeting you should have called Monday', nextNodeId: 'late-escalation' },
          { id: 'b', label: 'Accept the responses and hope for the best', nextNodeId: 'hope-ending' },
        ],
      },
      {
        id: 'systematic-approach',
        title: 'Organized Response',
        description: 'You\'ve created a master audit preparation spreadsheet mapping each CIP requirement to evidence, owner, and status. Daily 15-minute check-ins are scheduled. The IT lead has committed to completing patch assessments by Friday. You\'ve arranged for the backup HR admin to pull training records.',
        choices: [
          { id: 'a', label: 'Conduct mock interviews with key personnel to prepare for auditor questions', nextNodeId: 'mock-prep' },
          { id: 'b', label: 'Focus entirely on evidence collection and skip interview prep', nextNodeId: 'evidence-only' },
        ],
      },
      {
        id: 'patches-first',
        title: 'Patch Assessment Sprint',
        description: 'IT has completed the overdue patch assessments, but the rush resulted in minimal documentation. Meanwhile, you discover training records show two engineers whose refresher training expired last month and they still have active access.',
        choices: [
          { id: 'a', label: 'Immediately suspend access and document the gap with corrective actions', nextNodeId: 'proactive-gap' },
          { id: 'b', label: 'Rush the engineers through training before the audit', nextNodeId: 'rushed-training' },
        ],
      },
      {
        id: 'passive-collection',
        title: 'Evidence Arrives in Chaos',
        description: 'Friday arrives and your inbox is full of documents in various formats, with inconsistent naming, and several duplicates. You notice critical evidence is missing for CIP-010, but stakeholders have checked out for the weekend.',
        choices: [
          { id: 'a', label: 'Work through the weekend to organize and identify remaining gaps', nextNodeId: 'weekend-scramble' },
          { id: 'b', label: 'Accept what you have and present it as-is to the auditors', nextNodeId: 'disorganized-ending' },
        ],
      },
      {
        id: 'fixing-alone',
        title: 'Overwhelmed',
        description: 'After two days of working alone on evidence organization, you\'re exhausted and realize you\'ve only covered CIP-004. The IT and OT evidence hasn\'t been touched, and you don\'t have the technical knowledge to verify if their documentation is complete.',
        choices: [
          { id: 'a', label: 'Admit you need help and call the stakeholder meeting', nextNodeId: 'late-escalation' },
        ],
      },
      {
        id: 'late-escalation',
        title: 'Late but Recovering',
        description: 'Leadership is concerned about the delayed response but appreciates your transparency. A war room is established with dedicated resources. The team rallies, but you\'ve lost valuable preparation time and stress levels are high.',
        choices: [
          { id: 'a', label: 'Implement accelerated preparation with extended hours', nextNodeId: 'moderate-ending' },
        ],
      },
      {
        id: 'mock-prep',
        title: 'Prepared and Confident',
        description: 'Mock interviews revealed that your IT lead was uncertain about explaining the mitigation plan process. You\'ve coached him on key talking points. Evidence is organized, naming conventions are consistent, and a retrieval test showed you can find any document in under 90 seconds.',
        choices: [
          { id: 'a', label: 'Proceed to the audit with confidence', nextNodeId: 'excellent-ending' },
        ],
      },
      {
        id: 'evidence-only',
        title: 'Documentation Ready, People Unprepared',
        description: 'Your evidence repository is excellent, but during the audit, your IT lead struggles to explain the patch assessment process and contradicts what\'s documented. The auditor notes the inconsistency.',
        choices: [
          { id: 'a', label: 'Learn from this for next time', nextNodeId: 'moderate-ending' },
        ],
      },
      {
        id: 'proactive-gap',
        title: 'Transparent Gap Management',
        description: 'You\'ve documented the training gap with a clear corrective action plan. Access has been suspended until training is complete. When the auditors arrive, they appreciate your proactive identification and documentation of the issue.',
        choices: [
          { id: 'a', label: 'Continue with final audit preparations', nextNodeId: 'good-ending' },
        ],
      },
      {
        id: 'rushed-training',
        title: 'Questionable Training Records',
        description: 'The engineers completed training the day before the audit. The auditor questions why training completion dates are so close to the audit date and asks to see the training content that was covered in such a short time.',
        choices: [
          { id: 'a', label: 'Explain the situation honestly', nextNodeId: 'moderate-ending' },
        ],
      },
      {
        id: 'weekend-scramble',
        title: 'Last-Minute Organization',
        description: 'You\'ve worked through the weekend and organized the evidence, but you\'re exhausted. You found a missing baseline configuration document and had to ask IT to create it Monday morning—just two days before the audit.',
        choices: [
          { id: 'a', label: 'Present the organized but hastily assembled evidence', nextNodeId: 'moderate-ending' },
        ],
      },
      // Endings
      {
        id: 'excellent-ending',
        title: 'Audit Success',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'good',
        endingSummary: 'The audit concludes with no findings. The auditors commend your evidence organization, the team\'s knowledge of processes, and the proactive gap management approach. Leadership receives positive feedback about the compliance program\'s maturity.\n\n**Key takeaways:**\n- Early stakeholder engagement was critical\n- Systematic tracking prevented gaps from being missed\n- Mock interviews prepared the team for auditor questions\n- Evidence organization enabled quick retrieval',
      },
      {
        id: 'good-ending',
        title: 'Minor Finding, Strong Response',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'good',
        endingSummary: 'The audit results in one minor finding related to the training gap, but the auditors note your proactive identification and corrective action plan as a positive indicator of program maturity. No penalties are expected.\n\n**Key takeaways:**\n- Proactive gap identification demonstrates compliance culture\n- Documentation of corrective actions is essential\n- Transparency with auditors builds credibility',
      },
      {
        id: 'moderate-ending',
        title: 'Mixed Results',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'neutral',
        endingSummary: 'The audit results in two findings: one for documentation inconsistencies and one related to the training/patch assessment timing issues. The auditors note that while evidence exists, the program could benefit from better ongoing maintenance.\n\n**Key takeaways:**\n- Continuous compliance beats last-minute preparation\n- Training stakeholders on audit communication is important\n- Regular evidence reviews prevent scrambles',
      },
      {
        id: 'disorganized-ending',
        title: 'Difficult Audit Experience',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'poor',
        endingSummary: 'The audit is challenging. Auditors struggle to find requested evidence, and retrieval times exceed 30 minutes for some items. Multiple findings are issued, and the team is demoralized. A formal corrective action plan with regional oversight may be required.\n\n**Key takeaways:**\n- Disorganized evidence creates audit friction\n- Passive coordination fails under time pressure\n- Evidence management is an ongoing responsibility, not an audit-prep activity',
      },
      {
        id: 'hope-ending',
        title: 'Unprepared',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'poor',
        endingSummary: 'The audit reveals significant gaps in evidence and process documentation. Several findings are issued, and leadership questions why earlier warning signs weren\'t escalated. The compliance program\'s credibility is damaged.\n\n**Key takeaways:**\n- Hoping for the best is not a compliance strategy\n- Delayed escalation compounds problems\n- Stakeholder engagement must be proactive',
      },
    ],
  },

  'it-ot': {
    roleKey: 'it-ot',
    name: 'Emergency Security Patch with System Impact Risk',
    intro: 'A critical zero-day vulnerability has been publicly disclosed affecting the operating system running on several of your Medium Impact BES Cyber Systems. CISA has issued an emergency advisory, and your vendor has released a patch. Your operations team is concerned about system stability during a peak demand period, but the 35-day assessment clock has started.',
    relevantModules: [6, 7, 8],
    nodes: [
      {
        id: 'start',
        title: 'Critical Vulnerability Disclosed',
        description: 'The vulnerability allows remote code execution and is being actively exploited in the wild. Your security team confirms the affected systems include two SCADA servers and a historian. Operations is nervous about patching during summer peak load season. The patch was released yesterday.',
        choices: [
          { id: 'a', label: 'Begin immediate patch testing in your test environment', nextNodeId: 'test-first' },
          { id: 'b', label: 'Document that the patch is not applicable due to operational risk', nextNodeId: 'risky-deferral' },
          { id: 'c', label: 'Assess the vulnerability and develop a mitigation plan while scheduling patching', nextNodeId: 'balanced-approach' },
        ],
      },
      {
        id: 'test-first',
        title: 'Patch Testing Initiated',
        description: 'Your test environment mirrors production. After 48 hours of testing, the patch appears stable, but you discover it requires a reboot that will take systems offline for 15 minutes. Operations requests you delay until the weekend.',
        choices: [
          { id: 'a', label: 'Schedule the patch for the upcoming maintenance window (this weekend)', nextNodeId: 'weekend-patch' },
          { id: 'b', label: 'Push for an emergency maintenance window during off-peak hours tonight', nextNodeId: 'emergency-window' },
        ],
      },
      {
        id: 'risky-deferral',
        title: 'Dangerous Documentation',
        description: 'You document the patch as "not applicable" due to operational concerns. However, a colleague points out that CIP-007 requires technical justification for non-applicability, and "operational inconvenience" is not a valid technical reason. The vulnerability is clearly applicable to your systems.',
        choices: [
          { id: 'a', label: 'Correct the assessment and develop a proper mitigation plan', nextNodeId: 'mitigation-recovery' },
          { id: 'b', label: 'Keep the documentation and hope auditors accept it', nextNodeId: 'audit-failure' },
        ],
      },
      {
        id: 'balanced-approach',
        title: 'Structured Response',
        description: 'You\'ve documented the vulnerability assessment within 24 hours of patch release. You\'ve identified compensating controls (enhanced monitoring, network segmentation review) while scheduling patching for the next maintenance window. Your mitigation plan is documented with clear timelines.',
        choices: [
          { id: 'a', label: 'Implement compensating controls immediately while waiting for patch window', nextNodeId: 'controls-first' },
          { id: 'b', label: 'Wait for the patch window; compensating controls are documented but not implemented', nextNodeId: 'documentation-only' },
        ],
      },
      {
        id: 'weekend-patch',
        title: 'Patch Deployment',
        description: 'The weekend arrives. You begin patching the first SCADA server, but midway through, you discover the patch breaks compatibility with a third-party monitoring tool. You have a decision to make.',
        choices: [
          { id: 'a', label: 'Roll back the patch and document the issue; work with vendor on compatibility', nextNodeId: 'rollback-good' },
          { id: 'b', label: 'Continue patching and deal with the monitoring gap later', nextNodeId: 'monitoring-gap' },
        ],
      },
      {
        id: 'emergency-window',
        title: 'Emergency Change',
        description: 'You\'ve pushed for an emergency maintenance window. Operations reluctantly agrees after you present the risk analysis. The emergency change request is approved, but documentation is rushed.',
        choices: [
          { id: 'a', label: 'Proceed with patching tonight and complete documentation tomorrow', nextNodeId: 'docs-later' },
          { id: 'b', label: 'Take 2 extra hours to complete change documentation before patching', nextNodeId: 'docs-first' },
        ],
      },
      {
        id: 'mitigation-recovery',
        title: 'Course Correction',
        description: 'You\'ve corrected the assessment and developed a mitigation plan including enhanced logging, additional network monitoring, and restricted access. The patch is scheduled for the next maintenance window, and your documentation is solid.',
        choices: [
          { id: 'a', label: 'Implement the mitigation measures and proceed with scheduled patching', nextNodeId: 'good-ending' },
        ],
      },
      {
        id: 'controls-first',
        title: 'Defense in Depth',
        description: 'Compensating controls are in place: enhanced monitoring shows no exploit attempts, network segmentation has been verified, and you\'ve added specific detection rules. The patch window arrives and deployment goes smoothly.',
        choices: [
          { id: 'a', label: 'Complete the patching and update baseline documentation', nextNodeId: 'excellent-ending' },
        ],
      },
      {
        id: 'documentation-only',
        title: 'Paper Controls',
        description: 'Your mitigation plan looks good on paper, but you haven\'t actually implemented the compensating controls. During the waiting period, your security team detects suspicious network traffic that may be related to the vulnerability.',
        choices: [
          { id: 'a', label: 'Immediately implement the compensating controls and investigate', nextNodeId: 'incident-response' },
          { id: 'b', label: 'Wait for the patch window; it\'s only a few days away', nextNodeId: 'incident-miss' },
        ],
      },
      {
        id: 'rollback-good',
        title: 'Professional Response',
        description: 'You\'ve documented the compatibility issue, rolled back cleanly, and engaged the vendor for a resolution. A revised patch is expected within 72 hours. Your mitigation plan remains in place.',
        choices: [
          { id: 'a', label: 'Apply the revised patch when available and update all documentation', nextNodeId: 'good-ending' },
        ],
      },
      {
        id: 'monitoring-gap',
        title: 'Unintended Consequences',
        description: 'The patch is installed, but your monitoring tool no longer works. You\'ve lost visibility into system performance and security events. CIP-007 requires logging and monitoring—you\'ve created a new compliance gap while fixing another.',
        choices: [
          { id: 'a', label: 'Document the gap and work urgently on a monitoring solution', nextNodeId: 'moderate-ending' },
        ],
      },
      {
        id: 'docs-later',
        title: 'Documentation Gap',
        description: 'Patching completed successfully at 2 AM. You go home exhausted. The next morning, you realize the change documentation wasn\'t completed and the baseline configurations weren\'t updated. Your manager asks for the change records.',
        choices: [
          { id: 'a', label: 'Complete documentation now and note the delay', nextNodeId: 'moderate-ending' },
        ],
      },
      {
        id: 'docs-first',
        title: 'Complete Process',
        description: 'Documentation is complete before patching begins. The change is successful, and the next morning you update baseline configurations. All evidence is in order.',
        choices: [
          { id: 'a', label: 'Verify changes and close out the change request', nextNodeId: 'good-ending' },
        ],
      },
      {
        id: 'incident-response',
        title: 'Incident Detected',
        description: 'Investigation reveals attempted exploitation, but your network segmentation prevented lateral movement. You\'ve triggered your incident response plan and documented everything. The patch is applied on an emergency basis.',
        choices: [
          { id: 'a', label: 'Complete incident documentation and lessons learned', nextNodeId: 'moderate-ending' },
        ],
      },
      {
        id: 'incident-miss',
        title: 'Breach Discovery',
        description: 'After patching, forensic analysis reveals the systems were compromised during the waiting period. Mandatory incident reporting is required. The investigation will examine your mitigation measures—or lack thereof.',
        choices: [
          { id: 'a', label: 'Report and begin incident response', nextNodeId: 'poor-ending' },
        ],
      },
      // Endings
      {
        id: 'excellent-ending',
        title: 'Textbook Response',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'good',
        endingSummary: 'Your response was exemplary: rapid assessment, documented mitigation, implemented compensating controls, and timely patching. Baseline configurations are updated, and all evidence is audit-ready. This is how CIP-007 is meant to work.\n\n**Key takeaways:**\n- 35-day assessment clock requires immediate action\n- Compensating controls provide defense while awaiting patches\n- Documentation throughout the process is essential\n- Test environments enable confident deployment',
      },
      {
        id: 'good-ending',
        title: 'Solid Performance',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'good',
        endingSummary: 'You navigated a challenging situation well. Documentation is complete, patching was accomplished within requirements, and any issues were handled professionally. Your audit evidence will demonstrate a mature patch management process.\n\n**Key takeaways:**\n- Process documentation must happen in real-time\n- Vendor compatibility issues require professional handling\n- Mitigation plans bridge gaps when immediate patching isn\'t possible',
      },
      {
        id: 'moderate-ending',
        title: 'Room for Improvement',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'neutral',
        endingSummary: 'The vulnerability was addressed, but process gaps were exposed. Documentation delays, monitoring gaps, or incident responses created additional work and potential audit concerns. You\'ll want to improve processes for next time.\n\n**Key takeaways:**\n- Rushing creates new problems\n- Documentation must be concurrent with technical work\n- Compensating controls must actually be implemented, not just documented',
      },
      {
        id: 'poor-ending',
        title: 'Significant Issues',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'poor',
        endingSummary: 'The incident resulted in a reportable cyber security incident and mandatory reporting. The investigation will examine whether your mitigation measures were adequate. This may result in findings and increased regulatory scrutiny.\n\n**Key takeaways:**\n- "Paper" mitigation without implementation provides no protection\n- Delayed response to active threats has real consequences\n- CIP requirements exist because these scenarios happen',
      },
      {
        id: 'audit-failure',
        title: 'Compliance Failure',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'poor',
        endingSummary: 'The flawed documentation is discovered during the next audit. Auditors identify the "not applicable" assessment as incorrect, resulting in a finding for failure to assess and apply patches. Your entity faces potential penalties.\n\n**Key takeaways:**\n- Technical justification is required for non-applicability\n- Operational convenience is not a valid CIP exception\n- Auditors will examine patch assessment rationale carefully',
      },
    ],
  },

  'physical-security': {
    roleKey: 'physical-security',
    name: 'Suspicious Badge Activity at a PSP',
    intro: 'It\'s 6:47 AM and your Physical Access Control System (PACS) has generated an alert: multiple failed badge attempts at a PSP door followed by a successful entry using a badge belonging to an employee who retired last month. The access should have been revoked within 24 hours of their departure.',
    relevantModules: [5, 7],
    nodes: [
      {
        id: 'start',
        title: 'Alert Received',
        description: 'The alert shows 4 failed attempts with an unknown badge at 6:41-6:44 AM, then a successful entry at 6:45 AM with the retired employee\'s badge. The area houses a Medium Impact BES Cyber System. You\'re the first physical security person to see this alert.',
        choices: [
          { id: 'a', label: 'Call the control room to have someone check the area immediately', nextNodeId: 'immediate-check' },
          { id: 'b', label: 'Review camera footage first to understand what happened', nextNodeId: 'camera-review' },
          { id: 'c', label: 'Email the IT security team and wait for a response', nextNodeId: 'email-wait' },
        ],
      },
      {
        id: 'immediate-check',
        title: 'Area Check Dispatched',
        description: 'An operator arrives at the PSP within 5 minutes. They report that a contractor is inside, working on HVAC equipment. The contractor claims they were given the badge by "someone in operations" to get started early. They\'re not on today\'s visitor log.',
        choices: [
          { id: 'a', label: 'Have the operator escort the contractor out immediately and secure the badge', nextNodeId: 'escort-out' },
          { id: 'b', label: 'Let them continue working; it\'s probably just a scheduling mixup', nextNodeId: 'allow-work' },
        ],
      },
      {
        id: 'camera-review',
        title: 'Video Review',
        description: 'Camera footage shows an individual in contractor attire trying multiple badges before one worked. They appeared to have a handful of badges. This looks like more than a simple forgotten revocation.',
        choices: [
          { id: 'a', label: 'Call the control room for immediate area check AND alert IT security', nextNodeId: 'coordinated-response' },
          { id: 'b', label: 'Continue watching footage to gather more information', nextNodeId: 'delayed-response' },
        ],
      },
      {
        id: 'email-wait',
        title: 'Delayed Action',
        description: 'After 20 minutes with no response, you check the camera footage and see the individual has already left the PSP carrying what appears to be equipment. The area is now empty.',
        choices: [
          { id: 'a', label: 'Immediately report to management and initiate incident response', nextNodeId: 'late-incident' },
        ],
      },
      {
        id: 'escort-out',
        title: 'Contractor Removed',
        description: 'The contractor is escorted out and the badge is confiscated. They\'re upset, claiming they have legitimate work to do. You\'ve recovered the badge, but you need to understand how they got it and whether any damage was done.',
        choices: [
          { id: 'a', label: 'Initiate full incident response including IT forensics on systems in the PSP', nextNodeId: 'full-incident' },
          { id: 'b', label: 'Document the event and revoke the badge; no need for full incident response', nextNodeId: 'minimal-response' },
        ],
      },
      {
        id: 'allow-work',
        title: 'Unauthorized Access Continues',
        description: 'Two hours later, the IT security team calls you—they\'ve detected unusual network activity from a device in that PSP. The "contractor" appears to have plugged an unauthorized device into the network.',
        choices: [
          { id: 'a', label: 'Immediately respond and escalate to full incident', nextNodeId: 'breach-response' },
        ],
      },
      {
        id: 'coordinated-response',
        title: 'Multi-Team Response',
        description: 'Control room operator finds the individual attempting to connect a laptop to the network. They\'re detained by security. IT security is already monitoring for any network intrusion attempts. The situation is contained.',
        choices: [
          { id: 'a', label: 'Proceed with incident documentation and investigation', nextNodeId: 'excellent-ending' },
        ],
      },
      {
        id: 'delayed-response',
        title: 'Too Late',
        description: 'By the time you finish reviewing footage and dispatch someone, the individual has left. Initial investigation suggests they may have accessed a system console. This is now a potential cyber incident.',
        choices: [
          { id: 'a', label: 'Initiate incident response and notify management', nextNodeId: 'moderate-ending' },
        ],
      },
      {
        id: 'late-incident',
        title: 'Incident Discovered Late',
        description: 'Investigation reveals the individual spent 35 minutes in the PSP and accessed multiple systems. The delay in response means you\'re now conducting forensics on systems that may have been compromised hours ago.',
        choices: [
          { id: 'a', label: 'Complete incident investigation and document lessons learned', nextNodeId: 'poor-ending' },
        ],
      },
      {
        id: 'full-incident',
        title: 'Thorough Response',
        description: 'The incident response team is activated. IT forensics confirms no systems were accessed. The contractor is interviewed—they claim they found the badge in the parking lot. Law enforcement is contacted. Your 24-hour revocation failure is documented as a contributing factor.',
        choices: [
          { id: 'a', label: 'Complete incident documentation and implement corrective actions', nextNodeId: 'good-ending' },
        ],
      },
      {
        id: 'minimal-response',
        title: 'Incomplete Investigation',
        description: 'A week later, IT discovers evidence of unauthorized access attempts on a BES Cyber System that occurred on the morning of the badge incident. The connection is made, but valuable forensic evidence may have been lost.',
        choices: [
          { id: 'a', label: 'Re-open as full incident investigation', nextNodeId: 'moderate-ending' },
        ],
      },
      {
        id: 'breach-response',
        title: 'Security Incident',
        description: 'The unauthorized device is recovered and the individual is detained. This is now a reportable cyber security incident. Investigation will examine the 24-hour revocation failure and your decision to allow work to continue.',
        choices: [
          { id: 'a', label: 'Cooperate with investigation and implement corrective actions', nextNodeId: 'poor-ending' },
        ],
      },
      // Endings
      {
        id: 'excellent-ending',
        title: 'Threat Neutralized',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'good',
        endingSummary: 'Your rapid coordinated response prevented a potential breach. The incident is documented, the badge revocation gap has been addressed with process improvements, and your alerting and response procedures proved effective.\n\n**Key takeaways:**\n- PACS alerts require immediate response, not investigation delay\n- Coordinated physical and cyber security response is critical\n- 24-hour access revocation exists to prevent exactly this scenario\n- Document everything for both incident response and audit evidence',
      },
      {
        id: 'good-ending',
        title: 'Incident Contained',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'good',
        endingSummary: 'The incident was contained before any systems were compromised. While the 24-hour revocation failure will be noted, your response demonstrated good incident handling. Corrective actions are being implemented.\n\n**Key takeaways:**\n- Rapid physical response prevented technical compromise\n- Full incident investigation is always warranted for unauthorized PSP access\n- Access revocation processes need improvement\n- Badge accountability is a security requirement',
      },
      {
        id: 'moderate-ending',
        title: 'Lessons Learned',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'neutral',
        endingSummary: 'The incident highlighted gaps in both access revocation processes and incident response timeliness. Systems required forensic analysis, and regulatory reporting may be necessary. Process improvements are being mandated.\n\n**Key takeaways:**\n- Delayed response extends potential compromise window\n- All PSP access anomalies warrant immediate physical response\n- Minimal response to security events creates risk\n- 24-hour revocation is a hard requirement for good reason',
      },
      {
        id: 'poor-ending',
        title: 'Security Failure',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'poor',
        endingSummary: 'The delayed and inadequate response allowed a security incident that required mandatory reporting. Multiple CIP violations are documented: failure to revoke access within 24 hours, failure to respond to security alerts, and potential unauthorized access to BES Cyber Systems.\n\n**Key takeaways:**\n- Physical security alerts demand immediate action\n- Email is not appropriate for security incident notification\n- Never allow unauthorized personnel to continue working in a PSP\n- Response time directly impacts incident severity',
      },
    ],
  },

  'hr-training': {
    roleKey: 'hr-training',
    name: 'Onboarding New Remote-Access Staff Under Time Pressure',
    intro: 'Three new contract engineers are starting Monday—in four business days. They need authorized electronic access to BES Cyber Systems to perform emergency relay testing that\'s been scheduled for weeks. The project manager is pressuring you to "get them access by Monday no matter what," but CIP-004 requirements cannot be bypassed.',
    relevantModules: [4, 3],
    nodes: [
      {
        id: 'start',
        title: 'The Pressure Begins',
        description: 'The project manager explains this is a critical grid reliability project. If the contractors can\'t work Monday, the utility faces potential NERC reliability violations and significant costs. They suggest "temporary access" or "supervised access" as workarounds.',
        choices: [
          { id: 'a', label: 'Explain CIP-004 requirements clearly and work to meet them by Monday', nextNodeId: 'proper-process' },
          { id: 'b', label: 'Ask IT to grant "limited" access while you complete the paperwork', nextNodeId: 'shortcut-attempt' },
          { id: 'c', label: 'Tell the project manager it\'s impossible; the project will have to be delayed', nextNodeId: 'immediate-refusal' },
        ],
      },
      {
        id: 'proper-process',
        title: 'Accelerated but Compliant',
        description: 'You outline what must happen: PRA initiation with expedited processing, training completion, and documented authorization. The contractors must provide required information immediately. You contact your PRA vendor about rush processing (2-3 day turnaround).',
        choices: [
          { id: 'a', label: 'Get contractor info today and start all three PRAs immediately', nextNodeId: 'immediate-start' },
          { id: 'b', label: 'Wait until Monday morning to start the process', nextNodeId: 'delayed-start' },
        ],
      },
      {
        id: 'shortcut-attempt',
        title: 'Compliance Concern',
        description: 'IT refuses to grant access without proper documentation, citing past audit findings. They explain that "limited" or "temporary" authorized electronic access doesn\'t exist under CIP—you either have authorized access after completing requirements, or you don\'t.',
        choices: [
          { id: 'a', label: 'Acknowledge the mistake and implement proper process', nextNodeId: 'proper-process' },
          { id: 'b', label: 'Escalate to IT management to override their decision', nextNodeId: 'escalation-fail' },
        ],
      },
      {
        id: 'immediate-refusal',
        title: 'Project Manager Escalates',
        description: 'The project manager escalates to their VP, who calls your manager. Your manager asks if there\'s truly no way to meet CIP requirements by Monday, or if you just assumed it couldn\'t be done.',
        choices: [
          { id: 'a', label: 'Admit you didn\'t fully explore options and develop an accelerated plan', nextNodeId: 'proper-process' },
          { id: 'b', label: 'Maintain that it\'s impossible and recommend project delay', nextNodeId: 'project-delayed' },
        ],
      },
      {
        id: 'immediate-start',
        title: 'Thursday Afternoon Sprint',
        description: 'By 4 PM Thursday, you have all three contractors\' information submitted for PRA. Training is scheduled for Friday afternoon (virtual). Your PRA vendor confirms 48-hour turnaround is possible with rush fee. It\'s tight but feasible.',
        choices: [
          { id: 'a', label: 'Monitor progress hourly and troubleshoot any delays immediately', nextNodeId: 'active-monitoring' },
          { id: 'b', label: 'Check back Monday morning to see if everything completed', nextNodeId: 'passive-monitoring' },
        ],
      },
      {
        id: 'delayed-start',
        title: 'Lost Critical Time',
        description: 'By Monday morning, PRAs aren\'t complete and training hasn\'t been scheduled. The contractors are on-site but cannot work. The project manager is furious, and leadership is asking why the four days weren\'t used productively.',
        choices: [
          { id: 'a', label: 'Apologize and complete the process as quickly as possible', nextNodeId: 'moderate-ending' },
        ],
      },
      {
        id: 'escalation-fail',
        title: 'Leadership Backs Compliance',
        description: 'IT management supports their team\'s decision and escalates to the CIP Senior Manager, who confirms no shortcuts are permitted. You\'ve now created conflict and still need to complete proper requirements. Time has been wasted.',
        choices: [
          { id: 'a', label: 'Implement proper process with remaining time', nextNodeId: 'compressed-timeline' },
        ],
      },
      {
        id: 'project-delayed',
        title: 'Costly Delay',
        description: 'The project is delayed two weeks while you complete CIP requirements at a normal pace. The utility incurs significant costs and schedule impacts. Leadership questions whether the delay was truly necessary.',
        choices: [
          { id: 'a', label: 'Complete the process and document lessons learned', nextNodeId: 'poor-ending' },
        ],
      },
      {
        id: 'active-monitoring',
        title: 'Weekend Progress',
        description: 'Friday training completes successfully. Saturday morning, two PRAs are complete. The third has a snag—the contractor\'s previous employer hasn\'t responded to verification requests. You have a decision to make.',
        choices: [
          { id: 'a', label: 'Work with the vendor to try alternative verification; prepare contingency plan', nextNodeId: 'contingency-plan' },
          { id: 'b', label: 'Grant access to two contractors and keep the third on standby', nextNodeId: 'partial-team' },
        ],
      },
      {
        id: 'passive-monitoring',
        title: 'Monday Morning Surprise',
        description: 'Monday morning, you discover one PRA failed due to an issue that could have been resolved Friday if caught earlier. Only two of three contractors can start. The project manager has to reorganize the entire work schedule.',
        choices: [
          { id: 'a', label: 'Resolve the PRA issue for the third contractor as quickly as possible', nextNodeId: 'moderate-ending' },
        ],
      },
      {
        id: 'compressed-timeline',
        title: 'Time Crunch',
        description: 'With only two days remaining, you do everything possible, but only one contractor\'s PRA completes in time. Training is done, but the team can\'t work effectively with only one authorized person.',
        choices: [
          { id: 'a', label: 'Start with one contractor and complete others as soon as possible', nextNodeId: 'moderate-ending' },
        ],
      },
      {
        id: 'contingency-plan',
        title: 'Problem Solving',
        description: 'You contact the contractor about alternative verification sources. They provide a letter from a different previous employer. The vendor accepts it. By Sunday evening, all three PRAs are complete, training is done, and access authorizations are documented.',
        choices: [
          { id: 'a', label: 'Grant access Monday morning with all documentation in place', nextNodeId: 'excellent-ending' },
        ],
      },
      {
        id: 'partial-team',
        title: 'Partial Success',
        description: 'Two contractors start Monday with proper authorization. The third contractor\'s PRA completes Wednesday. Some work is reorganized, but the project proceeds. Documentation is complete for those authorized.',
        choices: [
          { id: 'a', label: 'Complete the third authorization and document the process', nextNodeId: 'good-ending' },
        ],
      },
      // Endings
      {
        id: 'excellent-ending',
        title: 'Full Success Under Pressure',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'good',
        endingSummary: 'All three contractors start Monday with fully compliant onboarding. PRAs complete, training documented, access authorizations in place. The project proceeds on schedule and your documentation will pass any audit.\n\n**Key takeaways:**\n- CIP-004 requirements can often be met with urgency and creativity\n- Early start and active monitoring are critical for tight timelines\n- PRA vendors often offer expedited processing\n- Never assume deadlines can\'t be met without exploring options',
      },
      {
        id: 'good-ending',
        title: 'Mostly On Track',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'good',
        endingSummary: 'Two of three contractors started Monday; the third joined Wednesday. Some project reorganization was needed, but no compliance shortcuts were taken. Documentation is complete for all.\n\n**Key takeaways:**\n- Partial success is better than compliance failure\n- Active problem-solving can resolve PRA issues quickly\n- Communication with project stakeholders about realistic timelines is important\n- Always complete proper authorization before access is granted',
      },
      {
        id: 'moderate-ending',
        title: 'Compliance Met, But Delayed',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'neutral',
        endingSummary: 'The project was delayed, but eventually all contractors were properly onboarded with complete CIP-004 documentation. However, the delays could have been prevented with better planning and faster initial action.\n\n**Key takeaways:**\n- Time is precious when onboarding personnel with CIP access needs\n- Passive monitoring allows problems to become delays\n- Understanding CIP requirements before committing to timelines prevents conflicts\n- Never wait until the last minute to start compliance processes',
      },
      {
        id: 'poor-ending',
        title: 'Unnecessary Delay',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'poor',
        endingSummary: 'A two-week project delay occurred because available time wasn\'t used effectively. While compliance was maintained (which is good), leadership questions the judgment calls that led to such significant schedule and cost impacts.\n\n**Key takeaways:**\n- Refusing to explore accelerated options wastes time and credibility\n- CIP requirements can often be met faster than assumed\n- Escalation without offering solutions creates conflict\n- Know your PRA vendor\'s expedite options before emergencies arise',
      },
    ],
  },

  leadership: {
    roleKey: 'leadership',
    name: 'Board Wants a CIP Risk Update After a Regional Incident',
    intro: 'A neighboring utility experienced a publicized cyber incident affecting their control systems last week. Your Board of Directors has called an emergency meeting and wants a briefing on your organization\'s CIP security posture and any "exposure" to similar attacks. You have 72 hours to prepare.',
    relevantModules: [1, 3, 10],
    nodes: [
      {
        id: 'start',
        title: 'Board Meeting Scheduled',
        description: 'The Board expects you to explain: (1) What happened at the other utility, (2) Whether it could happen here, (3) What controls you have in place, and (4) What the compliance status is. Your compliance manager is nervous—the last internal audit found some gaps.',
        choices: [
          { id: 'a', label: 'Meet with your compliance and security teams to assess current status', nextNodeId: 'team-meeting' },
          { id: 'b', label: 'Ask your compliance manager to prepare the briefing; you\'ll review it', nextNodeId: 'delegate-prep' },
          { id: 'c', label: 'Call an industry contact to understand what happened at the other utility', nextNodeId: 'industry-intel' },
        ],
      },
      {
        id: 'team-meeting',
        title: 'Status Assessment',
        description: 'Your team reports: Most CIP requirements are well-documented, but there are three open corrective actions (one for patch assessment timing, two for training documentation gaps). The incident at the other utility appears to have involved a phishing attack leading to control system access.',
        choices: [
          { id: 'a', label: 'Prepare an honest briefing including the gaps and remediation plans', nextNodeId: 'honest-briefing' },
          { id: 'b', label: 'Focus the briefing on controls in place; minimize discussion of gaps', nextNodeId: 'minimize-gaps' },
        ],
      },
      {
        id: 'delegate-prep',
        title: 'Compliance Manager Briefing',
        description: 'Your compliance manager prepares a technical briefing heavy on CIP requirements and acronyms. Reading through it, you realize the Board won\'t understand half of it. The deck also doesn\'t mention the corrective actions currently in progress.',
        choices: [
          { id: 'a', label: 'Work with the compliance manager to simplify the message and add gap information', nextNodeId: 'improve-briefing' },
          { id: 'b', label: 'Use it as-is; the technical detail will show the Board you have experts handling this', nextNodeId: 'technical-overload' },
        ],
      },
      {
        id: 'industry-intel',
        title: 'Intelligence Gathering',
        description: 'Your contact shares that the incident involved social engineering to get credentials, then lateral movement to control systems. The attack exploited weak network segmentation. This gives you context for your own security discussion.',
        choices: [
          { id: 'a', label: 'Now meet with your team to assess your controls against this attack pattern', nextNodeId: 'informed-assessment' },
          { id: 'b', label: 'Brief the Board on what happened elsewhere; your team can fill in your status later', nextNodeId: 'incomplete-prep' },
        ],
      },
      {
        id: 'honest-briefing',
        title: 'Transparent Preparation',
        description: 'You prepare a Board-level summary: executive overview of the incident, your current CIP compliance status including the three corrective actions, how your controls address the attack vector, and your improvement roadmap.',
        choices: [
          { id: 'a', label: 'Present the briefing with confidence in your transparency', nextNodeId: 'board-meeting-good' },
        ],
      },
      {
        id: 'minimize-gaps',
        title: 'Selective Presentation',
        description: 'You present controls and achievements but skip the corrective actions. A Board member who used to work in energy compliance asks directly: "Are there any open findings or gaps I should know about?"',
        choices: [
          { id: 'a', label: 'Answer honestly about the corrective actions', nextNodeId: 'recovered-honesty' },
          { id: 'b', label: 'Downplay: "Just minor documentation items, nothing significant"', nextNodeId: 'board-trust-issue' },
        ],
      },
      {
        id: 'improve-briefing',
        title: 'Enhanced Briefing',
        description: 'Working together, you create a clear, non-technical summary with: plain-language explanation of CIP, current compliance status, known gaps with timelines, and recommended next steps. It\'s honest and actionable.',
        choices: [
          { id: 'a', label: 'Present the improved briefing to the Board', nextNodeId: 'board-meeting-good' },
        ],
      },
      {
        id: 'technical-overload',
        title: 'Lost in Translation',
        description: 'The Board struggles with the technical briefing. They interrupt with basic questions, lose patience, and eventually ask: "Just tell us—are we at risk or not?" You don\'t have a simple answer prepared.',
        choices: [
          { id: 'a', label: 'Pivot to simplified verbal explanation', nextNodeId: 'moderate-ending' },
        ],
      },
      {
        id: 'informed-assessment',
        title: 'Targeted Assessment',
        description: 'With the attack pattern understood, your IT/OT team confirms: your network segmentation is stronger (separate IT/OT networks), you have multi-factor authentication for remote access, but your phishing awareness training is due for refresh.',
        choices: [
          { id: 'a', label: 'Prepare briefing with specific comparison to the incident attack vector', nextNodeId: 'board-meeting-excellent' },
        ],
      },
      {
        id: 'incomplete-prep',
        title: 'Questions You Can\'t Answer',
        description: 'During the Board meeting, you explain the incident well, but when asked "Could that happen here?" you don\'t have specific answers about your own controls. The Board is frustrated by the lack of actionable information.',
        choices: [
          { id: 'a', label: 'Commit to follow-up assessment and briefing', nextNodeId: 'poor-ending' },
        ],
      },
      {
        id: 'board-meeting-good',
        title: 'Constructive Board Discussion',
        description: 'The Board appreciates your transparency. They ask good questions about the corrective action timelines and resource needs. One director suggests quarterly compliance updates going forward. The tone is supportive.',
        choices: [
          { id: 'a', label: 'Commit to quarterly updates and enhanced oversight', nextNodeId: 'excellent-ending' },
        ],
      },
      {
        id: 'board-meeting-excellent',
        title: 'Impressive Briefing',
        description: 'Your briefing directly addresses the Board\'s concerns: you explain the incident, show how your controls compare, acknowledge gaps with remediation plans, and demonstrate you understand both the threat and your posture. The Board is impressed.',
        choices: [
          { id: 'a', label: 'Establish ongoing Board cybersecurity reporting', nextNodeId: 'excellent-ending' },
        ],
      },
      {
        id: 'recovered-honesty',
        title: 'Trust Preserved',
        description: 'You provide honest information about the corrective actions. The Board appreciates your candor. They express some concern about the gaps but confidence in your leadership because you were forthcoming.',
        choices: [
          { id: 'a', label: 'Commit to regular updates until gaps are closed', nextNodeId: 'good-ending' },
        ],
      },
      {
        id: 'board-trust-issue',
        title: 'Credibility Damaged',
        description: 'Two weeks later, the knowledgeable Board member asks to see your compliance dashboard. They discover the corrective actions you minimized. Your credibility with the Board is damaged—they wonder what else you\'re not telling them.',
        choices: [
          { id: 'a', label: 'Acknowledge the mistake and commit to full transparency', nextNodeId: 'poor-ending' },
        ],
      },
      // Endings
      {
        id: 'excellent-ending',
        title: 'Strengthened Board Relationship',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'good',
        endingSummary: 'Your prepared, honest, and contextual briefing impressed the Board. They now have confidence in your cybersecurity oversight and have approved quarterly updates. Resources for closing gaps have been pre-approved.\n\n**Key takeaways:**\n- Boards expect plain-language explanations, not technical jargon\n- Transparency about gaps builds trust; hiding them destroys it\n- Contextualizing your posture against real incidents demonstrates leadership\n- Regular Board engagement on cyber risk is increasingly expected',
      },
      {
        id: 'good-ending',
        title: 'Trust Through Honesty',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'good',
        endingSummary: 'Despite some initial missteps, your honesty about gaps preserved Board trust. They\'re watching more closely now, but they support your improvement efforts. Your compliance program has visible executive sponsorship.\n\n**Key takeaways:**\n- When caught in omission, honest recovery is essential\n- Board members often have relevant experience—don\'t underestimate them\n- Gaps are expected; what matters is awareness and remediation plans\n- Leadership visibility into compliance drives program maturity',
      },
      {
        id: 'moderate-ending',
        title: 'Room for Improvement',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'neutral',
        endingSummary: 'The Board received some answers but left with lingering concerns. A follow-up session is required with better preparation. You\'ve learned that Board communication on cyber risk requires different skills than technical compliance management.\n\n**Key takeaways:**\n- Technical experts and executives communicate differently\n- Always prepare Board communications for a non-technical audience\n- "Are we at risk?" requires a clear, honest answer\n- Delegation without oversight risks misalignment',
      },
      {
        id: 'poor-ending',
        title: 'Lost Confidence',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'poor',
        endingSummary: 'The Board has lost confidence in your cybersecurity oversight. Expect increased scrutiny, potential external consultants, and damaged credibility. Rebuilding trust will take time and demonstrated performance.\n\n**Key takeaways:**\n- Boards don\'t accept "I don\'t know" when they\'re asking about major risks\n- Hiding information from Board members is a career-limiting decision\n- Preparation for Board-level discussions requires your personal involvement\n- Leadership ownership of cybersecurity is a fiduciary responsibility',
      },
    ],
  },

  other: {
    roleKey: 'other',
    name: 'Supporting CIP Compliance from Outside the Core Team',
    intro: 'You\'ve just learned that your role—supporting procurement, facilities, or general operations—has a connection to CIP compliance you weren\'t fully aware of. A compliance audit is coming up, and the CIP team needs information from your area. You want to help but aren\'t sure what\'s expected.',
    relevantModules: [1, 9],
    nodes: [
      {
        id: 'start',
        title: 'The Request Arrives',
        description: 'The compliance manager has emailed asking for documentation related to your area: vendor contracts with security language, facility maintenance records for PSP areas, or procurement records for software. You\'ve never been asked for this before.',
        choices: [
          { id: 'a', label: 'Schedule a meeting to understand exactly what they need and why', nextNodeId: 'clarify-request' },
          { id: 'b', label: 'Send everything you have related to vendors/facilities and let them sort it out', nextNodeId: 'data-dump' },
          { id: 'c', label: 'Explain that this isn\'t really your area and suggest they ask someone else', nextNodeId: 'deflect' },
        ],
      },
      {
        id: 'clarify-request',
        title: 'Understanding the Context',
        description: 'The compliance manager explains: CIP-013 requires documented supply chain risk management. Your vendor contracts need specific security provisions, and they need to verify those provisions exist for vendors supplying components to BES Cyber Systems.',
        choices: [
          { id: 'a', label: 'Pull the specific contracts they\'ve identified and review them together', nextNodeId: 'targeted-review' },
          { id: 'b', label: 'Ask them to explain CIP-013 in more detail so you understand the bigger picture', nextNodeId: 'learning-moment' },
        ],
      },
      {
        id: 'data-dump',
        title: 'Overwhelmed Compliance Team',
        description: 'You\'ve sent 200 documents. The compliance manager responds: "I need the specific contracts for these three vendors, not everything." They\'re frustrated, and the audit timeline is tight.',
        choices: [
          { id: 'a', label: 'Apologize and ask for the specific vendor list to pull targeted documents', nextNodeId: 'recover-targeted' },
          { id: 'b', label: 'Respond that you\'ve provided what you have and they can find what they need', nextNodeId: 'unhelpful-response' },
        ],
      },
      {
        id: 'deflect',
        title: 'Escalation',
        description: 'Your manager contacts you: the compliance manager has escalated, explaining that your area owns the vendor relationships or facility records they need. Your manager asks you to cooperate fully.',
        choices: [
          { id: 'a', label: 'Schedule the meeting you should have had initially', nextNodeId: 'clarify-request' },
        ],
      },
      {
        id: 'targeted-review',
        title: 'Gap Discovery',
        description: 'Reviewing the contracts together, you discover that two of three vendor agreements don\'t include the required security notification provisions. This is a gap that needs to be addressed before the audit.',
        choices: [
          { id: 'a', label: 'Work with compliance to develop a plan for updating the contracts', nextNodeId: 'proactive-fix' },
          { id: 'b', label: 'Document that the contracts are what they are; not your problem to fix', nextNodeId: 'ownership-gap' },
        ],
      },
      {
        id: 'learning-moment',
        title: 'CIP Education',
        description: 'The compliance manager takes 20 minutes to explain CIP-013 supply chain requirements. You now understand that your vendor selections and contract language directly impact CIP compliance. This changes how you think about your role.',
        choices: [
          { id: 'a', label: 'Offer to help review all relevant contracts and create a checklist for future procurements', nextNodeId: 'engaged-partner' },
          { id: 'b', label: 'Thank them for the explanation and provide the specific documents requested', nextNodeId: 'good-ending' },
        ],
      },
      {
        id: 'recover-targeted',
        title: 'Back on Track',
        description: 'With the specific vendor list, you quickly pull the three contracts. The compliance manager is relieved and thanks you for the quick turnaround once you understood what was needed.',
        choices: [
          { id: 'a', label: 'Ask how you can help with future compliance needs', nextNodeId: 'good-ending' },
        ],
      },
      {
        id: 'unhelpful-response',
        title: 'Damaged Relationship',
        description: 'The compliance manager escalates to your manager and the CIP Senior Manager. You\'re now in a meeting explaining why you didn\'t cooperate with a compliance request. This reflects poorly on your judgment.',
        choices: [
          { id: 'a', label: 'Apologize and commit to providing what\'s needed', nextNodeId: 'moderate-ending' },
        ],
      },
      {
        id: 'proactive-fix',
        title: 'Collaborative Solution',
        description: 'You work with compliance and legal to draft contract amendments. You also create a standard security addendum for future vendor agreements. The compliance manager is impressed with your initiative.',
        choices: [
          { id: 'a', label: 'Implement the new contract process and update existing agreements', nextNodeId: 'excellent-ending' },
        ],
      },
      {
        id: 'ownership-gap',
        title: 'Compliance Finding',
        description: 'The audit results in a finding related to supply chain risk management. When asked why contracts weren\'t updated, the answer is that no one took ownership. Your manager asks why you didn\'t flag this when you found it.',
        choices: [
          { id: 'a', label: 'Acknowledge you could have done more to help address the gap', nextNodeId: 'poor-ending' },
        ],
      },
      {
        id: 'engaged-partner',
        title: 'Beyond the Request',
        description: 'Your proactive checklist for procurement is adopted as a standard process. Vendors are now screened for CIP-relevant security provisions before contracts are signed. You\'ve become a valued compliance partner.',
        choices: [
          { id: 'a', label: 'Continue supporting the compliance program in your role', nextNodeId: 'excellent-ending' },
        ],
      },
      // Endings
      {
        id: 'excellent-ending',
        title: 'Valued Compliance Partner',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'good',
        endingSummary: 'Your proactive engagement transformed a simple document request into a process improvement. You\'ve demonstrated that compliance is everyone\'s responsibility, and your contributions are recognized.\n\n**Key takeaways:**\n- CIP compliance extends beyond the core compliance team\n- Understanding why information is needed helps you provide better support\n- Proactive gap identification prevents findings\n- Compliance partnerships make programs stronger',
      },
      {
        id: 'good-ending',
        title: 'Helpful Contributor',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'good',
        endingSummary: 'You provided what was needed once you understood the context. The compliance team appreciates your cooperation, and you now have a better understanding of how your role connects to CIP.\n\n**Key takeaways:**\n- Asking clarifying questions saves time for everyone\n- Understanding CIP context helps you do your job better\n- Cooperation with compliance requests is part of everyone\'s role\n- Brief education on why something matters improves outcomes',
      },
      {
        id: 'moderate-ending',
        title: 'Lesson Learned',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'neutral',
        endingSummary: 'After some friction, you provided the information needed. The relationship with the compliance team is strained, but recoverable. You\'ve learned that compliance requests need to be taken seriously.\n\n**Key takeaways:**\n- Deflecting compliance requests creates escalation and visibility you don\'t want\n- Everyone has a role in compliance, even if it\'s not in their job description\n- Cooperation costs little; resistance costs much more\n- Understanding beats assumption',
      },
      {
        id: 'poor-ending',
        title: 'Contributed to Finding',
        description: '',
        choices: [],
        isEnding: true,
        outcomeType: 'poor',
        endingSummary: 'Your lack of engagement contributed to an audit finding. While compliance owns the program, you could have helped prevent this outcome. Your manager is disappointed in your judgment.\n\n**Key takeaways:**\n- "Not my job" is never a good response to compliance needs\n- Finding a gap and doing nothing about it is worse than not finding it\n- Compliance is a team sport—everyone contributes\n- Your actions affect the organization\'s compliance posture',
      },
    ],
  },
};
