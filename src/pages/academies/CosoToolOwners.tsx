import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { toolOwnersSteps } from "@/data/coso/toolOwnersSteps";

export default function CosoToolOwners() {
  return (
    <PersonaPageWrapper
      framework="coso"
      persona="tool-owners"
      title="COSO for Tool Owners & SMEs"
      description="Your 7-step path to system controls and IT general controls"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "COSO", path: "/coso" },
        { label: "Tool Owners" }
      ]}
      steps={toolOwnersSteps}
    />
  );
}
