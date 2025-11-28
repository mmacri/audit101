import { UserRole } from '@/hooks/useUserPreferences';

export interface ReflectionPrompt {
  id: string;
  prompt: string;
  followUp?: string;
}

export interface ReflectionContext {
  intro: string;
  prompts: ReflectionPrompt[];
}

// General prompts that apply across modules
export const generalReflectionPrompts: ReflectionPrompt[] = [
  {
    id: 'general-gap',
    prompt: 'What is the biggest gap you see between what you learned here and your current practices?',
    followUp: 'How might you begin to address this gap in the next 30 days?',
  },
  {
    id: 'general-prove',
    prompt: 'What would be hardest to prove to an auditor in your current environment?',
    followUp: 'What evidence would make this provable?',
  },
  {
    id: 'general-change',
    prompt: 'What is one concrete change you could implement this week based on what you learned?',
  },
];

// Module-specific reflection contexts
export const moduleReflections: Record<number, ReflectionContext> = {
  1: {
    intro: 'Reflect on how the NERC CIP framework applies to your specific organization and role.',
    prompts: [
      { id: 'mod1-registration', prompt: 'Do you know your organization\'s NERC functional registration and which CIP standards apply?' },
      { id: 'mod1-changes', prompt: 'How does your organization track CIP regulatory changes and updates?' },
      { id: 'mod1-priority', prompt: 'Which CIP standard areas feel most relevant to your daily responsibilities?' },
    ],
  },
  2: {
    intro: 'Consider how asset identification and scoping works in your environment.',
    prompts: [
      { id: 'mod2-inventory', prompt: 'How confident are you that your BES Cyber System inventory is complete and accurate?' },
      { id: 'mod2-rationale', prompt: 'Can you explain the impact rating rationale for your key systems?' },
      { id: 'mod2-changes', prompt: 'How quickly do new assets get identified and properly categorized in your organization?' },
    ],
  },
  3: {
    intro: 'Think about your organization\'s governance structure and policy management.',
    prompts: [
      { id: 'mod3-senior-mgr', prompt: 'Who is your CIP Senior Manager and how actively are they engaged in the program?' },
      { id: 'mod3-policies', prompt: 'When were your CIP policies last meaningfully reviewed (not just signed)?' },
      { id: 'mod3-delegation', prompt: 'Is your delegation of authority documentation current and clear?' },
    ],
  },
  4: {
    intro: 'Reflect on how training and personnel management works in your CIP program.',
    prompts: [
      { id: 'mod4-training', prompt: 'How easily could you prove everyone with authorized access has current training?' },
      { id: 'mod4-pra', prompt: 'Are PRA reverification dates being tracked proactively?' },
      { id: 'mod4-revocation', prompt: 'Think of a recent termination—was access revoked within required timelines?' },
    ],
  },
  5: {
    intro: 'Consider your electronic and physical security perimeter implementation.',
    prompts: [
      { id: 'mod5-esp', prompt: 'Could you walk an auditor through your ESP diagram and identify every access point?' },
      { id: 'mod5-psp', prompt: 'Are your PSP boundaries clearly defined with proper six-wall enclosure?' },
      { id: 'mod5-remote', prompt: 'How is Interactive Remote Access monitored and protected in your environment?' },
    ],
  },
  6: {
    intro: 'Think about your system security and patch management practices.',
    prompts: [
      { id: 'mod6-patches', prompt: 'How confident are you that all patches are assessed within 35 days?' },
      { id: 'mod6-logs', prompt: 'How are security logs reviewed and is that review documented?' },
      { id: 'mod6-mitigation', prompt: 'For patches you can\'t apply, do you have documented compensating controls?' },
    ],
  },
  7: {
    intro: 'Reflect on your incident response and recovery readiness.',
    prompts: [
      { id: 'mod7-plan-test', prompt: 'When was your incident response plan last tested? What did you learn?' },
      { id: 'mod7-backup-test', prompt: 'How recently have you verified that backups can actually be restored?' },
      { id: 'mod7-incident', prompt: 'Think of a recent security event—would your documentation satisfy an auditor?' },
    ],
  },
  8: {
    intro: 'Consider your configuration management and vulnerability assessment practices.',
    prompts: [
      { id: 'mod8-baseline', prompt: 'Are your baseline configurations current? When were they last updated?' },
      { id: 'mod8-changes', prompt: 'How do you ensure baselines are updated within 30 days of changes?' },
      { id: 'mod8-vuln', prompt: 'What was your last vulnerability assessment and were findings addressed?' },
    ],
  },
  9: {
    intro: 'Think about information protection and supply chain risk management.',
    prompts: [
      { id: 'mod9-bcsi', prompt: 'Do you know what qualifies as BCSI in your organization and how it\'s protected?' },
      { id: 'mod9-vendors', prompt: 'Do your vendor contracts include required CIP-013 security provisions?' },
      { id: 'mod9-disposal', prompt: 'How is BCSI disposal documented when systems are decommissioned?' },
    ],
  },
  10: {
    intro: 'Reflect on your audit readiness and continuous improvement practices.',
    prompts: [
      { id: 'mod10-evidence', prompt: 'How quickly could you retrieve evidence for any CIP requirement right now?' },
      { id: 'mod10-internal', prompt: 'When did you last conduct an internal audit or self-assessment?' },
      { id: 'mod10-findings', prompt: 'Are there any open findings or corrective actions that haven\'t been closed?' },
    ],
  },
};

