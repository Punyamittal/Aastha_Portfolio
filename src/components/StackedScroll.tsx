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
    bgColor: "bg-background",
    textColor: "text-foreground",
  },
  {
    id: 2,
    title: "Talent Management",
    subtitle: "Creators Nest",
    description: "Managing creator relationships, facilitating brand collaborations, and connecting talent with meaningful opportunities. Bridging the gap between creativity and commerce.",
    tags: ["Creator Economy", "Brand Partnerships", "Talent Relations"],
    bgColor: "bg-gradient-to-br from-pink/20 to-coral/20",
    textColor: "text-foreground",
  },
  {
    id: 3,
    title: "PR Team Member",
    subtitle: "Commonwealth Student Association",
    description: "Leading public relations initiatives for Anika Joshi's campaign. Crafting narratives, managing communications, and building authentic connections with stakeholders.",
    tags: ["Public Relations", "Campaign Management", "Strategic Communications"],
    bgColor: "bg-gradient-to-br from-lime/20 to-secondary/30",
    textColor: "text-foreground",
  },
  {
    id: 4,
    title: "Leadership & Mentorship",
    subtitle: "MUN & Community Building",
    description: "President at Griffin Ventures MUN, Secretary General at Nakshatra MUN, and Mentor at Bhav IGDTUW. Empowering others while honing leadership through diplomacy and debate.",
    tags: ["Leadership", "Mentorship", "Public Speaking"],
    bgColor: "bg-gradient-to-br from-accent/20 to-pink/10",
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
      className={`sticky h-screen flex items-center justify-center ${card.bgColor} border-b-4 border-border`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Number Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block"
          >
            <div className="w-16 h-16 rounded-full bg-lime flex items-center justify-center">
              <span className="text-3xl font-black text-foreground">
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
            className={`text-6xl md:text-8xl font-black ${card.textColor} leading-none`}
          >
            {card.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-secondary"
          >
            {card.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {card.description}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center pt-4"
          >
            {card.tags.map((tag, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="text-base px-4 py-2 rounded-full"
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
            className="flex justify-center gap-4 pt-8"
          >
            <div className="w-12 h-12 rounded-full bg-lime/40 blur-xl" />
            <div className="w-12 h-12 rounded-full bg-pink/40 blur-xl" />
            <div className="w-12 h-12 rounded-full bg-coral/40 blur-xl" />
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
          className="text-center space-y-6 px-6"
        >
          <h2 className="text-6xl md:text-8xl font-black text-foreground">
            My Journey
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Four chapters of growth, leadership, and impact
          </p>
          
          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-12"
          >
            <ChevronDown className="w-8 h-8 text-secondary mx-auto" />
            <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Stacked Cards */}
      {cards.map((card, index) => (
        <Card key={card.id} card={card} index={index} />
      ))}

      {/* Outro Section */}
      <div className="h-screen flex items-center justify-center bg-foreground text-background relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 px-6 relative z-10"
        >
          <h2 className="text-6xl md:text-8xl font-black">
            What's Next?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Every experience builds the foundation for tomorrow's opportunities
          </p>
          <motion.div
            className="pt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#contact"
              className="inline-block bg-lime text-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-lime/90 transition-colors"
            >
              Let's Connect
            </a>
          </motion.div>
        </motion.div>

        {/* Animated Background Circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-32 w-64 h-64 bg-lime/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-32 w-64 h-64 bg-pink/20 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};
