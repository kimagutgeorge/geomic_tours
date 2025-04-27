import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router";
import CurvedArrow from "./svg/CurvedArrorw";
import DefaultButton from "./buttons/DefaultButton";
const Slider = () => {
  return (
    <>
      <Carousel
        className="carousel slide  custom-slider position-relative"
        nextIcon={<CurvedArrow class_name="light-svg in-btn custom-btn" />}
        prevIcon={<CurvedArrow class_name="light-svg in-btn custom-btn" />}
      >
        <Carousel.Item className="p-relative h-100">
          <div className="carousel-item-inner">
            <img
              className="d-block w-100"
              src="/slider/slider.jpg"
              alt="First slide"
            />
          </div>

          <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-center col-6 with-anime">
            <h5 className="fw-bold">Tour Nasi</h5>
            <p className="fw-bold col-10 text-white">
              Let's make your best trip with us
            </p>
            <div className="d-flex flex-row mt-5 carousel-btns">
              <DefaultButton
                button_text="Explore Tours"
                button_link="/trips"
                button_icon="icon"
                button_icon_color="light-svg in-btn"
                button_classname="w-fit btn-default-light"
                button_span_color="text-white"
              />
              <DefaultButton
                button_text="Explore Tours"
                button_link="/trips"
                button_icon="icon"
                button_classname="w-fit btn-default-white ms-4"
                button_icon_color="light-svg in-btn"
                button_span_color="text-white"
              />
            </div>
          </Carousel.Caption>
          <div className="slider-dark-panel carousel-caption bg-black opacity-50"></div>
        </Carousel.Item>
        {/* end of slider */}
        <Carousel.Item className="p-relative h-100">
          <div className="carousel-item-inner">
            <video className="d-block w-100" controls autoPlay loop muted>
              <source src="/slider/slider2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-center col-6 with-anime">
            <h5 className="fw-bold">Tour Nasi</h5>
            <p className="fw-bold col-10 text-white">
              Explore beauty of the world
            </p>
            <div className="d-flex flex-row mt-5 carousel-btns">
              <DefaultButton
                button_text="Explore Tours"
                button_link="/trips"
                button_icon="icon"
                button_icon_color="light-svg in-btn"
                button_classname="w-fit btn-default-light"
                button_span_color="text-white"
              />
              <DefaultButton
                button_text="Explore Tours"
                button_link="/trips"
                button_icon="icon"
                button_classname="w-fit btn-default-white ms-4"
                button_icon_color="light-svg in-btn"
                button_span_color="text-white"
              />
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
              Discover, explore, and experience today
            </p>
            <div className="d-flex flex-row mt-5 carousel-btns">
              <DefaultButton
                button_text="Explore Tours"
                button_link="/trips"
                button_icon="icon"
                button_icon_color="light-svg in-btn"
                button_classname="w-fit btn-default-light text-white"
                button_span_color="text-white"
              />
              <DefaultButton
                button_text="Explore Tours"
                button_link="/trips"
                button_icon="icon"
                button_classname="w-fit btn-default-white ms-4"
                button_icon_color="light-svg in-btn"
                button_span_color="text-white"
              />
            </div>
          </Carousel.Caption>
          <div className="slider-dark-panel carousel-caption bg-black opacity-50"></div>
        </Carousel.Item>
      </Carousel>
      <div className="search-bar carousel-caption bg-white d-flex">
        <div className="col-3 d-flex flex-no-wrap">
          <i className="fa-solid fa-location-dot my-icon"></i>
          <select className="form-control shadow-none">
            <option>Destinations</option>
            <option>Nairobi</option>
            <option>Kapsabet</option>
            <option>Taita Taveta</option>
          </select>
        </div>

        <div className="col-3 d-flex flex-no-wrap">
          <i className="fa-solid fa-bicycle my-icon"></i>
          <select className="form-control shadow-none">
            <option>Activities</option>
            <option>Cycling</option>
            <option>Safari</option>
          </select>
        </div>

        <div className="col-3 d-flex flex-no-wrap">
          <i className="fa-solid fa-clock my-icon"></i>
          <select className="form-control shadow-none">
            <option>No. of Days</option>
            <option>1-2</option>
            <option>3-5</option>
            <option>6-8</option>
            <option>More than 8</option>
          </select>
        </div>

        <div className="col-3 d-flex flex-no-wrap">
          <i className="fa-solid fa-coins my-icon"></i>
          <select className="form-control shadow-none">
            <option>Price (Kshs)</option>
            <option>10, 000 - 10, 1000</option>
            <option>10, 001 - 20, 000</option>
            <option>20, 001 - 50, 000</option>
            <option>More than 50, 000</option>
          </select>
        </div>

        <div className="col-3 d-flex flex-no-wrap justify-content-center">
          <DefaultButton
            button_text="Search"
            button_link="/trips"
            button_classname="w-fit btn-default-dark"
            button_span_color="text-white"
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
