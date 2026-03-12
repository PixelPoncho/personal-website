// Project-Defined Components";
import IconButtons from "./IconButtons";

const LeftPortfolioCard = ({
  title,
  subtitle,
  techItems,
  projectLink,
  githubLink,
  figmaLink,
  image,
}) => {
  return (
    <div className="portfolio-entry-left-container">
      <div className="portfolio-entry-left">
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
      <div
        className="card portfolio-entry-right"
        style={{ backgroundImage: `url(${image})`, objectFit: "cover" }}
      />
    </div>
  );
};

export default LeftPortfolioCard;
