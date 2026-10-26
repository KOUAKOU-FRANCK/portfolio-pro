import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE, pageIntrouvable, trouverPage } from "../data/pages.js";

// Trouve la balise du <head> qui correspond au sélecteur, ou la crée.
function balise(selecteur, creer) {
  let el = document.head.querySelector(selecteur);
  if (!el) {
    el = creer();
    document.head.appendChild(el);
  }
  return el;
}

// Met à jour le titre, la description, l'adresse canonique et l'indexation de la page affichée,
// à partir de la liste des pages (src/data/pages.js). Appelé une seule fois, dans App.
export function useMetadonnees() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = trouverPage(pathname);
    const { titre, description } = page ?? pageIntrouvable;
    document.title = titre;
    balise('meta[name="description"]', () => Object.assign(document.createElement("meta"), { name: "description" }))
      .setAttribute("content", description);

    const canonique = document.head.querySelector('link[rel="canonical"]');
    const robots = document.head.querySelector('meta[name="robots"]');
    if (page) {
      balise('link[rel="canonical"]', () => Object.assign(document.createElement("link"), { rel: "canonical" }))
        .setAttribute("href", SITE + page.chemin);
      robots?.remove();
    } else {
      canonique?.remove();
      balise('meta[name="robots"]', () => Object.assign(document.createElement("meta"), { name: "robots" }))
        .setAttribute("content", "noindex");
    }
  }, [pathname]);
}
