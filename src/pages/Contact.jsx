import { useState } from "react";
import { profile, whatsappLink } from "../data/profile.js";
import { useApparition } from "../hooks/useApparition.js";
import "./Contact.css";

// Pas de formulaire avec envoi en V1 : aucun service d'envoi n'est connecté,
// et le cahier des charges interdit de simuler un envoi réussi.
// Le message rapide ouvre WhatsApp ou la messagerie du visiteur, déjà rempli.

const sujets = [
  { id: "recrutement", libelle: "Recrutement", message: "Bonjour Franck, je vous contacte au sujet d'une opportunité professionnelle." },
  { id: "projet", libelle: "Projet informatique ou IA", message: "Bonjour Franck, j'ai un projet informatique (application, IA ou automatisation) dont j'aimerais vous parler." },
  { id: "photo", libelle: "Prestation photo", message: "Bonjour Franck, je souhaite réserver une prestation de photographie pour un événement." },
  { id: "autre", libelle: "Autre demande", message: "Bonjour Franck, je vous contacte depuis votre portfolio." },
];

const mailto = (objet, corps) =>
  `mailto:${profile.email}?subject=${encodeURIComponent(objet)}&body=${encodeURIComponent(corps)}`;

const Icone = ({ children }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">{children}</svg>
);
const icones = {
  email: (
    <Icone>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </Icone>
  ),
  whatsapp: (
    <Icone>
      <path d="M4 20l1.3-3.9A8 8 0 1 1 8 18.8z" />
      <path d="M9 9.5c.5 2.2 2.3 4 4.5 4.5l1.2-1.2 1.8.8v1.6c-4 .4-8.6-4.2-8.2-8.2h1.6l.8 1.8z" />
    </Icone>
  ),
  linkedin: (
    <Icone>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </Icone>
  ),
  github: (
    <Icone>
      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
    </Icone>
  ),
};

function CarteEmail() {
  const [copie, setCopie] = useState(false);
  const copier = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopie(true);
      setTimeout(() => setCopie(false), 2000);
    } catch {
      setCopie(false);
    }
  };
  return (
    <li className="canal canal--email">
      <span className="canal__icone">{icones.email}</span>
      <p className="canal__libelle">E-mail</p>
      <a className="canal__valeur" href={`mailto:${profile.email}`}>{profile.email}</a>
      <button type="button" className="canal__copier" onClick={copier}>
        {copie ? "Adresse copiée ✓" : "Copier l'adresse"}
      </button>
      <span className="canal__statut" role="status">{copie ? "Adresse e-mail copiée" : ""}</span>
    </li>
  );
}

export default function Contact() {
  useApparition();
  const [sujet, setSujet] = useState(sujets[0]);
  const [message, setMessage] = useState(sujets[0].message);

  const choisir = (s) => {
    setSujet(s);
    setMessage(s.message);
  };

  const canaux = [
    profile.whatsapp && {
      id: "whatsapp",
      libelle: "WhatsApp",
      valeur: "Écrire sur WhatsApp",
      href: whatsappLink("Bonjour Franck, je vous contacte depuis votre portfolio."),
    },
    profile.linkedin && { id: "linkedin", libelle: "LinkedIn", valeur: "Voir mon profil", href: profile.linkedin },
    profile.github && { id: "github", libelle: "GitHub", valeur: "Voir mes dépôts", href: profile.github },
  ].filter(Boolean);

  return (
    <>
      <title>Contact — Kouakou Kouadio Franck</title>

      <section className="contact-hero">
        <div className="contact-hero__fond" aria-hidden="true">
          <span className="contact-hero__halo contact-hero__halo--1" />
          <span className="contact-hero__halo contact-hero__halo--2" />
        </div>
        <div className="container contact-hero__inner">
          <picture className="contact-hero__avatar entree entree--zoom">
            <source srcSet="/images/portrait.webp" type="image/webp" />
            <img src={profile.portrait} alt="" width="800" height="1001" />
          </picture>
          <p className="contact-hero__eyebrow entree" style={{ "--d": 1 }}>
            <span className="contact-hero__point" aria-hidden="true" />
            Abidjan, Côte d'Ivoire
          </p>
          <h1 className="entree" style={{ "--d": 2 }}>Parlons de votre projet</h1>
          <p className="contact-hero__intro entree" style={{ "--d": 3 }}>
            Recruteurs, entreprises, particuliers : pour une opportunité, une collaboration ou une
            prestation photo, écrivez-moi directement.
          </p>
        </div>
      </section>

      <section className="section contact-canaux">
        <div className="container">
          <ul className="canaux reveal">
            {profile.email && <CarteEmail />}
            {canaux.map((c) => (
              <li key={c.id} className={`canal canal--${c.id}`}>
                <span className="canal__icone">{icones[c.id]}</span>
                <p className="canal__libelle">{c.libelle}</p>
                <a className="canal__valeur canal__lien" href={c.href} target="_blank" rel="noopener noreferrer">
                  {c.valeur} <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container message-rapide reveal">
          <div className="message-rapide__intro">
            <h2>Message rapide</h2>
            <p>
              Choisissez l'objet de votre demande, ajustez le message si besoin, puis envoyez-le
              avec l'application de votre choix.
            </p>
          </div>

          <form className="message-rapide__form" onSubmit={(e) => e.preventDefault()}>
            <fieldset className="sujets">
              <legend>Objet de votre demande</legend>
              {sujets.map((s) => (
                <label key={s.id} className={`sujet${s.id === sujet.id ? " is-actif" : ""}`}>
                  <input
                    type="radio"
                    name="sujet"
                    value={s.id}
                    checked={s.id === sujet.id}
                    onChange={() => choisir(s)}
                  />
                  {s.libelle}
                </label>
              ))}
            </fieldset>

            <label className="message-rapide__label" htmlFor="message">Votre message</label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div className="message-rapide__actions">
              {profile.whatsapp && (
                <a
                  className="btn btn--whatsapp"
                  href={whatsappLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Envoyer sur WhatsApp
                </a>
              )}
              {profile.email && (
                <a className="btn btn--primary" href={mailto(`${sujet.libelle} — depuis votre portfolio`, message)}>
                  Envoyer par e-mail
                </a>
              )}
            </div>
            <p className="message-rapide__note">
              Ces boutons ouvrent WhatsApp ou votre messagerie avec le message déjà rempli : rien
              n'est envoyé tant que vous ne l'avez pas validé.
            </p>
          </form>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-cv reveal">
            <div>
              <h2>Mon CV</h2>
              <p>Mon parcours, ma formation et mes certifications en un document.</p>
            </div>
            <a href={profile.cv} className="btn btn--primary" download>
              Télécharger mon CV (PDF)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
