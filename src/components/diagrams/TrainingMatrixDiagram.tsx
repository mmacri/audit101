interface TrainingMatrixDiagramProps {
  className?: string;
}

export function TrainingMatrixDiagram({ className }: TrainingMatrixDiagramProps) {
  return (
    <div className={className}>
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-primary/10">
              <th className="border border-border px-3 py-2 text-left font-semibold text-navy">Role</th>
              <th className="border border-border px-3 py-2 text-center font-semibold text-navy">CIP Awareness</th>
              <th className="border border-border px-3 py-2 text-center font-semibold text-navy">Physical Security</th>
              <th className="border border-border px-3 py-2 text-center font-semibold text-navy">Cyber Security</th>
              <th className="border border-border px-3 py-2 text-center font-semibold text-navy">Incident Response</th>
              <th className="border border-border px-3 py-2 text-center font-semibold text-navy">PRA Required</th>
              <th className="border border-border px-3 py-2 text-center font-semibold text-navy">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-card hover:bg-muted/50">
              <td className="border border-border px-3 py-2 font-medium">Control Room Operator</td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-success text-success-foreground text-[10px]">✓</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-success text-success-foreground text-[10px]">✓</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-success text-success-foreground text-[10px]">✓</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-success text-success-foreground text-[10px]">✓</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-success text-success-foreground text-[10px]">✓</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="bg-success/20 text-success px-2 py-0.5 rounded text-[10px] font-medium">Current</span>
              </td>
            </tr>
            <tr className="bg-card hover:bg-muted/50">
              <td className="border border-border px-3 py-2 font-medium">OT Engineer</td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-success text-success-foreground text-[10px]">✓</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-success text-success-foreground text-[10px]">✓</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-success text-success-foreground text-[10px]">✓</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-warning text-warning-foreground text-[10px]">!</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-success text-success-foreground text-[10px]">✓</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="bg-warning/20 text-warning-foreground px-2 py-0.5 rounded text-[10px] font-medium">Due Soon</span>
              </td>
            </tr>
            <tr className="bg-card hover:bg-muted/50">
              <td className="border border-border px-3 py-2 font-medium">Security Guard</td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-success text-success-foreground text-[10px]">✓</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-success text-success-foreground text-[10px]">✓</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-muted text-muted-foreground text-[10px]">—</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-muted text-muted-foreground text-[10px]">—</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-success text-success-foreground text-[10px]">✓</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="bg-success/20 text-success px-2 py-0.5 rounded text-[10px] font-medium">Current</span>
              </td>
            </tr>
            <tr className="bg-card hover:bg-muted/50">
              <td className="border border-border px-3 py-2 font-medium">New Hire (Pending)</td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-[10px]">✗</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-[10px]">✗</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-[10px]">✗</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-[10px]">✗</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-warning text-warning-foreground text-[10px]">⏳</span>
              </td>
              <td className="border border-border px-3 py-2 text-center">
                <span className="bg-destructive/20 text-destructive px-2 py-0.5 rounded text-[10px] font-medium">No Access</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap gap-4 mt-3 text-[10px] text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-full bg-success text-success-foreground flex items-center justify-center text-[8px]">✓</span>
          Complete
        </span>
        <span className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-full bg-warning text-warning-foreground flex items-center justify-center text-[8px]">!</span>
          Due Soon
        </span>
        <span className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center text-[8px]">✗</span>
          Missing
        </span>
        <span className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-[8px]">—</span>
          Not Required
        </span>
      </div>
      <p className="text-xs text-muted-foreground mt-3">
        <strong>Audit Context:</strong> Auditors request training matrices showing that all personnel with 
        access to BES Cyber Systems have completed required training before access was granted and within 
        the 15-month renewal cycle.
      </p>
    </div>
  );
}
