// Compétences informatiques, regroupées par domaine.
// niveau : "Maîtrisé" | "Utilisé en projet" | "Notions" | null (non affiché).
// À FAIRE : renseigner le niveau réel de chaque compétence.
export const skillGroups = [
  {
    id: "support",
    titre: "Support et maintenance informatique",
    description: "Accompagner les utilisateurs et garder le parc informatique opérationnel.",
    competences: [
      { nom: "Assistance aux utilisateurs", niveau: null },
      { nom: "Diagnostic et résolution des incidents", niveau: null },
      { nom: "Installation et configuration des postes de travail", niveau: null },
      { nom: "Maintenance préventive et corrective", niveau: null },
      { nom: "Gestion du parc informatique", niveau: null },
      { nom: "Installation des logiciels et périphériques", niveau: null },
    ],
  },
  {
    id: "reseaux",
    titre: "Systèmes et réseaux",
    description: "Installer, configurer et sécuriser les systèmes et les réseaux.",
    competences: [
      { nom: "Windows et Linux", niveau: null },
      { nom: "Réseaux LAN et WAN", niveau: null },
      { nom: "Configuration et diagnostic réseau", niveau: null },
      { nom: "DHCP et DNS", niveau: null },
      { nom: "VPN", niveau: null },
      { nom: "Gestion des accès et des sauvegardes", niveau: null },
    ],
  },
  {
    id: "dev",
    titre: "Développement web",
    description: "Concevoir des applications web utiles et maintenables.",
    competences: [
      { nom: "PHP et Laravel", niveau: null },
      { nom: "JavaScript", niveau: null },
      { nom: "React", niveau: null },
      { nom: "Node.js", niveau: null },
      { nom: "MySQL", niveau: null },
      { nom: "API REST", niveau: null },
      { nom: "Architecture MVC", niveau: null },
    ],
  },
];
