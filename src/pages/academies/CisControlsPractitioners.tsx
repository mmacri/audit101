import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { cisControlsPractitionersSteps } from "@/data/cisControls/practitionersSteps";

export default function CisControlsPractitioners() {
  return (
    <PersonaPageWrapper
      framework="cis-controls"
      persona="practitioners"
      title="CIS Controls for Practitioners & Implementers"
      description="Your 7-step path to implementing the 18 CIS Controls"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "CIS Controls", path: "/cis-controls" },
        { label: "Practitioners" }
      ]}
      steps={cisControlsPractitionersSteps}
    />
  );
}
