import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-black text-foreground">
            Let's Connect 🤝
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Looking to collaborate or discuss opportunities? I'd love to hear from you!
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button size="lg" className="rounded-full bg-lime text-foreground hover:bg-lime/90 text-lg px-8">
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            
            <Button size="lg" variant="outline" className="rounded-full text-lg px-8">
              Download Resume
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            {[
              { icon: Instagram, label: "Instagram", href: "https://instagram.com/aastha_jain0605" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Mail, label: "Email", href: "mailto:aastha.jain@example.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center hover:bg-lime hover:border-lime transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
