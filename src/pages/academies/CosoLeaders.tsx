import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { leadersSteps } from "@/data/coso/leadersSteps";

export default function CosoLeaders() {
  return (
    <PersonaPageWrapper
      framework="coso"
      persona="leaders"
      title="COSO for Leaders & Executives"
      description="Your 7-step path to control environment and governance oversight"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "COSO", path: "/coso" },
        { label: "Leaders" }
      ]}
      steps={leadersSteps}
    />
  );
}
