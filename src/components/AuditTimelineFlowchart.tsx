import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  FileText, 
  ClipboardCheck, 
  Video, 
  UserCheck, 
  FileSearch,
  ChevronRight,
  Clock,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

interface TimelineStage {
  id: string;
  name: string;
  timeframe: string;
  icon: React.ElementType;
  color: string;
  description: string;
  tasks: string[];
  dueDates: string[];
  tips: string[];
}

const timelineStages: TimelineStage[] = [
  {
    id: "notice",
    name: "90-Day Notice",
    timeframe: "Day 0",
    icon: Calendar,
    color: "bg-primary",
    description: "You receive official notification from your Regional Entity that an audit will occur.",
    tasks: [
      "Receive and review audit notification letter",
      "Identify audit scope and standards to be reviewed",
      "Designate internal audit coordinator",
      "Brief executive leadership",
      "Begin gathering evidence against RSAW checklist"
    ],
    dueDates: [
      "Within 24 hours: Brief leadership",
      "Within 48 hours: Designate coordinator",
      "Within 1 week: Identify SMEs for each standard"
    ],
    tips: [
      "Calendar all dates immediately",
      "Don't panic—90 days is adequate if you start now"
    ]
  },
  {
    id: "pre-audit-request",
    name: "Pre-Audit Info Request",
    timeframe: "Days 1-30",
    icon: FileText,
    color: "bg-amber",
    description: "Compile and submit required documentation to the audit team before they arrive.",
    tasks: [
      "Review formal data request list",
      "Gather policies, procedures, evidence samples",
      "Prepare network diagrams (ESP/PSP)",
      "Compile personnel and training records",
      "Submit via secure portal"
    ],
    dueDates: [
      "Day 14-21: Typically pre-audit submission deadline",
      "Before deadline: Have second reviewer check submissions"
    ],
    tips: [
      "Submit early if possible",
      "Use the RSAW to verify completeness",
      "Document anything you cannot provide and why"
    ]
  },
  {
    id: "preparation",
    name: "Internal Preparation",
    timeframe: "Days 30-75",
    icon: ClipboardCheck,
    color: "bg-teal",
    description: "Conduct internal readiness activities—mock audits, SME training, and gap remediation.",
    tasks: [
      "Run internal mock audits using RSAW",
      "Conduct incident response tabletop",
      "Update any stale documentation",
      "Train SMEs on interview protocols",
      "Prepare opening presentation",
      "Walk through physical sites"
    ],
    dueDates: [
      "Day 45: Complete mock audit",
      "Day 60: SME interview training complete",
      "Day 70: All gaps identified with mitigation plans"
    ],
    tips: [
      "Practice the 'I don't know' protocol",
      "Prepare backup SMEs for critical areas"
    ]
  },
  {
    id: "pre-audit-call",
    name: "Pre-Audit Conference",
    timeframe: "Days 75-80",
    icon: Video,
    color: "bg-sky",
    description: "Coordinate logistics with the audit team via conference call.",
    tasks: [
      "Confirm audit dates and schedule",
      "Discuss site visit logistics",
      "Clarify questions about evidence",
      "Confirm interview schedule",
      "Establish communication protocols"
    ],
    dueDates: [
      "Day 75-80: Conference call typically scheduled"
    ],
    tips: [
      "Ask clarifying questions—don't assume",
      "Confirm IT requirements for auditor access"
    ]
  },
  {
    id: "audit-week",
    name: "Audit Week(s)",
    timeframe: "Days 80-90",
    icon: UserCheck,
    color: "bg-primary",
    description: "The audit team conducts interviews, evidence reviews, and site visits.",
    tasks: [
      "Opening meeting with leadership",
      "SME interviews (30-60 min each)",
      "Evidence walkthrough sessions",
      "Physical site visits",
      "Daily status meetings",
      "Closing meeting with preliminary findings"
    ],
    dueDates: [
      "Daily: Status meetings with audit team",
      "End of audit: Preliminary findings shared"
    ],
    tips: [
      "Answer only the question asked",
      "Reference RSAW in responses",
      "Keep detailed notes of all questions"
    ]
  },
  {
    id: "post-audit",
    name: "Post-Audit Activities",
    timeframe: "Days 90+",
    icon: FileSearch,
    color: "bg-success",
    description: "Address findings, submit corrections, and close out the audit.",
    tasks: [
      "Receive draft audit report (30-45 days)",
      "Review findings and potential violations",
      "Submit factual corrections (14-21 days)",
      "Develop mitigation plans",
      "Receive final report",
      "Track mitigation completion"
    ],
    dueDates: [
      "Day 120-135: Draft report received",
      "Day 135-155: Factual corrections due",
      "Day 180+: Final report issued"
    ],
    tips: [
      "Start mitigation immediately—don't wait for final",
      "Respond to every finding",
      "Document everything for future audits"
    ]
  }
];

