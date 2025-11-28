import { useState, useEffect } from 'react';
import { UserRole } from '@/hooks/useUserPreferences';
import { useReflectionNotes, ContextType } from '@/hooks/useReflectionNotes';
import { ReflectionContext } from '@/data/reflectionPromptsData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Save } from 'lucide-react';
import { format } from 'date-fns';

interface ReflectionPanelProps {
  role: UserRole;
  contextType: ContextType;
  contextId: string;
  reflectionContext: ReflectionContext;
}

export function ReflectionPanel({ role, contextType, contextId, reflectionContext }: ReflectionPanelProps) {
  const { getNote, getNoteMetadata, setNote } = useReflectionNotes(role);
  const [localText, setLocalText] = useState('');
  const metadata = getNoteMetadata(contextType, contextId);

  useEffect(() => {
    setLocalText(getNote(contextType, contextId));
  }, [getNote, contextType, contextId]);

  const handleChange = (value: string) => {
    setLocalText(value);
    setNote(contextType, contextId, value);
  };

  const handleBlur = () => {
    setNote(contextType, contextId, localText, true);
  };

  return (
    <Card className="bg-muted/30">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <MessageSquare className="h-4 w-4 text-primary" />
          Reflection
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{reflectionContext.intro}</p>
        <div className="space-y-2">
          {reflectionContext.prompts.slice(0, 3).map(prompt => (
            <div key={prompt.id} className="text-sm">
              <span className="text-navy font-medium">• {prompt.prompt}</span>
              {prompt.followUp && (
                <span className="text-muted-foreground ml-1">({prompt.followUp})</span>
              )}
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <Textarea
            placeholder="Write your reflections here... (auto-saves)"
            value={localText}
            onChange={(e) => handleChange(e.target.value)}
            onBlur={handleBlur}
            className="min-h-[100px] resize-y"
          />
          {metadata?.updatedAt && (
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Save className="h-3 w-3" />
              Last saved: {format(new Date(metadata.updatedAt), 'MMM d, yyyy h:mm a')}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
