import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";
import ContactLinks from "./ContactLinks.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{profile.nom}</p>
          <p>{profile.titre}</p>
          <p>
            <a href={profile.cv} download>
              Télécharger mon CV (PDF)
            </a>
          </p>
        </div>
        <ContactLinks />
      </div>
      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {profile.nom} · <Link to="/contact">Me contacter</Link>
        </p>
      </div>
    </footer>
  );
}
