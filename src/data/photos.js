// Galerie photographique.
// Photos en WebP (1600 px max) avec miniature de 600 px (-mini.webp).
// À FAIRE : remplacer les images d'exemple restantes par vos photos (format WebP, 1600 px max, < 300 Ko)
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

const photo = (id, categorie, alt, largeur, hauteur, vedette = false) => ({
  id,
  src: `/images/photos/${id}.webp`,
  miniature: `/images/photos/${id}-mini.webp`,
  alt,
  categorie,
  largeur,
  hauteur,
  vedette,
});

export const photos = [
  photo("mariage-1", "Mariages", "Les mariés posent en riant contre un cocotier, la mariée tient son bouquet", 1600, 1067, true),
  photo("mariage-2", "Mariages", "La mariée en tailleur blanc et chapeau à voilette tient son bouquet sous les cocotiers", 1600, 1067, true),
  photo("mariage-3", "Mariages", "Portrait rapproché de la mariée souriante derrière sa voilette", 1600, 1159, true),
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
