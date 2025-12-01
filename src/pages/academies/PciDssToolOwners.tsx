import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { StepSection } from "@/components/shared/StepSection";
import { pciDssToolOwnersSteps } from "@/data/pciDss/toolOwnersSteps";

export default function PciDssToolOwners() {
  return (
    <AcademyLayout academyName="PCI DSS - Tool Owners" breadcrumbs={[{ label: "Audit 101", path: "/" }, { label: "PCI DSS", path: "/pci-dss" }, { label: "Tool Owners" }]}>
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-navy mb-4">PCI DSS for Tool Owners & SMEs</h1>
          <p className="text-xl text-muted-foreground mb-12">Technical guidance for configuring and securing payment systems within the CDE.</p>
          {pciDssToolOwnersSteps.map((step) => (<StepSection key={step.number} step={step} />))}
        </div>
      </section>
    </AcademyLayout>
  );
}