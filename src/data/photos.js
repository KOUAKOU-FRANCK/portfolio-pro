// Galerie photographique.
// À FAIRE : remplacer les images d'exemple par vos photos (format WebP, 1600 px max, < 300 Ko)
// et leurs miniatures (environ 600 px) dans public/images/photos/.
export const categories = [
  "Mariages",
  "Anniversaires",
  "Cérémonies",
  "Événements",
  "Portraits",
  "Reportages",
];

const exemple = (fichier, categorie, n) => ({
  id: `${fichier}-${n}`,
  src: `/images/photos/exemple-${fichier}-${n}.svg`,
  miniature: `/images/photos/exemple-${fichier}-${n}.svg`,
  alt: `Photo d'exemple — ${categorie.toLowerCase()}`,
  categorie,
  largeur: 800,
  hauteur: 600,
  vedette: n === 1,
});

export const photos = [
  exemple("mariages", "Mariages", 1),
  exemple("mariages", "Mariages", 2),
  exemple("anniversaires", "Anniversaires", 1),
  exemple("anniversaires", "Anniversaires", 2),
  exemple("ceremonies", "Cérémonies", 1),
  exemple("ceremonies", "Cérémonies", 2),
  exemple("evenements", "Événements", 1),
  exemple("evenements", "Événements", 2),
  exemple("portraits", "Portraits", 1),
  exemple("portraits", "Portraits", 2),
  exemple("reportages", "Reportages", 1),
  exemple("reportages", "Reportages", 2),
];

// Prestations photographiques. À FAIRE : adapter à votre offre réelle.
export const prestations = [
  { titre: "Mariages et cérémonies", texte: "À compléter : déroulé, durée de couverture, livraison." },
  { titre: "Anniversaires et événements", texte: "À compléter" },
  { titre: "Portraits et reportages", texte: "À compléter" },
];

export const infosPratiques = {
  zone: "À compléter : zone géographique couverte",
  delai: "À compléter : délai de livraison des photos",
  livraison: "À compléter : galerie en ligne, clé USB…",
};
