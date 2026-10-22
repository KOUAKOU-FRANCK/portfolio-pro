const statutClasse = {
  "terminé": "badge--success",
  "en cours": "badge--warning",
  prototype: "badge--info",
};

export default function ProjectCard({ project, compact = false }) {
  const { nom, image, probleme, objectifs, fonctionnalites, technologies, role, statut, demo, github } =
    project;

  return (
    <article className="card project-card">
      <img src={image} alt={`Capture d'écran du projet ${nom}`} width="800" height="450" loading="lazy" />
      <div className="project-card__body">
        <div className="project-card__header">
          <h3>{nom}</h3>
          <span className={`badge ${statutClasse[statut] ?? ""}`}>{statut}</span>
        </div>
        <p>{probleme}</p>

        {!compact && (
          <dl className="project-card__details">
            <dt>Objectifs</dt>
            <dd>
              <ul>{objectifs.map((o) => <li key={o}>{o}</li>)}</ul>
            </dd>
            <dt>Fonctionnalités</dt>
            <dd>
              <ul>{fonctionnalites.map((f) => <li key={f}>{f}</li>)}</ul>
            </dd>
            <dt>Mon rôle</dt>
            <dd>{role}</dd>
          </dl>
        )}

        <ul className="tags" aria-label="Technologies utilisées">
          {technologies.map((t) => <li key={t}>{t}</li>)}
        </ul>

        {(demo || github) && (
          <div className="project-card__actions">
            {demo && (
              <a className="btn btn--primary" href={demo} target="_blank" rel="noopener noreferrer">
                Voir la démo
              </a>
            )}
            {github && (
              <a className="btn btn--ghost" href={github} target="_blank" rel="noopener noreferrer">
                Code sur GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
