// Package Imports
import { useWindowScroll } from "@uidotdev/usehooks";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [{ x, y }, scrollTo] = useWindowScroll();
  const [shouldRenderButton, setShouldRenderButton] = useState(false);

  useEffect(() => {
    if (y > 0) {
      setShouldRenderButton(true);
    } else {
      const timer = setTimeout(() => setShouldRenderButton(false), 300);
      return () => clearTimeout(timer);
    }
  }, [y]);

  return (
    <div
      className={`scroll-button ${!shouldRenderButton ? "hidden" : ""}`}
      onClick={() => scrollTo({ left: 0, top: 0, behavior: "smooth" })}
    >
      <BsArrowUpCircleFill aria-label="Scroll to top" />
    </div>
  );
};

export default ScrollToTopButton;
