// Titre et description de chaque page, utilisés pour Google et l'aperçu des liens partagés.
// Ce fichier sert aussi à générer sitemap.xml et les pages HTML de chaque adresse au moment du build :
// pour ajouter une page, ajoutez-la ici et dans les routes de src/App.jsx.
export const SITE = "https://franck-kouakou.vercel.app";

export const pages = [
  {
    chemin: "/",
    titre: "Kouakou Kouadio Franck — Informatique & Photographie",
    description:
      "Kouakou Kouadio Franck, technicien supérieur en informatique à Abidjan : gestion de projets IT, développement d'applications, cybersécurité et intelligence artificielle. Également photographe événementiel.",
    priorite: "1.0",
  },
  {
    chemin: "/informatique",
    titre: "Compétences informatiques — Kouakou Kouadio Franck",
    description:
      "Compétences informatiques de Kouakou Kouadio Franck : support utilisateurs, maintenance, systèmes et réseaux, développement d'applications web et intelligence artificielle.",
    priorite: "0.9",
  },
  {
    chemin: "/projets",
    titre: "Projets informatiques — Kouakou Kouadio Franck",
    description:
      "Projets informatiques de Kouakou Kouadio Franck : applications web conçues et déployées, avec leurs objectifs, fonctionnalités et technologies.",
    priorite: "0.9",
  },
  {
    chemin: "/photographie",
    titre: "Photographie événementielle — Kouakou Kouadio Franck",
    description:
      "Photographe événementiel à Abidjan : mariages, anniversaires, cérémonies, portraits et reportages. Galerie et demande de prestation.",
    priorite: "0.9",
  },
  {
    chemin: "/a-propos",
    titre: "À propos — Kouakou Kouadio Franck",
    description:
      "Parcours de Kouakou Kouadio Franck : formation, expérience à la Mairie de Port-Bouët depuis 2023 et certifications.",
    priorite: "0.8",
  },
  {
    chemin: "/contact",
    titre: "Contact — Kouakou Kouadio Franck",
    description:
      "Contacter Kouakou Kouadio Franck par e-mail, WhatsApp ou LinkedIn pour une opportunité, un projet informatique ou une prestation photo.",
    priorite: "0.7",
  },
];

// Page affichée pour une adresse inconnue : jamais indexée par Google.
export const pageIntrouvable = {
  titre: "Page introuvable — Kouakou Kouadio Franck",
  description: "Cette page n'existe pas ou a été déplacée.",
};

// "/Informatique/" et "/informatique" désignent la même page.
export const normaliserChemin = (chemin) => chemin.toLowerCase().replace(/\/+$/, "") || "/";

export const trouverPage = (chemin) => pages.find((p) => p.chemin === normaliserChemin(chemin));
