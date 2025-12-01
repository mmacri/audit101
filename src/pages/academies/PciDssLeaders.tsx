import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { StepSection } from "@/components/shared/StepSection";
import { pciDssLeadersSteps } from "@/data/pciDss/leadersSteps";

export default function PciDssLeaders() {
  return (
    <AcademyLayout academyName="PCI DSS - Leaders" breadcrumbs={[{ label: "Audit 101", path: "/" }, { label: "PCI DSS", path: "/pci-dss" }, { label: "Leaders" }]}>
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-navy mb-4">PCI DSS for Leaders & Executives</h1>
          <p className="text-xl text-muted-foreground mb-12">Strategic guidance for establishing PCI DSS programs and maintaining compliance.</p>
          {pciDssLeadersSteps.map((step) => (<StepSection key={step.number} step={step} />))}
        </div>
      </section>
    </AcademyLayout>
  );
}