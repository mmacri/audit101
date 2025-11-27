import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LearningPath from "./pages/LearningPath";
import Modules from "./pages/Modules";
import RoleTraining from "./pages/RoleTraining";
import EvidenceLab from "./pages/EvidenceLab";
import SelfAssessment from "./pages/SelfAssessment";
import Resources from "./pages/Resources";
import AboutContact from "./pages/AboutContact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning-path" element={<LearningPath />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/role-training" element={<RoleTraining />} />
          <Route path="/evidence-lab" element={<EvidenceLab />} />
          <Route path="/self-assessment" element={<SelfAssessment />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<AboutContact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
