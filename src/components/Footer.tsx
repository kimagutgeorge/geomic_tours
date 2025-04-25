import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="w-100 mt-10-vh footer">
      <div className="categories row">
        <div className="col-12 row footer-upper">
          <div className="col-5">
            <h4 className="section-title w-70">
              Subscribe to Our Newsletter To Stay Updated
            </h4>
          </div>
          <div className="col-7">
            <div className="form-group d-flex flex-no-wrap">
              <input type="text" placeholder="Enter Your Email" />
              <button className="btn-default-dark">
                <span className="text-white">
                  Subscribe{" "}
                  <i className="fa-solid fa-paper-plane text-white"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 footer-bottom">
        <div className="categories col-12 row">
          <div className="col-4">
            <img src="/geomic-logo-dark.png" className="img-logo ms-4" alt="" />
            <p className="text-white">
              Rapidiously myocardinate cross-platform intellectual capital
              model. Appropriately create interactive infrastructures
            </p>
            <div className="footer-icons d-flex flex-no-wrap">
              <div className="footer-icon">
                <div className="footer-icon-inner w-100 h-100 d-flex justify-content-center">
                  <div className="footer-icon-inner-inner h-100 d-flex flex-column justify-content-center">
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                </div>
              </div>
              <div className="footer-icon">
                <div className="footer-icon-inner w-100 h-100 d-flex justify-content-center">
                  <div className="footer-icon-inner-inner h-100 d-flex flex-column justify-content-center">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </div>
              <div className="footer-icon">
                <div className="footer-icon-inner w-100 h-100 d-flex justify-content-center">
                  <div className="footer-icon-inner-inner h-100 d-flex flex-column justify-content-center">
                    <i className="fa-brands fa-tiktok"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <p className="section-title text-white">Quick Links</p>
            <li>
              <Link to="/" className="text-white">
                <i className="fa-solid fa-angle-right text-white"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="text-white">
                <i className="fa-solid fa-angle-right text-white"></i> About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white">
                <i className="fa-solid fa-angle-right text-white"></i> Services
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="text-white">
                <i className="fa-solid fa-angle-right text-white"></i> Contact
              </Link>
            </li>
          </div>
          <div className="col-3 touch">
            <p className="section-title text-white">Get In Touch</p>
            <div className="d-flex flex-no-wrap">
              <div
                className="touch-icon d-flex justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#0a637a",
                  transition: "0.3s ease-in-out",
                }}
              >
                <div className="h-100 d-flex flex-column justify-content-center">
                  <i className="fa-solid fa-phone text-white"></i>
                </div>
              </div>
              <div className="touch-content d-block">
                <p className="text-white f-15">
                  <Link to="" className="text-white">
                    +(254) 759 200 998
                  </Link>
                </p>
                <p className="text-white f-15">
                  <Link to="" className="text-white">
                    +(254) 789 373 600
                  </Link>
                </p>
              </div>
            </div>
            <div className="d-flex flex-no-wrap">
              <div
                className="touch-icon d-flex justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#0a637a",
                  transition: "0.3s ease-in-out",
                }}
              >
                <div className="h-100 d-flex flex-column justify-content-center">
                  <i className="fa-solid fa-envelope text-white"></i>
                </div>
              </div>
              <div className="touch-content d-block">
                <p className="text-white f-15">
                  <Link to="" className="text-white">
                    info@geomictours.com
                  </Link>
                </p>
                <p className="text-white f-15">
                  <Link to="" className="text-white">
                    geomictours@gmail.com
                  </Link>
                </p>
              </div>
            </div>
            <div className="d-flex flex-no-wrap">
              <div
                className="touch-icon d-flex justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#0a637a",
                  transition: "0.3s ease-in-out",
                }}
              >
                <div className="h-100 d-flex flex-column justify-content-center">
                  <i className="fa-solid fa-location-dot text-white"></i>
                </div>
              </div>
              <div className="touch-content d-block">
                <p className="text-white f-15">Tom Mboya Street, Mombasa</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <p className="section-title text-white">Latest Blogs</p>
            <li>
              <Link to="#" className="text-white">
                <i className="fa-solid fa-angle-right text-white"></i> Wild
                Beasts of Amboseli
              </Link>
            </li>
            <li>
              <Link to="#" className="text-white">
                <i className="fa-solid fa-angle-right text-white"></i>{" "}
                Endangered kiwis
              </Link>
            </li>
            <li>
              <Link to="#" className="text-white">
                <i className="fa-solid fa-angle-right text-white"></i> 5 Reason
                to on a safari in Tsavo East
              </Link>
            </li>
          </div>
        </div>
      </div>
      <div
        className="footer-banner w-100"
        style={{
          borderTop: "1px solid rgb(136, 136, 136)",
        }}
      >
        <p className="text-white f-14">
          Copyright &copy; 2025 Geomic Tours. All Rights Reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
