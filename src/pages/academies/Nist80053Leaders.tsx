import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { nist80053LeadersSteps } from "@/data/nist80053/leadersSteps";

export default function Nist80053Leaders() {
  return (
    <PersonaPageWrapper
      framework="nist-800-53"
      persona="leaders"
      title="NIST 800-53 for Leaders & Executives"
      description="Your 7-step path to governing and resourcing a successful NIST 800-53 program"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "NIST 800-53", path: "/nist-800-53" },
        { label: "Leaders" }
      ]}
      steps={nist80053LeadersSteps}
    />
  );
}
