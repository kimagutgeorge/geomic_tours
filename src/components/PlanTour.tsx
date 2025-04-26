import React from "react";
import { Link } from "react-router";
const PlanTour = () => {
  return (
    <div className="col-12 d-flex mt-10-vh plan-tour">
      <div className="col-6 d-flex mt-10-vh">
        <div className="col-6 h-100 tl-img">
          <img src="slider/beach.jpg" />
        </div>
        <div className="col-6 st-img">
          <img src="slider/slider.jpg" />
          <img src="slider/slider3.jpg" />
        </div>
      </div>
      <div className="col-6  mt-10-vh tour-detail">
        <p className="title-italic fw-bold w-100">Tour Nasi</p>
        <h5 className="section-title fw-bold">Plan Your Trip</h5>
        <h5 className="section-title fw-bold">With us</h5>
        <p className="my-n-text dft-color">
          There are many variations of passages of available but the majority
          have suffered alteration in some form, by injected hum randomised
          words which don’t look even slightly.
        </p>
        <div className="col-12 mt-5-vh">
          <div className="d-flex plan-tour-us flex-no-wrap">
            <div className="plan-tour-icon d-flex justify-content-center">
              <div className="plan-tour-icon-inner d-flex flex-column justify-content-center h-100">
                <img src="icons/map3.svg" />
              </div>
            </div>
            <div className="plan-tour-text d-block">
              <h5 className="section-title">Exclusive Tour</h5>
              <p>
                There are many variations of passages of available but the
                majority.
              </p>
            </div>
          </div>
          {/* reason 2 */}
          <div className="d-flex plan-tour-us flex-no-wrap mt-2-vh">
            <div className="plan-tour-icon d-flex justify-content-center">
              <div className="plan-tour-icon-inner d-flex flex-column justify-content-center h-100">
                <img src="icons/guide.svg" />
              </div>
            </div>
            <div className="plan-tour-text d-block">
              <h5 className="section-title">Professional Guide</h5>
              <p>
                There are many variations of passages of available but the
                majority.
              </p>
            </div>
          </div>
          {/* see more */}
          <button className="btn-default-dark plan-tour-btn mt-2-vh">
            <span className="text-white">
              <Link className="text-white" to="/contact-us">Learn More <i className="fa-solid fa-arrow-right text-white"></i></Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanTour;
