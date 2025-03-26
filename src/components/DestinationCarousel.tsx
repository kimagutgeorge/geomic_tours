import React, { useState, useEffect, useRef } from "react";

const DestinationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWrapperRef = useRef(null);
  const totalCards = 8; // Total number of cards
  const visibleCards = 4; // Number of cards to show at once

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
    <div className="destinations categories row mt-20-vh position-relative">
      <div className="col-12 d-flex flex-wrap justify-content-center">
        <p className="title-italic fw-bold w-100 d-flex justify-content-center">
          Best Recommended Tours
        </p>
        <h5 className="section-title fw-bold justify-content-center">
          Popular Trips we offer for all
        </h5>
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
              <div className="card">
                <img
                  className="card-img-top"
                  src="slider/slider3.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title dft-color-2">Tushuke Mombasa</h5>
                  <p className="custom-light-color">
                    <i className="fa-solid fa-location-crosshairs custom-light-color"></i>{" "}
                    Mombasa
                  </p>
                  <h4 className="section-title">
                    600.00 <span className="f-14">USD</span>
                  </h4>
                  <div className="col-12 d-flex mt-5-vh">
                    <div className="col-6">
                      <p className="dft-color mt-2">
                        <i className="fa-solid fa-clock custom-light-color"></i>{" "}
                        6 Days
                      </p>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                      <a href="#" className="btn btn-default-white">
                        <span className="dft-color">
                          Book Now <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationCarousel;
