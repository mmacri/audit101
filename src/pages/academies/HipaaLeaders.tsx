import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { leadersSteps } from "@/data/hipaa/leadersSteps";

export default function HipaaLeaders() {
  return (
    <PersonaPageWrapper
      framework="hipaa"
      persona="leaders"
      title="HIPAA for Leaders & Executives"
      description="Your 7-step path to executive HIPAA compliance program oversight"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "HIPAA", path: "/hipaa" },
        { label: "Leaders" }
      ]}
      steps={leadersSteps}
    />
  );
}
