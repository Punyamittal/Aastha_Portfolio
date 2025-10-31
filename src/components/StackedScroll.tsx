import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

interface StackedCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  bgColor: string;
  textColor: string;
}

const cards: StackedCard[] = [
  {
    id: 1,
    title: "HR Intern",
    subtitle: "Indian Youth Diplomacy Forum",
    description: "Coordinating recruitment pipelines, managing candidate communications, and maintaining critical HR documentation. Building the foundation of organizational talent management.",
    tags: ["Recruitment", "Documentation", "Employee Engagement"],
    bgColor: "bg-[hsl(var(--beige))]",
    textColor: "text-foreground",
  },
  {
    id: 2,
    title: "Talent Management",
    subtitle: "Creators Nest",
    description: "Managing creator relationships, facilitating brand collaborations, and connecting talent with meaningful opportunities. Bridging the gap between creativity and commerce.",
    tags: ["Creator Economy", "Brand Partnerships", "Talent Relations"],
    bgColor: "bg-[#FFE5EC]",
    textColor: "text-foreground",
  },
  {
    id: 3,
    title: "PR Team Member",
    subtitle: "Commonwealth Student Association",
    description: "Leading public relations initiatives for Anika Joshi's campaign. Crafting narratives, managing communications, and building authentic connections with stakeholders.",
    tags: ["Public Relations", "Campaign Management", "Strategic Communications"],
    bgColor: "bg-[#E8F5E0]",
    textColor: "text-foreground",
  },
  {
    id: 4,
    title: "Leadership & Mentorship",
    subtitle: "MUN & Community Building",
    description: "President at Griffin Ventures MUN, Secretary General at Nakshatra MUN, and Mentor at Bhav IGDTUW. Empowering others while honing leadership through diplomacy and debate.",
    tags: ["Leadership", "Mentorship", "Public Speaking"],
    bgColor: "bg-[#FFF5F0]",
    textColor: "text-foreground",
  },
];

const Card = ({ card, index }: { card: StackedCard; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.95, 0.9]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.8, 0.6]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        top: `${index * 2}rem`,
      }}
      className={`sticky h-screen flex items-center justify-center ${card.bgColor} border-b-4 border-border relative z-10`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8"
        >
          {/* Number Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-lime flex items-center justify-center">
              <span className="text-2xl sm:text-3xl font-black text-foreground">
                {card.id}
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black ${card.textColor} leading-tight sm:leading-none`}
          >
            {card.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-black px-4"
          >
            {card.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4"
          >
            {card.description}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-2 sm:gap-3 justify-center pt-2 sm:pt-4 px-4"
          >
            {card.tags.map((tag, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="text-xs sm:text-sm md:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
              >
                {tag}
              </Badge>
            ))}
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex justify-center gap-3 sm:gap-4 pt-4 sm:pt-8"
          >
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-lime/40 blur-xl" />
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-pink/40 blur-xl" />
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-coral/40 blur-xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* Shadow overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/5 pointer-events-none" />
    </motion.div>
  );
};

export const StackedScroll = () => {
  return (
    <section className="relative">
      {/* Section Header */}
      <div className="h-screen flex flex-col items-center justify-center bg-background relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 sm:space-y-6 px-4 sm:px-6"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-foreground leading-tight sm:leading-none">
            My Journey
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
            Four chapters of growth, leadership, and impact
          </p>
          
          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-8 sm:pt-12"
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-secondary mx-auto" />
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Stacked Cards */}
      {cards.map((card, index) => (
        <Card key={card.id} card={card} index={index} />
      ))}
    </section>
  );
};