export function AuditTimelineFlowchart() {
  const [selectedStage, setSelectedStage] = useState<string>("notice");
  
  const currentStage = timelineStages.find(s => s.id === selectedStage) || timelineStages[0];

  return (
    <div className="space-y-6">
      {/* Visual Timeline - Click to select */}
      <div className="relative">
        {/* Connection line */}
        <div className="absolute top-6 left-0 right-0 h-1 bg-border hidden md:block" />
        
        {/* Timeline nodes */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {timelineStages.map((stage, index) => (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage.id)}
              className={`relative flex flex-col items-center text-center p-2 rounded-lg transition-all ${
                selectedStage === stage.id 
                  ? "bg-primary/10 ring-2 ring-primary" 
                  : "hover:bg-muted"
              }`}
            >
              <div className={`w-12 h-12 rounded-full ${stage.color} flex items-center justify-center text-white z-10 mb-2`}>
                <stage.icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-navy line-clamp-2">{stage.name}</span>
              <Badge variant="outline" className="mt-1 text-[10px]">
                {stage.timeframe}
              </Badge>
              {index < timelineStages.length - 1 && (
                <ChevronRight className="absolute -right-2 top-4 h-4 w-4 text-muted-foreground hidden md:block" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Stage Details Card */}
      <Card className="border-2 border-primary/20">
        <CardHeader className={`${currentStage.color} text-white`}>
          <div className="flex items-center gap-3">
            <currentStage.icon className="h-8 w-8" />
            <div>
              <CardTitle className="text-xl">{currentStage.name}</CardTitle>
              <CardDescription className="text-white/80">
                <Clock className="h-3 w-3 inline mr-1" />
                {currentStage.timeframe}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-muted-foreground mb-6">{currentStage.description}</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Tasks */}
            <div>
              <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                Key Tasks
              </h4>
              <ul className="space-y-2">
                {currentStage.tasks.map((task, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>

            {/* Due Dates */}
            <div>
              <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-amber" />
                Key Dates
              </h4>
              <ul className="space-y-2">
                {currentStage.dueDates.map((date, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <Clock className="h-3 w-3 text-amber mt-1 shrink-0" />
                    {date}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-amber/5 rounded-lg p-4">
              <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber" />
                Pro Tips
              </h4>
              <ul className="space-y-2">
                {currentStage.tips.map((tip, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-amber mt-1">→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => {
            const idx = timelineStages.findIndex(s => s.id === selectedStage);
            if (idx > 0) setSelectedStage(timelineStages[idx - 1].id);
          }}
          disabled={selectedStage === timelineStages[0].id}
        >
          Previous Stage
        </Button>
        <Button
          onClick={() => {
            const idx = timelineStages.findIndex(s => s.id === selectedStage);
            if (idx < timelineStages.length - 1) setSelectedStage(timelineStages[idx + 1].id);
          }}
          disabled={selectedStage === timelineStages[timelineStages.length - 1].id}
        >
          Next Stage
        </Button>
      </div>
    </div>
  );
}
