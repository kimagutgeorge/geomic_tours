import React from "react";
import { Link } from "react-router-dom";

interface BannerProps {
  page_title: string;
  page_name?: string;
  destination_name?: string;
}

const HomeBanner = ({
  page_name,
  destination_name,
  page_title,
}: BannerProps) => {
  return (
    <div className="col-12 position-relative vh-50 banner">
      <div className="w-100 h-100 banner-bg bg-black position-absolute"></div>
      <div className="w-100 h-100 banner-front-text position-absolute d-flex justify-content-center">
        <div className="h-100 banner-text-inner d-flex flex-column justify-content-center">
          <h2 className="section-title text-white w-100 d-flex justify-content-center">
            {page_title} {destination_name && ": " + destination_name}
          </h2>
          <p className="text-white w-100 d-flex justify-content-center">
            <span>
              <Link to="/" className="text-white text-decoration-none">
                {" "}
                {/* Added text-decoration-none */}
                Home |
              </Link>
            </span>
            {
              <span className="text-white ms-2">
                {destination_name ? destination_name : page_name}
              </span>
            }
          </p>
        </div>
      </div>
      <div className="w-100 h-100 banner-img-container">
        <img
          src="/slider/safari.jpg"
          alt="Banner"
          className="w-100 h-100 object-fit-cover"
        />{" "}
        {/* Added alt and improved styling */}
      </div>
    </div>
  );
};

export default HomeBanner;
