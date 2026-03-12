// Project-defined components
import SplashImage from "./SplashImage";
import Navbar from "./navbar/Navbar";
import Headers from "./headers/Headers";
import About from "./about/About";
import Experience from "./experience/Experience";
import Portfolio from "./portfolio/Portfolio";
import Footer from "./footer/Footer";
import Contact from "./contact/Contact";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <SplashImage />

      <main className="site-body">
        <section>
          <Headers title="About Me" />
          <About />
        </section>

        <section>
          <Headers title="Experience" />
          <Experience />
        </section>

        <section>
          <Headers title="Portfolio" />
          <Portfolio />
        </section>

        <section>
          <Headers title="Contact" />
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LandingPage;
