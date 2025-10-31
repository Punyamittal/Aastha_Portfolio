import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const projects = [
    {
      title: "Indian Youth Diplomacy Forum",
      description: "HR Intern coordinating recruitment, managing documentation, and supporting internal communications",
      tags: ["HR", "Recruitment", "Documentation"],
      color: "bg-lime/20",
      duration: "Dec 2024 - Mar 2025"
    },
    {
      title: "Creators Nest",
      description: "Talent management for content creators, managing collaborations and brand partnerships",
      tags: ["Talent Management", "Partnerships", "Creator Economy"],
      color: "bg-pink/20",
      duration: "Sep - Dec 2024"
    },
    {
      title: "Commonwealth Student Association",
      description: "PR team member for Anika Joshi campaign, managing public relations and outreach",
      tags: ["PR", "Campaign Management", "Communications"],
      color: "bg-coral/20",
      duration: "2024"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black text-foreground mb-12 text-center">
          Experience ⚡
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`${project.color} p-8 rounded-3xl border-2 border-border hover:border-foreground transition-all duration-300 hover:-translate-y-2 cursor-pointer group`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {project.duration}
                  </span>
                </div>
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
