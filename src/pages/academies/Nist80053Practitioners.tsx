import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { nist80053PractitionersSteps } from "@/data/nist80053/practitionersSteps";

export default function Nist80053Practitioners() {
  return (
    <PersonaPageWrapper
      framework="nist-800-53"
      persona="practitioners"
      title="NIST 800-53 for Practitioners & Implementers"
      description="Your 7-step path to implementing and maintaining NIST 800-53 controls"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "NIST 800-53", path: "/nist-800-53" },
        { label: "Practitioners" }
      ]}
      steps={nist80053PractitionersSteps}
    />
  );
}
