import { useState } from "react";
import { Link } from "react-router-dom";
import { visibleProjects } from "../data/projects.js";
import { useApparition } from "../hooks/useApparition.js";
import "./Projets.css";
import { useDescription } from "../hooks/useDescription.js";

const statutClasse = {
  "terminé": "badge--success",
  "en cours": "badge--warning",
  prototype: "badge--info",
};

const filtres = [
  { id: "tous", libelle: "Tous" },
  { id: "terminé", libelle: "Terminés" },
  { id: "en cours", libelle: "En cours" },
  { id: "prototype", libelle: "Prototypes" },
].filter((f) => f.id === "tous" || visibleProjects.some((p) => p.statut === f.id));

const technologies = new Set(visibleProjects.flatMap((p) => p.technologies));

function Projet({ projet, numero }) {
  const { nom, image, probleme, objectifs, fonctionnalites, technologies, role, statut, demo, github } = projet;
  return (
    <article className="projet reveal">
      <div className="projet__visuel">
        <div className="projet__fenetre">
          <div className="projet__barre" aria-hidden="true">
            <span /><span /><span />
          </div>
          <img src={image} alt={`Capture d'écran du projet ${nom}`} width="1200" height="565" loading="lazy" />
        </div>
      </div>

      <div className="projet__contenu">
        <div className="projet__entete">
          <span className="projet__numero" aria-hidden="true">{String(numero).padStart(2, "0")}</span>
          <span className={`badge ${statutClasse[statut] ?? ""}`}>{statut}</span>
        </div>
        <h2>{nom}</h2>
        <p className="projet__probleme">{probleme}</p>

        <div className="projet__colonnes">
          <div>
            <h3>Objectifs</h3>
            <ul className="projet__liste">
              {objectifs.map((o) => <li key={o}>{o}</li>)}
            </ul>
          </div>
          <div>
            <h3>Fonctionnalités</h3>
            <ul className="projet__liste">
              {fonctionnalites.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </div>

        <p className="projet__role">
          <span>Mon rôle</span> {role}
        </p>

        <ul className="tags" aria-label="Technologies utilisées">
          {technologies.map((t) => <li key={t}>{t}</li>)}
        </ul>

        {(demo || github) && (
          <div className="projet__actions">
            {demo && (
              <a className="btn btn--primary" href={demo} target="_blank" rel="noopener noreferrer">
                Voir la démo
              </a>
            )}
            {github && (
              <a className="btn btn--ghost" href={github} target="_blank" rel="noopener noreferrer">
                Code sur GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projets() {
  useDescription(
    "Projets informatiques de Kouakou Kouadio Franck : applications web conçues et déployées, avec leurs objectifs, fonctionnalités et technologies."
  );
  const [filtre, setFiltre] = useState("tous");
  useApparition([filtre]);
  const projets = filtre === "tous" ? visibleProjects : visibleProjects.filter((p) => p.statut === filtre);
  const termines = visibleProjects.filter((p) => p.statut === "terminé").length;

  return (
    <>
      <title>Projets informatiques — Kouakou Kouadio Franck</title>

      <section className="entete-sombre">
        <div className="entete-sombre__fond" aria-hidden="true">
          <span className="entete-sombre__halo entete-sombre__halo--1" />
          <span className="entete-sombre__halo entete-sombre__halo--2" />
        </div>
        <div className="container">
          <p className="entete-sombre__eyebrow entree">Projets informatiques</p>
          <h1 className="entree" style={{ "--d": 1 }}>Mes réalisations</h1>
          <p className="entete-sombre__intro entree" style={{ "--d": 2 }}>
            Des logiciels conçus pour répondre à de vrais besoins : objectifs, fonctionnalités et
            technologies utilisées pour chaque projet.
          </p>
          <ul className="entete-sombre__puces entree" style={{ "--d": 3 }}>
            <li><strong>{visibleProjects.length}</strong> projets</li>
            <li><strong>{termines}</strong> terminés</li>
            <li><strong>{technologies.size}</strong> technologies</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {visibleProjects.length > 0 ? (
            <>
              {filtres.length > 2 && (
                <div className="projets-filtres" role="group" aria-label="Filtrer les projets">
                  {filtres.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      className={`projets-filtres__bouton${filtre === f.id ? " is-actif" : ""}`}
                      aria-pressed={filtre === f.id}
                      onClick={() => setFiltre(f.id)}
                    >
                      {f.libelle}
                    </button>
                  ))}
                </div>
              )}
              <div className="projets-liste">
                {projets.map((p) => (
                  <Projet key={p.id} projet={p} numero={visibleProjects.indexOf(p) + 1} />
                ))}
              </div>
            </>
          ) : (
            <p className="muted">Les fiches de projets sont en cours de rédaction.</p>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="bandeau-cta reveal">
            <div>
              <h2>Un projet en tête ?</h2>
              <p>Application, automatisation ou intégration de l'IA : parlons de vos besoins.</p>
            </div>
            <Link to="/contact" className="btn btn--light">Me contacter</Link>
          </div>
        </div>
      </section>
    </>
  );
}
