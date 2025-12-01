import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { cisControlsLeadersSteps } from "@/data/cisControls/leadersSteps";

export default function CisControlsLeaders() {
  return (
    <PersonaPageWrapper
      framework="cis-controls"
      persona="leaders"
      title="CIS Controls for Leaders & Executives"
      description="Your 7-step path to governing and advancing your CIS Controls program"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "CIS Controls", path: "/cis-controls" },
        { label: "Leaders" }
      ]}
      steps={cisControlsLeadersSteps}
    />
  );
}
