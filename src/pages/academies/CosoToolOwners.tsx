import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { StepSection } from "@/components/shared/StepSection";
import { toolOwnersSteps } from "@/data/coso/toolOwnersSteps";

const CosoToolOwners = () => {
  return (
    <AcademyLayout
      academyName="COSO Framework Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "COSO", path: "/coso" },
        { label: "Tool Owners & SMEs" }
      ]}
      showBackButton
    >
      <div className="py-12 bg-gradient-to-br from-violet-500/5 to-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-3">
            COSO for Tool Owners & SMEs
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your 7-step path to system controls and IT general controls
          </p>
          
          <div className="space-y-8">
            {toolOwnersSteps.map((step) => (
              <StepSection key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </AcademyLayout>
  );
};

export default CosoToolOwners;
