import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { StepSection } from "@/components/shared/StepSection";
import { auditorsSteps } from "@/data/hipaa/auditorsSteps";

const HipaaAuditors = () => {
  return (
    <AcademyLayout
      academyName="HIPAA Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "HIPAA", path: "/hipaa" },
        { label: "Internal Auditors" }
      ]}
      showBackButton
    >
      <div className="py-12 bg-gradient-to-br from-emerald-500/5 to-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-3">
            HIPAA for Internal Auditors
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your 7-step path to HIPAA compliance audit methodology
          </p>
          
          <div className="space-y-8">
            {auditorsSteps.map((step) => (
              <StepSection key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </AcademyLayout>
  );
};

export default HipaaAuditors;
