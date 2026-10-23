import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { profile } from "../data/profile.js";
import "./Navbar.css";

const liens = [
  { to: "/", label: "Accueil" },
  { to: "/informatique", label: "Informatique" },
  { to: "/projets", label: "Projets" },
  { to: "/photographie", label: "Photographie" },
  { to: "/a-propos", label: "À propos" },
];

export default function Navbar() {
  const [ouvert, setOuvert] = useState(false);
  const [defile, setDefile] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOuvert(false);
  }, [pathname]);

  // Ombre après défilement + barre de progression de lecture.
  useEffect(() => {
    const surDefilement = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--progression", max > 0 ? window.scrollY / max : 0);
      setDefile(window.scrollY > 8);
    };
    surDefilement();
    window.addEventListener("scroll", surDefilement, { passive: true });
    window.addEventListener("resize", surDefilement);
    return () => {
      window.removeEventListener("scroll", surDefilement);
      window.removeEventListener("resize", surDefilement);
    };
  }, [pathname]);

  useEffect(() => {
    if (!ouvert) return;
    const surTouche = (e) => e.key === "Escape" && setOuvert(false);
    document.addEventListener("keydown", surTouche);
    return () => document.removeEventListener("keydown", surTouche);
  }, [ouvert]);

  return (
    <header className={`navbar${defile ? " navbar--defile" : ""}${ouvert ? " navbar--ouvert" : ""}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          <img className="navbar__avatar" src="/images/portrait.webp" alt="" width="36" height="36" />
          <span className="navbar__identite">
            <span className="navbar__nom">{profile.nom}</span>
            <span className="navbar__role">Informatique & Photographie</span>
          </span>
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

        <nav aria-label="Navigation principale" className="navbar__nav">
          <ul id="menu-principal" className={`navbar__links${ouvert ? " is-open" : ""}`}>
            {liens.map((l, i) => (
              <li key={l.to} style={{ "--i": i }}>
                <NavLink to={l.to} end={l.to === "/"}>
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="navbar__cta-item" style={{ "--i": liens.length }}>
              <NavLink to="/contact" className="navbar__cta">
                Me contacter
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <span className="navbar__progression" aria-hidden="true" />
    </header>
  );
}
