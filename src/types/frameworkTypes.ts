// Framework and persona type definitions
export type Framework = 
  | 'nerc-cip'
  | 'nist-800-53'
  | 'cis-controls'
  | 'nist-csf'
  | 'sox-itgc'
  | 'pci-dss'
  | 'hipaa'
  | 'coso'
  | 'iso-27001';

export type Persona = 
  | 'practitioners'
  | 'tool-owners'
  | 'leaders'
  | 'auditors';

export interface FrameworkPersona {
  framework: Framework;
  persona: Persona;
  key: string; // e.g., "nerc-cip-practitioners"
}

export const frameworkLabels: Record<Framework, string> = {
  'nerc-cip': 'NERC CIP',
  'nist-800-53': 'NIST 800-53',
  'cis-controls': 'CIS Controls',
  'nist-csf': 'NIST CSF',
  'sox-itgc': 'SOX ITGC',
  'pci-dss': 'PCI DSS',
  'hipaa': 'HIPAA',
  'coso': 'COSO',
  'iso-27001': 'ISO 27001',
};

export const personaLabels: Record<Persona, string> = {
  'practitioners': 'Practitioners & Implementers',
  'tool-owners': 'Tool Owners & SMEs',
  'leaders': 'Leaders & Executives',
  'auditors': 'Internal Auditors & Reviewers',
};

export function createFrameworkPersonaKey(framework: Framework, persona: Persona): string {
  return `${framework}-${persona}`;
}

export function parseFrameworkPersonaKey(key: string): FrameworkPersona | null {
  const parts = key.split('-');
  if (parts.length < 3) return null;
  
  const persona = parts[parts.length - 1] as Persona;
  const framework = parts.slice(0, -1).join('-') as Framework;
  
  return { framework, persona, key };
}
