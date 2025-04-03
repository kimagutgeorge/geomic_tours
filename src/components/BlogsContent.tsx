import React from "react";
import Carousel from "react-bootstrap/Carousel";

const BlogsContent = () => {
  return (
    <>
      <div className="destinations blogs categories row mt-10-vh position-relative">
        <div className="destination-inner mt-5-vh row w-100 d-flex position-relative">
          <div className="col-8 d-flex justify-content-center">
            <div className="blog-card w-90">
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
                </Carousel.Item>
                <Carousel.Item className="p-relative h-100">
                  <div className="carousel-item-inner">
                    <img
                      className="d-block w-100"
                      src="slider/slider3.jpg"
                      alt="First slide"
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
              <div className="w-100 d-flex justify-content-start mt-4">
                <span className="f-14">
                  <i className="fa-solid fa-user dft-color-2"></i>
                  <span className="ms-2 dft-color-2">Kimagut</span>
                </span>
                <span className="ms-4 f-14">
                  <i className="fa-solid fa-calendar dft-color-2"></i>
                  <span className="ms-2 dft-color-2">July 10, 2025</span>
                </span>
                <span className="ms-4 f-14">
                  <i className="fa-solid fa-list dft-color-2"></i>
                  <span className="ms-2 dft-color-2">Adventure tours</span>
                </span>
              </div>
              <div className="blog-card w-100">
                <h5 className="section-title mt-2">
                  Exploring The Green Spaces Of Realar Residence Harmony with
                  Nature
                </h5>
                <p className="mt-2 custom-light-color">
                  Welcome to Realar Residence, where sustainability meets
                  comfort in every corner. In this blog post, we’ll explore the
                  green innovations seamlessly integrated into the fabric of
                  EcoLand, creating
                </p>
                <button className="btn-default-light">
                  <span className="text-white">Read More</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center">There</div>
        </div>
      </div>
    </>
  );
};
export default BlogsContent;
