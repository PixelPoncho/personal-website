// Stylesheets
import "../../stylesheets/headers/Headers.css";

const Headers = ({ title }) => {
  return (
    <header class="section-header poppins-semibold" id={title}>
      <h2>{title}</h2>
      <hr />
    </header>
  );
};

export default Headers;
