import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { nistCsfAuditorsSteps } from "@/data/nistCsf/auditorsSteps";

export default function NistCsfAuditors() {
  return (
    <PersonaPageWrapper
      framework="nist-csf"
      persona="auditors"
      title="NIST CSF for Internal Auditors & Reviewers"
      description="Your 7-step path to assessing CSF profile achievement and Tier maturity"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "NIST CSF", path: "/nist-csf" },
        { label: "Auditors" }
      ]}
      steps={nistCsfAuditorsSteps}
    />
  );
}
