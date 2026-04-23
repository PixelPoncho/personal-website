// Main Portfolio image imports
import hackYourLearningMockup from "../../assets/mockups/hackYourLearning.png";
import hackYourLearningMockupPreview from "../../assets/mockups/hackYourLearningPreview.png";
import zooenggMockup from "../../assets/mockups/zooengg.png";
import zooenggMockupPreview from "../../assets/mockups/zooenggPreview.png";
import rositoMockup from "../../assets/mockups/rosito.png";
import rositoMockupPreview from "../../assets/mockups/rositoPreview.png";

// Additional Portfolio imports
import celcBranding from "../../assets/pdf/celcBrandingGuide.pdf";
import zooMarketing from "../../assets/mockups/zooMarketing.png";
import iconSeries from "../../assets/mockups/iconSeries.png";

const mainPortfolioEntries = [
  {
    title: "rosito.ca",
    subtitle: "My personal portfolio website.",
    tech: ["React", "HTML", "CSS", "Git", "Figma"],
    projectLink: "https://rosito.ca",
    githubLink: "https://github.com/PixelPoncho/personal-website",
    figmaLink: rositoMockup,
    image: rositoMockupPreview,
  },
  {
    title: "zooengg.ca",
    subtitle:
      "Website for the Electrical and Software Engineering Students' Society (ZOO) at UCalgary.",
    tech: ["React", "CSS", "MUI", "Firebase", "Git", "Figma"],
    projectLink: "https://zooengg.ca/",
    githubLink: "https://github.com/zoouofc/new-website",
    figmaLink: zooenggMockup,
    image: zooenggMockupPreview,
  },
  {
    title: "hackyourlearning.ca",
    subtitle: "Website for UCalgary club hosting hackathons and workshops.",
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
      "Created conference branding, visual identity, merchandise, sponsorship & delegate materials, and more.",
    buttonText: "View Branding Guide",
    link: celcBranding,
  },
  {
    title: "RollPlay",
    description:
      "Coursework for a Human-Computer Interaction course. Prototype is for a D&D session assistant type app.",
    buttonText: "View Figma Prototype",
    link: "https://www.figma.com/proto/VUXa9qQxBg21JoXzxtajIM/Human-User-Interaction-Studies?page-id=0%3A1&node-id=682-18500&p=f&viewport=487%2C585%2C0.02&t=ycOrDRHRiys7RvIq-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=682%3A18500&show-proto-sidebar=1",
  },
  {
    title: "ZOO Marketing Posts",
    description:
      "Just a segment of the all the marketing posts created for ZOO. More can be found at zooengg.ca.",
    buttonText: "View Posts",
    link: zooMarketing,
  },
  {
    title: "Icon Series",
    description:
      "A couple of icons created at the request of friends for their profiles.",
    buttonText: "View Images",
    link: iconSeries,
  },
];

export default mainPortfolioEntries;
