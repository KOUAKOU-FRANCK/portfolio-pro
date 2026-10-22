// Compétences informatiques, regroupées par domaine (reprises du CV).
// niveau : "Maîtrisé" | "Utilisé en projet" | "Notions" | null (non affiché).
// À FAIRE : renseigner le niveau réel de chaque compétence.
export const skillGroups = [
  {
    id: "support",
    titre: "Support utilisateurs et maintenance",
    description: "Accompagner les utilisateurs et garder le parc informatique opérationnel.",
    competences: [
      { nom: "Assistance technique et support de proximité", niveau: null },
      { nom: "Diagnostic et résolution des incidents", niveau: null },
      { nom: "Installation, configuration et maintenance des postes", niveau: null },
      { nom: "Maintenance préventive et corrective", niveau: null },
      { nom: "Gestion, suivi et inventaire du parc informatique", niveau: null },
      { nom: "Imprimantes et périphériques", niveau: null },
      { nom: "Formation et accompagnement des utilisateurs", niveau: null },
    ],
  },
  {
    id: "reseaux",
    titre: "Systèmes, réseaux et sécurité",
    description: "Installer, configurer et sécuriser les systèmes et les réseaux.",
    competences: [
      { nom: "Windows 10 / 11", niveau: null },
      { nom: "Installation des systèmes d'exploitation", niveau: null },
      { nom: "LAN / WAN / Wi-Fi", niveau: null },
      { nom: "TCP/IP, DHCP, DNS", niveau: null },
      { nom: "Configuration de routeurs et équipements réseau", niveau: null },
      { nom: "VPN", niveau: null },
      { nom: "Antivirus, pare-feu et sauvegardes", niveau: null },
      { nom: "Sensibilisation aux bonnes pratiques de sécurité", niveau: null },
    ],
  },
  {
    id: "dev",
    titre: "Développement web",
    description: "Concevoir des applications web utiles et maintenables.",
    competences: [
      { nom: "PHP / Laravel", niveau: null },
      { nom: "JavaScript", niveau: null },
      { nom: "React", niveau: null },
      { nom: "Node.js", niveau: null },
      { nom: "MySQL / SQL", niveau: null },
      { nom: "API REST", niveau: null },
      { nom: "Administration de sites web et CMS", niveau: null },
    ],
  },
];
