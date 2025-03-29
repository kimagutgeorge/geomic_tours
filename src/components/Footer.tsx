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
      </div>
      <div className="col-12 footer-bottom">
        <div className="categories col-12 row">
          <div className="col-4">
            <img src="geomic-logo-dark.png" className="img-logo ms-4" alt="" />
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
            <p className="section-title">Quick Links</p>
            <li>
              <a href="#" className="text-white">
                <i className="fa-solid fa-angle-right text-white"></i> Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                <i className="fa-solid fa-angle-right text-white"></i> About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                <i className="fa-solid fa-angle-right text-white"></i> Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                <i className="fa-solid fa-angle-right text-white"></i> Contact
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
                <p className="text-white f-15">
                  <a href="" className="text-white">
                    +(254) 759 200 998
                  </a>
                </p>
                <p className="text-white f-15">
                  <a href="" className="text-white">
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
                <p className="text-white f-15">
                  <a href="" className="text-white">
                    info@geomictours.com
                  </a>
                </p>
                <p className="text-white f-15">
                  <a href="" className="text-white">
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
                <p className="text-white f-15">Tom Mboya Street, Mombasa</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <p className="section-title">Latest Blogs</p>
            <li>
              <a href="#" className="text-white">
                <i className="fa-solid fa-angle-right text-white"></i> Wild
                Beasts of Amboseli
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                <i className="fa-solid fa-angle-right text-white"></i>{" "}
                Endangered kiwis
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                <i className="fa-solid fa-angle-right text-white"></i> 5 Reason
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
