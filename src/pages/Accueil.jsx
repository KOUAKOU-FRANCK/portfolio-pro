import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";
import { visibleProjects } from "../data/projects.js";
import { photos } from "../data/photos.js";
import ProjectCard from "../components/ProjectCard.jsx";
import PhotoGallery from "../components/PhotoGallery.jsx";

export default function Accueil() {
  const projetsVedette = visibleProjects.filter((p) => p.vedette).slice(0, 3);
  const photosVedette = photos.filter((p) => p.vedette).slice(0, 6);

  return (
    <>
      <title>Kouakou Kouadio Franck — Informatique & Photographie</title>

      <section className="hero">
        <div className="container hero__inner">
          <p className="hero__eyebrow">Portfolio</p>
          <h1 className="texte-degrade">{profile.nom}</h1>
          <p className="hero__title">{profile.titre}</p>
          <p className="hero__intro">{profile.introduction}</p>
          <div className="hero__actions">
            <Link to="/informatique" className="btn btn--primary">
              Découvrir mes compétences
            </Link>
            <Link to="/photographie" className="btn btn--light">
              Voir mes photographies
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Deux domaines d'activité</h2>
          <div className="grid grid--2">
            <article className="card domain-card">
              <h3>Informatique</h3>
              <p>
                Support et assistance aux utilisateurs, maintenance et gestion de parc, systèmes et
                réseaux, développement d'applications web et bases de données.
              </p>
              <Link to="/informatique">Voir mes compétences →</Link>
            </article>
            <article className="card domain-card domain-card--photo">
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
            <div className="section__header">
              <h2>Projets informatiques</h2>
              <Link to="/projets">Tous les projets →</Link>
            </div>
            <div className="grid grid--3">
              {projetsVedette.map((p) => (
                <ProjectCard key={p.id} project={p} compact />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2>Sélection de photographies</h2>
            <Link to="/photographie">Toute la galerie →</Link>
          </div>
          <PhotoGallery photos={photosVedette} />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container cta">
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
