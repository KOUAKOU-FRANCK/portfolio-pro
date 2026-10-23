import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";
import { useApparition } from "../hooks/useApparition.js";
import "./Apropos.css";

const parcours = [
  {
    periode: "Depuis août 2023",
    titre: "Technicien supérieur en informatique — CDI",
    lieu: "Mairie de Port-Bouët, Abidjan, Côte d'Ivoire",
    missions: [
      "Gestion des projets informatiques : conception, déploiement et suivi de solutions numériques.",
      "Support informatique auprès de Monsieur le Député-Maire de la commune de Port-Bouët.",
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

const reperes = [
  { libelle: "Poste", valeur: "Technicien supérieur en informatique" },
  { libelle: "Employeur", valeur: "Mairie de Port-Bouët" },
  { libelle: "Depuis", valeur: "Août 2023" },
  { libelle: "Formation", valeur: "BTS Informatique, option Développement d'Applications" },
  { libelle: "Basé à", valeur: "Abidjan, Côte d'Ivoire" },
];

const Icone = ({ children }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">{children}</svg>
);

const expertises = [
  {
    titre: "Gestion de projets IT",
    texte: "Conception, déploiement et suivi de solutions numériques pour les services municipaux.",
    icone: (
      <Icone>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 14l2 2 4-4" />
      </Icone>
    ),
  },
  {
    titre: "Développement d'applications",
    texte: "Des logiciels de gestion conçus et déployés à la Mairie, avec documents PDF authentifiés par QR code.",
    icone: (
      <Icone>
        <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
      </Icone>
    ),
  },
  {
    titre: "Cybersécurité",
    texte: "Certifié CSCU, formé au hacking éthique (CEH) et à la sécurisation d'un parc informatique.",
    icone: (
      <Icone>
        <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </Icone>
    ),
  },
  {
    titre: "Intelligence artificielle",
    texte: "Six certifications Claude Academy pour intégrer l'IA et automatiser les processus métier.",
    icone: (
      <Icone>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M10 10h4v4h-4zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
      </Icone>
    ),
  },
];

export default function Apropos() {
  useApparition();
  const badges = certifications.filter((c) => c.image);
  const autres = certifications.filter((c) => !c.image);

  return (
    <>
      <title>À propos — Kouakou Kouadio Franck</title>

      <section className="apropos-hero">
        <div className="apropos-hero__fond" aria-hidden="true">
          <span className="apropos-hero__halo apropos-hero__halo--1" />
          <span className="apropos-hero__halo apropos-hero__halo--2" />
        </div>
        <div className="container">
          <p className="apropos-hero__eyebrow entree">À propos</p>
          <h1 className="entree" style={{ "--d": 1 }}>{profile.accroche}</h1>
          <ul className="apropos-hero__domaines" aria-label="Domaines d'expertise">
            {profile.domaines.split(" · ").map((d, i) => (
              <li key={d} className="entree" style={{ "--d": 2 + i * 0.5 }}>{d}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section apropos-profil">
        <div className="container apropos-profil__grille">
          <aside className="apropos-carte reveal">
            <div className="apropos-carte__photo">
              <span className="apropos-carte__anneau" aria-hidden="true" />
              <picture>
                <source srcSet="/images/portrait.webp" type="image/webp" />
                <img src={profile.portrait} alt={`Portrait de ${profile.nom}`} width="800" height="1001" />
              </picture>
            </div>
            <p className="apropos-carte__nom">{profile.nom}</p>
            <dl className="apropos-carte__reperes">
              {reperes.map((r) => (
                <div key={r.libelle}>
                  <dt>{r.libelle}</dt>
                  <dd>{r.valeur}</dd>
                </div>
              ))}
            </dl>
            <div className="apropos-carte__actions">
              <a href={profile.cv} className="btn btn--primary" download>
                Télécharger mon CV
              </a>
              <a href={profile.cv} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                Consulter en ligne
              </a>
            </div>
          </aside>

          <div className="apropos-bio reveal" style={{ "--d": 1 }}>
            <h2>Qui suis-je ?</h2>
            <p className="apropos-bio__chapo">
              Technicien supérieur en informatique, titulaire d’un BTS Informatique, option
              Développement d’Applications, j’exerce depuis août 2023 à la{" "}
              <strong>Mairie de Port-Bouët</strong>, où je contribue à la transformation numérique
              des services municipaux.
            </p>
            <p>
              Actuellement chargé de la gestion des projets informatiques, j’interviens dans la
              conception, le déploiement et le suivi de solutions numériques. J’assure également le
              support informatique auprès de Monsieur le Député-Maire de la commune de Port-Bouët.
            </p>
            <p>
              Passionné par l’innovation technologique, je développe mes compétences en intelligence
              artificielle afin d’accompagner les entreprises et les organisations dans
              l’identification de leurs besoins, l’intégration de solutions IA et l’automatisation de
              leurs processus métier.
            </p>
            <p>
              Mon objectif est de{" "}
              <strong>rendre l’intelligence artificielle accessible, utile et concrète</strong>, en
              aidant les organisations à comprendre son potentiel, à identifier les opportunités
              d’application et à intégrer des outils adaptés à leurs activités.
            </p>
            <p>
              Mes compétences en développement d’applications, en cybersécurité et en gestion de
              projets me permettent d’aborder ces enjeux avec une vision à la fois technique, pratique
              et orientée vers les résultats.
            </p>
            <p>
              En parallèle, je pratique la photographie événementielle, qui reflète mon esprit créatif
              et mon souci du détail.
            </p>
            <blockquote className="apropos-mission">
              <p className="apropos-mission__titre">Ma mission</p>
              <p>
                Accompagner la transformation numérique, simplifier les processus et aider les
                organisations à tirer pleinement parti des nouvelles technologies.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="reveal">Mes domaines d'expertise</h2>
          <ul className="expertises reveal">
            {expertises.map((e) => (
              <li key={e.titre} className="expertise">
                <span className="expertise__icone">{e.icone}</span>
                <h3>{e.titre}</h3>
                <p>{e.texte}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="reveal">Parcours</h2>
          <ol className="parcours">
            {parcours.map((e) => (
              <li key={e.titre} className="parcours__etape reveal">
                <span className="parcours__point" aria-hidden="true" />
                <div className="parcours__carte">
                  <p className="parcours__periode">{e.periode}</p>
                  <h3>{e.titre}</h3>
                  <p className="muted">{e.lieu}</p>
                  {e.missions && (
                    <>
                      <p className="parcours__sous-titre">Missions</p>
                      <ul className="parcours__liste">
                        {e.missions.map((m) => <li key={m}>{m}</li>)}
                      </ul>
                    </>
                  )}
                  {e.realisations && (
                    <>
                      <p className="parcours__sous-titre">Réalisations</p>
                      <ul className="parcours__liste parcours__liste--realisations">
                        {e.realisations.map((r) => <li key={r}>{r}</li>)}
                      </ul>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="reveal">Certifications et formations</h2>
          <p className="muted reveal">Badges Claude Academy (Anthropic), vérifiables en ligne.</p>
          <ul className="badges reveal">
            {badges.map((c) => (
              <li key={c.nom} className="badge-cert">
                <div className="badge-cert__image">
                  <img src={c.image} alt={`Badge ${c.nom} délivré par Anthropic`} width="640" height="438" loading="lazy" />
                </div>
                <div className="badge-cert__corps">
                  <p className="badge-cert__nom">{c.nom}</p>
                  <p className="muted">{c.organisme} · {c.date}</p>
                  {c.lien && (
                    <a className="badge-cert__lien" href={c.lien} target="_blank" rel="noopener noreferrer">
                      Vérifier <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <h3 className="autres-certs__titre reveal">Autres certifications et formations</h3>
          <ul className="autres-certs reveal">
            {autres.map((c) => (
              <li key={c.nom}>
                <span className="autres-certs__icone" aria-hidden="true">
                  <Icone><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z" /><path d="M9 12l2 2 4-4" /></Icone>
                </span>
                <div>
                  <p className="autres-certs__nom">{c.nom}</p>
                  {c.organisme && <p className="muted">{c.organisme} · {c.date}</p>}
                  {c.lien && (
                    <a className="badge-cert__lien" href={c.lien} target="_blank" rel="noopener noreferrer">
                      Vérifier <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="apropos-cta reveal">
            <div>
              <h2>Travaillons ensemble</h2>
              <p>Un poste, un projet informatique ou IA, une prestation photo : parlons-en.</p>
            </div>
            <div className="apropos-cta__actions">
              <Link to="/contact" className="btn btn--light">Me contacter</Link>
              <Link to="/informatique" className="btn btn--ghost-clair">Voir mes compétences</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
