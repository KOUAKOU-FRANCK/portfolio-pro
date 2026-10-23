// Informations personnelles et liens de contact.
// Un lien laissé vide ("") n'est pas affiché sur le site.
export const profile = {
  nom: "Kouakou Kouadio Franck",
  titre: "Technicien supérieur en informatique & photographe événementiel",
  accroche: "Je transforme les idées en solutions innovantes",
  domaines: "Gestion de projets IT · Développement d’applications · Cybersécurité · Intelligence artificielle",
  introduction:
    "Ma mission : accompagner la transformation numérique, simplifier les processus et aider les organisations à tirer pleinement parti des nouvelles technologies.",
  portrait: "/images/portrait.jpg",
  cv: "/cv.pdf",

  email: "kkfranck000@gmail.com",
  whatsapp: "2250759751470", // format international sans + ni espaces
  linkedin: "https://www.linkedin.com/in/franck-kouakou-741382256/",
  github: "https://github.com/KOUAKOU-FRANCK",
};

export const whatsappLink = (message = "") =>
  profile.whatsapp
    ? `https://wa.me/${profile.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`
    : "";
