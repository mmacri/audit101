import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { soxItgcToolOwnersSteps } from "@/data/soxItgc/toolOwnersSteps";

export default function SoxItgcToolOwners() {
  return (
    <PersonaPageWrapper
      framework="sox-itgc"
      persona="tool-owners"
      title="SOX ITGC for System & Tool Owners"
      description="Your 7-step path to configuring tools for SOX ITGC compliance"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "SOX ITGC", path: "/sox-itgc" },
        { label: "Tool Owners" }
      ]}
      steps={soxItgcToolOwnersSteps}
    />
  );
}
