import { useState } from "react";
import { Link } from "react-router-dom";
import { categories, photosPubliees, prestations, infosPratiques, formules } from "../data/photos.js";
import { whatsappLink } from "../data/profile.js";
import PhotoGallery from "../components/PhotoGallery.jsx";
import { useApparition } from "../hooks/useApparition.js";
import "./Photographie.css";
import { useDescription } from "../hooks/useDescription.js";

const aCompleter = (texte) => !texte || texte.startsWith("À compléter");

// Seules les catégories qui contiennent des photos sont proposées en filtre.
const categoriesPubliees = categories.filter((c) => photosPubliees.some((p) => p.categorie === c));
const photoEntete = photosPubliees.find((p) => p.vedette) ?? photosPubliees[0];
const messagePrestation = "Bonjour Franck, je souhaite réserver une prestation photo pour un événement.";

const Icone = ({ children }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">{children}</svg>
);
const iconesPrestations = [
  <Icone key="1"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" /></Icone>,
  <Icone key="2"><path d="M5 21h14M7 21V11h10v10M12 11V8M12 8c-1 0-1.5-1-1.5-2S12 3 12 3s1.5 2 1.5 3-.5 2-1.5 2z" /></Icone>,
  <Icone key="3"><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></Icone>,
];

export default function Photographie() {
  useDescription(
    "Photographe événementiel à Abidjan : mariages, anniversaires, cérémonies, portraits et reportages. Galerie et demande de prestation."
  );
  const [categorie, setCategorie] = useState("Toutes");
  useApparition([categorie]);
  const filtrees = categorie === "Toutes" ? photosPubliees : photosPubliees.filter((p) => p.categorie === categorie);
  const infos = [
    { libelle: "Zone", valeur: infosPratiques.zone },
    { libelle: "Délai", valeur: infosPratiques.delai },
    { libelle: "Livraison", valeur: infosPratiques.livraison },
  ].filter((i) => !aCompleter(i.valeur));

  return (
    <div className="theme-photo">
      <title>Photographie événementielle — Kouakou Kouadio Franck</title>

      <section className="photo-hero">
        {photoEntete && (
          <img className="photo-hero__image" src={photoEntete.src} alt="" width={photoEntete.largeur} height={photoEntete.hauteur} />
        )}
        <div className="container photo-hero__contenu">
          <p className="photo-hero__eyebrow entree">Photographie événementielle</p>
          <h1 className="entree" style={{ "--d": 1 }}>Immortaliser vos moments importants</h1>
          <p className="photo-hero__intro entree" style={{ "--d": 2 }}>
            Mariages, anniversaires, cérémonies, portraits et reportages : des images qui racontent
            vos plus beaux souvenirs.
          </p>
          <div className="photo-hero__actions entree" style={{ "--d": 3 }}>
            <a href="#galerie" className="btn btn--light">Voir la galerie</a>
            <a href={whatsappLink(messagePrestation)} className="btn btn--ghost-clair" target="_blank" rel="noopener noreferrer">
              Demander une prestation
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="galerie">
        <div className="container">
          <div className="photo-galerie__entete reveal">
            <h2>Galerie</h2>
            {categoriesPubliees.length > 1 && (
              <div className="filters" role="group" aria-label="Filtrer par catégorie">
                {["Toutes", ...categoriesPubliees].map((c) => (
                  <button
                    key={c}
                    type="button"
                    className="filter"
                    aria-pressed={categorie === c}
                    onClick={() => setCategorie(c)}
                  >
                    {c}
                    <span className="filter__nombre">
                      {c === "Toutes" ? photosPubliees.length : photosPubliees.filter((p) => p.categorie === c).length}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="reveal" key={categorie}>
            <PhotoGallery photos={filtrees} variante="mosaique" />
          </div>
        </div>
      </section>

      <section className="section photo-prestations">
        <div className="container">
          <h2 className="reveal">Mes prestations</h2>
          <ul className="prestations reveal">
            {prestations.map((p, i) => (
              <li key={p.titre} className="prestation">
                <span className="prestation__icone">{iconesPrestations[i % iconesPrestations.length]}</span>
                <h3>{p.titre}</h3>
                {!aCompleter(p.texte) && <p>{p.texte}</p>}
              </li>
            ))}
          </ul>
          {infos.length > 0 && (
            <dl className="infos reveal">
              {infos.map((i) => (
                <div key={i.libelle}><dt>{i.libelle}</dt><dd>{i.valeur}</dd></div>
              ))}
            </dl>
          )}
        </div>
      </section>

      {formules.length > 0 && (
        <section className="section photo-formules">
          <div className="container">
            <h2 className="reveal">Formules</h2>
            <p className="photo-formules__note reveal">Prix indicatifs, ajustés selon la durée et le lieu de l'événement.</p>
            <ul className="formules reveal">
              {formules.map((f) => (
                <li key={f.nom} className="formule">
                  <h3>{f.nom}</h3>
                  {f.prix && <p className="formule__prix">{f.prix}</p>}
                  {f.inclus?.length > 0 && (
                    <ul className="formule__inclus">
                      {f.inclus.map((x) => <li key={x}>{x}</li>)}
                    </ul>
                  )}
                  <a
                    href={whatsappLink(`Bonjour Franck, je souhaite un devis pour la formule « ${f.nom} ».`)}
                    className="btn btn--light"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demander un devis
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="photo-cta reveal">
            <div>
              <h2>Un événement à immortaliser ?</h2>
              <p>Parlez-moi de votre date, du lieu et de vos envies.</p>
            </div>
            <div className="photo-cta__actions">
              <a href={whatsappLink(messagePrestation)} className="btn btn--light" target="_blank" rel="noopener noreferrer">
                Écrire sur WhatsApp
              </a>
              <Link to="/contact" className="btn btn--ghost-clair">Autres moyens de contact</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
