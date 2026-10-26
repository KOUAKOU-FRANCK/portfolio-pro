import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";
import { visibleProjects } from "../data/projects.js";
import { photosPubliees } from "../data/photos.js";
import { temoignages } from "../data/temoignages.js";
import ProjectCard from "../components/ProjectCard.jsx";
import PhotoGallery from "../components/PhotoGallery.jsx";
import "./Accueil.css";
import { useApparition, mouvementReduit } from "../hooks/useApparition.js";

// Nombre qui défile de 0 à sa valeur quand il devient visible.
function Compteur({ valeur }) {
  const ref = useRef(null);
  const [affiche, setAffiche] = useState(valeur);
  useEffect(() => {
    if (!("IntersectionObserver" in window) || mouvementReduit()) return;
    setAffiche(0);
    const observer = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      observer.disconnect();
      const debut = performance.now();
      const etape = (t) => {
        const p = Math.min((t - debut) / 1200, 1);
        setAffiche(Math.round(valeur * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(etape);
      };
      requestAnimationFrame(etape);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [valeur]);
  return <span ref={ref}>{affiche}</span>;
}

const IconeCode = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></svg>
);
const IconeAppareil = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
);

export default function Accueil() {
  useApparition();
  const projetsVedette = visibleProjects.filter((p) => p.vedette).slice(0, 3);
  const photosVedette = photosPubliees.filter((p) => p.vedette).slice(0, 6);
  const domaines = profile.domaines.split(" · ");

  return (
    <>
      <section className="hero accueil-hero">
        <div className="accueil-hero__fond" aria-hidden="true">
          <span className="accueil-hero__halo accueil-hero__halo--1" />
          <span className="accueil-hero__halo accueil-hero__halo--2" />
          <span className="accueil-hero__halo accueil-hero__halo--3" />
        </div>
        <div className="container accueil-hero__grille">
          <div className="accueil-hero__texte">
            <p className="hero__eyebrow entree" style={{ "--d": 0 }}>
              <span className="accueil-hero__point" aria-hidden="true" />
              Portfolio · Abidjan, Côte d'Ivoire
            </p>
            {profile.disponibilite && (
              <p className="accueil-dispo entree" style={{ "--d": 0.5 }}>
                <span className="accueil-dispo__point" aria-hidden="true" />
                {profile.disponibilite}
              </p>
            )}
            <h1 className="entree" style={{ "--d": 1 }}>{profile.nom}</h1>
            <p className="hero__accroche accueil-hero__accroche entree" style={{ "--d": 2 }}>
              {profile.accroche}
            </p>
            <ul className="accueil-hero__domaines" aria-label="Domaines d'expertise">
              {domaines.map((d, i) => (
                <li key={d} className="entree" style={{ "--d": 3 + i * 0.5 }}>{d}</li>
              ))}
            </ul>
            <p className="hero__intro entree" style={{ "--d": 5 }}>{profile.introduction}</p>
            <div className="hero__actions entree" style={{ "--d": 6 }}>
              <Link to="/informatique" className="btn btn--primary accueil-btn">
                Découvrir mes compétences <span aria-hidden="true">→</span>
              </Link>
              <Link to="/photographie" className="btn btn--light">
                Voir mes photographies
              </Link>
            </div>
          </div>

          <div className="accueil-portrait entree entree--zoom" style={{ "--d": 2 }}>
            <div className="accueil-portrait__anneau" aria-hidden="true" />
            <picture>
              <source srcSet="/images/portrait.webp" type="image/webp" />
              <img
                src={profile.portrait}
                alt={`Portrait de ${profile.nom}`}
                width="800"
                height="1001"
                fetchPriority="high"
              />
            </picture>
            <p className="accueil-portrait__badge accueil-portrait__badge--haut">
              <strong>6</strong> certifications IA
            </p>
            <p className="accueil-portrait__badge accueil-portrait__badge--bas">
              Mairie de Port-Bouët <span>depuis 2023</span>
            </p>
          </div>
        </div>
      </section>

      <section className="accueil-chiffres" aria-label="En quelques chiffres">
        <div className="container">
          <ul className="accueil-chiffres__liste reveal">
            <li>
              <strong>2023</strong>
              <span className="accueil-chiffres__libelle">en poste à la Mairie de Port-Bouët</span>
            </li>
            <li>
              <strong><Compteur valeur={6} /></strong>
              <span className="accueil-chiffres__libelle">certifications Claude Academy</span>
            </li>
            <li>
              <strong><Compteur valeur={visibleProjects.length} /></strong>
              <span className="accueil-chiffres__libelle">projets présentés</span>
            </li>
            <li>
              <strong><Compteur valeur={domaines.length} /></strong>
              <span className="accueil-chiffres__libelle">domaines d'expertise</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="reveal">Deux domaines d'activité</h2>
          <div className="grid grid--2 reveal">
            <article className="card domain-card accueil-carte">
              <span className="accueil-carte__icone"><IconeCode /></span>
              <h3>Informatique</h3>
              <p>
                Support et assistance aux utilisateurs, maintenance et gestion de parc, systèmes et
                réseaux, développement d'applications web et bases de données.
              </p>
              <Link to="/informatique">Voir mes compétences →</Link>
            </article>
            <article className="card domain-card domain-card--photo accueil-carte">
              <span className="accueil-carte__icone"><IconeAppareil /></span>
              <h3>Photographie événementielle</h3>
              <p>
                Mariages, anniversaires, cérémonies, portraits et reportages : des images pour
                immortaliser les moments importants.
              </p>
              <Link to="/photographie">Voir la galerie →</Link>
            </article>
          </div>
        </div>
      </section>

      {projetsVedette.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <div className="section__header reveal">
              <h2>Projets informatiques</h2>
              <Link to="/projets">Tous les projets →</Link>
            </div>
            <div className="grid grid--3">
              {projetsVedette.map((p, i) => (
                <div key={p.id} className="reveal accueil-projet" style={{ "--d": i }}>
                  <ProjectCard project={p} compact />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="section__header reveal">
            <h2>Sélection de photographies</h2>
            <Link to="/photographie">Toute la galerie →</Link>
          </div>
          <div className="reveal">
            <PhotoGallery photos={photosVedette} />
          </div>
        </div>
      </section>

      {temoignages.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <h2 className="reveal">Ils m'ont fait confiance</h2>
            <div className="grid grid--3">
              {temoignages.map((t, i) => (
                <figure key={t.auteur + i} className="card temoignage reveal" style={{ "--d": i }}>
                  <span className="badge badge--info">{t.domaine === "photo" ? "Photographie" : "Informatique"}</span>
                  <blockquote>« {t.texte} »</blockquote>
                  <figcaption>
                    <strong>{t.auteur}</strong>
                    {t.role && <span>{t.role}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`section${temoignages.length > 0 ? "" : " section--alt"}`}>
        <div className="container cta reveal">
          <h2>Mon CV</h2>
          <p>Retrouvez mon parcours, ma formation et mes expériences.</p>
          <a href={profile.cv} className="btn btn--primary" download>
            Télécharger mon CV (PDF)
          </a>
        </div>
      </section>
    </>
  );
}
