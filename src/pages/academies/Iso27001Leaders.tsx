import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { StepSection } from "@/components/shared/StepSection";
import { iso27001LeadersSteps } from "@/data/iso27001/leadersSteps";

export default function Iso27001Leaders() {
  return (
    <AcademyLayout
      academyName="ISO 27001 - Leaders"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "ISO 27001", path: "/iso-27001" },
        { label: "Leaders" }
      ]}
    >
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-navy mb-4">ISO 27001 for Leaders & Executives</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Strategic guidance for establishing ISMS governance, securing executive sponsorship, and maintaining certification.
          </p>
          {iso27001LeadersSteps.map((step) => (
            <StepSection key={step.number} step={step} />
          ))}
        </div>
      </section>
    </AcademyLayout>
  );
}