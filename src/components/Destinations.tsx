import React from "react";
import { useState } from "react";

const Destinations = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    <div
      className="destinations categories row mt-10-vh position-relative"
      onMouseMove={handleMouseMove}
    >
      <div
        className="cursor-follower position-absolute d-flex justify-content-center"
        style={{
          top: position.y + "px",
          left: position.x + "px",
          width: "120px",
          zIndex: "10",
          height: "100px",
          borderRadius: "50%",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none", // Ensures it doesn't interfere with mouse events
        }}
      >
        <div className="cursor-follower-inner position-relative w-100 h-100">
          <div className="cursor-follower-inner-dark-layout position-absolute w-100 h-100"></div>
          <div className="cursor-follower-text position-absolute w-100 h-100">
            <div className="cursor-follower-text-inner d-flex justify-content-center w-100 h-100">
              <div className="cursor-follower-text-inner-inner d-flex flex-column justify-content-center">
                <p className="text-white">
                  <i className="fa-solid fa-angle-left text-white"></i> DRAG{" "}
                  <i className="fa-solid fa-angle-right text-white"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section Heading */}
      <div className="col-12 d-flex flex-wrap justify-content-center">
        <p className="title-italic fw-bold w-100 d-flex justify-content-center">
          Top Destinations
        </p>
        <h5 className="section-title fw-bold justify-content-center">
          Tour Destinations
        </h5>
      </div>
      <div className="destination-inner mt-5-vh row w-100 d-flex vh-80 position-relative">
        <div className="card col-4 card-1 position-absolute overflow-hidden">
          <div className="card-inner position-relative w-100 h-100">
            <div className="card-inner-image position-absolute h-100">
              <img src="/destinations/maasai.jpg" className="h-100" />
            </div>
            <div className="card-inner-dark-layout bg-black position-absolute w-100 h-100"></div>
            <div className="card-inner-text position-absolute d-flex h-100 w-100 flex-column justify-content-end">
              <h4 className="m-2 text-white f-15">Maasai Mara</h4>
              <button className="btn-default-white m-2">
                <span className="text-white">
                  View All{" "}
                  <i className="fa-solid fa-arrow-right text-white"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="card col-4 card-2 position-absolute  overflow-hidden">
          <div className="card-inner position-relative w-100 h-100">
            <div className="card-inner-image position-absolute h-100">
              <img src="/destinations/baringo.jpg" className="h-100" />
            </div>
            <div className="card-inner-dark-layout bg-black position-absolute w-100 h-100"></div>
            <div className="card-inner-text position-absolute d-flex h-100 w-100 flex-column justify-content-end">
              <h4 className="m-2 text-white f-15">Lk. Bogoria</h4>
              <button className="btn-default-white m-2">
                <span className="text-white">
                  View All{" "}
                  <i className="fa-solid fa-arrow-right text-white"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="card col-4 active position-absolute  overflow-hidden">
          <div className="card-inner position-relative w-100 h-100">
            <div className="card-inner-image position-absolute h-100">
              <img src="/destinations/mombasa.jpg" className="h-100" />
            </div>
            <div className="card-inner-dark-layout bg-black position-absolute w-100 h-100"></div>
            <div className="card-inner-text position-absolute d-flex h-100 w-100 flex-column justify-content-end">
              <h4 className="m-2 text-white f-15">Mombasa</h4>
              <button className="btn-default-white m-2">
                <span className="text-white">
                  View All{" "}
                  <i className="fa-solid fa-arrow-right text-white"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="card col-4 card-2-right card-right position-absolute  overflow-hidden">
          <div className="card-inner position-relative w-100 h-100">
            <div className="card-inner-image position-absolute h-100">
              <img src="/destinations/mt-kenya.jpg" className="h-100" />
            </div>
            <div className="card-inner-dark-layout bg-black position-absolute w-100 h-100"></div>
            <div className="card-inner-text position-absolute d-flex h-100 w-100 flex-column justify-content-end">
              <h4 className="m-2 text-white f-15">Mt. Kenya</h4>
              <button className="btn-default-white m-2">
                <span className="text-white">
                  View All{" "}
                  <i className="fa-solid fa-arrow-right text-white"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="card col-4 card-1-right card-right position-absolute overflow-hidden">
          <div className="card-inner position-relative w-100 h-100">
            <div className="card-inner-image position-absolute h-100">
              <img src="/destinations/taita.jpg" className="h-100" />
            </div>
            <div className="card-inner-dark-layout bg-black position-absolute w-100 h-100"></div>
            <div className="card-inner-text position-absolute d-flex h-100 w-100 flex-column justify-content-end">
              <h4 className="m-2 text-white f-15">Taita Taveta</h4>
              <button className="btn-default-white m-2">
                <span className="text-white">
                  View All{" "}
                  <i className="fa-solid fa-arrow-right text-white"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Destinations;
