import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";

// À FAIRE : remplacer par votre parcours réel (aucun diplôme ni expérience inventés).
const parcours = [
  { periode: "À compléter", titre: "Expérience professionnelle", lieu: "Entreprise", texte: "Missions principales." },
  { periode: "À compléter", titre: "BTS Informatique Développeur d'Applications", lieu: "Établissement", texte: "" },
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
            width="320"
            height="400"
          />
          <div>
            <h2>Qui suis-je ?</h2>
            <p>
              Technicien supérieur en informatique, titulaire d'un BTS Informatique Développeur
              d'Applications, avec plus de quatre ans d'expérience. À compléter : vos objectifs
              professionnels et votre intérêt pour les technologies et la création visuelle.
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
            {parcours.map((e, i) => (
              <li key={i}>
                <p className="timeline__periode">{e.periode}</p>
                <h3>{e.titre}</h3>
                <p className="muted">{e.lieu}</p>
                {e.texte && <p>{e.texte}</p>}
              </li>
            ))}
          </ol>
          <p className="section__more">
            <Link to="/informatique">Voir le détail de mes compétences →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
