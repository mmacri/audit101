import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { StepSection } from "@/components/shared/StepSection";
import { practitionersSteps } from "@/data/coso/practitionersSteps";

const CosoPractitioners = () => {
  return (
    <AcademyLayout
      academyName="COSO Framework Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "COSO", path: "/coso" },
        { label: "Practitioners & Implementers" }
      ]}
      showBackButton
    >
      <div className="py-12 bg-gradient-to-br from-violet-500/5 to-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-3">
            COSO for Practitioners & Implementers
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your 7-step path to control implementation and monitoring
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

export default CosoPractitioners;
