// Project-defined componentes
import LeftPortfolioCard from "./LeftPortfolioCard";
import RightPortfolioCard from "./RightPortfolioCard";
import SquareCard from "./SquareCard";

// Data
import mainPortfolioEntries, {
  additionalPortfolioEntries,
} from "./portfolioEntries";

const Portfolio = () => (
  <>
    {/* Renders the multiple portfolio components */}
    {mainPortfolioEntries.map((portfolioEntry, index) => {
      const techItems = [];

      portfolioEntry.tech.forEach((t, i) => {
        techItems.push(
          <li
            key={`tech-${i}`}
            className="poppins-bold text portfolio-entry-tech-item"
          >
            {typeof t === "string" ? <p>{t}</p> : t}
          </li>,
        );
        if (i < portfolioEntry.tech.length - 1)
          techItems.push(
            <li
              key={`sep-${i}`}
              className="separator portfolio-entry-tech-item"
            >
              |
            </li>,
          );
      });

      if (index % 2) {
        return (
          <LeftPortfolioCard
            key={index}
            title={portfolioEntry.title}
            subtitle={portfolioEntry.subtitle}
            techItems={techItems}
            projectLink={portfolioEntry.projectLink}
            githubLink={portfolioEntry.githubLink}
            figmaLink={portfolioEntry.figmaLink}
            image={portfolioEntry.image}
          />
        );
      } else {
        return (
          <RightPortfolioCard
            key={index}
            title={portfolioEntry.title}
            subtitle={portfolioEntry.subtitle}
            techItems={techItems}
            projectLink={portfolioEntry.projectLink}
            githubLink={portfolioEntry.githubLink}
            figmaLink={portfolioEntry.figmaLink}
            image={portfolioEntry.image}
          />
        );
      }
    })}

    {/* Additional portfolio projects */}
    <div className="additional-portfolio-container">
      {additionalPortfolioEntries.map((portfolioEntry, index) => (
        <SquareCard
          key={index}
          title={portfolioEntry.title}
          description={portfolioEntry.description}
          buttonText={portfolioEntry.buttonText}
          link={portfolioEntry.link}
        />
      ))}
    </div>
  </>
);

export default Portfolio;
