import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { pciDssPractitionersSteps } from "@/data/pciDss/practitionersSteps";

export default function PciDssPractitioners() {
  return (
    <PersonaPageWrapper
      framework="pci-dss"
      persona="practitioners"
      title="PCI DSS for Practitioners & Implementers"
      description="Hands-on guidance for implementing all 12 PCI DSS requirements and protecting cardholder data."
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "PCI DSS", path: "/pci-dss" },
        { label: "Practitioners" }
      ]}
      steps={pciDssPractitionersSteps}
    />
  );
}