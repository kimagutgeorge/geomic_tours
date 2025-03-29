import React from "react";

const Gallery = () => {
  return (
    <div className="destinations categories row mt-20-vh position-relative">
      <div className="col-12 d-flex flex-wrap justify-content-center">
        <p className="title-italic fw-bold w-100 d-flex justify-content-center">
          Create your best Memories with us
        </p>
        <h5 className="section-title fw-bold justify-content-center">
          Latest From Our Gallery
        </h5>
      </div>
      <div className="d-flex justify-content-center mt-5-vh gallery">
        <div className="col-2 d-flex flex-column justify-content-center">
          <div className="gallery-img-container position-relative">
            <div className="gallery-inner-bg position-absolute w-100 h-100 bg-black"></div>
            <div className="gallery-inner-img-container position-absolute w-100 h-100">
              <img
                src="destinations/baringo.jpg"
                className="w-100 h-100"
                alt="slider"
              />
            </div>
            <div className="gallery-inner-text position-absolute w-100 h-100 d-flex justify-content-center">
              <div className="gallery-inner-text-inner h-100 d-flex flex-column justify-content-center">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
            </div>
          </div>
        </div>
        {/* row */}
        <div className="col-2 d-flex flex-column justify-content-center ">
          <div className="gallery-img-container position-relative">
            <div className="gallery-inner-bg position-absolute w-100 h-100 bg-black"></div>
            <div className="gallery-inner-img-container position-absolute w-100 h-100">
              <img
                src="destinations/mt-kenya.jpg"
                className="w-100 h-100"
                alt="slider"
              />
            </div>
            <div className="gallery-inner-text position-absolute w-100 h-100 d-flex justify-content-center">
              <div className="gallery-inner-text-inner h-100 d-flex flex-column justify-content-center">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
            </div>
          </div>

          <div className="gallery-img-container position-relative">
            <div className="gallery-inner-bg position-absolute w-100 h-100 bg-black"></div>
            <div className="gallery-inner-img-container position-absolute w-100 h-100">
              <img
                src="destinations/maasai.jpg"
                className="w-100 h-100"
                alt="slider"
              />
            </div>
            <div className="gallery-inner-text position-absolute w-100 h-100 d-flex justify-content-center">
              <div className="gallery-inner-text-inner h-100 d-flex flex-column justify-content-center">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
            </div>
          </div>
        </div>
        {/* column */}
        <div className="col-2 d-flex flex-column justify-content-center">
          <div className="gallery-img-container position-relative">
            <div className="gallery-inner-bg position-absolute w-100 h-100 bg-black"></div>
            <div className="gallery-inner-img-container position-absolute w-100 h-100">
              <img
                src="destinations/taita.jpg"
                className="w-100 h-100"
                alt="slider"
              />
            </div>
            <div className="gallery-inner-text position-absolute w-100 h-100 d-flex justify-content-center">
              <div className="gallery-inner-text-inner h-100 d-flex flex-column justify-content-center">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
            </div>
          </div>

          <div className="gallery-img-container position-relative">
            <div className="gallery-inner-bg position-absolute w-100 h-100 bg-black"></div>
            <div className="gallery-inner-img-container position-absolute w-100 h-100">
              <img
                src="destinations/mombasa.jpg"
                className="w-100 h-100"
                alt="slider"
              />
            </div>
            <div className="gallery-inner-text position-absolute w-100 h-100 d-flex justify-content-center">
              <div className="gallery-inner-text-inner h-100 d-flex flex-column justify-content-center">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
            </div>
          </div>
        </div>
        {/* column */}
        <div className="col-2 d-flex flex-column justify-content-center ">
          <div className="gallery-img-container position-relative">
            <div className="gallery-inner-bg position-absolute w-100 h-100 bg-black"></div>
            <div className="gallery-inner-img-container position-absolute w-100 h-100">
              <img
                src="slider/slider3.jpg"
                className="w-100 h-100"
                alt="slider"
              />
            </div>
            <div className="gallery-inner-text position-absolute w-100 h-100 d-flex justify-content-center">
              <div className="gallery-inner-text-inner h-100 d-flex flex-column justify-content-center">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
            </div>
          </div>
        </div>
        {/* end of row */}
      </div>
    </div>
  );
};
export default Gallery;
