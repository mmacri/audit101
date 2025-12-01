import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { pciDssLeadersSteps } from "@/data/pciDss/leadersSteps";

export default function PciDssLeaders() {
  return (
    <PersonaPageWrapper
      framework="pci-dss"
      persona="leaders"
      title="PCI DSS for Leaders & Executives"
      description="Strategic guidance for establishing PCI DSS programs and maintaining compliance."
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "PCI DSS", path: "/pci-dss" },
        { label: "Leaders" }
      ]}
      steps={pciDssLeadersSteps}
    />
  );
}