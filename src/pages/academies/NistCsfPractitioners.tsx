import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { nistCsfPractitionersSteps } from "@/data/nistCsf/practitionersSteps";

export default function NistCsfPractitioners() {
  return (
    <PersonaPageWrapper
      framework="nist-csf"
      persona="practitioners"
      title="NIST CSF for Practitioners & Implementers"
      description="Your 7-step path to implementing NIST CSF outcomes across all 6 functions"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "NIST CSF", path: "/nist-csf" },
        { label: "Practitioners" }
      ]}
      steps={nistCsfPractitionersSteps}
    />
  );
}
