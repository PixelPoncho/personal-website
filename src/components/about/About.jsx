// Project-defined components
import RoleCard from "./RoleCard";

// Relevant Data
import roleEntries from "./roleEntries.json";

const About = () => {
  return (
    <>
      <p className="about-text">
        I'm a full-stack software engineer with hands-on experience building and
        maintaining scalable web applications. I have a strong focus on
        front-end development, creating interactive UI components responsive
        designs, and data-driven visualizations.
      </p>
      <p className="about-text">
        I'm comfortable working RESTful API and writing clean, maintainable
        code. I've worked across the full development lifecycle, including
        gathering requirements and designing features to building, testing, and
        deploying in Agile environments. I enjoy collaborating with teams and
        turning complex technical ideas into simple, user-friendly solutions.
      </p>
      <p className="about-text">
        In my free time you can catch me{" "}
        <a
          href="https://letterboxd.com/PixelPoncho/"
          target="_blank"
          rel="noopener noreferrer"
        >
          watching movies
        </a>
        , playing a variety of video games, or doing all kinds of arts and
        crafts.
      </p>

      <div className="role-container">
        {roleEntries.map((role, idx) => (
          <RoleCard
            key={idx}
            icon={role.icon}
            title={role.title}
            description={role.description}
            sections={role.sections}
          />
        ))}
      </div>
    </>
  );
};

export default About;
