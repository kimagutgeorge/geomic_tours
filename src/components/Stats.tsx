import React from "react";
const Stats = () => {
  return (
    <div className="d-flex justify-content-center row mt-20-vh categories h-80-vh">
      <div className="col-3">
        <div className="stat-card justify-content-center">
          <div className="stat-card-inner position-relative d-flex">
            <div className="stat-card-inner-bg position-absolute h-100 w-100"></div>
            <div className="stat-card-inner-front position-absolute h-100 w-100 d-flex justify-content-center">
              <div className="stat-card-inner-front-text h-100 d-flex flex-column justify-content-center">
                <h4 className="d-flex justify-content-center w-100 dft-color">
                  3
                </h4>
                <p className="d-flex justify-content-center w-100 dft-color">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of card */}
      <div className="col-3 d-flex flex-column justify-content-end h-100">
        <div className="stat-card justify-content-center">
          <div className="stat-card-inner position-relative d-flex">
            <div className="stat-card-inner-bg position-absolute h-100 w-100"></div>
            <div className="stat-card-inner-front position-absolute h-100 w-100 d-flex justify-content-center">
              <div className="stat-card-inner-front-text h-100 d-flex flex-column justify-content-center">
                <h4 className="d-flex justify-content-center w-100 dft-color">
                  97%
                </h4>
                <p className="d-flex justify-content-center w-100 dft-color">
                  Retention Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of card */}
      <div className="col-3">
        <div className="stat-card justify-content-center position-relative">
          <div className="stat-card-inner position-relative d-flex">
            <div className="stat-card-inner-bg position-absolute h-100 w-100"></div>
            <div className="stat-card-inner-front position-absolute h-100 w-100 d-flex justify-content-center">
              <div className="stat-card-inner-front-text h-100 d-flex flex-column justify-content-center">
                <h4 className="d-flex justify-content-center w-100 dft-color">
                  103
                </h4>
                <p className="d-flex justify-content-center w-100 dft-color">
                  Complete Tours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of card */}
      <div className="col-3 col-3 d-flex flex-column justify-content-end h-100">
        <div className="stat-card justify-content-center">
          <div className="stat-card-inner position-relative d-flex">
            <div className="stat-card-inner-bg position-absolute h-100 w-100"></div>
            <div className="stat-card-inner-front position-absolute h-100 w-100 d-flex justify-content-center">
              <div className="stat-card-inner-front-text h-100 d-flex flex-column justify-content-center">
                <h4 className="d-flex justify-content-center w-100 dft-color">
                  164
                </h4>
                <p className="d-flex justify-content-center w-100 dft-color">
                  Happy Travellers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of card */}
    </div>
  );
};
export default Stats;
