import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

// Extend jsPDF type for autoTable
declare module 'jspdf' {
  interface jsPDF {
    lastAutoTable: { finalY: number };
  }
}

const PRIMARY_COLOR: [number, number, number] = [14, 116, 144];
const HEADER_COLOR: [number, number, number] = [30, 41, 59];

function addHeader(doc: jsPDF, title: string, subtitle: string) {
  doc.setFillColor(...PRIMARY_COLOR);
  doc.rect(0, 0, 220, 35, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 14, 18);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(subtitle, 14, 28);
  
  doc.setTextColor(0, 0, 0);
}

function addFooter(doc: jsPDF) {
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(
      `CIP Readiness Academy | Page ${i} of ${pageCount}`,
      doc.internal.pageSize.getWidth() / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: 'center' }
    );
  }
}

export function generateTCAChecklist(): void {
  const doc = new jsPDF();
  
  addHeader(doc, 'Transient Cyber Asset Checklist', 'CIP-010-4 & CIP-003-9 TCA Management');
  
  let y = 50;
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  const intro = 'Use this checklist before connecting any Transient Cyber Asset (maintenance laptop, USB drive, diagnostic equipment) to a BES Cyber System. TCAs are consistently a top violation area in NERC CIP audits.';
  const introLines = doc.splitTextToSize(intro, 180);
  doc.text(introLines, 14, y);
  y += introLines.length * 5 + 10;
  
  // USB Drive Checklist
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...HEADER_COLOR);
  doc.text('USB Drive / Removable Media Checklist', 14, y);
  y += 8;
  
  const usbChecklist = [
    ['☐', 'Verify USB is on authorized device inventory'],
    ['☐', 'Scan USB with current antivirus signatures before connection'],
    ['☐', 'Document scan date, time, and results'],
    ['☐', 'Verify USB is labeled with unique identifier'],
    ['☐', 'Record chain of custody (who handled the device)'],
    ['☐', 'Document what BES Cyber System(s) USB will connect to'],
    ['☐', 'Confirm authorized user is performing the connection'],
    ['☐', 'Scan USB after disconnection if files were transferred to it'],
    ['☐', 'Update TCA log with connection details'],
  ];

  autoTable(doc, {
    startY: y,
    body: usbChecklist,
    theme: 'plain',
    bodyStyles: { fontSize: 10 },
    columnStyles: { 0: { cellWidth: 10 } },
  });
  
  y = doc.lastAutoTable.finalY + 15;
  
  // Maintenance Laptop Checklist
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...HEADER_COLOR);
  doc.text('Maintenance Laptop Checklist', 14, y);
  y += 8;
  
  const laptopChecklist = [
    ['☐', 'Verify laptop is on authorized TCA inventory'],
    ['☐', 'Confirm security patches are current (within 35 days)'],
    ['☐', 'Verify antivirus/anti-malware with current signatures'],
    ['☐', 'Scan laptop for malicious code before connection'],
    ['☐', 'Document scan date, time, and results'],
    ['☐', 'Verify software inventory matches approved baseline'],
    ['☐', 'Confirm user is authorized for BES Cyber System access'],
    ['☐', 'Disable unnecessary services and ports'],
    ['☐', 'Document connection purpose and duration'],
    ['☐', 'Scan laptop after disconnection'],
    ['☐', 'Update TCA log with session details'],
  ];

  autoTable(doc, {
    startY: y,
    body: laptopChecklist,
    theme: 'plain',
    bodyStyles: { fontSize: 10 },
    columnStyles: { 0: { cellWidth: 10 } },
  });
  
  // Page 2 - Vendor Equipment & Log Template
  doc.addPage();
  addHeader(doc, 'Transient Cyber Asset Checklist', 'Vendor Equipment & Documentation');
  
  y = 50;
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...HEADER_COLOR);
  doc.text('Vendor/Third-Party Equipment Checklist', 14, y);
  y += 8;
  
  const vendorChecklist = [
    ['☐', 'Obtain advance notification of vendor visit and equipment'],
    ['☐', 'Review vendor equipment list before arrival'],
    ['☐', 'Require vendor to sign equipment acknowledgment form'],
    ['☐', 'Scan all vendor equipment before connection to BES Cyber Systems'],
    ['☐', 'Document scan results for each piece of equipment'],
    ['☐', 'Escort vendor during all connections to BES Cyber Systems'],
    ['☐', 'Monitor vendor activity during connection'],
    ['☐', 'Scan vendor equipment after disconnection'],
    ['☐', 'Document what data/files were transferred (if any)'],
    ['☐', 'Retain scan logs and connection records per retention policy'],
  ];

  autoTable(doc, {
    startY: y,
    body: vendorChecklist,
    theme: 'plain',
    bodyStyles: { fontSize: 10 },
    columnStyles: { 0: { cellWidth: 10 } },
  });
  
  y = doc.lastAutoTable.finalY + 15;
  
  // TCA Connection Log Template
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...HEADER_COLOR);
  doc.text('TCA Connection Log Template', 14, y);
  y += 8;
  
  const logTemplate = [
    ['Date/Time', 'TCA ID', 'Type', 'BES System', 'User', 'Purpose', 'Scan Result', 'Disconnect Time'],
    ['2024-04-15 09:30', 'USB-001', 'USB Drive', 'RTU-005', 'J. Smith', 'Config backup', 'Clean', '09:45'],
    ['2024-04-16 14:00', 'LAP-003', 'Laptop', 'HMI-001', 'Vendor-ABC', 'Firmware update', 'Clean', '16:30'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
  ];

  autoTable(doc, {
    startY: y,
    head: [logTemplate[0]],
    body: logTemplate.slice(1),
    headStyles: { fillColor: HEADER_COLOR, fontSize: 8 },
    bodyStyles: { fontSize: 8 },
  });
  
  y = doc.lastAutoTable.finalY + 15;
  
  // Common Pitfalls
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(180, 50, 50);
  doc.text('Common TCA Audit Findings to Avoid:', 14, y);
  y += 8;
  
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  
  const pitfalls = [
    '• Missing or incomplete scan documentation',
    '• Antivirus signatures not current at time of scan',
    '• No chain of custody records for removable media',
    '• Vendor equipment not scanned before connection',
    '• TCA inventory not maintained or updated',
    '• No documentation of what systems TCA connected to',
    '• Personal devices used without authorization'
  ];
  
  pitfalls.forEach(pitfall => {
    doc.text(pitfall, 14, y);
    y += 6;
  });

  addFooter(doc);
  doc.save('TCA_Checklist_Template.pdf');
}

