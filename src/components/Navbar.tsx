import React, { useState } from "react";
import { Link } from "react-router";
import DarkButton from "./buttons/DefaultButton";

const Navbar = () => {
  const [viewNavBar, setViewNavBar] = useState(false);
  function viewNavigation(status) {
    const nav_status = status;
    if (nav_status == "show") {
      setViewNavBar(true);
      document.body.style.overflow = "hidden";
    } else {
      setViewNavBar(false);
      document.body.style.overflow = "scroll";
    }
  }
  return (
    <>
      {viewNavBar && (
        <div
          className="dark-panel h-100-vh bg-black w-100 position-fixed"
          style={{ zIndex: "1600", opacity: "0.5" }}
        ></div>
      )}
      {viewNavBar && (
        <div
          className="phone-bar h-100-vh bg-white d-block position-fixed"
          style={{ zIndex: "1610" }}
        >
          <div className="w-100 position-relative h-100">
            {/* close icon */}
            <div
              className="position-absolute d-flex justify-content-end mt-2"
              style={{ zIndex: "1700", width: "calc(100% + 20px)" }}
            >
              <div
                className="d-flex justify-content-center bg-primary rounded-circle"
                style={{ width: "40px", height: "40px" }}
                onClick={() => {
                  viewNavigation("hide");
                }}
              >
                <div className="d-flex flex-column justify-content-center h-100">
                  <i className="fa-solid fa-close text-white"></i>
                </div>
              </div>
            </div>
            {/* logo */}
            <div className="w-100 p-2" style={{ backgroundColor: "#d8f3f9" }}>
              <img
                src="/geomic-logo.png"
                className=" ms-4 mt-2"
                style={{ width: "70%" }}
                alt=""
              />
            </div>
            <li className="border-bottom p-2">
              <Link to="/" className="w-fit nav-a dft-color mt-4 ms-3">
                Home
              </Link>
            </li>
            <li className="border-bottom p-2">
              <Link
                to="/destinations"
                className="w-fit nav-a dft-color mt-4 ms-3"
              >
                Destinations
              </Link>
            </li>
            <li className="border-bottom p-2">
              <Link to="/trips" className="w-fit nav-a dft-color mt-4 ms-3">
                Trips & Safaris
              </Link>
            </li>
            <li className="border-bottom p-2">
              <Link to="/blogs" className="w-fit nav-a dft-color mt-4 ms-3">
                Blog
              </Link>
            </li>
            <li className="border-bottom p-2">
              <Link to="/about-us" className="w-fit nav-a dft-color mt-4 ms-3">
                About us
              </Link>
            </li>
            <li className="border-bottom p-2">
              <Link
                to="/contact-us"
                className="w-fit nav-a dft-color mt-4 ms-3"
              >
                Contact us
              </Link>
            </li>
          </div>
        </div>
      )}
      <div className="nav-bar row col-12 d-flex">
        <div className="col-6 d-flex">
          <p className="fw-s-bold f-14">
            <span className="w-border dft-color">
              <i className="fa-solid fa-location-dot my-icon"></i> Tom Mboya
              Street, Mombasa
            </span>
            <span className="ms-2">
              <i className="fa-solid fa-clock my-icon"></i> Mon - Friday: 0800 h
            </span>
          </p>
        </div>
        <div className="col-6 flex-row-reverse d-flex  flex-nowrap">
          <Link to="/contact-us" className="ms-2 dft-color">
            support
          </Link>
          <Link to="/faqs" className="ms-2 dft-color">
            faqs
          </Link>
          <select className="w-fit btn-lang">
            <option value="language">language</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>
      </div>
      <div
        className="w-100 nav-bar-bottom col-12 d-flex flex-wrap position-sticky bg-white p-3"
        style={{
          position: "sticky",
          top: "0",
          zIndex: "1500",
          boxShadow: "0 2px 2px -2px #113d48",
        }}
      >
        <div className="col-3">
          <img src="/geomic-logo.png" className="img-logo ms-4" alt="" />
        </div>
        <div className="col-6 d-flex">
          <Link to="/" className="w-fit nav-a dft-color mt-4 m2-3">
            Home
          </Link>

          <Link to="/destinations" className="w-fit nav-a dft-color mt-4 ms-3">
            Destinations
          </Link>
          <Link to="/trips" className="w-fit nav-a dft-color mt-4 ms-3">
            Trips & Safaris
          </Link>

          <Link to="/blogs" className="w-fit nav-a dft-color mt-4 ms-3">
            Blog
          </Link>
          <Link to="/about-us" className="w-fit nav-a dft-color mt-4 ms-3">
            About us
          </Link>
          <Link to="/contact-us" className="w-fit nav-a dft-color mt-4 ms-3">
            Contact us
          </Link>
        </div>
        <div className="col-3 d-flex flex-row-reverse">
          <DarkButton
            button_classname="w-fit btn-default-dark text-white"
            button_icon_color="light-svg in-btn"
            button_text="Request A Quote"
            button_icon="icon"
            button_link="/contact-us"
            button_span_color="text-white"
          />
          <i
            className="fa-solid fa-bars text-white fs-4 p-3 bg-icon rounded-3"
            style={{ height: "fit-content", cursor: "pointer" }}
            onClick={() => {
              viewNavigation("show");
            }}
          ></i>
        </div>
      </div>
    </>
  );
};
export default Navbar;
