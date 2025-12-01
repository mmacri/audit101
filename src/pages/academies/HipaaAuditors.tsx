import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { auditorsSteps } from "@/data/hipaa/auditorsSteps";

export default function HipaaAuditors() {
  return (
    <PersonaPageWrapper
      framework="hipaa"
      persona="auditors"
      title="HIPAA for Internal Auditors"
      description="Your 7-step path to HIPAA compliance audit methodology"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "HIPAA", path: "/hipaa" },
        { label: "Auditors" }
      ]}
      steps={auditorsSteps}
    />
  );
}
