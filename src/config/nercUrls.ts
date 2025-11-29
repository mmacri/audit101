/**
 * Centralized NERC URL configuration
 * Update these URLs when NERC standards are revised or links change
 * Last verified: November 2025
 */

export const NERC_URLS = {
  // Main NERC Sites
  standards_library: "https://www.nerc.com/pa/Stand/Pages/ReliabilityStandards.aspx",
  cip_standards: "https://www.nerc.com/pa/Stand/Pages/CIPStandards.aspx",
  compliance_guidance: "https://www.nerc.com/pa/comp/guidance/Pages/default.aspx",
  rsaws: "https://www.nerc.com/pa/comp/Pages/Audit-Worksheets.aspx",
  regional_entities: "https://www.nerc.com/pa/comp/Pages/Regional-Entities.aspx",
  
  // FERC
  ferc_cip: "https://www.ferc.gov/industries-data/electric/industry-activities/cyber-security-cip",
  
  // ES-ISAC
  es_isac: "https://www.eisac.com",
  
  // Individual CIP Standards (latest versions)
  cip_002: "https://www.nerc.com/pa/Stand/Reliability%20Standards/CIP-002-5.1a.pdf",
  cip_003: "https://www.nerc.com/pa/Stand/Reliability%20Standards/CIP-003-8.pdf",
  cip_004: "https://www.nerc.com/pa/Stand/Reliability%20Standards/CIP-004-7.pdf",
  cip_005: "https://www.nerc.com/pa/Stand/Reliability%20Standards/CIP-005-7.pdf",
  cip_006: "https://www.nerc.com/pa/Stand/Reliability%20Standards/CIP-006-6.pdf",
  cip_007: "https://www.nerc.com/pa/Stand/Reliability%20Standards/CIP-007-6.pdf",
  cip_008: "https://www.nerc.com/pa/Stand/Reliability%20Standards/CIP-008-6.pdf",
  cip_009: "https://www.nerc.com/pa/Stand/Reliability%20Standards/CIP-009-6.pdf",
  cip_010: "https://www.nerc.com/pa/Stand/Reliability%20Standards/CIP-010-4.pdf",
  cip_011: "https://www.nerc.com/pa/Stand/Reliability%20Standards/CIP-011-3.pdf",
  cip_012: "https://www.nerc.com/pa/Stand/Reliability%20Standards/CIP-012-1.pdf",
  cip_013: "https://www.nerc.com/pa/Stand/Reliability%20Standards/CIP-013-2.pdf",
  cip_014: "https://www.nerc.com/pa/Stand/Reliability%20Standards/CIP-014-3.pdf",
  
  // RSAWs
  rsaw_cip_002: "https://www.nerc.com/pa/comp/Audit%20Worksheets/RSAW_CIP-002-5.1a.xlsx",
  rsaw_cip_003: "https://www.nerc.com/pa/comp/Audit%20Worksheets/RSAW_CIP-003-8.xlsx",
  rsaw_cip_007: "https://www.nerc.com/pa/comp/Audit%20Worksheets/RSAW_CIP-007-6.xlsx",
  rsaw_cip_012: "https://www.nerc.com/pa/comp/Audit%20Worksheets/RSAW_CIP-012-1.xlsx",
  rsaw_cip_013: "https://www.nerc.com/pa/comp/Audit%20Worksheets/RSAW_CIP-013-2.xlsx",
  rsaw_cip_014: "https://www.nerc.com/pa/comp/Audit%20Worksheets/RSAW_CIP-014-3.xlsx",
};

export const NERC_LAST_VERIFIED = "2025-11-29";

export const getStandardUrl = (standard: string): string => {
  const key = standard.toLowerCase().replace("-", "_") as keyof typeof NERC_URLS;
  return NERC_URLS[key] || NERC_URLS.cip_standards;
};

export const getRsawUrl = (standard: string): string => {
  const key = `rsaw_${standard.toLowerCase().replace("-", "_")}` as keyof typeof NERC_URLS;
  return NERC_URLS[key] || NERC_URLS.rsaws;
};
