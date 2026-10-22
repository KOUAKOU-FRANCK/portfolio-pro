import { Link } from "react-router-dom";
import { skillGroups } from "../data/skills.js";
import SkillCard from "../components/SkillCard.jsx";

export default function Informatique() {
  return (
    <>
      <title>Compétences informatiques — Kouakou Kouadio Franck</title>
      <section className="page-header">
        <div className="container">
          <h1>Informatique</h1>
          <p>
            Technicien supérieur en informatique, titulaire d'un BTS Informatique Développeur
            d'Applications, avec plus de quatre ans d'expérience.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="sr-only">Mes compétences par domaine</h2>
          <div className="grid grid--3">
            {skillGroups.map((g) => (
              <SkillCard key={g.id} {...g} />
            ))}
          </div>
          <p className="section__more">
            <Link to="/projets" className="btn btn--primary">
              Voir mes projets
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
