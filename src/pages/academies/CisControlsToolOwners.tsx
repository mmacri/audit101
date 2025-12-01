import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { cisControlsToolOwnersSteps } from "@/data/cisControls/toolOwnersSteps";

export default function CisControlsToolOwners() {
  return (
    <PersonaPageWrapper
      framework="cis-controls"
      persona="tool-owners"
      title="CIS Controls for Tool Owners & SMEs"
      description="Your 7-step path to aligning security tools with CIS Controls"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "CIS Controls", path: "/cis-controls" },
        { label: "Tool Owners" }
      ]}
      steps={cisControlsToolOwnersSteps}
    />
  );
}
