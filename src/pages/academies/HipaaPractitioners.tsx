import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { StepSection } from "@/components/shared/StepSection";
import { practitionersSteps } from "@/data/hipaa/practitionersSteps";

const HipaaPractitioners = () => {
  return (
    <AcademyLayout
      academyName="HIPAA Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "HIPAA", path: "/hipaa" },
        { label: "Practitioners & Implementers" }
      ]}
      showBackButton
    >
      <div className="py-12 bg-gradient-to-br from-emerald-500/5 to-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-3">
            HIPAA for Practitioners & Implementers
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your 7-step path to implementing and maintaining HIPAA safeguards
          </p>
          
          <div className="space-y-8">
            {practitionersSteps.map((step) => (
              <StepSection key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </AcademyLayout>
  );
};

export default HipaaPractitioners;
