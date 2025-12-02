import { CheckCircle2, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CompactProgressIndicatorProps {
  completed: number;
  total: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export function CompactProgressIndicator({ 
  completed, 
  total, 
  size = 'md',
  showLabel = true,
  className 
}: CompactProgressIndicatorProps) {
  const percentage = total > 0 ? (completed / total) * 100 : 0;
  
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  const dotSizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-1.5 h-1.5',
    lg: 'w-2 h-2'
  };

  return (
    <div className={cn("space-y-2", className)}>
      {showLabel && (
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span className="font-medium">
              {completed} of {total} completed
            </span>
          </div>
          <span className="text-muted-foreground font-semibold">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
      
      {/* Progress bar */}
      <div className={cn("w-full bg-muted rounded-full overflow-hidden", sizeClasses[size])}>
        <div 
          className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      {/* Step dots */}
      {total <= 10 && (
        <div className="flex items-center gap-1">
          {[...Array(total)].map((_, index) => (
            <div
              key={index}
              className={cn(
                "rounded-full transition-all duration-300",
                dotSizeClasses[size],
                index < completed 
                  ? "bg-primary" 
                  : "bg-muted"
              )}
              title={`Step ${index + 1}${index < completed ? ' (completed)' : ''}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
