export const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
          <p className="text-xs sm:text-sm">
            © 2025 Portfolio. Crafted by{" "}
            <a 
              href="https://www.linkedin.com/in/punyamittal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-lime transition-colors underline"
            >
              Punya Mittal
            </a>
          </p>
          <p className="text-xs sm:text-sm opacity-70">
            Designed & Built with ☕ and late nights
          </p>
        </div>
      </div>
    </footer>
  );
};
