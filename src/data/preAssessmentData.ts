import { UserRole } from '@/hooks/useUserPreferences';

export type AssessmentDomain = 
  | 'scope_assets'
  | 'training_people'
  | 'technical_controls'
  | 'incidents_recovery'
  | 'evidence_audit';

export const domainLabels: Record<AssessmentDomain, string> = {
  scope_assets: 'Scope & Assets',
  training_people: 'Training & People',
  technical_controls: 'Technical Controls',
  incidents_recovery: 'Incidents & Recovery',
  evidence_audit: 'Evidence & Audit',
};

export const domainModuleMapping: Record<AssessmentDomain, number[]> = {
  scope_assets: [1, 2, 3],
  training_people: [3, 4],
  technical_controls: [5, 6, 8],
  incidents_recovery: [7],
  evidence_audit: [9, 10],
};

export interface AssessmentQuestion {
  id: string;
  domain: AssessmentDomain;
  question: string;
  options: { id: string; label: string; isCorrect: boolean }[];
  explanation: string;
}

export interface PreAssessmentResults {
  [roleKey: string]: {
    completedAt: string;
    domainScores: Record<AssessmentDomain, number>;
  };
}

const commonQuestions: AssessmentQuestion[] = [
  // Scope & Assets
  {
    id: 'scope-1',
    domain: 'scope_assets',
    question: 'What determines whether a Cyber Asset is classified as a BES Cyber System?',
    options: [
      { id: 'a', label: 'The cost of the asset', isCorrect: false },
      { id: 'b', label: 'Whether it could affect the reliable operation of the BES within 15 minutes', isCorrect: true },
      { id: 'c', label: 'The age of the equipment', isCorrect: false },
      { id: 'd', label: 'Whether it has network connectivity', isCorrect: false },
    ],
    explanation: 'CIP-002 defines BES Cyber Systems as those that, if compromised, could impact reliable operation of the BES within 15 minutes.',
  },
  {
    id: 'scope-2',
    domain: 'scope_assets',
    question: 'Which impact rating applies to a Control Center controlling 1500 MW or more of generation?',
    options: [
      { id: 'a', label: 'Low Impact', isCorrect: false },
      { id: 'b', label: 'Medium Impact', isCorrect: false },
      { id: 'c', label: 'High Impact', isCorrect: true },
      { id: 'd', label: 'No Impact', isCorrect: false },
    ],
    explanation: 'Per CIP-002, Control Centers that control 1500 MW or more of generation are classified as High Impact.',
  },
  // Training & People
  {
    id: 'training-1',
    domain: 'training_people',
    question: 'How often must CIP training be refreshed for personnel with authorized access?',
    options: [
      { id: 'a', label: 'Every 6 months', isCorrect: false },
      { id: 'b', label: 'Every 12 months', isCorrect: true },
      { id: 'c', label: 'Every 24 months', isCorrect: false },
      { id: 'd', label: 'Only at initial hire', isCorrect: false },
    ],
    explanation: 'CIP-004 requires annual training refresh for all personnel with authorized cyber or unescorted physical access.',
  },
  {
    id: 'training-2',
    domain: 'training_people',
    question: 'What must be completed before an individual can receive authorized electronic access to BES Cyber Systems?',
    options: [
      { id: 'a', label: 'Only a background check', isCorrect: false },
      { id: 'b', label: 'Only CIP training', isCorrect: false },
      { id: 'c', label: 'Personnel Risk Assessment and training', isCorrect: true },
      { id: 'd', label: 'Manager approval only', isCorrect: false },
    ],
    explanation: 'CIP-004 requires both a completed PRA and training before access authorization is granted.',
  },
  // Technical Controls
  {
    id: 'tech-1',
    domain: 'technical_controls',
    question: 'Within how many days must a newly released security patch be assessed for applicability?',
    options: [
      { id: 'a', label: '15 days', isCorrect: false },
      { id: 'b', label: '35 days', isCorrect: true },
      { id: 'c', label: '60 days', isCorrect: false },
      { id: 'd', label: '90 days', isCorrect: false },
    ],
    explanation: 'CIP-007 requires assessment of patch applicability within 35 calendar days of release.',
  },
  {
    id: 'tech-2',
    domain: 'technical_controls',
    question: 'What defines an Electronic Security Perimeter (ESP)?',
    options: [
      { id: 'a', label: 'A physical fence around equipment', isCorrect: false },
      { id: 'b', label: 'A logical border encompassing BES Cyber Systems', isCorrect: true },
      { id: 'c', label: 'Any network with internet access', isCorrect: false },
      { id: 'd', label: 'A DMZ segment', isCorrect: false },
    ],
    explanation: 'CIP-005 defines the ESP as the logical border surrounding a network to which BES Cyber Systems are connected.',
  },
  // Incidents & Recovery
  {
    id: 'incident-1',
    domain: 'incidents_recovery',
    question: 'What is a Reportable Cyber Security Incident?',
    options: [
      { id: 'a', label: 'Any suspicious email received', isCorrect: false },
      { id: 'b', label: 'An incident that compromised or attempted to compromise the ESP', isCorrect: true },
      { id: 'c', label: 'A failed login attempt', isCorrect: false },
      { id: 'd', label: 'Any software update', isCorrect: false },
    ],
    explanation: 'CIP-008 defines Reportable Cyber Security Incidents as those that compromised or disrupted a BES Cyber System or attempted to do so.',
  },
  {
    id: 'incident-2',
    domain: 'incidents_recovery',
    question: 'How often must Cyber Security Incident Response Plans be tested?',
    options: [
      { id: 'a', label: 'Monthly', isCorrect: false },
      { id: 'b', label: 'Quarterly', isCorrect: false },
      { id: 'c', label: 'At least once every 15 calendar months', isCorrect: true },
      { id: 'd', label: 'Every three years', isCorrect: false },
    ],
    explanation: 'CIP-008 requires plan testing at least once every 15 calendar months, including exercises or actual incident responses.',
  },
  // Evidence & Audit
  {
    id: 'evidence-1',
    domain: 'evidence_audit',
    question: 'How long must CIP compliance evidence generally be retained?',
    options: [
      { id: 'a', label: '1 year', isCorrect: false },
      { id: 'b', label: '3 years or the previous full calendar year', isCorrect: true },
      { id: 'c', label: '7 years', isCorrect: false },
      { id: 'd', label: 'Indefinitely', isCorrect: false },
    ],
    explanation: 'CIP standards require evidence retention for the current calendar year plus the previous full calendar year, or about 3 years.',
  },
  {
    id: 'evidence-2',
    domain: 'evidence_audit',
    question: 'What is BES Cyber System Information (BCSI)?',
    options: [
      { id: 'a', label: 'Any document about the power grid', isCorrect: false },
      { id: 'b', label: 'Information that could be used to compromise BES Cyber Systems', isCorrect: true },
      { id: 'c', label: 'Only network diagrams', isCorrect: false },
      { id: 'd', label: 'Public compliance reports', isCorrect: false },
    ],
    explanation: 'CIP-011 defines BCSI as information that could be used to gain unauthorized access or pose a security threat to BES Cyber Systems.',
  },
];

