// src/hooks/useGlobalScrollAnimations.js
import { useEffect } from "react";

export default function useGlobalScrollAnimations(threshold = 0.3) {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Re-trigger animation every time section enters
            entry.target.classList.remove("animate");
            void entry.target.offsetWidth; // force reflow
            entry.target.classList.add("animate");
          } else {
            // Reset animation when section leaves
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold,
        rootMargin: "-10% 0px -10% 0px", 
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, [threshold]);
}
