import { Link } from "react-router-dom";
import { skillGroups } from "../data/skills.js";
import { visibleProjects } from "../data/projects.js";
import { realisations, chiffresCles } from "../data/realisations.js";
import { casIA } from "../data/ia.js";
import SkillCard from "../components/SkillCard.jsx";
import { useApparition } from "../hooks/useApparition.js";
import "./Informatique.css";
import { useDescription } from "../hooks/useDescription.js";

const Icone = ({ children }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">{children}</svg>
);

const icones = {
  projets: (
    <Icone>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 14l2 2 4-4" />
    </Icone>
  ),
  dev: (
    <Icone>
      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
    </Icone>
  ),
  reseaux: (
    <Icone>
      <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </Icone>
  ),
  ia: (
    <Icone>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M10 10h4v4h-4zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </Icone>
  ),
  support: (
    <Icone>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </Icone>
  ),
};

// Démarche tirée de la présentation : besoins, conception, déploiement, suivi.
const etapes = [
  { titre: "Comprendre le besoin", texte: "Écouter les utilisateurs et identifier ce qui doit être simplifié ou automatisé." },
  { titre: "Concevoir la solution", texte: "Choisir les bons outils, y compris l'IA, et construire une application adaptée." },
  { titre: "Déployer", texte: "Installer la solution dans les services et former les utilisateurs." },
  { titre: "Suivre et améliorer", texte: "Assurer le support, la sécurité et l'évolution de la solution dans le temps." },
];

const technologies = [...new Set(visibleProjects.flatMap((p) => p.technologies))];
const nbCompetences = skillGroups.reduce((n, g) => n + g.competences.length, 0);

export default function Informatique() {
  useDescription(
    "Compétences informatiques de Kouakou Kouadio Franck : support utilisateurs, maintenance, systèmes et réseaux, développement d'applications web et intelligence artificielle."
  );
  useApparition();

  return (
    <>
      <title>Compétences informatiques — Kouakou Kouadio Franck</title>

      <section className="entete-sombre">
        <div className="entete-sombre__fond" aria-hidden="true">
          <span className="entete-sombre__halo entete-sombre__halo--1" />
          <span className="entete-sombre__halo entete-sombre__halo--2" />
        </div>
        <div className="container">
          <p className="entete-sombre__eyebrow entree">Informatique</p>
          <h1 className="entree" style={{ "--d": 1 }}>Mes compétences</h1>
          <p className="entete-sombre__intro entree" style={{ "--d": 2 }}>
            Technicien supérieur en informatique, titulaire d'un BTS Informatique option
            Développement d'Applications, en poste depuis août 2023 à la Mairie de Port-Bouët.
          </p>
          <ul className="entete-sombre__puces entree" style={{ "--d": 3 }}>
            <li><strong>{skillGroups.length}</strong> domaines</li>
            <li><strong>{nbCompetences}</strong> compétences</li>
            <li><strong>{technologies.length}</strong> technologies utilisées en projet</li>
          </ul>
          <nav className="info-hero__ancres entree" style={{ "--d": 4 }} aria-label="Domaines de compétences">
            {skillGroups.map((g) => (
              <a key={g.id} href={`#${g.id}`}>{g.titre}</a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sr-only">Mes compétences par domaine</h2>
          <div className="competences">
            {skillGroups.map((g) => (
              <div key={g.id} id={g.id} className="competences__groupe reveal">
                <SkillCard {...g} icone={icones[g.id]} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {realisations.length > 0 && (
        <section className="section section--alt" id="realisations">
          <div className="container">
            <h2 className="reveal">Réalisations en support et réseaux</h2>
            <p className="muted reveal">Des interventions concrètes menées sur le terrain.</p>
            {chiffresCles.length > 0 && (
              <ul className="realisations__chiffres reveal">
                {chiffresCles.map((c) => (
                  <li key={c.libelle}><strong>{c.valeur}</strong><span>{c.libelle}</span></li>
                ))}
              </ul>
            )}
            <div className="grid grid--2">
              {realisations.map((r, i) => (
                <article key={r.titre} className="card realisation reveal" style={{ "--d": i % 2 }}>
                  {r.image && <img src={r.image} alt="" loading="lazy" />}
                  <h3>{r.titre}</h3>
                  <dl>
                    {r.contexte && (<><dt>Contexte</dt><dd>{r.contexte}</dd></>)}
                    {r.actions?.length > 0 && (
                      <>
                        <dt>Actions</dt>
                        <dd><ul>{r.actions.map((a) => <li key={a}>{a}</li>)}</ul></dd>
                      </>
                    )}
                    {r.resultat && (<><dt>Résultat</dt><dd>{r.resultat}</dd></>)}
                  </dl>
                  {r.outils?.length > 0 && (
                    <ul className="realisation__outils">
                      {r.outils.map((o) => <li key={o}>{o}</li>)}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {technologies.length > 0 && (
        <section className="section section--alt info-technos">
          <div className="container">
            <h2 className="reveal">Technologies utilisées dans mes projets</h2>
            <p className="muted reveal">Langages, frameworks et outils présents dans les projets de ce portfolio.</p>
          </div>
          <div className="defilant reveal">
            <ul className="defilant__piste">
              {technologies.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <ul className="defilant__piste" aria-hidden="true">
              {technologies.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </section>
      )}

      {casIA.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="reveal">L'IA dans mon travail</h2>
            <p className="muted reveal">Comment j'utilise l'intelligence artificielle au quotidien, avec relecture et contrôle humain.</p>
            <div className="grid grid--3">
              {casIA.map((c, i) => (
                <article key={c.titre} className="card cas-ia reveal" style={{ "--d": i % 3 }}>
                  <span className="cas-ia__icone">{icones.ia}</span>
                  <h3>{c.titre}</h3>
                  <p>{c.texte}</p>
                  {c.gain && <p className="cas-ia__gain">{c.gain}</p>}
                  {c.outils?.length > 0 && (
                    <ul className="realisation__outils">
                      {c.outils.map((o) => <li key={o}>{o}</li>)}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <h2 className="reveal">Ma façon de travailler</h2>
          <ol className="etapes reveal">
            {etapes.map((e, i) => (
              <li key={e.titre} className="etape">
                <span className="etape__numero" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3>{e.titre}</h3>
                <p>{e.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="bandeau-cta reveal">
            <div>
              <h2>Ces compétences en action</h2>
              <p>Découvrez les logiciels que j'ai conçus et déployés.</p>
            </div>
            <div className="bandeau-cta__actions">
              <Link to="/projets" className="btn btn--light">Voir mes projets</Link>
              <Link to="/contact" className="btn btn--ghost-clair">Me contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
