import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";

const parcours = [
  {
    periode: "Depuis août 2023",
    titre: "Technicien supérieur en informatique — CDI",
    lieu: "Mairie de Port-Bouët, Abidjan, Côte d'Ivoire",
    missions: [
      "Support technique quotidien des utilisateurs et traitement des incidents matériels et logiciels.",
      "Installation, configuration et maintenance des ordinateurs, imprimantes, routeurs et équipements.",
      "Maintenance préventive et corrective, suivi et inventaire du parc informatique.",
      "Sécurisation du parc : antivirus, pare-feu, sauvegardes et contrôle des accès.",
      "Formation et sensibilisation des utilisateurs aux bonnes pratiques de sécurité.",
      "Maintenance des logiciels et applications utilisés par les services municipaux.",
    ],
    realisations: [
      "Résolution de la majorité des incidents techniques dans les délais opérationnels.",
      "Déploiement et maintenance de plusieurs solutions informatiques pour les services municipaux.",
      "Mise en place de solutions de gestion des certificats et actes administratifs.",
      "Participation à l'amélioration de la gestion et de l'archivage numérique des documents.",
      "Conception et déploiement de logiciels de gestion administrative.",
    ],
  },
  {
    periode: "Formation",
    titre: "BTS Informatique — Développement d'Applications (IDA)",
    lieu: "Côte d'Ivoire",
  },
];

const verifier = (id) => `https://academy.claude.com/verify/${id}`;

const certifications = [
  {
    nom: "Claude 101",
    organisme: "Anthropic — Claude Academy",
    date: "5 octobre 2026",
    image: "/images/certifications/claude-101.jpg",
    lien: verifier("89293452236060b11fb1b61e5c9a8867"),
  },
  {
    nom: "Claude Code 101",
    organisme: "Anthropic — Claude Academy",
    date: "6 octobre 2026",
    image: "/images/certifications/claude-code-101.jpg",
    lien: verifier("24f8c806f55272974143332719488693"),
  },
  {
    nom: "Introduction to Claude Cowork",
    organisme: "Anthropic — Claude Academy",
    date: "7 octobre 2026",
    image: "/images/certifications/introduction-to-claude-cowork.jpg",
    lien: verifier("61f6f97547ba9d9dfd5a22a63b5d4401"),
  },
  {
    nom: "Introduction to Claude Tag",
    organisme: "Anthropic — Claude Academy",
    date: "8 octobre 2026",
    image: "/images/certifications/introduction-to-claude-tag.jpg",
    lien: verifier("93a693b3a64bfb3695f6981c7d2059de"),
  },
  {
    nom: "Claude Platform 101",
    organisme: "Anthropic — Claude Academy",
    date: "9 octobre 2026",
    image: "/images/certifications/claude-platform-101.jpg",
    lien: verifier("1af1439c37061fff1cdc35ef76390faa"),
  },
  {
    nom: "Claude Code in action",
    organisme: "Anthropic — Claude Academy",
    date: "Octobre 2026",
    lien: verifier("d9f268626454018aa4fb00f27ed07a0c"),
  },
  { nom: "CSCU — Certified Secure Computer User" },
  { nom: "Formation en hacking éthique (CEH) et sécurité informatique" },
  { nom: "Formation aux compétences numériques fondamentales" },
  { nom: "Formations complémentaires en développement web et technologies numériques" },
];

export default function Apropos() {
  return (
    <>
      <title>À propos — Kouakou Kouadio Franck</title>
      <section className="page-header">
        <div className="container">
          <h1>À propos</h1>
        </div>
      </section>

      <section className="section">
        <div className="container about">
          <img
            className="about__portrait"
            src={profile.portrait}
            alt={`Portrait de ${profile.nom}`}
            width="271"
            height="339"
          />
          <div>
            <h2>Qui suis-je ?</h2>
            <p>
              Technicien supérieur en informatique, je suis titulaire d'un BTS Informatique, option
              Développement d'Applications. Depuis août 2023, j'occupe un poste de technicien
              supérieur en informatique (CDI) à la <strong>Mairie de Port-Bouët</strong>, à Abidjan.
            </p>
            <p>
              Au quotidien, j'assure le support des utilisateurs, la maintenance du parc informatique,
              le dépannage du réseau local et la sécurisation des postes : antivirus, pare-feu,
              sauvegardes et contrôle des accès. J'ai également conçu et déployé des logiciels pour
              les services municipaux, notamment pour la délivrance des certificats de résidence et
              des certificats administratifs, avec des documents PDF authentifiés par QR code.
            </p>
            <p>
              La sécurité informatique tient une place importante dans mon parcours. Une formation en
              hacking éthique (CEH) m'a appris à identifier les vulnérabilités des systèmes et les
              moyens de les corriger, et ma certification <strong>CSCU</strong> (Certified Secure
              Computer User) atteste de mes compétences en cybersécurité. Une formation aux
              compétences numériques fondamentales m'a aussi permis de renforcer la gestion de
              projet, la résolution de problèmes et le travail en équipe.
            </p>
            <p>
              Je me forme également à l'intelligence artificielle : en octobre 2026, j'ai obtenu
              <strong> six certifications Claude Academy d'Anthropic</strong>, dont Claude Code 101,
              Claude Code in action et Claude Platform 101, pour intégrer l'IA dans le développement
              d'applications et l'automatisation des tâches.
            </p>
            <p>
              Passionné de technologie, je souhaite mettre ces compétences au service d'une
              entreprise ou d'une organisation pour l'aider à atteindre ses objectifs numériques. En
              parallèle, je pratique la photographie événementielle.
            </p>
            <div className="hero__actions">
              <a href={profile.cv} className="btn btn--primary" download>
                Télécharger mon CV (PDF)
              </a>
              <a href={profile.cv} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                Consulter en ligne
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2>Parcours</h2>
          <ol className="timeline">
            {parcours.map((e) => (
              <li key={e.titre}>
                <p className="timeline__periode">{e.periode}</p>
                <h3>{e.titre}</h3>
                <p className="muted">{e.lieu}</p>
                {e.missions && (
                  <ul>
                    {e.missions.map((m) => <li key={m}>{m}</li>)}
                  </ul>
                )}
                {e.realisations && (
                  <>
                    <p className="timeline__sous-titre">Réalisations</p>
                    <ul>
                      {e.realisations.map((r) => <li key={r}>{r}</li>)}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Certifications et formations</h2>
          <ul className="cert-list">
            {certifications.map((c) => (
              <li key={c.nom} className={c.image ? "cert-list__item--badge" : undefined}>
                {c.image && (
                  <img
                    className="cert-list__badge"
                    src={c.image}
                    alt={`Badge ${c.nom} délivré par Anthropic`}
                    width="640"
                    height="438"
                    loading="lazy"
                  />
                )}
                <p className="cert-list__nom">{c.nom}</p>
                {c.organisme && (
                  <p className="muted">
                    {c.organisme} · {c.date}
                  </p>
                )}
                {c.lien && (
                  <a className="cert-list__lien" href={c.lien} target="_blank" rel="noopener noreferrer">
                    Vérifier la certification ↗
                  </a>
                )}
              </li>
            ))}
          </ul>
          <p className="section__more">
            <Link to="/informatique">Voir le détail de mes compétences →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
