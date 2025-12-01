import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { pciDssAuditorsSteps } from "@/data/pciDss/auditorsSteps";

export default function PciDssAuditors() {
  return (
    <PersonaPageWrapper
      framework="pci-dss"
      persona="auditors"
      title="PCI DSS for Internal Auditors & Reviewers"
      description="Comprehensive audit guidance for assessing PCI DSS compliance and supporting QSA assessments."
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "PCI DSS", path: "/pci-dss" },
        { label: "Auditors" }
      ]}
      steps={pciDssAuditorsSteps}
    />
  );
}