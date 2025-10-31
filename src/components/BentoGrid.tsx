import { Card } from "@/components/ui/card";
import { useState } from "react";

export const BentoGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cards = [
    {
      id: "about",
      title: "About Me",
      description: "HR professional passionate about talent management and building meaningful connections. I thrive in dynamic environments and love bringing people and opportunities together.",
      className: "md:col-span-2 bg-card hover:bg-lime/10",
      delay: "0ms"
    },
    {
      id: "todo",
      title: "Me",
      image: "/aastha2.jpg",
      className: "bg-pink/20 hover:bg-pink/30",
      delay: "100ms"
    },
    {
      id: "workspace",
      title: "",
      description: '"Great vision without great people is irrelevant." — Jim Collins',
      className: "bg-coral/20 hover:bg-coral/30 md:col-span-2",
      delay: "200ms"
    },
    {
      id: "achievements",
      title: "Leadership Roles",
      description: "President @ Griffin Ventures MUN • Secretary General @ Nakshatra MUN • Chief Coordinator @ PPS Intra MUN",
      className: "md:col-span-2 bg-lime/20 hover:bg-lime/30",
      delay: "300ms"
    },
    {
      id: "skills",
      title: "Core Skills",
      description: "Recruitment • Candidate Management • Documentation • Internal Communications • Employee Engagement • Talent Relations",
      className: "md:col-span-2 bg-card hover:bg-secondary/10",
      delay: "400ms"
    },
    {
      id: "gif",
      title: "",
      image: "/gif.gif",
      className: "md:col-span-1 bg-card hover:bg-card/80",
      delay: "450ms"
    },
    {
      id: "passion",
      title: "My Approach",
      description: "Building bridges between talent and opportunity. Every connection matters, every person has a story. Let's create impact together! ✨",
      className: "md:col-span-2 bg-accent/20 hover:bg-accent/30",
      delay: "500ms"
    },
    {
      id: "gif2",
      title: "",
      image: "/gif2.gif",
      className: "md:col-span-1 bg-card hover:bg-card/80",
      delay: "550ms"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 sm:mb-12 text-center px-4">
          Let's Connect ✌️
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {cards.map((card) => (
            <Card
              key={card.id}
              className={`${card.className} p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-border transition-all duration-300 cursor-pointer group overflow-hidden`}
              style={{ animationDelay: card.delay }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {card.image ? (
                <div className="relative h-48 sm:h-64 md:h-full min-h-[200px] w-full">
                  <img 
                    src={card.image} 
                    alt={card.title || "Animation"}
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                  />
                  {card.title && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl sm:rounded-2xl flex items-end p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{card.title}</h3>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4 h-full flex flex-col justify-center min-h-[150px] sm:min-h-[200px]">
                  <h3 className={`font-bold text-foreground group-hover:scale-105 transition-transform ${card.id === "about" ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" : "text-2xl sm:text-3xl"}`}>
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className={`text-muted-foreground leading-relaxed ${card.id === "about" ? "text-base sm:text-lg md:text-xl lg:text-2xl" : "text-sm sm:text-base md:text-lg"}`}>
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
