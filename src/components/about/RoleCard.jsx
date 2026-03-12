const RoleCard = ({ title, description, sections = [] }) => {
  return (
    <div className="card role-card">
      <h2 className="role-title poppins-semibold">{title}</h2>
      <p className="role-description">{description}</p>

      {sections.map((section, idx) => (
        <div key={idx} className="role-section">
          <h3 className="role-section-title">{section.title}</h3>
          <ul className="role-list">
            {section.items.map((item, itemIdx) => (
              <li key={itemIdx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RoleCard;