const roleSpecificQuestions: Record<UserRole, AssessmentQuestion[]> = {
  compliance: [
    {
      id: 'comp-1',
      domain: 'scope_assets',
      question: 'What is the CIP Senior Manager primarily responsible for?',
      options: [
        { id: 'a', label: 'Day-to-day patching operations', isCorrect: false },
        { id: 'b', label: 'Authorizing policies and providing overall leadership for CIP compliance', isCorrect: true },
        { id: 'c', label: 'Network monitoring', isCorrect: false },
        { id: 'd', label: 'Badge issuance', isCorrect: false },
      ],
      explanation: 'The CIP Senior Manager has overall authority for leading and managing the entity\'s CIP compliance program.',
    },
    {
      id: 'comp-2',
      domain: 'evidence_audit',
      question: 'How should compliance evidence be organized for audit readiness?',
      options: [
        { id: 'a', label: 'Randomly in a shared drive', isCorrect: false },
        { id: 'b', label: 'By CIP standard and requirement number with dates and owners', isCorrect: true },
        { id: 'c', label: 'In email folders', isCorrect: false },
        { id: 'd', label: 'Evidence organization is not important', isCorrect: false },
      ],
      explanation: 'Well-organized evidence aligned with CIP requirements enables quick retrieval during audits and demonstrates program maturity.',
    },
  ],
  'it-ot': [
    {
      id: 'itot-1',
      domain: 'technical_controls',
      question: 'What must baseline configurations include for BES Cyber Systems?',
      options: [
        { id: 'a', label: 'Only the operating system version', isCorrect: false },
        { id: 'b', label: 'OS, firmware, installed software, security patches, and logical ports/services', isCorrect: true },
        { id: 'c', label: 'Just the hardware serial number', isCorrect: false },
        { id: 'd', label: 'Vendor contact information', isCorrect: false },
      ],
      explanation: 'CIP-010 requires baseline configurations to document all applicable elements including OS, patches, ports, and security controls.',
    },
    {
      id: 'itot-2',
      domain: 'technical_controls',
      question: 'What triggers a requirement to update baseline configuration documentation?',
      options: [
        { id: 'a', label: 'Annual review only', isCorrect: false },
        { id: 'b', label: 'Any change to the documented elements', isCorrect: true },
        { id: 'c', label: 'Hardware warranty expiration', isCorrect: false },
        { id: 'd', label: 'Vendor request', isCorrect: false },
      ],
      explanation: 'Baseline documentation must be updated within 30 days of any change to the documented configuration elements.',
    },
  ],
  'physical-security': [
    {
      id: 'phys-1',
      domain: 'scope_assets',
      question: 'What is a Physical Security Perimeter (PSP)?',
      options: [
        { id: 'a', label: 'The property boundary of the facility', isCorrect: false },
        { id: 'b', label: 'The complete six-wall border enclosing BES Cyber Systems', isCorrect: true },
        { id: 'c', label: 'Only locked doors', isCorrect: false },
        { id: 'd', label: 'Security cameras', isCorrect: false },
      ],
      explanation: 'CIP-006 defines PSP as the physical border with completely enclosed six-wall boundaries that protects BES Cyber Systems.',
    },
    {
      id: 'phys-2',
      domain: 'training_people',
      question: 'Within what timeframe must physical access be revoked after an individual no longer needs it?',
      options: [
        { id: 'a', label: '7 days', isCorrect: false },
        { id: 'b', label: '24 hours', isCorrect: true },
        { id: 'c', label: '30 days', isCorrect: false },
        { id: 'd', label: 'Next business day', isCorrect: false },
      ],
      explanation: 'CIP-006 requires unescorted physical access to be revoked within 24 hours after the access is no longer required.',
    },
  ],
  'hr-training': [
    {
      id: 'hr-1',
      domain: 'training_people',
      question: 'What must a Personnel Risk Assessment (PRA) include?',
      options: [
        { id: 'a', label: 'Only a resume review', isCorrect: false },
        { id: 'b', label: 'Identity verification and a criminal history records check', isCorrect: true },
        { id: 'c', label: 'Only reference checks', isCorrect: false },
        { id: 'd', label: 'Credit score check', isCorrect: false },
      ],
      explanation: 'CIP-004 requires PRAs to include identity verification and a seven-year criminal history records check.',
    },
    {
      id: 'hr-2',
      domain: 'training_people',
      question: 'How often must Personnel Risk Assessments be verified?',
      options: [
        { id: 'a', label: 'Annually', isCorrect: false },
        { id: 'b', label: 'Every 3 years', isCorrect: false },
        { id: 'c', label: 'Every 7 years', isCorrect: true },
        { id: 'd', label: 'Only at initial hire', isCorrect: false },
      ],
      explanation: 'CIP-004 requires PRA reverification at least once every seven years for personnel with continuing access.',
    },
  ],
  leadership: [
    {
      id: 'lead-1',
      domain: 'scope_assets',
      question: 'What role does leadership play in CIP-003 policy management?',
      options: [
        { id: 'a', label: 'No involvement needed', isCorrect: false },
        { id: 'b', label: 'Approving and reviewing cybersecurity policies at least annually', isCorrect: true },
        { id: 'c', label: 'Writing all technical procedures', isCorrect: false },
        { id: 'd', label: 'Only during audits', isCorrect: false },
      ],
      explanation: 'CIP-003 requires senior management to review and approve cybersecurity policies at least once every 15 months.',
    },
    {
      id: 'lead-2',
      domain: 'incidents_recovery',
      question: 'What should leadership communicate to auditors during a CIP audit?',
      options: [
        { id: 'a', label: 'Technical implementation details', isCorrect: false },
        { id: 'b', label: 'Budget constraints', isCorrect: false },
        { id: 'c', label: 'Organizational commitment and program oversight', isCorrect: true },
        { id: 'd', label: 'Nothing—compliance staff handles everything', isCorrect: false },
      ],
      explanation: 'Auditors expect leadership to demonstrate understanding and active oversight of the CIP compliance program.',
    },
  ],
  other: [
    {
      id: 'other-1',
      domain: 'scope_assets',
      question: 'Why is understanding asset scope important even if you don\'t manage BES Cyber Systems directly?',
      options: [
        { id: 'a', label: 'It is not important', isCorrect: false },
        { id: 'b', label: 'Your work may affect or support systems that are in scope', isCorrect: true },
        { id: 'c', label: 'Only for job interviews', isCorrect: false },
        { id: 'd', label: 'Regulatory requirements only apply to managers', isCorrect: false },
      ],
      explanation: 'Even indirect roles can impact compliance through supply chain, support services, or information handling.',
    },
    {
      id: 'other-2',
      domain: 'evidence_audit',
      question: 'What is the primary principle of CIP compliance documentation?',
      options: [
        { id: 'a', label: 'Keep it simple and avoid detail', isCorrect: false },
        { id: 'b', label: 'If it is not documented, it did not happen', isCorrect: true },
        { id: 'c', label: 'Only document when auditors ask', isCorrect: false },
        { id: 'd', label: 'Documentation is optional', isCorrect: false },
      ],
      explanation: 'CIP compliance relies on documented evidence. Activities without documentation cannot be credited during audits.',
    },
  ],
};

export function getAssessmentQuestionsForRole(role: UserRole): AssessmentQuestion[] {
  const roleQuestions = roleSpecificQuestions[role] || [];
  // Combine common questions with role-specific ones, ensuring good domain coverage
  return [...commonQuestions, ...roleQuestions];
}
