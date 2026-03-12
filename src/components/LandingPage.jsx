// Project-defined components
import SplashImage from "./SplashImage";
import Navbar from "./navbar/Navbar";
import Headers from "./headers/Headers";
import About from "./about/About";
import Experience from "./experience/Experience";
import Portfolio from "./portfolio/Portfolio";
import Footer from "./footer/Footer";
// import Contact from "./contact/Contact";

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
          <div className="contact-card">
            <p className="contact-text">
              I'd love to hear from you! Whether you have a question, a project
              idea, or just want to chat, feel free to reach out. Let's connect
              and create something amazing together.
            </p>
            <a
              href="mailto:ines@rosito.ca"
              className="poppins-medium contact-button"
            >
              <button>Contact Me</button>
            </a>
          </div>

          {/* 
            Contact form awaiting full implementation
            <Contact /> 
          */}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LandingPage;
