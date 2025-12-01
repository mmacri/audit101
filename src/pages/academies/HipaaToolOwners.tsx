import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { toolOwnersSteps } from "@/data/hipaa/toolOwnersSteps";

export default function HipaaToolOwners() {
  return (
    <PersonaPageWrapper
      framework="hipaa"
      persona="tool-owners"
      title="HIPAA for Tool Owners & SMEs"
      description="Your 7-step path to managing PHI processing systems"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "HIPAA", path: "/hipaa" },
        { label: "Tool Owners" }
      ]}
      steps={toolOwnersSteps}
    />
  );
}
