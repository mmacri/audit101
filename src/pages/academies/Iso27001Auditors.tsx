import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { iso27001AuditorsSteps } from "@/data/iso27001/auditorsSteps";

export default function Iso27001Auditors() {
  return (
    <PersonaPageWrapper
      framework="iso-27001"
      persona="auditors"
      title="ISO 27001 for Internal Auditors & Reviewers"
      description="Comprehensive audit guidance for assessing ISMS compliance and preparing for certification audits."
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "ISO 27001", path: "/iso-27001" },
        { label: "Auditors" }
      ]}
      steps={iso27001AuditorsSteps}
    />
  );
}
