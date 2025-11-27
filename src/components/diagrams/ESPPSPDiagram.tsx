interface ESPPSPDiagramProps {
  className?: string;
}

export function ESPPSPDiagram({ className }: ESPPSPDiagramProps) {
  return (
    <div className={className}>
      <svg viewBox="0 0 800 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        {/* Background */}
        <rect width="800" height="500" fill="#f8fafc" rx="8"/>
        
        {/* External Network (Internet) */}
        <rect x="20" y="20" width="160" height="80" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
        <text x="100" y="55" textAnchor="middle" className="text-sm font-medium" fill="#dc2626">External</text>
        <text x="100" y="75" textAnchor="middle" className="text-xs" fill="#dc2626">Network/Internet</text>
        
        {/* Firewall */}
        <rect x="220" y="35" width="80" height="50" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
        <text x="260" y="65" textAnchor="middle" className="text-xs font-medium" fill="#d97706">Firewall</text>
        
        {/* Connection lines */}
        <line x1="180" y1="60" x2="220" y2="60" stroke="#94a3b8" strokeWidth="2"/>
        <line x1="300" y1="60" x2="340" y2="60" stroke="#94a3b8" strokeWidth="2"/>
        
        {/* ESP Boundary */}
        <rect x="340" y="10" width="440" height="200" rx="8" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeDasharray="10,5"/>
        <text x="560" y="35" textAnchor="middle" className="text-sm font-bold" fill="#0284c7">Electronic Security Perimeter (ESP)</text>
        
        {/* DMZ */}
        <rect x="360" y="50" width="120" height="70" rx="6" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="1.5"/>
        <text x="420" y="75" textAnchor="middle" className="text-xs font-medium" fill="#0369a1">DMZ</text>
        <rect x="380" y="85" width="80" height="25" rx="3" fill="#fff" stroke="#94a3b8"/>
        <text x="420" y="102" textAnchor="middle" className="text-[10px]" fill="#64748b">Jump Host</text>
        
        {/* Internal Network */}
        <rect x="500" y="50" width="260" height="150" rx="6" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="630" y="70" textAnchor="middle" className="text-xs font-medium" fill="#16a34a">Control Network</text>
        
        {/* BES Cyber Systems */}
        <rect x="520" y="85" width="100" height="40" rx="3" fill="#fff" stroke="#22c55e"/>
        <text x="570" y="105" textAnchor="middle" className="text-[10px]" fill="#15803d">EMS/SCADA</text>
        <text x="570" y="118" textAnchor="middle" className="text-[9px]" fill="#64748b">Server</text>
        
        <rect x="640" y="85" width="100" height="40" rx="3" fill="#fff" stroke="#22c55e"/>
        <text x="690" y="105" textAnchor="middle" className="text-[10px]" fill="#15803d">Historian</text>
        <text x="690" y="118" textAnchor="middle" className="text-[9px]" fill="#64748b">Database</text>
        
        <rect x="520" y="140" width="100" height="40" rx="3" fill="#fff" stroke="#22c55e"/>
        <text x="570" y="160" textAnchor="middle" className="text-[10px]" fill="#15803d">HMI</text>
        <text x="570" y="173" textAnchor="middle" className="text-[9px]" fill="#64748b">Workstation</text>
        
        <rect x="640" y="140" width="100" height="40" rx="3" fill="#fff" stroke="#22c55e"/>
        <text x="690" y="160" textAnchor="middle" className="text-[10px]" fill="#15803d">Engineering</text>
        <text x="690" y="173" textAnchor="middle" className="text-[9px]" fill="#64748b">Workstation</text>
        
        {/* PSP - Physical Security Perimeter */}
        <rect x="40" y="250" width="720" height="230" rx="8" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="10,5"/>
        <text x="400" y="275" textAnchor="middle" className="text-sm font-bold" fill="#7c3aed">Physical Security Perimeter (PSP)</text>
        
        {/* Control Room */}
        <rect x="60" y="295" width="200" height="160" rx="6" fill="#f3e8ff" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="160" y="320" textAnchor="middle" className="text-xs font-bold" fill="#7c3aed">Control Room</text>
        
        {/* Door with badge reader */}
        <rect x="60" y="380" width="30" height="50" fill="#d8b4fe" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="75" y="405" textAnchor="middle" className="text-[9px]" fill="#6b21a8">Door</text>
        <circle cx="75" cy="420" r="8" fill="#22c55e"/>
        <text x="75" y="445" textAnchor="middle" className="text-[8px]" fill="#64748b">Badge</text>
        
        {/* Equipment inside control room */}
        <rect x="110" y="340" width="60" height="35" rx="3" fill="#fff" stroke="#94a3b8"/>
        <text x="140" y="362" textAnchor="middle" className="text-[9px]" fill="#64748b">Console</text>
        
        <rect x="180" y="340" width="60" height="35" rx="3" fill="#fff" stroke="#94a3b8"/>
        <text x="210" y="362" textAnchor="middle" className="text-[9px]" fill="#64748b">Monitors</text>
        
        <rect x="110" y="390" width="130" height="35" rx="3" fill="#fff" stroke="#94a3b8"/>
        <text x="175" y="412" textAnchor="middle" className="text-[9px]" fill="#64748b">Server Rack</text>
        
        {/* Substation */}
        <rect x="290" y="295" width="200" height="160" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="390" y="320" textAnchor="middle" className="text-xs font-bold" fill="#d97706">Substation</text>
        
        {/* Fence icon */}
        <line x1="290" y1="350" x2="290" y2="455" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,3"/>
        
        {/* Relay/RTU */}
        <rect x="310" y="340" width="70" height="40" rx="3" fill="#fff" stroke="#94a3b8"/>
        <text x="345" y="360" textAnchor="middle" className="text-[9px]" fill="#64748b">Relay</text>
        <text x="345" y="373" textAnchor="middle" className="text-[8px]" fill="#94a3b8">(Protection)</text>
        
        <rect x="400" y="340" width="70" height="40" rx="3" fill="#fff" stroke="#94a3b8"/>
        <text x="435" y="360" textAnchor="middle" className="text-[9px]" fill="#64748b">RTU</text>
        <text x="435" y="373" textAnchor="middle" className="text-[8px]" fill="#94a3b8">(SCADA)</text>
        
        <rect x="350" y="400" width="80" height="35" rx="3" fill="#fff" stroke="#94a3b8"/>
        <text x="390" y="422" textAnchor="middle" className="text-[9px]" fill="#64748b">Comm Panel</text>
        
        {/* Remote Access */}
        <rect x="520" y="295" width="220" height="160" rx="6" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="1.5"/>
        <text x="630" y="320" textAnchor="middle" className="text-xs font-bold" fill="#0284c7">Remote Access Points</text>
        
        <rect x="540" y="340" width="80" height="40" rx="3" fill="#fff" stroke="#94a3b8"/>
        <text x="580" y="360" textAnchor="middle" className="text-[9px]" fill="#64748b">VPN</text>
        <text x="580" y="373" textAnchor="middle" className="text-[8px]" fill="#94a3b8">Gateway</text>
        
        <rect x="640" y="340" width="80" height="40" rx="3" fill="#fff" stroke="#94a3b8"/>
        <text x="680" y="360" textAnchor="middle" className="text-[9px]" fill="#64748b">MFA</text>
        <text x="680" y="373" textAnchor="middle" className="text-[8px]" fill="#94a3b8">Server</text>
        
        <rect x="590" y="400" width="80" height="40" rx="3" fill="#fff" stroke="#94a3b8"/>
        <text x="630" y="420" textAnchor="middle" className="text-[9px]" fill="#64748b">Session</text>
        <text x="630" y="433" textAnchor="middle" className="text-[8px]" fill="#94a3b8">Recording</text>
        
        {/* Legend */}
        <rect x="600" y="220" width="180" height="25" rx="4" fill="#fff" stroke="#e2e8f0"/>
        <line x1="610" y1="232" x2="640" y2="232" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5,3"/>
        <text x="650" y="236" className="text-[9px]" fill="#64748b">ESP Boundary</text>
        <line x1="710" y1="232" x2="740" y2="232" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,3"/>
        <text x="750" y="236" className="text-[9px]" fill="#64748b">PSP</text>
      </svg>
      <p className="text-xs text-muted-foreground text-center mt-2">
        <strong>Audit Context:</strong> Auditors verify that all ESP access points are documented and monitored, 
        and that PSP entry requires proper authorization with logged access times.
      </p>
    </div>
  );
}
