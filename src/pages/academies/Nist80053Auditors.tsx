import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { nist80053AuditorsSteps } from "@/data/nist80053/auditorsSteps";

export default function Nist80053Auditors() {
  return (
    <PersonaPageWrapper
      framework="nist-800-53"
      persona="auditors"
      title="NIST 800-53 for Internal Auditors & Reviewers"
      description="Your 7-step path to assessing NIST 800-53 control implementation and effectiveness"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "NIST 800-53", path: "/nist-800-53" },
        { label: "Auditors" }
      ]}
      steps={nist80053AuditorsSteps}
    />
  );
}
