import { useState } from "react";
import { categories, photos, prestations, infosPratiques } from "../data/photos.js";
import PhotoGallery from "../components/PhotoGallery.jsx";
import ContactLinks from "../components/ContactLinks.jsx";

export default function Photographie() {
  const [categorie, setCategorie] = useState("Toutes");
  const filtrees = categorie === "Toutes" ? photos : photos.filter((p) => p.categorie === categorie);

  return (
    <div className="theme-photo">
      <title>Photographie événementielle — Kouakou Kouadio Franck</title>
      <section className="page-header">
        <div className="container">
          <h1>Photographie événementielle</h1>
          <p>
            Mariages, anniversaires, cérémonies, portraits et reportages. À compléter : présentez ici
            votre approche et votre activité de photographe.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Galerie</h2>
          <div className="filters" role="group" aria-label="Filtrer par catégorie">
            {["Toutes", ...categories].map((c) => (
              <button
                key={c}
                type="button"
                className="filter"
                aria-pressed={categorie === c}
                onClick={() => setCategorie(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <PhotoGallery key={categorie} photos={filtrees} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Mes prestations</h2>
          <div className="grid grid--3">
            {prestations.map((p) => (
              <article key={p.titre} className="card">
                <h3>{p.titre}</h3>
                <p>{p.texte}</p>
              </article>
            ))}
          </div>
          <dl className="infos">
            <div><dt>Zone</dt><dd>{infosPratiques.zone}</dd></div>
            <div><dt>Délai</dt><dd>{infosPratiques.delai}</dd></div>
            <div><dt>Livraison</dt><dd>{infosPratiques.livraison}</dd></div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container cta">
          <h2>Un événement à immortaliser ?</h2>
          <p>Contactez-moi pour une demande de prestation.</p>
          <ContactLinks message="Bonjour, je souhaite une prestation photo pour un événement." />
        </div>
      </section>
    </div>
  );
}
