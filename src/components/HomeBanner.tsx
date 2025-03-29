import React from "react";
import { Link } from "react-router";
const HomeBanner = () => {
  return (
    <div className="col-12 position-relative vh-60 banner">
      <div className="w-100 h-100 banner-bg bg-black position-absolute"></div>
      <div className="w-100 h-100 banner-front-text position-absolute d-flex justify-content-center">
        <div className="h-100 banner-text-inner d-flex flex-column justify-content-center">
          <h2 className="section-title text-white w-100 d-flex justify-content-center">
            About Us
          </h2>
          <p className="text-white w-100 d-flex justify-content-center">
            <span>
              <Link to="/" className="text-white">
                Home |
              </Link>
            </span>
            <span className="text-white ms-2"> About Us</span>
          </p>
        </div>
      </div>
      <div className="w-100 h-100 banner-img-container">
        <img src="slider/safari.jpg" className="w-100" />
      </div>
    </div>
  );
};
export default HomeBanner;
