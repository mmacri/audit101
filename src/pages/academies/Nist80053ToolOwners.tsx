import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { nist80053ToolOwnersSteps } from "@/data/nist80053/toolOwnersSteps";

export default function Nist80053ToolOwners() {
  return (
    <PersonaPageWrapper
      framework="nist-800-53"
      persona="tool-owners"
      title="NIST 800-53 for Tool Owners & SMEs"
      description="Your 7-step path to aligning security tools with NIST 800-53 controls"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "NIST 800-53", path: "/nist-800-53" },
        { label: "Tool Owners" }
      ]}
      steps={nist80053ToolOwnersSteps}
    />
  );
}
