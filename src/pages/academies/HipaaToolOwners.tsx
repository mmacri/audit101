import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { StepSection } from "@/components/shared/StepSection";
import { toolOwnersSteps } from "@/data/hipaa/toolOwnersSteps";
import { Wrench } from "lucide-react";

const HipaaToolOwners = () => {
  return (
    <AcademyLayout
      title="HIPAA Tool Owners Path"
      description="PHI system management and security"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center">
              <Wrench className="w-8 h-8 text-emerald-500" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Tool Owners & SMEs</h1>
              <p className="text-xl text-muted-foreground">
                PHI processing systems management path
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {toolOwnersSteps.map((step) => (
              <StepSection key={step.number} step={step} accentColor="emerald" />
            ))}
          </div>
        </div>
      </div>
    </AcademyLayout>
  );
};

export default HipaaToolOwners;
