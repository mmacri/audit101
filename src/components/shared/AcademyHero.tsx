import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface AcademyHeroProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  primaryAction: () => void;
  secondaryCta?: string;
  secondaryAction?: () => void;
  accentColor?: string;
}

export function AcademyHero({
  title,
  subtitle,
  primaryCta,
  primaryAction,
  secondaryCta,
  secondaryAction,
  accentColor = "primary"
}: AcademyHeroProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container max-w-4xl">
        <div className="text-center space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              onClick={primaryAction}
              className="text-base px-8 gap-2"
            >
              {primaryCta}
              <ArrowRight className="h-5 w-5" />
            </Button>
            {secondaryCta && secondaryAction && (
              <Button 
                variant="ghost" 
                size="lg"
                onClick={secondaryAction}
                className="text-base"
              >
                {secondaryCta}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
