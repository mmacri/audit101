import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { StepSection } from "@/components/shared/StepSection";
import { toolOwnersSteps } from "@/data/coso/toolOwnersSteps";
import { Wrench } from "lucide-react";

const CosoToolOwners = () => {
  return (
    <AcademyLayout
      title="COSO Tool Owners Path"
      description="System controls and IT general controls"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-violet-500/10 rounded-xl flex items-center justify-center">
              <Wrench className="w-8 h-8 text-violet-500" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Tool Owners & SMEs</h1>
              <p className="text-xl text-muted-foreground">
                Process owners and system controls path
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {toolOwnersSteps.map((step) => (
              <StepSection key={step.number} step={step} accentColor="violet" />
            ))}
          </div>
        </div>
      </div>
    </AcademyLayout>
  );
};

export default CosoToolOwners;
