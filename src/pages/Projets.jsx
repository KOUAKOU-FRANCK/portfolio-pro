import { visibleProjects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projets() {
  return (
    <>
      <title>Projets informatiques — Kouakou Kouadio Franck</title>
      <section className="page-header">
        <div className="container">
          <h1>Projets informatiques</h1>
          <p>Mes réalisations, avec leurs objectifs, leurs fonctionnalités et les technologies utilisées.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {visibleProjects.length > 0 ? (
            <div className="grid grid--2">
              {visibleProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          ) : (
            <p className="muted">Les fiches de projets sont en cours de rédaction.</p>
          )}
        </div>
      </section>
    </>
  );
}
