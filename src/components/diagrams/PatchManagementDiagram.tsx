interface PatchManagementDiagramProps {
  className?: string;
}

export function PatchManagementDiagram({ className }: PatchManagementDiagramProps) {
  return (
    <div className={className}>
      <svg viewBox="0 0 800 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        {/* Background */}
        <rect width="800" height="200" fill="#f8fafc" rx="8"/>
        
        {/* Title */}
        <text x="400" y="25" textAnchor="middle" className="text-sm font-bold" fill="#1e293b">
          CIP-007 Patch Management Lifecycle
        </text>
        
        {/* Step 1: Detect */}
        <rect x="20" y="50" width="100" height="80" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
        <text x="70" y="80" textAnchor="middle" className="text-xs font-bold" fill="#dc2626">1. DETECT</text>
        <text x="70" y="100" textAnchor="middle" className="text-[10px]" fill="#7f1d1d">Monitor vendor</text>
        <text x="70" y="112" textAnchor="middle" className="text-[10px]" fill="#7f1d1d">releases</text>
        
        {/* Arrow 1 */}
        <polygon points="130,90 145,85 145,95" fill="#94a3b8"/>
        <line x1="120" y1="90" x2="145" y2="90" stroke="#94a3b8" strokeWidth="2"/>
        
        {/* Step 2: Assess */}
        <rect x="155" y="50" width="100" height="80" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
        <text x="205" y="80" textAnchor="middle" className="text-xs font-bold" fill="#d97706">2. ASSESS</text>
        <text x="205" y="100" textAnchor="middle" className="text-[10px]" fill="#92400e">Within 35 days</text>
        <text x="205" y="112" textAnchor="middle" className="text-[10px]" fill="#92400e">of availability</text>
        
        {/* Arrow 2 */}
        <polygon points="265,90 280,85 280,95" fill="#94a3b8"/>
        <line x1="255" y1="90" x2="280" y2="90" stroke="#94a3b8" strokeWidth="2"/>
        
        {/* Step 3: Approve */}
        <rect x="290" y="50" width="100" height="80" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
        <text x="340" y="80" textAnchor="middle" className="text-xs font-bold" fill="#2563eb">3. APPROVE</text>
        <text x="340" y="100" textAnchor="middle" className="text-[10px]" fill="#1e40af">Document</text>
        <text x="340" y="112" textAnchor="middle" className="text-[10px]" fill="#1e40af">disposition</text>
        
        {/* Arrow 3 */}
        <polygon points="400,90 415,85 415,95" fill="#94a3b8"/>
        <line x1="390" y1="90" x2="415" y2="90" stroke="#94a3b8" strokeWidth="2"/>
        
        {/* Step 4: Deploy */}
        <rect x="425" y="50" width="100" height="80" rx="8" fill="#f3e8ff" stroke="#a855f7" strokeWidth="2"/>
        <text x="475" y="80" textAnchor="middle" className="text-xs font-bold" fill="#9333ea">4. DEPLOY</text>
        <text x="475" y="100" textAnchor="middle" className="text-[10px]" fill="#6b21a8">Test & install</text>
        <text x="475" y="112" textAnchor="middle" className="text-[10px]" fill="#6b21a8">per timeline</text>
        
        {/* Arrow 4 */}
        <polygon points="535,90 550,85 550,95" fill="#94a3b8"/>
        <line x1="525" y1="90" x2="550" y2="90" stroke="#94a3b8" strokeWidth="2"/>
        
        {/* Step 5: Verify */}
        <rect x="560" y="50" width="100" height="80" rx="8" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2"/>
        <text x="610" y="80" textAnchor="middle" className="text-xs font-bold" fill="#0284c7">5. VERIFY</text>
        <text x="610" y="100" textAnchor="middle" className="text-[10px]" fill="#0c4a6e">Confirm</text>
        <text x="610" y="112" textAnchor="middle" className="text-[10px]" fill="#0c4a6e">installation</text>
        
        {/* Arrow 5 */}
        <polygon points="670,90 685,85 685,95" fill="#94a3b8"/>
        <line x1="660" y1="90" x2="685" y2="90" stroke="#94a3b8" strokeWidth="2"/>
        
        {/* Step 6: Document */}
        <rect x="695" y="50" width="90" height="80" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
        <text x="740" y="80" textAnchor="middle" className="text-xs font-bold" fill="#16a34a">6. DOCUMENT</text>
        <text x="740" y="100" textAnchor="middle" className="text-[10px]" fill="#166534">Update</text>
        <text x="740" y="112" textAnchor="middle" className="text-[10px]" fill="#166534">baselines</text>
        
        {/* Timeline indicator */}
        <rect x="155" y="140" width="100" height="20" rx="4" fill="#fef3c7" stroke="#f59e0b"/>
        <text x="205" y="154" textAnchor="middle" className="text-[9px] font-medium" fill="#d97706">35 Days Max</text>
        
        {/* Mitigation path */}
        <path d="M 340 130 L 340 170 L 475 170 L 475 130" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,2"/>
        <text x="407" y="185" textAnchor="middle" className="text-[9px]" fill="#64748b">Or: Create mitigation plan if patch cannot be applied</text>
      </svg>
      <p className="text-xs text-muted-foreground text-center mt-2">
        <strong>Audit Context:</strong> Auditors will request patch assessment records showing dates, 
        disposition decisions, and evidence that the 35-day assessment window was met.
      </p>
    </div>
  );
}
