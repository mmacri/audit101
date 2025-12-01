import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { soxItgcLeadersSteps } from "@/data/soxItgc/leadersSteps";

export default function SoxItgcLeaders() {
  return (
    <PersonaPageWrapper
      framework="sox-itgc"
      persona="leaders"
      title="SOX ITGC for Finance & IT Leadership"
      description="Your 7-step path to governing and overseeing your SOX ITGC program"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "SOX ITGC", path: "/sox-itgc" },
        { label: "Leaders" }
      ]}
      steps={soxItgcLeadersSteps}
    />
  );
}
