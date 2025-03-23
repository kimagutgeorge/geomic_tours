import React from "react";
const Slider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide  custom-slider"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner h-100">
        <div className="carousel-item active p-relative h-100">
          <img
            className="d-block w-100"
            src="slider/slider.jpg"
            alt="First slide"
          />
          {/* slider caption */}
          <div className="carousel-caption d-flex flex-column justify-content-center col-6">
            <h5 className="fw-bold">Tour Nasi</h5>
            <p className="fw-bold col-10 text-white">
              Let's make your best trip with us
            </p>
            <div className="d-flex flex-row mt-5 carousel-btns">
              <button className="w-fit btn-default-light text-white">
                <span className="text-white">Explore Tours </span>
                <span className="text-white"> &rarr;</span>
              </button>
              <button className="w-fit btn-default-white ms-4">
                <span className="text-white">Contact us </span>
                <span className="text-white"> &rarr;</span>
              </button>
            </div>
          </div>
          {/* slider dark */}
          <div className="slider-dark-panel carousel-caption bg-black opacity-50"></div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="slider/slider2.jpg"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="slider/slider3.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev h-100"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span
          className="carousel-control-prev-icon p-relative"
          aria-hidden="true"
        >
          <i className="fa-solid fa-arrow-left p-absolute text-white"></i>
        </span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next h-100"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true">
          <i className="fa-solid fa-arrow-right p-absolute text-white"></i>
        </span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Slider;
