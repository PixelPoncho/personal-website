// Project-defined components
import ExperienceEntry from "./ExperienceEntry";

// Relevant Data
import workExperience from "./workExperience.json";
import volunteerExperience from "./volunteerExperience.json";

// Imported asset
import resumePdf from "../../assets/pdf/RositoResume.pdf";

const Experience = () => (
  <>
    {/* Work Experience */}
    {workExperience.map((experience, index) => (
      <ExperienceEntry key={index} className={"work"} {...experience} />
    ))}

    {/* Volunteer Experience */}
    <div className="card volunteer-card">
      <h2 className="volunteer-header poppins-semibold">
        Volunteer Experience
      </h2>
      {volunteerExperience.map((experience, index) => (
        <ExperienceEntry key={index} className={"volunteer"} {...experience} />
      ))}
    </div>

    <div className="resume-card">
      <p className="resume-text">
        Like what you see? Check out my LinkedIn to learn more about my
        experience or download my resume.
      </p>
      <div className="poppins-medium resume-buttons-container">
        <a
          href="https://linkedin.com/in/irosito"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <button alt="Linkedin Redirect button">Visit My Linkedin</button>
        </a>
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
          className="resume-button"
        >
          <button alt="Download resume button">Download My Resume</button>
        </a>
      </div>
    </div>
  </>
);

export default Experience;
