import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { practitionersSteps } from "@/data/coso/practitionersSteps";

export default function CosoPractitioners() {
  return (
    <PersonaPageWrapper
      framework="coso"
      persona="practitioners"
      title="COSO for Practitioners & Implementers"
      description="Your 7-step path to control implementation and monitoring"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "COSO", path: "/coso" },
        { label: "Practitioners" }
      ]}
      steps={practitionersSteps}
    />
  );
}
