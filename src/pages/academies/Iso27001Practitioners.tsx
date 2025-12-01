import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { iso27001PractitionersSteps } from "@/data/iso27001/practitionersSteps";

export default function Iso27001Practitioners() {
  return (
    <PersonaPageWrapper
      framework="iso-27001"
      persona="practitioners"
      title="ISO 27001 for Practitioners & Implementers"
      description="Hands-on guidance for implementing ISMS controls, conducting risk assessments, and supporting ISO 27001 certification."
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "ISO 27001", path: "/iso-27001" },
        { label: "Practitioners" }
      ]}
      steps={iso27001PractitionersSteps}
    />
  );
}
