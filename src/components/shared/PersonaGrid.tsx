import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

export interface Persona {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
}

interface PersonaGridProps {
  personas: Persona[];
  onSelectPersona: (personaId: string) => void;
}

export function PersonaGrid({ personas, onSelectPersona }: PersonaGridProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the path that matches your role and responsibilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {personas.map((persona) => {
            const Icon = persona.icon;
            return (
              <Card 
                key={persona.id}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                onClick={() => onSelectPersona(persona.id)}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {persona.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {persona.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                    Start this path →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
