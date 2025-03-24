import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Slider = () => {
  return (
    <Carousel
      className="carousel slide  custom-slider p-relative"
      nextIcon={
        <i className="custom-btn fa-solid fa-arrow-right p-absolute text-white custom-carousel-icon"></i>
      }
      prevIcon={
        <i className="custom-btn fa-solid fa-arrow-left p-absolute text-white custom-carousel-icon"></i>
      }
    >
      <Carousel.Item className="p-relative h-100">
        <div className="carousel-item-inner">
          <img
            className="d-block w-100"
            src="slider/slider.jpg"
            alt="First slide"
          />
        </div>

        <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-center col-6 with-anime">
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
        </Carousel.Caption>
        <div className="slider-dark-panel carousel-caption bg-black opacity-50"></div>
      </Carousel.Item>
      {/* end of slider */}
      <Carousel.Item className="p-relative h-100">
        <div className="carousel-item-inner">
          <img
            className="d-block w-100"
            src="slider/slider2.jpg"
            alt="First slide"
          />
        </div>

        <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-center col-6 with-anime">
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
        </Carousel.Caption>
        <div className="slider-dark-panel carousel-caption bg-black opacity-50"></div>
      </Carousel.Item>
      <Carousel.Item className="p-relative h-100">
        <div className="carousel-item-inner">
          <img
            className="d-block w-100"
            src="slider/slider3.jpg"
            alt="First slide"
          />
        </div>

        <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-center col-6 with-anime">
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
        </Carousel.Caption>
        <div className="slider-dark-panel carousel-caption bg-black opacity-50"></div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
