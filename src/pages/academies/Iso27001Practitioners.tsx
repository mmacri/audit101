import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { StepSection } from "@/components/shared/StepSection";
import { iso27001PractitionersSteps } from "@/data/iso27001/practitionersSteps";

export default function Iso27001Practitioners() {
  return (
    <AcademyLayout
      academyName="ISO 27001 - Practitioners"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "ISO 27001", path: "/iso-27001" },
        { label: "Practitioners" }
      ]}
    >
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-navy mb-4">ISO 27001 for Practitioners & Implementers</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Hands-on guidance for implementing ISMS controls, conducting risk assessments, and supporting ISO 27001 certification.
          </p>
          {iso27001PractitionersSteps.map((step) => (
            <StepSection key={step.number} step={step} />
          ))}
        </div>
      </section>
    </AcademyLayout>
  );
}