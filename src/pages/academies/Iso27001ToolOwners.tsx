import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { iso27001ToolOwnersSteps } from "@/data/iso27001/toolOwnersSteps";

export default function Iso27001ToolOwners() {
  return (
    <PersonaPageWrapper
      framework="iso-27001"
      persona="tool-owners"
      title="ISO 27001 for Tool Owners & SMEs"
      description="Technical guidance for implementing technological controls, managing evidence, and supporting certification audits."
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "ISO 27001", path: "/iso-27001" },
        { label: "Tool Owners" }
      ]}
      steps={iso27001ToolOwnersSteps}
    />
  );
}
