import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { iso27001LeadersSteps } from "@/data/iso27001/leadersSteps";

export default function Iso27001Leaders() {
  return (
    <PersonaPageWrapper
      framework="iso-27001"
      persona="leaders"
      title="ISO 27001 for Leaders & Executives"
      description="Strategic guidance for establishing ISMS governance, securing executive sponsorship, and maintaining certification."
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "ISO 27001", path: "/iso-27001" },
        { label: "Leaders" }
      ]}
      steps={iso27001LeadersSteps}
    />
  );
}
