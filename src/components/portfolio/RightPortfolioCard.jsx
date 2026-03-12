// Package Imports
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import { FaFigma } from "react-icons/fa6";

const RightPortfolioCard = ({
  title,
  subtitle,
  tech,
  projectLink,
  figmaLink,
  githubLink,
}) => {
  const techItems = [];
  tech.forEach((t, i) => {
    techItems.push(
      <li key={`tech-${i}`} className="portfolio-entry-tech-item">
        {typeof t === "string" ? <p>{t}</p> : t}
      </li>,
    );
    if (i < tech.length - 1)
      techItems.push(
        <li key={`sep-${i}`} className="portfolio-entry-tech-item">
          |
        </li>,
      );
  });

  return (
    <div className="portfolio-entry-right-container">
      <div className="portfolio-entry-left"></div>

      <div className="portfolio-entry-right">
        <div className="card portfolio-entry-card">
          <h3 className="poppins-semibold portfolio-entry-title">{title}</h3>
          <p className="portfolio-entry-subtitle">{subtitle}</p>

          <ul className="portfolio-entry-tech-list">{techItems}</ul>
        </div>

        <div className="portfolio-entry-icons">
          {projectLink && (
            <a
              className="portfolio-entry-icons-btn"
              href={projectLink}
              aria-label="Open project"
              target="_blank"
              rel="noreferrer"
            >
              <BsLink45Deg />
            </a>
          )}

          {githubLink && (
            <a
              className="portfolio-entry-icons-btn"
              href={githubLink}
              aria-label="View source on GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          )}

          {figmaLink && (
            <a
              className="portfolio-entry-icons-btn"
              href={figmaLink}
              aria-label="View Figma Mockup"
              target="_blank"
              rel="noreferrer"
            >
              <FaFigma />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RightPortfolioCard;
