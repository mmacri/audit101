import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { soxItgcPractitionersSteps } from "@/data/soxItgc/practitionersSteps";

export default function SoxItgcPractitioners() {
  return (
    <PersonaPageWrapper
      framework="sox-itgc"
      persona="practitioners"
      title="SOX ITGC for IT Practitioners & Admins"
      description="Your 7-step path to implementing ITGC controls for financial systems"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "SOX ITGC", path: "/sox-itgc" },
        { label: "Practitioners" }
      ]}
      steps={soxItgcPractitionersSteps}
    />
  );
}
