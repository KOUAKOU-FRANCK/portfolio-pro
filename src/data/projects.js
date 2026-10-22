// Projets informatiques (fiches rédigées à partir du code des dépôts GitHub).
// statut : "terminé" | "en cours" | "prototype". Ne jamais marquer "terminé" un projet en développement.
// afficher : false masque le projet tant que sa fiche n'est pas complète.
// demo / github : null si non disponible (le bouton n'est alors pas affiché).
// À FAIRE : remplacer les images par de vraies captures d'écran dans public/images/projets/.
export const projects = [
  {
    id: "certificats-etat-civil",
    nom: "Gestion des certificats administratifs",
    image: "/images/projets/certificats-etat-civil.webp",
    probleme:
      "La Mairie de Port-Bouët délivre plusieurs types de certificats administratifs et doit suivre chaque demande, de la saisie à la délivrance.",
    objectifs: [
      "Centraliser les demandes de certificats dans un seul logiciel",
      "Produire des certificats PDF fiables et vérifiables",
      "Suivre l'activité des agents et du service",
    ],
    fonctionnalites: [
      "Sept types de certificats : vie, vie mineur, entretien, non-remariage, non-divorce et non-séparation de corps…",
      "Gestion des demandeurs et des enfants mineurs rattachés",
      "Génération des certificats en PDF avec QR code d'authentification",
      "Suivi du statut des demandes, recherche, modification et reconduction",
      "Statistiques globales et par agent, listes et exports",
      "Comptes agents avec rôles, changement et réinitialisation du mot de passe",
    ],
    technologies: ["PHP (POO)", "MySQL", "TCPDF", "PHP QR Code", "Bootstrap", "Chart.js", "jQuery"],
    role: "Conception et développement complet",
    statut: "en cours",
    demo: null,
    github: null, // Dépôt AUTRES-CERTICATIONS à nettoyer (base de données) avant de le relier
    vedette: true,
    afficher: true,
  },
  {
    id: "certificat-residence",
    nom: "Gestion des certificats de résidence",
    image: "/images/projets/certificat-residence.webp",
    probleme:
      "La Mairie de Port-Bouët délivre des certificats de résidence et doit pouvoir les établir rapidement, les retrouver et suivre l'activité du service.",
    objectifs: [
      "Accélérer la délivrance des certificats de résidence",
      "Centraliser et retrouver facilement les certificats délivrés",
      "Suivre l'activité du service par des statistiques",
    ],
    fonctionnalites: [
      "Connexion sécurisée des agents",
      "Saisie des demandes avec choix du quartier et de la rue",
      "Génération du certificat en PDF avec QR code",
      "Recherche, modification et reconduction d'un certificat",
      "Statistiques et graphiques par jour, semaine, mois et année",
    ],
    technologies: ["PHP", "MySQL", "PDO", "FPDF", "JavaScript", "CSS"],
    role: "Conception et développement complet",
    statut: "en cours",
    demo: null,
    github: null, // Dépôt à nettoyer (base de données) avant de le relier
    vedette: true,
    afficher: true,
  },
  {
    id: "ma-mutuelle",
    nom: "Ma Mutuelle",
    image: "/images/projets/exemple.svg",
    probleme:
      "Une mutuelle communautaire a besoin de suivre les cotisations, les demandes d'aide et la communication avec ses membres.",
    objectifs: [
      "Donner à chaque membre un espace personnel",
      "Simplifier la gestion des cotisations et de l'entraide",
      "Fournir au bureau des rapports financiers",
    ],
    fonctionnalites: [
      "Connexion et inscription, profils membre et administrateur",
      "Cotisations avec preuve de paiement jointe et validation",
      "Demandes d'aide (entraide)",
      "Annonces, événements et notifications",
      "Rapports financiers téléchargeables",
    ],
    technologies: ["React", "Vite", "Supabase", "PHP", "MySQL"],
    role: "Conception et développement complet",
    statut: "en cours",
    demo: null,
    github: "https://github.com/KOUAKOU-FRANCK/APP-Ma-Mutuelle",
    vedette: true,
    afficher: true,
  },
  {
    id: "resto",
    nom: "Application de gestion de restaurant",
    image: "/images/projets/exemple.svg",
    probleme:
      "Un restaurant doit gérer ses commandes, réservations, stocks et son personnel avec des outils dispersés.",
    objectifs: [
      "Permettre aux clients de commander et réserver depuis leur téléphone",
      "Donner à chaque membre du personnel un espace adapté à son rôle",
      "Suivre le stock, les fournisseurs et le planning",
    ],
    fonctionnalites: [
      "Espace client : menu, commande sur place ou à emporter, suivi, réservation, avis",
      "Espace personnel par rôle : cuisine, serveur (plan de salle), manager",
      "Gestion du stock, des fournisseurs et des achats",
      "Planning et pointeuse du personnel",
      "API REST sécurisée par JWT",
    ],
    technologies: ["Flutter", "Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Docker"],
    role: "Conception et développement complet",
    statut: "en cours",
    demo: null,
    github: "https://github.com/KOUAKOU-FRANCK/resto",
    vedette: true,
    afficher: true,
  },
  {
    id: "monapp2",
    nom: "Gestionnaire de tâches mobile",
    image: "/images/projets/exemple.svg",
    probleme: "Organiser ses tâches quotidiennes et ne pas oublier les échéances.",
    objectifs: ["Lister et suivre ses tâches", "Recevoir des rappels"],
    fonctionnalites: [
      "Liste et détail des tâches",
      "Choix de la date et de l'heure",
      "Notifications de rappel",
      "Sauvegarde locale sur le téléphone",
    ],
    technologies: ["React Native", "Expo"],
    role: "Développement",
    statut: "prototype",
    demo: null,
    github: "https://github.com/KOUAKOU-FRANCK/MonApp2",
    vedette: false,
    afficher: false, // À confirmer : afficher ce projet ?
  },
  {
    id: "finarchive",
    nom: "FINARCHIVE",
    image: "/images/projets/exemple.svg",
    probleme: "À compléter",
    objectifs: ["À compléter"],
    fonctionnalites: ["À compléter"],
    technologies: ["Laravel"],
    role: "À compléter",
    statut: "en cours",
    demo: null,
    github: "https://github.com/KOUAKOU-FRANCK/FINARCHIVE",
    vedette: false,
    afficher: false, // Le dépôt ne contient pas encore de code : masqué pour l'instant.
  },
];

export const visibleProjects = projects.filter((p) => p.afficher);
