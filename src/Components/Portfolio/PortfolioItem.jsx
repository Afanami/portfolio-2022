import React from "react";

export default function PortfolioItem({
  projectName,
  projectImage,
  github,
  demo,
}) {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={projectImage} alt={projectName} />
      </div>
      <h3>{projectName}</h3>
      <div className="portfolio__item-cta">
        <a href={github} className="btn" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href={demo}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer">
          Live Demo
        </a>
      </div>
    </article>
  );
}
