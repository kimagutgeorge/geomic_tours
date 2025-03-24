import React from "react";
const Categories = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide w-100 categories mt-6"
      data-ride="carousel"
    >
      {/* title */}
      <div className="col-12 d-flex flex-wrap justify-content-center">
        <p className="title-italic fw-bold w-100 d-flex justify-content-center">
          Wonderful Places For You
        </p>
        <h5 className="section-title fw-bold justify-content-center">
          Tour Categories
        </h5>
      </div>
      {/* slider body */}
      <div className="carousel-inner mt-6 category-inner">
        <div className="carousel-item row d-flex active">
          {/* card */}
          <div className="card-wrapper">
            <div className="card col-11 ms-1">
              <div className="card-top position-relative">
                <div className="position-absolute w-100 h-100">
                  <img
                    className="card-img-top h-100"
                    src="slider/slider.jpg"
                    alt="Card image cap0"
                  />
                </div>
                <div className="card-top-cover position-absolute w-100 bg-black opacity-50"></div>
              </div>
              <div className="card-body d-flex flex-wrap justify-content-center">
                <h5 className="card-title dft-color-2 w-100 d-flex justify-content-center">
                  Cycling
                </h5>
                <p className="card-text sm-text">See More</p>
              </div>
            </div>
          </div>
          {/* end of card */}
          <div className="card-wrapper">
            <div className="card col-11 ms-1">
              <div className="card-top position-relative">
                <div className="position-absolute w-100 h-100">
                  <img
                    className="card-img-top h-100"
                    src="slider/slider.jpg"
                    alt="Card image cap0"
                  />
                </div>
                <div className="card-top-cover position-absolute w-100 bg-black opacity-50"></div>
              </div>
              <div className="card-body d-flex flex-wrap justify-content-center">
                <h5 className="card-title dft-color-2 w-100 d-flex justify-content-center">
                  Cycling
                </h5>
                <p className="card-text sm-text">See More</p>
              </div>
            </div>
          </div>
          {/* end of card */}
          <div className="card-wrapper">
            <div className="card col-11 ms-1">
              <div className="card-top position-relative">
                <div className="position-absolute w-100 h-100">
                  <img
                    className="card-img-top h-100"
                    src="slider/slider.jpg"
                    alt="Card image cap0"
                  />
                </div>
                <div className="card-top-cover position-absolute w-100 bg-black opacity-50"></div>
              </div>
              <div className="card-body d-flex flex-wrap justify-content-center">
                <h5 className="card-title dft-color-2 w-100 d-flex justify-content-center">
                  Cycling
                </h5>
                <p className="card-text sm-text">See More</p>
              </div>
            </div>
          </div>
          {/* end of card */}
          <div className="card-wrapper">
            <div className="card col-11 ms-1">
              <div className="card-top position-relative">
                <div className="position-absolute w-100 h-100">
                  <img
                    className="card-img-top h-100"
                    src="slider/slider.jpg"
                    alt="Card image cap0"
                  />
                </div>
                <div className="card-top-cover position-absolute w-100 bg-black opacity-50"></div>
              </div>
              <div className="card-body d-flex flex-wrap justify-content-center">
                <h5 className="card-title dft-color-2 w-100 d-flex justify-content-center">
                  Cycling
                </h5>
                <p className="card-text sm-text">See More</p>
              </div>
            </div>
          </div>
          {/* end of card */}
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="..." alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="..." alt="Third slide" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
