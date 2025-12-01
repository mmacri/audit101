import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { cisControlsAuditorsSteps } from "@/data/cisControls/auditorsSteps";

export default function CisControlsAuditors() {
  return (
    <PersonaPageWrapper
      framework="cis-controls"
      persona="auditors"
      title="CIS Controls for Internal Auditors & Reviewers"
      description="Your 7-step path to assessing CIS Controls implementation and maturity"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "CIS Controls", path: "/cis-controls" },
        { label: "Auditors" }
      ]}
      steps={cisControlsAuditorsSteps}
    />
  );
}
