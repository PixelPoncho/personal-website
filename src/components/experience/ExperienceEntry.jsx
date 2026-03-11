// styles moved to src/styles/components.css

const ExperienceEntry = ({
  className = "",
  title,
  organization,
  date,
  bullets = [],
}) => {
  return (
    <div className={`${className} experience-container`}>
      <div className="entry-header">
        <h3 className="job-title poppins-semibold">{title}</h3>
        <h3 className="date poppins-extralight">{date}</h3>
      </div>
      <div className="poppins-regular">{organization}</div>

      {bullets.length > 0 && (
        <ul className="bullet-container">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="bullet"
              // allow simple HTML in bullets (links, emphasis) when needed
              dangerouslySetInnerHTML={{ __html: b }}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceEntry;
