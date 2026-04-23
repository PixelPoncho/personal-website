const ExperienceEntry = ({
  className = "",
  title,
  organization,
  date,
  bullets = [],
  subRoles = [],
}) => (
  <div className={`${className} experience-container`}>
    <div className="entry-header">
      <h3 className="job-title poppins-semibold">{title}</h3>
      <h3 className="date poppins-light">{date}</h3>
    </div>
    <div className="poppins-regular">{organization}</div>

    {/* Main bullets */}
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

    {/* sub-roles  */}
    {subRoles.length > 0 &&
      subRoles.map((section, idx) => (
        <div key={idx} className="subRole-section">
          <p className="subRole-title">{section.subRoleTitle}</p>
          {section.subRoleBullets && section.subRoleBullets.length > 0 && (
            <ul className="bullet-container">
              {section.subRoleBullets.map((b, i) => (
                <li
                  key={i}
                  className="bullet"
                  dangerouslySetInnerHTML={{ __html: b }}
                />
              ))}
            </ul>
          )}
        </div>
      ))}
  </div>
);

export default ExperienceEntry;
