// Project-defined components
import Landing from "./Landing";
import Navbar from "./navbar/Navbar";
import Headers from "./headers/Headers";
import About from "./about/About";
import Experience from "./experience/Experience";
import Portfolio from "./portfolio/Portfolio";

// Stylesheets
import "../stylesheets/LandingPage.css";

function LandingPage() {
  return (
    <>
      <Navbar />      
      <Landing />
      <Headers title="About Me" />
      <About />
      <Headers title="Experience" />
      <Experience />
      <Headers title="Portfolio" />
      <Portfolio/>
      <Headers title="Contact" />
    </>
  );
}

export default LandingPage;
