import React from "react";
const DestinationList = () => {
  return (
    <>
      <div className="destinations destination-list categories row mt-20-vh position-relative">
        <div className="col-12 d-flex flex-wrap justify-content-center">
          <p className="title-italic fw-bold w-100 d-flex justify-content-center">
            Services We Offer
          </p>
          <h5 className="section-title fw-bold justify-content-center">
            Our Amazing Services
          </h5>
        </div>
        <div className="destination-inner tours mt-10-vh col-100 d-flex flex-wrap">
          <div className="card-wrapper col-3 vh-60">
            <div className="card h-100 position-relative">
              <div className="destination-card-text f-14 text-white position-absolute">
                (2 Trips)
              </div>
              <img
                className="card-img-top h-80"
                src="destinations/mombasa.jpg"
                alt="Card image cap"
              />
            </div>
            <div className="card-body mt-2">
              <a href="" className="dft-color">
                Mombasa <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          {/* end of card */}
          <div className="card-wrapper col-3 vh-60">
            <div className="card h-100 position-relative">
              <div className="destination-card-text f-14 text-white position-absolute">
                (1 Trips)
              </div>
              <img
                className="card-img-top h-80"
                src="destinations/baringo.jpg"
                alt="Card image cap"
              />
            </div>
            <div className="card-body mt-2">
              <a href="" className="dft-color">
                Baringo <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          {/* end of card */}
          <div className="card-wrapper col-3 vh-60">
            <div className="card h-100 position-relative">
              <div className="destination-card-text f-14 text-white position-absolute">
                (20 Trips)
              </div>
              <img
                className="card-img-top h-80"
                src="destinations/maasai.jpg"
                alt="Card image cap"
              />
            </div>
            <div className="card-body mt-2">
              <a href="" className="dft-color">
                Maasai Mara <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          {/* end of card */}
          <div className="card-wrapper col-3 vh-60">
            <div className="card h-100 position-relative">
              <div className="destination-card-text f-14 text-white position-absolute">
                (1 Trip)
              </div>
              <img
                className="card-img-top h-80"
                src="destinations/mt-kenya.jpg"
                alt="Card image cap"
              />
            </div>
            <div className="card-body mt-2">
              <a href="" className="dft-color">
                Mt. Kenya <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          {/* end of card */}
          <div className="card-wrapper col-3 vh-60">
            <div className="card h-100 position-relative">
              <div className="destination-card-text f-14 text-white position-absolute">
                (1 Trip)
              </div>
              <img
                className="card-img-top h-80"
                src="destinations/taita.jpg"
                alt="Card image cap"
              />
            </div>
            <div className="card-body mt-2">
              <a href="" className="dft-color">
                Tsavo National Park <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          {/* end of card */}
          <div className="card-wrapper col-3 vh-60">
            <div className="card h-100 position-relative">
              <div className="destination-card-text f-14 text-white position-absolute">
                (6 Trips)
              </div>
              <img
                className="card-img-top h-80"
                src="slider/slider3.jpg"
                alt="Card image cap"
              />
            </div>
            <div className="card-body mt-2">
              <a href="" className="dft-color">
                Diani <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          {/* end of card */}
        </div>
      </div>
    </>
  );
};
export default DestinationList;
