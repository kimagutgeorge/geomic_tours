import React from "react";
import Carousel from "react-bootstrap/Carousel";
import DefaultButton from "../buttons/DefaultButton";

const SingleBlogContent = () => {
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
                      src="/slider/slider.jpg"
                      alt="First slide"
                    />
                  </div>
                </Carousel.Item>
                {/* end of slider */}
                <Carousel.Item className="p-relative h-100">
                  <div className="carousel-item-inner">
                    <img
                      className="d-block w-100"
                      src="/slider/slider2.jpg"
                      alt="First slide"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item className="p-relative h-100">
                  <div className="carousel-item-inner">
                    <img
                      className="d-block w-100"
                      src="/slider/slider3.jpg"
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
                <div className="text-muted">
                  Welcome to Realar Residence, where sustainability meets
                  comfort in every corner. In this blog post, we’ll explore the
                  green innovations seamlessly integrated into the fabric of
                  EcoLand, creating a unique and eco-friendly living experience
                  for its residents. A platform dedicated to exploring the
                  transformative power of education. We believe that education
                  is not only a means to acquire knowledge but also a catalyst
                  for personal growth, societal progress, and global
                  development. In this blog, we aim to inspire, inform, and
                  engage readers in conversations about the latest trends,
                  insights, and innovations in the field of education. Join your
                  neighbors for an eco-friendly social gathering as the day
                  comes to a conclusion. Savor refreshments made with
                  sustainable ingredients and have discussions on sustainable
                  life. By fostering a sense of community. Michel Clarck Dinning
                  Prepare a dinner using fresh ingredients from your own garden
                  or the local CSA program. The energy-efficient appliances in
                  your kitchen make cooking a breeze while minimizing your
                  overall energy consumption. Share a meal with neighbors, The
                  quiet night offers a peaceful ambiance, reinforcing the
                  community’s commitment to a sustainable, low-impact lifestyle.
                  Living sustainably at Realar Residence is more than a choice;
                  it’s an immersive experience that shapes every moment of your
                  day. From the moment you wake up in your solar-powered home to
                  the evening gatherings with like-minded neighbors The
                  sustainable traveller These 6 hotels epitomise ethical luxury
                  Whether you work from home or commute to a nearby office, the
                  energy-efficient features of your home contribute to a
                  productive and eco-conscious workday. Smart home systems allow
                  you to monitor and control energy usage, ensuring that your
                  environmental impact remains minimal.
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 search-side">
            <div className="search-card w-90" style={{ height: "fit-content" }}>
              <h4 className="section-title position-relative">
                <span>Search</span>
                <div className="underline position-absolute">
                  <div className="underline-inner h-100"></div>
                </div>
              </h4>
              <div className="w-100 search-bg d-flex flex-no-wrap justify-content-end">
                <input type="text" />
                <DefaultButton
                  button_text="Search"
                  button_link="#"
                  button_classname="btn-default-dark"
                  button_span_color="text-white"
                />
              </div>
            </div>
            <div className="card mt-4">
              <h4 className="section-title position-relative">
                <span>Categories</span>
                <div className="underline position-absolute">
                  <div className="underline-inner h-100"></div>
                </div>
              </h4>
              <div className="col-12 w-100 d-flex mt-4 cat-item">
                <div className="col-10">Adventure Tours</div>
                <div className="col-2 d-flex justify-content-end">4</div>
              </div>
              <div className="col-12 w-100 d-flex mt-4 cat-item">
                <div className="col-10">Excursions</div>
                <div className="col-2 d-flex justify-content-end">2</div>
              </div>
            </div>
            <div className="card mt-4">
              <h4 className="section-title position-relative">
                <span>Recent Posts</span>
                <div className="underline position-absolute">
                  <div className="underline-inner h-100"></div>
                </div>
              </h4>
              <div className="recent-post w-100 mt-4">
                <div className="w-100 d-flex flex-no-wrap mt-4">
                  <div className="col-4 blog-img">
                    <img
                      src="/slider/slider2.jpg"
                      className="h-100 w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-8">
                    <p className="section-title">
                      Exploring The Green Spaces Of Realar
                    </p>
                    <p className="custom-light-color mt-2">
                      <i className="fa-solid fa-calendar custom-light-color"></i>{" "}
                      July 10, 2024
                    </p>
                  </div>
                </div>
                {/* end of card */}
                <div className="w-100 d-flex flex-no-wrap mt-4">
                  <div className="col-4 blog-img">
                    <img
                      src="/slider/slider3.jpg"
                      className="h-100 w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-8">
                    <p className="section-title">
                      Exploring The Green Spaces Of Realar
                    </p>
                    <p className="custom-light-color mt-2">
                      <i className="fa-solid fa-calendar custom-light-color"></i>{" "}
                      July 10, 2024
                    </p>
                  </div>
                </div>
                {/* contents here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleBlogContent;
