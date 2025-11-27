import { Bell, Search, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="sticky top-0 z-30 h-16 bg-background/80 backdrop-blur-xl border-b border-border flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search requirements, evidence, assets..."
            className="w-80 h-10 pl-10 pr-4 rounded-lg bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Audit Period:</span>
          <span className="text-sm font-medium text-foreground">Q4 2024</span>
        </div>

        <Button variant="glow" className="gap-2">
          <Download className="h-4 w-4" />
          Generate RSAW Report
        </Button>

        <div className="w-px h-8 bg-border" />

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-critical text-critical-foreground text-[10px] font-medium rounded-full">
            3
          </span>
        </Button>
      </div>
    </header>
  );
}
