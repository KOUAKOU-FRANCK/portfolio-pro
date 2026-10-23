import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SITE = "https://franck-kouakou.vercel.app";

// Met à jour la description et l'adresse canonique de la page affichée.
// Le titre, lui, est posé par la balise <title> de chaque page.
export function useDescription(description) {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute("content", description);
    const canonique = document.querySelector('link[rel="canonical"]');
    if (canonique) canonique.setAttribute("href", SITE + pathname);
  }, [description, pathname]);
}
