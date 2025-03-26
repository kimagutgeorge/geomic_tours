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
          <img src="destinations/baringo.jpg" alt="slider" />
        </div>
        <div className="col-2  d-flex flex-column justify-content-center">
          <img src="destinations/mt-kenya.jpg" alt="slider" />
          <img src="destinations/maasai.jpg" alt="slider" />
        </div>
        <div className="col-2  d-flex flex-column justify-content-center">
          <img src="destinations/taita.jpg" alt="slider" />
          <img src="destinations/mombasa.jpg" alt="slider" />
        </div>
        <div className="col-2 d-flex flex-column justify-content-center">
          <img src="slider/slider3.jpg" alt="slider" />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
