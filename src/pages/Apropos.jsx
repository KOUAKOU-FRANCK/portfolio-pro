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

const certifications = [
  "Certification CSCU (Certified Secure Computer User)",
  "Certification en Claude IA",
  "Formation en cybersécurité et sécurité informatique",
  "Formations complémentaires en développement web et technologies numériques",
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
              Technicien supérieur en informatique, titulaire d'un BTS Informatique Développement
              d'Applications, je suis spécialisé dans le support utilisateurs, la résolution
              d'incidents, la maintenance des systèmes et l'assistance sur les applications métiers.
            </p>
            <p>
              Depuis 2023, j'accompagne les services de la Mairie de Port-Bouët au quotidien et je
              conçois des applications de gestion administrative. En parallèle, je pratique la
              photographie événementielle.
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
            {certifications.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <p className="section__more">
            <Link to="/informatique">Voir le détail de mes compétences →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
