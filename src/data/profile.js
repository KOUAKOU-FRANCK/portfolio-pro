// Informations personnelles et liens de contact.
// Un lien laissé vide ("") n'est pas affiché sur le site.
export const profile = {
  nom: "Kouakou Kouadio Franck",
  titre: "Technicien supérieur en informatique & photographe événementiel",
  introduction:
    "Technicien supérieur en informatique et développeur d'applications, je conçois des solutions numériques, accompagne les utilisateurs et réalise des photographies pour immortaliser les moments importants.",
  portrait: "/images/portrait.svg", // À FAIRE : remplacer par public/images/portrait.jpg
  cv: "/cv.pdf", // À FAIRE : ajouter public/cv.pdf (sans adresse ni date de naissance)

  email: "", // À FAIRE : adresse e-mail professionnelle
  whatsapp: "", // À FAIRE : numéro au format international sans + ni espaces, ex. 2250700000000
  linkedin: "", // À FAIRE : URL du profil LinkedIn, si disponible
  github: "https://github.com/KOUAKOU-FRANCK",
};

export const whatsappLink = (message = "") =>
  profile.whatsapp
    ? `https://wa.me/${profile.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`
    : "";
