// Project-Defined Components";
import IconButtons from "./IconButtons";

const RightPortfolioCard = ({
  title,
  subtitle,
  techItems,
  projectLink,
  figmaLink,
  githubLink,
  image,
}) => (
  <div className="portfolio-entry-right-container">
    <div
      className="card portfolio-entry-left"
      style={{ backgroundImage: `url(${image})`, objectFit: "stretch" }}
    />

    <div className="portfolio-entry-right">
      <div className="card portfolio-entry-card">
        <h3 className="poppins-semibold portfolio-entry-title">{title}</h3>
        <p className="portfolio-entry-subtitle">{subtitle}</p>

        <ul className="portfolio-entry-tech-list">{techItems}</ul>
      </div>

      <IconButtons
        projectLink={projectLink}
        figmaLink={figmaLink}
        githubLink={githubLink}
      />
    </div>
  </div>
);

export default RightPortfolioCard;
