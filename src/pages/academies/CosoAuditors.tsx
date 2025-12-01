import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { auditorsSteps } from "@/data/coso/auditorsSteps";

export default function CosoAuditors() {
  return (
    <PersonaPageWrapper
      framework="coso"
      persona="auditors"
      title="COSO for Internal Auditors"
      description="Your 7-step path to internal control audit methodology"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "COSO", path: "/coso" },
        { label: "Auditors" }
      ]}
      steps={auditorsSteps}
    />
  );
}
