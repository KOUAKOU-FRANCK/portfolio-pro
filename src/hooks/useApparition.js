import { useEffect } from "react";

export const mouvementReduit = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fait apparaître les éléments .reveal au défilement.
// deps : valeurs qui font apparaître de nouveaux éléments (ex. un filtre).
export function useApparition(deps = []) {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal:not(.is-visible)");
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
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("apparition-active");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
