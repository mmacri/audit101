import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Trophy, Star, Award, Sparkles } from 'lucide-react';

interface CompletionCelebrationProps {
  show: boolean;
  title: string;
  message: string;
}

export function CompletionCelebration({ show, title, message }: CompletionCelebrationProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300" />
      
      <Card className="relative max-w-md mx-4 p-8 animate-in zoom-in duration-500 shadow-2xl pointer-events-auto">
        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 text-primary animate-bounce">
          <Trophy className="h-12 w-12" />
        </div>
        <div className="absolute -bottom-4 -left-4 text-amber-500 animate-pulse">
          <Star className="h-10 w-10" />
        </div>
        <div className="absolute top-4 right-4 text-success animate-spin-slow">
          <Sparkles className="h-8 w-8" />
        </div>
        
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Award className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{message}</p>
          
          {/* Confetti animation */}
          <div className="flex justify-center gap-2 pt-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-primary animate-bounce"
                style={{ 
                  animationDelay: `${i * 100}ms`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
