import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Loader.css";

export const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const minDisplayTime = 4000; // 4 seconds in milliseconds

    // Simulate loading time and ensure all assets are loaded
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime);
      
      // Ensure loader is shown for at least 4 seconds
      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback timeout in case load event doesn't fire (but still respect 4 seconds)
      setTimeout(() => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime >= minDisplayTime) {
          setIsLoading(false);
        }
      }, minDisplayTime);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          <div className="loader-wrapper">
            <p className="loader">
              <span>Aastha</span>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
