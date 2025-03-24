import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Categories = () => {
  return (
    <div className="categories mt-6">
      {/* Section Heading */}
      <div className="col-12 d-flex flex-wrap justify-content-center">
        <p className="title-italic fw-bold w-100 d-flex justify-content-center">
          Wonderful Places For You
        </p>
        <h5 className="section-title fw-bold justify-content-center">
          Tour Categories
        </h5>
      </div>

      {/* Bootstrap Carousel */}
      <Carousel className="mt-4" controls={false}>
        {/* First Slide */}
        <Carousel.Item>
          <div className="row d-flex justify-content-center">
            {/* Card 1 */}
            <div className="card-wrapper">
              <div className="card">
                <div className="card-top position-relative">
                  <img
                    className="card-img-top h-100"
                    src="slider/slider.jpg"
                    alt="Cycling"
                  />
                  <div className="card-top-cover position-absolute w-100 bg-black opacity-50"></div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title dft-color-2">Cycling</h5>
                  <p className="card-text sm-text">See More</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card-wrapper">
              <div className="card">
                <div className="card-top position-relative">
                  <img
                    className="card-img-top h-100"
                    src="slider/slider.jpg"
                    alt="Hiking"
                  />
                  <div className="card-top-cover position-absolute w-100 bg-black opacity-50"></div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title dft-color-2">Hiking</h5>
                  <p className="card-text sm-text">See More</p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card-wrapper">
              <div className="card">
                <div className="card-top position-relative">
                  <img
                    className="card-img-top h-100"
                    src="slider/slider.jpg"
                    alt="Hiking"
                  />
                  <div className="card-top-cover position-absolute w-100 bg-black opacity-50"></div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title dft-color-2">Hiking</h5>
                  <p className="card-text sm-text">See More</p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card-wrapper">
              <div className="card">
                <div className="card-top position-relative">
                  <img
                    className="card-img-top h-100"
                    src="slider/slider.jpg"
                    alt="Hiking"
                  />
                  <div className="card-top-cover position-absolute w-100 bg-black opacity-50"></div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title dft-color-2">Hiking</h5>
                  <p className="card-text sm-text">See More</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
          <div className="row d-flex justify-content-center">
            {/* Card 3 */}
            <div className="card-wrapper col-md-3">
              <div className="card">
                <div className="card-top position-relative">
                  <img
                    className="card-img-top h-100"
                    src="slider/slider.jpg"
                    alt="Safari"
                  />
                  <div className="card-top-cover position-absolute w-100 bg-black opacity-50"></div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title dft-color-2">Safari</h5>
                  <p className="card-text sm-text">See More</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card-wrapper col-md-3">
              <div className="card">
                <div className="card-top position-relative">
                  <img
                    className="card-img-top h-100"
                    src="slider/slider.jpg"
                    alt="Diving"
                  />
                  <div className="card-top-cover position-absolute w-100 bg-black opacity-50"></div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title dft-color-2">Diving</h5>
                  <p className="card-text sm-text">See More</p>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="card-wrapper col-md-3">
              <div className="card">
                <div className="card-top position-relative">
                  <img
                    className="card-img-top h-100"
                    src="slider/slider.jpg"
                    alt="Diving"
                  />
                  <div className="card-top-cover position-absolute w-100 bg-black opacity-50"></div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title dft-color-2">Diving</h5>
                  <p className="card-text sm-text">See More</p>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="card-wrapper col-md-3">
              <div className="card">
                <div className="card-top position-relative">
                  <img
                    className="card-img-top h-100"
                    src="slider/slider.jpg"
                    alt="Diving"
                  />
                  <div className="card-top-cover position-absolute w-100 bg-black opacity-50"></div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title dft-color-2">Diving</h5>
                  <p className="card-text sm-text">See More</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Categories;
