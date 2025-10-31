import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StackedScroll } from "@/components/StackedScroll";
import { Projects } from "@/components/Projects";
import { BentoGrid } from "@/components/BentoGrid";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <StackedScroll />
      <Projects />
      <BentoGrid />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
