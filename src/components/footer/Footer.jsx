// Imported Assets
import mailIcon from "../../assets/icons/mail.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import resumeIcon from "../../assets/icons/resume.svg";
import resumePdf from "../../assets/pdf/RositoResume.pdf";

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-icons">
      <a href="mailto:ines@rosito.ca" aria-label="Email">
        <img src={mailIcon} alt="email" />
      </a>
      <a
        href="https://github.com/PixelPoncho"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a
        href="https://linkedin.com/in/irosito"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
      <a
        href={resumePdf}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
      >
        <img src={resumeIcon} alt="Resume" />
      </a>
    </div>
    <p className="footer-text">Programmed by hand with ♡</p>
  </footer>
);

export default Footer;
