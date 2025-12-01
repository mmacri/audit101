import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { pciDssToolOwnersSteps } from "@/data/pciDss/toolOwnersSteps";

export default function PciDssToolOwners() {
  return (
    <PersonaPageWrapper
      framework="pci-dss"
      persona="tool-owners"
      title="PCI DSS for Tool Owners & SMEs"
      description="Technical guidance for configuring and securing payment systems within the CDE."
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "PCI DSS", path: "/pci-dss" },
        { label: "Tool Owners" }
      ]}
      steps={pciDssToolOwnersSteps}
    />
  );
}