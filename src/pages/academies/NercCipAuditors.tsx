import { PersonaPageWrapper } from "@/components/shared/PersonaPageWrapper";
import { auditorsSteps } from "@/data/nercCip/auditorsSteps";

export default function NercCipAuditors() {
  return (
    <PersonaPageWrapper
      framework="nerc-cip"
      persona="auditors"
      title="NERC CIP for Internal Auditors & Reviewers"
      description="Your 7-step path to NERC CIP audit methodology and RSAW mastery"
      breadcrumbs={[
        { label: "Audit 101", path: "/" },
        { label: "NERC CIP", path: "/nerc-cip" },
        { label: "Auditors" }
      ]}
      steps={auditorsSteps}
    />
  );
}
