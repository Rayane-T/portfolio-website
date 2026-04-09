export default function MinimalCard({
  title,
  subtitle,
  period,
  description,
  tags = [],
  links,
  variant = "default",
}) {
  const isExperience = variant === "experience";

  return (
    <article className={`minimal-card ${isExperience ? "minimal-card-experience" : ""}`}>
      <div className="minimal-card-body">
        {isExperience ? (
          <div className="minimal-card-head">
            <h3>{title}</h3>
            {period ? <span className="minimal-period-badge">{period}</span> : null}
          </div>
        ) : (
          <h3>{title}</h3>
        )}

        {subtitle ? <p className="minimal-subtitle">{subtitle}</p> : null}
        <p className="minimal-description">{description}</p>

        {tags.length > 0 ? (
          <ul className="minimal-tags">
            {tags.map((tag) => (
              <li key={`${title}-${tag}`}>{tag}</li>
            ))}
          </ul>
        ) : null}

        {links ? (
          <div className="minimal-links">
            {links.primary ? (
              <a href={links.primary} target="_blank" rel="noreferrer">
                Source
              </a>
            ) : null}
            {links.secondary ? (
              <a href={links.secondary} target="_blank" rel="noreferrer">
                Live
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
