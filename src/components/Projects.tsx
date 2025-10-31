import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const projects = [
    {
      title: "E-commerce Redesign",
      description: "Increased conversion by 45% through intuitive UX improvements",
      tags: ["UI/UX", "Mobile", "Web"],
      color: "bg-lime/20"
    },
    {
      title: "Banking App",
      description: "Simplified complex financial flows for 2M+ users",
      tags: ["Product Design", "iOS", "Android"],
      color: "bg-pink/20"
    },
    {
      title: "Design System",
      description: "Built scalable component library for startup growth",
      tags: ["System Design", "Documentation"],
      color: "bg-coral/20"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black text-foreground mb-12 text-center">
          Featured Work ⚡
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`${project.color} p-8 rounded-3xl border-2 border-border hover:border-foreground transition-all duration-300 hover:-translate-y-2 cursor-pointer group`}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
