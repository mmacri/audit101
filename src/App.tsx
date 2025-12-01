import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import Audit101 from "./pages/Audit101";
import LearningPath from "./pages/LearningPath";
import Modules from "./pages/Modules";
import RoleTraining from "./pages/RoleTraining";
import RoleTrainingDetail from "./pages/RoleTrainingDetail";
import EvidenceLab from "./pages/EvidenceLab";
import SelfAssessment from "./pages/SelfAssessment";
import Resources from "./pages/Resources";
import AboutContact from "./pages/AboutContact";
import CaseStudies from "./pages/CaseStudies";
import AuditSimulator from "./pages/AuditSimulator";
import ReadinessPlan from "./pages/ReadinessPlan";
import FinalExam from "./pages/FinalExam";
import Certificate from "./pages/Certificate";
import RoleCertificate from "./pages/RoleCertificate";
import Achievements from "./pages/Achievements";
import ProgressBackup from "./pages/ProgressBackup";
import ManagerGuide from "./pages/ManagerGuide";
import SoftSkillsTraining from "./pages/SoftSkillsTraining";
import ScopeMatrix from "./pages/ScopeMatrix";
import RSAWTutorial from "./pages/RSAWTutorial";
import NotFound from "./pages/NotFound";
import AcademyPortfolio from "./pages/AcademyPortfolio";
import Nist80053Home from "./pages/academies/Nist80053Home";
import Nist80053Practitioners from "./pages/academies/Nist80053Practitioners";
import Nist80053ToolOwners from "./pages/academies/Nist80053ToolOwners";
import Nist80053Leaders from "./pages/academies/Nist80053Leaders";
import Nist80053Auditors from "./pages/academies/Nist80053Auditors";
import Nist80053Resources from "./pages/academies/Nist80053Resources";
import CisControlsHome from "./pages/academies/CisControlsHome";
import CisControlsPractitioners from "./pages/academies/CisControlsPractitioners";
import CisControlsToolOwners from "./pages/academies/CisControlsToolOwners";
import CisControlsLeaders from "./pages/academies/CisControlsLeaders";
import CisControlsAuditors from "./pages/academies/CisControlsAuditors";
import CisControlsResources from "./pages/academies/CisControlsResources";
import NistCsfHome from "./pages/academies/NistCsfHome";
import NistCsfFramework from "./pages/NistCsfFramework";
import NistCsfPractitioners from "./pages/academies/NistCsfPractitioners";
import NistCsfToolOwners from "./pages/academies/NistCsfToolOwners";
import NistCsfLeaders from "./pages/academies/NistCsfLeaders";
import NistCsfAuditors from "./pages/academies/NistCsfAuditors";
import NistCsfResources from "./pages/academies/NistCsfResources";
import SoxItgcHome from "./pages/academies/SoxItgcHome";
import SoxItgcPractitioners from "./pages/academies/SoxItgcPractitioners";
import SoxItgcToolOwners from "./pages/academies/SoxItgcToolOwners";
import SoxItgcLeaders from "./pages/academies/SoxItgcLeaders";
import SoxItgcAuditors from "./pages/academies/SoxItgcAuditors";
import SoxItgcResources from "./pages/academies/SoxItgcResources";
import CommonControlsHub from "./pages/CommonControlsHub";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Routes>
        <Route path="/" element={<Audit101 />} />
        <Route path="/nerc-cip" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/role-training" element={<RoleTraining />} />
          <Route path="/role-training/:roleId" element={<RoleTrainingDetail />} />
          <Route path="/role-training/:roleId/certificate" element={<RoleCertificate />} />
          <Route path="/evidence-lab" element={<EvidenceLab />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<AboutContact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/audit-simulator" element={<AuditSimulator />} />
          <Route path="/readiness-plan" element={<ReadinessPlan />} />
          <Route path="/final-exam" element={<FinalExam />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/progress-backup" element={<ProgressBackup />} />
          <Route path="/manager-guide" element={<ManagerGuide />} />
          <Route path="/soft-skills" element={<SoftSkillsTraining />} />
          <Route path="/scope-matrix" element={<ScopeMatrix />} />
          <Route path="/rsaw-tutorial" element={<RSAWTutorial />} />
          
          {/* New Academy Routes */}
          <Route path="/academies" element={<AcademyPortfolio />} />
          
          {/* NIST 800-53 */}
          <Route path="/nist-800-53" element={<Nist80053Home />} />
          <Route path="/nist-800-53/practitioners" element={<Nist80053Practitioners />} />
          <Route path="/nist-800-53/tool-owners" element={<Nist80053ToolOwners />} />
          <Route path="/nist-800-53/leaders" element={<Nist80053Leaders />} />
          <Route path="/nist-800-53/auditors" element={<Nist80053Auditors />} />
          <Route path="/nist-800-53/resources" element={<Nist80053Resources />} />
          
          {/* CIS Controls */}
          <Route path="/cis-controls" element={<CisControlsHome />} />
          <Route path="/cis-controls/practitioners" element={<CisControlsPractitioners />} />
          <Route path="/cis-controls/tool-owners" element={<CisControlsToolOwners />} />
          <Route path="/cis-controls/leaders" element={<CisControlsLeaders />} />
          <Route path="/cis-controls/auditors" element={<CisControlsAuditors />} />
          <Route path="/cis-controls/resources" element={<CisControlsResources />} />
          
          {/* NIST CSF */}
          <Route path="/nist-csf" element={<NistCsfHome />} />
          <Route path="/nist-csf/framework" element={<NistCsfFramework />} />
          <Route path="/nist-csf/practitioners" element={<NistCsfPractitioners />} />
          <Route path="/nist-csf/tool-owners" element={<NistCsfToolOwners />} />
          <Route path="/nist-csf/leaders" element={<NistCsfLeaders />} />
          <Route path="/nist-csf/auditors" element={<NistCsfAuditors />} />
          <Route path="/nist-csf/resources" element={<NistCsfResources />} />
          
          {/* SOX ITGC */}
          <Route path="/sox-itgc" element={<SoxItgcHome />} />
          <Route path="/sox-itgc/practitioners" element={<SoxItgcPractitioners />} />
          <Route path="/sox-itgc/tool-owners" element={<SoxItgcToolOwners />} />
          <Route path="/sox-itgc/leaders" element={<SoxItgcLeaders />} />
          <Route path="/sox-itgc/auditors" element={<SoxItgcAuditors />} />
          <Route path="/sox-itgc/resources" element={<SoxItgcResources />} />
          
          {/* Common Controls Hub */}
          <Route path="/common-controls" element={<CommonControlsHub />} />
          
          {/* Redirects for consolidated pages */}
          <Route path="/nerc-cip-101" element={<Navigate to="/modules#module-1" replace />} />
          <Route path="/audit-journey" element={<Navigate to="/modules#module-10" replace />} />
          <Route path="/learning-path" element={<Navigate to="/get-started" replace />} />
          <Route path="/self-assessment" element={<Navigate to="/get-started" replace />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;