// Project-defined components
import ExperienceEntry from "./ExperienceEntry";

// Relevant Data
import workExperience from "./workExperience.json";
import volunteerExperience from "./volunteerExperience.json";

const Experience = () => {
  return (
    <>
      {/* Work Experience */}
      {workExperience.map((experience, index) => (
        <ExperienceEntry key={index} {...experience} />
      ))}

      {/* Volunteer Experience */}
      <div className="card">
        <h2 className="volunteer-header poppins-semibold">
          Volunteer Experience
        </h2>
        {volunteerExperience.map((experience, index) => (
          <ExperienceEntry
            key={index}
            className={"volunteer"}
            {...experience}
          />
        ))}
      </div>
    </>
  );
};

export default Experience;
