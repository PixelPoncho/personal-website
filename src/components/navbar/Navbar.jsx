// Stylesheets
import "../../stylesheets/navbar/Navbar.css";

const Navbar = () => {
  // const [openNav, setOpenNav] = useState(false);

  // const toggleNav = () => {
  //   setOpenNav(!openNav);
  // };

  // const navList = () => <></>;

  return (
    <header>
      <nav>
        <a class="nav-link" href="#About Me">
          About
        </a>
        <a class="nav-link" href="#Experience">
          Experience
        </a>
        <a class="nav-link" href="#Portfolio">
          Portfolio
        </a>
        <a class="nav-link" href="#">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
