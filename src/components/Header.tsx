import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-foreground hover:text-secondary transition-colors">
          portfolio
        </a>
        
        <Button variant="outline" size="sm" asChild>
          <a href="#contact">Resume →</a>
        </Button>
      </nav>
    </header>
  );
};
