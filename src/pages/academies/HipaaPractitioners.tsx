import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { practitionersSteps } from "@/data/hipaa/practitionersSteps";

export default function HipaaPractitioners() {
  return (
    <PersonaPageWrapper
      framework="hipaa"
      persona="practitioners"
      title="HIPAA for Practitioners & Implementers"
      description="Your 7-step path to implementing and maintaining HIPAA safeguards"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "HIPAA", path: "/hipaa" },
        { label: "Practitioners" }
      ]}
      steps={practitionersSteps}
    />
  );
}
