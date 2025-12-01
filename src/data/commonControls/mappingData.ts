export interface ControlMapping {
  family: string;
  description: string;
  cip: string[];
  nist80053: string[];
  cisControls: string[];
  nistCsf: string[];
  soxItgc: string[];
}

export const controlMappings: ControlMapping[] = [
  {
    family: "Access Management & Least Privilege",
    description: "Controls governing who can access systems, data, and facilities, ensuring least privilege and separation of duties.",
    cip: [
      "CIP-003-8 R2 (Access management program)",
      "CIP-004-7 (Personnel & training)",
      "CIP-005-7 (Electronic security perimeters)",
      "CIP-007-6 R5 (System access authentication)"
    ],
    nist80053: [
      "AC Family (Access Control): AC-2 Account Management, AC-3 Access Enforcement, AC-6 Least Privilege",
      "IA Family (Identification & Authentication): IA-2 User Identification, IA-4 Identifier Management, IA-5 Authenticator Management",
      "AC-17 Remote Access, AC-20 Use of External Systems"
    ],
    cisControls: [
      "Control 5: Account Management - Manage lifecycle of system accounts including creation, use, dormancy, and deletion",
      "Control 6: Access Control Management - Define and maintain role-based access, review access quarterly"
    ],
    nistCsf: [
      "PR.AC-1: Identities and credentials issued, managed, verified, revoked, and audited",
      "PR.AC-4: Access permissions and authorizations managed, incorporating least privilege and separation of duties",
      "PR.AC-7: Users, devices, and other assets authenticated"
    ],
    soxItgc: [
      "Logical Access: User provisioning and deprovisioning",
      "Logical Access: Periodic access reviews",
      "Logical Access: Privileged access management",
      "Logical Access: Password policies and MFA"
    ]
  },
  {
    family: "Asset Inventory & Configuration Management",
    description: "Knowing what assets you have (hardware, software, data) and maintaining secure configurations.",
    cip: [
      "CIP-002-5.1 R1 (BES Cyber System Categorization)",
      "CIP-010-4 R1 (Configuration change management and vulnerability assessments)",
      "CIP-011-3 R1 (Cyber Security - Information Protection)"
    ],
    nist80053: [
      "CM Family (Configuration Management): CM-2 Baseline Configuration, CM-3 Configuration Change Control, CM-8 System Component Inventory",
      "PM-5 System Inventory"
    ],
    cisControls: [
      "Control 1: Inventory and Control of Enterprise Assets - Actively manage hardware assets",
      "Control 2: Inventory and Control of Software Assets - Actively manage software assets",
      "Control 4: Secure Configuration of Enterprise Assets and Software - Establish secure configurations"
    ],
    nistCsf: [
      "ID.AM-1: Physical devices and systems inventoried",
      "ID.AM-2: Software platforms and applications inventoried",
      "ID.AM-3: Organizational communication and data flows mapped",
      "PR.IP-1: Baseline configuration of IT/OT hardware and software created and maintained"
    ],
    soxItgc: [
      "Computer Operations: Configuration management of in-scope financial systems",
      "Change Management: Tracking changes to financial system configurations"
    ]
  },
  {
    family: "Change Management & SDLC",
    description: "Controlled processes for making changes to systems, applications, and infrastructure, including testing and approvals.",
    cip: [
      "CIP-010-4 R1 (Configuration Change Management)"
    ],
    nist80053: [
      "CM-3 Configuration Change Control",
      "CM-4 Impact Analysis",
      "SA Family (System & Services Acquisition): SA-3 System Development Life Cycle, SA-10 Developer Configuration Management, SA-11 Developer Testing"
    ],
    cisControls: [
      "Control 4: Secure Configuration of Enterprise Assets and Software",
      "Control 16: Application Software Security - Manage security of application code"
    ],
    nistCsf: [
      "PR.IP-3: Configuration change control processes established",
      "PR.DS-6: Integrity checking mechanisms verify software, firmware, and information integrity"
    ],
    soxItgc: [
      "Change Management: Change request, approval, testing, and implementation controls for in-scope systems",
      "Change Management: Emergency change procedures and post-implementation review"
    ]
  },
  {
    family: "Logging, Monitoring & Audit Trails",
    description: "Capturing, protecting, and analyzing security events and system activity for detection and forensics.",
    cip: [
      "CIP-007-6 R4 (Security event monitoring)",
      "CIP-008-6 R1 (Incident reporting and response planning)"
    ],
    nist80053: [
      "AU Family (Audit & Accountability): AU-2 Event Logging, AU-3 Content of Audit Records, AU-6 Audit Review/Analysis, AU-9 Protection of Audit Information, AU-11 Audit Record Retention",
      "SI-4 System Monitoring"
    ],
    cisControls: [
      "Control 8: Audit Log Management - Collect, alert, review, and retain audit logs",
      "Control 13: Network Monitoring and Defense - Monitor network traffic and detect anomalies"
    ],
    nistCsf: [
      "DE.AE-3: Event data aggregated and correlated from multiple sources",
      "DE.CM-1: Networks and network services monitored to find potentially adverse events",
      "DE.CM-6: External service provider activity monitored",
      "PR.PT-1: Audit/log records determined, documented, implemented, and reviewed"
    ],
    soxItgc: [
      "Computer Operations: Monitoring and logging of financial system activities",
      "Logical Access: Audit trail review for access and privilege changes"
    ]
  },
  {
    family: "Vulnerability Management & Patching",
    description: "Identifying, prioritizing, and remediating security vulnerabilities and applying patches in a timely manner.",
    cip: [
      "CIP-007-6 R2 (Patch Management)",
      "CIP-010-4 R3 (Vulnerability Assessments)"
    ],
    nist80053: [
      "RA-5 Vulnerability Monitoring and Scanning",
      "SI-2 Flaw Remediation",
      "CM-6 Configuration Settings"
    ],
    cisControls: [
      "Control 7: Continuous Vulnerability Management - Scan and remediate vulnerabilities",
      "Control 18: Penetration Testing - Test defenses through controlled attacks"
    ],
    nistCsf: [
      "ID.RA-1: Asset vulnerabilities identified and documented",
      "DE.CM-8: Vulnerability scans performed",
      "RS.MI-3: Newly identified vulnerabilities mitigated or documented as accepted risks"
    ],
    soxItgc: [
      "Computer Operations: Vulnerability and patch management for in-scope systems"
    ]
  },
  {
    family: "Incident Response & Recovery",
    description: "Detecting, responding to, and recovering from security incidents and disruptions.",
    cip: [
      "CIP-008-6 (Incident Reporting and Response Planning)",
      "CIP-009-6 (Recovery Plans for BES Cyber Systems)"
    ],
    nist80053: [
      "IR Family (Incident Response): IR-1 Policy & Procedures, IR-4 Incident Handling, IR-6 Incident Reporting, IR-8 Incident Response Plan",
      "CP Family (Contingency Planning): CP-2 Contingency Plan, CP-9 System Backup, CP-10 System Recovery"
    ],
    cisControls: [
      "Control 11: Data Recovery - Establish backup processes and test recovery",
      "Control 17: Incident Response Management - Establish incident handling capability"
    ],
    nistCsf: [
      "RS.RP-1: Response plan executed during or after incident",
      "RS.CO-2: Incidents reported consistent with established criteria",
      "RC.RP-1: Recovery plan executed during or after cybersecurity incident",
      "RC.CO-3: Recovery activities communicated"
    ],
    soxItgc: [
      "Computer Operations: Backup and recovery procedures for financial systems",
      "Computer Operations: Incident response affecting financial data integrity"
    ]
  },
  {
    family: "Data Protection & Encryption",
    description: "Protecting sensitive data at rest and in transit through encryption, data loss prevention, and classification.",
    cip: [
      "CIP-011-3 (Information Protection - data classification and protection)"
    ],
    nist80053: [
      "SC-8 Transmission Confidentiality and Integrity",
      "SC-12 Cryptographic Key Management",
      "SC-13 Cryptographic Protection",
      "SC-28 Protection of Information at Rest",
      "MP Family (Media Protection): MP-5 Media Transport, MP-6 Media Sanitization"
    ],
    cisControls: [
      "Control 3: Data Protection - Identify and protect sensitive data",
      "Control 9: Email and Web Browser Protections",
      "Control 10: Malware Defenses"
    ],
    nistCsf: [
      "PR.DS-1: Data at rest protected",
      "PR.DS-2: Data in transit protected",
      "PR.DS-5: Protections against data leaks implemented"
    ],
    soxItgc: [
      "Logical Access: Encryption of financial data at rest and in transit",
      "Computer Operations: Data backup encryption and secure storage"
    ]
  },
  {
    family: "Third-Party / Vendor Risk Management",
    description: "Managing cybersecurity and compliance risks from vendors, contractors, and service providers.",
    cip: [
      "CIP-013-2 (Supply Chain Risk Management)"
    ],
    nist80053: [
      "SA-9 External System Services",
      "SR Family (Supply Chain Risk Management): SR-2 Supply Chain Risk Management Plan, SR-3 Supply Chain Controls, SR-5 Acquisition Strategies"
    ],
    cisControls: [
      "Control 15: Service Provider Management - Assess and monitor service providers"
    ],
    nistCsf: [
      "ID.SC-1: Cyber supply chain risk management processes identified",
      "ID.SC-2: Suppliers and third-party partners identified, prioritized, assessed",
      "ID.SC-3: Contracts with suppliers and third parties used to implement appropriate measures"
    ],
    soxItgc: [
      "Logical Access: Vendor access controls and reviews",
      "Change Management: Vendor change management oversight for in-scope systems"
    ]
  },
  {
    family: "Governance, Risk, & Policy Management",
    description: "Establishing policies, assigning roles, managing risk, and ensuring governance and oversight of security programs.",
    cip: [
      "CIP-003-8 R1 (Cyber Security Policy)",
      "CIP-014-3 (Physical Security)"
    ],
    nist80053: [
      "PM Family (Program Management): PM-1 Information Security Program Plan, PM-2 Information Security Program Leadership, PM-9 Risk Management Strategy",
      "PL Family (Planning): PL-1 Policy & Procedures, PL-2 System Security Plan",
      "RA Family (Risk Assessment): RA-1 Policy & Procedures, RA-3 Risk Assessment"
    ],
    cisControls: [
      "Control 14: Security Awareness and Skills Training - Establish security awareness program",
      "Implementation Group guidance and prioritization"
    ],
    nistCsf: [
      "GV.OC-1: Cybersecurity responsibilities and authorities established",
      "GV.RM-1: Risk management objectives established and agreed to",
      "GV.PO-1: Policy for managing cybersecurity risks established and communicated",
      "ID.GV-1: Organizational cybersecurity policy established and communicated"
    ],
    soxItgc: [
      "Logical Access: IT access policies and governance",
      "Change Management: IT change management policies",
      "Computer Operations: IT operations policies and standards"
    ]
  },
  {
    family: "Training & Awareness",
    description: "Ensuring personnel are trained on security responsibilities, policies, and threats.",
    cip: [
      "CIP-004-7 (Personnel & Training - security awareness, cyber security training)"
    ],
    nist80053: [
      "AT Family (Awareness & Training): AT-1 Policy & Procedures, AT-2 Literacy Training, AT-3 Role-Based Training"
    ],
    cisControls: [
      "Control 14: Security Awareness and Skills Training"
    ],
    nistCsf: [
      "PR.AT-1: All users informed and trained on cybersecurity responsibilities and acceptable use",
      "GV.OC-3: Cybersecurity personnel provided with sufficient resources"
    ],
    soxItgc: [
      "Logical Access: Training for access control owners",
      "Change Management: Training for change approvers and implementers"
    ]
  }
];
