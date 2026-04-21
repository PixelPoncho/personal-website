const SquareCard = ({ title, description, buttonText, link }) => (
  <div className=" card square-card">
    <h3 className="poppins-semibold square-title">{title}</h3>
    <p className="square-description">{description}</p>
    <a href={link} className="square-button">
      <button>{buttonText}</button>
    </a>
  </div>
);

export default SquareCard;
