// Project-defined componentes
import LeftPortfolioCard from "./LeftPortfolioCard";
import RightPortfolioCard from "./RightPortfolioCard";
import SquareCard from "./SquareCard";

// Data
import mainPortfolioEntries from "./mainPortfolioEntries";

const Portfolio = () => {
  return (
    <section className={`portfolio`}>
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

      {/* extra square projects */}
      <h2 className="card additional-projects-header poppins-semibold">
        Additional Projects
      </h2>
      <div className="portfolio__extra">
        <SquareCard
          title="celc.cfes.ca"
          description="Designed visual assets, as well as a website used to highlight important conference features to sponsors"
          buttonText="View Designs"
          link="#"
        />
        <SquareCard bgColor="#17b59e" />
        <SquareCard bgColor="#17b59e" />
      </div>
    </section>
  );
};

export default Portfolio;
