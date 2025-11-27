interface IncidentResponseDiagramProps {
  className?: string;
}

export function IncidentResponseDiagram({ className }: IncidentResponseDiagramProps) {
  return (
    <div className={className}>
      <svg viewBox="0 0 800 220" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        {/* Background */}
        <rect width="800" height="220" fill="#f8fafc" rx="8"/>
        
        {/* Title */}
        <text x="400" y="25" textAnchor="middle" className="text-sm font-bold" fill="#1e293b">
          CIP-008 Incident Response Flow
        </text>
        
        {/* Step 1: Detect */}
        <circle cx="70" cy="90" r="35" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
        <text x="70" y="85" textAnchor="middle" className="text-[10px] font-bold" fill="#dc2626">DETECT</text>
        <text x="70" y="97" textAnchor="middle" className="text-[8px]" fill="#7f1d1d">Identify</text>
        <text x="70" y="107" textAnchor="middle" className="text-[8px]" fill="#7f1d1d">incident</text>
        
        {/* Arrow 1 */}
        <polygon points="115,90 130,85 130,95" fill="#94a3b8"/>
        <line x1="105" y1="90" x2="130" y2="90" stroke="#94a3b8" strokeWidth="2"/>
        
        {/* Step 2: Classify */}
        <circle cx="175" cy="90" r="35" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
        <text x="175" y="85" textAnchor="middle" className="text-[10px] font-bold" fill="#d97706">CLASSIFY</text>
        <text x="175" y="97" textAnchor="middle" className="text-[8px]" fill="#92400e">Reportable?</text>
        <text x="175" y="107" textAnchor="middle" className="text-[8px]" fill="#92400e">Severity?</text>
        
        {/* Arrow 2 */}
        <polygon points="220,90 235,85 235,95" fill="#94a3b8"/>
        <line x1="210" y1="90" x2="235" y2="90" stroke="#94a3b8" strokeWidth="2"/>
        
        {/* Step 3: Contain */}
        <circle cx="280" cy="90" r="35" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
        <text x="280" y="85" textAnchor="middle" className="text-[10px] font-bold" fill="#2563eb">CONTAIN</text>
        <text x="280" y="97" textAnchor="middle" className="text-[8px]" fill="#1e40af">Isolate</text>
        <text x="280" y="107" textAnchor="middle" className="text-[8px]" fill="#1e40af">affected</text>
        
        {/* Arrow 3 */}
        <polygon points="325,90 340,85 340,95" fill="#94a3b8"/>
        <line x1="315" y1="90" x2="340" y2="90" stroke="#94a3b8" strokeWidth="2"/>
        
        {/* Step 4: Eradicate */}
        <circle cx="385" cy="90" r="35" fill="#f3e8ff" stroke="#a855f7" strokeWidth="2"/>
        <text x="385" y="85" textAnchor="middle" className="text-[10px] font-bold" fill="#9333ea">ERADICATE</text>
        <text x="385" y="97" textAnchor="middle" className="text-[8px]" fill="#6b21a8">Remove</text>
        <text x="385" y="107" textAnchor="middle" className="text-[8px]" fill="#6b21a8">threat</text>
        
        {/* Arrow 4 */}
        <polygon points="430,90 445,85 445,95" fill="#94a3b8"/>
        <line x1="420" y1="90" x2="445" y2="90" stroke="#94a3b8" strokeWidth="2"/>
        
        {/* Step 5: Recover */}
        <circle cx="490" cy="90" r="35" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2"/>
        <text x="490" y="85" textAnchor="middle" className="text-[10px] font-bold" fill="#0284c7">RECOVER</text>
        <text x="490" y="97" textAnchor="middle" className="text-[8px]" fill="#0c4a6e">Restore</text>
        <text x="490" y="107" textAnchor="middle" className="text-[8px]" fill="#0c4a6e">operations</text>
        
        {/* Arrow 5 */}
        <polygon points="535,90 550,85 550,95" fill="#94a3b8"/>
        <line x1="525" y1="90" x2="550" y2="90" stroke="#94a3b8" strokeWidth="2"/>
        
        {/* Step 6: Lessons Learned */}
        <circle cx="605" cy="90" r="40" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
        <text x="605" y="80" textAnchor="middle" className="text-[10px] font-bold" fill="#16a34a">LESSONS</text>
        <text x="605" y="92" textAnchor="middle" className="text-[10px] font-bold" fill="#16a34a">LEARNED</text>
        <text x="605" y="107" textAnchor="middle" className="text-[8px]" fill="#166534">Document &</text>
        <text x="605" y="117" textAnchor="middle" className="text-[8px]" fill="#166534">improve</text>
        
        {/* E-ISAC Reporting Branch */}
        <line x1="175" y1="125" x2="175" y2="165" stroke="#ef4444" strokeWidth="2"/>
        <rect x="120" y="165" width="110" height="35" rx="6" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
        <text x="175" y="182" textAnchor="middle" className="text-[9px] font-bold" fill="#dc2626">Report to E-ISAC</text>
        <text x="175" y="193" textAnchor="middle" className="text-[8px]" fill="#7f1d1d">Within 1 hour</text>
        
        {/* CIP-009 Recovery Plan Link */}
        <line x1="490" y1="125" x2="490" y2="165" stroke="#0ea5e9" strokeWidth="2"/>
        <rect x="430" y="165" width="120" height="35" rx="6" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2"/>
        <text x="490" y="182" textAnchor="middle" className="text-[9px] font-bold" fill="#0284c7">CIP-009</text>
        <text x="490" y="193" textAnchor="middle" className="text-[8px]" fill="#0c4a6e">Recovery Plan</text>
        
        {/* Feedback loop */}
        <path d="M 645 90 Q 700 90 700 140 Q 700 190 400 190 Q 100 190 70 140" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4,2"/>
        <polygon points="70,150 65,140 75,140" fill="#22c55e"/>
        <text x="700" y="145" className="text-[8px]" fill="#64748b">Continuous</text>
        <text x="700" y="155" className="text-[8px]" fill="#64748b">improvement</text>
      </svg>
      <p className="text-xs text-muted-foreground text-center mt-2">
        <strong>Audit Context:</strong> Auditors verify that your incident response plan includes all phases, 
        that reportable incidents were escalated within 1 hour, and that lessons learned are documented.
      </p>
    </div>
  );
}
