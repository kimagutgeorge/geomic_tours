import React from "react";

const SingleTripContent = () => {
  return (
    <>
      <div className="destinations services categories row mt-20-vh position-relative">
        <div className="destination-inner tours col-100 d-flex flex-wrap">
          <div className="row">
            <div className="col-6 vh-70 d-flex justify-content-center">
              <div className="col-12 d-flex flex-column h-100 justify-content-center overflow-hidden">
                <div className="h-100 w-100 rounded-3 overflow-hidden img-scallable">
                  <img src="/slider/slider2.jpg" className="h-100 w-auto" />
                </div>
              </div>
            </div>
            <div className="col-6 vh-70 d-flex justify-content-center">
              <div className="col-12 d-flex flex-column h-100 justify-content-center overflow-hidden">
                <div className="h-50 w-100 rounded-3 overflow-hidden postition-relative img-scallable">
                  <div
                    className="destination-card-text f-14 text-white position-absolute"
                    style={{ cursor: "pointer" }}
                  >
                    Gallery <i className="fa-solid fa-image text-white"></i>
                  </div>
                  <img src="/slider/slider2.jpg" className="w-100 h-auto" />
                </div>
                <div className="h-50 w-100 mt-4 d-flex">
                  <div className="h-100 w-50 rounded-3 me-2 overflow-hidden img-scallable">
                    <img
                      src="/destinations/baringo.jpg "
                      className="h-100 w-auto "
                    />
                  </div>
                  <div className="h-100 w-50 rounded-3 overflow-hidden img-scallable">
                    <img
                      src="/destinations/baringo.jpg "
                      className="h-100 w-auto "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* iterinary */}
          <div className="mt-5-vh row w-100 d-flex position-relative">
            <div className="col-8 d-block">
              <div className="w-100">
                <div className="w-100 d-flex row">
                  <div className="col-10">
                    <h5 className="section-title mt-2">Island Peak Climbing</h5>
                  </div>
                  <div className="col-2 d-flex justify-content-end">
                    <div className="d-card rounded overflow-hidden">
                      <div className="w-100 h-50 d-flex justify-content-center bg-light">
                        <div className="h-100 d-flex flex-column justify-content-center">
                          <h5 className="text-white fs-3">3</h5>
                        </div>
                      </div>
                      <div className="w-100 h-50 d-flex justify-content-center">
                        <div className="h-100 d-flex flex-column justify-content-center">
                          <p className="text-muted f-14 mb-0">Days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* tour details */}
              <div className="w-100 card rounded-0 mt-5-vh p-4">
                <div className="w-100 mb-2">
                  <h5 className="section-title mt-2 fs-3 ">Trip Info</h5>
                </div>
                <div className="w-100 d-flex flex-wrap">
                  <div className="col-4 d-flex mb-2 p-2">
                    <div className="icon-holder col-2 h-100 d-flex justify-content-center">
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-building fs-2 text-secondary"></i>
                      </div>
                    </div>
                    <div className="tex-holder col-9 p-2">
                      <p className="text-secondary f-14 mb-0">Accomodation</p>
                      <h4 className="text-dark f-15 mb-0 mt-2">
                        5 Start Hotels
                      </h4>
                    </div>
                  </div>
                  {/* end of section */}
                  <div className="col-4 d-flex mb-2 p-2">
                    <div className="icon-holder col-2 h-100 d-flex justify-content-center">
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-plane-departure fs-2 text-secondary"></i>
                      </div>
                    </div>
                    <div className="tex-holder col-9 p-2">
                      <p className="text-secondary f-14 mb-0">Departure City</p>
                      <h4 className="text-dark f-15 mb-0 mt-2">Nairobi</h4>
                    </div>
                  </div>
                  {/* end of section */}
                  <div className="col-4 d-flex mb-2 p-2">
                    <div className="icon-holder col-2 h-100 d-flex justify-content-center">
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-plane-arrival fs-2 text-secondary"></i>
                      </div>
                    </div>
                    <div className="tex-holder col-9 p-2">
                      <p className="text-secondary f-14 mb-0">Arrival City</p>
                      <h4 className="text-dark f-15 mb-0 mt-2">Eldoret</h4>
                    </div>
                  </div>
                  {/* end of section */}
                  <div className="col-4 d-flex mb-2 p-2">
                    <div className="icon-holder col-2 h-100 d-flex justify-content-center">
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-thumbs-up fs-2 text-secondary"></i>
                      </div>
                    </div>
                    <div className="tex-holder col-9 p-2">
                      <p className="text-secondary f-14 mb-0">Best Season</p>
                      <h4 className="text-dark f-15 mb-0 mt-2">Jan - Apr</h4>
                    </div>
                  </div>
                  {/* end of section */}
                  <div className="col-4 d-flex mb-2 p-2">
                    <div className="icon-holder col-2 h-100 d-flex justify-content-center">
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-check fs-2 text-secondary"></i>
                      </div>
                    </div>
                    <div className="tex-holder col-9 p-2">
                      <p className="text-secondary f-14 mb-0">
                        Tour Availability
                      </p>
                      <h4 className="text-dark f-15 mb-0 mt-2">Available</h4>
                    </div>
                  </div>
                  {/* end of section */}
                  <div className="col-4 d-flex mb-2 p-2">
                    <div className="icon-holder col-2 h-100 d-flex justify-content-center">
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-bus fs-2 text-secondary"></i>
                      </div>
                    </div>
                    <div className="tex-holder col-9 p-2">
                      <p className="text-secondary f-14 mb-0">Transportation</p>
                      <h4 className="text-dark f-15 mb-0 mt-2">Bus, Car</h4>
                    </div>
                  </div>
                  {/* end of section */}
                  <div className="col-4 d-flex mb-2 p-2">
                    <div className="icon-holder col-2 h-100 d-flex justify-content-center">
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-map fs-2 text-secondary"></i>
                      </div>
                    </div>
                    <div className="tex-holder col-9 p-2">
                      <p className="text-secondary f-14 mb-0">Destination</p>
                      <h4 className="text-dark f-15 mb-0 mt-2">Taita Taveta</h4>
                    </div>
                  </div>
                  {/* end of section */}
                  <div className="col-4 d-flex mb-2 p-2">
                    <div className="icon-holder col-2 h-100 d-flex justify-content-center">
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-person fs-2 text-secondary"></i>
                      </div>
                    </div>
                    <div className="tex-holder col-9 p-2">
                      <p className="text-secondary f-14 mb-0">Minimum Age</p>
                      <h4 className="text-dark f-15 mb-0 mt-2">10</h4>
                    </div>
                  </div>
                  {/* end of section */}
                  <div className="col-4 d-flex mb-2 p-2">
                    <div className="icon-holder col-2 h-100 d-flex justify-content-center">
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-person fs-2 text-secondary"></i>
                      </div>
                    </div>
                    <div className="tex-holder col-9 p-2">
                      <p className="text-secondary f-14 mb-0">Maximu Age</p>
                      <h4 className="text-dark f-15 mb-0 mt-2">30</h4>
                    </div>
                  </div>
                  {/* end of section */}
                </div>
              </div>
              {/* tour details */}
              <div className="w-100 card rounded-0 mt-5-vh p-4">
                <div className="w-100 mb-2 d-flex">
                  <h5 className="section-title mt-2 fs-3 ">Trip Info</h5>
                </div>
              </div>
              {/* bog card inner end */}
            </div>
            {/* 2nd column */}
            <div className="col-4 search-side">
              <div className="card mt-4">
                <div
                  className="destination-card-text f-14 text-white"
                  style={{
                    cursor: "pointer",
                    width: "fit-content",
                    marginLeft: "0px",
                  }}
                >
                  12% Off
                </div>
                <div className="col-12 w-100 d-flex flex-wrap mt-4 p-2">
                  <div className="w-100 p-2 d-flex border-bottom">
                    <div className="w-50 d-flex flex-column p-2">
                      <p className="text-secondary f-14">From</p>
                      <h5 className="text-secondary fw-bold f-22">
                        $500{" "}
                        <span className="text-muted f-15 fw-lighter">
                          / Adult
                        </span>
                      </h5>
                    </div>
                    <div className="w-50 d-flex flex-column border-left p-2">
                      <p className="text-secondary f-14">From</p>
                      <h5 className="text-secondary fw-bold f-22">
                        $200{" "}
                        <span className="text-muted f-15 fw-lighter">
                          / Child
                        </span>
                      </h5>
                    </div>
                    {/* end of cards inner */}
                  </div>
                  <div className="w-100 d-flex p-2 mt-2 justify-content-center">
                    <button className="btn-default-dark w-100">
                      <span className="text-white">CHECK AVAILABILITY</span>
                    </button>
                  </div>
                  <p className="mt-4 f-14 text-muted">
                    Need help with booking?
                    <a href="#">
                      <span className="text-primary"> Send Us a Message</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTripContent;
