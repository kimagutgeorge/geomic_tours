import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="nav-bar row col-12 d-flex">
        <div className="col-6 d-flex">
          <p className="fw-s-bold f-14">
            <span className="w-border dft-color">
              <i className="fa-solid fa-location-dot my-icon"></i> Tom Mboya
              Street, Mombasa
            </span>{" "}
            <span>
              <i className="fa-solid fa-clock my-icon"></i> Mon - Friday: 0800 h
            </span>
          </p>
        </div>
        <div className="col-6 flex-row-reverse d-flex  flex-nowrap">
          <a href="/support" className="ms-2 dft-color">
            support
          </a>
          <a href="/faqs" className="ms-2 dft-color">
            faqs
          </a>
          <select className="w-fit btn-lang">
            <option value="language">language</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>
      </div>
      <div className="row col-12 d-flex flex-nowrap">
        <div className="col-3">
          <img
            src="../public/geomic-logo.png"
            className="img-logo ms-4"
            alt=""
          />
        </div>
        <div className="col-6 d-flex">
          <a href="" className="w-fit nav-a dft-color mt-4 m2-3">
            Home
          </a>
          <a href="" className="w-fit nav-a dft-color mt-4 ms-3">
            About us
          </a>
          <a href="" className="w-fit nav-a dft-color mt-4 ms-3">
            Destinations
          </a>
          <a href="" className="w-fit nav-a dft-color mt-4 ms-3">
            Trips
          </a>
          <a href="" className="w-fit nav-a dft-color mt-4 ms-3">
            Blog
          </a>
          <a href="" className="w-fit nav-a dft-color mt-4 ms-3">
            Services
          </a>
          <a href="" className="w-fit nav-a dft-color mt-4 ms-3">
            Contact us
          </a>
        </div>
        <div className="col-3 d-flex flex-row-reverse">
          <button className="w-fit btn-default-dark text-white">
            <span className="text-white">Request A Quote </span>
            <span className="text-white"> &rarr;</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