export function generateTCAChecklistExcel(): void {
  const wb = XLSX.utils.book_new();
  
  // USB Checklist Sheet
  const usbData = [
    ['USB Drive / Removable Media Checklist'],
    [''],
    ['Status', 'Checklist Item', 'Date', 'Completed By', 'Notes'],
    ['', 'Verify USB is on authorized device inventory', '', '', ''],
    ['', 'Scan USB with current antivirus signatures', '', '', ''],
    ['', 'Document scan date, time, and results', '', '', ''],
    ['', 'Verify USB is labeled with unique identifier', '', '', ''],
    ['', 'Record chain of custody', '', '', ''],
    ['', 'Document target BES Cyber System(s)', '', '', ''],
    ['', 'Confirm authorized user', '', '', ''],
    ['', 'Post-disconnection scan (if files transferred)', '', '', ''],
    ['', 'Update TCA log', '', '', ''],
  ];
  
  const usbWs = XLSX.utils.aoa_to_sheet(usbData);
  usbWs['!cols'] = [{ wch: 10 }, { wch: 45 }, { wch: 12 }, { wch: 15 }, { wch: 30 }];
  XLSX.utils.book_append_sheet(wb, usbWs, 'USB Checklist');
  
  // Laptop Checklist Sheet
  const laptopData = [
    ['Maintenance Laptop Checklist'],
    [''],
    ['Status', 'Checklist Item', 'Date', 'Completed By', 'Notes'],
    ['', 'Verify laptop is on authorized TCA inventory', '', '', ''],
    ['', 'Confirm security patches are current', '', '', ''],
    ['', 'Verify antivirus with current signatures', '', '', ''],
    ['', 'Pre-connection malicious code scan', '', '', ''],
    ['', 'Document scan results', '', '', ''],
    ['', 'Verify software matches approved baseline', '', '', ''],
    ['', 'Confirm user authorization', '', '', ''],
    ['', 'Disable unnecessary services/ports', '', '', ''],
    ['', 'Document connection purpose and duration', '', '', ''],
    ['', 'Post-disconnection scan', '', '', ''],
    ['', 'Update TCA log', '', '', ''],
  ];
  
  const laptopWs = XLSX.utils.aoa_to_sheet(laptopData);
  laptopWs['!cols'] = [{ wch: 10 }, { wch: 45 }, { wch: 12 }, { wch: 15 }, { wch: 30 }];
  XLSX.utils.book_append_sheet(wb, laptopWs, 'Laptop Checklist');
  
  // TCA Log Sheet
  const logData = [
    ['TCA Connection Log'],
    [''],
    ['Date', 'Time', 'TCA ID', 'TCA Type', 'BES Cyber System', 'User/Vendor', 'Purpose', 'Pre-Scan Result', 'Post-Scan Result', 'Disconnect Time', 'Notes'],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
  ];
  
  const logWs = XLSX.utils.aoa_to_sheet(logData);
  logWs['!cols'] = [
    { wch: 12 }, { wch: 8 }, { wch: 12 }, { wch: 12 }, { wch: 18 },
    { wch: 15 }, { wch: 20 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 25 }
  ];
  XLSX.utils.book_append_sheet(wb, logWs, 'TCA Log');
  
  // TCA Inventory Sheet
  const inventoryData = [
    ['TCA Inventory'],
    [''],
    ['TCA ID', 'Type', 'Make/Model', 'Serial Number', 'Assigned To', 'Last Patch Date', 'AV Signature Date', 'Status', 'Location', 'Notes'],
    ['USB-001', 'USB Drive', 'SanDisk 64GB', 'SN12345', 'J. Smith', 'N/A', '2024-04-15', 'Active', 'Control Room', ''],
    ['USB-002', 'USB Drive', 'Kingston 32GB', 'SN23456', 'IT Team', 'N/A', '2024-04-14', 'Active', 'IT Office', ''],
    ['LAP-001', 'Laptop', 'Dell Latitude', 'DL78901', 'Maintenance', '2024-04-10', '2024-04-15', 'Active', 'Maint Shop', ''],
    ['LAP-002', 'Laptop', 'HP ProBook', 'HP45678', 'Vendor Use', '2024-04-12', '2024-04-15', 'Active', 'Security', 'For escorted vendor use'],
  ];
  
  const invWs = XLSX.utils.aoa_to_sheet(inventoryData);
  invWs['!cols'] = [
    { wch: 10 }, { wch: 12 }, { wch: 18 }, { wch: 14 }, { wch: 14 },
    { wch: 14 }, { wch: 16 }, { wch: 10 }, { wch: 14 }, { wch: 25 }
  ];
  XLSX.utils.book_append_sheet(wb, invWs, 'TCA Inventory');
  
  XLSX.writeFile(wb, 'TCA_Management_Template.xlsx');
}

