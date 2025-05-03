import React from "react";

const Spinner = () => {
  return (
    <>
      <div
        className="w-100 vh-100 position-absolute bg-white d-flex justify-content-center"
        style={{ zIndex: "1000" }}
      >
        <div className="h-100 d-flex flex-column justify-content-center flex-no-wrap">
          <div className="w-100 d-flex flex-row justify-content-center">
            <div
              className="spinner-border text-primary"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
            <div
              className="spinner-grow text-primary ms-2"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Spinner;
