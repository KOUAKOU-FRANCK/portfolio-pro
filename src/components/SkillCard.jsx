export default function SkillCard({ titre, description, competences, icone }) {
  return (
    <article className="skill-card">
      {icone && <span className="skill-card__icone">{icone}</span>}
      <h3>{titre}</h3>
      {description && <p className="muted">{description}</p>}
      <ul className="skill-card__list">
        {competences.map((c) => (
          <li key={c.nom}>
            <span>{c.nom}</span>
            {c.niveau && <span className="badge">{c.niveau}</span>}
          </li>
        ))}
      </ul>
    </article>
  );
}