export function generateSupplyChainQuestionnaire(): void {
  const doc = new jsPDF();
  
  addHeader(doc, 'Supply Chain Risk Questionnaire', 'CIP-013-2 Vendor Assessment');
  
  let y = 50;
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  const intro = 'Use this questionnaire to assess vendor security practices for products and services that will be used with BES Cyber Systems, EACMS, or PACS. CIP-013-2 requires documented assessment of supply chain risks.';
  const introLines = doc.splitTextToSize(intro, 180);
  doc.text(introLines, 14, y);
  y += introLines.length * 5 + 10;
  
  // Vendor Information
  const vendorInfo = [
    ['Vendor Name:', ''],
    ['Product/Service:', ''],
    ['Assessment Date:', ''],
    ['Assessor:', ''],
    ['System Type:', '☐ BES Cyber System  ☐ EACMS  ☐ PACS  ☐ PCA'],
  ];

  autoTable(doc, {
    startY: y,
    body: vendorInfo,
    theme: 'plain',
    bodyStyles: { fontSize: 10 },
    columnStyles: { 0: { fontStyle: 'bold', cellWidth: 45 }, 1: { cellWidth: 135 } },
  });
  
  y = doc.lastAutoTable.finalY + 10;
  
  // Security Assessment Questions
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...HEADER_COLOR);
  doc.text('Security Assessment Questions', 14, y);
  y += 8;
  
  const securityQuestions = [
    ['1', 'Does vendor have documented secure development practices?', '☐ Yes ☐ No ☐ N/A'],
    ['2', 'Does vendor provide security patch notifications?', '☐ Yes ☐ No ☐ N/A'],
    ['3', 'What is the vendor patch response timeline?', '______ days'],
    ['4', 'Does vendor verify integrity of software/firmware?', '☐ Yes ☐ No ☐ N/A'],
    ['5', 'Does vendor disclose known vulnerabilities?', '☐ Yes ☐ No ☐ N/A'],
    ['6', 'Does vendor verify personnel security (background checks)?', '☐ Yes ☐ No ☐ N/A'],
    ['7', 'Does vendor have incident notification procedures?', '☐ Yes ☐ No ☐ N/A'],
    ['8', 'What remote access does vendor require?', '☐ None ☐ On-demand ☐ Persistent'],
  ];

  autoTable(doc, {
    startY: y,
    head: [['#', 'Question', 'Response']],
    body: securityQuestions,
    headStyles: { fillColor: HEADER_COLOR, fontSize: 9 },
    bodyStyles: { fontSize: 9 },
    columnStyles: { 0: { cellWidth: 10 }, 1: { cellWidth: 120 }, 2: { cellWidth: 50 } },
  });
  
  // Page 2 - Remote Access & EACMS/PACS
  doc.addPage();
  addHeader(doc, 'Supply Chain Risk Questionnaire', 'Remote Access & EACMS/PACS (CIP-013-2)');
  
  y = 50;
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...HEADER_COLOR);
  doc.text('Remote Access Assessment (CIP-013-2 R1.2.6)', 14, y);
  y += 8;
  
  const remoteQuestions = [
    ['1', 'Will vendor require remote access to BES Cyber Systems?', '☐ Yes ☐ No'],
    ['2', 'If yes, is access on-demand or persistent?', '☐ On-demand ☐ Persistent'],
    ['3', 'What systems will vendor access remotely?', ''],
    ['4', 'How is remote access authenticated?', '☐ MFA ☐ Password ☐ Certificate'],
    ['5', 'Is remote access logged and monitored?', '☐ Yes ☐ No'],
    ['6', 'Can we terminate remote access immediately if needed?', '☐ Yes ☐ No'],
    ['7', 'Is remote access session recorded?', '☐ Yes ☐ No'],
  ];

  autoTable(doc, {
    startY: y,
    head: [['#', 'Question', 'Response']],
    body: remoteQuestions,
    headStyles: { fillColor: HEADER_COLOR, fontSize: 9 },
    bodyStyles: { fontSize: 9 },
    columnStyles: { 0: { cellWidth: 10 }, 1: { cellWidth: 120 }, 2: { cellWidth: 50 } },
  });
  
  y = doc.lastAutoTable.finalY + 15;
  
  // EACMS/PACS Specific
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...HEADER_COLOR);
  doc.text('EACMS/PACS Vendor Assessment (CIP-013-2)', 14, y);
  y += 8;
  
  const eacmsQuestions = [
    ['1', 'Is this product classified as EACMS or PACS?', '☐ EACMS ☐ PACS ☐ Both'],
    ['2', 'Does vendor provide firmware/software integrity verification?', '☐ Yes ☐ No'],
    ['3', 'Does vendor support encryption for data at rest?', '☐ Yes ☐ No ☐ N/A'],
    ['4', 'Does vendor support encryption for data in transit?', '☐ Yes ☐ No ☐ N/A'],
    ['5', 'Does product support role-based access control?', '☐ Yes ☐ No'],
    ['6', 'Does product support audit logging?', '☐ Yes ☐ No'],
    ['7', 'Can product be configured without default credentials?', '☐ Yes ☐ No'],
  ];

  autoTable(doc, {
    startY: y,
    head: [['#', 'Question', 'Response']],
    body: eacmsQuestions,
    headStyles: { fillColor: HEADER_COLOR, fontSize: 9 },
    bodyStyles: { fontSize: 9 },
    columnStyles: { 0: { cellWidth: 10 }, 1: { cellWidth: 120 }, 2: { cellWidth: 50 } },
  });
  
  y = doc.lastAutoTable.finalY + 15;
  
  // Risk Summary
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...HEADER_COLOR);
  doc.text('Risk Assessment Summary', 14, y);
  y += 10;
  
  const summary = [
    ['Overall Risk Rating:', '☐ Low  ☐ Medium  ☐ High'],
    ['Identified Risks:', ''],
    ['Mitigation Measures:', ''],
    ['Approval Status:', '☐ Approved  ☐ Approved with Conditions  ☐ Not Approved'],
    ['Reviewer Signature:', ''],
    ['Review Date:', ''],
    ['Next Review Due (15 months):', ''],
  ];

  autoTable(doc, {
    startY: y,
    body: summary,
    theme: 'plain',
    bodyStyles: { fontSize: 10, minCellHeight: 12 },
    columnStyles: { 0: { fontStyle: 'bold', cellWidth: 50 }, 1: { cellWidth: 130 } },
  });

  addFooter(doc);
  doc.save('Supply_Chain_Questionnaire.pdf');
}

