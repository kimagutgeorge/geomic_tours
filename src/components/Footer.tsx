import React from "react";

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
        <div className="col-12 footer-bottom row">
          <div className="col-4">
            <img src="geomic-logo.png" className="img-logo ms-4" alt="" />
            <p className="dft-color-3">
              Rapidiously myocardinate cross-platform intellectual capital
              model. Appropriately create interactive infrastructures
            </p>
            <div className="footer-icons d-flex flex-no-wrap">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-tiktok"></i>
            </div>
          </div>
          <div className="col-2">
            <p className="section-title">Quick Links</p>
            <li>
              <a href="#" className="dft-color-3">
                <i className="fa-solid fa-angle-right dft-color-3"></i> Home
              </a>
            </li>
            <li>
              <a href="#" className="dft-color-3">
                <i className="fa-solid fa-angle-right dft-color-3"></i> About Us
              </a>
            </li>
            <li>
              <a href="#" className="dft-color-3">
                <i className="fa-solid fa-angle-right dft-color-3"></i> Services
              </a>
            </li>
            <li>
              <a href="#" className="dft-color-3">
                <i className="fa-solid fa-angle-right dft-color-3"></i> Contact
              </a>
            </li>
          </div>
          <div className="col-3 touch">
            <p className="section-title">Get In Touch</p>
            <div className="d-flex flex-no-wrap">
              <div className="touch-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="touch-content d-block">
                <p className="dft-color-3 f-15">
                  <a href="" className="dft-color-3">
                    +(254) 759 200 998
                  </a>
                </p>
                <p className="dft-color-3 f-15">
                  <a href="" className="dft-color-3">
                    +(254) 789 373 600
                  </a>
                </p>
              </div>
            </div>
            <div className="d-flex flex-no-wrap">
              <div className="touch-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="touch-content d-block">
                <p className="dft-color-3 f-15">
                  <a href="" className="dft-color-3">
                    info@geomictours.com
                  </a>
                </p>
                <p className="dft-color-3 f-15">
                  <a href="" className="dft-color-3">
                    geomictours@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="d-flex flex-no-wrap">
              <div className="touch-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="touch-content d-block">
                <p className="dft-color-3 f-15">Tom Mboya Street, Mombasa</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <p className="section-title">Latest Blogs</p>
            <li>
              <a href="#" className="dft-color-3">
                <i className="fa-solid fa-angle-right dft-color-3"></i> Wild
                Beasts of Amboseli
              </a>
            </li>
            <li>
              <a href="#" className="dft-color-3">
                <i className="fa-solid fa-angle-right dft-color-3"></i>{" "}
                Endangered kiwis
              </a>
            </li>
            <li>
              <a href="#" className="dft-color-3">
                <i className="fa-solid fa-angle-right dft-color-3"></i> 5 Reason
                to on a safari in Tsavo East
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className="footer-banner w-100">
        <p className="text-white f-14">
          Copyright &copy; 2025 Geomic Tours. All Rights Reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
