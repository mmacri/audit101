import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { leadersSteps } from "@/data/nercCip/leadersSteps";

export default function NercCipLeaders() {
  return (
    <PersonaPageWrapper
      framework="nerc-cip"
      persona="leaders"
      title="NERC CIP for Leaders & Executives"
      description="Your 7-step path to CIP Senior Manager accountability and program governance"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "NERC CIP", path: "/nerc-cip" },
        { label: "Leaders" }
      ]}
      steps={leadersSteps}
    />
  );
}
