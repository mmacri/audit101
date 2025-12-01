import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { StepSection } from "@/components/shared/StepSection";
import { pciDssAuditorsSteps } from "@/data/pciDss/auditorsSteps";

export default function PciDssAuditors() {
  return (
    <AcademyLayout academyName="PCI DSS - Auditors" breadcrumbs={[{ label: "Audit 101", path: "/" }, { label: "PCI DSS", path: "/pci-dss" }, { label: "Auditors" }]}>
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-navy mb-4">PCI DSS for Internal Auditors & Reviewers</h1>
          <p className="text-xl text-muted-foreground mb-12">Comprehensive audit guidance for assessing PCI DSS compliance and supporting QSA assessments.</p>
          {pciDssAuditorsSteps.map((step) => (<StepSection key={step.number} step={step} />))}
        </div>
      </section>
    </AcademyLayout>
  );
}