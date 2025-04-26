import React, { useState, useEffect, useRef } from "react";
import DarkButton from "./buttons/DarkButton";
import WhiteButton from "./buttons/WhiteButton";
const BlogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWrapperRef = useRef(null);
  const totalCards = 6; // Total number of cards
  const visibleCards = 3; // Number of cards to show at once

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= totalCards - visibleCards ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [totalCards, visibleCards]);

  // Calculate the width for card-wrapper based on visible cards
  const getCardWrapperWidth = () => {
    return `${100 / visibleCards}%`;
  };

  // Calculate the transform for sliding
  const getTransformValue = () => {
    return `translateX(-${currentIndex * (100 / visibleCards)}%)`;
  };

  return (
    <div
      className="w-100 bg-very-light mt-20-vh"
      style={{ paddingTop: "1px", paddingBottom: "50px" }}
    >
      <div className="destinations categories row position-relative ">
        <div className="col-12 d-flex flex-wrap justify-content-center">
          <div className="col-6">
            <p className="title-italic fw-bold w-100 p-2">
              Latest from our articles
            </p>
            <h5 className="section-title fw-bold w-100 p-2">
              News & Articles From Geomic
            </h5>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <DarkButton
              button_text="See More Articles"
              button_icon="icon"
              button_link="/contact-us"
            />
          </div>
        </div>
        <div className="destination-inner tours mt-10-vh col-100 d-flex">
          <div
            className="cards-container"
            ref={cardWrapperRef}
            style={{
              display: "flex",
              width: `${(totalCards / visibleCards) * 100}%`,
              transform: getTransformValue(),
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {[...Array(totalCards)].map((_, index) => (
              <div
                key={index}
                className="card-wrapper"
                style={{
                  width: getCardWrapperWidth(),
                  flexShrink: 0,
                }}
              >
                <div className="card border-0 bg-transparent">
                  <img
                    className="card-img-top"
                    src="/slider/slider3.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <div className="w-100 d-flex flex-no-wrap">
                      <p
                        className="f-14 text-muted"
                        style={{
                          borderRight: "1px solid rgb(220, 220, 220)",
                          paddingRight: "8px",
                        }}
                      >
                        5 July 2024
                      </p>
                      <p className="f-14 text-muted ps-2">3 Min Read</p>
                    </div>
                    <h5 className="card-title dft-color-2">
                      University class starting soon while the lovely valley
                      team
                    </h5>
                    <div className="col-12 d-flex mt-5-vh">
                      <WhiteButton
                        button_text="Read More "
                        button_icon="icon"
                        button_link="#"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;