// Role-specific reflection prompts for missions
export const roleReflectionPrompts: Record<UserRole, ReflectionContext> = {
  compliance: {
    intro: 'As a Compliance Manager, consider how this applies to your program oversight responsibilities.',
    prompts: [
      { id: 'comp-evidence', prompt: 'How would you rate your evidence repository organization on a scale of 1-10?' },
      { id: 'comp-stakeholders', prompt: 'Which stakeholder relationship needs the most improvement for better compliance support?' },
      { id: 'comp-audit', prompt: 'What would make you feel more confident about your next audit?' },
    ],
  },
  'it-ot': {
    intro: 'As an IT/OT Engineer, think about how this applies to your technical implementation responsibilities.',
    prompts: [
      { id: 'itot-patching', prompt: 'What\'s the biggest challenge in your patch management process?' },
      { id: 'itot-baseline', prompt: 'How confident are you that your baseline documentation matches reality?' },
      { id: 'itot-evidence', prompt: 'What technical evidence would be hardest for you to produce during an audit?' },
    ],
  },
  'physical-security': {
    intro: 'As Physical Security personnel, consider how this applies to your access control responsibilities.',
    prompts: [
      { id: 'phys-revocation', prompt: 'Think about your access revocation process—can you prove 24-hour compliance?' },
      { id: 'phys-visitors', prompt: 'How confident are you in your visitor management documentation?' },
      { id: 'phys-pacs', prompt: 'When was your PACS last tested and is that documented?' },
    ],
  },
  'hr-training': {
    intro: 'As HR/Training personnel, reflect on how this applies to your personnel management responsibilities.',
    prompts: [
      { id: 'hr-tracking', prompt: 'How easy is it to produce a complete training record for any individual?' },
      { id: 'hr-pra', prompt: 'Are PRA reverification dates being proactively managed?' },
      { id: 'hr-onboarding', prompt: 'What\'s your biggest challenge in meeting CIP requirements for new hires?' },
    ],
  },
  leadership: {
    intro: 'As a Leader, consider how this applies to your oversight and governance responsibilities.',
    prompts: [
      { id: 'lead-visibility', prompt: 'How would you rate your visibility into current compliance status?' },
      { id: 'lead-resources', prompt: 'Are there compliance resource needs that haven\'t been escalated to you?' },
      { id: 'lead-culture', prompt: 'How would you describe your organization\'s compliance culture?' },
    ],
  },
  other: {
    intro: 'Even outside the core compliance team, your role impacts CIP. Reflect on those connections.',
    prompts: [
      { id: 'other-connection', prompt: 'How does your work connect to BES Cyber Systems or CIP compliance?' },
      { id: 'other-support', prompt: 'What could you do to better support the compliance team in your role?' },
      { id: 'other-awareness', prompt: 'What CIP concepts were new to you that might affect how you work?' },
    ],
  },
};

export function getReflectionContextForModule(moduleId: number): ReflectionContext | undefined {
  return moduleReflections[moduleId];
}

export function getReflectionContextForRole(role: UserRole): ReflectionContext {
  return roleReflectionPrompts[role];
}
