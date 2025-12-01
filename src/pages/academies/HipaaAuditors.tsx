import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { StepSection } from "@/components/shared/StepSection";
import { auditorsSteps } from "@/data/hipaa/auditorsSteps";
import { ClipboardCheck } from "lucide-react";

const HipaaAuditors = () => {
  return (
    <AcademyLayout
      title="HIPAA Auditors Path"
      description="HIPAA compliance audit methodology"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center">
              <ClipboardCheck className="w-8 h-8 text-emerald-500" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Internal Auditors & Risk Reviewers</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive HIPAA compliance audit path
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {auditorsSteps.map((step) => (
              <StepSection key={step.number} step={step} accentColor="emerald" />
            ))}
          </div>
        </div>
      </div>
    </AcademyLayout>
  );
};

export default HipaaAuditors;
