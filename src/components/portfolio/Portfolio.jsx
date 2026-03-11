// Project-defined componentes
import LeftPortfolioCard from "./LeftPortfolioCard";
import RightPortfolioCard from "./RightPortfolioCard";
import SquareCard from "./SquareCard";

export default function Portfolio() {
  const mainPortfolioEntries = [];
  return (
    <section className={`portfolio`}>
      {/* Renders the multiple portfolio components */}
      {mainPortfolioEntries.map((portfolioEntry, index) => {
        if (index % 2) {
          return (
            <RightPortfolioCard
              key={index}
              title={portfolioEntry.title}
              subtitle={portfolioEntry.subtitle}
              tech={portfolioEntry.tech}
              projectLink={portfolioEntry.projectLink}
              gitHubLink={portfolioEntry.gitHubLink}
              image={portfolioEntry.image}
            />
          );
        } else {
          return (
            <LeftPortfolioCard
              key={index}
              title={portfolioEntry.title}
              subtitle={portfolioEntry.subtitle}
              tech={portfolioEntry.tech}
              projectLink={portfolioEntry.projectLink}
              gitHubLink={portfolioEntry.gitHubLink}
              image={portfolioEntry.image}
            />
          );
        }
      })}

      {/* extra square projects */}
      <h2 className="additional-projects-header">Additional Projects</h2>
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
}
