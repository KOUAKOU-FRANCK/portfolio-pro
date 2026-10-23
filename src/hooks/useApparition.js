import { useEffect } from "react";

export const mouvementReduit = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fait apparaître les éléments .reveal au défilement.
export function useApparition() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || mouvementReduit()) return;
    document.documentElement.classList.add("apparition-active");
    const observer = new IntersectionObserver(
      (entrees) =>
        entrees.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("apparition-active");
    };
  }, []);
}
