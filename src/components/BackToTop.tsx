import React from "react";
import { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && (
        <div
          className="back-to-top-inner w-100 h-100 d-flex justify-content-center"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <div className="back-to-top-inner-inner h-100 d-flex flex-column justify-content-center">
            <i className="back-to-top-icon back-to-top-button fa-solid fa-arrow-up text-white"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default BackToTop;
