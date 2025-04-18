import React from "react";
import { Link } from "react-router";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
const NotFound = () => {
  return (
    <>
      <div className="destinations categories row mt-10-vh h-80-vh d-flex">
        <div className="col-6 h-100 d-flex justify-content-center">
          <div className="error-inner h-100 d-flex flex-column justify-content-center">
            <h2 className="section-title fw-bold">Oops! Page Not Found</h2>
            <h4 className="section-title">
              This page seems to have slipped through a time portal
            </h4>
            <p className="custom-light-color">
              Unfortunately, something went wrong and this page does not exist.
              Try using the search or return to the previous page.
            </p>
            <Link to="/" className="btn-default-dark">
              <span className="text-white">
                <i className="fa-solid fa-arrow-left text-white"></i> Go Back
                Home
              </span>
            </Link>
          </div>
        </div>
        <div className="col-6 h-100 d-flex justify-content-center">
          <div className="error-inner h-100 d-flex flex-column justify-content-center">
            <img src="/icons/error.svg" className="error-img" alt="" />
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};
export default NotFound;
