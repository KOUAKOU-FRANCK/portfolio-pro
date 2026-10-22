import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { profile } from "../data/profile.js";

const liens = [
  { to: "/", label: "Accueil" },
  { to: "/informatique", label: "Informatique" },
  { to: "/projets", label: "Projets" },
  { to: "/photographie", label: "Photographie" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [ouvert, setOuvert] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOuvert(false);
  }, [pathname]);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          {profile.nom}
        </Link>
        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={ouvert}
          aria-controls="menu-principal"
          onClick={() => setOuvert((o) => !o)}
        >
          <span className="sr-only">{ouvert ? "Fermer le menu" : "Ouvrir le menu"}</span>
          <span className="navbar__burger" aria-hidden="true" />
        </button>
        <nav aria-label="Navigation principale">
          <ul id="menu-principal" className={`navbar__links${ouvert ? " is-open" : ""}`}>
            {liens.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === "/"}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
