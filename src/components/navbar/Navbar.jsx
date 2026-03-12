import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <button
        className="hamburger-menu"
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={menuOpen ? "nav-open" : ""}>
        <a className="nav-link" href="#About Me" onClick={closeMenu}>
          About
        </a>
        <a className="nav-link" href="#Experience" onClick={closeMenu}>
          Experience
        </a>
        <a className="nav-link" href="#Portfolio" onClick={closeMenu}>
          Portfolio
        </a>
        <a className="nav-link" href="#Contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
