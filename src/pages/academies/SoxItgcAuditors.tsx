import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { soxItgcAuditorsSteps } from "@/data/soxItgc/auditorsSteps";

export default function SoxItgcAuditors() {
  return (
    <PersonaPageWrapper
      framework="sox-itgc"
      persona="auditors"
      title="SOX ITGC for Internal Auditors & Control Owners"
      description="Your 7-step path to testing SOX ITGC controls and supporting external audits"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "SOX ITGC", path: "/sox-itgc" },
        { label: "Auditors" }
      ]}
      steps={soxItgcAuditorsSteps}
    />
  );
}
