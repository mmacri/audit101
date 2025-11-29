import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">CIP Readiness</span>
                <span className="text-xs text-navy-foreground/70 -mt-1">Academy</span>
              </div>
            </div>
            <p className="text-sm text-navy-foreground/70 leading-relaxed">
              Helping power utilities achieve and maintain NERC CIP compliance through education, training, and practical guidance.
            </p>
          </div>

          {/* Training */}
          <div>
            <h4 className="font-semibold mb-4">Training</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/get-started" className="text-navy-foreground/70 hover:text-white transition-colors">
                  Get Started
                </Link>
              </li>
              <li>
                <Link to="/modules" className="text-navy-foreground/70 hover:text-white transition-colors">
                  All Modules
                </Link>
              </li>
              <li>
                <Link to="/role-training" className="text-navy-foreground/70 hover:text-white transition-colors">
                  Role Training Plans
                </Link>
              </li>
              <li>
                <Link to="/soft-skills" className="text-navy-foreground/70 hover:text-white transition-colors">
                  Soft Skills & Etiquette
                </Link>
              </li>
              <li>
                <Link to="/final-exam" className="text-navy-foreground/70 hover:text-white transition-colors">
                  Final Exam & Certificate
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/evidence-lab" className="text-navy-foreground/70 hover:text-white transition-colors">
                  Evidence Lab
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-navy-foreground/70 hover:text-white transition-colors">
                  Templates & Downloads
                </Link>
              </li>
              <li>
                <Link to="/scope-matrix" className="text-navy-foreground/70 hover:text-white transition-colors">
                  Scope Matrix & TCA
                </Link>
              </li>
              <li>
                <Link to="/rsaw-tutorial" className="text-navy-foreground/70 hover:text-white transition-colors">
                  RSAW Tutorial
                </Link>
              </li>
              <li>
                <Link to="/manager-guide" className="text-navy-foreground/70 hover:text-white transition-colors">
                  Manager Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-navy-foreground/60">
            © {new Date().getFullYear()} CIP Readiness Academy. All rights reserved.
          </p>
          <p className="text-sm text-navy-foreground/60">
            Educational content for NERC CIP compliance preparation.
          </p>
        </div>
      </div>
    </footer>
  );
}
