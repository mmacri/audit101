import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { nistCsfLeadersSteps } from "@/data/nistCsf/leadersSteps";

export default function NistCsfLeaders() {
  return (
    <PersonaPageWrapper
      framework="nist-csf"
      persona="leaders"
      title="NIST CSF for Leaders & Executives"
      description="Your 7-step path to governing CSF and advancing organizational maturity"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "NIST CSF", path: "/nist-csf" },
        { label: "Leaders" }
      ]}
      steps={nistCsfLeadersSteps}
    />
  );
}
