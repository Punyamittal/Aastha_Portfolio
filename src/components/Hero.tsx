import { useEffect, useState } from "react";
import heroPattern from "@/assets/hero-pattern.png";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden pt-16 sm:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroPattern} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12 w-full min-h-screen md:min-h-screen py-8 md:py-0">
        {/* Text Content Section */}
        <div className="flex-shrink-0 w-full md:w-1/2 lg:w-2/5">
          <div className={`space-y-4 sm:space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-foreground leading-none tracking-tight">
                Aastha Jain
              </h1>
              
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-bold">
                <span className="text-foreground">HR &</span>
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-lime rounded-full animate-pulse" />
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-pink rounded-full animate-pulse delay-75" />
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-coral rounded-full animate-pulse delay-150" />
                </div>
              </div>
              
              <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-foreground">
                Talent Management
              </div>
            </div>

            <div className="inline-block bg-lime px-4 py-2 sm:px-6 sm:py-3 rounded-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <p className="text-base sm:text-xl md:text-xl lg:text-2xl font-semibold text-foreground">
                Connecting talent with opportunity 🚀
              </p>
            </div>
            
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <span className="text-sm sm:text-lg text-muted-foreground">Mentor @ Bhav IGDTUW</span>
              <span className="hidden sm:inline text-2xl">•</span>
              <span className="text-sm sm:text-lg text-muted-foreground">MUN Enthusiast</span>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full md:w-1/3 lg:w-1/3 xl:w-2/5 2xl:w-2/5 relative z-10 mt-0 md:mt-0">
          <div className="relative w-full h-full min-h-[200px] sm:min-h-[250px] md:min-h-[350px] lg:min-h-[300px] xl:min-h-[350px] 2xl:min-h-[400px] max-w-[400px] md:max-w-[450px] lg:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[550px] max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[450px] xl:max-h-[500px] 2xl:max-h-[550px] mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/aastha.jpg" 
              alt="Aastha Jain" 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-foreground rounded-full flex items-start justify-center p-1.5 sm:p-2 bg-background/80 backdrop-blur-sm">
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};
