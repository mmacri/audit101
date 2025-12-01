import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { toolOwnersSteps } from "@/data/nercCip/toolOwnersSteps";

export default function NercCipToolOwners() {
  return (
    <PersonaPageWrapper
      framework="nerc-cip"
      persona="tool-owners"
      title="NERC CIP for Tool Owners & SMEs"
      description="Your 7-step path to managing EACMS, PACS, and critical systems"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "NERC CIP", path: "/nerc-cip" },
        { label: "Tool Owners" }
      ]}
      steps={toolOwnersSteps}
    />
  );
}
