import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { StepSection } from "@/components/shared/StepSection";
import { iso27001ToolOwnersSteps } from "@/data/iso27001/toolOwnersSteps";

export default function Iso27001ToolOwners() {
  return (
    <AcademyLayout
      academyName="ISO 27001 - Tool Owners"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "ISO 27001", path: "/iso-27001" },
        { label: "Tool Owners" }
      ]}
    >
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-navy mb-4">ISO 27001 for Tool Owners & SMEs</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Technical guidance for implementing technological controls, managing evidence, and supporting certification audits.
          </p>
          {iso27001ToolOwnersSteps.map((step) => (
            <StepSection key={step.number} step={step} />
          ))}
        </div>
      </section>
    </AcademyLayout>
  );
}