import { SampleArtifact as SampleArtifactType } from '@/data/sampleArtifactsData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, CheckCircle2, ArrowRight } from 'lucide-react';

interface SampleArtifactProps {
  artifact: SampleArtifactType;
}

export function SampleArtifact({ artifact }: SampleArtifactProps) {
  const renderTable = (headers?: string[], rows?: string[][]) => {
    if (!headers || !rows) return null;
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-navy text-navy-foreground">
              {headers.map((h, i) => (
                <th key={i} className="p-2 text-left border border-border/50">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-card' : 'bg-muted/30'}>
                {row.map((cell, j) => (
                  <td key={j} className="p-2 border border-border/50">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="flex items-center gap-2 text-base">
            <FileText className="h-4 w-4 text-primary" />
            {artifact.title}
          </CardTitle>
          <Badge variant="outline">{artifact.cipStandard}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{artifact.context}</p>
        
        {artifact.type === 'table' && renderTable(artifact.content.headers, artifact.content.rows)}
        
        {artifact.type === 'snippet' && artifact.content.text && (
          <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto whitespace-pre-wrap font-mono">
            {artifact.content.text}
          </pre>
        )}
        
        {artifact.type === 'comparison' && (
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-destructive mb-2">❌ Before (Weak)</p>
              {renderTable(artifact.content.before?.headers, artifact.content.before?.rows)}
            </div>
            <div className="flex justify-center">
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-success mb-2">✓ After (Audit-Ready)</p>
              {renderTable(artifact.content.after?.headers, artifact.content.after?.rows)}
            </div>
            {artifact.content.annotations && (
              <div className="bg-muted/50 rounded-lg p-3 space-y-1">
                {artifact.content.annotations.map((note, i) => (
                  <p key={i} className="text-xs text-muted-foreground">• {note}</p>
                ))}
              </div>
            )}
          </div>
        )}
        
        <div className="bg-success/10 border border-success/30 rounded-lg p-3">
          <p className="text-xs font-medium text-navy mb-2">What makes this strong evidence:</p>
          <ul className="space-y-1">
            {artifact.strengths.map((s, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                <CheckCircle2 className="h-3 w-3 text-success mt-0.5 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
