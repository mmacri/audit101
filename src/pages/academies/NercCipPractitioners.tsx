import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { practitionersSteps } from "@/data/nercCip/practitionersSteps";

export default function NercCipPractitioners() {
  return (
    <PersonaPageWrapper
      framework="nerc-cip"
      persona="practitioners"
      title="NERC CIP for Practitioners & Implementers"
      description="Your 7-step path to implementing CIP controls for BES Cyber Systems"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "NERC CIP", path: "/nerc-cip" },
        { label: "Practitioners" }
      ]}
      steps={practitionersSteps}
    />
  );
}
