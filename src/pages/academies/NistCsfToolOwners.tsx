import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { nistCsfToolOwnersSteps } from "@/data/nistCsf/toolOwnersSteps";

export default function NistCsfToolOwners() {
  return (
    <PersonaPageWrapper
      framework="nist-csf"
      persona="tool-owners"
      title="NIST CSF for Tool Owners & SMEs"
      description="Your 7-step path to aligning tools with CSF outcomes and profiles"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "NIST CSF", path: "/nist-csf" },
        { label: "Tool Owners" }
      ]}
      steps={nistCsfToolOwnersSteps}
    />
  );
}
