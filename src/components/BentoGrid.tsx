import { Card } from "@/components/ui/card";
import todoCard from "@/assets/todo-card.png";
import workspace from "@/assets/workspace.png";
import { useState } from "react";

export const BentoGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cards = [
    {
      id: "about",
      title: "About Me",
      description: "I craft delightful designs that make users say 🤩. Outside of design, I explore creativity in unexpected places.",
      className: "md:col-span-2 bg-card hover:bg-lime/10",
      delay: "0ms"
    },
    {
      id: "todo",
      title: "Current Focus",
      image: todoCard,
      className: "bg-pink/20 hover:bg-pink/30",
      delay: "100ms"
    },
    {
      id: "workspace",
      title: "My Workspace",
      image: workspace,
      className: "bg-coral/20 hover:bg-coral/30",
      delay: "200ms"
    },
    {
      id: "experience",
      title: "5+ Years",
      description: "of crafting beautiful digital experiences",
      className: "bg-lime/20 hover:bg-lime/30",
      delay: "300ms"
    },
    {
      id: "skills",
      title: "Skills",
      description: "UI/UX Design • Product Strategy • Prototyping • Design Systems • User Research",
      className: "md:col-span-2 bg-card hover:bg-secondary/10",
      delay: "400ms"
    },
    {
      id: "passion",
      title: "Design Philosophy",
      description: "Every pixel tells a story. Every interaction creates an emotion. Let's make magic together ✨",
      className: "md:col-span-2 bg-accent/20 hover:bg-accent/30",
      delay: "500ms"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black text-foreground mb-12 text-center">
          Let's Connect ✌️
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((card) => (
            <Card
              key={card.id}
              className={`${card.className} p-8 rounded-3xl border-2 border-border transition-all duration-300 cursor-pointer group overflow-hidden`}
              style={{ animationDelay: card.delay }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {card.image ? (
                <div className="relative h-full">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 h-full flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-foreground group-hover:scale-105 transition-transform">
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {card.description}
                    </p>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
