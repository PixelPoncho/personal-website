// Main Portfolio image imports
import hackYourLearningMockup from "../../assets/mockups/hackYourLearning.png";
import hackYourLearningMockupPreview from "../../assets/mockups/hackYourLearningPreview.png";
import zooenggMockup from "../../assets/mockups/zooengg.png";
import zooenggMockupPreview from "../../assets/mockups/zooenggPreview.png";
import rositoMockup from "../../assets/mockups/rosito.png";
import rositoMockupPreview from "../../assets/mockups/rositoPreview.png";

// Additional Portfolio imports
import celcBranding from "../../assets/pdf/celcBrandingGuide.pdf";

const mainPortfolioEntries = [
  {
    title: "rosito.ca",
    subtitle: "Personal Portfolio Website",
    tech: ["React", "HTML", "CSS", "Git", "Figma"],
    projectLink: "https://rosito.ca",
    githubLink: "https://github.com/PixelPoncho/personal-website",
    figmaLink: rositoMockup,
    image: rositoMockupPreview,
  },
  {
    title: "zooengg.ca",
    subtitle: "Electrical and Software Engineering Students' Society Website",
    tech: ["React", "CSS", "MUI", "Firebase", "Git", "Figma"],
    projectLink: "https://zooengg.ca/",
    githubLink: "https://github.com/zoouofc/new-website",
    figmaLink: zooenggMockup,
    image: zooenggMockupPreview,
  },
  {
    title: "hackyourlearning.ca",
    subtitle: "Website for University club hosting hackathons and workshops",
    tech: ["React", "SCSS", "Firebase", "Git", "Figma"],
    projectLink: "",
    githubLink: "https://github.com/Hack-Your-Learning/hackyourlearning-site",
    figmaLink: hackYourLearningMockup,
    image: hackYourLearningMockupPreview,
  },
];

export const additionalPortfolioEntries = [
  {
    title: "CELC 2023",
    description:
      "Created conference branding, visual identity, merchandise, sponsorship & delegate materials, and more",
    buttonText: "View Branding Guide",
    link: celcBranding,
  },
];

export default mainPortfolioEntries;