export function generateCIP014RiskAssessment(): void {
  const doc = new jsPDF();
  
  addHeader(doc, 'CIP-014 Risk Assessment', 'Physical Security of Transmission Stations');
  
  let y = 50;
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  const intro = 'CIP-014 requires owners of applicable Transmission stations and substations to perform risk assessments and develop security plans. This template guides you through the assessment process. Note: CIP-014 is distinct from CIP-006 PSP requirements.';
  const introLines = doc.splitTextToSize(intro, 180);
  doc.text(introLines, 14, y);
  y += introLines.length * 5 + 10;
  
  // CIP-014 vs CIP-006 Distinction
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(180, 50, 50);
  doc.text('Key Distinction: CIP-014 vs CIP-006', 14, y);
  y += 8;
  
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  
  const distinction = [
    ['Aspect', 'CIP-006 (PSP)', 'CIP-014 (Transmission)'],
    ['Focus', 'Cyber asset protection', 'Grid reliability/stability'],
    ['Scope', 'BES Cyber Systems', 'Critical transmission stations'],
    ['Trigger', 'Impact rating (H/M)', '500kV+ or identified critical'],
    ['Threat Model', 'Unauthorized access', 'Physical attack/sabotage'],
    ['Review', 'Internal', 'Third-party verification required'],
  ];

  autoTable(doc, {
    startY: y,
    head: [distinction[0]],
    body: distinction.slice(1),
    headStyles: { fillColor: HEADER_COLOR, fontSize: 9 },
    bodyStyles: { fontSize: 9 },
  });
  
  y = doc.lastAutoTable.finalY + 15;
  
  // Facility Information
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...HEADER_COLOR);
  doc.text('Facility Information', 14, y);
  y += 8;
  
  const facilityInfo = [
    ['Facility Name:', ''],
    ['Location:', ''],
    ['Voltage Level:', '☐ 500kV+  ☐ 345kV  ☐ 230kV  ☐ Other: ____'],
    ['Assessment Date:', ''],
    ['Assessor:', ''],
  ];

  autoTable(doc, {
    startY: y,
    body: facilityInfo,
    theme: 'plain',
    bodyStyles: { fontSize: 10 },
    columnStyles: { 0: { fontStyle: 'bold', cellWidth: 45 }, 1: { cellWidth: 135 } },
  });
  
  // Page 2 - Threat Assessment
  doc.addPage();
  addHeader(doc, 'CIP-014 Risk Assessment', 'Threat & Vulnerability Assessment');
  
  y = 50;
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...HEADER_COLOR);
  doc.text('R4: Threat & Vulnerability Assessment', 14, y);
  y += 8;
  
  const threatCategories = [
    ['Threat Category', 'Likelihood (L/M/H)', 'Impact (L/M/H)', 'Risk Score', 'Existing Controls'],
    ['Ballistic Attack', '', '', '', ''],
    ['Explosive Device', '', '', '', ''],
    ['Forced Entry', '', '', '', ''],
    ['Vehicle Attack', '', '', '', ''],
    ['Insider Threat', '', '', '', ''],
    ['Civil Disturbance', '', '', '', ''],
    ['Drone/UAS', '', '', '', ''],
  ];

  autoTable(doc, {
    startY: y,
    head: [threatCategories[0]],
    body: threatCategories.slice(1),
    headStyles: { fillColor: HEADER_COLOR, fontSize: 9 },
    bodyStyles: { fontSize: 9, minCellHeight: 12 },
  });
  
  y = doc.lastAutoTable.finalY + 15;
  
  // Vulnerability Assessment
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...HEADER_COLOR);
  doc.text('Vulnerability Assessment', 14, y);
  y += 8;
  
  const vulnAssessment = [
    ['☐', 'Perimeter fencing evaluated for breach resistance'],
    ['☐', 'Line of sight analysis completed (sniper/observation)'],
    ['☐', 'Vehicle approach paths analyzed'],
    ['☐', 'Critical equipment placement reviewed'],
    ['☐', 'Detection capability assessed (cameras, sensors)'],
    ['☐', 'Response time analysis completed'],
    ['☐', 'Lighting assessment performed'],
    ['☐', 'Communication systems reviewed'],
  ];

  autoTable(doc, {
    startY: y,
    body: vulnAssessment,
    theme: 'plain',
    bodyStyles: { fontSize: 10 },
    columnStyles: { 0: { cellWidth: 10 } },
  });
  
  y = doc.lastAutoTable.finalY + 15;
  
  // Third-Party Review
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...HEADER_COLOR);
  doc.text('R5: Third-Party Verification', 14, y);
  y += 8;
  
  const thirdParty = [
    ['Third-Party Reviewer:', ''],
    ['Reviewer Qualifications:', ''],
    ['Review Date:', ''],
    ['Verification Complete:', '☐ Yes  ☐ No'],
    ['Findings Addressed:', '☐ Yes  ☐ In Progress  ☐ N/A'],
  ];

  autoTable(doc, {
    startY: y,
    body: thirdParty,
    theme: 'plain',
    bodyStyles: { fontSize: 10 },
    columnStyles: { 0: { fontStyle: 'bold', cellWidth: 50 }, 1: { cellWidth: 130 } },
  });

  addFooter(doc);
  doc.save('CIP014_Risk_Assessment.pdf');
}
