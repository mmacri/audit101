import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { StepSection } from "@/components/shared/StepSection";
import { pciDssPractitionersSteps } from "@/data/pciDss/practitionersSteps";

export default function PciDssPractitioners() {
  return (
    <AcademyLayout
      academyName="PCI DSS - Practitioners"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "PCI DSS", path: "/pci-dss" },
        { label: "Practitioners" }
      ]}
    >
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-navy mb-4">PCI DSS for Practitioners & Implementers</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Hands-on guidance for implementing all 12 PCI DSS requirements and protecting cardholder data.
          </p>
          {pciDssPractitionersSteps.map((step) => (
            <StepSection key={step.number} step={step} />
          ))}
        </div>
      </section>
    </AcademyLayout>
  );
}