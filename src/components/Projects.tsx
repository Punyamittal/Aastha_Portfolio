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
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 sm:mb-12 text-center px-4">
          Experience ⚡
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`${project.color} p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-border hover:border-foreground transition-all duration-300 hover:-translate-y-2 cursor-pointer group`}
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-black transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                    {project.duration}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 sm:pt-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="rounded-full text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5">
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
