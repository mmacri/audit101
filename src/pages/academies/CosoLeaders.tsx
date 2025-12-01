import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { StepSection } from "@/components/shared/StepSection";
import { leadersSteps } from "@/data/coso/leadersSteps";

const CosoLeaders = () => {
  return (
    <AcademyLayout
      academyName="COSO Framework Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "COSO", path: "/coso" },
        { label: "Leaders & Executives" }
      ]}
      showBackButton
    >
      <div className="py-12 bg-gradient-to-br from-violet-500/5 to-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-3">
            COSO for Leaders & Executives
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your 7-step path to control environment and governance oversight
          </p>
          
          <div className="space-y-8">
            {leadersSteps.map((step) => (
              <StepSection key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </AcademyLayout>
  );
};

export default CosoLeaders;
