const SquareCard = ({ title, description, buttonText, link }) => {
  return (
    <div className=" card square-card">
      <div className="square-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="square-button">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default SquareCard;
