import { useEffect, useState } from "react";
import heroPattern from "@/assets/hero-pattern.png";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroPattern} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              <h1 className="text-8xl md:text-9xl font-black text-foreground leading-none tracking-tight">
                Your Name
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-5xl md:text-7xl font-bold">
                <span className="text-foreground">Product</span>
                <div className="flex gap-2">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-lime rounded-full animate-pulse" />
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-pink rounded-full animate-pulse delay-75" />
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-coral rounded-full animate-pulse delay-150" />
                </div>
              </div>
              
              <div className="text-5xl md:text-7xl font-bold text-foreground">
                Designer
              </div>
            </div>

            <div className="inline-block bg-lime px-6 py-3 rounded-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                To live is to risk it all 🚀
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};
