import { Button } from "@/components/ui/button";
import { Mail, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-foreground leading-tight sm:leading-none">
            Let's Connect 🤝
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Looking to collaborate or discuss opportunities? I'd love to hear from you!
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center pt-6 sm:pt-8">
            <Button size="lg" className="rounded-full bg-lime text-foreground hover:bg-lime/90 text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Get in Touch
            </Button>
            
            <Button size="lg" variant="outline" className="rounded-full text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto" asChild>
              <a href="/cv.docx" download="cv.docx">
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex gap-4 sm:gap-6 justify-center pt-6 sm:pt-8">
            {[
              { icon: Instagram, label: "Instagram", href: "https://instagram.com/aastha_jain0605" },
              { icon: Mail, label: "Email", href: "mailto:aastha.jain@example.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border-2 border-border flex items-center justify-center hover:bg-lime hover:border-lime transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
