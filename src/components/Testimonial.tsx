import React, { useState, useEffect, useRef } from "react";

const Testimonial = () => {
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
    }, 10000);
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
          Testimonial
        </p>
        <h5 className="section-title fw-bold justify-content-center">
          What Clients Say About Us
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
              <div className="card testimonial-card">
                <div className="card-body">
                  <div className="card-body-inner d-flex justify-content-center w-100">
                    <img src="icons/user.png" />
                  </div>
                  <p className="section-title w-100 d-flex justify-content-center ">
                    George Kimagut
                  </p>
                  <p className="custom-light-color w-100 d-flex justify-content-center ">
                    Traveller
                  </p>

                  <div className="col-12 d-flex mt-5-vh d-flex justify-content-center postion-relative">
                    <p className="dft-color-3 d-flex justify-content-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui neque reiciendis aspernatur et veniam inventore
                      cupiditate laborum quaerat aut, corporis quam in, quae,
                      assumenda aliquid esse rerum. Autem, totam libero?
                    </p>
                  </div>
                  <div className="testimonial-icon w-100 d-flex justify-content-center">
                    <div className="t-icon">
                      <div className="t-icon-wrapper w-100 h-100 d-flex justify-content-center">
                        <div className="t-icon-inner w-100 h-100 d-flex flex-column justify-content-center">
                          <img src="icons/quote.png" />
                        </div>
                      </div>
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

export default Testimonial;
