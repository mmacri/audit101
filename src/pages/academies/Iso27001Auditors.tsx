import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { StepSection } from "@/components/shared/StepSection";
import { iso27001AuditorsSteps } from "@/data/iso27001/auditorsSteps";

export default function Iso27001Auditors() {
  return (
    <AcademyLayout
      academyName="ISO 27001 - Auditors"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "ISO 27001", path: "/iso-27001" },
        { label: "Auditors" }
      ]}
    >
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-navy mb-4">ISO 27001 for Internal Auditors & Reviewers</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Comprehensive audit guidance for assessing ISMS compliance and preparing for certification audits.
          </p>
          {iso27001AuditorsSteps.map((step) => (
            <StepSection key={step.number} step={step} />
          ))}
        </div>
      </section>
    </AcademyLayout>
  );
}