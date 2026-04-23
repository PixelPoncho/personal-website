// Package Imports
import { BsGithub, BsLink45Deg, BsFileEarmarkImageFill } from "react-icons/bs";

const IconButtons = ({ projectLink, githubLink, figmaLink }) => (
  <div className="portfolio-entry-icons">
    {projectLink && (
      <a
        className="portfolio-entry-icon"
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
        className="portfolio-entry-icon"
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
        className="portfolio-entry-icon"
        href={figmaLink}
        aria-label="View Figma Mockup"
        target="_blank"
        rel="noreferrer"
      >
        <BsFileEarmarkImageFill />
      </a>
    )}
  </div>
);

export default IconButtons;
