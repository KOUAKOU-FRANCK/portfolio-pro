import { Link } from "react-router-dom";
import { profile, whatsappLink } from "../data/profile.js";
import "./Footer.css";

const pages = [
  { to: "/informatique", label: "Informatique" },
  { to: "/projets", label: "Projets" },
  { to: "/photographie", label: "Photographie" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

const Icone = ({ children }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">{children}</svg>
);

const reseaux = [
  profile.linkedin && {
    nom: "LinkedIn",
    href: profile.linkedin,
    icone: (
      <Icone>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
      </Icone>
    ),
  },
  profile.github && {
    nom: "GitHub",
    href: profile.github,
    icone: (
      <Icone>
        <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
      </Icone>
    ),
  },
  profile.whatsapp && {
    nom: "WhatsApp",
    href: whatsappLink("Bonjour Franck, je vous contacte depuis votre portfolio."),
    icone: (
      <Icone>
        <path d="M4 20l1.3-3.9A8 8 0 1 1 8 18.8z" />
      </Icone>
    ),
  },
].filter(Boolean);

export default function Footer() {
  const remonter = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer__fond" aria-hidden="true" />
      <div className="container">
        <div className="footer__appel">
          <p className="footer__appel-texte">
            Un projet, une opportunité ou un événement&nbsp;? <span>Parlons-en.</span>
          </p>
          <Link to="/contact" className="footer__appel-bouton">
            Me contacter <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="footer__grille">
          <div className="footer__identite">
            <Link to="/" className="footer__marque">
              <img src="/images/portrait.webp" alt="" width="44" height="44" />
              <span>{profile.nom}</span>
            </Link>
            <p>{profile.accroche}.</p>
            <ul className="footer__reseaux" aria-label="Réseaux">
              {reseaux.map((r) => (
                <li key={r.nom}>
                  <a href={r.href} target="_blank" rel="noopener noreferrer" aria-label={r.nom} title={r.nom}>
                    {r.icone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="footer__colonne" aria-label="Pages du site">
            <p className="footer__titre">Navigation</p>
            <ul>
              {pages.map((p) => (
                <li key={p.to}><Link to={p.to}>{p.label}</Link></li>
              ))}
            </ul>
          </nav>

          <div className="footer__colonne">
            <p className="footer__titre">Contact</p>
            <ul>
              {profile.email && <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>}
              {profile.whatsapp && (
                <li>
                  <a href={whatsappLink("Bonjour Franck, je vous contacte depuis votre portfolio.")} target="_blank" rel="noopener noreferrer">
                    Écrire sur WhatsApp
                  </a>
                </li>
              )}
              <li className="footer__lieu">Abidjan, Côte d'Ivoire</li>
            </ul>
          </div>

          <div className="footer__colonne">
            <p className="footer__titre">Mon CV</p>
            <p className="footer__cv-texte">Parcours, formation et certifications.</p>
            <a href={profile.cv} className="footer__cv" download>
              Télécharger le CV (PDF)
            </a>
          </div>
        </div>

        <div className="footer__bas">
          <p>© {new Date().getFullYear()} {profile.nom}. Tous droits réservés.</p>
          <button type="button" className="footer__haut" onClick={remonter}>
            Retour en haut <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
