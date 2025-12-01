import { AcademyLayout } from "@/components/shared/AcademyLayout";
import { StepSection } from "@/components/shared/StepSection";
import { cisControlsAuditorsSteps } from "@/data/cisControls/auditorsSteps";
import { PageIntro } from "@/components/PageIntro";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Download, ArrowLeft } from "lucide-react";

export default function CisControlsAuditors() {
  const navigate = useNavigate();

  return (
    <AcademyLayout
      academyName="CIS Controls Readiness Academy"
      breadcrumbs={[
        { label: "Academies", path: "/" },
        { label: "CIS Controls", path: "/cis-controls" },
        { label: "Internal Auditors & Reviewers" }
      ]}
      showBackButton
    >
      <div className="py-12 bg-gradient-to-br from-primary/5 to-background">
        <div className="container max-w-4xl">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-navy mb-3">
              CIS Controls for Internal Auditors & Reviewers
            </h1>
            <p className="text-xl text-muted-foreground">
              Your 7-step path to assessing CIS Controls implementation and maturity
            </p>
          </div>
          <PageIntro>
            This is your main training home for the Internal Auditors & Reviewers role. Learn how to assess CIS Controls, use CIS-CAT for technical testing, and support Implementation Group advancement.
          </PageIntro>
        </div>
      </div>

      <div className="border-b bg-muted/30">
        <div className="container max-w-4xl py-6">
          <h3 className="font-semibold mb-4">Your Learning Path</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {cisControlsAuditorsSteps.map((step) => (
              <a key={step.number} href={`#step-${step.number}`} className="text-sm hover:text-primary transition-colors flex items-start gap-2">
                <span className="font-semibold text-primary">{step.number}.</span>
                <span>{step.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 bg-background">
        <div className="container max-w-4xl">
          {cisControlsAuditorsSteps.map((step) => (
            <StepSection key={step.number} step={step} />
          ))}
        </div>
      </div>

      <div className="border-t bg-muted/30">
        <div className="container max-w-4xl py-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Button variant="outline" onClick={() => navigate('/cis-controls')} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to CIS Controls Home
            </Button>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => navigate('/cis-controls/resources')} className="gap-2">
                <Download className="h-4 w-4" />
                Download All Templates
              </Button>
              <Button onClick={() => navigate('/common-controls')}>
                View Common Controls Hub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AcademyLayout>
  );
}
