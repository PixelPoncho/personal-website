import React from "react";

export default function SquareCard({
  title = "Project Title",
  description = "Short description goes here.",
  buttonText = "View Details",
  link = "#",
  bgColor = "#13c4b1"
}) {
  return (
    <div className="square-card" style={{ backgroundColor: bgColor }}>
      <div className="square-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="square-button">
          {buttonText}
        </a>
      </div>
    </div>
  );
}
