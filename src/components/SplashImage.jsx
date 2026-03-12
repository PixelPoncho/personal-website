// Imported components
import React from "react";

// styles moved to src/styles/pages.css

const SplashImage = () => {
  return (
    <article className="landing">
      <div className="landing__content">
        <div className="landing__greeting">Hey there,</div>
        <h1 className="landing__title">I'm Poncho.</h1>
        <p className="landing__subtitle">
          Just another developer looking to improve. Hope you like what you see.
        </p>
      </div>
      <div className="landing__image-placeholder">
        {/* Placeholder circle for illustration */}
      </div>
    </article>
  );
};

export default SplashImage;
